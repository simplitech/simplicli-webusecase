/**
 * Csv Schema of User
 * @author Simpli CLI generator
 */
import {Helper, Schema, FieldSet} from 'simpli-web-sdk'
import {User} from '@/model/resource/User'

/* TODO: review generated schema */
export class CsvUserSchema extends Schema {
  readonly name = 'CsvUser'

  readonly fieldSet: FieldSet<User> = {
    idUserPk: schema => schema.model.idUserPk,
    email: schema => schema.model.email,
  }
}
