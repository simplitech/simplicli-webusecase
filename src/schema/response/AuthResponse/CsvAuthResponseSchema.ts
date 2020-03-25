/**
 * Csv Schema of AuthResponse
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet} from '@simpli/meta-schema'
import {AuthResponse} from '@/model/response/AuthResponse'

/* TODO: review generated schema */
export class CsvAuthResponseSchema extends DefaultSchema {
  readonly name = 'CsvAuthResponse'

  readonly fieldSet: FieldSet<AuthResponse> = {
    token: schema => schema.model.token,
    user: schema => schema.model.user?.$id ?? null,
  }
}
