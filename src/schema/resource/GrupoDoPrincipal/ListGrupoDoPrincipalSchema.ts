/**
 * List Schema of GrupoDoPrincipal
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import * as Component from '@simpli/vue-render-schema'
import {GrupoDoPrincipal} from '@/model/resource/GrupoDoPrincipal'

/* TODO: review generated schema */
export class ListGrupoDoPrincipalSchema extends DefaultSchema {
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
