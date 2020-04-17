const CACHE_NAME = 'pwa-tasks-manager';

let urlsToCache = ['/', '/completed'];

// Install a service worker
self.addEventListener('install', event => {
	// Perform install step
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
});

// Cache and return requests
self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			// Cache hit - return response
			if (response) {
				return response;
			}
			return fetch(event.request);
		})
	);
});

// Update a service worker
self.addEventListener('activate', event => {
	let cacheWhiteList = ['pwa-task-manager'];
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cacheName => {
					if (cacheWhiteList.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});
