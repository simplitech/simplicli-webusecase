/**
 * ItemDoPrincipal
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {Request, ResponseSerialize} from '@simpli/serialized-request'
import {IResource} from '@simpli/resource-collection/dist/types/IResource'
import {Principal} from '@/model/resource/Principal'
import {ItemDoPrincipalCollection} from '@/model/collection/ItemDoPrincipalCollection'

/* TODO: review generated class */
export class ItemDoPrincipal implements IResource {
  idItemDoPrincipalPk: number = 0

  @ResponseSerialize(Principal)
  principal: Principal | null = null

  titulo: string | null = null

  get $id() {
    return this.idItemDoPrincipalPk
  }
  set $id(val) {
    this.idItemDoPrincipalPk = val
  }
  get $tag() {
    return String(this.titulo)
  }

  get idPrincipalFk() {
    if (!this.principal) return 0
    return this.principal.$id
  }
  set idPrincipalFk(val) {
    if (!this.principal) this.principal = new Principal()
    this.principal.$id = val
  }

  /**
   * Gets a instance of a given ID of ItemDoPrincipal
   */
  async getItemDoPrincipal(id: number) {
    return await Request.get(`/user/item-do-principal/${id}`)
      .name('getItemDoPrincipal')
      .as(this)
      .getData()
  }

  /**
   * Lists the instances of ItemDoPrincipal
   */
  static async listItemDoPrincipal(params: any) {
    return await Request.get(`/user/item-do-principal`, {params})
      .name('listItemDoPrincipal')
      .as(ItemDoPrincipalCollection)
      .getData()
  }

  /**
   * Persists a new instance of ItemDoPrincipal. Use ID = 0 to create a new one,
   * or ID > 0 to update a current one
   */
  async persistItemDoPrincipal() {
    return await Request.post(`/user/item-do-principal`, this)
      .name('persistItemDoPrincipal')
      .asNumber()
      .getData()
  }

  /**
   * Lists the instances of ItemDoPrincipal to export as a file
   */
  static async listExportItemDoPrincipal(params: any) {
    return await Request.get(`/user/item-do-principal/export`, {params})
      .name('listExportItemDoPrincipal')
      .as(ItemDoPrincipalCollection)
      .getData()
  }
}
