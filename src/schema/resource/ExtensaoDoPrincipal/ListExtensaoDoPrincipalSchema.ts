/**
 * List Schema of ExtensaoDoPrincipal
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import * as Component from '@simpli/vue-render-schema'
import {ExtensaoDoPrincipal} from '@/model/resource/ExtensaoDoPrincipal'

/* TODO: review generated schema */
export class ListExtensaoDoPrincipalSchema extends DefaultSchema {
  readonly name = 'ListExtensaoDoPrincipal'

  readonly fieldSet: FieldSet<ExtensaoDoPrincipal> = {
    principal: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: schema.model.principal?.$tag,
      },
    }),
    titulo: (): FieldComponent => ({
      is: Component.Render,
    }),
  }
}
