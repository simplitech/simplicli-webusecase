/**
 * Csv Schema of Tag
 * @author Simpli CLI generator
 */
import {Helper, Schema, FieldSet} from 'simpli-web-sdk'
import {Tag} from '@/model/resource/Tag'

/* TODO: review generated schema */
export class CsvTagSchema extends Schema {
  readonly name = 'CsvTag'

  readonly fieldSet: FieldSet<Tag> = {
    idTagPk: schema => schema.model.idTagPk,
    titulo: schema => schema.model.titulo,
  }
}
