/**
 * Input Schema of RecoverPasswordByMailRequest
 * @author Simpli CLI generator
 */
import {Schema, FieldSet, FieldComponent, Component} from 'simpli-web-sdk'
import {RecoverPasswordByMailRequest} from '@/model/request/RecoverPasswordByMailRequest'

/* TODO: review generated schema */
export class InputRecoverPasswordByMailRequestSchema extends Schema {
  readonly name = 'InputRecoverPasswordByMailRequest'

  readonly fieldSet: FieldSet<RecoverPasswordByMailRequest> = {
    email: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'email',
        label: this.translateFrom(schema.fieldName),
        validation: 'email',
      },
    }),
  }
}
