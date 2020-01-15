/**
 * ConectorPrincipalCollection
 *
 * @author Simpli CLI generator
 */
import {PageCollection, HttpExclude, Request} from 'simpli-web-sdk'
import {ConectorPrincipal} from '@/model/resource/ConectorPrincipal'

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

  async listCsvConectorPrincipal() {
    return await Request.get(`/user/conector-principal/csv`, {
      params: this.params,
    })
      .name('listCsvConectorPrincipal')
      .as(this)
      .getResponse()
  }
}
