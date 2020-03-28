/**
 * @file
 * Locale Configuration
 * Used in library: vue-i18n
 *
 * This file controls the languages and currencies
 * See https://kazupon.github.io/vue-i18n/guide/started.html
 * This configuration will be set in @/bootstrap/app.ts
 */

import {I18nOptions} from 'vue-i18n'

import {Lang} from '@/enums/Lang'
import {Currency} from '@/enums/Currency'

/**
 * VUE I18n Configuration
 */
export class I18nConfig implements I18nOptions {
  readonly locale = process.env.VUE_APP_LANG! as Lang
  readonly currency = process.env.VUE_APP_CURRENCY! as Currency

  readonly messages = {
    [Lang.EN_US]: require('../locale/en-US/lang.json'),
    [Lang.PT_BR]: require('../locale/pt-BR/lang.json'),
  }

  readonly messagesVeeValidate = {
    [Lang.EN_US]: require('vee-validate/dist/locale/en'),
    [Lang.PT_BR]: require('vee-validate/dist/locale/pt_BR'),
  }
}
