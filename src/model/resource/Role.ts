/**
 * Role
 * @author Simpli CLI generator
 */

/* TODO: review generated class */
import {ResponseSerialize} from '@simpli/serialized-request'
import {PermissionGroup} from '@/app/PermissionGroup'
import {User} from '@/model/resource/User'
import {Permission} from '@/model/resource/Permission'

export class Role extends PermissionGroup {
  static readonly GUEST = 'guest'
  static readonly VIEWER = 'viewer'
  static readonly MANAGER = 'manager'
  static readonly ADMIN = 'admin'

  idRolePk: number = 0

  @ResponseSerialize(Permission)
  permissions: Permission[] | null = null

  @ResponseSerialize(User)
  users: User[] | null = null

  slug: string | null = null
  name: string | null = null
  description: string | null = null
  level: number | null = null
  active: boolean | null = null

  get $id() {
    return this.idRolePk
  }
  set $id(val) {
    this.idRolePk = val
  }
  get $tag() {
    return String(this.name)
  }
}
