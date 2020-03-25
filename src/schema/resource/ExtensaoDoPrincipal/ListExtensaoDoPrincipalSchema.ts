/**
 * List DefaultSchema of ExtensaoDoPrincipal
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import {Render} from '@simpli/vue-render-schema'
import {ExtensaoDoPrincipal} from '@/model/resource/ExtensaoDoPrincipal'

/* TODO: review generated DefaultSchema */
export class ListExtensaoDoPrincipalSchema extends DefaultSchema {
  readonly name = 'ListExtensaoDoPrincipal'

  readonly fieldSet: FieldSet<ExtensaoDoPrincipal> = {
    principal: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: schema.model.principal?.$id,
      },
    }),
    titulo: (): FieldComponent => ({
      is: Render,
    }),
  }
}
