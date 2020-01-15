/**
 * ConectadoCollection
 *
 * @author Simpli CLI generator
 */
import {PageCollection, HttpExclude, Request} from 'simpli-web-sdk'
import {Conectado} from '@/model/resource/Conectado'

/* TODO: review generated class */
@HttpExclude()
export class ConectadoCollection extends PageCollection<Conectado> {
  constructor() {
    super(Conectado)
  }

  queryAsPage() {
    return this.listCsvConectado()
  }

  async listCsvConectado() {
    return await Request.get(`/user/conectado/csv`, {params: this.params})
      .name('listCsvConectado')
      .as(this)
      .getResponse()
  }

  async listConectado() {
    return await Request.get(`/user/conectado`, {params: this.params})
      .name('listConectado')
      .as(this)
      .getResponse()
  }
}
