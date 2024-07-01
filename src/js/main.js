// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import modules
import loadHomePage from '../modules/home-page'
document.addEventListener('DOMContentLoaded', () => {
  loadHomePage()
})
