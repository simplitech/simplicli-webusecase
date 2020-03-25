import Vue from 'vue'
import App from './App.vue'

import '@/setup/vendor'
import '@/setup/simpli'
import '@/setup/settings'

import {store} from '@/store'
import {$} from '@/config/framework.config'

new Vue({
  router: $.router,
  i18n: $.i18n,
  store,
  render: h => h(App),
}).$mount('#app')

// @ts-ignore
window.appLoader.finish()
