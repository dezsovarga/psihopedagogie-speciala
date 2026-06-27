// ─── Exercise loader ─────────────────────────────────────────────────────────
// Each worksheet lives in exercises/worksheet_N.js
// To add a new worksheet: create exercises/worksheet_N.js, add a <script> tag
// in index.html, and add it to the spread below.

const EXERCISES = [
  ...(typeof EXERCISES_W1     !== 'undefined' ? EXERCISES_W1     : []),
  ...(typeof EXERCISES_W2     !== 'undefined' ? EXERCISES_W2     : []),
  ...(typeof EXERCISES_W3     !== 'undefined' ? EXERCISES_W3     : []),
  ...(typeof EXERCISES_W4     !== 'undefined' ? EXERCISES_W4     : []),
  ...(typeof EXERCISES_W5     !== 'undefined' ? EXERCISES_W5     : []),
  ...(typeof EXERCISES_MIXED  !== 'undefined' ? EXERCISES_MIXED  : []),
  ...(typeof EXERCISES_ESSAYS !== 'undefined' ? EXERCISES_ESSAYS : []),
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getExercisesByWorksheet(w) {
  if (w === 'mix') return [...EXERCISES];
  if (w === 0) return EXERCISES.filter(e => e.w === 0);
  return EXERCISES.filter(e => e.w === w || e.w === 0);
}

function getReviewExercises(progress) {
  const due = Object.entries(progress)
    .filter(([id, p]) => p.interval === 1 && p.seen > 0)
    .map(([id]) => id);
  return EXERCISES.filter(e => due.includes(e.id));
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
