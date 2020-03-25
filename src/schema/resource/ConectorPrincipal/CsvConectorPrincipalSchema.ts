/**
 * Csv DefaultSchema of ConectorPrincipal
 * @author Simpli CLI generator
 */
import {ConectorPrincipal} from '@/model/resource/ConectorPrincipal'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet} from '@simpli/meta-schema'

/* TODO: review generated DefaultSchema */
export class CsvConectorPrincipalSchema extends DefaultSchema {
  readonly name = 'CsvConectorPrincipal'

  readonly fieldSet: FieldSet<ConectorPrincipal> = {
    conectado: schema => schema.model.conectado?.$id ?? null,
    principal: schema => schema.model.principal?.$id ?? null,
    titulo: schema => schema.model.titulo,
  }
}
