/**
 * RecoverPasswordByMailRequest
 * @author Simpli CLI generator
 */
import {$, Helper, Model, Request} from 'simpli-web-sdk'

/* TODO: review generated class */
export class RecoverPasswordByMailRequest extends Model {
  email: string | null = null

  /**
   * Sends an email requesting to change the password
   */
  async recoverPasswordByMail() {
    return await Request.put(`/user/auth/password`, this)
      .name('recoverPasswordByMail')
      .asNumber()
      .getData()
  }
}
