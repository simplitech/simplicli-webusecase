/**
 * Csv Schema of GrupoDoPrincipal
 * @author Simpli CLI generator
 */
import {Helper, Schema, FieldSet} from 'simpli-web-sdk'
import {GrupoDoPrincipal} from '@/model/resource/GrupoDoPrincipal'

/* TODO: review generated schema */
export class CsvGrupoDoPrincipalSchema extends Schema {
  readonly name = 'CsvGrupoDoPrincipal'

  readonly fieldSet: FieldSet<GrupoDoPrincipal> = {
    idGrupoDoPrincipalPk: schema => schema.model.idGrupoDoPrincipalPk,
    titulo: schema => schema.model.titulo,
  }
}
