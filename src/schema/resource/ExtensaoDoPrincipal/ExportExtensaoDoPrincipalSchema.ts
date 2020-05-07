/**
 * Export Schema of ExtensaoDoPrincipal
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet} from '@simpli/meta-schema'
import {ExtensaoDoPrincipal} from '@/model/resource/ExtensaoDoPrincipal'

/* TODO: review generated schema */
export class ExportExtensaoDoPrincipalSchema extends DefaultSchema {
  readonly name = 'ExportExtensaoDoPrincipal'

  readonly fieldSet: FieldSet<ExtensaoDoPrincipal> = {
    principal: schema => schema.model.principal?.$tag ?? null,
    titulo: schema => schema.model.titulo,
  }
}
