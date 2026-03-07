/* Service Worker - Natural GastroBar PWA */
const CACHE_NAME = 'natural-gastrobar-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/categoria.html',
  '/styles.css',
  '/menu-data.js',
  '/menu.js',
  '/manifest.json',
  '/image/logo/LogoNaturalGastroBar.png',
  '/image/fondo/fondoNatural.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache.map(function (url) {
          return new Request(url, { cache: 'reload' });
        })).catch(function () {
          return cache.addAll(urlsToCache);
        });
      })
      .then(function () { return self.skipWaiting(); })
      .catch(function () {})
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
        if (key !== CACHE_NAME) return caches.delete(key);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.mode !== 'navigate' && event.request.url.startsWith('http') && !event.request.url.startsWith(self.location.origin)) {
    return;
  }
  var url = event.request.url || '';
  var isMenuData = url.indexOf('menu-data.js') !== -1;

  if (isMenuData) {
    event.respondWith(
      fetch(event.request)
        .then(function (res) {
          if (res && res.status === 200 && res.type === 'basic') {
            var clone = res.clone();
            caches.open(CACHE_NAME).then(function (cache) {
              cache.put(event.request, clone);
            });
          }
          return res;
        })
        .catch(function () {
          return caches.match(event.request);
        })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) return response;
      return fetch(event.request).then(function (res) {
        if (!res || res.status !== 200 || res.type !== 'basic') return res;
        var clone = res.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, clone);
        });
        return res;
      });
    })
  );
});
