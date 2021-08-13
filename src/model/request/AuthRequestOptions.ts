import {ResponseSerialize} from '@simpli/serialized-request'
import {PermissionGroup} from '@/app/PermissionGroup'

export class AuthRequestOptions {
  @ResponseSerialize(PermissionGroup)
  permission: PermissionGroup | null = null

  expirationDate: string | null = null

  isAnonymous: boolean | null = null

  isDirectAuth: boolean | null = null
}
