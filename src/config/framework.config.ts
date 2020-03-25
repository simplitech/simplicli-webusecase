import * as moment from 'moment'
import {merge} from 'lodash'
import Vue from 'vue'
import axios, {AxiosInstance} from 'axios'
import {SnotifyService} from 'vue-snotify/SnotifyService'
import VueRouter, {Route, RouterOptions} from 'vue-router'
import VueI18n from 'vue-i18n'
// @ts-ignore
import VueMoney from 'v-money'
import VeeValidate from 'vee-validate'
// @ts-ignore
import * as validators from '@brazilian-utils/validators'
import {Currency, Lang} from '@/enums'
import socket, {SocketInstance} from '@/helpers/socket'
import {IVueI18n} from 'vue-i18n'
import {Validator} from 'vee-validate'
import {LocaleOptions} from '@/config/locale.config'
import {FilterOptions} from '@/config/filter.config'
import {AwaitController} from '@simpli/vue-await/lib/Await'
import {ModalController} from '@simpli/vue-modal/lib/Modal'

interface $Prototype {
  axios: AxiosInstance
  socket: SocketInstance

  filter: FilterOptions

  router: VueRouter
  i18n: VueI18n
  bus: Vue

  route: Route

  t: typeof VueI18n.prototype.t
  tc: typeof VueI18n.prototype.tc
  te: typeof VueI18n.prototype.te
  d: typeof VueI18n.prototype.d
  n: typeof VueI18n.prototype.n

  snotify: SnotifyService

  await: AwaitController
  modal: ModalController
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
    $socket: SocketInstance

    $router: VueRouter
    $route: Route

    $bus: Vue

    readonly $i18n: VueI18n & IVueI18n
    $t: typeof VueI18n.prototype.t
    $tc: typeof VueI18n.prototype.tc
    $te: typeof VueI18n.prototype.te
    $d: typeof VueI18n.prototype.d
    $n: typeof VueI18n.prototype.n

    $snotify: SnotifyService

    $await: AwaitController
    $modal: ModalController

    $validator: Validator
  }
}

/**
 * Provides getters from anywhere according to your [configuration](../../docs/getting-started.md).
 * All getters are static from this class.
 */
export abstract class $ {
  static get axios(): AxiosInstance {
    return Simpli.$prototype.axios
  }

  static get socket(): SocketInstance {
    return Simpli.$prototype.socket
  }

  static get filter(): FilterOptions {
    return Simpli.$prototype.filter
  }

  static get router(): VueRouter {
    return Simpli.$prototype.router
  }

  static get i18n(): VueI18n {
    return Simpli.$prototype.i18n
  }

  static get bus(): Vue {
    return Simpli.$prototype.bus
  }

  static get route(): Route {
    return Simpli.$prototype.route
  }

  static get t(): typeof VueI18n.prototype.t {
    return Simpli.$prototype.t
  }

  static get tc(): typeof VueI18n.prototype.tc {
    return Simpli.$prototype.tc
  }

  static get te(): typeof VueI18n.prototype.te {
    return Simpli.$prototype.te
  }

  static get d(): typeof VueI18n.prototype.d {
    return Simpli.$prototype.d
  }

  static get n(): typeof VueI18n.prototype.n {
    return Simpli.$prototype.n
  }

  static get snotify(): SnotifyService {
    return Simpli.$prototype.snotify
  }

  static get await(): any {
    return Simpli.$prototype.await
  }

  static get modal(): any {
    return Simpli.$prototype.modal
  }
}

/**
 * Static class used to initializing this library
 */
export class Simpli {
  private static $: $Prototype

  /**
   * Setup of the [axios](https://github.com/axios/axios) instance in order to use a native HTTP request.
   */
  static axios?: AxiosInstance

  /**
   * Setup of the [[SocketInstance]] in order to use socket connection.
   */
  static socket?: SocketInstance

  /**
   * Setup of the global Vue filters.
   */
  static filters: FilterOptions = {}

  /**
   * Setup of locale from [vue-i18n](https://kazupon.github.io/vue-i18n/introduction.html)
   */
  static locale?: LocaleOptions

  /**
   * Setup of validation for vee-validate
   */
  static localeVeeValidate?: LocaleOptions

  /**
   * Setups the `router` variable from [vue-router](https://router.vuejs.org/) module.
   */
  static router?: RouterOptions

  /**
   * Setups the default language.
   */
  static lang: Lang = Lang.EN_US

  /**
   * Setups the default currency.
   */
  static currency: Currency = Currency.USD

  static get $prototype() {
    return Simpli.$
  }

  /**
   * Change the current language of the app
   * @param lang Desired language
   */
  static changeLocale(lang: Lang) {
    Simpli.$.i18n.locale = lang
  }

  /**
   * Change the current language of the app
   * @param currency Desired currency
   */
  static changeCurrency(currency: Currency) {
    Vue.use(VueMoney, {
      decimal: $.t('lang.decimal') as string,
      thousands: $.t('lang.thousands') as string,
      prefix: $.t(`currency.${currency}.prefix`) as string,
      precision: Number($.t(`currency.${currency}.precision`) as string),
    })
  }

  /**
   * Applies the Simpli setup
   */
  static install() {
    const $axios = Simpli.axios || (axios && axios.create())
    const $socket = Simpli.socket || (socket && socket.create())

    const $filter = {...Simpli.filters}

    const $router = new VueRouter(Simpli.router)
    const $i18n = new VueI18n({
      locale: Simpli.lang,
      messages: {...Simpli.locale},
    })
    const $bus = new Vue({router: $router, i18n: $i18n})

    Vue.use(VeeValidate, {
      i18n: $i18n,
      useConstraintAttrs: false,
      dictionary: merge(Simpli.localeVeeValidate, Simpli.locale),
    })

    VeeValidate.Validator.extend('cpf', {
      validate: (value?: string) => validators.isValidCpf(value),
    })
    VeeValidate.Validator.extend('cnpj', {
      validate: (value?: string) => validators.isValidCnpj(value),
    })
    VeeValidate.Validator.extend('phone', {
      validate: (value?: string) => validators.isValidPhone(value),
    })
    VeeValidate.Validator.extend('cep', {
      validate: (value?: string) => validators.isValidCep(value),
    })
    VeeValidate.Validator.extend('boleto', {
      validate: (value?: string) => validators.isValidBoleto(value),
    })

    const $route = $bus.$route

    const $t = $bus.$t
    const $tc = $bus.$tc
    const $te = $bus.$te
    const $d = $bus.$d
    const $n = $bus.$n

    const $snotify = $bus.$snotify

    for (const key in $filter) {
      Vue.filter(key, $filter[key])
    }

    Simpli.$ = {
      axios: $axios,
      socket: $socket,

      filter: $filter,

      router: $router,
      i18n: $i18n,
      bus: $bus,

      route: $route,

      t: $t,
      tc: $tc,
      te: $te,
      d: $d,
      n: $n,

      snotify: $snotify,

      await: Vue.prototype.$await,
      modal: Vue.prototype.$modal,
    }

    moment.locale(Simpli.$.i18n.locale)

    Simpli.changeCurrency(Simpli.currency)

    Vue.prototype.$axios = Simpli.$.axios
    Vue.prototype.$socket = Simpli.$.socket
    Vue.prototype.$bus = Simpli.$.bus
    Vue.prototype.$snotify = Simpli.$.snotify
  }
}
