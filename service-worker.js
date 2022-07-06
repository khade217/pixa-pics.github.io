var REQUIRED_CACHE = "unless-update-cache-v261-required";
var USEFUL_CACHE = "unless-update-cache-v261-useful";
var STATIC_CACHE = "unless-update-cache-v261-static";
var MAIN_CHILD_CHUNK_REGEX = /chunk_(main\~[a-z0-9]+)\.min\.js/i;
var CHILD_CHUNK_REGEX = /chunk_([0-9]+)\.min\.js/i;

var required_cache_object = {};
var required_cache = new Promise(function(resolve, reject){

    if(typeof required_cache_object.addAll !== "undefined") {

        resolve(required_cache_object);
    }else {

        caches.open(REQUIRED_CACHE).then(function(cache){required_cache_object = cache;resolve(required_cache_object);}).catch(function(reason){reject(reason)});
    }
});

var useful_cache_object = {};
var useful_cache = new Promise(function(resolve, reject){

    if(typeof useful_cache_object.addAll !== "undefined") {

        resolve(useful_cache_object);
    }else {

        caches.open(USEFUL_CACHE).then(function(cache){useful_cache_object = cache;resolve(useful_cache_object);}).catch(function(reason){reject(reason)});
    }
});

var static_cache_object = {};
var static_cache = new Promise(function(resolve, reject){

    if(typeof static_cache_object.addAll !== "undefined") {

        resolve(static_cache_object);
    }else {

        caches.open(STATIC_CACHE).then(function(cache){static_cache_object = cache;resolve(static_cache_object);}).catch(function(reason){reject(reason)});
    }
});


// On install, cache some resource.
self.addEventListener("install", function(event) {

    if (!navigator.onLine) {

        return true;
    }

    useful_cache.then(function (cache) {
        cache.addAll([
            "/src/images/illustrations/Cervin-night.svg",
            "/src/images/illustrations/Cervin-day.svg",
            "/src/images/illustrations/ITLab.png",
            "/src/images/gallery/Luck.png",
            "/src/images/infographics/Wardenclyffe.png",
        ]);
    });

    event.waitUntil(Promise.all([
        required_cache.then(function (cache) {
            return cache.addAll([
                "/chunk_main~1f20a385.min.js",
                "/chunk_main~2a42e354.min.js",
                "/chunk_main~5a2dc592.min.js",
                "/chunk_main~253ae210.min.js",
                "/chunk_main~0436ed57.min.js",
                "/chunk_main~678f84af.min.js",
                "/chunk_main~690b702c.min.js",
                "/chunk_main~748942c6.min.js",
                "/chunk_main~af9f4ef7.min.js",
                "/chunk_norris.min.js",
            ])
        }),
        useful_cache.then(function (cache) {
            return cache.addAll([
                "/src/fonts/jura/index.css",
                "/src/images/favicon.ico",
                "/src/images/manifest/logo-white.png",
                "/src/images/logo-transparent.png"
            ]);
        })
    ]));
});

