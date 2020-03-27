import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/css/solid.min.css'
import '@fortawesome/fontawesome-free/css/regular.min.css'
import '@fortawesome/fontawesome-free/css/brands.min.css'
import 'vue-transition-expand/dist/vue-transition-expand.css'

import '@/registerServiceWorker'

import {ApplicationSetup} from '@/setup/ApplicationSetup'
import {PluginSetup} from '@/setup/PluginSetup'

PluginSetup.init()
ApplicationSetup.init()

// @ts-ignore
window.appLoader.finish()
