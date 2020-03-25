/**
 * ExtensaoDoPrincipal
 * @author Simpli CLI generator
 */
import {Request, ResponseSerialize} from '@simpli/serialized-request'
import {IResource} from '@simpli/resource-collection/dist/types/IResource'
import {Principal} from '@/model/resource/Principal'
import {ExtensaoDoPrincipalCollection} from '@/model/collection/ExtensaoDoPrincipalCollection'

/* TODO: review generated class */
export class ExtensaoDoPrincipal implements IResource {
  @ResponseSerialize(Principal)
  principal: Principal | null = null

  titulo: string | null = null

  get $id() {
    /* TODO: define the ID */
    return 0
  }
  set $id(val) {
    /* TODO: define the ID */
  }
  get $tag() {
    return String(this.titulo)
  }
  set $tag(val) {
    this.titulo = val
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
   * Lists the instances of ExtensaoDoPrincipal
   */
  static async listExtensaoDoPrincipal(params: any) {
    return await Request.get(`/user/extensao-do-principal`, {params})
      .name('listExtensaoDoPrincipal')
      .as(ExtensaoDoPrincipalCollection)
      .getData()
  }

  /**
   * Persists a new instance of ExtensaoDoPrincipal. Use ID = 0 to create a new one,
   * or ID > 0 to update a current one
   */
  async persistExtensaoDoPrincipal() {
    return await Request.post(`/user/extensao-do-principal`, this)
      .name('persistExtensaoDoPrincipal')
      .asNumber()
      .getData()
  }

  /**
   * Gets a instance of a given ID of ExtensaoDoPrincipal
   */
  async getExtensaoDoPrincipal(id: number) {
    return await Request.get(`/user/extensao-do-principal/${id}`)
      .name('getExtensaoDoPrincipal')
      .as(this)
      .getData()
  }

  /**
   * Lists the instances of ExtensaoDoPrincipal to use it in a CSV file
   */
  static async listCsvExtensaoDoPrincipal(params: any) {
    return await Request.get(`/user/extensao-do-principal/csv`, {params})
      .name('listCsvExtensaoDoPrincipal')
      .as(ExtensaoDoPrincipalCollection)
      .getData()
  }
}
