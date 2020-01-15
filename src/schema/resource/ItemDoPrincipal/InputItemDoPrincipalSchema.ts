/**
 * Input Schema of ItemDoPrincipal
 * @author Simpli CLI generator
 */
import {Schema, FieldSet, FieldComponent, Component} from 'simpli-web-sdk'
import {ItemDoPrincipal} from '@/model/resource/ItemDoPrincipal'
import {PrincipalCollection} from '@/model/collection/PrincipalCollection'

/* TODO: review generated schema */
export class InputItemDoPrincipalSchema extends Schema {
  collectionPrincipal = new PrincipalCollection().noPagination()

  readonly name = 'InputItemDoPrincipal'

  readonly fieldSet: FieldSet<ItemDoPrincipal> = {
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
