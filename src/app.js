import "core-js/stable";
import "regenerator-runtime/runtime";
import "lazysizes"
import * as OfflinePluginRuntime from "offline-plugin/runtime";

OfflinePluginRuntime.install();

const navbarBurger = document.getElementById("navbarBurger");
const target = document.getElementById("navbarMenu");
navbarBurger.addEventListener("click", () => {
  navbarBurger.classList.toggle("is-active");
  target.classList.toggle("is-active");
});

async function getMapComponent() {
  const map = await import(/* webpackChunkName: "map" */ "./javascript/map.js");
  return map.mapIframe();
}

document.addEventListener("DOMContentLoaded", () => {
  (document.querySelectorAll(".notification .delete") || []).forEach(
    ($delete) => {
      const $notification = $delete.parentNode;

      $delete.addEventListener("click", () => {
        $notification.parentNode.removeChild($notification);
      });
    }
  );
});

window.addEventListener("load", () => {
  getMapComponent().then((mapIframe) => {
    const mapContainer = document.getElementById("map");
    mapContainer.appendChild(mapIframe);
  });
});
