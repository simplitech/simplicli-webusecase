/**
 * List Schema of ExtensaoDoPrincipal
 * @author Simpli CLI generator
 */
import {
  Helper,
  Schema,
  FieldSet,
  FieldComponent,
  Component,
} from 'simpli-web-sdk'
import {ExtensaoDoPrincipal} from '@/model/resource/ExtensaoDoPrincipal'

/* TODO: review generated schema */
export class ListExtensaoDoPrincipalSchema extends Schema {
  readonly name = 'ListExtensaoDoPrincipal'

  readonly fieldSet: FieldSet<ExtensaoDoPrincipal> = {
    principal: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: schema.model.principal?.$id,
      },
    }),
    titulo: (): FieldComponent => ({
      is: Component.Render,
    }),
  }
}
