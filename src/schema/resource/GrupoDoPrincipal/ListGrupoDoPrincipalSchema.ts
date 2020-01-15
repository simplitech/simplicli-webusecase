/**
 * List Schema of GrupoDoPrincipal
 * @author Simpli CLI generator
 */
import {
  Helper,
  Schema,
  FieldSet,
  FieldComponent,
  Component,
} from 'simpli-web-sdk'
import {GrupoDoPrincipal} from '@/model/resource/GrupoDoPrincipal'

/* TODO: review generated schema */
export class ListGrupoDoPrincipalSchema extends Schema {
  readonly name = 'ListGrupoDoPrincipal'

  readonly fieldSet: FieldSet<GrupoDoPrincipal> = {
    idGrupoDoPrincipalPk: (): FieldComponent => ({
      is: Component.Render,
    }),
    titulo: (): FieldComponent => ({
      is: Component.Render,
    }),
  }
}
