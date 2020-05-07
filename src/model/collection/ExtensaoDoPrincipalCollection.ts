/**
 * ExtensaoDoPrincipalCollection
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
import {ExtensaoDoPrincipal} from '@/model/resource/ExtensaoDoPrincipal'
import {PrincipalCollection} from '@/model/collection/PrincipalCollection'

/* TODO: review generated class */
@HttpExclude()
export class ExtensaoDoPrincipalCollection extends PageCollection<
  ExtensaoDoPrincipal
> {
  constructor() {
    super(ExtensaoDoPrincipal)
  }

  resource?: IExtensaoDoPrincipalCollectionResourcesHolder

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

export interface IExtensaoDoPrincipalCollectionResourcesHolder {
  collectionPrincipal: PrincipalCollection
}
