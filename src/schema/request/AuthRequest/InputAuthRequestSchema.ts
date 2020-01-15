/**
 * Input Schema of AuthRequest
 * @author Simpli CLI generator
 */
import {Schema, FieldSet, FieldComponent, Component} from 'simpli-web-sdk'
import {AuthRequest} from '@/model/request/AuthRequest'

/* TODO: review generated schema */
export class InputAuthRequestSchema extends Schema {
  readonly name = 'InputAuthRequest'

  readonly fieldSet: FieldSet<AuthRequest> = {
    email: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'email',
        label: this.translateFrom(schema.fieldName),
        validation: 'email',
      },
    }),
    senha: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'password',
        label: this.translateFrom(schema.fieldName),
      },
    }),
  }
}
