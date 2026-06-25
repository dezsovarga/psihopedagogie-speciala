# Pszichopedagógia Specială – Exam Prep App

Duolingo-style flashcard app for the Titularizare 2026 exam. Fully in Hungarian.
Live at: https://dezsovarga.github.io/psihopedagogie-speciala/

## Source files

`exam_subjects/` contains matched pairs:
- `Gyakorlo_1_valtozat-2.pdf` ↔ `gyakorlas_1_megoldasok_cl.docx`
- `Gyakorlo_2_valtozat-1.pdf` ↔ `gyakorlas_2_megoldasok_cl.docx`
- `Gyakorlo_3_valtozat-3.pdf` ↔ `gyakorlas_3_megoldasok_cl.docx`

The solution `.docx` files are the source of truth. Never invent definitions or facts not found in them.

## App structure

- `data.js` — all exercises as a JS array (`EXERCISES`). This is the only file that changes when adding content.
- `app.js` — session logic, spaced repetition, progress tracking (localStorage)
- `style.css` — Duolingo-inspired UI
- `index.html` — three screens: home, exercise, results

## Exercise format

```js
{
  id: 'w1_01',        // unique, w=worksheet number (0=shared/mixed)
  w: 1,               // 1, 2, 3, or 0
  topic: 'Fogalmak',  // shown in the UI
  type: 'mc',         // mc | tf | fill | match | order | short
  q: 'Question text',
  // type-specific fields:
  opts: [...],        // mc: 4 options
  ans: 2,             // mc: index; tf: boolean; fill/short: string
  pairs: [{L,R}],     // match: array of pairs
  items: [...],       // order: array in correct order (gets shuffled)
  keywords: [...],    // short: must appear in answer
  exp: 'Explanation shown after answering',
  diff: 1             // 1=easy, 2=medium, 3=hard
}
```

## Adding new exam subjects

1. Add the PDF and solution DOCX to `exam_subjects/`
2. Read both files — the PDF has the questions, the DOCX has the solutions
3. Add exercises to `data.js` — append before the closing `];`
4. Use the next available worksheet number (e.g. `w: 4`)
5. Aim for variety: at least mc, tf, order, and one match or fill per topic
6. Deploy: `git add -A && git commit -m "add worksheet 4" && git push`

## Content rules

- All UI text, questions, options, and explanations must be in Hungarian
- Only use facts and definitions from the solution files
- Each major topic needs at least 3–4 exercises covering different angles
- `exp` (explanation) should always reference the correct answer from the solution
