/**
 * @file
 * Locale Configuration
 * Used in library: vue-i18n
 *
 * This file controls the languages and currencies
 * See https://kazupon.github.io/vue-i18n/guide/started.html
 * This configuration will be set in @/bootstrap/app.ts
 */

import {Currency, Lang} from '@/enums'
import enUs from '@/locale/en-US/lang'

export interface LocaleOptions {
  readonly [key: string]: any
}

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
}

/**
 * vee-i18n locale
 */
export const localeVeeValidate: LocaleOptions = {
  [Lang.EN_US]: require('vee-validate/dist/locale/en'),
  [Lang.PT_BR]: require('vee-validate/dist/locale/pt_BR'),
}
