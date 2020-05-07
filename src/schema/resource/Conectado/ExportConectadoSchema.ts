/**
 * Export Schema of Conectado
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet} from '@simpli/meta-schema'
import {Conectado} from '@/model/resource/Conectado'

/* TODO: review generated schema */
export class ExportConectadoSchema extends DefaultSchema {
  readonly name = 'ExportConectado'

  readonly fieldSet: FieldSet<Conectado> = {
    idConectadoPk: schema => schema.model.idConectadoPk,
    titulo: schema => schema.model.titulo,
  }
}
