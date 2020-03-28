/**
 * Export DefaultSchema of User
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet} from '@simpli/meta-schema'
import {User} from '@/model/resource/User'

/* TODO: review generated DefaultSchema */
export class ExportUserSchema extends DefaultSchema {
  readonly name = 'ExportUser'

  readonly fieldSet: FieldSet<User> = {
    idUserPk: schema => schema.model.idUserPk,
    email: schema => schema.model.email,
  }
}
