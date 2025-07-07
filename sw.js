const CACHE_NAME = 'family-bakery-cache-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/css/style.css',
    '/css/all.css',
    '/main.js',
    '/images/1.jpg',
    '/images/01.webp',
    '/images/2.webp',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.webp',
    '/images/6.jpg',
    '/images/7.png',
    '/images/8.png',
    '/images/9.jpg',
    '/images/10.jpg',
    '/images/11.png',
    '/images/12.png',
    '/images/13.jpg',
    '/images/14.jpg',
    '/images/15.jpg',

];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});