import {Currency, Lang} from 'simpli-web-sdk'
import {User} from '@/model/resource/User'

/**
 * Root
 */
export interface RootState {
  version: string
  language: Lang
  currency: Currency
}

/**
 * Auth Module
 */
export interface AuthState {
  token: string | null | null
  user: User | null
  cachePath: string | null
}
