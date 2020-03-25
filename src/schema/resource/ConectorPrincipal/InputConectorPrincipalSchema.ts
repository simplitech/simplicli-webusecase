/**
 * Input DefaultSchema of ConectorPrincipal
 * @author Simpli CLI generator
 */
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import {InputSelect, InputText} from '@simpli/vue-input'
import {ConectorPrincipal} from '@/model/resource/ConectorPrincipal'
import {ConectadoCollection} from '@/model/collection/ConectadoCollection'
import {PrincipalCollection} from '@/model/collection/PrincipalCollection'
import {DefaultSchema} from '@/schema/DefaultSchema'

/* TODO: review generated DefaultSchema */
export class InputConectorPrincipalSchema extends DefaultSchema {
  collectionConectado = new ConectadoCollection().noPagination()
  collectionPrincipal = new PrincipalCollection().noPagination()

  readonly name = 'InputConectorPrincipal'

  readonly fieldSet: FieldSet<ConectorPrincipal> = {
    conectado: (schema): FieldComponent => ({
      is: InputSelect,
      bind: {
        label: this.translateFrom(schema.fieldName),
        items: this.collectionConectado.items,
      },
    }),
    principal: (schema): FieldComponent => ({
      is: InputSelect,
      bind: {
        label: this.translateFrom(schema.fieldName),
        items: this.collectionPrincipal.items,
      },
    }),
    titulo: (schema): FieldComponent => ({
      is: InputText,
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
