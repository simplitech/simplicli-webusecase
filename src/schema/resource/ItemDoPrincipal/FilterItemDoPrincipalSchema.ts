/**
 * Filter Schema of ItemDoPrincipal
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import * as Component from '@simpli/vue-input'
import {IItemDoPrincipalCollectionResourcesHolder} from '@/model/collection/ItemDoPrincipalCollection'
import {ItemDoPrincipal} from '@/model/resource/ItemDoPrincipal'
import {PrincipalCollection} from '@/model/collection/PrincipalCollection'

/* TODO: review generated schema */
export class FilterItemDoPrincipalSchema extends DefaultSchema
  implements IItemDoPrincipalCollectionResourcesHolder {
  collectionPrincipal = new PrincipalCollection().noPagination()

  readonly name = 'FilterItemDoPrincipal'

  readonly fieldSet: FieldSet<ItemDoPrincipal> = {
    principal: (schema): FieldComponent => ({
      is: Component.InputSelect,
      bind: {
        items: this.collectionPrincipal.items,
        multiple: true,
        closeOnSelect: false,
        preserveSearch: true,
        label: this.translateFrom(schema.fieldName),
        trackBy: '$id',
        preselectFirst: true,
      },
    }),
  }
}
