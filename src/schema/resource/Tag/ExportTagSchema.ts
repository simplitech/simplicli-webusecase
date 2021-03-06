/**
 * Export Schema of Tag
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet} from '@simpli/meta-schema'
import {Tag} from '@/model/resource/Tag'

/* TODO: review generated schema */
export class ExportTagSchema extends DefaultSchema {
  readonly name = 'ExportTag'

  readonly fieldSet: FieldSet<Tag> = {
    idTagPk: schema => schema.model.idTagPk,
    titulo: schema => schema.model.titulo,
  }
}
