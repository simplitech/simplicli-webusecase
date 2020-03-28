/**
 * ConectorPrincipalCollection
 *
 * @author Simpli CLI generator
 */
import {ConectorPrincipal} from '@/model/resource/ConectorPrincipal'
import {HttpExclude} from '@simpli/serialized-request'
import {PageCollection} from '@simpli/resource-collection'
import {Request} from '@simpli/serialized-request'

/* TODO: review generated class */
@HttpExclude()
export class ConectorPrincipalCollection extends PageCollection<
  ConectorPrincipal
> {
  constructor() {
    super(ConectorPrincipal)
  }

  queryAsPage() {
    return this.listConectorPrincipal()
  }

  async listConectorPrincipal() {
    return await Request.get(`/user/conector-principal`, {params: this.params})
      .name('listConectorPrincipal')
      .as(this)
      .getResponse()
  }

  async listExportConectorPrincipal() {
    return await Request.get(`/user/conector-principal/export`, {
      params: this.params,
    })
      .name('listExportConectorPrincipal')
      .as(this)
      .getResponse()
  }
}
