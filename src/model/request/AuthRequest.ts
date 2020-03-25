/**
 * AuthRequest
 * @author Simpli CLI generator
 */
import {Helper} from '@/helpers'
import {Request, ResponseExclude} from '@simpli/serialized-request'
import {AuthResponse} from '@/model/response/AuthResponse'

/* TODO: review generated class */
export class AuthRequest {
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
    const request = Helper.clone(this)
    request.senha = Helper.encrypt(this.senha ?? '')

    return await Request.post(`/user/auth`, request)
      .name('signIn')
      .delay(1000)
      .as(AuthResponse)
      .getData()
  }
}
