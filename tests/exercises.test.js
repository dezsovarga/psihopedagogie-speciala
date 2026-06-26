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
  'exercises/mixed.js',
  'exercises/essays.js',
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

const VALID_TYPES = ['mc', 'tf', 'fill', 'match', 'order', 'short', 'essay', 'define'];

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

  test.each([1, 2, 3, 4])('worksheet %i has enough questions for a full session (need >= 10)', (w) => {
    const count = EXERCISES.filter(e => e.w === w).length;
    expect(count).toBeGreaterThanOrEqual(10);
  });
});
