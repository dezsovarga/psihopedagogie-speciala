// ─── State ────────────────────────────────────────────────────────────────────
let progress = {};
let globalStats = {};
let session = null;
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

// ─── Settings / Worker URL ────────────────────────────────────────────────────
const DEFAULT_WORKER_URL = 'https://psp-claude-proxy.vargadezso.workers.dev';

function getWorkerUrl() {
  return localStorage.getItem('psp_worker_url') || DEFAULT_WORKER_URL;
}
function openSettings() {
  const modal = document.getElementById('settings-modal');
  const inp = document.getElementById('api-key-input');
  inp.value = getWorkerUrl();
  document.getElementById('settings-status').textContent = '';
  document.getElementById('settings-status').className = 'settings-status';
  modal.style.display = 'flex';
}
function closeSettings() {
  document.getElementById('settings-modal').style.display = 'none';
}
function saveApiKey() {
  const val = document.getElementById('api-key-input').value.trim().replace(/\/$/, '');
  const status = document.getElementById('settings-status');
  if (val) {
    try {
      const u = new URL(val);
      if (u.protocol !== 'https:') throw new Error();
    } catch(e) {
      status.textContent = 'Érvénytelen URL (https://... kell)';
      status.className = 'settings-status err';
      return;
    }
  }
  if (val) localStorage.setItem('psp_worker_url', val);
  else      localStorage.removeItem('psp_worker_url');
  status.textContent = val ? '✓ Worker URL mentve' : 'Worker URL törölve';
  status.className = 'settings-status ok';
  updateSettingsGear();
  setTimeout(closeSettings, 900);
}
function clearApiKey() {
  document.getElementById('api-key-input').value = '';
  localStorage.removeItem('psp_worker_url');
  const status = document.getElementById('settings-status');
  status.textContent = 'Worker URL törölve';
  status.className = 'settings-status ok';
  updateSettingsGear();
}
function updateSettingsGear() {
  const btn = document.querySelector('.btn-settings-gear');
  if (btn) btn.classList.toggle('has-key', isLocalhost() || !!getWorkerUrl());
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
  updateSettingsGear();
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

  pool = pool.slice().sort((a, b) => {
    const pa = getProgress(a.id), pb = getProgress(b.id);
    if (pa.seen === 0 && pb.seen > 0) return -1;
    if (pa.seen > 0 && pb.seen === 0) return 1;
    if (pa.interval !== pb.interval) return pa.interval - pb.interval;
    return Math.random() - 0.5;
  });

  // Limit essay questions to 2 per session
  const nonEssay = pool.filter(e => e.type !== 'essay');
  const essays   = pool.filter(e => e.type === 'essay');
  const selected = [...nonEssay.slice(0, 13), ...essays.slice(0, 2)].slice(0, 15);

  session = {
    mode,
    queue: shuffleArray(selected),
    index: 0,
    lives: 3,
    xpEarned: 0,
    results: [],
    answered: false,
    selectedState: null
  };

  showScreen('exercise');
  renderExercise();
}

function exitSession() {
  stopMic();
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

  stopMic();
  const ex = session.queue[session.index];
  session.answered = false;
  session.selectedState = null;

  const pct = (session.index / session.queue.length) * 100;
  document.getElementById('ex-progress-bar').style.width = pct + '%';

  const hearts = '❤️'.repeat(session.lives) + '🖤'.repeat(Math.max(0, 3 - session.lives));
  document.getElementById('lives-display').textContent = hearts;

  document.getElementById('feedback-panel').style.display = 'none';
  document.getElementById('feedback-panel').className = 'feedback-panel';
  document.getElementById('feedback-panel').innerHTML =
    '<div class="feedback-icon" id="feedback-icon"></div>' +
    '<div class="feedback-text">' +
      '<div class="feedback-title" id="feedback-title"></div>' +
      '<div class="feedback-explanation" id="feedback-explanation"></div>' +
    '</div>';
  document.getElementById('evaluating-state').style.display = 'none';
  const btnCheck = document.getElementById('btn-check');
  const btnNext  = document.getElementById('btn-next');
  btnCheck.style.display = 'block';
  btnCheck.disabled = true;
  btnNext.style.display = 'none';

  document.getElementById('exercise-body').innerHTML = buildExerciseHTML(ex);
  attachExerciseListeners(ex);
}

