// ─── State ────────────────────────────────────────────────────────────────────
let progress = {};        // { exerciseId: { seen, correct, interval } }
let globalStats = {};     // { totalXp, streak, lastDate }
let session = null;       // current session state
let lastSessionMode = null;

function loadState() {
  try {
    progress = JSON.parse(localStorage.getItem('psp_progress') || '{}');
    globalStats = JSON.parse(localStorage.getItem('psp_stats') || '{"totalXp":0,"streak":0,"lastDate":""}');
  } catch(e) { progress = {}; globalStats = {totalXp:0,streak:0,lastDate:''}; }
}
function saveState() {
  localStorage.setItem('psp_progress', JSON.stringify(progress));
  localStorage.setItem('psp_stats', JSON.stringify(globalStats));
}

function getProgress(id) {
  if (!progress[id]) progress[id] = {seen:0, correct:0, interval:1};
  return progress[id];
}

// ─── Home Screen ──────────────────────────────────────────────────────────────
function updateHomeUI() {
  document.getElementById('stat-total-xp').textContent = globalStats.totalXp || 0;
  document.getElementById('stat-streak').textContent = globalStats.streak || 0;
  const mastered = Object.values(progress).filter(p => p.interval >= 4).length;
  document.getElementById('stat-mastered').textContent = mastered;

  [1, 2, 3].forEach(w => {
    const wEx = EXERCISES.filter(e => e.w === w);
    const done = wEx.filter(e => (progress[e.id]?.interval||1) >= 2).length;
    const pct = wEx.length ? Math.round(done / wEx.length * 100) : 0;
    document.getElementById(`fill-w${w}`).style.width = pct + '%';
    document.getElementById(`pct-w${w}`).textContent = pct + '%';
  });

  const reviewCount = EXERCISES.filter(e => {
    const p = progress[e.id];
    return p && p.seen > 0 && p.interval === 1;
  }).length;
  document.getElementById('review-count').textContent = reviewCount + ' kérdés';
}

// ─── Session ──────────────────────────────────────────────────────────────────
function startSession(mode) {
  lastSessionMode = mode;
  let pool;
  if (mode === 'review') {
    pool = EXERCISES.filter(e => {
      const p = progress[e.id];
      return p && p.seen > 0 && p.interval === 1;
    });
    if (pool.length === 0) { alert('Nincs ismétlésre váró kérdés! Először végezd el valamelyik változatot.'); return; }
  } else {
    pool = mode === 'mix'
      ? [...EXERCISES]
      : EXERCISES.filter(e => e.w === mode || e.w === 0);
  }

  // Sort: unseen first, then lowest interval, then shuffle within groups
  pool = pool.slice().sort((a, b) => {
    const pa = getProgress(a.id), pb = getProgress(b.id);
    if (pa.seen === 0 && pb.seen > 0) return -1;
    if (pa.seen > 0 && pb.seen === 0) return 1;
    if (pa.interval !== pb.interval) return pa.interval - pb.interval;
    return Math.random() - 0.5;
  });

  // Take up to 15 for a session
  const selected = pool.slice(0, 15);

  session = {
    mode,
    queue: shuffleArray(selected),
    index: 0,
    lives: 3,
    xpEarned: 0,
    results: [],       // {id, correct, topic}
    answered: false,
    selectedState: null
  };

  showScreen('exercise');
  renderExercise();
}

function exitSession() {
  if (session && session.index > 0) {
    if (!confirm('Biztosan megszakítod a gyakorlást?')) return;
  }
  goHome();
}

// ─── Rendering ────────────────────────────────────────────────────────────────
function renderExercise() {
  if (!session || session.index >= session.queue.length) {
    showResults();
    return;
  }

  const ex = session.queue[session.index];
  session.answered = false;
  session.selectedState = null;

  // Progress bar
  const pct = (session.index / session.queue.length) * 100;
  document.getElementById('ex-progress-bar').style.width = pct + '%';

  // Lives
  const hearts = '❤️'.repeat(session.lives) + '🖤'.repeat(Math.max(0, 3 - session.lives));
  document.getElementById('lives-display').textContent = hearts;

  // Reset footer
  document.getElementById('feedback-panel').style.display = 'none';
  document.getElementById('feedback-panel').className = 'feedback-panel';
  const btnCheck = document.getElementById('btn-check');
  const btnNext = document.getElementById('btn-next');
  btnCheck.style.display = 'block';
  btnCheck.disabled = true;
  btnNext.style.display = 'none';

  // Render body
  const body = document.getElementById('exercise-body');
  body.innerHTML = buildExerciseHTML(ex);
  attachExerciseListeners(ex);
}

