'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "69775a5b58f4624d20e5191a680a13ad",
"version.json": "fb9350e8f79b2a72ad31c17d1728cd13",
"index.html": "1a49a5434af3fc1c840a6edf62bd1a2c",
"/": "1a49a5434af3fc1c840a6edf62bd1a2c",
"firebase-messaging-sw.js": "3fed673f2f883d924b22804c840bacb9",
"main.dart.js": "f46334ae518bce14305fdc88612f947c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "1681cc85d1c1f75c84ae3eef2fb2e89f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/loading.png": "2b38b3e7d064d6493c6d7063033bed92",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8c9c6671bf516057d4774fd2231d1f69",
"assets/AssetManifest.json": "cd24de8a5c035c2a0f131788729b9716",
"assets/NOTICES": "10efc3ba95870711d2ec73943070e009",
"assets/FontManifest.json": "a3b4325e5e2da025e63f386f1e791e90",
"assets/AssetManifest.bin.json": "1f1dffb96e976af1de925995506461ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "570da368f96dc6433b8a1006c425ca7d",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "dcd341d3f3a5755bc35155dbb2434af3",
"assets/fonts/MaterialIcons-Regular.otf": "44a6d7db95488cce611bc3870530fa1c",
"assets/assets/anim/anim_error_json.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/anim/anim_loader_blue.json": "dd0ca94daa536d5d504f26ade4d5b2bc",
"assets/assets/images/3x/ic_logo.png": "1681cc85d1c1f75c84ae3eef2fb2e89f",
"assets/assets/images/3x/ic_access_denied.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/ic_logo.png": "1681cc85d1c1f75c84ae3eef2fb2e89f",
"assets/assets/images/ic_access_denied.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/2x/ic_logo.png": "1681cc85d1c1f75c84ae3eef2fb2e89f",
"assets/assets/images/2x/ic_access_denied.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/svgs/svg_cross_rounded.svg": "5c6e7ffdf533e69d6ebaacb89aec464d",
"assets/assets/svgs/svg_delete.svg": "835c7130d97acf5713a1dc279a8d78b8",
"assets/assets/svgs/svg_edit_pen.svg": "b5a4a5d54a0f0e12380751bd18ca1ff9",
"assets/assets/svgs/svg_cross_icon.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/svgs/svg_image_placeholder.svg": "fda7dd960c498882c032898961583555",
"assets/assets/svgs/svg_back_button_without_bg.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/svgs/svg_upload_image.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/svgs/svg_toast_failure.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/svgs/svg_toast_success.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/svgs/svg_selected_file.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/svgs/svg_calendar.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/svgs/svg_cms_empty_state.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/svgs/svg_more_info.svg": "33d85199bd41539212643e970826e962",
"assets/assets/svgs/svg_plus.svg": "983adeb7633b2d77dd660e559d0e5eac",
"assets/assets/svgs/svg_filters.svg": "ff6bd977fe312e21cf774be3aa084d20",
"assets/assets/svgs/svg_foreground_notification_icon.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/svgs/svg_logo.svg": "384f0a2d7fd1c87fe114a112f8f3a8c9",
"assets/assets/svgs/svg_info2.svg": "1524303198ec8b059c4cb8b796048075",
"assets/assets/svgs/svg_clear_search.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/lang/en.json": "34b767b1137b8ecae67ed36e30483ec9",
"assets/assets/lang/gu.json": "4bc8745d458b9c71d260b6d78127093a",
"assets/assets/fonts/GT%2520Walsheim%2520Pro/GTWalsheimPro-UltraLight.ttf": "3b3a3e23311b7df4325ac69dae90dc8d",
"assets/assets/fonts/GT%2520Walsheim%2520Pro/GTWalsheimPro-Light.ttf": "3745e321a3e602f37ac028aa3ffd443d",
"assets/assets/fonts/GT%2520Walsheim%2520Pro/GTWalsheimPro-Medium.ttf": "f2f36c73edf543e7d7c6dd0a030e3af8",
"assets/assets/fonts/GT%2520Walsheim%2520Pro/GTWalsheimPro-UltraBold.ttf": "3583eeee03e9dcad98ff675b7e4dbaf2",
"assets/assets/fonts/GT%2520Walsheim%2520Pro/GTWalsheimPro-Thin.ttf": "da1833eec4181fc978a90896ca53d542",
"assets/assets/fonts/GT%2520Walsheim%2520Pro/GTWalsheimPro-Regular.ttf": "550c7b057b4c5e92c648fb468dc9fb08",
"assets/assets/fonts/GT%2520Walsheim%2520Pro/GTWalsheimPro-Bold.ttf": "8ee87a5a1f4219b9a1fb984f554662e3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
