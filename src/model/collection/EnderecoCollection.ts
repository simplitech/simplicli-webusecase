/**
 * EnderecoCollection
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
import {Endereco} from '@/model/resource/Endereco'

/* TODO: review generated class */
@HttpExclude()
export class EnderecoCollection extends PageCollection<Endereco> {
  constructor() {
    super(Endereco)
  }

  resource?: IEnderecoCollectionResourcesHolder

  @RequestExpose() minNro: number | null = null
  @RequestExpose() maxNro: number | null = null
  @RequestExpose() minLatitude: number | null = null
  @RequestExpose() maxLatitude: number | null = null
  @RequestExpose() minLongitude: number | null = null
  @RequestExpose() maxLongitude: number | null = null

  queryAsPage() {
    return this.listEndereco()
  }

  async listEndereco() {
    return await Request.get(`/endereco`, {params: this.params})
      .name('listEndereco')
      .as(this)
      .getResponse()
  }

  async listExportEndereco() {
    return await Request.get(`/endereco/export`, {params: this.params})
      .name('listExportEndereco')
      .as(this)
      .getResponse()
  }
}

export interface IEnderecoCollectionResourcesHolder {}
