/**
 * Csv Schema of Tag
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet} from '@simpli/meta-schema'
import {Tag} from '@/model/resource/Tag'

/* TODO: review generated DefaultSchema */
export class CsvTagSchema extends DefaultSchema {
  readonly name = 'CsvTag'

  readonly fieldSet: FieldSet<Tag> = {
    idTagPk: schema => schema.model.idTagPk,
    titulo: schema => schema.model.titulo,
  }
}
