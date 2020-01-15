/**
 * Csv Schema of Conectado
 * @author Simpli CLI generator
 */
import {Helper, Schema, FieldSet} from 'simpli-web-sdk'
import {Conectado} from '@/model/resource/Conectado'

/* TODO: review generated schema */
export class CsvConectadoSchema extends Schema {
  readonly name = 'CsvConectado'

  readonly fieldSet: FieldSet<Conectado> = {
    idConectadoPk: schema => schema.model.idConectadoPk,
    titulo: schema => schema.model.titulo,
  }
}