function buildExerciseHTML(ex) {
  const typeBadge = {
    mc: 'Feleletválasztós',
    tf: 'Igaz / Hamis',
    fill: 'Töltsd ki!',
    match: 'Párosítás',
    order: 'Sorrendezés',
    short: 'Rövid válasz'
  }[ex.type] || ex.type;

  let html = `
    <span class="ex-type-badge">${typeBadge}</span>
    <div class="ex-topic">${ex.topic}</div>
    <div class="ex-question">${ex.q}</div>
  `;

  if (ex.type === 'mc') {
    html += `<div class="options-grid" id="options-grid">`;
    (ex.opts || []).forEach((opt, i) => {
      html += `<button class="option-btn" data-idx="${i}" onclick="selectOption(${i})">${opt}</button>`;
    });
    html += `</div>`;
  }

  else if (ex.type === 'tf') {
    html += `<div class="tf-buttons">
      <button class="tf-btn tf-true" data-val="true" onclick="selectTF(true)">✓ Igaz</button>
      <button class="tf-btn tf-false" data-val="false" onclick="selectTF(false)">✗ Hamis</button>
    </div>`;
  }

  else if (ex.type === 'fill') {
    // Replace ____________ with an inline input
    const qWithInput = ex.q.replace(/_{4,}/g, `<input class="blank-input" id="fill-main" type="text" autocomplete="off" placeholder="...">`);
    // Remove the question from the header since it's now in the fill container
    html = html.replace(`<div class="ex-question">${ex.q}</div>`, '');
    html += `<div class="fill-container" id="fill-container">${qWithInput}</div>`;
  }

  else if (ex.type === 'match') {
    const pairs = shuffleArray([...ex.pairs]);
    const rights = shuffleArray(pairs.map(p => p.R));
    html += `<p class="ordering-instruction">Kattints egy bal oldali elemre, majd a hozzá tartozó jobb oldali elemre!</p>
    <div class="matching-area">
      <div class="matching-col" id="match-left">`;
    pairs.forEach((p, i) => {
      html += `<div class="match-item left" data-left="${i}" data-term="${p.L}" onclick="selectMatchLeft(this)">${p.L}</div>`;
    });
    html += `</div><div class="matching-col" id="match-right">`;
    rights.forEach((r, i) => {
      html += `<div class="match-item right" data-right="${i}" data-def="${r}" onclick="selectMatchRight(this)">${r}</div>`;
    });
    html += `</div></div>`;
    session.selectedState = { selectedLeft: null, matched: 0, pairs: ex.pairs };
  }

  else if (ex.type === 'order') {
    const items = shuffleArray([...ex.items]);
    html += `<p class="ordering-instruction">Kattints a lépésekre a helyes sorrendben!</p>
    <div class="ordering-pool" id="order-pool">`;
    items.forEach((item, i) => {
      html += `<button class="order-chip" data-item="${i}" data-text="${item}" onclick="selectOrderItem(this)">${item}</button>`;
    });
    html += `</div>
    <div class="ordering-answer" id="order-answer">`;
    ex.items.forEach((_, i) => {
      html += `<div class="order-slot" id="slot-${i}"><span class="slot-num">${i+1}.</span> <span class="slot-text">—</span></div>`;
    });
    html += `</div>`;
    session.selectedState = { placed: [], correct: ex.items };
  }

  else if (ex.type === 'short') {
    html += `<textarea class="short-answer-input" id="short-input" placeholder="Írd be a választ..."></textarea>
    <div class="answer-hint">Kulcsszavak: ${(ex.keywords||[]).slice(0,3).join(', ')}...</div>`;
  }

  return html;
}

function attachExerciseListeners(ex) {
  if (ex.type === 'fill') {
    const inp = document.getElementById('fill-main');
    if (inp) inp.addEventListener('input', () => {
      document.getElementById('btn-check').disabled = inp.value.trim().length < 2;
    });
  }
  if (ex.type === 'short') {
    const inp = document.getElementById('short-input');
    if (inp) inp.addEventListener('input', () => {
      document.getElementById('btn-check').disabled = inp.value.trim().length < 3;
    });
  }
}

// ─── Selection handlers ───────────────────────────────────────────────────────
function selectOption(idx) {
  if (session.answered) return;
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  const btn = document.querySelector(`.option-btn[data-idx="${idx}"]`);
  if (btn) btn.classList.add('selected');
  session.selectedState = idx;
  document.getElementById('btn-check').disabled = false;
}

function selectTF(val) {
  if (session.answered) return;
  document.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('selected'));
  document.querySelector(`.tf-btn[data-val="${val}"]`).classList.add('selected');
  session.selectedState = val;
  document.getElementById('btn-check').disabled = false;
}

