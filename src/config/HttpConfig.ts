/**
 * @file
 * Http Request Configuration
 * Used in library: axios
 *
 * This file provides the standard configuration to communicate with the server
 * See https://github.com/axios/axios
 * This configuration will be set in @/app/Setup.ts
 */

import axios, {AxiosError} from 'axios'
import {$} from '@/facade'
import {HttpStatus} from '@/enums/HttpStatus'
import {Socket} from '@/app/Socket'
import qs from 'qs'

/**
 * HTTP Configuration
 */
export class HttpConfig {
  /**
   * Web Server request & response config
   */
  readonly axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    paramsSerializer: params => qs.stringify(params, {arrayFormat: 'repeat'}), // myendpoint?myarray=1&myarray=2
  })

  /**
   * socket Server config
   */
  readonly socketInstance = new Socket({
    baseURL: process.env.VUE_APP_SOCKET_URL,
  })

  constructor() {
    /**
     * Interceptor for every HTTP request of this app
     */
    this.axiosInstance.interceptors.request.use(config => {
      const pattern = /^(?:https?:)?\/\/[\w.]+[\w-/]+[\w?&=%]*$/g
      const isRelativeUrl = !pattern.exec(config.url ?? '')

      if (isRelativeUrl) {
        config.headers['Accept-Language'] = $.app.language
        config.headers['X-Client-Version'] = `w${$.app.version}` // w = web

        if ($.auth.isLogged) {
          config.headers.Authorization = `Bearer ${$.auth.token}`
        }
      }

      return config
    })

    /**
     * Interceptor for every HTTP response of this app
     */
    this.axiosInstance.interceptors.response.use(
      response => response,
      (error: AxiosError) => {
        const response = error.response

        if (error.config?.headers?.['X-Ignore-Errors']) {
          return Promise.reject(
            response?.data.message ?? response?.statusText ?? ''
          )
        }

        if (!response) {
          $.toast.error('system.error.noServer')
          return Promise.reject($.t('system.error.noServer'))
        }

        if (response.status === HttpStatus.UNAUTHORIZED) {
          $.auth.signOut()
        }

        if (response.status >= 400) {
          $.snotify.error(
            response.data.message ?? response.statusText,
            response.status.toString()
          )
          return Promise.reject(response.data.message ?? response.statusText)
        }

        return Promise.reject(error)
      }
    )
  }
}
