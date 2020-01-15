/**
 * ResetPasswordRequest
 * @author Simpli CLI generator
 */
import {$, Helper, Model, Request} from 'simpli-web-sdk'
import {ResponseExclude} from 'simpli-web-sdk'

/* TODO: review generated class */
export class ResetPasswordRequest extends Model {
  hash: string | null = null

  @ResponseExclude()
  newPassword: string | null = null

  @ResponseExclude()
  confirmPassword: string | null = null

  /**
   * Recovers the password with a given hash
   */
  async resetPassword() {
    const request = this.$clone()
    request.newPassword = Helper.encrypt(this.newPassword ?? '')
    request.confirmPassword = Helper.encrypt(this.confirmPassword ?? '')

    return await Request.post(`/user/auth/password`, request)
      .name('resetPassword')
      .asString()
      .getData()
  }
}
