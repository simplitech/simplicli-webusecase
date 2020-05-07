/**
 * Filter Schema of ExtensaoDoPrincipal
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import * as Component from '@simpli/vue-input'
import {IExtensaoDoPrincipalCollectionResourcesHolder} from '@/model/collection/ExtensaoDoPrincipalCollection'
import {ExtensaoDoPrincipal} from '@/model/resource/ExtensaoDoPrincipal'
import {PrincipalCollection} from '@/model/collection/PrincipalCollection'

/* TODO: review generated schema */
export class FilterExtensaoDoPrincipalSchema extends DefaultSchema
  implements IExtensaoDoPrincipalCollectionResourcesHolder {
  collectionPrincipal = new PrincipalCollection().noPagination()

  readonly name = 'FilterExtensaoDoPrincipal'

  readonly fieldSet: FieldSet<ExtensaoDoPrincipal> = {}
}
