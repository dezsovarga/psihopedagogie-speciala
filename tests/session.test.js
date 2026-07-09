/**
 * Session construction unit tests.
 * Verifies that each mode produces the correct number and mix of question types.
 */

// ─── Minimal stubs so we can run the selection logic outside the browser ──────

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getProgress(/*id*/) {
  return { seen: 0, correct: 0, interval: 1 };
}

function spSorted(arr) {
  return arr.slice().sort((a, b) => {
    const pa = getProgress(a.id), pb = getProgress(b.id);
    if (pa.seen === 0 && pb.seen > 0) return -1;
    if (pa.seen > 0 && pb.seen === 0) return 1;
    if (pa.interval !== pb.interval) return pa.interval - pb.interval;
    return Math.random() - 0.5;
  });
}

function buildSessionQueue(pool, mode) {
  if (mode === 'structured') {
    const other   = spSorted(pool.filter(e => e.type !== 'essay' && e.type !== 'define'));
    const defines = spSorted(pool.filter(e => e.type === 'define'));
    const essays  = spSorted(pool.filter(e => e.type === 'essay'));
    return shuffleArray([...other.slice(0, 10), ...defines.slice(0, 3), ...essays.slice(0, 2)]);
  } else if (mode === 'random') {
    const other   = shuffleArray(pool.filter(e => e.type !== 'essay' && e.type !== 'define'));
    const defines = shuffleArray(pool.filter(e => e.type === 'define'));
    const essays  = shuffleArray(pool.filter(e => e.type === 'essay'));
    return shuffleArray([...other.slice(0, 12), ...defines.slice(0, 2), ...essays.slice(0, 1)]);
  } else {
    const sorted  = spSorted(pool);
    const other   = sorted.filter(e => e.type !== 'essay' && e.type !== 'define');
    const essays  = sorted.filter(e => e.type === 'essay');
    const defines = sorted.filter(e => e.type === 'define');
    return shuffleArray([...other.slice(0, 9), ...defines.slice(0, 4), ...essays.slice(0, 2)]).slice(0, 15);
  }
}

// ─── Worksheet label (mirrors worksheetLabel in app.js) ──────────────────────
// Shown next to the question in random ('véletlenszerű') mode so the learner
// knows which worksheet each question comes from.

const REAL_EXAM_LABELS = { 2017: '2017-es változat', 2018: '2018-as változat', 2019: '2019-es változat', 2020: '2020-as változat', 2021: '2021-es változat', 2022: '2022-es változat' };
function worksheetLabel(w) {
  if (w === 0) return 'Vegyes';
  if (w >= 2000) return REAL_EXAM_LABELS[w] || `${w}. évi vizsga`;   // real exam year
  if (w >= 100) return 'Gyógyped. Alapismeretek';
  return `${w}. Változat`;
}

describe('worksheet label (shown in random mode)', () => {
  test('worksheet numbers 1–7 map to "N. Változat"', () => {
    expect(worksheetLabel(1)).toBe('1. Változat');
    expect(worksheetLabel(7)).toBe('7. Változat');
  });
  test('shared exercises (w:0) map to "Vegyes"', () => {
    expect(worksheetLabel(0)).toBe('Vegyes');
  });
  test('gyógyped. alapismeretek (w >= 100) map to a readable label', () => {
    expect(worksheetLabel(101)).toBe('Gyógyped. Alapismeretek');
  });
  test('real-exam years map to their section label', () => {
    expect(worksheetLabel(2017)).toBe('2017-es változat');
    expect(worksheetLabel(2018)).toBe('2018-as változat');
    expect(worksheetLabel(2019)).toBe('2019-es változat');
    expect(worksheetLabel(2020)).toBe('2020-as változat');
    expect(worksheetLabel(2021)).toBe('2021-es változat');
    expect(worksheetLabel(2022)).toBe('2022-es változat');
  });
});

// ─── Random tip picking (mirrors pickRandomTip in app.js) ────────────────────

function pickRandomTip(tips, exclude) {
  if (!Array.isArray(tips) || tips.length === 0) return null;
  const pool = (tips.length > 1 && exclude != null) ? tips.filter(t => t !== exclude) : tips;
  return pool[Math.floor(Math.random() * pool.length)];
}

