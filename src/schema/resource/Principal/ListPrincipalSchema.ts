/**
 * List Schema of Principal
 * @author Simpli CLI generator
 */
import {$} from '@/simpli'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import {Render, RenderAnchor, RenderImage} from '@simpli/vue-render-schema'
import {Principal} from '@/model/resource/Principal'

/* TODO: review generated schema */
export class ListPrincipalSchema extends DefaultSchema {
  readonly name = 'ListPrincipal'

  readonly fieldSet: FieldSet<Principal> = {
    idPrincipalPk: (): FieldComponent => ({
      is: Render,
    }),
    grupoDoPrincipal1: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: schema.model.grupoDoPrincipal1?.$id,
      },
    }),
    grupoDoPrincipal2: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: schema.model.grupoDoPrincipal2?.$id,
      },
    }),
    textoObrigatorio: (): FieldComponent => ({
      is: Render,
    }),
    inteiroObrigatorio: (): FieldComponent => ({
      is: Render,
    }),
    unico: (): FieldComponent => ({
      is: Render,
    }),
    decimalObrigatorio: (): FieldComponent => ({
      is: Render,
    }),
    booleanoObrigatorio: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: $.filter.bool(schema.model.booleanoObrigatorio),
      },
    }),
    dataObrigatoria: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: $.filter.datetime(schema.model.dataObrigatoria),
      },
    }),
    datahoraObrigatoria: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: $.filter.datetime(schema.model.datahoraObrigatoria),
      },
    }),
    ativo: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: $.filter.bool(schema.model.ativo),
      },
    }),
    dataCriacao: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: $.filter.datetime(schema.model.dataCriacao),
      },
    }),
    textoFacultativo: (): FieldComponent => ({
      is: Render,
    }),
    inteiroFacultativo: (): FieldComponent => ({
      is: Render,
    }),
    email: (): FieldComponent => ({
      is: Render,
    }),
    urlImagem: (schema): FieldComponent => ({
      is: RenderImage,
      bind: {
        src: schema.model.urlImagem,
        alt: this.translateFrom(schema.fieldName),
        innerClass: 'w-50 h-50',
      },
    }),
    url: (schema): FieldComponent => ({
      is: RenderAnchor,
      bind: {
        href: schema.model.url,
        label: schema.model.url,
        target: '_blank',
      },
    }),
    nome: (): FieldComponent => ({
      is: Render,
    }),
    titulo: (): FieldComponent => ({
      is: Render,
    }),
    cpf: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: $.filter.cpf(schema.model.cpf),
      },
    }),
    cnpj: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: $.filter.cnpj(schema.model.cnpj),
      },
    }),
    rg: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: $.filter.rg(schema.model.rg),
      },
    }),
    celular: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: $.filter.phone(schema.model.celular),
      },
    }),
    textoGrande: (): FieldComponent => ({
      is: Render,
    }),
    snakeCase: (): FieldComponent => ({
      is: Render,
    }),
    decimalFacultativo: (): FieldComponent => ({
      is: Render,
    }),
    booleanoFacultativo: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: $.filter.bool(schema.model.booleanoFacultativo),
      },
    }),
    dataFacultativa: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: $.filter.datetime(schema.model.dataFacultativa),
      },
    }),
    datahoraFacultativa: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: $.filter.datetime(schema.model.datahoraFacultativa),
      },
    }),
    dataAlteracao: (schema): FieldComponent => ({
      is: Render,
      bind: {
        content: $.filter.datetime(schema.model.dataAlteracao),
      },
    }),
    preco: (): FieldComponent => ({
      is: Render,
    }),
  }
}
