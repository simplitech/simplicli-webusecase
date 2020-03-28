/**
 * Endereco
 * @author Simpli CLI generator
 */
import {Request} from '@simpli/serialized-request'
import {IResource} from '@simpli/resource-collection/dist/types/IResource'
import {EnderecoCollection} from '@/model/collection/EnderecoCollection'

/* TODO: review generated class */
export class Endereco implements IResource {
  idEnderecoPk: number = 0

  cep: string | null = null
  zipcode: string | null = null
  rua: string | null = null
  nro: number | null = null
  cidade: string | null = null
  uf: string | null = null
  latitude: number | null = null
  longitude: number | null = null

  get $id() {
    return this.idEnderecoPk
  }
  set $id(val) {
    this.idEnderecoPk = val
  }
  get $tag() {
    return String(this.cep)
  }
  set $tag(val) {
    this.cep = val
  }

  /**
   * Gets a instance of a given ID of Endereco
   */
  async getEndereco(id: number) {
    return await Request.get(`/user/endereco/${id}`)
      .name('getEndereco')
      .as(this)
      .getData()
  }

  /**
   * Lists the instances of Endereco
   */
  static async listEndereco(params: any) {
    return await Request.get(`/user/endereco`, {params})
      .name('listEndereco')
      .as(EnderecoCollection)
      .getData()
  }

  /**
   * Persists a new instance of Endereco. Use ID = 0 to create a new one,
   * or ID > 0 to update a current one
   */
  async persistEndereco() {
    return await Request.post(`/user/endereco`, this)
      .name('persistEndereco')
      .asNumber()
      .getData()
  }

  /**
   * Lists the instances of Endereco to use it in a XLSX file
   */
  static async listExportEndereco(params: any) {
    return await Request.get(`/user/endereco/export`, {params})
      .name('listExportEndereco')
      .as(EnderecoCollection)
      .getData()
  }
}
