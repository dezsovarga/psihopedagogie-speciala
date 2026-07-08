/**
 * Exercise data integrity tests.
 * Catches: syntax errors, missing required fields, duplicate IDs,
 * wrong option/pair counts, and insufficient questions for each session slot.
 */

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

// ─── Load all exercise files into one array ───────────────────────────────────

const EXERCISE_FILES = [
  'exercises/worksheet_1.js',
  'exercises/worksheet_2.js',
  'exercises/worksheet_3.js',
  'exercises/worksheet_4.js',
  'exercises/worksheet_5.js',
  'exercises/worksheet_6.js',
  'exercises/worksheet_7.js',
  'exercises/mixed.js',
  'exercises/essays.js',
  'exercises/lists.js',
  'exercises/real_2017.js',
  'exercises/gyalap_ch1.js',
  'exercises/gyalap_ch2.js',
  'exercises/gyalap_ch3.js',
];

function loadExercises() {
  const all = [];
  for (const relPath of EXERCISE_FILES) {
    const absPath = path.resolve(__dirname, '..', relPath);
    const src = fs.readFileSync(absPath, 'utf8');
    // `const` in a VM context is block-scoped and not exposed on ctx — rewrite to `var`
    const patched = src.replace(/\bconst\s+(EXERCISES_\w+)/, 'var $1');
    const ctx = {};
    vm.runInNewContext(patched, ctx);                              // throws on syntax error
    const varName = Object.keys(ctx).find(k => k.startsWith('EXERCISES_'));
    expect(varName).toBeDefined();                                 // file must export an EXERCISES_* var
    const arr = ctx[varName];
    expect(Array.isArray(arr)).toBe(true);                        // must be an array
    all.push(...arr);
  }
  return all;
}

let EXERCISES;
beforeAll(() => { EXERCISES = loadExercises(); });

// ─── Each file must parse without errors ─────────────────────────────────────

describe('File parsing', () => {
  test.each(EXERCISE_FILES)('%s parses without syntax errors', (relPath) => {
    const src = fs.readFileSync(path.resolve(__dirname, '..', relPath), 'utf8');
    expect(() => vm.runInNewContext(src, {})).not.toThrow();
  });
});

// ─── Fields required on every exercise ───────────────────────────────────────

const VALID_TYPES = ['mc', 'tf', 'fill', 'match', 'order', 'short', 'essay', 'define', 'list'];

describe('Required fields on every exercise', () => {
  test('all exercises have id, w, topic, type, q, diff', () => {
    const errors = [];
    for (const ex of EXERCISES) {
      if (!ex.id)                         errors.push(`${ex.id ?? '??'}: missing id`);
      if (typeof ex.w !== 'number')       errors.push(`${ex.id}: w must be a number`);
      if (!ex.topic)                      errors.push(`${ex.id}: missing topic`);
      if (!VALID_TYPES.includes(ex.type)) errors.push(`${ex.id}: unknown type "${ex.type}"`);
      if (!ex.q)                          errors.push(`${ex.id}: missing q`);
      if (![1,2,3].includes(ex.diff))     errors.push(`${ex.id}: diff must be 1, 2, or 3`);
    }
    expect(errors).toEqual([]);
  });
});

// ─── No duplicate IDs ─────────────────────────────────────────────────────────

describe('ID uniqueness', () => {
  test('no two exercises share the same id', () => {
    const seen = new Map();
    const dupes = [];
    for (const ex of EXERCISES) {
      if (seen.has(ex.id)) dupes.push(`${ex.id} (also in ${seen.get(ex.id)})`);
      else seen.set(ex.id, ex.type);
    }
    expect(dupes).toEqual([]);
  });
});

// ─── Type-specific field rules ────────────────────────────────────────────────

describe('mc questions', () => {
  const mcs = () => EXERCISES.filter(e => e.type === 'mc');
  test('have exactly 4 options', () => {
    const bad = mcs().filter(e => !Array.isArray(e.opts) || e.opts.length !== 4);
    expect(bad.map(e => e.id)).toEqual([]);
  });
  test('ans is a valid 0-based index into opts', () => {
    const bad = mcs().filter(e => typeof e.ans !== 'number' || e.ans < 0 || e.ans > 3);
    expect(bad.map(e => e.id)).toEqual([]);
  });
  test('have exp', () => {
    const bad = mcs().filter(e => !e.exp);
    expect(bad.map(e => e.id)).toEqual([]);
  });
});

