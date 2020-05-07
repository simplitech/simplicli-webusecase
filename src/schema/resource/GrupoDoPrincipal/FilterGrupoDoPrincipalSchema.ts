/**
 * Filter Schema of GrupoDoPrincipal
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import * as Component from '@simpli/vue-input'
import {IGrupoDoPrincipalCollectionResourcesHolder} from '@/model/collection/GrupoDoPrincipalCollection'
import {GrupoDoPrincipal} from '@/model/resource/GrupoDoPrincipal'

/* TODO: review generated schema */
export class FilterGrupoDoPrincipalSchema extends DefaultSchema
  implements IGrupoDoPrincipalCollectionResourcesHolder {
  readonly name = 'FilterGrupoDoPrincipal'

  readonly fieldSet: FieldSet<GrupoDoPrincipal> = {}
}
