/**
 * Input Schema of RecoverPasswordByMailRequest
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import {InputText} from '@simpli/vue-input'
import {RecoverPasswordByMailRequest} from '@/model/request/RecoverPasswordByMailRequest'

/* TODO: review generated schema */
export class InputRecoverPasswordByMailRequestSchema extends DefaultSchema {
  readonly name = 'InputRecoverPasswordByMailRequest'

  readonly fieldSet: FieldSet<RecoverPasswordByMailRequest> = {
    email: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'email',
        label: this.translateFrom(schema.fieldName),
        validation: 'email',
      },
    }),
  }
}
