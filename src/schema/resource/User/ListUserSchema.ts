/**
 * List DefaultSchema of User
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import {Render} from '@simpli/vue-render-schema'
import {User} from '@/model/resource/User'

/* TODO: review generated DefaultSchema */
export class ListUserSchema extends DefaultSchema {
  readonly name = 'ListUser'

  readonly fieldSet: FieldSet<User> = {
    idUserPk: (): FieldComponent => ({
      is: Render,
    }),
    email: (): FieldComponent => ({
      is: Render,
    }),
  }
}