self.addEventListener("fetch", function(event) {

    const url = String(event.request.url);
    const same_site = true //event.request.referrer.startsWith(U.hostname);

    if(url.startsWith("data:image") || url.startsWith("blob:http") || url.startsWith("data:application")) {

        event.respondWith(fetch(event.request));

    }else if(url.startsWith("data:,all")) {

        event.respondWith(
            Promise.allSettled([
                useful_cache.then(function (cache) {
                    return cache.addAll([
                        "/src/images/infographics/ShareWho.svg",
                        "/src/images/gallery/Luck.svg",
                        "/src/images/Gallery/Nuclear.png",
                        "/src/images/Gallery/Nuclear.svg",
                        "/src/images/Gallery/Pyramid.png",
                        "/src/images/Gallery/Pyramid.svg",
                        "/src/images/Gallery/Parrot.png",
                        "/src/images/Gallery/Parrot.svg",
                        "/src/images/Gallery/Lips.png",
                        "/src/images/Gallery/Lips.svg",
                        "/src/images/Gallery/Mica.png",
                        "/src/images/Gallery/Mica.svg",
                        "/src/images/Gallery/Mat.png",
                        "/src/images/Gallery/Mat.svg",
                        "/src/images/infographics/Rambo.svg",
                        "/src/images/infographics/TestBag.svg",
                        "/src/images/infographics/Explosion.svg",
                        "/src/images/REMINDER.svg",
                        "/src/images/Error.svg",
                        "/src/images/abduction.svg",
                        "/src/images/AI.svg",
                        "/src/images/DNA.svg",
                        "/src/images/CPU.svg",
                        "/src/images/laboratory.svg",
                        "/src/images/illustrations/Camo.svg",
                        "/src/images/league/Bronze.png",
                        "/src/images/league/Diamond.png",
                        "/src/images/league/Gold.png",
                        "/src/images/league/Silver.png",
                    ]);
                }),
                required_cache.then(function (cache) {
                    return cache.addAll([
                        "/",
                        "/chunk_0.min.js",
                        "/chunk_1.min.js",
                        "/chunk_2.min.js",
                        "/chunk_3.min.js",
                        "/chunk_4.min.js",
                        "/chunk_5.min.js",
                        "/chunk_6.min.js",
                        "/chunk_7.min.js",
                        "/chunk_8.min.js",
                        "/chunk_9.min.js",
                        "/chunk_10.min.js",
                        "/chunk_11.min.js",
                        "/chunk_12.min.js",
                        "/chunk_13.min.js",
                    ]);
                }),
                static_cache.then(function (cache) {
                    return cache.addAll([
                        "/src/sounds/sfx/md/hero_decorative-celebration-02.mp3",
                        "/src/sounds/sfx/md/navigation_selection-complete-celebration.mp3",
                        "/src/sounds/sfx/md/navigation_transition-left.mp3",
                        "/src/sounds/sfx/md/state-change_confirm-down.mp3",
                        "/src/sounds/sfx/md/ui_lock.mp3",
                        "/src/sounds/sfx/md/ui_unlock.mp3",
                        "/src/sounds/sfx/md/alert_high-intensity.mp3",
                        "/src/sounds/sfx/md/navigation_transition-right.mp3",
                        "/src/sounds/voice/cn/accessing_memory.mp3",
                        "/src/sounds/voice/cn/complete.mp3",
                        "/src/sounds/voice/cn/please_wait.mp3",
                        "/src/sounds/voice/cn/data_upload.mp3",
                        "/src/sounds/voice/cn/processing.mp3",
                        "/src/sounds/voice/cn/enhanced.mp3",
                        "/src/sounds/voice/cn/rewriting_deep_layer_protocols.mp3",
                        "/src/sounds/voice/cn/vision_activated.mp3",
                        "/src/sounds/voice/cn/vision_deactivated.mp3",
                        "/src/sounds/voice/cn/filtering.mp3",
                        "/src/sounds/music/redeclipse/track_09.mp3",
                    ]);
                })
            ])
                .then(function(){return new Response("all",{status: 200})})
                .catch(function(){return new Response("all", {status: 500})})
        );

    }else if(Boolean(url.endsWith(".png") || url.endsWith(".svg") || url.endsWith(".jpg") || url.endsWith(".jpeg") || url.endsWith(".gif") || url.endsWith(".ico")) && same_site) {

        // Serve cached image if doesn't fail
        event.respondWith(
            useful_cache.then(function (cache) {
                return cache.match(url).then(function (response) {
                    return response.clone();
                }).catch(function() {

                    return fetch(url).then(function (response) { // Fetch, clone, and serve
                        return cache.put(url, response.clone()).then(function () {return response});
                    });
                });
            }),
        );

    }else if(Boolean(url.endsWith(".wav") || url.endsWith(".mp3")) && same_site) {

        event.respondWith(
            static_cache.then(function (cache) {
                return cache.match(url).then(function (response) {
                    return response.clone();
                }).catch(function (reason) {

                    return fetch(url).then(function (response) { // Fetch, clone, and serve
                        return cache.put(url, response.clone()).then(function () {return response});
                    });
                });
            }),
        );

    }else if(Boolean(url.endsWith(".woff2") || url.endsWith(".ttf") || url.endsWith(".css") || url.endsWith(".json")) && same_site ) {

        event.respondWith(
            useful_cache.then(function (cache) {
                return cache.match(url).then(function (response) {
                    return response.clone();
                }).catch(function (reason) {

                    return fetch(url).then(function (response) { // Fetch, clone, and serve
                        return cache.put(url, response.clone()).then(function () {return response});
                    });
                });
            }),
        );

    }else if(url.endsWith("chunk_norris.min.js") && same_site) {

        event.respondWith(
            required_cache.then(function (cache) {
                return cache.match("/chunk_norris.min.js").then(function (response) {
                    return response.clone();
                }).catch(function(reason){

                    return fetch("/chunk_norris.min.js").then(function (response) { // Fetch, clone, and serve
                        return cache.put("/chunk_norris.min.js", response.clone()).then(function () {return response});
                    });
                });
            })
        );

    }else if((url.match(MAIN_CHILD_CHUNK_REGEX) || []).length >= 2 && same_site) {

        const middle_name = url.match(MAIN_CHILD_CHUNK_REGEX)[1];
        event.respondWith(
            required_cache.then(function (cache) {
                return cache.match(`/chunk_${middle_name}.min.js`).then(function (response) {
                    return response.clone();
                }).catch(function(reason) {

                    return fetch(`/chunk_${middle_name}.min.js`).then(function (response) { // Fetch, clone, and serve
                        return cache.put(`/chunk_${middle_name}.min.js`, response.clone()).then(function () {return response});
                    });
                });
            })
        );

    }else if((url.match(CHILD_CHUNK_REGEX) || []).length >= 2 && same_site) {

        const middle_name = url.match(CHILD_CHUNK_REGEX)[1];
        event.respondWith(
            required_cache.then(function (cache) {
                return cache.match(`/chunk_${middle_name}.min.js`).then(function (response) {
                    return response.clone();
                }).catch(function(reason) {

                    return fetch(`/chunk_${middle_name}.min.js`).then(function (response) { // Fetch, clone, and serve
                        return cache.put(`/chunk_${middle_name}.min.js`, response.clone()).then(function () {return response});
                    });
                });
            })
        );

    }else if(event.request.mode === "navigate") {

        event.respondWith(

            required_cache.then(function (cache) {
                return cache.match(`/`).then(function (response) {
                    return response.clone();
                }).catch(function (reason) {

                    return fetch(`/`).then(function (response) { // Fetch, clone, and serve
                        return cache.put(`/`, response.clone()).then(function () {
                            return response.clone();
                        });
                    })
                })
            })
        );

    } else if(event.request.method === "GET") {

        event.respondWith(
            Promise.race([
                required_cache.then(function (cache) {
                    return cache.match(url).then(function (response) {
                        if(response) { return response }
                    });
                }),
                useful_cache.then(function (cache) {
                    return cache.match(url).then(function (response) {
                        if(response) { return response }
                    });
                }),
                static_cache.then(function (cache) {
                    return cache.match(url).then(function (response) {
                        if(response) { return response }
                    });
                }),
                fetch(url).then(function (response) { // Fetch and serve

                    useful_cache.then(function (cache) {

                        cache.put(url, response.clone()).then(function () {return response});
                    });
                })
            ])
        );
    }else {

        return;
    }
});

self.addEventListener("activate", function(event) {

    event.waitUntil(
        caches.keys().then(function(keys) { return Promise.allSettled(
            keys.filter(function(key){
                return Boolean(key !== REQUIRED_CACHE && key !== STATIC_CACHE && key !== USEFUL_CACHE && String(key).startsWith("unless-update-cache"));
            }).map(function(key){
                return caches.delete(key);
            })
        )})
    );
});