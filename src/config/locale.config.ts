/**
 * @file
 * Locale Configuration
 * Used in library: vue-i18n
 *
 * This file controls the languages and currencies
 * See https://kazupon.github.io/vue-i18n/guide/started.html
 * This configuration will be set in @/bootstrap/app.ts
 */

import {Lang, Currency, LocaleOptions} from 'simpli-web-sdk'

/**
 * App languages pack
 */
import enUs from '@/locale/en-US/lang'
import ptBr from '@/locale/pt-BR/lang'

/**
 * Moment JS languages pack
 * Note: US English is already imported by default
 */
import 'moment/locale/pt-br'

/**
 * App default language
 */
export const defaultLang = process.env.VUE_APP_LANG as Lang

/**
 * App default currency
 */
export const defaultCurrency = process.env.VUE_APP_CURRENCY as Currency

/**
 * vue-i18n locale
 */
export const localeVueI18n: LocaleOptions = {
  [Lang.EN_US]: enUs,
  [Lang.PT_BR]: ptBr,
}

/**
 * vee-i18n locale
 */
export const localeVeeValidate: LocaleOptions = {
  [Lang.EN_US]: require('vee-validate/dist/locale/en'),
  [Lang.PT_BR]: require('vee-validate/dist/locale/pt_BR'),
}
