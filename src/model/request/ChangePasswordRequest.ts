/**
 * ChangePasswordRequest
 * @author Simpli CLI generator
 */
import {Request} from '@simpli/serialized-request'
import {Helper} from '@/helpers'
import {ResponseExclude} from '@simpli/serialized-request'

/* TODO: review generated class */
export class ChangePasswordRequest {
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
    const request = Helper.clone(this)
    request.currentPassword = Helper.encrypt(this.currentPassword ?? '')
    request.newPassword = Helper.encrypt(this.newPassword ?? '')
    request.confirmPassword = Helper.encrypt(this.confirmPassword ?? '')

    return await Request.post(`/user/auth/me/password`, request)
      .name('changePassword')
      .asNumber()
      .getData()
  }
}
