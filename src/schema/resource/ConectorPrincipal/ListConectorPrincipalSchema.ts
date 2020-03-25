/**
 * List DefaultSchema of ConectorPrincipal
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import {Render} from '@simpli/vue-render-schema'
import {ConectorPrincipal} from '@/model/resource/ConectorPrincipal'

/* TODO: review generated DefaultSchema */
export class ListConectorPrincipalSchema extends DefaultSchema {
  readonly name = 'ListConectorPrincipal'

  readonly fieldSet: FieldSet<ConectorPrincipal> = {
    conectado: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: schema.model.conectado?.$id,
      },
    }),
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
