/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 Updates:
 - Add URLs of the resources we want to cache in the App.
 - Force to update the `index.html`, `service-worker.js`, and `static/js/main.chunk.js` files to ensure they're updated
   if the platform is online.
 */

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v15';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const FONT_URLS = [
  './resources/fonts/NotoSerifTC-Black.otf',
  './resources/fonts/RussoOne-Regular.ttf'
]
const IMAGE_URLS = [
  './resources/images/background/hallstatt.jpg',
  './resources/images/background/binz-beach.jpg',
  './resources/images/background/kings-chair-beach.jpg',
  './resources/images/background/lifeguards-nearby-pier-sellin.jpg',
  './resources/images/background/ninja.png',
  './resources/images/background/pier-sellin.jpg',
  './resources/images/background/sellin-dog-beach.jpg',
  './resources/images/background/sellin-east-train-station.jpg'
]
const SOUND_EFFECT_URLS = [
  './resources/sound-effects/default/back.webm',
  './resources/sound-effects/default/bust.webm',
  './resources/sound-effects/default/coin.webm',
  './resources/sound-effects/default/dart.webm',
  './resources/sound-effects/default/dbull.webm',
  './resources/sound-effects/default/fail.webm',
  './resources/sound-effects/default/game_on.webm',
  './resources/sound-effects/default/hover.webm',
  './resources/sound-effects/default/next.webm',
  './resources/sound-effects/default/press.webm',
  './resources/sound-effects/default/sbull.webm',
  './resources/sound-effects/default/warn.webm',
  './resources/sound-effects/default/win.webm',
  './resources/sound-effects/ninja/bgm.webm',
  './resources/sound-effects/ninja/dart.webm',
  './resources/sound-effects/ninja/dbull.webm',
  './resources/sound-effects/ninja/sbull.webm',
  './resources/sound-effects/3-darts-1-prize/bgm.webm'
]
const PRECACHE_URLS = [].concat(FONT_URLS, IMAGE_URLS, SOUND_EFFECT_URLS);

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(RUNTIME)
      .then(cache =>
        navigator.connection.type !== 'none' ?
          Promise.all([
            cache.delete('./'),
            cache.delete('./index.html'),
            cache.delete('./service-worker.js'),
            cache.delete('./options'),
            cache.delete('./game-menu/games'),
            cache.delete('./game-menu/players'),
            cache.delete('./game'),
            cache.delete('./static/js/main.chunk.js'), // For always updating to the latest version in the development build.
          ]) :
          Promise.resolve()
      )
      .finally(() =>
        caches.open(PRECACHE)
          .then(cache => cache.addAll(PRECACHE_URLS))
          .then(self.skipWaiting())
      )
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});
