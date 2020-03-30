/**
 * List DefaultSchema of ItemDoPrincipal
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import {Render} from '@simpli/vue-render-schema'
import {ItemDoPrincipal} from '@/model/resource/ItemDoPrincipal'

/* TODO: review generated DefaultSchema */
export class ListItemDoPrincipalSchema extends DefaultSchema {
  readonly name = 'ListItemDoPrincipal'

  readonly fieldSet: FieldSet<ItemDoPrincipal> = {
    idItemDoPrincipalPk: (): FieldComponent => ({
      is: Render,
    }),
    principal: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: schema.model.principal?.$id,
      },
    }),
    titulo: (): FieldComponent => ({
      is: Render,
    }),
  }
}