function buildExerciseHTML(ex) {
  const typeBadge = {
    mc:     'Feleletválasztós',
    tf:     'Igaz / Hamis',
    fill:   'Töltsd ki!',
    match:  'Párosítás',
    order:  'Sorrendezés',
    short:  'Rövid válasz',
    essay:  'Esszékérdés'
  }[ex.type] || ex.type;

  const badgeClass = ex.type === 'essay' ? 'ex-type-badge essay-badge' : 'ex-type-badge';

  let html = `
    <span class="${badgeClass}">${typeBadge}${ex.type === 'essay' ? ` · ${ex.points} pont` : ''}</span>
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
    const qWithInput = ex.q.replace(/_{4,}/g, `<input class="blank-input" id="fill-main" type="text" autocomplete="off" placeholder="...">`);
    html = html.replace(`<div class="ex-question">${ex.q}</div>`, '');
    html += `<div class="fill-container" id="fill-container">${qWithInput}</div>
    <div class="fill-mic-row">
      <button class="btn-mic-small" id="btn-mic" onclick="toggleMic('fill-main')" title="Diktálás mikrofonnal">🎤</button>
    </div>
    <div id="mic-interim" class="mic-interim-preview"></div>`;
  }

  else if (ex.type === 'match') {
    const pairs  = shuffleArray([...ex.pairs]);
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
    <div class="short-input-footer">
      <div class="answer-hint">Kulcsszavak: ${(ex.keywords||[]).slice(0,3).join(', ')}...</div>
      <button class="btn-mic-small" id="btn-mic" onclick="toggleMic('short-input')" title="Diktálás mikrofonnal">🎤</button>
    </div>
    <div id="mic-interim" class="mic-interim-preview"></div>`;
  }

  else if (ex.type === 'essay') {
    if (!isLocalhost() && !getWorkerUrl()) {
      html += `<div class="no-api-notice">⚙ <strong>Cloudflare Worker URL szükséges</strong> az esszé kiértékeléséhez.
        <button class="link-btn" onclick="openSettings()">Beállítások →</button></div>`;
    }
    html += `<textarea class="essay-input" id="essay-input" placeholder="Írd be részletes válaszodat..."></textarea>
    <div class="essay-input-footer">
      <button class="btn-mic" id="btn-mic" onclick="toggleMic('essay-input')" title="Diktálás mikrofonnal">🎤 Diktálás</button>
      <span class="essay-points-badge">${ex.points} pont</span>
    </div>
    <div id="mic-interim" class="mic-interim-preview"></div>`;
  }

  return html;
}

function attachExerciseListeners(ex) {
  if (ex.type === 'fill') {
    const inp = document.getElementById('fill-main');
    if (inp) {
      inp.addEventListener('input', () => {
        document.getElementById('btn-check').disabled = inp.value.trim().length < 2;
      });
      inp.focus();
    }
  }
  if (ex.type === 'short') {
    const inp = document.getElementById('short-input');
    if (inp) inp.addEventListener('input', () => {
      document.getElementById('btn-check').disabled = inp.value.trim().length < 3;
    });
  }
  if (ex.type === 'essay') {
    const inp = document.getElementById('essay-input');
    if (inp) inp.addEventListener('input', () => {
      document.getElementById('btn-check').disabled = inp.value.trim().length < 10;
    });
  }
}

// ─── Mic / Speech Recognition ─────────────────────────────────────────────────
let micRecognition = null;
let micActive = false;

function toggleMic(targetId) {
  if (micActive) {
    stopMic();
  } else {
    startMic(targetId);
  }
}

function startMic(targetId) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    alert('A böngésződ nem támogatja a hangfelismerést. Kérlek használj Chrome-ot!');
    return;
  }

  micActive = true;
  micRecognition = new SR();
  micRecognition.lang = 'hu-HU';
  micRecognition.continuous = true;
  micRecognition.interimResults = true;

  micRecognition.onstart = () => updateMicButton(true);

  micRecognition.onresult = (event) => {
    let interim = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        const inp = document.getElementById(targetId);
        if (inp) {
          const sep = inp.value.trim() ? ' ' : '';
          inp.value = inp.value.trim() + sep + transcript;
          inp.dispatchEvent(new Event('input'));
        }
      } else {
        interim += transcript;
      }
    }
    const preview = document.getElementById('mic-interim');
    if (preview) preview.textContent = interim;
  };

  micRecognition.onerror = (e) => {
    if (e.error !== 'no-speech') console.warn('Mic error:', e.error);
    stopMic();
  };

  micRecognition.onend = () => {
    if (micActive) {
      try { micRecognition.start(); } catch(e) { stopMic(); }
    }
  };

  micRecognition.start();
}

