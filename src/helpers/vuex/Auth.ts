import {auth, store} from '@/store'
import {AuthRequest} from '@/model/request/AuthRequest'

const {read, dispatch, commit} = auth.accessors
const {getters, actions, mutations} = auth

export abstract class Auth {
  static get isLogged() {
    return read(getters.isLogged)(store)
  }

  static get token() {
    return read(getters.token)(store)
  }

  static get user() {
    return read(getters.user)(store)
  }

  static get cachePath() {
    return read(getters.cachePath)(store)
  }

  static signIn(request: AuthRequest) {
    return dispatch(actions.signIn)(store, request)
  }

  static authenticate() {
    return dispatch(actions.authenticate)(store)
  }

  static signOut() {
    return dispatch(actions.signOut)(store)
  }

  static populateToken() {
    return commit(mutations.POPULATE_TOKEN)(store)
  }
}
