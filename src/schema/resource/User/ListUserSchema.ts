/**
 * List Schema of User
 * @author Simpli CLI generator
 */
import {
  Helper,
  Schema,
  FieldSet,
  FieldComponent,
  Component,
} from 'simpli-web-sdk'
import {User} from '@/model/resource/User'

/* TODO: review generated schema */
export class ListUserSchema extends Schema {
  readonly name = 'ListUser'

  readonly fieldSet: FieldSet<User> = {
    idUserPk: (): FieldComponent => ({
      is: Component.Render,
    }),
    email: (): FieldComponent => ({
      is: Component.Render,
    }),
  }
}
