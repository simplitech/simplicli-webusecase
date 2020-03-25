/**
 * Csv Schema of Conectado
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet} from '@simpli/meta-schema'
import {Conectado} from '@/model/resource/Conectado'

/* TODO: review generated schema */
export class CsvConectadoSchema extends DefaultSchema {
  readonly name = 'CsvConectado'

  readonly fieldSet: FieldSet<Conectado> = {
    idConectadoPk: schema => schema.model.idConectadoPk,
    titulo: schema => schema.model.titulo,
  }
}
