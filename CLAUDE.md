# Pszichopedagógia Specială – Exam Prep App

Duolingo-style flashcard app for the Titularizare 2026 exam. Fully in Hungarian.
Live at: https://dezsovarga.github.io/psihopedagogie-speciala/

## Source files

`exam_subjects/` contains matched pairs (number is the pairing key):
- `gyakorlas_1_feladatsor.pdf` ↔ `gyakorlas_1_megoldasok_cl.docx`
- `gyakorlas_2_feladatsor.pdf` ↔ `gyakorlas_2_megoldasok_cl.docx`
- `gyakorlas_3_feladatsor.pdf` ↔ `gyakorlas_3_megoldasok_cl.docx`
- `gyakorlas_4_feladatsor.pdf` ↔ `gyakorlas_4_megoldasok_cl.docx`
- `gyakorlas_5_feladatsor.pdf` ↔ `gyakorlas_5_magoldasok_cl.docx`
- `gyakorlas_6_feladatsor.pdf` ↔ `gyakorlas_6_megoldasok_cl.docx`

The solution `.docx` files are the source of truth. Never invent definitions or facts not found in them.

`other_materials/` holds the "Gyógypedagógiai Alapismeretek" study guide (14 chapters).
Its exercises live in `exercises/gyalap_ch*.js` (w: 101–114). **This mode is
currently disabled** — the home-screen card is commented out and questions with
`w >= 100` are excluded from every session (see `app.js`). The data files and
chapter-select screen markup are kept so it can be re-enabled later.

## App structure

```
exercises/
  worksheet_1.js … worksheet_6.js  ← w:1–6 exercises (standard types)
  gyalap_ch1.js … gyalap_ch3.js    ← w:101–114 Gyógyped. Alapismeretek (DISABLED)
  mixed.js         ← w:0 shared exercises
  essays.js        ← define + essay questions (AI-evaluated; manually maintained)
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

The ⚙ Settings modal stores only the **Worker URL** (`localStorage` key
`psp_worker_url`), not an API key — the input id is `api-key-input` for legacy
reasons. It defaults to the built-in worker, so users normally never touch it.

- Max 2 essay + define questions of each kind appear per session (per-type caps
  in `startSession`)
- If not localhost and no worker URL resolves: `showNoApiKeyFeedback()` shows the
  `modelAnswer` for self-assessment instead of calling the API
- Each define/essay has a `modelAnswer` (full expected answer) and `points`
- **Never commit an API key.** It lives only as the Cloudflare secret / local env var.

## Adding a new exam subject (worksheet N)

Worksheet 6 is the latest. Full checklist to add worksheet N:

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
   `essay` questions for `w: N` to `exercises/essays.js` — these are always
   maintained by hand, the generator does not touch them.

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