function stopMic() {
  micActive = false;
  if (micRecognition) {
    try { micRecognition.stop(); } catch(e) {}
    micRecognition = null;
  }
  updateMicButton(false);
  const preview = document.getElementById('mic-interim');
  if (preview) preview.textContent = '';
}

function updateMicButton(active) {
  const btn = document.getElementById('btn-mic');
  if (!btn) return;
  if (active) {
    btn.classList.add('mic-recording');
    btn.textContent = btn.classList.contains('btn-mic') ? '⏹ Stop' : '⏹';
  } else {
    btn.classList.remove('mic-recording');
    btn.innerHTML = btn.classList.contains('btn-mic') ? '🎤 Diktálás' : '🎤';
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

  const leftEl   = session.selectedState.selectedLeft;
  const leftTerm = leftEl.dataset.term;
  const rightDef = el.dataset.def;
  const correct  = session.selectedState.pairs.find(p => p.L === leftTerm && p.R === rightDef);

  leftEl.classList.remove('selected');

  if (correct) {
    const num = session.selectedState.matched + 1;
    leftEl.classList.add('matched-correct');
    el.classList.add('matched-correct');
    leftEl.innerHTML = `<span class="match-pair-number">${num}</span>${leftTerm}`;
    el.innerHTML     = `<span class="match-pair-number">${num}</span>${rightDef}`;
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
  }
  session.selectedState.selectedLeft = null;
}

function selectOrderItem(el) {
  if (session.answered) return;
  if (el.classList.contains('used')) return;

  const state = session.selectedState;
  const idx   = state.placed.length;
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

  // Essay answers go through Claude
  if (ex.type === 'essay') {
    checkAnswerEssay(ex);
    return;
  }

  session.answered = true;
  stopMic();
  document.getElementById('btn-check').style.display = 'none';
  document.getElementById('btn-next').style.display  = 'block';

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
    const inp  = document.getElementById('fill-main');
    const user = (inp?.value || '').trim().toLowerCase();
    const ans  = (ex.ans || '').toLowerCase();
    isCorrect  = user.includes(ans) || ans.includes(user) || levenshtein(user, ans) <= 2;
    if (inp) inp.classList.add(isCorrect ? 'correct' : 'wrong');
    if (!isCorrect && inp) inp.value = ex.ans;
  }

  else if (ex.type === 'match') {
    isCorrect = session.selectedState.matched === session.selectedState.pairs.length;
  }

  else if (ex.type === 'order') {
    const placed  = session.selectedState.placed;
    const correct = session.selectedState.correct;
    isCorrect = placed.every((item, i) => item === correct[i]);
    placed.forEach((item, i) => {
      const slot = document.getElementById(`slot-${i}`);
      slot.classList.remove('filled');
      slot.classList.add(item === correct[i] ? 'correct' : 'wrong');
    });
  }

  else if (ex.type === 'short') {
    const inp      = document.getElementById('short-input');
    const user     = (inp?.value || '').toLowerCase();
    const keywords = ex.keywords || [];
    const matched  = keywords.filter(kw => user.includes(kw.toLowerCase())).length;
    isCorrect = matched >= Math.ceil(keywords.length * 0.6);
    if (inp) inp.classList.add(isCorrect ? 'correct' : 'wrong');
  }

  recordResult(ex, isCorrect);
  showFeedback(isCorrect, ex.exp);

  if (isCorrect) {
    setTimeout(() => { if (session.answered) nextExercise(); }, 1800);
  }
}

