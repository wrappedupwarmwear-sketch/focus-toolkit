self.addEventListener("install", function(event){

event.waitUntil(

caches.open("focus-toolkit").then(function(cache){

return cache.addAll([
"/focus-toolkit/",
"/focus-toolkit/index.html"
])

})

)

})

self.addEventListener("fetch", function(event){

event.respondWith(

caches.match(event.request).then(function(response){

return response || fetch(event.request)

})

)

})
