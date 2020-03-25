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
    return this.listCsvGrupoDoPrincipal()
  }

  async listCsvGrupoDoPrincipal() {
    return await Request.get(`/user/grupo-do-principal/csv`, {
      params: this.params,
    })
      .name('listCsvGrupoDoPrincipal')
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
