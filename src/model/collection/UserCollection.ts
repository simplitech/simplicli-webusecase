/**
 * UserCollection
 *
 * @author Simpli CLI generator
 */
import {PageCollection, HttpExclude, Request} from 'simpli-web-sdk'
import {User} from '@/model/resource/User'

/* TODO: review generated class */
@HttpExclude()
export class UserCollection extends PageCollection<User> {
  constructor() {
    super(User)
  }

  queryAsPage() {
    return this.listUser()
  }

  async listUser() {
    return await Request.get(`/user/user`, {params: this.params})
      .name('listUser')
      .as(this)
      .getResponse()
  }

  async listCsvUser() {
    return await Request.get(`/user/user/csv`, {params: this.params})
      .name('listCsvUser')
      .as(this)
      .getResponse()
  }
}
