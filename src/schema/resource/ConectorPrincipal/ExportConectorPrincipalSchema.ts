/**
 * Export Schema of ConectorPrincipal
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet} from '@simpli/meta-schema'
import {ConectorPrincipal} from '@/model/resource/ConectorPrincipal'

/* TODO: review generated schema */
export class ExportConectorPrincipalSchema extends DefaultSchema {
  readonly name = 'ExportConectorPrincipal'

  readonly fieldSet: FieldSet<ConectorPrincipal> = {
    conectado: schema => schema.model.conectado?.$tag ?? null,
    principal: schema => schema.model.principal?.$tag ?? null,
    titulo: schema => schema.model.titulo,
  }
}