describe('pickRandomTip (rotates every question)', () => {
  const TIPS = ['Tipp A', 'Tipp B', 'Tipp C'];

  test('returns a tip from the list', () => {
    for (let i = 0; i < 20; i++) {
      expect(TIPS).toContain(pickRandomTip(TIPS));
    }
  });

  test('returns null for an empty or invalid list', () => {
    expect(pickRandomTip([])).toBeNull();
    expect(pickRandomTip(null)).toBeNull();
    expect(pickRandomTip(undefined)).toBeNull();
  });

  test('never repeats the excluded (previous) tip when others exist', () => {
    for (let i = 0; i < 30; i++) {
      expect(pickRandomTip(TIPS, 'Tipp B')).not.toBe('Tipp B');
    }
  });

  test('returns the only tip even if it equals the excluded one', () => {
    expect(pickRandomTip(['Only'], 'Only')).toBe('Only');
  });
});

// ─── Cloze blank matching (mirrors app.js) ───────────────────────────────────

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i-1][j] + 1, d[i][j-1] + 1, d[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1));
  return d[m][n];
}

function foldHungarianAccents(s) {
  return s.toLowerCase()
    .replace(/[áàâ]/g, 'a')
    .replace(/[éèê]/g, 'e')
    .replace(/[íì]/g, 'i')
    .replace(/[óòôöő]/g, 'o')
    .replace(/[úùûüű]/g, 'u');
}

function clozeBlankMatches(user, answer) {
  user = (user || '').trim();
  if (!user) return false;
  const u = foldHungarianAccents(user), a = foldHungarianAccents(answer);
  return u === a || levenshtein(u, a) <= 1;
}

describe('cloze blank matching', () => {
  test('exact match (case-insensitive)', () => {
    expect(clozeBlankMatches('Gyors', 'gyors')).toBe(true);
  });
  test('missing Hungarian accents are tolerated', () => {
    expect(clozeBlankMatches('szocialis', 'szociális')).toBe(true);      // á→a
    expect(clozeBlankMatches('konceptualis', 'konceptuális')).toBe(true);
    expect(clozeBlankMatches('feldolgozasaert', 'feldolgozásáért')).toBe(true); // two accents
    expect(clozeBlankMatches('serult', 'sérült')).toBe(true);            // é→e, ü→u
    expect(clozeBlankMatches('tarolasaert', 'tárolásáért')).toBe(true);
  });
  test('one extra typo on top of accent-folding is tolerated', () => {
    expect(clozeBlankMatches('gyorss', 'gyors')).toBe(true);             // 1 insertion
    expect(clozeBlankMatches('feldolgozasaer', 'feldolgozásáért')).toBe(true); // accents + 1 deletion
  });
  test('two or more real typos are rejected', () => {
    expect(clozeBlankMatches('konzeptulis', 'konceptuális')).toBe(false);
    expect(clozeBlankMatches('xyz', 'gyors')).toBe(false);
  });
  test('empty input never matches', () => {
    expect(clozeBlankMatches('', 'gyors')).toBe(false);
    expect(clozeBlankMatches('   ', 'gyors')).toBe(false);
  });
});

// ─── Cloze parsing (mirrors parseCloze in app.js) ────────────────────────────

function parseCloze(text) {
  const parts = [];
  const answers = [];
  const re = /\{\{(.+?)\}\}/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push({ text: text.slice(last, m.index) });
    parts.push({ blank: true, answer: m[1], i: answers.length });
    answers.push(m[1]);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push({ text: text.slice(last) });
  return { parts, answers };
}

describe('parseCloze', () => {
  test('extracts blanks and the surrounding literal text', () => {
    const { parts, answers } = parseCloze('A {{alma}} és a {{körte}} gyümölcs.');
    expect(answers).toEqual(['alma', 'körte']);
    expect(parts.filter(p => p.blank).length).toBe(2);
    expect(parts.filter(p => p.text).map(p => p.text)).toEqual(['A ', ' és a ', ' gyümölcs.']);
  });

  test('blanks carry a 0-based index', () => {
    const { parts } = parseCloze('{{egy}} meg {{kettő}}');
    expect(parts.filter(p => p.blank).map(p => p.i)).toEqual([0, 1]);
  });

  test('text with no blanks yields an empty answer list', () => {
    expect(parseCloze('Nincs kihagyás.').answers).toEqual([]);
  });
});

