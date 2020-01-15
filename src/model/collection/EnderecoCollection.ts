/**
 * EnderecoCollection
 *
 * @author Simpli CLI generator
 */
import {PageCollection, HttpExclude, Request} from 'simpli-web-sdk'
import {Endereco} from '@/model/resource/Endereco'

/* TODO: review generated class */
@HttpExclude()
export class EnderecoCollection extends PageCollection<Endereco> {
  constructor() {
    super(Endereco)
  }

  queryAsPage() {
    return this.listCsvEndereco()
  }

  async listCsvEndereco() {
    return await Request.get(`/user/endereco/csv`, {params: this.params})
      .name('listCsvEndereco')
      .as(this)
      .getResponse()
  }

  async listEndereco() {
    return await Request.get(`/user/endereco`, {params: this.params})
      .name('listEndereco')
      .as(this)
      .getResponse()
  }
}