describe('tf questions', () => {
  test('ans is boolean', () => {
    const bad = EXERCISES.filter(e => e.type === 'tf' && typeof e.ans !== 'boolean');
    expect(bad.map(e => e.id)).toEqual([]);
  });
  test('have exp', () => {
    const bad = EXERCISES.filter(e => e.type === 'tf' && !e.exp);
    expect(bad.map(e => e.id)).toEqual([]);
  });
});

describe('fill questions', () => {
  test('ans is a non-empty string', () => {
    const bad = EXERCISES.filter(e => e.type === 'fill' && (typeof e.ans !== 'string' || !e.ans.trim()));
    expect(bad.map(e => e.id)).toEqual([]);
  });
  test('have exp', () => {
    const bad = EXERCISES.filter(e => e.type === 'fill' && !e.exp);
    expect(bad.map(e => e.id)).toEqual([]);
  });
});

describe('match questions', () => {
  test('have exactly 4 pairs each with L and R', () => {
    const bad = EXERCISES.filter(e => {
      if (e.type !== 'match') return false;
      return !Array.isArray(e.pairs) || e.pairs.length !== 4 ||
        e.pairs.some(p => !p.L || !p.R);
    });
    expect(bad.map(e => e.id)).toEqual([]);
  });
  test('have exp', () => {
    const bad = EXERCISES.filter(e => e.type === 'match' && !e.exp);
    expect(bad.map(e => e.id)).toEqual([]);
  });
});

describe('order questions', () => {
  test('items is a non-empty array', () => {
    const bad = EXERCISES.filter(e => e.type === 'order' && (!Array.isArray(e.items) || e.items.length < 2));
    expect(bad.map(e => e.id)).toEqual([]);
  });
  test('have exp', () => {
    const bad = EXERCISES.filter(e => e.type === 'order' && !e.exp);
    expect(bad.map(e => e.id)).toEqual([]);
  });
});

describe('short questions', () => {
  test('keywords is a non-empty array', () => {
    const bad = EXERCISES.filter(e => e.type === 'short' && (!Array.isArray(e.keywords) || e.keywords.length === 0));
    expect(bad.map(e => e.id)).toEqual([]);
  });
  test('have exp', () => {
    const bad = EXERCISES.filter(e => e.type === 'short' && !e.exp);
    expect(bad.map(e => e.id)).toEqual([]);
  });
});

describe('list (enumeration) questions', () => {
  const lists = () => EXERCISES.filter(e => e.type === 'list');

  test('items is an array of at least 2 entries', () => {
    const bad = lists().filter(e => !Array.isArray(e.items) || e.items.length < 2);
    expect(bad.map(e => e.id)).toEqual([]);
  });

  test('each item is a non-empty string or an object with a non-empty label', () => {
    const bad = lists().filter(e => (e.items || []).some(it => {
      if (typeof it === 'string') return !it.trim();
      return !it || typeof it.label !== 'string' || !it.label.trim();
    }));
    expect(bad.map(e => e.id)).toEqual([]);
  });

  test('optional need is an integer between 1 and items.length', () => {
    const bad = lists().filter(e => e.need !== undefined &&
      (!Number.isInteger(e.need) || e.need < 1 || e.need > e.items.length));
    expect(bad.map(e => e.id)).toEqual([]);
  });

  test('have exp', () => {
    const bad = lists().filter(e => !e.exp);
    expect(bad.map(e => e.id)).toEqual([]);
  });
});

