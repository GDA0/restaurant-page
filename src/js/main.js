// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import modules
import loadHomePage from '../modules/home-page'
import loadMenuPage from '../modules/menu-page'

document.addEventListener('DOMContentLoaded', () => {
  loadHomePage()

  const homeBtn = document.querySelector('#homeBtn')
  const menuBtn = document.querySelector('#menuBtn')
  const aboutBtn = document.querySelector('#aboutBtn')

  homeBtn.addEventListener('click', () => {
    loadHomePage()
  })

  menuBtn.addEventListener('click', () => {
    loadMenuPage()
  })
})