function selectMatchLeft(el) {
  if (session.answered) return;
  if (el.classList.contains('matched-correct')) return;
  document.querySelectorAll('.match-item.left').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  session.selectedState.selectedLeft = el;
}

function selectMatchRight(el) {
  if (session.answered) return;
  if (!session.selectedState || !session.selectedState.selectedLeft) return;
  if (el.classList.contains('matched-correct')) return;

  const leftEl = session.selectedState.selectedLeft;
  const leftTerm = leftEl.dataset.term;
  const rightDef = el.dataset.def;

  const correct = session.selectedState.pairs.find(p => p.L === leftTerm && p.R === rightDef);

  leftEl.classList.remove('selected');

  if (correct) {
    const num = session.selectedState.matched + 1;
    leftEl.classList.add('matched-correct');
    el.classList.add('matched-correct');
    leftEl.innerHTML = `<span class="match-pair-number">${num}</span>${leftTerm}`;
    el.innerHTML = `<span class="match-pair-number">${num}</span>${rightDef}`;
    session.selectedState.matched++;
    if (session.selectedState.matched === session.selectedState.pairs.length) {
      document.getElementById('btn-check').disabled = false;
    }
  } else {
    leftEl.classList.add('matched-wrong');
    el.classList.add('matched-wrong');
    setTimeout(() => {
      leftEl.classList.remove('matched-wrong');
      el.classList.remove('matched-wrong');
    }, 600);
    // Deduct for wrong match
    session.selectedState.selectedLeft = null;
  }
  session.selectedState.selectedLeft = null;
}

function selectOrderItem(el) {
  if (session.answered) return;
  if (el.classList.contains('used')) return;

  const state = session.selectedState;
  const idx = state.placed.length;
  if (idx >= state.correct.length) return;

  state.placed.push(el.dataset.text);
  el.classList.add('used');

  const slot = document.getElementById(`slot-${idx}`);
  slot.classList.add('filled');
  slot.querySelector('.slot-text').textContent = el.dataset.text;

  if (state.placed.length === state.correct.length) {
    document.getElementById('btn-check').disabled = false;
  }
}

// ─── Check Answer ─────────────────────────────────────────────────────────────
function checkAnswer() {
  const ex = session.queue[session.index];
  session.answered = true;
  document.getElementById('btn-check').style.display = 'none';
  document.getElementById('btn-next').style.display = 'block';

  let isCorrect = false;

  if (ex.type === 'mc') {
    isCorrect = session.selectedState === ex.ans;
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
      btn.disabled = true;
      if (i === ex.ans) btn.classList.add('correct');
      else if (i === session.selectedState && !isCorrect) btn.classList.add('wrong');
    });
  }

  else if (ex.type === 'tf') {
    isCorrect = session.selectedState === ex.ans;
    document.querySelectorAll('.tf-btn').forEach(btn => {
      btn.disabled = true;
      const val = btn.dataset.val === 'true';
      if (val === ex.ans) btn.classList.add('correct');
      else if (val === session.selectedState && !isCorrect) btn.classList.add('wrong');
    });
  }

  else if (ex.type === 'fill') {
    const inp = document.getElementById('fill-main');
    const userVal = (inp?.value || '').trim().toLowerCase();
    const correct = (ex.ans || '').toLowerCase();
    // Accept if answer contains the key term or is very similar
    isCorrect = userVal.includes(correct) || correct.includes(userVal) ||
      levenshtein(userVal, correct) <= 2;
    if (inp) inp.classList.add(isCorrect ? 'correct' : 'wrong');
    if (!isCorrect && inp) {
      inp.value = ex.ans;
    }
  }

  else if (ex.type === 'match') {
    isCorrect = session.selectedState.matched === session.selectedState.pairs.length;
  }

  else if (ex.type === 'order') {
    const placed = session.selectedState.placed;
    const correct = session.selectedState.correct;
    isCorrect = placed.every((item, i) => item === correct[i]);
    placed.forEach((item, i) => {
      const slot = document.getElementById(`slot-${i}`);
      slot.classList.remove('filled');
      slot.classList.add(item === correct[i] ? 'correct' : 'wrong');
    });
  }

  else if (ex.type === 'short') {
    const inp = document.getElementById('short-input');
    const userVal = (inp?.value || '').toLowerCase();
    const keywords = ex.keywords || [];
    const matched = keywords.filter(kw => userVal.includes(kw.toLowerCase())).length;
    isCorrect = matched >= Math.ceil(keywords.length * 0.6);
    if (inp) inp.classList.add(isCorrect ? 'correct' : 'wrong');
  }

  // Update progress
  const p = getProgress(ex.id);
  p.seen++;
  if (isCorrect) {
    p.correct++;
    p.interval = Math.min(p.interval * 2, 16);
    const xp = ex.diff === 1 ? 10 : ex.diff === 2 ? 15 : 20;
    session.xpEarned += xp;
    globalStats.totalXp = (globalStats.totalXp || 0) + xp;
    showXpFlash('+' + xp + ' XP');
  } else {
    p.interval = 1;
    if (session.lives > 0) session.lives--;
  }

  session.results.push({ id: ex.id, correct: isCorrect, topic: ex.topic });
  saveState();

  // Show feedback
  showFeedback(isCorrect, ex.exp);

  // Auto-advance on correct after delay
  if (isCorrect) {
    setTimeout(() => {
      if (session.answered) nextExercise();
    }, 1800);
  }
}

