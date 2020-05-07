/**
 * List Schema of Tag
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import * as Component from '@simpli/vue-render-schema'
import {Tag} from '@/model/resource/Tag'

/* TODO: review generated schema */
export class ListTagSchema extends DefaultSchema {
  readonly name = 'ListTag'

  readonly fieldSet: FieldSet<Tag> = {
    idTagPk: (): FieldComponent => ({
      is: Component.Render,
    }),
    titulo: (): FieldComponent => ({
      is: Component.Render,
    }),
  }
}
