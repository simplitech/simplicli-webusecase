/**
 * Input DefaultSchema of ItemDoPrincipal
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import {InputSelect, InputText} from '@simpli/vue-input'
import {ItemDoPrincipal} from '@/model/resource/ItemDoPrincipal'
import {PrincipalCollection} from '@/model/collection/PrincipalCollection'

/* TODO: review generated DefaultSchema */
export class InputItemDoPrincipalSchema extends DefaultSchema {
  collectionPrincipal = new PrincipalCollection().noPagination()

  readonly name = 'InputItemDoPrincipal'

  readonly fieldSet: FieldSet<ItemDoPrincipal> = {
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
