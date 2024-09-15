self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles/index.css',
          '/js/fullscreen.js'
        ]);
      })
    );
  });
  