/**
 * TagCollection
 *
 * @author Simpli CLI generator
 */
import {HttpExclude} from '@simpli/serialized-request'
import {PageCollection} from '@simpli/resource-collection'
import {Request} from '@simpli/serialized-request'
import {Tag} from '@/model/resource/Tag'

/* TODO: review generated class */
@HttpExclude()
export class TagCollection extends PageCollection<Tag> {
  constructor() {
    super(Tag)
  }

  queryAsPage() {
    return this.listTag()
  }

  async listTag() {
    return await Request.get(`/user/tag`, {params: this.params})
      .name('listTag')
      .as(this)
      .getResponse()
  }

  async listCsvTag() {
    return await Request.get(`/user/tag/csv`, {params: this.params})
      .name('listCsvTag')
      .as(this)
      .getResponse()
  }
}
