/**
 * @file
 * Http Request Configuration
 * Used in library: axios
 *
 * This file provides the standard configuration to communicate with the server
 * See https://github.com/axios/axios
 * This configuration will be set in @/bootstrap/app.ts
 */

import axios, {AxiosError} from 'axios'
import {$} from '@/config/framework.config'
import {Helper} from '@/helpers'
import {HttpStatus} from '@/enums'
import socket from '@/helpers/socket'
import {Env} from '@/helpers/Env'
import {App} from '@/helpers/vuex/App'
import {Auth} from '@/helpers/vuex/Auth'
import {RequestConfig, RequestListener} from '@simpli/serialized-request'
import {$await} from '@simpli/vue-await'

/**
 * Web Server request & response config
 */
const axiosInstance = axios.create({
  baseURL: Env.API_URL,
})

/**
 * Socket Server config
 */
const socketInstance = socket.create({
  baseURL: Env.SOCKET_URL,
})

/**
 * Interceptor for every HTTP request of this app
 */
axiosInstance.interceptors.request.use(config => {
  const pattern = /^(?:https?:)?\/\/[\w.]+[\w-/]+[\w?&=%]*$/g
  const isRelativeUrl = !pattern.exec(config.url ?? '')

  if (isRelativeUrl) {
    config.headers['Accept-Language'] = App.language
    config.headers['X-Client-Version'] = `w${App.version}` // w = web

    if (Auth.isLogged) {
      config.headers.Authorization = `Bearer ${Auth.token}`
    }
  }

  return config
})

/**
 * Interceptor for every HTTP response of this app
 */
axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    const response = error.response

    if (error.config?.headers?.['X-Ignore-Errors']) {
      return Promise.reject('')
    }

    if (!response) {
      Helper.error('system.error.noServer')
      return Promise.reject($.t('system.error.noServer'))
    }

    if (response.status === HttpStatus.UNAUTHORIZED) {
      Auth.signOut()
    }

    if (response.status >= 400) {
      $.snotify.error(
        response.data.message || response.statusText,
        response.status.toString()
      )
      return Promise.reject(response.data.message || response.statusText)
    }

    return Promise.reject(error)
  }
)

RequestListener.onRequestStart(reqName => $await.init(reqName))
RequestListener.onRequestEnd(reqName => $await.done(reqName))

RequestConfig.axios = axiosInstance

export {axiosInstance, socketInstance}
