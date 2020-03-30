import moment from 'moment'
import {$} from '@/facade'
import {InputType} from '@simpli/vue-input/lib/InputType'

export abstract class FilterHelper {
  static toString(val?: string | number | null): string {
    return val !== null && val !== undefined ? String(val) : ''
  }

  static bool(val?: boolean | null) {
    return val !== undefined && val !== null
      ? ($.t(`boolean.${val}`) as string)
      : ''
  }

  static datetime(date?: moment.MomentInput | null) {
    return moment(date ?? undefined).isValid()
      ? moment(date ?? undefined).format($.t('dateFormat.datetime') as string)
      : ''
  }

  static date(date?: moment.MomentInput | null) {
    return moment(date ?? undefined).isValid()
      ? moment(date ?? undefined).format($.t('dateFormat.date') as string)
      : ''
  }

  static time(date?: moment.MomentInput | null) {
    return moment(date ?? undefined).isValid()
      ? moment(date ?? undefined).format($.t('dateFormat.time') as string)
      : ''
  }

  static truncate(val?: InputType, length?: number) {
    return $.config.filter.truncate(val, length)
  }

  static stripHtml(val?: InputType) {
    return $.config.filter.stripHtml(val)
  }

  static removeDelimiters(val?: InputType) {
    return $.config.filter.removeDelimiters(val)
  }

  static phone(val?: InputType) {
    return $.config.filter.phone(val)
  }

  static zipcode(val?: InputType) {
    return $.config.filter.zipcode(val)
  }

  static rg(val?: InputType) {
    return $.config.filter.rg(val)
  }

  static cpf(val?: InputType) {
    return $.config.filter.cpf(val)
  }

  static cnpj(val?: InputType) {
    return $.config.filter.cnpj(val)
  }

  static cpfOrCnpj(val?: InputType) {
    return $.config.filter.cpfOrCnpj(val)
  }

  static pad(val?: InputType, length?: number) {
    return $.config.filter.pad(val, length)
  }
}
