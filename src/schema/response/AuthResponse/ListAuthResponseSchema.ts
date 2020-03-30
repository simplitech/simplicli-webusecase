/**
 * List Schema of AuthResponse
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import {Render} from '@simpli/vue-render-schema'
import {AuthResponse} from '@/model/response/AuthResponse'

/* TODO: review generated schema */
export class ListAuthResponseSchema extends DefaultSchema {
  readonly name = 'ListAuthResponse'

  readonly fieldSet: FieldSet<AuthResponse> = {
    token: (): FieldComponent => ({
      is: Render,
    }),
    user: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: schema.model.user?.$id,
      },
    }),
  }
}
