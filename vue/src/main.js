import './assets/main.scss'
import './assets/Index.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Toastify from  'vue3-toastify'
import 'vue3-toastify/dist/index.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faUserSecret,
    faEnvelope,
    faUser,
    faEye,
    faLock,
    faCircleUser,
    faArrowRightFromBracket, faCircleCheck,
} from '@fortawesome/free-solid-svg-icons'
import {faPinterest,faTwitter,faFacebook} from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faTimesCircle,faCircleCheck,faUserSecret,faUser,faEnvelope,faEye,faLock,faCircleUser,faFacebook,faTwitter,faPinterest,faArrowRightFromBracket)
import App from './App.vue'
import router from './router'
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons";


const app = createApp(App)

app.use(createPinia())
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(Vue3Toastify,{
        autoClose:3000
    })
app.use(router)

app.mount('#app')
