#!/usr/bin/env node
// ─── Exercise generator ───────────────────────────────────────────────────────
// Usage: node generate.js exam_subjects/gyakorlas_4_megoldasok.docx
//
// Reads a solution DOCX, calls the Claude API, and writes a new
// exercises/worksheet_N.js file ready to plug into the app.
//
// Requires: ANTHROPIC_API_KEY env var
//           npm install  (installs @anthropic-ai/sdk and mammoth)

const fs   = require('fs');
const path = require('path');
const Anthropic = require('@anthropic-ai/sdk');
const mammoth   = require('mammoth');

// ─── Args ─────────────────────────────────────────────────────────────────────
const inputFile = process.argv[2];
if (!inputFile) {
  console.error('Usage: node generate.js <path/to/solution.docx>');
  process.exit(1);
}
if (!fs.existsSync(inputFile)) {
  console.error('File not found:', inputFile);
  process.exit(1);
}
if (!process.env.ANTHROPIC_API_KEY) {
  console.error('Missing ANTHROPIC_API_KEY environment variable.');
  console.error('Set it with: export ANTHROPIC_API_KEY=sk-ant-...');
  process.exit(1);
}

// ─── Determine next worksheet number ─────────────────────────────────────────
function nextWorksheetNumber() {
  const files = fs.readdirSync('exercises').filter(f => /^worksheet_\d+\.js$/.test(f));
  const nums  = files.map(f => parseInt(f.match(/\d+/)[0]));
  return nums.length ? Math.max(...nums) + 1 : 1;
}

// ─── Extract text from DOCX ───────────────────────────────────────────────────
async function extractDocx(filePath) {
  const result = await mammoth.extractRawText({ path: filePath });
  return result.value.trim();
}

// ─── Build the generation prompt ─────────────────────────────────────────────
function buildPrompt(content, worksheetNum) {
  return `You are generating exercise data for a Hungarian special-education exam prep app (Titularizare 2026 – Psihopedagogie Specială).

Below is the full solution content for worksheet ${worksheetNum}. Read it carefully.

<solution_content>
${content}
</solution_content>

Generate 25–35 exercises that cover ALL major topics in the content above. Return ONLY a valid JSON array — no markdown fences, no comments, no extra text. Each object must follow this exact schema:

For "mc" (multiple choice):
{"id":"w${worksheetNum}_01","w":${worksheetNum},"topic":"Topic name","type":"mc","q":"Question?","opts":["A","B","C","D"],"ans":0,"exp":"Explanation citing the correct answer.","diff":1}

For "tf" (true/false):
{"id":"w${worksheetNum}_02","w":${worksheetNum},"topic":"Topic name","type":"tf","q":"Statement.","ans":true,"exp":"Explanation.","diff":1}

For "fill" (fill in the blank — use ____ as the blank):
{"id":"w${worksheetNum}_03","w":${worksheetNum},"topic":"Topic name","type":"fill","q":"Complete: A ... ____ ...","ans":"the missing word","exp":"Explanation.","diff":1}

For "match" (matching — always exactly 4 pairs):
{"id":"w${worksheetNum}_04","w":${worksheetNum},"topic":"Topic name","type":"match","q":"Match each term to its definition!","pairs":[{"L":"Term 1","R":"Definition 1"},{"L":"Term 2","R":"Definition 2"},{"L":"Term 3","R":"Definition 3"},{"L":"Term 4","R":"Definition 4"}],"exp":"Explanation.","diff":2}

For "order" (ordering — 4 or 5 steps in the correct order):
{"id":"w${worksheetNum}_05","w":${worksheetNum},"topic":"Topic name","type":"order","q":"Put the steps in the correct order!","items":["Step 1","Step 2","Step 3","Step 4"],"exp":"Explanation.","diff":2}

For "short" (short answer — keywords that must appear in the answer):
{"id":"w${worksheetNum}_06","w":${worksheetNum},"topic":"Topic name","type":"short","q":"List the ...","keywords":["keyword1","keyword2","keyword3","keyword4"],"exp":"Model answer listing all required points.","diff":2}

Rules:
- ALL text (q, opts, exp, topic, items, pairs, keywords) must be in HUNGARIAN
- ONLY use facts and definitions present in the solution content above — never invent
- Include at minimum: 15 mc, 2 tf, 3 fill, 2 match, 2 order, 1 short
- diff: 1 = easy definition/recall, 2 = medium application, 3 = hard synthesis
- exp must always clearly state the correct answer and briefly explain why
- Cover all sections of the content evenly — do not focus only on the first section
- IDs must be sequential: w${worksheetNum}_01, w${worksheetNum}_02, ...
- opts for mc must have exactly 4 items; ans is the 0-based index of the correct one
- For tf, make roughly half true and half false; false statements should have a subtle wrong detail

Return the JSON array now:`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const worksheetNum = nextWorksheetNumber();
  const varName      = `EXERCISES_W${worksheetNum}`;
  const outFile      = path.join('exercises', `worksheet_${worksheetNum}.js`);

  console.log(`\n📖  Reading ${inputFile}...`);
  const content = await extractDocx(inputFile);
  console.log(`    Extracted ${content.length} characters.\n`);

  console.log(`🤖  Calling Claude API (worksheet ${worksheetNum})...`);
  const client = new Anthropic();
  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 8192,
    messages: [{ role: 'user', content: buildPrompt(content, worksheetNum) }],
  });

  const raw = message.content[0].text.trim();

  // Strip accidental markdown fences if present
  const jsonText = raw.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();

  let exercises;
  try {
    exercises = JSON.parse(jsonText);
  } catch (e) {
    console.error('\n❌  Could not parse Claude\'s response as JSON.');
    console.error('    Raw response saved to generate_output_raw.txt for inspection.');
    fs.writeFileSync('generate_output_raw.txt', raw);
    process.exit(1);
  }

  console.log(`    Generated ${exercises.length} exercises.\n`);

  // Write exercises file
  const fileContent =
    `// Worksheet ${worksheetNum} exercises — generated by generate.js\n` +
    `// Source: ${path.basename(inputFile)}\n` +
    `const ${varName} = ${JSON.stringify(exercises, null, 2)};\n`;

  fs.writeFileSync(outFile, fileContent);
  console.log(`✅  Written: ${outFile}`);

  // Print next steps
  console.log(`
────────────────────────────────────────────
Next steps — two small manual edits:

1. Add to index.html (before data.js script tag):
   <script src="exercises/worksheet_${worksheetNum}.js"></script>

2. Add to data.js (in the EXERCISES spread):
   ...(typeof ${varName} !== 'undefined' ? ${varName} : []),

Then commit and push:
   git add -A && git commit -m "Add worksheet ${worksheetNum}" && git push
────────────────────────────────────────────
`);
}

main().catch(err => { console.error('Error:', err.message); process.exit(1); });
