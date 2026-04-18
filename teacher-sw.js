const CACHE = 'teacher-tools-v2';
const ASSETS = [
  './index.html',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;700;900&family=Noto+Serif+SC:wght@400;700&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
