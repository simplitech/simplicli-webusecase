/**
 * PrincipalCollection
 *
 * @author Simpli CLI generator
 */
import {PageCollection, HttpExclude, Request} from 'simpli-web-sdk'
import {Principal} from '@/model/resource/Principal'

/* TODO: review generated class */
@HttpExclude()
export class PrincipalCollection extends PageCollection<Principal> {
  constructor() {
    super(Principal)
  }

  queryAsPage() {
    return this.listPrincipal()
  }

  async listPrincipal() {
    return await Request.get(`/user/principal`, {params: this.params})
      .name('listPrincipal')
      .as(this)
      .getResponse()
  }

  async listCsvPrincipal() {
    return await Request.get(`/user/principal/csv`, {params: this.params})
      .name('listCsvPrincipal')
      .as(this)
      .getResponse()
  }
}
