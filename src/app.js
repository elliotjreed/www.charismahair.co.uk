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

console.log(
  "%cHello!",
  "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
);
console.log(
  "%cThis website was created by Elliot. You can view the source code at https://github.com/elliotjreed, and can find me at https://www.elliotjreed.com",
  "color:green"
);
