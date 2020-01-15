/**
 * Csv Schema of ConectorPrincipal
 * @author Simpli CLI generator
 */
import {Helper, Schema, FieldSet} from 'simpli-web-sdk'
import {ConectorPrincipal} from '@/model/resource/ConectorPrincipal'

/* TODO: review generated schema */
export class CsvConectorPrincipalSchema extends Schema {
  readonly name = 'CsvConectorPrincipal'

  readonly fieldSet: FieldSet<ConectorPrincipal> = {
    conectado: schema => schema.model.conectado?.$id ?? null,
    principal: schema => schema.model.principal?.$id ?? null,
    titulo: schema => schema.model.titulo,
  }
}