async function checkAnswerEssay(ex) {
  const inp = document.getElementById('essay-input');
  const userAnswer = (inp?.value || '').trim();
  if (!userAnswer) return;

  session.answered = true;
  stopMic();
  document.getElementById('btn-check').style.display = 'none';
  document.getElementById('evaluating-state').style.display = 'flex';

  if (!isLocalhost() && !getWorkerUrl()) {
    document.getElementById('evaluating-state').style.display = 'none';
    showNoApiKeyFeedback(ex);
    document.getElementById('btn-next').style.display = 'block';
    return;
  }

  try {
    const result = await evaluateWithClaude(ex, userAnswer);
    document.getElementById('evaluating-state').style.display = 'none';

    const score    = Math.max(0, Math.min(result.score || 0, ex.points));
    const isGood   = score >= Math.ceil(ex.points * 0.6);
    const xp       = Math.round(score * (ex.diff === 1 ? 4 : ex.diff === 2 ? 5 : 6));

    recordResult(ex, isGood, xp);
    if (inp) inp.classList.add(isGood ? 'correct' : 'wrong');

    showEssayFeedback(result, score, ex);
    document.getElementById('btn-next').style.display = 'block';

    if (isGood) {
      setTimeout(() => { if (session.answered) nextExercise(); }, 4000);
    }
  } catch(err) {
    document.getElementById('evaluating-state').style.display = 'none';
    // Network / CORS errors → fall back to self-assessment so the app still works
    const isNetworkErr = err instanceof TypeError ||
      err.message.includes('NetworkError') ||
      err.message.includes('Failed to fetch') ||
      err.message.includes('fetch');
    if (isNetworkErr) {
      session.answered = false; // let selfAssess() finalise
      showSelfAssessment(ex);
    } else {
      session.answered = false;
      document.getElementById('btn-check').style.display = 'block';
      showApiErrorFeedback(err.message);
    }
  }
}

function recordResult(ex, isCorrect, customXp) {
  const p = getProgress(ex.id);
  p.seen++;
  if (isCorrect) {
    p.correct++;
    p.interval = Math.min(p.interval * 2, 16);
    const xp = customXp !== undefined ? customXp : (ex.diff === 1 ? 10 : ex.diff === 2 ? 15 : 20);
    session.xpEarned += xp;
    globalStats.totalXp = (globalStats.totalXp || 0) + xp;
    showXpFlash('+' + xp + ' XP');
  } else {
    p.interval = 1;
    if (session.lives > 0) session.lives--;
  }
  session.results.push({ id: ex.id, correct: isCorrect, topic: ex.topic });
  saveState();
}

// ─── Claude API ───────────────────────────────────────────────────────────────
function isLocalhost() {
  return location.hostname === 'localhost' || location.hostname === '127.0.0.1';
}

async function evaluateWithClaude(ex, userAnswer) {
  const prompt = `Te egy speciális nevelési igényű pedagógia titularizare vizsga értékelője vagy.
Értékeld az alábbi vizsgakérdésre adott jelölti választ!

Kérdés: ${ex.q}

Várt válasz (mintaválasz): ${ex.modelAnswer}

Jelölt válasza: ${userAnswer}

Értékeld a választ szigorúan, ${ex.points} pontos skálán.
Adj visszajelzést MAGYARUL az alábbi JSON formátumban:

{
  "score": <0–${ex.points} egész szám>,
  "verdict": "<kiváló|jó|részleges|elégtelen>",
  "strengths": ["<helyesen említett pont 1>", "<helyesen említett pont 2>"],
  "gaps": ["<hiányzó vagy hibás pont 1>", "<hiányzó vagy hibás pont 2>"],
  "feedback": "<2–3 mondatos összefoglaló visszajelzés magyarul>"
}

Csak a JSON-t add vissza, semmi más szöveget.`;

  // Localhost: server.js proxy (ANTHROPIC_API_KEY from env, no CORS).
  // Remote:    Cloudflare Worker URL (ANTHROPIC_API_KEY stored as CF secret).
  // API key never passes through the browser in either path.
  const endpoint = isLocalhost() ? '/api/claude' : getWorkerUrl();

  const resp = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 600,
      messages: [{ role: 'user', content: prompt }]
    })
  });

  if (!resp.ok) {
    let msg = `API hiba (${resp.status})`;
    try {
      const err = await resp.json();
      msg = err.error?.message || msg;
    } catch(e) {}
    throw new Error(msg);
  }

  const data = await resp.json();
  const raw  = data.content[0].text.trim()
    .replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();

  return JSON.parse(raw);
}

