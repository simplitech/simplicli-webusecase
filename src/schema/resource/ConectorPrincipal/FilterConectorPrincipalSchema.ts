/**
 * Filter Schema of ConectorPrincipal
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import * as Component from '@simpli/vue-input'
import {IConectorPrincipalCollectionResourcesHolder} from '@/model/collection/ConectorPrincipalCollection'
import {ConectorPrincipal} from '@/model/resource/ConectorPrincipal'
import {ConectadoCollection} from '@/model/collection/ConectadoCollection'
import {PrincipalCollection} from '@/model/collection/PrincipalCollection'

/* TODO: review generated schema */
export class FilterConectorPrincipalSchema extends DefaultSchema
  implements IConectorPrincipalCollectionResourcesHolder {
  collectionConectado = new ConectadoCollection().noPagination()
  collectionPrincipal = new PrincipalCollection().noPagination()

  readonly name = 'FilterConectorPrincipal'

  readonly fieldSet: FieldSet<ConectorPrincipal> = {}
}
