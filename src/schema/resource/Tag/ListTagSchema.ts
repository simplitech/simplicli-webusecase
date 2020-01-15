/**
 * List Schema of Tag
 * @author Simpli CLI generator
 */
import {
  Helper,
  Schema,
  FieldSet,
  FieldComponent,
  Component,
} from 'simpli-web-sdk'
import {Tag} from '@/model/resource/Tag'

/* TODO: review generated schema */
export class ListTagSchema extends Schema {
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
