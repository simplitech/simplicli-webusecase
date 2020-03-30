/**
 * Principal
 * Note: the main model of generator usecase
 *
 * @author Simpli CLI generator
 */
import {
  Request,
  ResponseExclude,
  ResponseSerialize,
} from '@simpli/serialized-request'
import {IResource} from '@simpli/resource-collection/dist/types/IResource'
import {GrupoDoPrincipal} from '@/model/resource/GrupoDoPrincipal'
import {PrincipalCollection} from '@/model/collection/PrincipalCollection'

/* TODO: review generated class */
export class Principal implements IResource {
  idPrincipalPk: number = 0

  @ResponseSerialize(GrupoDoPrincipal)
  grupoDoPrincipal1: GrupoDoPrincipal | null = null

  @ResponseSerialize(GrupoDoPrincipal)
  grupoDoPrincipal2: GrupoDoPrincipal | null = null

  /**
   * principal’s mandatory text
   */
  textoObrigatorio: string | null = null

  inteiroObrigatorio: number | null = null
  unico: string | null = null
  decimalObrigatorio: number | null = null
  booleanoObrigatorio: boolean | null = null
  dataObrigatoria: string | null = null
  datahoraObrigatoria: string | null = null
  ativo: boolean | null = null
  dataCriacao: string | null = null
  idGrupoDoPrincipalFk: number | null = null

  textoFacultativo: string | null = null
  inteiroFacultativo: number | null = null
  email: string | null = null
  urlImagem: string | null = null
  url: string | null = null
  nome: string | null = null
  titulo: string | null = null
  cpf: string | null = null
  cnpj: string | null = null
  rg: string | null = null
  celular: string | null = null
  textoGrande: string | null = null
  snakeCase: string | null = null
  decimalFacultativo: number | null = null
  booleanoFacultativo: boolean | null = null
  dataFacultativa: string | null = null
  datahoraFacultativa: string | null = null
  dataAlteracao: string | null = null
  preco: number | null = null
  idGrupoDoPrincipalFacultativoFk: number | null = null

  @ResponseExclude()
  senha: string | null = null

  get $id() {
    return this.idPrincipalPk
  }
  set $id(val) {
    this.idPrincipalPk = val
  }
  get $tag() {
    return String(this.nome)
  }
  set $tag(val) {
    this.nome = val
  }

  /**
   * Gets a instance of a given ID of Principal
   */
  async getPrincipal(id: number) {
    return await Request.get(`/user/principal/${id}`)
      .name('getPrincipal')
      .as(this)
      .getData()
  }

  /**
   * Deletes a instance of a given ID of Principal
   */
  async removePrincipal() {
    return await Request.delete(`/user/principal/${this.$id}`)
      .name('removePrincipal')
      .asNumber()
      .getData()
  }

  /**
   * Lists the instances of Principal
   */
  static async listPrincipal(params: any) {
    return await Request.get(`/user/principal`, {params})
      .name('listPrincipal')
      .as(PrincipalCollection)
      .getData()
  }

  /**
   * Persists a new instance of Principal. Use ID = 0 to create a new one,
   * or ID > 0 to update a current one
   */
  async persistPrincipal() {
    return await Request.post(`/user/principal`, this)
      .name('persistPrincipal')
      .asNumber()
      .getData()
  }

  /**
   * Lists the instances of Principal to use it in a XLSX file
   */
  static async listExportPrincipal(params: any) {
    return await Request.get(`/user/principal/export`, {params})
      .name('listExportPrincipal')
      .as(PrincipalCollection)
      .getData()
  }
}
