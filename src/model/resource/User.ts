/**
 * User
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {
  Request,
  ResponseExclude,
  ResponseSerialize,
} from '@simpli/serialized-request'
import {IResource} from '@simpli/resource-collection/dist/types/IResource'
import {PermissionGroup} from '@/app/PermissionGroup'
import {UserCollection} from '@/model/collection/UserCollection'
import {Role} from '@/model/resource/Role'
import {Permission} from '@/model/resource/Permission'

/* TODO: review generated class */
export class User extends PermissionGroup implements IResource {
  idUserPk: number = 0

  @ResponseSerialize(Role)
  roles: Role[] | null = null

  @ResponseSerialize(Permission)
  permissions: Permission[] | null = null

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
    return String(this.email)
  }

  get roleSlugs() {
    return this.roles?.map(it => it.slug ?? '')?.filter(it => it) ?? []
  }

  /**
   * Gets a instance of a given ID of User
   */
  async getUser(id: number) {
    return await Request.get(`/user/${id}`)
      .name('getUser')
      .as(this)
      .getData()
  }

  /**
   * Lists the instances of User
   */
  static async listUser(params: any) {
    return await Request.get(`/user`, {params})
      .name('listUser')
      .as(UserCollection)
      .getData()
  }

  /**
   * Persists a new instance of User. Use ID = 0 to create a new one,
   * or ID > 0 to update a current one
   */
  async persistUser() {
    return await Request.post(`/user`, this)
      .name('persistUser')
      .asNumber()
      .getData()
  }

  /**
   * Lists the instances of User to export as a file
   */
  static async listExportUser(params: any) {
    return await Request.get(`/user/export`, {params})
      .name('listExportUser')
      .as(UserCollection)
      .getData()
  }
}
