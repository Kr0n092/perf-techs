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

self.addEventListener("fetch", event => {
    // If the request is not GET, let the network handle things,
    if (event.request.method !== 'GET') {
        return;
    }
    // here we block the request and handle it ourselves
    event.respondWith(
        // Returns a promise of the cache entry that matches the request
        caches
        .match(event.request)
        .then(response => {
            // here we can handle the request however we want.
            // We can return the cache right away if it exists,
            // or go to network to fetch it.  
            if (response) {
                // our responce is in the cache, let's return that instead
                return response;
            }
            // if the responce is not in the cache, let's fetch it
            return fetch(event.request)
            .then(response => {
                // we have a responce from the network
                return response;
            }).catch(error => {
                // Something happened
                console.error(response);
                console.error('Fetching failed:', error);
                throw error;
            });
        })
    );
});
  