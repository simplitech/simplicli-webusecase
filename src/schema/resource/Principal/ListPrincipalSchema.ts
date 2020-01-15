/**
 * List Schema of Principal
 * @author Simpli CLI generator
 */
import {
  Helper,
  Schema,
  FieldSet,
  FieldComponent,
  Component,
} from 'simpli-web-sdk'
import {Principal} from '@/model/resource/Principal'

/* TODO: review generated schema */
export class ListPrincipalSchema extends Schema {
  readonly name = 'ListPrincipal'

  readonly fieldSet: FieldSet<Principal> = {
    idPrincipalPk: (): FieldComponent => ({
      is: Component.Render,
    }),
    grupoDoPrincipal1: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: schema.model.grupoDoPrincipal1?.$id,
      },
    }),
    grupoDoPrincipal2: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: schema.model.grupoDoPrincipal2?.$id,
      },
    }),
    textoObrigatorio: (): FieldComponent => ({
      is: Component.Render,
    }),
    inteiroObrigatorio: (): FieldComponent => ({
      is: Component.Render,
    }),
    unico: (): FieldComponent => ({
      is: Component.Render,
    }),
    decimalObrigatorio: (): FieldComponent => ({
      is: Component.Render,
    }),
    booleanoObrigatorio: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: Helper.bool(schema.model.booleanoObrigatorio),
      },
    }),
    dataObrigatoria: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: Helper.datetime(schema.model.dataObrigatoria),
      },
    }),
    datahoraObrigatoria: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: Helper.datetime(schema.model.datahoraObrigatoria),
      },
    }),
    ativo: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: Helper.bool(schema.model.ativo),
      },
    }),
    dataCriacao: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: Helper.datetime(schema.model.dataCriacao),
      },
    }),
    textoFacultativo: (): FieldComponent => ({
      is: Component.Render,
    }),
    inteiroFacultativo: (): FieldComponent => ({
      is: Component.Render,
    }),
    email: (): FieldComponent => ({
      is: Component.Render,
    }),
    urlImagem: (schema): FieldComponent => ({
      is: Component.RenderImage,
      bind: {
        src: schema.model.urlImagem,
        alt: this.translateFrom(schema.fieldName),
        innerClass: 'w-50 h-50',
      },
    }),
    url: (schema): FieldComponent => ({
      is: Component.RenderAnchor,
      bind: {
        href: schema.model.url,
        label: schema.model.url,
        target: '_blank',
      },
    }),
    nome: (): FieldComponent => ({
      is: Component.Render,
    }),
    titulo: (): FieldComponent => ({
      is: Component.Render,
    }),
    cpf: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: Helper.cpf(schema.model.cpf),
      },
    }),
    cnpj: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: Helper.cnpj(schema.model.cnpj),
      },
    }),
    rg: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: Helper.rg(schema.model.rg),
      },
    }),
    celular: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: Helper.phone(schema.model.celular),
      },
    }),
    textoGrande: (): FieldComponent => ({
      is: Component.Render,
    }),
    snakeCase: (): FieldComponent => ({
      is: Component.Render,
    }),
    decimalFacultativo: (): FieldComponent => ({
      is: Component.Render,
    }),
    booleanoFacultativo: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: Helper.bool(schema.model.booleanoFacultativo),
      },
    }),
    dataFacultativa: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: Helper.datetime(schema.model.dataFacultativa),
      },
    }),
    datahoraFacultativa: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: Helper.datetime(schema.model.datahoraFacultativa),
      },
    }),
    dataAlteracao: (schema): FieldComponent => ({
      is: Component.Render,
      bind: {
        content: Helper.datetime(schema.model.dataAlteracao),
      },
    }),
    preco: (): FieldComponent => ({
      is: Component.Render,
    }),
  }
}
