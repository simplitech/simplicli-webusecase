/**
 * List Schema of AuthResponse
 * @author Simpli CLI generator
 */
import {
  Helper,
  Schema,
  FieldSet,
  FieldComponent,
  Component,
} from 'simpli-web-sdk'
import {AuthResponse} from '@/model/response/AuthResponse'

/* TODO: review generated schema */
export class ListAuthResponseSchema extends Schema {
  readonly name = 'ListAuthResponse'

  readonly fieldSet: FieldSet<AuthResponse> = {
    token: (): FieldComponent => ({
      is: Component.Render,
    }),
    user: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: schema.model.user?.$id,
      },
    }),
  }
}
