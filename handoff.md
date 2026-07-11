# Session Handoff — 2026-07-10

> History: 2026-06-26 (essay type, mic, Claude eval, Cloudflare proxy) →
> 2026-07-03 (worksheets 4–7, disabled gyalap, `define`/`list` types) →
> 2026-07-09 (exam tips, real past-exam sections 2017–2020) →
> **2026-07-10 (this session): real exams 2021–2022, the `cloze` question type +
> accent-tolerant grading, a question-type filter in Settings, and big
> define+cloze expansions of worksheets 7, 1, 2.** Newest section first; older
> sections follow as reference.

## Current state at a glance

- **783 exercises total**, live at https://dezsovarga.github.io/psihopedagogie-speciala/
- **7 worksheets** (`w:1`–`7`), each a full exam variant, plus `w:0` shared (Vegyes)
- **6 real past-exam years** — "Valós vizsgatételek": 2017–2022 (`w = year`), 234 questions
- **Gyógyped. Alapismeretek** study-guide mode (`w:101`–`103`) exists but is **DISABLED**
- Question types and counts:

  | Type | Count | Graded by |
  |------|-------|-----------|
  | `mc` (feleletválasztós) | 265 | local |
  | `define` (fogalommeghatározás) | 189 | Claude Haiku |
  | `list` (felsorolás / enumeration) | 73 | local, partial-credit checklist |
  | `tf` (igaz/hamis) | 57 | local |
  | `cloze` (szövegkiegészítés) | 54 | local, per-blank + accent-tolerant |
  | `essay` (esszé) | 34 | Claude Haiku |
  | `fill` (kiegészítés) | 30 | local |
  | `order` (sorrendezés) | 28 | local |
  | `match` (párosítás) | 28 | local |
  | `short` (rövid válasz) | 25 | local (keyword) |

- **170 tests pass** (`npm test`).

## What was built THIS session (2026-07-10)

### A. Real past-exam years 2021 & 2022
Two more "Valós vizsgatételek" year sections (now 2017–2022, 6 years), same
reusable per-year pattern (`w = year`, one self-contained file, ≥10 defines each,
standalone). 2021: nyelvi zavarok / komplex értékelés / esettanulmány. 2022:
spec. pszichopedagógia / hallássérülés / problémafelvető tanulás. Both are
included in the general mix/structured/random pools (like the other years);
labels `2021-es` / `2022-es` in `REAL_EXAM_LABELS`.

### B. `cloze` (szövegkiegészítés) — NEW question type
A definition text with `{{blanked}}` key terms, rendered as inline inputs each
showing a **first-letter "faded" hint**. Graded **locally, per blank**.

- Schema: `q` (instruction) + `text` (with `{{blanks}}`) + `exp`. Lives in
  `exercises/cloze.js` (`EXERCISES_CLOZE`). Slots into the "other" session bucket
  (no session-selection changes).
- `parseCloze(text)` → `{parts, answers}`; `clozeBlankMatches(user, answer)` grades.
- **Grading tolerance:** accent-insensitive (á→a, é→e, í→i, ó/ö/ő→o, ú/ü/ű→u via
  `foldHungarianAccents`) **plus** one edit of typo tolerance (`levenshtein ≤ 1`)
  on the folded forms. So dropping accents (e.g. `azonositasa` for `azonosítása`)
  is always accepted, plus one extra typo.
- **54 cloze** total (grounded in the solution files).

### C. Question-type filter in ⚙ Settings
A checkbox per question type; **only checked types appear in any practice
session** (all modes incl. review). Persisted immediately to `localStorage`
(`psp_enabled_types`); `getEnabledTypes()` (defaults to all, never empty) filters
the session `pool` in `startSession`. A live **"Elérhető kérdés: N"** count is
rendered above the checkboxes (`countAvailableQuestions`) — counts enabled types
within the practiceable pool (worksheets + real exams; disabled gyalap excluded).
Also: the settings modal is now a scrollable flex column (`max-height: 90vh`) so
the taller content is never clipped.

### D. Define + cloze expansion of ALL worksheets (1–7) — COMPLETE
Added every remaining clearly-defined concept from each solution DOCX as a
`define`, plus **2–3 `cloze` per new define** (each blanking different key terms):
- **W1:** 16 → 26 defines (+10 cloze)
- **W2:** 12 → 24 defines (+12 cloze)
- **W3:** 12 → 24 defines (+14 cloze)
- **W4:** 12 → 24 defines (+13 cloze)
- **W5:** 12 → 24 defines (+12 cloze)
- **W6:** 7 → 20 defines (+26 cloze)
- **W7:** 7 → 20 defines (+28 cloze)

