/**
 * Input Schema of ConectorPrincipal
 * @author Simpli CLI generator
 */
import {Schema, FieldSet, FieldComponent, Component} from 'simpli-web-sdk'
import {ConectorPrincipal} from '@/model/resource/ConectorPrincipal'
import {ConectadoCollection} from '@/model/collection/ConectadoCollection'
import {PrincipalCollection} from '@/model/collection/PrincipalCollection'

/* TODO: review generated schema */
export class InputConectorPrincipalSchema extends Schema {
  collectionConectado = new ConectadoCollection().noPagination()
  collectionPrincipal = new PrincipalCollection().noPagination()

  readonly name = 'InputConectorPrincipal'

  readonly fieldSet: FieldSet<ConectorPrincipal> = {
    conectado: (schema): FieldComponent => ({
      is: Component.InputSelect,
      bind: {
        label: this.translateFrom(schema.fieldName),
        items: this.collectionConectado.all(),
      },
    }),
    principal: (schema): FieldComponent => ({
      is: Component.InputSelect,
      bind: {
        label: this.translateFrom(schema.fieldName),
        items: this.collectionPrincipal.all(),
      },
    }),
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
