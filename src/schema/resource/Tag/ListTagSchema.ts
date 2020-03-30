/**
 * List DefaultSchema of Tag
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import {Render} from '@simpli/vue-render-schema'
import {Tag} from '@/model/resource/Tag'

/* TODO: review generated DefaultSchema */
export class ListTagSchema extends DefaultSchema {
  readonly name = 'ListTag'

  readonly fieldSet: FieldSet<Tag> = {
    idTagPk: (): FieldComponent => ({
      is: Render,
    }),
    titulo: (): FieldComponent => ({
      is: Render,
    }),
  }
}
