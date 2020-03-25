/**
 * Input Schema of ResetPasswordRequest
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import {InputText} from '@simpli/vue-input'
import {ResetPasswordRequest} from '@/model/request/ResetPasswordRequest'

/* TODO: review generated schema */
export class InputResetPasswordRequestSchema extends DefaultSchema {
  readonly name = 'InputResetPasswordRequest'

  readonly fieldSet: FieldSet<ResetPasswordRequest> = {
    newPassword: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'password',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    confirmPassword: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'password',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    hash: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'text',
        maxlength: 255,
        label: this.translateFrom(schema.fieldName),
      },
    }),
  }
}
