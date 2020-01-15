/**
 * AuthRequest
 * @author Simpli CLI generator
 */
import {$, Helper, Model, Request} from 'simpli-web-sdk'
import {ResponseExclude} from 'simpli-web-sdk'
import {AuthResponse} from '@/model/response/AuthResponse'

/* TODO: review generated class */
export class AuthRequest extends Model {
  email: string | null = null

  @ResponseExclude()
  senha: string | null = null

  /**
   * Gets the user authentication
   */
  static async authenticate() {
    return await Request.get(`/user/auth`)
      .name('authenticate')
      .as(AuthResponse)
      .getData()
  }

  /**
   * Submits the user authentication
   */
  async signIn() {
    const request = this.$clone()
    request.senha = Helper.encrypt(this.senha ?? '')

    return await Request.post(`/user/auth`, request)
      .name('signIn')
      .delay(1000)
      .as(AuthResponse)
      .getData()
  }
}
