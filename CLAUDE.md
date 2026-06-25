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
data.js            ← combines all exercise arrays + helper functions
app.js             ← session logic, spaced repetition, progress (localStorage)
style.css          ← Duolingo-inspired UI
index.html         ← three screens: home, exercise, results
generate.js        ← CLI tool: generates exercises from a solution DOCX
package.json       ← npm deps: @anthropic-ai/sdk, mammoth
```

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
{
  id: 'w4_01',        // unique; w = worksheet number (0 = shared)
  w: 4,
  topic: 'Fogalmak',  // shown in UI
  type: 'mc',         // mc | tf | fill | match | order | short
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
```

## Content rules

- All UI text, questions, options, and explanations must be in Hungarian
- Only use facts and definitions from the solution files — never invent
- Each major topic needs at least 3–4 exercises
- `exp` must always reference the correct answer from the solution
