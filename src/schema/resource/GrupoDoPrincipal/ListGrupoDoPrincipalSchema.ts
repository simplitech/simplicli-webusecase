/**
 * List DefaultSchema of GrupoDoPrincipal
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import {Render} from '@simpli/vue-render-schema'
import {GrupoDoPrincipal} from '@/model/resource/GrupoDoPrincipal'

/* TODO: review generated DefaultSchema */
export class ListGrupoDoPrincipalSchema extends DefaultSchema {
  readonly name = 'ListGrupoDoPrincipal'

  readonly fieldSet: FieldSet<GrupoDoPrincipal> = {
    idGrupoDoPrincipalPk: (): FieldComponent => ({
      is: Render,
    }),
    titulo: (): FieldComponent => ({
      is: Render,
    }),
  }
}
