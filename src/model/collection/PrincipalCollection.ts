/**
 * PrincipalCollection
 *
 * @author Simpli CLI generator
 */
import {
  IResource,
  PageCollection,
  ResourceCollection,
} from '@simpli/resource-collection'
import {HttpExclude, RequestExpose} from '@simpli/serialized-request'
import {Request} from '@simpli/serialized-request'
import {Principal} from '@/model/resource/Principal'
import {GrupoDoPrincipalCollection} from '@/model/collection/GrupoDoPrincipalCollection'
import {GrupoDoPrincipal} from '@/model/resource/GrupoDoPrincipal'

/* TODO: review generated class */
@HttpExclude()
export class PrincipalCollection extends PageCollection<Principal> {
  constructor() {
    super(Principal)
  }

  resource?: IPrincipalCollectionResourcesHolder

  @RequestExpose() idGrupoDoPrincipalFk: number[] = []
  @RequestExpose() idGrupoDoPrincipalFacultativoFk: number[] = []

  @RequestExpose() minInteiroObrigatorio: number | null = null
  @RequestExpose() maxInteiroObrigatorio: number | null = null

  @RequestExpose() minDecimalObrigatorio: number | null = null
  @RequestExpose() maxDecimalObrigatorio: number | null = null

  @RequestExpose() booleanoObrigatorio: boolean | null = null

  @RequestExpose() minDataObrigatoria: string | null = null
  @RequestExpose() maxDataObrigatoria: string | null = null

  @RequestExpose() minDatahoraObrigatoria: string | null = null
  @RequestExpose() maxDatahoraObrigatoria: string | null = null

  @RequestExpose() minDataCriacao: string | null = null
  @RequestExpose() maxDataCriacao: string | null = null

  @RequestExpose() minInteiroFacultativo: number | null = null
  @RequestExpose() maxInteiroFacultativo: number | null = null

  @RequestExpose() minDecimalFacultativo: number | null = null
  @RequestExpose() maxDecimalFacultativo: number | null = null

  @RequestExpose() booleanoFacultativo: boolean | null = null

  @RequestExpose() minDataFacultativa: string | null = null
  @RequestExpose() maxDataFacultativa: string | null = null

  @RequestExpose() minDatahoraFacultativa: string | null = null
  @RequestExpose() maxDatahoraFacultativa: string | null = null

  @RequestExpose() minDataAlteracao: string | null = null
  @RequestExpose() maxDataAlteracao: string | null = null

  @RequestExpose() minPreco: number | null = null
  @RequestExpose() maxPreco: number | null = null

  queryAsPage() {
    return this.listPrincipal()
  }

  async listPrincipal() {
    return await Request.get(`/user/principal`, {params: this.params})
      .name('listPrincipal')
      .as(this)
      .getResponse()
  }

  async listExportPrincipal() {
    return await Request.get(`/user/principal/export`, {params: this.params})
      .name('listExportPrincipal')
      .as(this)
      .getResponse()
  }

  get grupoDoPrincipal1() {
    return (
      this.resource?.collectionGrupoDoPrincipal.getManyIds(
        this.idGrupoDoPrincipalFk
      ) ?? null
    )
  }
  set grupoDoPrincipal1(input: GrupoDoPrincipal[] | null) {
    this.idGrupoDoPrincipalFk = input?.map(area => area?.$id) ?? []
  }

  get grupoDoPrincipal2() {
    return (
      this.resource?.collectionGrupoDoPrincipal.getManyIds(
        this.idGrupoDoPrincipalFacultativoFk
      ) ?? null
    )
  }
  set grupoDoPrincipal2(input: GrupoDoPrincipal[] | null) {
    this.idGrupoDoPrincipalFacultativoFk = input?.map(area => area?.$id) ?? []
  }
}

export interface IPrincipalCollectionResourcesHolder {
  collectionGrupoDoPrincipal: GrupoDoPrincipalCollection
}
