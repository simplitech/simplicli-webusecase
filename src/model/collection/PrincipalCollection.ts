/**
 * PrincipalCollection
 *
 * @author Simpli CLI generator
 */
import {PageCollection} from '@simpli/resource-collection'
import {HttpExclude} from '@simpli/serialized-request'
import {Request} from '@simpli/serialized-request'
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