// ─── Questions must be self-contained ────────────────────────────────────────
// A question may not lean on exam-internal structure (a task/tétel) that the
// learner never sees in the app — e.g. "Sorolja fel az I. feladat ... fogalmát".
describe('questions are standalone', () => {
  const FORBIDDEN = [
    /\b[IVX]+\.\s*feladat/,     // "I. feladat", "II. feladat", ...
    /tétel szerint/i,           // "(a tétel szerint)"
    /tételben szerepl/i,        // "a tételben szereplő ..."
    /feladat szerint/i,         // "(a ... feladat szerint)"
  ];
  test('no question text references an unseen task/tétel', () => {
    const bad = EXERCISES.filter(e => FORBIDDEN.some(re => re.test(e.q)));
    expect(bad.map(e => e.id)).toEqual([]);
  });
});

describe('essay questions', () => {
  test('have modelAnswer and points', () => {
    const bad = EXERCISES.filter(e => e.type === 'essay' && (!e.modelAnswer || typeof e.points !== 'number'));
    expect(bad.map(e => e.id)).toEqual([]);
  });
});

describe('define questions', () => {
  test('have modelAnswer and points', () => {
    const bad = EXERCISES.filter(e => e.type === 'define' && (!e.modelAnswer || typeof e.points !== 'number'));
    expect(bad.map(e => e.id)).toEqual([]);
  });

  test('points are a positive integer', () => {
    const bad = EXERCISES.filter(e => e.type === 'define' && (e.points < 1 || !Number.isInteger(e.points)));
    expect(bad.map(e => e.id)).toEqual([]);
  });

  test('w is a valid worksheet (1–7) or real-exam year (>= 2000), not shared (0)', () => {
    const bad = EXERCISES.filter(e => e.type === 'define' && ![1,2,3,4,5,6,7].includes(e.w) && e.w < 2000);
    expect(bad.map(e => e.id)).toEqual([]);
  });
});

describe('essay questions', () => {
  test('points are a positive integer', () => {
    const bad = EXERCISES.filter(e => e.type === 'essay' && (e.points < 1 || !Number.isInteger(e.points)));
    expect(bad.map(e => e.id)).toEqual([]);
  });

  test('w is a valid worksheet (1–7) or real-exam year (>= 2000), not shared (0)', () => {
    const bad = EXERCISES.filter(e => e.type === 'essay' && ![1,2,3,4,5,6,7].includes(e.w) && e.w < 2000);
    expect(bad.map(e => e.id)).toEqual([]);
  });
});

// ─── Session slot coverage ────────────────────────────────────────────────────

