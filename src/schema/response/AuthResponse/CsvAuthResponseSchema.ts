/**
 * Csv Schema of AuthResponse
 * @author Simpli CLI generator
 */
import {Helper, Schema, FieldSet} from 'simpli-web-sdk'
import {AuthResponse} from '@/model/response/AuthResponse'

/* TODO: review generated schema */
export class CsvAuthResponseSchema extends Schema {
  readonly name = 'CsvAuthResponse'

  readonly fieldSet: FieldSet<AuthResponse> = {
    token: schema => schema.model.token,
    user: schema => schema.model.user?.$id ?? null,
  }
}
