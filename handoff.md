# Session Handoff — 2026-07-03

> Previous handoff was 2026-06-26 (essay type, mic input, Claude eval, Cloudflare
> proxy). This rewrite covers everything added since: worksheets 4–7, the
> disabled Gyógyped. Alapismeretek mode, the `define` and `list` question types,
> session/UI changes, and forward-looking ideas for more question types.

## Current state at a glance

- **460 exercises total**, live at https://dezsovarga.github.io/psihopedagogie-speciala/
- **7 worksheets** (`w:1`–`7`), each a full exam variant, plus `w:0` shared (Vegyes)
- **Gyógyped. Alapismeretek** study-guide mode (`w:101`–`103`) exists but is **DISABLED**
- Question types and counts:

  | Type | Count | Graded by |
  |------|-------|-----------|
  | `mc` (feleletválasztós) | 199 | local |
  | `define` (fogalommeghatározás) | 78 | Claude Haiku |
  | `list` (felsorolás / enumeration) | 43 | local, partial-credit checklist |
  | `tf` (igaz/hamis) | 39 | local |
  | `fill` (kiegészítés) | 23 | local |
  | `essay` (esszé) | 22 | Claude Haiku |
  | `order` (sorrendezés) | 21 | local |
  | `short` (rövid válasz) | 18 | local (keyword) |
  | `match` (párosítás) | 17 | local |

## What was built since the last handoff

### 1. Worksheets 4, 5, 6, 7 added
Each is a complete exam variant authored from its `gyakorlas_N_megoldasok_cl.docx`
solution file (source of truth — never invented). Per worksheet: ~30 standard-type
questions in `exercises/worksheet_N.js`, plus ≥3 `define` + ≥2 `essay` in
`essays.js`, plus ≥5 `list` in `lists.js`.

- **W4** — Fogyatékosság modellje · Nyelvi zavarok · Artikulációs terápia · Kooperatív módszerek
- **W5** — Etiológia · Öröklés és fejlődés · Curriculum · Speciális curriculum
- **W6** — Intellektuális fogyatékosság · Ludoterápia · Didaktikai játék · Tanulásszervezés
- **W7** — Tanulási zavarok (diszlexia/diszgráfia/diszkalkulia) · Alapfunkciók · Oktatási értékelés

Full add-a-worksheet checklist lives in `CLAUDE.md`.

### 2. `define` question type (AI-evaluated)
Short "Határozza meg a … fogalmát" concept questions. Same schema and Claude-Haiku
evaluation path as `essay`, but shorter. **78 define questions** across all
worksheets. Maintained by hand in `essays.js`.

### 3. `list` (enumeration) question type — NEW, locally graded
Free-text recall of a set (e.g. "Sorolja fel az 5 szakaszt"), graded locally with
a **partial-credit checklist** showing ✅ hit / ⬜ miss per item. Turns
all-or-nothing essay recall into N small wins with precise study cues.

- Schema: `items[]` where each entry is a plain string **or** `{ label, alt: [...] }`.
  An item counts as recalled if the answer contains the label or any `alt`
  (case-insensitive substring). Optional `need` sets the pass threshold (default = all).
