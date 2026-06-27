# Pszichopedagógia Specială – Exam Prep App

Duolingo-style flashcard app for the Titularizare 2026 exam. Fully in Hungarian.
Live at: https://dezsovarga.github.io/psihopedagogie-speciala/

## Source files

`exam_subjects/` contains matched pairs (number is the pairing key):
- `gyakorlas_1_feladatsor.pdf` ↔ `gyakorlas_1_megoldasok_cl.docx`
- `gyakorlas_2_feladatsor.pdf` ↔ `gyakorlas_2_megoldasok_cl.docx`
- `gyakorlas_3_feladatsor.pdf` ↔ `gyakorlas_3_megoldasok_cl.docx`

The solution `.docx` files are the source of truth. Never invent definitions or facts not found in them.

## App structure

```
exercises/
  worksheet_1.js   ← w:1 exercises (auto-managed)
  worksheet_2.js   ← w:2 exercises
  worksheet_3.js   ← w:3 exercises
  mixed.js         ← w:0 shared exercises
  essays.js        ← essay-type questions (Claude-evaluated; manually maintained)
data.js            ← combines all exercise arrays + helper functions
app.js             ← session logic, spaced repetition, progress (localStorage)
                      mic/speech recognition, Claude API evaluation, settings
style.css          ← Duolingo-inspired UI
index.html         ← three screens + settings modal: home, exercise, results
generate.js        ← CLI tool: generates exercises from a solution DOCX
package.json       ← npm deps: @anthropic-ai/sdk, mammoth
```

## Microphone input

All `short`, `fill`, and `essay` question types show a mic button (🎤). Uses
Web Speech API (`lang: 'hu-HU'`, continuous mode). Works in Chrome; other
browsers may lack `SpeechRecognition` support.

## Claude-evaluated essay questions (essays.js)

Essay questions (`type: 'essay'`) are evaluated by the Claude Haiku model via
the Anthropic API. The user enters their API key once in Settings (⚙ icon) —
it is stored only in `localStorage`.

- Max 2 essay questions appear per session (to keep sessions manageable)
- If no API key: the model answer is shown so the user can self-assess
- Each essay has a `modelAnswer` (full expected answer) and `points` (exam value)
- Cost: ~$0.01 per session

## Adding a new exam subject

1. Drop the files into `exam_subjects/`:
   - `gyakorlas_4_feladatsor.pdf`
   - `gyakorlas_4_megoldasok_cl.docx`

2. Run the generator (needs `ANTHROPIC_API_KEY`):
   ```bash
   export ANTHROPIC_API_KEY=sk-ant-...
   node generate.js exam_subjects/gyakorlas_4_megoldasok_cl.docx
   ```
   This creates `exercises/worksheet_4.js` automatically.

3. Two manual edits the script will remind you about:

   **index.html** — add before `data.js`:
   ```html
   <script src="exercises/worksheet_4.js"></script>
   ```

   **data.js** — add to the EXERCISES spread:
   ```js
   ...(typeof EXERCISES_W4 !== 'undefined' ? EXERCISES_W4 : []),
   ```

4. Deploy:
   ```bash
   git add -A && git commit -m "Add worksheet 4" && git push
   ```

## Exercise format (for manual edits or review)

```js
// Standard types (mc | tf | fill | match | order | short)
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

// Essay type (Claude-evaluated; maintain manually in essays.js)
{
  id: 'essay_w4_01',
  w: 4,
  topic: 'Fogalmak',
  type: 'essay',
  q: 'Exact exam subquestion text',
  modelAnswer: 'Full expected answer from solution file',
  exp: 'One-sentence summary of what the answer must contain',
  points: 5,          // exam point value (used in score display and XP)
  diff: 2             // 1=easy, 2=medium, 3=hard
}
```

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

The `exercises.test.js` file automatically covers every exercise file on each run, so a syntax or schema error in any `exercises/*.js` file will be caught by `npm test` before it reaches production.

When adding define or essay questions for a new worksheet, update the TODO placeholder test in `exercises.test.js` (change `>= 0` to `>= 3`) before writing the content so the test fails first.

## Content rules

- All UI text, questions, options, and explanations must be in Hungarian
- Only use facts and definitions from the solution files — never invent
- Each major topic needs at least 3–4 exercises
- `exp` must always reference the correct answer from the solution
