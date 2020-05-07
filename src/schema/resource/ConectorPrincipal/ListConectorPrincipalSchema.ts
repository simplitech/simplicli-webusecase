/**
 * List Schema of ConectorPrincipal
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import * as Component from '@simpli/vue-render-schema'
import {ConectorPrincipal} from '@/model/resource/ConectorPrincipal'

/* TODO: review generated schema */
export class ListConectorPrincipalSchema extends DefaultSchema {
  readonly name = 'ListConectorPrincipal'

  readonly fieldSet: FieldSet<ConectorPrincipal> = {
    conectado: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: schema.model.conectado?.$tag,
      },
    }),
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
