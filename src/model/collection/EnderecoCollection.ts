/**
 * EnderecoCollection
 *
 * @author Simpli CLI generator
 */
import {HttpExclude} from '@simpli/serialized-request'
import {PageCollection} from '@simpli/resource-collection'
import {Request} from '@simpli/serialized-request'
import {Endereco} from '@/model/resource/Endereco'

/* TODO: review generated class */
@HttpExclude()
export class EnderecoCollection extends PageCollection<Endereco> {
  constructor() {
    super(Endereco)
  }

  queryAsPage() {
    return this.listEndereco()
  }

  async listEndereco() {
    return await Request.get(`/user/endereco`, {params: this.params})
      .name('listEndereco')
      .as(this)
      .getResponse()
  }

  async listCsvEndereco() {
    return await Request.get(`/user/endereco/csv`, {params: this.params})
      .name('listCsvEndereco')
      .as(this)
      .getResponse()
  }
}
