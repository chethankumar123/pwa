//install the service worker
self.addEventListener("install", () => {
  console.log("installation has been done!");
});

//activate
self.addEventListener("activate", () => {
  console.log("the service worker is activated!");
});

//fetch request
self.addEventListener("fetch", (evnt) => {
  console.log("fetch being mafe", evnt);
});
