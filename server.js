#!/usr/bin/env node
// Local dev server — serves the app and proxies Claude API calls to avoid CORS.
// Usage: ANTHROPIC_API_KEY=sk-ant-... node server.js
//   Then open http://localhost:3000 in your browser.
// The API key is read from the environment — it never passes through the browser.

const http  = require('http');
const https = require('https');
const fs    = require('fs');
const path  = require('path');

const PORT   = 3000;
const apiKey = process.env.ANTHROPIC_API_KEY || '';

if (!apiKey) {
  console.warn('\n⚠️  ANTHROPIC_API_KEY is not set — essay evaluation will fail.');
  console.warn('   Set it with: ANTHROPIC_API_KEY=sk-ant-... node server.js\n');
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.pdf':  'application/pdf',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};

// ─── Claude proxy ─────────────────────────────────────────────────────────────
function proxyClaude(req, res) {
  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', () => {
    const opts = {
      hostname: 'api.anthropic.com',
      port: 443,
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'Content-Type':      'application/json',
        'x-api-key':         apiKey,
        'anthropic-version': '2023-06-01',
        'Content-Length':    Buffer.byteLength(body),
      },
    };
    const proxy = https.request(opts, pRes => {
      let data = '';
      pRes.on('data', c => { data += c; });
      pRes.on('end', () => {
        res.writeHead(pRes.statusCode, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        });
        res.end(data);
      });
    });
    proxy.on('error', err => {
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: { message: 'Proxy error: ' + err.message } }));
    });
    proxy.write(body);
    proxy.end();
  });
}

// ─── Static file server ───────────────────────────────────────────────────────
function serveFile(req, res) {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';
  const filePath = path.join(__dirname, urlPath);

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext  = path.extname(filePath);
    const mime = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });
    res.end(data);
  });
}

// ─── Main ─────────────────────────────────────────────────────────────────────
const server = http.createServer((req, res) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin':  '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
    });
    res.end();
    return;
  }
  // Claude proxy endpoint
  if (req.method === 'POST' && req.url === '/api/claude') {
    proxyClaude(req, res);
    return;
  }
  serveFile(req, res);
});

server.listen(PORT, () => {
  console.log('\n──────────────────────────────────────────');
  console.log(`  App: http://localhost:${PORT}`);
  console.log('  Claude API: proxied (no CORS issues)');
  console.log('  Press Ctrl+C to stop.');
  console.log('──────────────────────────────────────────\n');
});
