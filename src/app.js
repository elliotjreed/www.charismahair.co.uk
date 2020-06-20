import "core-js/stable";
import "regenerator-runtime/runtime";
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

async function getImagesComponent() {
  const images = await import(
    /* webpackChunkName: "images" */ "./javascript/images.js"
  );
  return images.images();
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

  getImagesComponent().then((images) => {
    const imagesContainer = document.getElementById("images");
    imagesContainer.appendChild(images);
  });
});
