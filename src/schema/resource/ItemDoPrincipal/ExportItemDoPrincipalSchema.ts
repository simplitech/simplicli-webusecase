/**
 * Export Schema of ItemDoPrincipal
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet} from '@simpli/meta-schema'
import {ItemDoPrincipal} from '@/model/resource/ItemDoPrincipal'

/* TODO: review generated schema */
export class ExportItemDoPrincipalSchema extends DefaultSchema {
  readonly name = 'ExportItemDoPrincipal'

  readonly fieldSet: FieldSet<ItemDoPrincipal> = {
    idItemDoPrincipalPk: schema => schema.model.idItemDoPrincipalPk,
    principal: schema => schema.model.principal?.$tag ?? null,
    titulo: schema => schema.model.titulo,
  }
}
