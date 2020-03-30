/**
 * Input Schema of AuthRequest
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import {InputText} from '@simpli/vue-input'
import {AuthRequest} from '@/model/request/AuthRequest'

/* TODO: review generated schema */
export class InputAuthRequestSchema extends DefaultSchema {
  readonly name = 'InputAuthRequest'

  readonly fieldSet: FieldSet<AuthRequest> = {
    email: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'email',
        label: this.translateFrom(schema.fieldName),
        validation: 'email',
      },
    }),
    senha: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'password',
        label: this.translateFrom(schema.fieldName),
      },
    }),
  }
}