function showFeedback(correct, explanation) {
  const panel = document.getElementById('feedback-panel');
  panel.style.display = 'flex';
  panel.className = 'feedback-panel ' + (correct ? 'correct-fb' : 'wrong-fb');
  document.getElementById('feedback-icon').textContent = correct ? '✅' : '❌';
  document.getElementById('feedback-title').textContent = correct ? 'Helyes! Nagyszerű!' : 'Nem egészen...';
  document.getElementById('feedback-explanation').textContent = explanation || '';
}

function showXpFlash(text) {
  const el = document.createElement('div');
  el.className = 'xp-flash';
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1200);
}

function nextExercise() {
  session.index++;
  if (session.lives <= 0 || session.index >= session.queue.length) {
    showResults();
  } else {
    renderExercise();
  }
}

// ─── Results ──────────────────────────────────────────────────────────────────
function showResults() {
  const correct = session.results.filter(r => r.correct).length;
  const total = session.results.length;
  const accuracy = total > 0 ? Math.round(correct / total * 100) : 0;

  const icon = accuracy >= 80 ? '🏆' : accuracy >= 60 ? '🎉' : '💪';
  const title = accuracy >= 80 ? 'Kiváló!' : accuracy >= 60 ? 'Jó munka!' : 'Tartsd ki, fejlődsz!';

  document.getElementById('results-icon').textContent = icon;
  document.getElementById('results-title').textContent = title;
  document.getElementById('res-xp').textContent = '+' + session.xpEarned;
  document.getElementById('res-correct').textContent = `${correct}/${total}`;
  document.getElementById('res-accuracy').textContent = accuracy + '%';

  // Breakdown
  const breakdown = document.getElementById('results-breakdown');
  const grouped = {};
  session.results.forEach(r => {
    if (!grouped[r.topic]) grouped[r.topic] = {correct:0,total:0};
    grouped[r.topic].total++;
    if (r.correct) grouped[r.topic].correct++;
  });
  breakdown.innerHTML = Object.entries(grouped).map(([topic, {correct, total}]) => `
    <div class="breakdown-item">
      <span class="breakdown-icon">${correct === total ? '✅' : correct > 0 ? '🔶' : '❌'}</span>
      <div class="breakdown-text">
        <div class="breakdown-topic">${topic}</div>
        <div class="breakdown-sub">${correct}/${total} helyes</div>
      </div>
    </div>
  `).join('');

  showScreen('results');
  updateHomeUI();
}

function goHome() {
  session = null;
  showScreen('home');
  updateHomeUI();
}

function redoSession() {
  if (lastSessionMode !== null) startSession(lastSessionMode);
}

// ─── Screen management ────────────────────────────────────────────────────────
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
}

// ─── Utils ────────────────────────────────────────────────────────────────────
function levenshtein(a, b) {
  const dp = Array.from({length: a.length+1}, (_, i) =>
    Array.from({length: b.length+1}, (_, j) => i === 0 ? j : j === 0 ? i : 0)
  );
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] :
        1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[a.length][b.length];
}

// ─── Export / Import ──────────────────────────────────────────────────────────
function exportProgress() {
  const data = { progress, globalStats, exportedAt: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'psp_haladás_' + new Date().toISOString().slice(0,10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
}

function importProgress(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.progress && data.globalStats) {
        progress = data.progress;
        globalStats = data.globalStats;
        saveState();
        updateHomeUI();
        alert('Haladás sikeresen betöltve! ✅');
      } else {
        alert('Érvénytelen fájl – nem található haladási adat.');
      }
    } catch {
      alert('Hiba a fájl beolvasásakor.');
    }
    event.target.value = '';
  };
  reader.readAsText(file);
}

// ─── Init ─────────────────────────────────────────────────────────────────────
loadState();
updateHomeUI();
showScreen('home');
