# Pszichopedagógia Specială – Exam Prep App

Duolingo-style flashcard app for the Titularizare 2026 exam. Fully in Hungarian.
Live at: https://dezsovarga.github.io/psihopedagogie-speciala/

## Source files

`exam_subjects/` holds the practice worksheets (1–7), matched pairs (number is
the pairing key): `gyakorlas_N_feladatsor.pdf` ↔ `gyakorlas_N_megoldasok_cl.docx`
for N = 1…7 (note: 5's solution is spelled `gyakorlas_5_magoldasok_cl.docx`).

`real_exam_subjects/` holds the **real past-exam** pairs, one per year:
`gyakorlas_YYYY_feladatsor.docx` ↔ `gyakorlas_YYYY_megoldasok.docx` (2017–2020 so
far). These drive the "Valós vizsgatételek" sections (see below).

The solution `.docx` files are the source of truth. Never invent definitions or facts not found in them.

`other_materials/` holds the "Gyógypedagógiai Alapismeretek" study guide (14 chapters).
Its exercises live in `exercises/gyalap_ch*.js` (w: 101–114). **This mode is
currently disabled** — the home-screen card is commented out and gyalap questions
(`w` 100–999) are excluded from every session (see `app.js`). The data files and
chapter-select screen markup are kept so it can be re-enabled later.

`tips_for_the_exam/` holds a study PDF whose methodology section is the source of
`tips.js` (see "Exam tips" below).

## App structure

```
exercises/
  worksheet_1.js … worksheet_7.js  ← w:1–7 exercises (standard types)
  gyalap_ch1.js … gyalap_ch3.js    ← w:101–114 Gyógyped. Alapismeretek (DISABLED)
  real_2017.js … real_2020.js      ← real past-exam years (w = year); one file per year
  mixed.js         ← w:0 shared exercises
  essays.js        ← define + essay questions (AI-evaluated; manually maintained)
  lists.js         ← list (enumeration) questions for all worksheets; hand-maintained
tips.js            ← EXAM_TIPS: one random exam tip, rotated per question on the exercise screen
data.js            ← combines all exercise arrays + helper functions
app.js             ← session logic, spaced repetition, progress (localStorage)
                      mic/speech recognition, Claude API evaluation, settings
server.js          ← local dev proxy: POST /api/claude → Anthropic (reads env key)
style.css          ← Duolingo-inspired UI
index.html         ← screens + settings modal: home, chapters, exercise, results
generate.js        ← CLI tool: generates worksheet_N.js from a solution DOCX
tests/             ← Jest: exercises.test.js, session.test.js
package.json       ← npm deps: @anthropic-ai/sdk, mammoth
```

The Cloudflare Worker proxy source is not in this repo; it lives in the
Cloudflare dashboard (see the essay-evaluation section below).

## Microphone input

All free-text types — `short`, `fill`, `essay`, and `define` — show a mic
button (🎤); `essay` and `define` share the same textarea. Uses the Web Speech
API (`lang: 'hu-HU'`, continuous mode). Works in Chrome; other browsers may lack
`SpeechRecognition` support.

## AI-evaluated questions (essays.js): `define` + `essay`

Both `type: 'define'` and `type: 'essay'` answers are free-text and scored by
Claude (`claude-haiku-4-5-20251001`) via `evaluateWithClaude()` in `app.js`. The
model returns a JSON verdict (score, verdict, strengths, gaps, feedback — all in
Hungarian) rendered as the feedback panel. All other types are checked locally.

**The Anthropic API key never passes through the browser.** Requests go to a
proxy that adds the key server-side:
- **Production** (GitHub Pages): a **Cloudflare Worker**, default
  `https://psp-claude-proxy.vargadezso.workers.dev`. The key is stored as an
  encrypted Cloudflare **secret**; the worker forwards to Anthropic.
- **Localhost**: `POST /api/claude`, served by `server.js`, which reads
  `ANTHROPIC_API_KEY` from the environment.

The ⚙ Settings modal stores the **Worker URL** (`localStorage` key
`psp_worker_url`; input id `api-key-input` for legacy reasons — defaults to the
built-in worker) **and** the **question-type filter** (`localStorage` key
`psp_enabled_types`, a JSON array of enabled types). The type filter is applied
to the session `pool` in `startSession` (`getEnabledTypes()`), so only the
checked types appear in any practice session; it defaults to all types and is
never allowed to be empty. Toggling a checkbox saves immediately.

- Max 2 essay + define questions of each kind appear per session (per-type caps
  in `startSession`)
- If not localhost and no worker URL resolves: `showNoApiKeyFeedback()` shows the
  `modelAnswer` for self-assessment instead of calling the API
- Each define/essay has a `modelAnswer` (full expected answer) and `points`
- **Never commit an API key.** It lives only as the Cloudflare secret / local env var.

## Adding a new exam subject (worksheet N)

Worksheet 7 is the latest. Full checklist to add worksheet N:

1. Drop the pair into `exam_subjects/` (`gyakorlas_N_feladatsor.pdf` +
   `gyakorlas_N_megoldasok_cl.docx`).

2. Create the standard-type questions in `exercises/worksheet_N.js`
   (`EXERCISES_WN`, `w: N`, types mc/tf/fill/match/order/short). Two ways:
   - **Generator** (writes only this file): `export ANTHROPIC_API_KEY=sk-ant-...`
     then `node generate.js exam_subjects/gyakorlas_N_megoldasok_cl.docx`.
   - **Manual**: extract the DOCX with `mammoth` and author the questions
     directly (how worksheet 6 was done). Watch Hungarian quotes: use the
     curly `„…”` (U+201E/U+201D) inside JS strings, never a straight `"`.

3. Add the `define` (≥3, at least one outside topic `Fogalommeghatározás`) and
   `essay` questions for `w: N` to `exercises/essays.js`, and the `list`
   (enumeration, ≥5) questions to `exercises/lists.js` — these separate files
   are always maintained by hand, the generator does not touch them.

4. Wire it in:
   - **index.html** — `<script src="exercises/worksheet_N.js"></script>` before
     `data.js`, and a `startSession(N)` mode card (with `progress-wN`, `fill-wN`,
     `pct-wN` ids) in the home screen.
   - **data.js** — add `...(typeof EXERCISES_WN !== 'undefined' ? EXERCISES_WN : []),`
     to the EXERCISES spread.
   - **app.js** — extend the home-progress loop `[1, 2, …, N].forEach(...)`.

5. Tests first, per TDD (see below):
   - Add `'exercises/worksheet_N.js'` to `EXERCISE_FILES` in `exercises.test.js`.
   - Extend the worksheet ranges: the `test.each([...])` blocks and the
     `define`/`essay` "w is a valid worksheet number" arrays must include N.

6. `npm test`, then `git add -A && git commit -m "Add worksheet N" && git push`.

## Adding a real past-exam year (Valós vizsgatételek)

Real past exams from `real_exam_subjects/` are **year sections** (2017–2020 so far),
each `w = year`. Pool behaviour (in `startSession`, mirrored by `selectPool` in
`session.test.js`):
- The **year mode** (`startSession(YYYY)`) selects **only** that year — exact
  match, no `w:0` shared questions.
- Real-exam questions **are included** in the general **mix / structured / random**
  pools (filter `e.w < 100 || e.w >= 2000`); only the disabled gyalap (100–999)
  is excluded.
- The global **Ismétlés (review)** mode still excludes `w >= 100`, so real-exam
  questions are not currently surfaced in review (one-line change if wanted).

Each year needs **≥10 define questions** (enforced by a coverage test). Every
question must be **standalone** — no references to the exam's task structure
(e.g. "Sorolja fel az I. feladat …", "(a tétel szerint)"); a test guards this.

To add year YYYY:

1. Drop `gyakorlas_YYYY_feladatsor.docx` + `gyakorlas_YYYY_megoldasok.docx` into
   `real_exam_subjects/` (solutions are the source of truth). For large PDFs use a
   Python venv + `pypdf`; DOCX extract with `mammoth`.
2. Create `exercises/real_YYYY.js` — one self-contained file with **all** question
   types (standard + `define` + `essay` + `list`), every entry `w: YYYY`, ids
   `real_YYYY_*`. Export `const EXERCISES_REAL_YYYY = [...]`.
3. Wire it in:
   - **data.js** — add the `EXERCISES_REAL_YYYY` spread.
   - **index.html** — `<script src="exercises/real_YYYY.js">` before `data.js`, and
     a mode card under the "Valós vizsgatételek" sub-heading with
     `onclick="startSession(YYYY)"` and `fill-yYYYY` / `pct-yYYYY` ids.
   - **app.js** — add `YYYY` to the `REAL_EXAM_YEARS` array (drives the home
     progress bar), and add `YYYY: 'YYYY-es/as változat'` to `REAL_EXAM_LABELS`
     (the Hungarian suffix is irregular — 2017-es, 2018-as, 2019-es, 2020-as — so
     it is stored explicitly; used for the random-mode source badge).
4. Tests first (TDD): add `'exercises/real_YYYY.js'` to `EXERCISE_FILES` and `YYYY`
   to `REAL_EXAM_YEARS` in `exercises.test.js`, and to `REAL_EXAM_LABELS` +
   `worksheetLabel` assertions in `session.test.js`.
5. `npm test`, commit, push.

## Exam tips (tips.js)

`tips.js` exports `EXAM_TIPS` (an array of Hungarian strings) extracted from the
methodology section of the `tips_for_the_exam/` PDF. One random tip shows on the
exercise screen as a "Tippek és tanácsok" lightbulb card, **rotated on every
question** — `showSessionTip()` runs in `renderExercise()`, and
`pickRandomTip(tips, exclude)` never repeats the immediately previous tip. Wired
via a `<script src="tips.js">` before `data.js`; integrity tested in
`exercises.test.js`.

## Exercise format (for manual edits or review)

```js
// Standard types (mc | tf | fill | match | order | short | list)
{
  id: 'w4_01',        // unique; w = worksheet number (0 = shared)
  w: 4,
  topic: 'Fogalmak',  // shown in UI
  type: 'mc',
  q: 'Question text',
  // type-specific:
  opts: [...],        // mc: exactly 4 options
  ans: 2,             // mc: 0-based index; tf: boolean; fill/short: string
  pairs: [{L,R}],     // match: exactly 4 pairs
  items: [...],       // order: steps in correct order (app shuffles them)
  keywords: [...],    // short: must appear in answer
  exp: 'Explanation shown after answering — always state the correct answer',
  diff: 1             // 1=easy, 2=medium, 3=hard
}

// Enumeration type (list) — free-text recall of a set, locally graded with a
// partial-credit checklist. Best for "Sorolja fel a(z) N …" questions.
{
  id: 'w6_32',
  w: 6,
  topic: 'Fogalmak',
  type: 'list',
  q: 'Sorolja fel a(z) N elemet!',
  items: [                        // each entry: a string, or { label, alt: [...] }
    'Első elem',                  //   string form: label IS the matcher
    { label: 'Második elem', alt: ['synonym', 'rövid alak'] }  // matches label or any alt
  ],
  need: 4,            // optional: how many items pass the question (default = all)
  exp: 'Explanation / full list shown after answering',
  diff: 2
}

// AI-evaluated types (define | essay; maintain manually in essays.js)
{
  id: 'essay_w4_01',  // or 'def_w4_01' for a define
  w: 4,
  topic: 'Fogalmak',
  type: 'essay',      // or 'define' — both are free-text, scored by Claude
  q: 'Exact exam subquestion text',
  modelAnswer: 'Full expected answer from solution file',
  exp: 'One-sentence summary of what the answer must contain',
  points: 5,          // exam point value (used in score display and XP)
  diff: 2             // 1=easy, 2=medium, 3=hard
}
```

`define` and `essay` share the same schema; `define` is used for short
"Határozza meg a … fogalmát" concept questions, `essay` for longer subquestions.

## Testing

Run the test suite before committing any change:

```bash
npm test
```

Tests live in `tests/` and use Jest. There are two test files:
- `tests/exercises.test.js` — data integrity: file parsing, required fields, duplicate IDs, type-specific rules, session slot coverage
- `tests/session.test.js` — session construction logic: correct counts per type, lives/early-exit behaviour

### Test-driven development

Follow TDD for all logic changes and every new request or change:

1. **Write the test first.** Before implementing a new feature or fixing a bug, add a failing test that describes the expected behaviour.
2. **Make it pass.** Implement the minimal change needed to make the test green.
3. **Commit both together.** Tests and the code they cover go in the same commit.
4. **Every request gets tests.** No change — however small — ships without at least one new or updated test that would catch a regression of that specific change.

What must have tests before the code changes:
- Any change to session selection logic (type caps, mode behaviour, early-exit conditions)
- Any new exercise type
- Any new field required on exercise objects
- Any new session mode
- Any new content category (e.g. adding define questions for a new worksheet)
- Bug fixes — the test should reproduce the bug first, then the fix makes it pass

The `exercises.test.js` file automatically covers every exercise file on each run, so a syntax or schema error in any `exercises/*.js` file will be caught by `npm test` before it reaches production — but only for files listed in its `EXERCISE_FILES` array, so add each new file there first.

When adding a new worksheet, extend the `test.each([...])` worksheet ranges and the `define`/`essay` "w is a valid worksheet number" arrays to include the new number *before* writing the content, so the new-worksheet coverage tests fail first (`>= 3` define per worksheet, etc.).

## Content rules

- All UI text, questions, options, and explanations must be in Hungarian
- Only use facts and definitions from the solution files — never invent
- Each major topic needs at least 3–4 exercises
- `exp` must always reference the correct answer from the solution
- **Questions must be standalone** — never reference the source exam's task
  structure the learner can't see (e.g. "az I. feladat …", "a tétel szerint");
  a test in `exercises.test.js` enforces this
