!function(){"use strict";const i=["/client/client.0e3ee94d.js","/client/index.24173adc.js","/client/publications.dadf60d6.js","/client/hobbies.fb391fc7.js","/client/index.fa249066.js","/client/[slug].694885b6.js"].concat(["/service-worker-index.html","/amazon.png","/att.svg","/cal.svg","/cambridge.svg","/counterintuitive-properties-of-high-dimensional-space/Figure1.png","/counterintuitive-properties-of-high-dimensional-space/Figure10.png","/counterintuitive-properties-of-high-dimensional-space/Figure11.gif","/counterintuitive-properties-of-high-dimensional-space/Figure12.png","/counterintuitive-properties-of-high-dimensional-space/Figure13.png","/counterintuitive-properties-of-high-dimensional-space/Figure14.png","/counterintuitive-properties-of-high-dimensional-space/Figure15.png","/counterintuitive-properties-of-high-dimensional-space/Figure2.png","/counterintuitive-properties-of-high-dimensional-space/Figure3.png","/counterintuitive-properties-of-high-dimensional-space/Figure4.png","/counterintuitive-properties-of-high-dimensional-space/Figure5.png","/counterintuitive-properties-of-high-dimensional-space/Figure6.png","/counterintuitive-properties-of-high-dimensional-space/Figure7.png","/counterintuitive-properties-of-high-dimensional-space/Figure8.png","/counterintuitive-properties-of-high-dimensional-space/Figure9.png","/cv.pdf","/favicon.png","/global.css","/hobbies/cycling.jpg","/hrt.svg","/intel.svg","/logo-192.png","/logo-512.png","/manifest.json","/me.jpg","/metrinity.jpg","/microsoft.svg","/numerical-algorithms-for-computing-eigenvectors/CrossSection1.png","/numerical-algorithms-for-computing-eigenvectors/CrossSection2.png","/numerical-algorithms-for-computing-eigenvectors/Figure1.png","/numerical-algorithms-for-computing-eigenvectors/Figure1b.png","/numerical-algorithms-for-computing-eigenvectors/Figure1c.png","/numerical-algorithms-for-computing-eigenvectors/Figure1d.png","/numerical-algorithms-for-computing-eigenvectors/Figure1v2.png","/numerical-algorithms-for-computing-eigenvectors/Figure2.gif","/numerical-algorithms-for-computing-eigenvectors/Figure3.gif","/numerical-algorithms-for-computing-eigenvectors/Figure4.gif","/numerical-algorithms-for-computing-eigenvectors/Figure5.png","/numerical-algorithms-for-computing-eigenvectors/Figure6.png","/numerical-algorithms-for-computing-eigenvectors/Figure7.gif","/numerical-algorithms-for-computing-eigenvectors/Figure7v2.gif","/numerical-algorithms-for-computing-eigenvectors/FigureX.png","/osu.svg","/publications/advtrain-thumbnail.jpg","/publications/approxtri-thumbnail.jpg","/publications/boxdim.gif","/publications/finance256.gif","/publications/finance256.jpg","/publications/fixedpt.png","/publications/flowfields.png","/publications/fractal.pdf","/publications/geomae-thumbnail.jpg","/publications/learning-geometric-features-supplement.pdf","/publications/learning-geometric-features-thumbnail.jpg","/publications/learning-geometric-features.pdf","/publications/mars.pdf","/publications/opt-thumbnail.jpg","/publications/poster1_vis12.pdf","/publications/postersummary1_vis12.pdf","/publications/rcdt.png","/publications/srp.png","/publications/streamlines.pdf","/publications/thesis.pdf","/twitter.png"]),e=new Set(i);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1597526351728").then(e=>e.addAll(i)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",i=>{i.waitUntil(caches.keys().then(async i=>{for(const e of i)"cache1597526351728"!==e&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",i=>{if("GET"!==i.request.method||i.request.headers.has("range"))return;const n=new URL(i.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&e.has(n.pathname)?i.respondWith(caches.match(i.request)):"only-if-cached"!==i.request.cache&&i.respondWith(caches.open("offline1597526351728").then(async e=>{try{const n=await fetch(i.request);return e.put(i.request,n.clone()),n}catch(n){const t=await e.match(i.request);if(t)return t;throw n}}))))})}();