// ─── Feedback rendering ───────────────────────────────────────────────────────
function showFeedback(correct, explanation) {
  const panel = document.getElementById('feedback-panel');
  panel.style.display = 'flex';
  panel.className = 'feedback-panel ' + (correct ? 'correct-fb' : 'wrong-fb');
  panel.innerHTML =
    `<div class="feedback-icon">${correct ? '✅' : '❌'}</div>` +
    `<div class="feedback-text">` +
      `<div class="feedback-title">${correct ? 'Helyes! Nagyszerű!' : 'Nem egészen...'}</div>` +
      `<div class="feedback-explanation">${explanation || ''}</div>` +
    `</div>`;
}

function showEssayFeedback(result, score, ex) {
  const isGood     = score >= Math.ceil(ex.points * 0.6);
  const strengths  = result.strengths || [];
  const gaps       = result.gaps || [];

  const panel = document.getElementById('feedback-panel');
  panel.style.display = 'flex';
  panel.className = 'feedback-panel essay-fb ' + (isGood ? 'correct-fb' : 'wrong-fb');

  let html = `<div class="essay-feedback-content">
    <div class="essay-score-row">
      <span class="essay-score">${score} / ${ex.points} pont</span>
      <span class="essay-verdict">${result.verdict || ''}</span>
    </div>`;

  if (result.feedback) {
    html += `<p class="essay-feedback-text">${result.feedback}</p>`;
  }

  if (strengths.length) {
    html += `<div class="essay-section strengths-section">
      <div class="essay-section-title">✅ Helyes elemek</div>
      <ul>${strengths.map(s => `<li>${s}</li>`).join('')}</ul>
    </div>`;
  }

  if (gaps.length) {
    html += `<div class="essay-section gaps-section">
      <div class="essay-section-title">📌 Hiányzott</div>
      <ul>${gaps.map(g => `<li>${g}</li>`).join('')}</ul>
    </div>`;
  }

  html += `<details class="model-answer-toggle">
    <summary>Mintaválasz megtekintése</summary>
    <div class="model-answer-box">${(ex.modelAnswer || '').replace(/\n/g, '<br>')}</div>
  </details>
  </div>`;

  panel.innerHTML = html;
}

function showNoApiKeyFeedback(ex) {
  const panel = document.getElementById('feedback-panel');
  panel.style.display = 'flex';
  panel.className = 'feedback-panel essay-fb wrong-fb';
  panel.innerHTML = `<div class="essay-feedback-content">
    <div class="essay-score-row">
      <span class="essay-score" style="font-size:16px">⚙ Worker URL szükséges</span>
    </div>
    <p class="essay-feedback-text">Állítsd be a Cloudflare Worker URL-t a Beállításokban a Claude-os értékeléshez.
      <button class="link-btn" onclick="openSettings()">Beállítások →</button></p>
    <details class="model-answer-toggle">
      <summary>Mintaválasz megtekintése</summary>
      <div class="model-answer-box">${(ex.modelAnswer || '').replace(/\n/g, '<br>')}</div>
    </details>
  </div>`;
}

function showSelfAssessment(ex) {
  const panel = document.getElementById('feedback-panel');
  panel.style.display = 'flex';
  panel.className = 'feedback-panel essay-fb wrong-fb';
  panel.innerHTML = `<div class="essay-feedback-content">
    <p class="essay-feedback-text" style="margin-bottom:12px">
      A Worker URL nem érhető el – ellenőrizd a Beállításokban.
      Addig: értékeld saját magad a mintaválasz alapján!
    </p>
    <details class="model-answer-toggle" open>
      <summary>Mintaválasz</summary>
      <div class="model-answer-box">${(ex.modelAnswer || '').replace(/\n/g, '<br>')}</div>
    </details>
    <div class="self-assess-section">
      <div class="self-assess-label">Mennyire volt helyes a válaszod?</div>
      <div class="self-assess-btns">
        <button class="sa-btn sa-full"    onclick="selfAssess(1.0)">✅ Teljes<br><small>${ex.points}/${ex.points} pont</small></button>
        <button class="sa-btn sa-partial" onclick="selfAssess(0.6)">🔶 Részleges<br><small>${Math.ceil(ex.points * 0.6)}/${ex.points} pont</small></button>
        <button class="sa-btn sa-none"    onclick="selfAssess(0)">❌ Nem tudtam<br><small>0/${ex.points} pont</small></button>
      </div>
    </div>
  </div>`;
}

