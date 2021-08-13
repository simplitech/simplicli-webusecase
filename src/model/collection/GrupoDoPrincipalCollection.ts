/**
 * GrupoDoPrincipalCollection
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
import {GrupoDoPrincipal} from '@/model/resource/GrupoDoPrincipal'

/* TODO: review generated class */
@HttpExclude()
export class GrupoDoPrincipalCollection extends PageCollection<
  GrupoDoPrincipal
> {
  constructor() {
    super(GrupoDoPrincipal)
  }

  resource?: IGrupoDoPrincipalCollectionResourcesHolder

  queryAsPage() {
    return this.listGrupoDoPrincipal()
  }

  async listGrupoDoPrincipal() {
    return await Request.get(`/grupo-do-principal`, {params: this.params})
      .name('listGrupoDoPrincipal')
      .as(this)
      .getResponse()
  }

  async listExportGrupoDoPrincipal() {
    return await Request.get(`/grupo-do-principal/export`, {
      params: this.params,
    })
      .name('listExportGrupoDoPrincipal')
      .as(this)
      .getResponse()
  }
}

export interface IGrupoDoPrincipalCollectionResourcesHolder {}
