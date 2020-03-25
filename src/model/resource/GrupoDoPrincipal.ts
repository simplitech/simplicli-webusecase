/**
 * GrupoDoPrincipal
 * @author Simpli CLI generator
 */
import {Request} from '@simpli/serialized-request'
import {IResource} from '@simpli/resource-collection/dist/types/IResource'
import {GrupoDoPrincipalCollection} from '@/model/collection/GrupoDoPrincipalCollection'

/* TODO: review generated class */
export class GrupoDoPrincipal implements IResource {
  idGrupoDoPrincipalPk: number = 0

  titulo: string | null = null

  get $id() {
    return this.idGrupoDoPrincipalPk
  }
  set $id(val) {
    this.idGrupoDoPrincipalPk = val
  }
  get $tag() {
    return String(this.titulo)
  }
  set $tag(val) {
    this.titulo = val
  }

  /**
   * Gets a instance of a given ID of GrupoDoPrincipal
   */
  async getGrupoDoPrincipal(id: number) {
    return await Request.get(`/user/grupo-do-principal/${id}`)
      .name('getGrupoDoPrincipal')
      .as(this)
      .getData()
  }

  /**
   * Lists the instances of GrupoDoPrincipal to use it in a CSV file
   */
  static async listCsvGrupoDoPrincipal(params: any) {
    return await Request.get(`/user/grupo-do-principal/csv`, {params})
      .name('listCsvGrupoDoPrincipal')
      .as(GrupoDoPrincipalCollection)
      .getData()
  }

  /**
   * Lists the instances of GrupoDoPrincipal
   */
  static async listGrupoDoPrincipal(params: any) {
    return await Request.get(`/user/grupo-do-principal`, {params})
      .name('listGrupoDoPrincipal')
      .as(GrupoDoPrincipalCollection)
      .getData()
  }

  /**
   * Persists a new instance of GrupoDoPrincipal. Use ID = 0 to create a new one,
   * or ID > 0 to update a current one
   */
  async persistGrupoDoPrincipal() {
    return await Request.post(`/user/grupo-do-principal`, this)
      .name('persistGrupoDoPrincipal')
      .asNumber()
      .getData()
  }
}
