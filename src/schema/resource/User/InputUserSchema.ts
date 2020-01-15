/**
 * Input Schema of User
 * @author Simpli CLI generator
 */
import {Schema, FieldSet, FieldComponent, Component} from 'simpli-web-sdk'
import {User} from '@/model/resource/User'

/* TODO: review generated schema */
export class InputUserSchema extends Schema {
  readonly name = 'InputUser'

  readonly fieldSet: FieldSet<User> = {
    email: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'email',
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required|email',
      },
    }),
    senha: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'password',
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required',
      },
    }),
  }
}
