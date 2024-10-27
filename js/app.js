if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/pwa/sw.js")
    .then((reg) => {
      console.log("service worker is registered", reg);
    })
    .catch((err) => {
      console.log("service worker failed to register", err);
    });
}
