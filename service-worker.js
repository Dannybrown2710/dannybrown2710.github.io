"use strict";var precacheConfig=[["/index.html","c29a8f8555af6e2ecc518a6150bd5469"],["/static/css/main.52d2d208.css","515d30bb3fd3b05af4270d654ffc07ac"],["/static/js/main.859835c4.js","70666bbe9334102888bb01932b6a62e4"],["/static/media/banner.ff75105d.jpg","ff75105dd2c81d6ae320d137e4dfdc30"],["/static/media/banner1.5104885a.jpg","5104885a77005a58da3de6e80cad126b"],["/static/media/banner1.a6b83ea6.jpg","a6b83ea662aba8104a2635812b6944cf"],["/static/media/banner2.6388e06b.jpg","6388e06b8d46da8de8cc07e3b11b5733"],["/static/media/banner2.c5f8b0dc.jpg","c5f8b0dc456b88cb375e364748aaf8a5"],["/static/media/banner3.549f7d46.jpg","549f7d4615ac81d65298f69e8cc4c48a"],["/static/media/banner3.c463e2a3.jpg","c463e2a3c6fc56f31130cbe62cca8214"],["/static/media/banner4.8f3c4c69.jpg","8f3c4c693df2bbe6cd11efd0b3549a3a"],["/static/media/banner4.f842abec.jpg","f842abecc237eaa3abb76518ee5bd886"],["/static/media/banner5.28b22d79.jpg","28b22d7901d21317004729f5ce16381a"],["/static/media/banner5.4500c806.jpg","4500c806dd9c759d3b5b2870c142d303"],["/static/media/banner6.2c0a768c.jpg","2c0a768c4a9b2bae9a4a2ffb7891c584"],["/static/media/banner6.c4cc5037.jpg","c4cc50373246740dd976eb3158262c6b"],["/static/media/banner7.2070d9ed.jpg","2070d9edfbb1469591d29ae6af4a5263"],["/static/media/banner7.f6dbf57c.jpg","f6dbf57c10ac60520101bdff58f28248"],["/static/media/contact.63f56d52.png","63f56d527fef0deb4a2842e2f6f59191"],["/static/media/contact1.e9928c1d.png","e9928c1d1e0602cdfa4d759d912247d6"],["/static/media/dress1.e1a2cad2.png","e1a2cad20f873b57c0da4d0fffb689c9"],["/static/media/dress2.60a5af8e.png","60a5af8ef0d9a46e007f78f4d8570a08"],["/static/media/dress3.c352baab.png","c352baab85989244d566c91850bf1fa9"],["/static/media/favicon.63f56d52.png","63f56d527fef0deb4a2842e2f6f59191"],["/static/media/favicon.f460cbb6.ico","f460cbb685e3e91eb09d7978c7da08d1"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/long1.76929922.jpg","76929922405e320c7fcbb64f32c3bb3a"],["/static/media/long1.e2bc2625.jpg","e2bc26254d049794870a0bcef89efa71"],["/static/media/long2.50b225e2.jpg","50b225e2d9291df174e8d603701e26dd"],["/static/media/long2.cc5b5360.jpg","cc5b53602d1b92cecb2a4aad056ea627"],["/static/media/long3.24faa3e3.jpg","24faa3e336a82588018f675d85ffac0b"],["/static/media/long3.a0e8d042.jpg","a0e8d04299cdbdb20e703e685a2dd4e0"],["/static/media/news.13470128.png","13470128b3e6507d356008938aed77ab"],["/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/static/media/square1.2c467a23.jpg","2c467a23531b34455eb824c202eb037b"],["/static/media/square1.322c2325.jpg","322c23250dfc232d177b02d2d1dfd87d"],["/static/media/square2.d13751b8.jpg","d13751b83229b0aa2891f2d852506920"],["/static/media/square2.efbd658f.jpg","efbd658f1ccdbbaba21c9b4ffbd5e494"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});