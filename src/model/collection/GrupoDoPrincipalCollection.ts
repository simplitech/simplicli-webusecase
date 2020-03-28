/**
 * GrupoDoPrincipalCollection
 *
 * @author Simpli CLI generator
 */
import {HttpExclude} from '@simpli/serialized-request'
import {PageCollection} from '@simpli/resource-collection'
import {Request} from '@simpli/serialized-request'
import {GrupoDoPrincipal} from '@/model/resource/GrupoDoPrincipal'

/* TODO: review generated class */
@HttpExclude()
export class GrupoDoPrincipalCollection extends PageCollection<
  GrupoDoPrincipal
> {
  constructor() {
    super(GrupoDoPrincipal)
  }

  queryAsPage() {
    return this.listExportGrupoDoPrincipal()
  }

  async listExportGrupoDoPrincipal() {
    return await Request.get(`/user/grupo-do-principal/export`, {
      params: this.params,
    })
      .name('listExportGrupoDoPrincipal')
      .as(this)
      .getResponse()
  }

  async listGrupoDoPrincipal() {
    return await Request.get(`/user/grupo-do-principal`, {params: this.params})
      .name('listGrupoDoPrincipal')
      .as(this)
      .getResponse()
  }
}
