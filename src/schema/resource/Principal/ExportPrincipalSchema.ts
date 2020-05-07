/**
 * Export Schema of Principal
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet} from '@simpli/meta-schema'
import {Principal} from '@/model/resource/Principal'

/* TODO: review generated schema */
export class ExportPrincipalSchema extends DefaultSchema {
  readonly name = 'ExportPrincipal'

  readonly fieldSet: FieldSet<Principal> = {
    idPrincipalPk: schema => schema.model.idPrincipalPk,
    grupoDoPrincipal: schema => schema.model.grupoDoPrincipal?.$tag ?? null,
    grupoDoPrincipalFacultativo: schema =>
      schema.model.grupoDoPrincipalFacultativo?.$tag ?? null,
    textoObrigatorio: schema => schema.model.textoObrigatorio,
    unico: schema => schema.model.unico,
    decimalObrigatorio: schema => schema.model.decimalObrigatorio,
    inteiroObrigatorio: schema => schema.model.inteiroObrigatorio,
    booleanoObrigatorio: schema =>
      $.filter.bool(schema.model.booleanoObrigatorio),
    dataObrigatoria: schema => $.filter.datetime(schema.model.dataObrigatoria),
    datahoraObrigatoria: schema =>
      $.filter.datetime(schema.model.datahoraObrigatoria),
    ativo: schema => $.filter.bool(schema.model.ativo),
    dataCriacao: schema => $.filter.datetime(schema.model.dataCriacao),
    textoFacultativo: schema => schema.model.textoFacultativo,
    email: schema => schema.model.email,
    urlImagem: schema => schema.model.urlImagem,
    url: schema => schema.model.url,
    nome: schema => schema.model.nome,
    titulo: schema => schema.model.titulo,
    cpf: schema => $.filter.cpf(schema.model.cpf),
    cnpj: schema => $.filter.cnpj(schema.model.cnpj),
    rg: schema => $.filter.rg(schema.model.rg),
    celular: schema => $.filter.phone(schema.model.celular),
    textoGrande: schema => schema.model.textoGrande,
    snakeCase: schema => schema.model.snakeCase,
    decimalFacultativo: schema => schema.model.decimalFacultativo,
    inteiroFacultativo: schema => schema.model.inteiroFacultativo,
    booleanoFacultativo: schema =>
      $.filter.bool(schema.model.booleanoFacultativo),
    dataFacultativa: schema => $.filter.datetime(schema.model.dataFacultativa),
    datahoraFacultativa: schema =>
      $.filter.datetime(schema.model.datahoraFacultativa),
    dataAlteracao: schema => $.filter.datetime(schema.model.dataAlteracao),
    preco: schema => schema.model.preco,
  }
}
