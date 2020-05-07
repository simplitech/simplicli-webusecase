/**
 * ConectadoCollection
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
import {Conectado} from '@/model/resource/Conectado'

/* TODO: review generated class */
@HttpExclude()
export class ConectadoCollection extends PageCollection<Conectado> {
  constructor() {
    super(Conectado)
  }

  resource?: IConectadoCollectionResourcesHolder

  queryAsPage() {
    return this.listConectado()
  }

  async listConectado() {
    return await Request.get(`/user/conectado`, {params: this.params})
      .name('listConectado')
      .as(this)
      .getResponse()
  }

  async listExportConectado() {
    return await Request.get(`/user/conectado/export`, {params: this.params})
      .name('listExportConectado')
      .as(this)
      .getResponse()
  }
}

export interface IConectadoCollectionResourcesHolder {}