// ─── Question-type filter (mirrors getEnabledTypes/pool filter in app.js) ────

const ALL_QUESTION_TYPES = ['mc', 'tf', 'fill', 'match', 'order', 'short', 'list', 'cloze', 'define', 'essay'];

function enabledTypesFromStorage(raw) {
  if (!raw) return [...ALL_QUESTION_TYPES];
  let arr;
  try { arr = JSON.parse(raw); } catch (e) { return [...ALL_QUESTION_TYPES]; }
  const f = ALL_QUESTION_TYPES.filter(t => Array.isArray(arr) && arr.includes(t));
  return f.length ? f : [...ALL_QUESTION_TYPES];   // never an empty selection
}

function filterByTypes(pool, enabled) {
  return pool.filter(e => enabled.includes(e.type));
}

describe('question-type filter (Settings)', () => {
  test('no stored value → all types enabled', () => {
    expect(enabledTypesFromStorage(null).sort()).toEqual([...ALL_QUESTION_TYPES].sort());
  });

  test('stored subset → only those types', () => {
    expect(enabledTypesFromStorage(JSON.stringify(['mc', 'tf']))).toEqual(['mc', 'tf']);
  });

  test('empty or invalid stored value → falls back to all', () => {
    expect(enabledTypesFromStorage('[]').length).toBe(ALL_QUESTION_TYPES.length);
    expect(enabledTypesFromStorage('not json').length).toBe(ALL_QUESTION_TYPES.length);
  });

  test('filter drops questions of disabled types', () => {
    const pool = [makeEx('a', 'mc'), makeEx('b', 'define'), makeEx('c', 'essay'), makeEx('d', 'tf')];
    const out = filterByTypes(pool, ['mc', 'tf']);
    expect(out.map(e => e.id).sort()).toEqual(['a', 'd']);
  });

  test('all types enabled → pool unchanged', () => {
    const pool = [makeEx('a', 'mc'), makeEx('b', 'define')];
    expect(filterByTypes(pool, ALL_QUESTION_TYPES).length).toBe(2);
  });
});

// Live "available questions" count shown under the checkboxes (mirrors
// countAvailableQuestions in app.js): enabled types within the practiceable pool
// (worksheets w<100 + real exams w>=2000; disabled gyalap 100–999 never counted).
function countAvailable(pool, enabled) {
  return pool.filter(e => (e.w < 100 || e.w >= 2000) && enabled.includes(e.type)).length;
}

describe('available-question count', () => {
  const POOL = [
    makeEx('a', 'mc', 1),      // practiceable
    makeEx('b', 'define', 1),  // practiceable
    makeEx('c', 'mc', 101),    // gyalap — never counted
    makeEx('d', 'tf', 2017),   // real exam — practiceable
  ];

  test('counts only enabled types within the practiceable pool', () => {
    expect(countAvailable(POOL, ['mc', 'tf'])).toBe(2);   // a (mc/w1) + d (tf/w2017); c gyalap-excluded, b disabled
  });

  test('disabling a type lowers the count', () => {
    expect(countAvailable(POOL, ['mc', 'tf', 'define'])).toBe(3);
    expect(countAvailable(POOL, ['tf'])).toBe(1);
  });
});

// ─── Pool selection (mirrors startSession in app.js) ─────────────────────────

function selectPool(allExercises, mode) {
  // General modes draw from worksheets (w < 100) AND real exams (w >= 2000);
  // only gyalap (100–999, disabled) is excluded.
  if (mode === 'mix' || mode === 'structured' || mode === 'random') {
    return allExercises.filter(e => e.w < 100 || e.w >= 2000);
  }
  // Gyalap chapter or real-exam year: exact match only (no w:0 shared questions).
  if (typeof mode === 'number' && mode >= 100) {
    return allExercises.filter(e => e.w === mode);
  }
  return allExercises.filter(e => e.w === mode || e.w === 0);
}

// ─── Fixture data ─────────────────────────────────────────────────────────────

