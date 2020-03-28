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
    return this.listExportConectado()
  }

  async listExportConectado() {
    return await Request.get(`/user/conectado/export`, {params: this.params})
      .name('listExportConectado')
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
