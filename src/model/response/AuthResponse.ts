/**
 * AuthResponse
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {ResponseSerialize} from '@simpli/serialized-request'
import {User} from '@/model/resource/User'
import {AuthRequestOptions} from '@/model/request/AuthRequestOptions'

/* TODO: review generated class */
export class AuthResponse {
  @ResponseSerialize(User)
  user: User | null = null

  token: string | null = null

  @ResponseSerialize(AuthRequestOptions)
  requestOptions: AuthRequestOptions | null = null
}
