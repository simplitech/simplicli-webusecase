/**
 * ExtensaoDoPrincipalCollection
 *
 * @author Simpli CLI generator
 */
import {PageCollection, HttpExclude, Request} from 'simpli-web-sdk'
import {ExtensaoDoPrincipal} from '@/model/resource/ExtensaoDoPrincipal'

/* TODO: review generated class */
@HttpExclude()
export class ExtensaoDoPrincipalCollection extends PageCollection<
  ExtensaoDoPrincipal
> {
  constructor() {
    super(ExtensaoDoPrincipal)
  }

  queryAsPage() {
    return this.listExtensaoDoPrincipal()
  }

  async listExtensaoDoPrincipal() {
    return await Request.get(`/user/extensao-do-principal`, {
      params: this.params,
    })
      .name('listExtensaoDoPrincipal')
      .as(this)
      .getResponse()
  }

  async listCsvExtensaoDoPrincipal() {
    return await Request.get(`/user/extensao-do-principal/csv`, {
      params: this.params,
    })
      .name('listCsvExtensaoDoPrincipal')
      .as(this)
      .getResponse()
  }
}
