/**
 * TagCollection
 *
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {
  HttpExclude,
  Request,
  RequestExpose,
  ResponseSerialize,
} from '@simpli/serialized-request'
import {PageCollection} from '@simpli/resource-collection'
import {Tag} from '@/model/resource/Tag'
import {PrincipalCollection} from '@/model/collection/PrincipalCollection'

/* TODO: review generated class */
@HttpExclude()
export class TagCollection extends PageCollection<Tag> {
  constructor() {
    super(Tag)
  }

  resource?: ITagCollectionResourcesHolder

  queryAsPage() {
    return this.listTag()
  }

  async listTag() {
    return await Request.get(`/user/tag`, {params: this.params})
      .name('listTag')
      .as(this)
      .getResponse()
  }

  async listExportTag() {
    return await Request.get(`/user/tag/export`, {params: this.params})
      .name('listExportTag')
      .as(this)
      .getResponse()
  }
}

export interface ITagCollectionResourcesHolder {
  collectionPrincipal: PrincipalCollection
}
