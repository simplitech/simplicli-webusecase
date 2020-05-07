/**
 * Filter Schema of Tag
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import * as Component from '@simpli/vue-input'
import {ITagCollectionResourcesHolder} from '@/model/collection/TagCollection'
import {Tag} from '@/model/resource/Tag'
import {PrincipalCollection} from '@/model/collection/PrincipalCollection'

/* TODO: review generated schema */
export class FilterTagSchema extends DefaultSchema
  implements ITagCollectionResourcesHolder {
  collectionPrincipal = new PrincipalCollection().noPagination()

  readonly name = 'FilterTag'

  readonly fieldSet: FieldSet<Tag> = {}
}
