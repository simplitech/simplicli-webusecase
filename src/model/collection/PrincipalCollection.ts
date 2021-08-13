/**
 * PrincipalCollection
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
import {Principal} from '@/model/resource/Principal'
import {GrupoDoPrincipalCollection} from '@/model/collection/GrupoDoPrincipalCollection'
import {TagCollection} from '@/model/collection/TagCollection'

/* TODO: review generated class */
@HttpExclude()
export class PrincipalCollection extends PageCollection<Principal> {
  constructor() {
    super(Principal)
  }

  resource?: IPrincipalCollectionResourcesHolder

  @RequestExpose() idGrupoDoPrincipalFk: number[] = []
  @RequestExpose() idGrupoDoPrincipalFacultativoFk: number[] = []
  @RequestExpose() startDataObrigatoria: string | null = null
  @RequestExpose() endDataObrigatoria: string | null = null
  @RequestExpose() startDataFacultativa: string | null = null
  @RequestExpose() endDataFacultativa: string | null = null
  @RequestExpose() startDatahoraObrigatoria: string | null = null
  @RequestExpose() endDatahoraObrigatoria: string | null = null
  @RequestExpose() startDatahoraFacultativa: string | null = null
  @RequestExpose() endDatahoraFacultativa: string | null = null
  @RequestExpose() startDataCriacao: string | null = null
  @RequestExpose() endDataCriacao: string | null = null
  @RequestExpose() startDataAlteracao: string | null = null
  @RequestExpose() endDataAlteracao: string | null = null
  @RequestExpose() minDecimalObrigatorio: number | null = null
  @RequestExpose() maxDecimalObrigatorio: number | null = null
  @RequestExpose() minDecimalFacultativo: number | null = null
  @RequestExpose() maxDecimalFacultativo: number | null = null
  @RequestExpose() minInteiroObrigatorio: number | null = null
  @RequestExpose() maxInteiroObrigatorio: number | null = null
  @RequestExpose() minInteiroFacultativo: number | null = null
  @RequestExpose() maxInteiroFacultativo: number | null = null
  @RequestExpose() minPreco: number | null = null
  @RequestExpose() maxPreco: number | null = null
  @RequestExpose() booleanoObrigatorio: boolean | null = null
  @RequestExpose() booleanoFacultativo: boolean | null = null

  get grupoDoPrincipal() {
    return (
      this.resource?.collectionGrupoDoPrincipal.getManyIds(
        this.idGrupoDoPrincipalFk
      ) ?? null
    )
  }
  set grupoDoPrincipal(input) {
    this.idGrupoDoPrincipalFk = input?.map(item => item?.$id) ?? []
  }

  get grupoDoPrincipalFacultativo() {
    return (
      this.resource?.collectionGrupoDoPrincipal.getManyIds(
        this.idGrupoDoPrincipalFacultativoFk
      ) ?? null
    )
  }
  set grupoDoPrincipalFacultativo(input) {
    this.idGrupoDoPrincipalFacultativoFk = input?.map(item => item?.$id) ?? []
  }

  queryAsPage() {
    return this.listPrincipal()
  }

  async listPrincipal() {
    return await Request.get(`/principal`, {params: this.params})
      .name('listPrincipal')
      .as(this)
      .getResponse()
  }

  async listExportPrincipal() {
    return await Request.get(`/principal/export`, {params: this.params})
      .name('listExportPrincipal')
      .as(this)
      .getResponse()
  }
}

export interface IPrincipalCollectionResourcesHolder {
  collectionGrupoDoPrincipal: GrupoDoPrincipalCollection
  collectionTag: TagCollection
}
