/**
 * Conectado
 * @author Simpli CLI generator
 */
import {ConectadoCollection} from '@/model/collection/ConectadoCollection'
import {Request} from '@simpli/serialized-request'
import {IResource} from '@simpli/resource-collection/dist/types/IResource'

/* TODO: review generated class */
export class Conectado implements IResource {
  idConectadoPk: number = 0

  titulo: string | null = null

  get $id() {
    return this.idConectadoPk
  }
  set $id(val) {
    this.idConectadoPk = val
  }
  get $tag() {
    return String(this.titulo)
  }
  set $tag(val) {
    this.titulo = val
  }

  /**
   * Gets a instance of a given ID of Conectado
   */
  async getConectado(id: number) {
    return await Request.get(`/user/conectado/${id}`)
      .name('getConectado')
      .as(this)
      .getData()
  }

  /**
   * Lists the instances of Conectado to use it in a CSV file
   */
  static async listCsvConectado(params: any) {
    return await Request.get(`/user/conectado/csv`, {params})
      .name('listCsvConectado')
      .as(ConectadoCollection)
      .getData()
  }

  /**
   * Lists the instances of Conectado
   */
  static async listConectado(params: any) {
    return await Request.get(`/user/conectado`, {params})
      .name('listConectado')
      .as(ConectadoCollection)
      .getData()
  }

  /**
   * Persists a new instance of Conectado. Use ID = 0 to create a new one,
   * or ID > 0 to update a current one
   */
  async persistConectado() {
    return await Request.post(`/user/conectado`, this)
      .name('persistConectado')
      .asNumber()
      .getData()
  }
}
