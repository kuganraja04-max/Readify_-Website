const CACHE_NAME = "readify-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./signin.js",
  "./manifest.json",

  // Pages (these live in folders)
  "./Explorer/explorer.html",
  "./Tracker/tracker.html",
  "./Recommender/recommender.html",
  "./Flow/flow.html",
  "./Feedback/feedback.html",

  // Page-specific CSS/JS (optional but helps offline)
  "./Explorer/style.css",
  "./Explorer/script.js",
  "./Tracker/style.css",
  "./Tracker/script.js",
  "./Recommender/style.css",
  "./Recommender/script.js",
  "./Flow/style.css",
  "./Flow/script.js",
  "./Feedback/style.css",
  "./Feedback/script.js",

  // PWA icons (referenced by manifest)
  "./image/book.png",
  "./image/logo2.png"
];

// INSTALL
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// ACTIVATE
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : null)))
    )
  );
  self.clients.claim();
});

// FETCH
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
