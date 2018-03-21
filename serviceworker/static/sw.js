self.addEventListener("install", event => {
    event.waitUntil(
        caches
        .open('perfcache')
        .then(cache => {
            return cache.addAll([
                '/images/god.jpg'
            ]);
        })
        .then(() => {
            console.log("Service worker installed and objects are cached");
        })
    );
});

self.addEventListener('fetch', event => {
    // If the request is not GET, let the network handle things,
    if (event.request.method !== 'GET') {
        return;
    }
    // here we block the request and handle it ourselves
    event.respondWith(
        // Returns a promise of the cache entry or the new response from the network
        caches.open('perfcache').then(cache => {
            return cache.match(event.request).then(response => {
                var fetchPromise = fetch(event.request).then(networkResponse => {
                    cache.put(event.request, networkResponse.clone());
                    console.log("Cached something that was updated");
                    return networkResponse;
                });
                return response || fetchPromise;
            });
        })
    );
});
  