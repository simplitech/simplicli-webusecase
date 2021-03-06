/**
 * Export Schema of GrupoDoPrincipal
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet} from '@simpli/meta-schema'
import {GrupoDoPrincipal} from '@/model/resource/GrupoDoPrincipal'

/* TODO: review generated schema */
export class ExportGrupoDoPrincipalSchema extends DefaultSchema {
  readonly name = 'ExportGrupoDoPrincipal'

  readonly fieldSet: FieldSet<GrupoDoPrincipal> = {
    idGrupoDoPrincipalPk: schema => schema.model.idGrupoDoPrincipalPk,
    titulo: schema => schema.model.titulo,
  }
}
