// Cloudflare Worker — proxies requests to the Anthropic API.
//
// Deploy steps:
//   1. Go to https://workers.cloudflare.com  →  Create Worker
//   2. Paste this entire file, click Save & Deploy
//   3. Settings → Variables → Add secret: ANTHROPIC_API_KEY = sk-ant-...
//   4. Copy the worker URL (e.g. https://abc123.your-name.workers.dev)
//   5. Paste that URL into the app's Settings screen (⚙)

export default {
  async fetch(request, env) {

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin':  '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    if (!env.ANTHROPIC_API_KEY) {
      return new Response(
        JSON.stringify({ error: { message: 'ANTHROPIC_API_KEY secret is not set in the Worker.' } }),
        { status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
      );
    }

    const body = await request.text();

    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type':      'application/json',
        'x-api-key':         env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body,
    });

    const text = await upstream.text();

    return new Response(text, {
      status: upstream.status,
      headers: {
        'Content-Type':                 'application/json',
        'Access-Control-Allow-Origin':  '*',
      },
    });
  },
};
