/**
 * Input Schema of Conectado
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import {InputText} from '@simpli/vue-input'
import {Conectado} from '@/model/resource/Conectado'

/* TODO: review generated schema */
export class InputConectadoSchema extends DefaultSchema {
  readonly name = 'InputConectado'

  readonly fieldSet: FieldSet<Conectado> = {
    titulo: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'text',
        maxlength: 45,
        label: this.translateFrom(schema.fieldName),
      },
    }),
  }
}
