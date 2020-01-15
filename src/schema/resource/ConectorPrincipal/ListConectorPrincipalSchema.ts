/**
 * List Schema of ConectorPrincipal
 * @author Simpli CLI generator
 */
import {
  Helper,
  Schema,
  FieldSet,
  FieldComponent,
  Component,
} from 'simpli-web-sdk'
import {ConectorPrincipal} from '@/model/resource/ConectorPrincipal'

/* TODO: review generated schema */
export class ListConectorPrincipalSchema extends Schema {
  readonly name = 'ListConectorPrincipal'

  readonly fieldSet: FieldSet<ConectorPrincipal> = {
    conectado: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: schema.model.conectado?.$id,
      },
    }),
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
