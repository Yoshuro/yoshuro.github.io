const CACHE_VERSION = 1
const CURRENT_CACHES = {
  offline: `offline-v${CACHE_VERSION}`,
}
const OFFLINE_URL = 'offline.html'

function createCacheRequest(url) {
  const request = new Request(url, { cache: 'reload' })

  if ('cache' in request) return request

  const newUrl = new URL(url, self.location.href)
  newUrl.search += `${newUrl.search ? '&' : ''}c=${Date.now()}`
  return new Request(newUrl)
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    fetch(createCacheRequest(OFFLINE_URL))
      .then(response =>
        caches.open(CURRENT_CACHES.offline)
          .then(cache =>
            cache.put(OFFLINE_URL, response)
          )
      )
  )
})

self.addEventListener('activate', (event) => {
  const expectedCacheNames = Object
    .keys(CURRENT_CACHES)
    .map(key => CURRENT_CACHES[key])

  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (expectedCacheNames.indexOf(cacheName) === '-1') {
            return caches.delete(cacheName)
          }
        })
      )
    )
  )
})

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate' ||
      (event.request.method === 'GET' &&
      event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(event.request)
        .catch((err) => {
          console.log(err)
          return caches.match(OFFLINE_URL)
        })
    )
  }
})
