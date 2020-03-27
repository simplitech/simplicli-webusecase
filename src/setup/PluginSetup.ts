/**
 * @file
 * Vendor bootstrap
 *
 * This file contains the initialization of vendors library
 */

import Vue from 'vue'
import {merge} from 'lodash'

import {$} from '@/simpli'
import {Lang} from '@/enums/Lang'
import {Currency} from '@/enums/Currency'

import VueAdapTable from '@simpli/vue-adap-table'
import VueAwait from '@simpli/vue-await'
import VueModal from '@simpli/vue-modal'
import VueRenderSchema from '@simpli/vue-render-schema'

import VueI18n from 'vue-i18n'
import VueMeta from 'vue-meta'
import VueMoment from 'vue-moment'
import VueRouter from 'vue-router'
import VueSnotify from 'vue-snotify'
// @ts-ignore
import VueTheMask from 'vue-the-mask'
// @ts-ignore
import VueMoney from 'v-money'
// @ts-ignore
import TransitionExpand from 'vue-transition-expand'
import VeeValidate from 'vee-validate'

export abstract class PluginSetup {
  static init() {
    Vue.use(VueAdapTable)
    Vue.use(VueAwait)
    Vue.use(VueModal)
    Vue.use(VueRenderSchema)

    Vue.use(VueI18n)
    Vue.use(VueMeta)
    Vue.use(VueMoment)
    Vue.use(VueRouter)
    Vue.use(VueSnotify)
    Vue.use(VueTheMask)
    Vue.use(TransitionExpand)

    Vue.use(VeeValidate, {
      i18n: new VueI18n($.config.i18n),
      useConstraintAttrs: false,
      dictionary: merge(
        $.config.i18n.messagesVeeValidate,
        $.config.i18n.messages
      ),
    })

    Vue.config.productionTip = false

    // Running time initialization
    Vue.prototype.$config = $.config

    // App
    Vue.prototype.$app = $.app
    Vue.prototype.$auth = $.auth

    // Helpers
    Vue.prototype.$env = $.env
    Vue.prototype.$file = $.file
    Vue.prototype.$filter = $.filter
    Vue.prototype.$nav = $.nav
    Vue.prototype.$toast = $.toast
    Vue.prototype.$utils = $.utils

    const filter: any = $.config.filter
    for (const key in filter) {
      if (filter.hasOwnProperty(key)) {
        Vue.filter(key, filter[key])
      }
    }
  }

  static changeLocale(lang: Lang) {
    $.vm.$i18n.locale = lang
  }

  static changeCurrency(currency: Currency) {
    Vue.use(VueMoney, {
      decimal: $.t('lang.decimal') as string,
      thousands: $.t('lang.thousands') as string,
      prefix: $.t(`currency.${currency}.prefix`) as string,
      precision: Number($.t(`currency.${currency}.precision`) as string),
    })
  }
}
