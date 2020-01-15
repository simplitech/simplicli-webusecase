/**
 * ItemDoPrincipalCollection
 *
 * @author Simpli CLI generator
 */
import {PageCollection, HttpExclude, Request} from 'simpli-web-sdk'
import {ItemDoPrincipal} from '@/model/resource/ItemDoPrincipal'

/* TODO: review generated class */
@HttpExclude()
export class ItemDoPrincipalCollection extends PageCollection<ItemDoPrincipal> {
  constructor() {
    super(ItemDoPrincipal)
  }

  queryAsPage() {
    return this.listCsvItemDoPrincipal()
  }

  async listCsvItemDoPrincipal() {
    return await Request.get(`/user/item-do-principal/csv`, {
      params: this.params,
    })
      .name('listCsvItemDoPrincipal')
      .as(this)
      .getResponse()
  }

  async listItemDoPrincipal() {
    return await Request.get(`/user/item-do-principal`, {params: this.params})
      .name('listItemDoPrincipal')
      .as(this)
      .getResponse()
  }
}