Totals across the app: **238 define, 119 cloze, 897 exercises.** All grounded
verbatim in the `exam_subjects/gyakorlas_N_megoldasok_cl.docx` solution files, no
duplicate concepts within a worksheet, all standalone. The real-exam years
(2017–2022) were NOT part of this expansion (they already had ≥10 defines each).

## What was built 2026-07-09 (reference)

### A. Exam tips — "Tippek és tanácsok" (`tips.js`)
One random exam tip is shown on the exercise screen, styled as a lightbulb card
(💡, purple/yellow) echoing a Tips & Tricks reference image.

- **Source**: extracted from the methodology section
  ("A TITULARIZÁCIÓS VERSENYVIZSGA MÓDSZERTANA") of the 438-page PDF in
  `tips_for_the_exam/`, via a Python venv + pypdf (large-PDF extraction).
- `tips.js` exports `EXAM_TIPS` — **14 tips** drawn strictly from the four
  methodology subsections (exam structure/scoring, essay-writing guidance,
  success advice).
- **Rotates on every question** (moved from once-per-session): `showSessionTip()`
  runs in `renderExercise()`; `pickRandomTip(tips, exclude)` never repeats the
  immediately previous tip (`lastTip`). Dismissible with ✕.
- Card label is **"Tippek és tanácsok"**. Styling in `style.css` (`.session-tip`).

### B. "Valós vizsgatételek" — real past-exam sections (2017–2020)
Real past exams from `real_exam_subjects/` are **separate year sections**, one per
year, under a "Valós vizsgatételek" sub-heading on the home screen. **157
questions across 4 years** (2017: 40, 2018: 38, 2019: 40, 2020: 39).

- **Numbering: `w = year`** (2017…2020) — self-documenting, collision-free
  (worksheets 1–7, gyalap 101–114). One self-contained file per year
  (`exercises/real_YYYY.js`) with **all** question types (standard + define +
  essay + list), ids `real_YYYY_*`.
- Each year has **≥10 define questions** (13/11/13/13) — a real-exam coverage
  test enforces this. Model answers verbatim from the `_megoldasok.docx` solution.
- **Topics**: 2017 — spec. pszichopedagógia, nyelvi terápiák/demutizáció,
  módszertan; 2018 — etiológia (endogén/exogén), didaktikai játék, tantervi
  tervezés; 2019 — értékelés, öröklődés/környezet/nevelés, módszertani
  kompetenciák; 2020 — same I/II themes + differenciált tanterv, tantárgyi
  program, matematika-tanítás, IKT.
- **Reusable pattern** (documented in `CLAUDE.md`, "Adding a real past-exam year"):
  drop the DOCX pair → create `exercises/real_YYYY.js` → 3 one-line wirings
  (`data.js` spread, `index.html` script tag + card, `REAL_EXAM_YEARS` /
  `REAL_EXAM_LABELS` in `app.js`) → register in tests.
- `REAL_EXAM_LABELS` holds the correct (irregular) Hungarian labels — 2017-**es**,
  2018-**as**, 2019-**es**, 2020-**as** — used for the random-mode source badge.

### C. Pool behaviour: real exams included in the general modes
Per request, real-exam questions now **also** appear in **Vegyes / Strukturált /
Véletlenszerű** (not only their dedicated year sections). The general-mode filter
is `e.w < 100 || e.w >= 2000`; only the disabled gyalap (100–999) is excluded.
Dedicated year mode still selects `e.w === year` exactly (no `w:0` shared).
> Note: the global **Ismétlés (review)** mode still excludes `w >= 100`, so
> real-exam questions are not yet surfaced in review — a one-line tweak if wanted.

### D. Questions made standalone (regression-guarded)
Rewrote 7 list questions that referenced exam-internal structure the learner never
sees (e.g. "Sorolja fel az I. feladat…", "(a tétel szerint)"). Added a test that
flags any question text referencing an unseen task/tétel (regex for "N. feladat",
"tétel szerint", "tételben szereplő").

### E. 2017 defines expanded 5 → 13
Turned every remaining clearly-defined concept in the 2017 solution into a define.

## What was built 2026-07-03 (reference)

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

**It is currently disabled**: the home-screen mode card is commented out, and the
gyalap questions (`w` 100–999) are filtered out of every session pool in `app.js`.
Data files and the chapters screen markup are kept so it can be re-enabled by
uncommenting the one mode card.
> Updated 2026-07-09: the general-mode filter is now `e.w < 100 || e.w >= 2000`,
> so only gyalap (100–999) is excluded — real exams (`w >= 2000`) are included.

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
construction, type caps, lives/early-exit, `worksheetLabel`). **141 tests pass.**
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
