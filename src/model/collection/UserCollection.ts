/**
 * UserCollection
 *
 * @author Simpli CLI generator
 */
import {HttpExclude} from '@simpli/serialized-request'
import {PageCollection} from '@simpli/resource-collection'
import {Request} from '@simpli/serialized-request'
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

  async listExportUser() {
    return await Request.get(`/user/user/export`, {params: this.params})
      .name('listExportUser')
      .as(this)
      .getResponse()
  }
}