function selfAssess(ratio) {
  const ex = session.queue[session.index];
  const score  = Math.round(ex.points * ratio);
  const isGood = ratio >= 0.6;
  const xp     = isGood ? Math.round(score * (ex.diff === 1 ? 4 : ex.diff === 2 ? 5 : 6)) : 0;

  session.answered = true;
  recordResult(ex, isGood, xp);

  const inp = document.getElementById('essay-input');
  if (inp) inp.classList.add(isGood ? 'correct' : 'wrong');

  const panel = document.getElementById('feedback-panel');
  panel.className = 'feedback-panel essay-fb ' + (isGood ? 'correct-fb' : 'wrong-fb');

  // Prepend score row and remove the buttons
  const content = panel.querySelector('.essay-feedback-content');
  if (content) {
    const verdicts = ['', 'elégtelen', 'részleges', 'jó', 'kiváló'];
    const verdictIdx = ratio >= 1 ? 4 : ratio >= 0.6 ? 2 : 1;
    const scoreRow = document.createElement('div');
    scoreRow.className = 'essay-score-row';
    scoreRow.innerHTML = `<span class="essay-score">${score} / ${ex.points} pont</span>
      <span class="essay-verdict">${verdicts[verdictIdx]}</span>`;
    content.insertBefore(scoreRow, content.firstChild);
    const btnSection = content.querySelector('.self-assess-section');
    if (btnSection) btnSection.remove();
  }

  document.getElementById('btn-next').style.display = 'block';
  if (isGood) setTimeout(() => { if (session.answered) nextExercise(); }, 3000);
}

function showApiErrorFeedback(msg) {
  const panel = document.getElementById('feedback-panel');
  panel.style.display = 'flex';
  panel.className = 'feedback-panel wrong-fb';
  panel.innerHTML =
    `<div class="feedback-icon">⚠️</div>` +
    `<div class="feedback-text">` +
      `<div class="feedback-title">API hiba</div>` +
      `<div class="feedback-explanation">${msg || 'Ismeretlen hiba. Ellenőrizd az API kulcsot.'}</div>` +
    `</div>`;
}

function showXpFlash(text) {
  const el = document.createElement('div');
  el.className = 'xp-flash';
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1200);
}

function nextExercise() {
  stopMic();
  session.index++;
  if (session.lives <= 0 || session.index >= session.queue.length) {
    showResults();
  } else {
    renderExercise();
  }
}

// ─── Results ──────────────────────────────────────────────────────────────────
function showResults() {
  const correct  = session.results.filter(r => r.correct).length;
  const total    = session.results.length;
  const accuracy = total > 0 ? Math.round(correct / total * 100) : 0;

  document.getElementById('results-icon').textContent  = accuracy >= 80 ? '🏆' : accuracy >= 60 ? '🎉' : '💪';
  document.getElementById('results-title').textContent = accuracy >= 80 ? 'Kiváló!' : accuracy >= 60 ? 'Jó munka!' : 'Tartsd ki, fejlődsz!';
  document.getElementById('res-xp').textContent        = '+' + session.xpEarned;
  document.getElementById('res-correct').textContent   = `${correct}/${total}`;
  document.getElementById('res-accuracy').textContent  = accuracy + '%';

  const breakdown = document.getElementById('results-breakdown');
  const grouped   = {};
  session.results.forEach(r => {
    if (!grouped[r.topic]) grouped[r.topic] = {correct:0, total:0};
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
  stopMic();
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
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
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
        progress     = data.progress;
        globalStats  = data.globalStats;
        saveState();
        updateHomeUI();
        alert('Haladás sikeresen betöltve! ✅');
      } else {
        alert('Érvénytelen fájl – nem található haladási adat.');
      }
    } catch { alert('Hiba a fájl beolvasásakor.'); }
    event.target.value = '';
  };
  reader.readAsText(file);
}

// ─── Init ─────────────────────────────────────────────────────────────────────
loadState();
updateHomeUI();
showScreen('home');
