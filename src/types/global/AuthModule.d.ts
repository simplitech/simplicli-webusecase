import {ActionContext} from 'vuex'
import {User} from '@/model/resource/User'
import {AuthRequestOptions} from '@/model/request/AuthRequestOptions'

declare global {
  interface AuthState {
    token: string | null
    loggedUser: User | null
    options: AuthRequestOptions | null
    cachePath: string | null
  }

  type AuthContext = ActionContext<AuthState, RootState>
}
