/**
 * ResetPasswordRequest
 * @author Simpli CLI generator
 */
import {Helper} from '@/helpers'
import {Request} from '@simpli/serialized-request'
import {ResponseExclude} from '@simpli/serialized-request'

/* TODO: review generated class */
export class ResetPasswordRequest {
  hash: string | null = null

  @ResponseExclude()
  newPassword: string | null = null

  @ResponseExclude()
  confirmPassword: string | null = null

  /**
   * Recovers the password with a given hash
   */
  async resetPassword() {
    const request = Helper.clone(this)
    request.newPassword = Helper.encrypt(this.newPassword ?? '')
    request.confirmPassword = Helper.encrypt(this.confirmPassword ?? '')

    return await Request.post(`/user/auth/password`, request)
      .name('resetPassword')
      .asString()
      .getData()
  }
}