describe('Session slot coverage', () => {
  test('enough "other" exercises for structured session (need >= 10)', () => {
    const count = EXERCISES.filter(e => e.type !== 'essay' && e.type !== 'define').length;
    expect(count).toBeGreaterThanOrEqual(10);
  });

  test('enough define exercises for structured session (need >= 3)', () => {
    const count = EXERCISES.filter(e => e.type === 'define').length;
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('enough essay exercises for structured session (need >= 2)', () => {
    const count = EXERCISES.filter(e => e.type === 'essay').length;
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test.each([1, 2, 3, 4, 5, 6, 7])('worksheet %i has enough questions for a full session (need >= 10)', (w) => {
    const count = EXERCISES.filter(e => e.w === w).length;
    expect(count).toBeGreaterThanOrEqual(10);
  });

  test.each([2, 3, 4, 5, 6, 7])('worksheet %i has at least 3 define questions', (w) => {
    const count = EXERCISES.filter(e => e.type === 'define' && e.w === w).length;
    expect(count).toBeGreaterThanOrEqual(3);
  });

  // W1 has defines from all three feladatok — keep the threshold higher
  test('worksheet 1 has at least 16 define questions (covers I–II. feladat)', () => {
    const count = EXERCISES.filter(e => e.type === 'define' && e.w === 1).length;
    expect(count).toBeGreaterThanOrEqual(16);
  });

  // Each worksheet must have defines from more than just I. feladat (Fogalommeghatározás)
  test.each([1, 2, 3, 4, 5, 6, 7])('worksheet %i has define questions outside the Fogalommeghatározás topic', (w) => {
    const count = EXERCISES.filter(e => e.type === 'define' && e.w === w && e.topic !== 'Fogalommeghatározás').length;
    expect(count).toBeGreaterThanOrEqual(1);
  });

  // Enumeration (list) type — every worksheet must have enough list questions
  test.each([1, 2, 3, 4, 5, 6, 7])('worksheet %i has at least 5 list (enumeration) questions', (w) => {
    const count = EXERCISES.filter(e => e.type === 'list' && e.w === w).length;
    expect(count).toBeGreaterThanOrEqual(5);
  });

  // Gyógypedagógiai Alapismeretek chapter coverage
  test('gyalap chapter 1 (w:101) has at least 10 exercises', () => {
    const count = EXERCISES.filter(e => e.w === 101).length;
    expect(count).toBeGreaterThanOrEqual(10);
  });

  test('all gyalap chapter 1 exercises have w: 101', () => {
    const gyalapCh1 = EXERCISES.filter(e => e.id && e.id.startsWith('gyalap_ch1_'));
    expect(gyalapCh1.length).toBeGreaterThan(0);
    const wrongW = gyalapCh1.filter(e => e.w !== 101);
    expect(wrongW.map(e => e.id)).toEqual([]);
  });

  test('gyalap chapter 2 (w:102) has at least 10 exercises', () => {
    const count = EXERCISES.filter(e => e.w === 102).length;
    expect(count).toBeGreaterThanOrEqual(10);
  });

  test('all gyalap chapter 2 exercises have w: 102', () => {
    const gyalapCh2 = EXERCISES.filter(e => e.id && e.id.startsWith('gyalap_ch2_'));
    expect(gyalapCh2.length).toBeGreaterThan(0);
    const wrongW = gyalapCh2.filter(e => e.w !== 102);
    expect(wrongW.map(e => e.id)).toEqual([]);
  });

  test('gyalap chapter 3 (w:103) has at least 10 exercises', () => {
    const count = EXERCISES.filter(e => e.w === 103).length;
    expect(count).toBeGreaterThanOrEqual(10);
  });

  test('all gyalap chapter 3 exercises have w: 103', () => {
    const ch = EXERCISES.filter(e => e.id && e.id.startsWith('gyalap_ch3_'));
    expect(ch.length).toBeGreaterThan(0);
    expect(ch.filter(e => e.w !== 103).map(e => e.id)).toEqual([]);
  });

  // Real past-exam years (w = year, e.g. 2017). Add each new year here.
  const REAL_EXAM_YEARS = [2017];

  test.each(REAL_EXAM_YEARS)('real exam %i has at least 15 questions for a full session', (year) => {
    const count = EXERCISES.filter(e => e.w === year).length;
    expect(count).toBeGreaterThanOrEqual(15);
  });

  test.each(REAL_EXAM_YEARS)('all real_%i exercises have w = %i', (year) => {
    const ex = EXERCISES.filter(e => e.id && e.id.startsWith(`real_${year}_`));
    expect(ex.length).toBeGreaterThan(0);
    expect(ex.filter(e => e.w !== year).map(e => e.id)).toEqual([]);
  });

  test.each(REAL_EXAM_YEARS)('real exam %i has a solid set of define questions (>= 10)', (year) => {
    const count = EXERCISES.filter(e => e.type === 'define' && e.w === year).length;
    expect(count).toBeGreaterThanOrEqual(10);
  });
});

// ─── Exam tips (tips.js) ──────────────────────────────────────────────────────

describe('exam tips (tips.js)', () => {
  function loadTips() {
    const src = fs.readFileSync(path.resolve(__dirname, '..', 'tips.js'), 'utf8');
    const patched = src.replace(/\bconst\s+(EXAM_TIPS)/, 'var $1');
    const ctx = {};
    vm.runInNewContext(patched, ctx);           // throws on syntax error
    return ctx.EXAM_TIPS;
  }

  test('tips.js parses and exports a non-empty EXAM_TIPS array', () => {
    const tips = loadTips();
    expect(Array.isArray(tips)).toBe(true);
    expect(tips.length).toBeGreaterThanOrEqual(10);
  });

  test('every tip is a non-empty string', () => {
    const bad = loadTips().filter(t => typeof t !== 'string' || !t.trim());
    expect(bad).toEqual([]);
  });

  test('tips are unique', () => {
    const tips = loadTips();
    expect(new Set(tips).size).toBe(tips.length);
  });
});