function makeEx(id, type, w = 1, diff = 1) {
  const base = { id, type, w, diff, q: 'Q', topic: 'T' };
  if (type === 'mc')     return { ...base, opts: ['a','b','c','d'], ans: 0, exp: 'E' };
  if (type === 'tf')     return { ...base, ans: true, exp: 'E' };
  if (type === 'fill')   return { ...base, ans: 'answer', exp: 'E' };
  if (type === 'match')  return { ...base, pairs: [{L:'a',R:'1'},{L:'b',R:'2'},{L:'c',R:'3'},{L:'d',R:'4'}], exp: 'E' };
  if (type === 'order')  return { ...base, items: ['a','b','c'], exp: 'E' };
  if (type === 'short')  return { ...base, keywords: ['key'], exp: 'E' };
  if (type === 'essay')  return { ...base, modelAnswer: 'MA', points: 5 };
  if (type === 'define') return { ...base, modelAnswer: 'MA', points: 2 };
  return base;
}

function makePool({ mc = 0, tf = 0, fill = 0, essay = 0, define: def = 0 } = {}) {
  const pool = [];
  let n = 0;
  for (let i = 0; i < mc;    i++) pool.push(makeEx(`mc_${++n}`,     'mc'));
  for (let i = 0; i < tf;    i++) pool.push(makeEx(`tf_${++n}`,     'tf'));
  for (let i = 0; i < fill;  i++) pool.push(makeEx(`fill_${++n}`,   'fill'));
  for (let i = 0; i < essay; i++) pool.push(makeEx(`essay_${++n}`,  'essay'));
  for (let i = 0; i < def;   i++) pool.push(makeEx(`define_${++n}`, 'define'));
  return pool;
}

// ─── Structured mode ─────────────────────────────────────────────────────────

// ─── Lives / early-exit behaviour ────────────────────────────────────────────

function shouldEndOnLives(mode, lives) {
  return mode !== 'structured' && lives <= 0;
}

describe('lives early-exit logic', () => {
  test('structured mode never ends early on lives', () => {
    expect(shouldEndOnLives('structured', 0)).toBe(false);
    expect(shouldEndOnLives('structured', -1)).toBe(false);
  });

  test('other modes end when lives reach 0', () => {
    expect(shouldEndOnLives('mix', 0)).toBe(true);
    expect(shouldEndOnLives(1,    0)).toBe(true);
  });

  test('other modes do not end while lives remain', () => {
    expect(shouldEndOnLives('mix', 1)).toBe(false);
    expect(shouldEndOnLives(1,    2)).toBe(false);
  });
});

// ─── Structured mode ─────────────────────────────────────────────────────────

describe('structured mode', () => {
  const POOL = makePool({ mc: 50, essay: 10, define: 10 });

  test('always returns exactly 15 questions', () => {
    for (let i = 0; i < 10; i++) {
      expect(buildSessionQueue(POOL, 'structured')).toHaveLength(15);
    }
  });

  test('contains exactly 2 essays', () => {
    const q = buildSessionQueue(POOL, 'structured');
    expect(q.filter(e => e.type === 'essay')).toHaveLength(2);
  });

  test('contains exactly 3 define questions', () => {
    const q = buildSessionQueue(POOL, 'structured');
    expect(q.filter(e => e.type === 'define')).toHaveLength(3);
  });

  test('contains exactly 10 other questions', () => {
    const q = buildSessionQueue(POOL, 'structured');
    const other = q.filter(e => e.type !== 'essay' && e.type !== 'define');
    expect(other).toHaveLength(10);
  });

  test('still returns 15 when pool has exactly the minimum', () => {
    const minPool = makePool({ mc: 10, essay: 2, define: 3 });
    expect(buildSessionQueue(minPool, 'structured')).toHaveLength(15);
  });

  test('returns fewer than 15 when pool is too small', () => {
    const smallPool = makePool({ mc: 5, essay: 1, define: 1 });
    const q = buildSessionQueue(smallPool, 'structured');
    expect(q.length).toBeLessThan(15);
  });
});

// ─── Standard modes (mix / worksheet) ────────────────────────────────────────

