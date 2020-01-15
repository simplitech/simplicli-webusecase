/**
 * Input Schema of ChangePasswordRequest
 * @author Simpli CLI generator
 */
import {Schema, FieldSet, FieldComponent, Component} from 'simpli-web-sdk'
import {ChangePasswordRequest} from '@/model/request/ChangePasswordRequest'

/* TODO: review generated schema */
export class InputChangePasswordRequestSchema extends Schema {
  readonly name = 'InputChangePasswordRequest'

  readonly fieldSet: FieldSet<ChangePasswordRequest> = {
    currentPassword: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'password',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    newPassword: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'password',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    confirmPassword: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'password',
        label: this.translateFrom(schema.fieldName),
      },
    }),
  }
}
