/**
 * ItemDoPrincipal
 * @author Simpli CLI generator
 */
import {$, Helper, Request, Resource} from 'simpli-web-sdk'
import {ResponseSerialize} from 'simpli-web-sdk'
import {Principal} from '@/model/resource/Principal'
import {ItemDoPrincipalCollection} from '@/model/collection/ItemDoPrincipalCollection'

/* TODO: review generated class */
export class ItemDoPrincipal extends Resource {
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
   * Lists the instances of ItemDoPrincipal to use it in a CSV file
   */
  static async listCsvItemDoPrincipal(params: any) {
    return await Request.get(`/user/item-do-principal/csv`, {params})
      .name('listCsvItemDoPrincipal')
      .as(ItemDoPrincipalCollection)
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
}
