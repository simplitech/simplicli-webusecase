/**
 * User
 * @author Simpli CLI generator
 */
import {UserCollection} from '@/model/collection/UserCollection'
import {ResponseExclude, Request} from '@simpli/serialized-request'
import {IResource} from '@simpli/resource-collection'

/* TODO: review generated class */
export class User implements IResource {
  idUserPk: number = 0

  email: string | null = null

  @ResponseExclude()
  senha: string | null = null

  get $id() {
    return this.idUserPk
  }
  set $id(val) {
    this.idUserPk = val
  }

  get $tag() {
    return this.email ?? '-'
  }
  set $tag(val) {
    this.email = val
  }

  /**
   * Lists the instances of User
   */
  static async listUser(params: any) {
    return await Request.get(`/user/user`, {params})
      .name('listUser')
      .as(UserCollection)
      .getData()
  }

  /**
   * Persists a new instance of User. Use ID = 0 to create a new one,
   * or ID > 0 to update a current one
   */
  async persistUser() {
    return await Request.post(`/user/user`, this)
      .name('persistUser')
      .asNumber()
      .getData()
  }

  /**
   * Gets a instance of a given ID of User
   */
  async getUser(id: number) {
    return await Request.get(`/user/user/${id}`)
      .name('getUser')
      .as(this)
      .getData()
  }

  /**
   * Lists the instances of User to use it in a XLSX file
   */
  static async listExportUser(params: any) {
    return await Request.get(`/user/user/export`, {params})
      .name('listExportUser')
      .as(UserCollection)
      .getData()
  }
}
