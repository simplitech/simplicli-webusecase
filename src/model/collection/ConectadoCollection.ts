/**
 * ConectadoCollection
 *
 * @author Simpli CLI generator
 */
import {Conectado} from '@/model/resource/Conectado'
import {HttpExclude} from '@simpli/serialized-request'
import {PageCollection} from '@simpli/resource-collection'
import {Request} from '@simpli/serialized-request'

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
