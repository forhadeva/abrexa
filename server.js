const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 5050;
const BASE_DIR = __dirname;
const USER_DIR = path.join(BASE_DIR, 'user panel');
const SELLER_DIR = path.join(BASE_DIR, 'seller panel');
const ADMIN_DIR = path.join(BASE_DIR, 'admin panel');
const BACKEND_PORT = 8000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.htm': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4'
};

function serveFile(res, filePath) {
  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 Not Found</h1>');
      return;
    }

    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 Not Found</h1>');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache'
      });
      res.end(data);
    });
  });
}

function proxyRequest(req, res) {
  const options = {
    hostname: '127.0.0.1',
    port: BACKEND_PORT,
    path: req.url,
    method: req.method,
    headers: { ...req.headers, host: `127.0.0.1:${BACKEND_PORT}` }
  };

  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, {
      ...proxyRes.headers,
      'Access-Control-Allow-Origin': '*'
    });
    proxyRes.pipe(res, { end: true });
  });

  proxyReq.on('error', (err) => {
    res.writeHead(502, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Backend server unavailable', detail: err.message }));
  });

  req.pipe(proxyReq, { end: true });
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const pathname = decodeURIComponent(parsedUrl.pathname);

  // Handle CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    });
    res.end();
    return;
  }

  // 1. Proxy API and Django Admin requests to Backend
  if (pathname.startsWith('/api/') || pathname.startsWith('/django-admin/') || pathname.startsWith('/static/rest_framework/')) {
    proxyRequest(req, res);
    return;
  }

  // 2. Seller Panel Routing (/seller or /seller/...)
  if (pathname === '/seller' || pathname === '/seller/') {
    serveFile(res, path.join(SELLER_DIR, 'index.html'));
    return;
  }
  if (pathname.startsWith('/seller/')) {
    const subPath = pathname.substring('/seller/'.length);
    const targetPath = path.join(SELLER_DIR, subPath);
    if (subPath.startsWith('../user panel/')) {
      const userAsset = subPath.replace('../user panel/', '');
      serveFile(res, path.join(USER_DIR, userAsset));
      return;
    }
    serveFile(res, targetPath);
    return;
  }

  // 3. Admin Panel Routing (/admin or /admin/...)
  if (pathname === '/admin' || pathname === '/admin/') {
    serveFile(res, path.join(ADMIN_DIR, 'index.html'));
    return;
  }
  if (pathname.startsWith('/admin/')) {
    const subPath = pathname.substring('/admin/'.length);
    const targetPath = path.join(ADMIN_DIR, subPath);
    if (subPath.startsWith('../user panel/')) {
      const userAsset = subPath.replace('../user panel/', '');
      serveFile(res, path.join(USER_DIR, userAsset));
      return;
    }
    serveFile(res, targetPath);
    return;
  }

  // 4. Handle relative ../user panel/ requests from sub-panels
  if (pathname.startsWith('/user panel/')) {
    const subPath = pathname.substring('/user panel/'.length);
    serveFile(res, path.join(USER_DIR, subPath));
    return;
  }

  // 5. User Panel (Main Store) Routing
  const cleanPath = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const targetFile = path.join(USER_DIR, cleanPath);
  
  if (fs.existsSync(targetFile)) {
    serveFile(res, targetFile);
  } else if (fs.existsSync(path.join(USER_DIR, cleanPath + '.html'))) {
    serveFile(res, path.join(USER_DIR, cleanPath + '.html'));
  } else {
    // Check if asset exists in seller or admin panel
    if (fs.existsSync(path.join(SELLER_DIR, cleanPath))) {
      serveFile(res, path.join(SELLER_DIR, cleanPath));
    } else if (fs.existsSync(path.join(ADMIN_DIR, cleanPath))) {
      serveFile(res, path.join(ADMIN_DIR, cleanPath));
    } else {
      serveFile(res, path.join(USER_DIR, 'index.html'));
    }
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`=============================================================`);
  console.log(`🚀 ABREXA Unified Server Running on http://localhost:${PORT}`);
  console.log(`🛍️ Customer Store : http://localhost:${PORT}/`);
  console.log(`🏪 Seller Center  : http://localhost:${PORT}/seller/`);
  console.log(`🛡️ Admin Panel    : http://localhost:${PORT}/admin/`);
  console.log(`=============================================================`);
});
