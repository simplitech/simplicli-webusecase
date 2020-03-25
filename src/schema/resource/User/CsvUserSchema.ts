/**
 * Csv DefaultSchema of User
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet} from '@simpli/meta-schema'
import {User} from '@/model/resource/User'

/* TODO: review generated DefaultSchema */
export class CsvUserSchema extends DefaultSchema {
  readonly name = 'CsvUser'

  readonly fieldSet: FieldSet<User> = {
    idUserPk: schema => schema.model.idUserPk,
    email: schema => schema.model.email,
  }
}
