/**
 * ConectorPrincipal
 * @author Simpli CLI generator
 */
import {Request, ResponseSerialize} from '@simpli/serialized-request'
import {IResource} from '@simpli/resource-collection/dist/types/IResource'
import {Conectado} from '@/model/resource/Conectado'
import {Principal} from '@/model/resource/Principal'
import {ConectorPrincipalCollection} from '@/model/collection/ConectorPrincipalCollection'

/* TODO: review generated class */
export class ConectorPrincipal implements IResource {
  @ResponseSerialize(Conectado)
  conectado: Conectado | null = null

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

  get idConectadoFk() {
    if (!this.conectado) return 0
    return this.conectado.$id
  }
  set idConectadoFk(val) {
    if (!this.conectado) this.conectado = new Conectado()
    this.conectado.$id = val
  }

  /**
   * Gets a instance of a given ID of ConectorPrincipal
   */
  async getConectorPrincipal(id1: number, id2: number) {
    return await Request.get(`/user/conector-principal/${id1}/${id2}`)
      .name('getConectorPrincipal')
      .as(this)
      .getData()
  }

  /**
   * Lists the instances of ConectorPrincipal
   */
  static async listConectorPrincipal(params: any) {
    return await Request.get(`/user/conector-principal`, {params})
      .name('listConectorPrincipal')
      .as(ConectorPrincipalCollection)
      .getData()
  }

  /**
   * Persists a new instance of ConectorPrincipal. Use ID = 0 to create a new one,
   * or ID > 0 to update a current one
   */
  async persistConectorPrincipal() {
    return await Request.post(`/user/conector-principal`, this)
      .name('persistConectorPrincipal')
      .asNumber()
      .getData()
  }

  /**
   * Lists the instances of ConectorPrincipal to use it in a CSV file
   */
  static async listCsvConectorPrincipal(params: any) {
    return await Request.get(`/user/conector-principal/csv`, {params})
      .name('listCsvConectorPrincipal')
      .as(ConectorPrincipalCollection)
      .getData()
  }
}
