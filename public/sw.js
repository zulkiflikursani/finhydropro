if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),f={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>f[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/0pKHn19BmtesL1VUE3Upw/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/0pKHn19BmtesL1VUE3Upw/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/190-7150f8a5a5a7dea5.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/231-5e0bc339e1666e38.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/445-cf98571c6de1186c.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/595-57f7511d191e01af.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/630-8b62fdaf16f8f1c0.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/68-84d0466c8bb19b64.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/873-f0a337075e2f5668.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/8e1d74a4-2dae01154e8d8569.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/911-abcddacc80f1e0a3.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/932-dced4d47ba3f1f24.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/app/_not-found/page-4f67f4ed4ff3761f.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/app/blog/layout-e7d3d6da0c0ba25d.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/app/blog/page-7a7176b93f8cbc0a.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/app/error-ce5c1d57ebcec570.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/app/keranjang/layout-c10625b639ad71b9.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/app/keranjang/page-d688a2bfe82e3dca.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/app/layout-6f8c916cf1b33853.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/app/page-a587e9ac3efaefbd.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/app/pricing/layout-d08346ce4f827360.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/app/pricing/page-5f63e4b68ab90620.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/app/profil/layout-9f6d23f3363a2a21.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/app/profil/page-d22a386af76728db.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/app/profil/riwayat-transaksi/layout-2869548fe2bba3b2.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/app/profil/riwayat-transaksi/page-23aa2b351943db55.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/f7333993-d1ef59abe5f42510.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/fd9d1056-13aa76f036058ae3.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/main-app-97892cb0426ef770.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/main-b153739760f2a159.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-4a551c090b270bc7.js",revision:"0pKHn19BmtesL1VUE3Upw"},{url:"/_next/static/css/0ffc584bd747a8b5.css",revision:"0ffc584bd747a8b5"},{url:"/_next/static/css/3b5ffe9dec63e438.css",revision:"3b5ffe9dec63e438"},{url:"/_next/static/media/122c360d7fe6d395-s.p.woff2",revision:"9b2795fb691d8f8a83312a4436f5a453"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/9bbb7f84f3601865-s.woff2",revision:"d8134b7ae9ca2232a397ef9afa6c8d30"},{url:"/_next/static/media/9f05b6a2725a7318-s.woff2",revision:"afbfd524bdefea1003f0ee71b617e50e"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/a8eac78432f0a60b-s.woff2",revision:"be605f007472cc947fe6b6bb493228a5"},{url:"/_next/static/media/c740c1d45290834f-s.woff2",revision:"bff99a4bbc4740c49b75b52f290be90e"},{url:"/_next/static/media/d0697bdd3fb49a78-s.woff2",revision:"50b29fea20cba8e522c34a1413592253"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/assets/images/dashboard.jpg",revision:"9996a82fb3506ae96387946c7097cb10"},{url:"/assets/images/gambar1.jpeg",revision:"cc22e378e49c336ed0169aa51928a2a8"},{url:"/assets/images/gambar2.jpeg",revision:"c34a4c3deb5ca18cabebe9d1e5123b03"},{url:"/assets/images/gambar3.jpeg",revision:"b8b0a4c09bd50f17db3a1132406bc3fa"},{url:"/assets/images/gambar4.jpeg",revision:"8c957cd72cf5da6874d93be53c7780cc"},{url:"/assets/images/gambar5.jpeg",revision:"92de19d403c8383b0e6b0f68bc7b4a66"},{url:"/assets/images/gambar6.jpeg",revision:"289ceaa0254cec93b3988bb74f6433a1"},{url:"/assets/images/gambar7.jpeg",revision:"12bea307982e613c36323cebbd04dc10"},{url:"/assets/images/selada.jpg",revision:"657536d782358c0cb2bf993d1eea5017"},{url:"/icons/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/logo.png",revision:"dd9ddbb90bac6c9efe781c96a5abb0fc"},{url:"/manifest.json",revision:"d3dc39a2b09dbdddaad10739ce7d16f5"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
