/**
 * ChangePasswordRequest
 * @author Simpli CLI generator
 */
import {$, Helper, Model, Request} from 'simpli-web-sdk'
import {ResponseExclude} from 'simpli-web-sdk'

/* TODO: review generated class */
export class ChangePasswordRequest extends Model {
  @ResponseExclude()
  currentPassword: string | null = null

  @ResponseExclude()
  newPassword: string | null = null

  @ResponseExclude()
  confirmPassword: string | null = null

  /**
   * Changes the password with a given new password
   */
  async changePassword() {
    const request = this.$clone()
    request.currentPassword = Helper.encrypt(this.currentPassword ?? '')
    request.newPassword = Helper.encrypt(this.newPassword ?? '')
    request.confirmPassword = Helper.encrypt(this.confirmPassword ?? '')

    return await Request.post(`/user/auth/me/password`, request)
      .name('changePassword')
      .asNumber()
      .getData()
  }
}