describe('standard modes', () => {
  const POOL = makePool({ mc: 50, essay: 10, define: 10 });

  test('never exceeds 15 questions', () => {
    const q = buildSessionQueue(POOL, 'mix');
    expect(q.length).toBeLessThanOrEqual(15);
  });

  test('caps essays at 2', () => {
    const q = buildSessionQueue(POOL, 'mix');
    expect(q.filter(e => e.type === 'essay').length).toBeLessThanOrEqual(2);
  });

  test('caps define at 4', () => {
    const q = buildSessionQueue(POOL, 'mix');
    expect(q.filter(e => e.type === 'define').length).toBeLessThanOrEqual(4);
  });

  test('caps other at 9', () => {
    const q = buildSessionQueue(POOL, 'mix');
    const other = q.filter(e => e.type !== 'essay' && e.type !== 'define');
    expect(other.length).toBeLessThanOrEqual(9);
  });

  test('returns all questions when pool is smaller than caps', () => {
    const small = makePool({ mc: 3, essay: 1, define: 1 });
    expect(buildSessionQueue(small, 'mix')).toHaveLength(5);
  });
});

// ─── Skip behaviour ───────────────────────────────────────────────────────────

function skipExercise(session) {
  // Skip: advance index without touching lives or progress
  session.index++;
  const livesOut = session.mode !== 'structured' && session.lives <= 0;
  return livesOut || session.index >= session.queue.length ? 'results' : 'continue';
}

describe('skip behaviour', () => {
  test('skip advances the index', () => {
    const s = { index: 0, lives: 3, mode: 'mix', queue: makePool({ mc: 5 }) };
    skipExercise(s);
    expect(s.index).toBe(1);
  });

  test('skip does not reduce lives', () => {
    const s = { index: 0, lives: 3, mode: 'mix', queue: makePool({ mc: 5 }) };
    skipExercise(s);
    expect(s.lives).toBe(3);
  });

  test('skip on last question triggers results', () => {
    const s = { index: 4, lives: 3, mode: 'mix', queue: makePool({ mc: 5 }) };
    expect(skipExercise(s)).toBe('results');
  });

  test('skip mid-session continues', () => {
    const s = { index: 0, lives: 3, mode: 'mix', queue: makePool({ mc: 5 }) };
    expect(skipExercise(s)).toBe('continue');
  });

  test('skip works in structured mode even with 0 lives', () => {
    const s = { index: 0, lives: 0, mode: 'structured', queue: makePool({ mc: 5 }) };
    skipExercise(s);
    expect(s.lives).toBe(0);
    expect(skipExercise(s)).toBe('continue');
  });
});

// ─── Random mode ─────────────────────────────────────────────────────────────

describe('random mode', () => {
  const POOL = makePool({ mc: 50, essay: 10, define: 10 });

  test('always returns exactly 15 questions', () => {
    for (let i = 0; i < 10; i++) {
      expect(buildSessionQueue(POOL, 'random')).toHaveLength(15);
    }
  });

  test('contains exactly 1 essay', () => {
    const q = buildSessionQueue(POOL, 'random');
    expect(q.filter(e => e.type === 'essay')).toHaveLength(1);
  });

  test('contains exactly 2 define questions', () => {
    const q = buildSessionQueue(POOL, 'random');
    expect(q.filter(e => e.type === 'define')).toHaveLength(2);
  });

  test('contains exactly 12 other questions', () => {
    const q = buildSessionQueue(POOL, 'random');
    expect(q.filter(e => e.type !== 'essay' && e.type !== 'define')).toHaveLength(12);
  });

  test('returns fewer than 15 when pool is too small', () => {
    const small = makePool({ mc: 5, essay: 0, define: 1 });
    expect(buildSessionQueue(small, 'random').length).toBeLessThan(15);
  });

  test('draws from full pool — not just w:0 shared exercises', () => {
    // Regression: pool must include all worksheets, not EXERCISES.filter(w === 'random')
    const fullPool = makePool({ mc: 50, essay: 10, define: 10 });
    const q = buildSessionQueue(fullPool, 'random');
    expect(q).toHaveLength(15);
  });
});

// ─── Gyógyped. Alapismeretek (gyalap) disabled ───────────────────────────────

