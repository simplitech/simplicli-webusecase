/**
 * ExtensaoDoPrincipalCollection
 *
 * @author Simpli CLI generator
 */
import {HttpExclude} from '@simpli/serialized-request'
import {PageCollection} from '@simpli/resource-collection'
import {Request} from '@simpli/serialized-request'
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

  async listExportExtensaoDoPrincipal() {
    return await Request.get(`/user/extensao-do-principal/export`, {
      params: this.params,
    })
      .name('listExportExtensaoDoPrincipal')
      .as(this)
      .getResponse()
  }
}
