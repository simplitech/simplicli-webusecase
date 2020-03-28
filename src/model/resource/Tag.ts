/**
 * Tag
 * @author Simpli CLI generator
 */
import {Request, ResponseSerialize} from '@simpli/serialized-request'
import {IResource} from '@simpli/resource-collection/dist/types/IResource'
import {Principal} from '@/model/resource/Principal'
import {TagCollection} from '@/model/collection/TagCollection'

/* TODO: review generated class */
export class Tag implements IResource {
  idTagPk: number = 0

  @ResponseSerialize(Principal)
  tagPrincipal: Principal[] | null = null

  titulo: string | null = null

  get $id() {
    return this.idTagPk
  }
  set $id(val) {
    this.idTagPk = val
  }
  get $tag() {
    return String(this.titulo)
  }
  set $tag(val) {
    this.titulo = val
  }

  /**
   * Gets a instance of a given ID of Tag
   */
  async getTag(id: number) {
    return await Request.get(`/user/tag/${id}`)
      .name('getTag')
      .as(this)
      .getData()
  }

  /**
   * Lists the instances of Tag
   */
  static async listTag(params: any) {
    return await Request.get(`/user/tag`, {params})
      .name('listTag')
      .as(TagCollection)
      .getData()
  }

  /**
   * Persists a new instance of Tag. Use ID = 0 to create a new one,
   * or ID > 0 to update a current one
   */
  async persistTag() {
    return await Request.post(`/user/tag`, this)
      .name('persistTag')
      .asNumber()
      .getData()
  }

  /**
   * Lists the instances of Tag to use it in a XLSX file
   */
  static async listExportTag(params: any) {
    return await Request.get(`/user/tag/export`, {params})
      .name('listExportTag')
      .as(TagCollection)
      .getData()
  }
}
