/**
 * ItemDoPrincipalCollection
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
import {ItemDoPrincipal} from '@/model/resource/ItemDoPrincipal'
import {PrincipalCollection} from '@/model/collection/PrincipalCollection'

/* TODO: review generated class */
@HttpExclude()
export class ItemDoPrincipalCollection extends PageCollection<ItemDoPrincipal> {
  constructor() {
    super(ItemDoPrincipal)
  }

  resource?: IItemDoPrincipalCollectionResourcesHolder

  @RequestExpose() idPrincipalFk: number[] = []

  get principal() {
    return (
      this.resource?.collectionPrincipal.getManyIds(this.idPrincipalFk) ?? null
    )
  }
  set principal(input) {
    this.idPrincipalFk = input?.map(item => item?.$id) ?? []
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

  async listExportItemDoPrincipal() {
    return await Request.get(`/user/item-do-principal/export`, {
      params: this.params,
    })
      .name('listExportItemDoPrincipal')
      .as(this)
      .getResponse()
  }
}

export interface IItemDoPrincipalCollectionResourcesHolder {
  collectionPrincipal: PrincipalCollection
}
