/**
 * AuthResponse
 * @author Simpli CLI generator
 */
import {$, Helper, Model, Request} from 'simpli-web-sdk'
import {ResponseSerialize} from 'simpli-web-sdk'
import {User} from '@/model/resource/User'

/* TODO: review generated class */
export class AuthResponse extends Model {
  @ResponseSerialize(User)
  user: User | null = null

  token: string | null = null
}
