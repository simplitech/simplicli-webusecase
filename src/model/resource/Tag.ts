/**
 * Tag
 * @author Simpli CLI generator
 */
import {$, Helper, Request, Resource} from 'simpli-web-sdk'
import {ResponseSerialize} from 'simpli-web-sdk'
import {Principal} from '@/model/resource/Principal'
import {TagCollection} from '@/model/collection/TagCollection'

/* TODO: review generated class */
export class Tag extends Resource {
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

  /**
   * Lists the instances of Tag to use it in a CSV file
   */
  static async listCsvTag(params: any) {
    return await Request.get(`/user/tag/csv`, {params})
      .name('listCsvTag')
      .as(TagCollection)
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
   * Gets a instance of a given ID of Tag
   */
  async getTag(id: number) {
    return await Request.get(`/user/tag/${id}`)
      .name('getTag')
      .as(this)
      .getData()
  }
}
