import {ActionContext, Module} from 'vuex'
import {getStoreAccessors} from 'vuex-typescript'
import {AuthState, RootState} from '@/types/store'
import {$} from '@/config/framework.config'
import {Helper} from '@/helpers'
import {AuthRequest} from '@/model/request/AuthRequest'
import {AuthResponse} from '@/model/response/AuthResponse'

export type AuthContext = ActionContext<AuthState, RootState>

export class AuthModule implements Module<AuthState, RootState> {
  readonly accessors = getStoreAccessors<AuthState, RootState>('auth')

  namespaced = true

  state: AuthState = {
    token: null,
    user: null,
    cachePath: null,
  }

  getters = {
    isLogged: (state: AuthState) => Boolean(state.token),
    token: (state: AuthState) => state.token,
    user: (state: AuthState) => state.user,
    cachePath: (state: AuthState) => state.cachePath,
  }

  actions = {
    /**
     * Sign in account
     */
    async signIn(context: AuthContext, request: AuthRequest) {
      const authResponse = await request.signIn()

      if (authResponse.token) localStorage.setItem('token', authResponse.token)

      context.commit('POPULATE_TOKEN')

      const uri =
        context.getters.cachePath && $.route.name !== 'signIn'
          ? context.getters.cachePath
          : '/dashboard'
      await Helper.infoAndPush('system.info.welcome', uri)

      context.commit('SET_CACHE_PATH', null)

      return authResponse
    },

    /**
     * Verifies authorization and refresh user info.
     */
    async authenticate(context: AuthContext) {
      context.commit('POPULATE_TOKEN')

      if (!context.getters.isLogged) {
        context.commit('SET_CACHE_PATH', $.route.path)

        await context.dispatch('signOut')
        Helper.abort('system.error.unauthorized')
      }

      const authResponse = await AuthRequest.authenticate()

      const id = authResponse.user?.$id ?? 0
      const token = authResponse.token || ''

      // TODO: verify the need of a socket connection
      const connection = $.socket.connect<string>(
        'notification',
        `/user/notification/${token}`
      )

      connection.onOpen(() =>
        console.info(`Socket connection with client id=${id} established`)
      )
      connection.onClose(() =>
        console.info(`Socket connection with client id=${id} lost`)
      )
      connection.onError(() =>
        console.error(`Error with socket connection(client id=${id})`)
      )
      connection.onData(resp => $.snotify.info(resp as string))

      context.commit('POPULATE', authResponse)

      return authResponse
    },

    /**
     * Sign out account
     */
    async signOut(context: AuthContext) {
      await Helper.push('/sign-in')

      // TODO: verify the need of a socket connection
      $.socket.disconnect('notification')

      context.commit('FORGET')
    },
  }

  mutations = {
    POPULATE_TOKEN(state: AuthState) {
      state.token = localStorage.getItem('token') ?? null
    },

    POPULATE(state: AuthState, response: AuthResponse) {
      state.user = response.user
    },

    FORGET(state: AuthState) {
      state.token = null
      state.user = null

      localStorage.removeItem('token')
    },

    SET_CACHE_PATH(state: AuthState, cachePath: string | null) {
      state.cachePath = cachePath
    },
  }
}
