/**
 * Input DefaultSchema of User
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import {InputSelect, InputText} from '@simpli/vue-input'
import {User} from '@/model/resource/User'

/* TODO: review generated DefaultSchema */
export class InputUserSchema extends DefaultSchema {
  readonly name = 'InputUser'

  readonly fieldSet: FieldSet<User> = {
    email: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'email',
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required|email',
      },
    }),
    senha: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'password',
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required',
      },
    }),
  }
}
