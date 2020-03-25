/**
 * ItemDoPrincipalCollection
 *
 * @author Simpli CLI generator
 */
import {HttpExclude} from '@simpli/serialized-request'
import {PageCollection} from '@simpli/resource-collection'
import {Request} from '@simpli/serialized-request'
import {ItemDoPrincipal} from '@/model/resource/ItemDoPrincipal'

/* TODO: review generated class */
@HttpExclude()
export class ItemDoPrincipalCollection extends PageCollection<ItemDoPrincipal> {
  constructor() {
    super(ItemDoPrincipal)
  }

  queryAsPage() {
    return this.listItemDoPrincipal()
  }

  async listItemDoPrincipal() {
    return await Request.get(`/user/item-do-principal`, {params: this.params})
      .name('listItemDoPrincipal')
      .as(this)
      .getResponse()
  }

  async listCsvItemDoPrincipal() {
    return await Request.get(`/user/item-do-principal/csv`, {
      params: this.params,
    })
      .name('listCsvItemDoPrincipal')
      .as(this)
      .getResponse()
  }
}
