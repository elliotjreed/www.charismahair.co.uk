import 'babel-polyfill'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

OfflinePluginRuntime.install()

const navbarBurger = document.getElementById('navbarBurger')
const target = document.getElementById('navbarMenu')
navbarBurger.addEventListener('click', () => {
  navbarBurger.classList.toggle('is-active')
  target.classList.toggle('is-active')
})

async function getMapComponent () {
  const map = await import(/* webpackChunkName: "map" */ './javascript/map.js')
  return map.mapIframe()
}

async function getImagesComponent () {
  const images = await import(/* webpackChunkName: "images" */ './javascript/images.js')
  return images.images()
}

async function getTrackingComponents () {
  const eventTracker = await import(/* webpackChunkName: "event-tracker" */ 'autotrack/lib/plugins/event-tracker')
  const outboundLinkTracker = await import(/* webpackChunkName: "outbound-link-tracker" */ 'autotrack/lib/plugins/outbound-link-tracker')
  return [eventTracker, outboundLinkTracker]
}

window.addEventListener('load', () => {
  getMapComponent().then(mapIframe => {
    const mapContainer = document.getElementById('map')
    mapContainer.appendChild(mapIframe)
  })

  getImagesComponent().then(images => {
    const imagesContainer = document.getElementById('images')
    imagesContainer.appendChild(images)
  })

  getTrackingComponents().then(() => {
    ga('create', 'UA-90440102-2', 'auto')
    ga('require', 'eventTracker')
    ga('require', 'outboundLinkTracker')
    ga('send', 'pageview')
  })
})
