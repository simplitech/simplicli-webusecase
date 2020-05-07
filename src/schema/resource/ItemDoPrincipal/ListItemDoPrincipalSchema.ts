/**
 * List Schema of ItemDoPrincipal
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import * as Component from '@simpli/vue-render-schema'
import {ItemDoPrincipal} from '@/model/resource/ItemDoPrincipal'

/* TODO: review generated schema */
export class ListItemDoPrincipalSchema extends DefaultSchema {
  readonly name = 'ListItemDoPrincipal'

  readonly fieldSet: FieldSet<ItemDoPrincipal> = {
    idItemDoPrincipalPk: (): FieldComponent => ({
      is: Component.Render,
    }),
    principal: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: schema.model.principal?.$tag,
      },
    }),
    titulo: (): FieldComponent => ({
      is: Component.Render,
    }),
  }
}
