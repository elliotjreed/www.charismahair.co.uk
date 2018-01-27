import * as OfflinePluginRuntime from 'offline-plugin/runtime'

OfflinePluginRuntime.install()

const navbarBurger = document.getElementById('navbarBurger')
const target = document.getElementById('navbarMenu')
navbarBurger.addEventListener('click', () => {
  navbarBurger.classList.toggle('is-active')
  target.classList.toggle('is-active')
})
