/**
 * ConectorPrincipalCollection
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
import {ConectorPrincipal} from '@/model/resource/ConectorPrincipal'
import {ConectadoCollection} from '@/model/collection/ConectadoCollection'
import {PrincipalCollection} from '@/model/collection/PrincipalCollection'

/* TODO: review generated class */
@HttpExclude()
export class ConectorPrincipalCollection extends PageCollection<
  ConectorPrincipal
> {
  constructor() {
    super(ConectorPrincipal)
  }

  resource?: IConectorPrincipalCollectionResourcesHolder

  queryAsPage() {
    return this.listConectorPrincipal()
  }

  async listConectorPrincipal() {
    return await Request.get(`/conector-principal`, {params: this.params})
      .name('listConectorPrincipal')
      .as(this)
      .getResponse()
  }

  async listExportConectorPrincipal() {
    return await Request.get(`/conector-principal/export`, {
      params: this.params,
    })
      .name('listExportConectorPrincipal')
      .as(this)
      .getResponse()
  }
}

export interface IConectorPrincipalCollectionResourcesHolder {
  collectionConectado: ConectadoCollection
  collectionPrincipal: PrincipalCollection
}
