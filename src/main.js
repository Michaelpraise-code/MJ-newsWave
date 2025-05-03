import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import store from './store/index.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faMicrochip, faBriefcase, faInfoCircle, faEnvelope, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

// Add all required icons to the library
library.add(faHome, faMicrochip, faBriefcase, faInfoCircle, faEnvelope, faSearch, faBars, faTimes)

const app = createApp(App)
app.use(router)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')