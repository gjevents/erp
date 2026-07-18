const CACHE_NAME = "gjevents-v1";

const urlsToCache = [

"/erp/",

"/erp/index.html",

"/erp/style.css",

"/erp/script.js",

"/erp/logo.png",

"/erp/favicon.png",

"/erp/manifest.json"

];

self.addEventListener("install",event=>{

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>cache.addAll(urlsToCache))

);

});

self.addEventListener("fetch",event=>{

event.respondWith(

caches.match(event.request)

.then(response=>{

return response || fetch(event.request);

})

);

});

self.addEventListener("activate",event=>{

event.waitUntil(

caches.keys().then(keys=>{

return Promise.all(

keys.map(key=>{

if(key!==CACHE_NAME){

return caches.delete(key);

}

})

);

})

);

});