- Lives in `exercises/lists.js` (kept out of `worksheet_N.js` so the generator
  can't overwrite it). **43 list questions**, ≥5 per worksheet.
- No API cost; slots into the normal "other" session bucket automatically.

### 4. Gyógyped. Alapismeretek mode — added then DISABLED
A study-guide practice mode built from `other_materials/` (14-chapter guide),
with a chapter-select sub-screen. Chapters 1–3 were authored (`gyalap_ch*.js`,
`w:101`–`103`, 90 questions).

**It is currently disabled**: the home-screen mode card is commented out, and
questions with `w >= 100` are filtered out of every session pool (mix / structured
/ random / worksheet / review) in `app.js`. Data files and the chapters screen
markup are kept so it can be re-enabled by uncommenting the one mode card.

### 5. Session modes + selection logic
- **Vegyes (`mix`)**, **Strukturált (`structured`)**, **Véletlenszerű (`random`)**
  general modes, ordered above the numbered worksheet cards on the home screen.
- **Random-mode bug fix**: the pool condition was missing `'random'`, so it drew
  only the 5 shared `w:0` questions. Now draws from the full pool
  (`e.w < 100`) — exactly 12 other + 2 define + 1 essay = 15.
- **Structured**: fixed 10 other + 3 define + 2 essay; no lives / early-exit.
- Per-type caps enforced in `startSession`.

### 6. UI / UX changes
- **Skip button** on the exercise screen.
- **Removed auto-advance** on correct answers — the learner must click **Tovább**,
  so feedback stays visible (regression-guarded by a test).
- **Random-mode source badge** (latest): in Véletlenszerű sessions each question
  shows a green pill (e.g. `3. Változat`, `Vegyes`) next to the type badge, so the
  learner knows which worksheet it came from. Only shown when
  `session.mode === 'random'`. Helper: `worksheetLabel(w)`.
- **Chapters-screen CSS bug fix**: `#screen-chapters { display:flex }` was
  overriding `.screen{display:none}`, making it always visible; removed.

### 7. `CLAUDE.md` brought up to date
Rewrote the stale API-key section (the browser never holds the key — it's a
server-side proxy: Cloudflare Worker secret in prod, `server.js` env var on
localhost; Settings stores only the Worker URL). Documented worksheets 1–7, the
disabled gyalap mode, `define`/`list` types, and the full add-a-worksheet checklist.

---

## Ideas for MORE question types (to help memorize define/essay content)

The core weakness of `define`/`essay` is that they're all-or-nothing free recall —
the hardest retrieval mode. `list` was the **first** answer to this (shipped). Here
are the remaining ideas, in priority order. Each is "a new exercise type," so per
`CLAUDE.md` it needs TDD (failing test → schema → session-slot logic → UI) plus
hand-authored content.

### Tier 1 — highest leverage, no API cost
1. **`list` (enumeration)** — ✅ **DONE**. Partial-credit recall of a set.
2. **Faded / staged cloze (`cloze`)** — take a `modelAnswer`, blank the key terms,
   reveal fewer hints on each retry (first letters → nothing). Bridges recognition
   → full recall ("desirable difficulty"). Generatable from existing
   `modelAnswer` + `keywords`; **no new content authoring**.
3. **Flashcard / self-graded recall** — show prompt → reveal `modelAnswer` → user
   rates Again/Hard/Good/Easy, feeding the existing spaced-repetition intervals.
   Zero API cost, low friction — ideal daily warm-up over all defines.

### Tier 2 — deepen understanding, no API cost
4. **Example → concept (`scenario`)** — give a classroom situation, ask which
   concept it illustrates (mc or short). Tests *application*, which the exam
   rewards. The solution files are full of worked examples already.
5. **Compare / contrast** — many essays are comparisons (egyéni vs. kiscsoportos
   tanulás; tanácsadás vs. irányítás; endogén vs. exogén). A "name 3 differences"
   list-type forces the discrimination the exam asks for.
6. **Odd-one-out** — 4 items, 3 belong to a concept, 1 doesn't ("melyik NEM
   tartozik…"). Fast; sharpens category boundaries.

### Tier 3 — exam realism (some need AI)
7. **Two-pass essay (outline → full)** — first ask for the skeleton/keywords
   (checked locally, free), then the full prose (AI-scored). Teaches structure
   first and cuts API cost since the cheap pass filters most effort.
8. **Timed mock-exam mode** — a full session mirroring the real Titularizare
   structure and point values, with a timer and a graded report. Directly serves
   "prepare for an exam"; where AI-essay scoring earns its cost.

**Recommended next:** faded cloze (#2) or flashcard self-grade (#3) — both target
define/essay directly, cost nothing per session, and reuse existing data.

---

## Infrastructure (still current)

### AI evaluation — `define` + `essay`
Both are free-text and scored by **Claude Haiku** (`claude-haiku-4-5-20251001`)
via `evaluateWithClaude()` in `app.js`. Returns JSON: `score`, `verdict`,
`strengths`, `gaps`, `feedback` (all Hungarian), rendered as the feedback panel.
Max 2 of each per session. All other types are checked locally.

**The API key never passes through the browser.** Requests go to a server-side proxy:
- **Production** (GitHub Pages): Cloudflare Worker, default
  `https://psp-claude-proxy.vargadezso.workers.dev`. Key stored as encrypted
  Cloudflare **secret** (`ANTHROPIC_API_KEY`). Redeploy: `npx wrangler deploy`.
  Update key: `echo "sk-ant-..." | npx wrangler secret put ANTHROPIC_API_KEY`.
- **Localhost**: `server.js` proxies `POST /api/claude`, reading `ANTHROPIC_API_KEY`
  from env. Run: `ANTHROPIC_API_KEY=sk-ant-... node server.js` → http://localhost:3000.

The ⚙ Settings modal stores only the **Worker URL** (`localStorage` key
`psp_worker_url`), not a key. Fallback when no worker resolves off-localhost:
`showNoApiKeyFeedback()` shows the `modelAnswer` for self-assessment.

> The Cloudflare Worker source (`worker.js` / `wrangler.toml`) lives in the
> Cloudflare dashboard, not this repo.

### Microphone input
🎤 button on all free-text types — `short`, `fill`, `essay`, `define` (essay and
define share a textarea). Web Speech API, `lang: 'hu-HU'`, continuous. **Chrome only.**

### Testing / TDD
`npm test` (Jest). Two files: `tests/exercises.test.js` (data integrity — every
`exercises/*.js` file listed in `EXERCISE_FILES`, required fields, dup IDs,
type-specific rules, per-worksheet coverage) and `tests/session.test.js` (session
construction, type caps, lives/early-exit, `worksheetLabel`). **109 tests pass.**
Every change ships with a test per `CLAUDE.md`'s TDD rule.

---

## Known limitations / risks
- Mic input requires **Chrome**.
- `define`/`essay` evaluation costs ~$0.001/question (Haiku) — cheap, not zero.
- Anyone who discovers the worker URL could spend API credits; risk low (URL not
  shared), but Cloudflare rate limiting can be added.
- **Security**: an API key was exposed in plaintext during earlier setup — rotate
  it at console.anthropic.com if not already done, then
  `echo "sk-ant-NEW" | npx wrangler secret put ANTHROPIC_API_KEY`. Never commit a key.

## Live URLs
| | URL |
|---|---|
| App (GitHub Pages) | https://dezsovarga.github.io/psihopedagogie-speciala/ |
| Cloudflare Worker | https://psp-claude-proxy.vargadezso.workers.dev |
| GitHub Repo | https://github.com/dezsovarga/psihopedagogie-speciala |
| Anthropic Console | https://console.anthropic.com |
