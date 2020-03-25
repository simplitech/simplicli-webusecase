/**
 * @file
 * Vendor bootstrap
 *
 * This file contains the initialization of vendors library
 */

import Vue from 'vue'

import './registerServiceWorker'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/css/solid.min.css'
import '@fortawesome/fontawesome-free/css/regular.min.css'
import '@fortawesome/fontawesome-free/css/brands.min.css'
import 'vue-transition-expand/dist/vue-transition-expand.css'

import VueAdapTable from '@simpli/vue-adap-table'
import VueAwait from '@simpli/vue-await'
import VueI18n from 'vue-i18n'
import VueMeta from 'vue-meta'
import VueModal from '@simpli/vue-modal'
import VueMoment from 'vue-moment'
import VueRenderSchema from '@simpli/vue-render-schema'
import VueRouter from 'vue-router'
import VueSnotify from 'vue-snotify'
// @ts-ignore
import VueTheMask from 'vue-the-mask'
// @ts-ignore
import TransitionExpand from 'vue-transition-expand'

Vue.use(VueAdapTable)
Vue.use(VueAwait)
Vue.use(VueI18n)
Vue.use(VueMeta)
Vue.use(VueModal)
Vue.use(VueMoment)
Vue.use(VueRenderSchema)
Vue.use(VueRouter)
Vue.use(VueSnotify)
Vue.use(VueTheMask)
Vue.use(TransitionExpand)
