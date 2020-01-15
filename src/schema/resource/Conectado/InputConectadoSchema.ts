/**
 * Input Schema of Conectado
 * @author Simpli CLI generator
 */
import {Schema, FieldSet, FieldComponent, Component} from 'simpli-web-sdk'
import {Conectado} from '@/model/resource/Conectado'

/* TODO: review generated schema */
export class InputConectadoSchema extends Schema {
  readonly name = 'InputConectado'

  readonly fieldSet: FieldSet<Conectado> = {
    titulo: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'text',
        maxlength: 45,
        label: this.translateFrom(schema.fieldName),
      },
    }),
  }
}
