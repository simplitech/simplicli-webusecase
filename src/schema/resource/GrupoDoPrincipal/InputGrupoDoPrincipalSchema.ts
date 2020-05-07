/**
 * Input Schema of GrupoDoPrincipal
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import * as Component from '@simpli/vue-input'
import {GrupoDoPrincipal} from '@/model/resource/GrupoDoPrincipal'

/* TODO: review generated schema */
export class InputGrupoDoPrincipalSchema extends DefaultSchema {
  readonly name = 'InputGrupoDoPrincipal'

  readonly fieldSet: FieldSet<GrupoDoPrincipal> = {
    titulo: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'text',
        maxlength: 45,
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required',
      },
    }),
  }
}
