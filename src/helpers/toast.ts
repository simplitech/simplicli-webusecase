import {SnotifyToastConfig} from 'vue-snotify'
import {push} from '@/helpers/router'
import {$} from '@/config/framework.config'

export function success(
  body: string,
  title?: string,
  useI18n = true,
  config: SnotifyToastConfig = {}
) {
  if (useI18n)
    $.snotify.success(
      $.t(body) as string,
      title ? ($.t(title) as string) : '',
      config
    )
  else $.snotify.success(body, title || '', config)
}

export async function successAndPush(
  body: string,
  uri: string,
  title?: string,
  useI18n: boolean = true,
  config?: SnotifyToastConfig
) {
  success(body, title, useI18n, config)
  await push(uri)
}

export function error(
  body: string,
  title?: string,
  useI18n = true,
  config: SnotifyToastConfig = {}
) {
  if (useI18n)
    $.snotify.error(
      $.t(body) as string,
      title ? ($.t(title) as string) : '',
      config
    )
  else $.snotify.error(body, title || '', config)
}

export function errorValidation(message: string) {
  error(message, $.t('system.error.validation') as string, false)
}

export async function errorAndPush(
  body: string,
  uri: string,
  title?: string,
  useI18n: boolean = true,
  config?: SnotifyToastConfig
) {
  error(body, title, useI18n, config)
  await push(uri)
}

export function abort(
  body: string,
  title?: string,
  useI18n = true,
  config: SnotifyToastConfig = {}
) {
  error(body, title, useI18n, config)
  throw new Error(useI18n ? ($.t(body) as string) : body)
}

export function warning(
  body: string,
  title?: string,
  useI18n = true,
  config: SnotifyToastConfig = {}
) {
  if (useI18n)
    $.snotify.warning(
      $.t(body) as string,
      title ? ($.t(title) as string) : '',
      config
    )
  else $.snotify.warning(body, title || '', config)
}

export async function warningAndPush(
  body: string,
  uri: string,
  title?: string,
  useI18n: boolean = true,
  config?: SnotifyToastConfig
) {
  warning(body, title, useI18n, config)
  await push(uri)
}

export function info(
  body: string,
  title?: string,
  useI18n = true,
  config: SnotifyToastConfig = {}
) {
  if (useI18n)
    $.snotify.info(
      $.t(body) as string,
      title ? ($.t(title) as string) : '',
      config
    )
  else $.snotify.info(body, title || '', config)
}

export async function infoAndPush(
  body: string,
  uri: string,
  title?: string,
  useI18n: boolean = true,
  config?: SnotifyToastConfig
) {
  info(body, title, useI18n, config)
  await push(uri)
}
