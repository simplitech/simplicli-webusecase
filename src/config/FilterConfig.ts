/**
 * @file
 * VUE Filters
 * Used in library: vue
 *
 * Use this file to register filters
 * See https://vuejs.org/v2/guide/filters.html
 * This configuration will be set in @/bootstrap/app.ts
 */

import {$} from '@/simpli'
import {InputType} from '@simpli/vue-input/lib/InputType'

/**
 * VUE Filters Configuration
 */
export class FilterConfig {
  truncate(input?: InputType, length?: number) {
    const value = $.filter.toString(input)
    if (value.length > (length || 0)) {
      return `${value.substring(0, length)}...`
    }
    return value
  }

  stripHtml(input?: InputType) {
    const value = $.filter.toString(input)
    const doc = new DOMParser().parseFromString(value, 'text/html')
    return doc.body.textContent || ''
  }

  removeDelimiters(input?: InputType) {
    return $.filter.toString(input).replace(/[. ,:\-/]+/g, '')
  }

  phone(input?: InputType) {
    return $.filter
      .toString(input)
      .replace(/\D/g, '')
      .replace(
        new RegExp($.t('filter.phone.regex') as string),
        $.t('filter.phone.format') as string
      )
  }

  zipcode(input?: InputType) {
    return $.filter
      .toString(input)
      .replace(/\D/g, '')
      .replace(
        new RegExp($.t('filter.zipcode.regex') as string),
        $.t('filter.zipcode.format') as string
      )
  }

  rg(input?: InputType) {
    return $.filter
      .toString(input)
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, '$1.$2.$3-$4')
  }

  cpf(input?: InputType) {
    return $.filter
      .toString(input)
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
  }

  cnpj(input?: InputType) {
    return $.filter
      .toString(input)
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
  }

  cpfOrCnpj(input?: InputType) {
    const value = $.filter.toString(input).replace(/\D/g, '')

    if (value.length === 11) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
    }

    if (value.length === 14) {
      return value.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
        '$1.$2.$3/$4-$5'
      )
    }

    return value
  }

  pad(input?: InputType, length = 2) {
    let value = $.filter.toString(input)
    while (value.length < length) value = `0${value}`
    return value
  }
}
