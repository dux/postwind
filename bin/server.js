// Static file server for PostWind development
const port = process.env.PORT || 8000;

const server = Bun.serve({
  port,
  async fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;
    if (path === '/') path = '/example/index.html';

    const file = Bun.file(import.meta.dir + '/..' + path);
    if (await file.exists()) return new Response(file);
    return new Response('Not found', { status: 404 });
  }
});

console.log(`PostWind dev server: http://localhost:${port}`);