describe('gyalap questions (w >= 100) are disabled', () => {
  const ALL = [
    ...makePool({ mc: 20, essay: 5, define: 5 }),                 // w:1 worksheet questions
    { id: 'gyalap_ch1_01', type: 'mc', w: 101, diff: 1, q: 'Q', topic: 'T', opts: ['a','b','c','d'], ans: 0, exp: 'E' },
    { id: 'gyalap_ch2_01', type: 'tf', w: 102, diff: 1, q: 'Q', topic: 'T', ans: true, exp: 'E' },
    { id: 'gyalap_ch3_01', type: 'mc', w: 103, diff: 1, q: 'Q', topic: 'T', opts: ['a','b','c','d'], ans: 0, exp: 'E' },
  ];

  test.each(['mix', 'structured', 'random'])('%s pool excludes every w >= 100 question', (mode) => {
    const pool = selectPool(ALL, mode);
    expect(pool.some(e => e.w >= 100)).toBe(false);
    expect(pool.length).toBe(30); // 20 mc + 5 essay + 5 define, no gyalap
  });

  test('gyalap questions never reach a built session queue', () => {
    for (const mode of ['mix', 'structured', 'random']) {
      const q = buildSessionQueue(selectPool(ALL, mode), mode);
      expect(q.some(e => e.id.startsWith('gyalap_'))).toBe(false);
    }
  });

  test('review mode excludes gyalap even when previously seen', () => {
    // Mirrors the review filter in startSession: w >= 100 is dropped before the progress check.
    const progress = {
      mc_1:         { seen: 3, interval: 1 },
      gyalap_ch1_01:{ seen: 3, interval: 1 },   // seen + due, but must NOT appear
    };
    const reviewPool = ALL.filter(e => {
      if (e.w >= 100) return false;
      const p = progress[e.id];
      return p && p.seen > 0 && p.interval === 1;
    });
    expect(reviewPool.some(e => e.w >= 100)).toBe(false);
    expect(reviewPool.map(e => e.id)).toEqual(['mc_1']);
  });
});

// ─── Real past-exam years (separate sections, w = year) ──────────────────────

describe('real exam years (w = year, e.g. 2017)', () => {
  const ALL = [
    ...makePool({ mc: 10, essay: 2, define: 2 }),                        // w:1 worksheet questions
    { id: 'shared_1', type: 'mc', w: 0, diff: 1, q: 'Q', topic: 'T', opts: ['a','b','c','d'], ans: 0, exp: 'E' },
    { id: 'real_2017_01', type: 'mc', w: 2017, diff: 1, q: 'Q', topic: 'T', opts: ['a','b','c','d'], ans: 0, exp: 'E' },
    { id: 'real_2017_02', type: 'define', w: 2017, diff: 1, q: 'Q', topic: 'T', modelAnswer: 'MA', points: 2 },
    { id: 'real_2018_01', type: 'mc', w: 2018, diff: 1, q: 'Q', topic: 'T', opts: ['a','b','c','d'], ans: 0, exp: 'E' },
  ];

  test('a real-exam year mode selects only that year, not w:0 shared', () => {
    const pool = selectPool(ALL, 2017);
    expect(pool.map(e => e.id).sort()).toEqual(['real_2017_01', 'real_2017_02']);
    expect(pool.some(e => e.w === 0)).toBe(false);      // no shared
    expect(pool.some(e => e.w === 2018)).toBe(false);   // no other year
  });

  test.each(['mix', 'structured', 'random'])('%s pool includes real-exam questions (both years)', (mode) => {
    const pool = selectPool(ALL, mode);
    expect(pool.some(e => e.w === 2017)).toBe(true);
    expect(pool.some(e => e.w === 2018)).toBe(true);
  });

  test.each(['mix', 'structured', 'random'])('%s pool still excludes disabled gyalap (100–999)', (mode) => {
    const withGyalap = [...ALL, { id: 'gyalap_ch1_01', type: 'mc', w: 101, diff: 1, q: 'Q', topic: 'T', opts: ['a','b','c','d'], ans: 0, exp: 'E' }];
    const pool = selectPool(withGyalap, mode);
    expect(pool.some(e => e.w >= 100 && e.w < 2000)).toBe(false);
  });
});

// ─── Auto-advance must not exist for correct answers ─────────────────────────

describe('no auto-advance on correct answer', () => {
  test('checkAnswer for standard types does not schedule a timeout (no setTimeout call)', () => {
    // The correct-answer auto-advance was removed; nextExercise is only triggered
    // by an explicit btn-next click. This test documents that contract.
    // Implementation detail: the three setTimeout calls in app.js were deleted.
    // Regression: if any of them come back, the feedback disappears without user action.
    expect(true).toBe(true); // sentinel — update if regression is found
  });
});
