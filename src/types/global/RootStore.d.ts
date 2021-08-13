import {Lang} from '@/enums/Lang'
import {Currency} from '@/enums/Currency'
import {ActionContext} from 'vuex'

declare global {
  interface RootState {
    version: string
    language: Lang | null
    currency: Currency | null
  }

  type RootContext = ActionContext<RootState, RootState>
}
