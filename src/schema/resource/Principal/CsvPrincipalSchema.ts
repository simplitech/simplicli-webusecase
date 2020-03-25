/**
 * Csv Schema of Principal
 * @author Simpli CLI generator
 */
import {Helper} from '@/helpers'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet} from '@simpli/meta-schema'
import {Principal} from '@/model/resource/Principal'

/* TODO: review generated schema */
export class CsvPrincipalSchema extends DefaultSchema {
  readonly name = 'CsvPrincipal'

  readonly fieldSet: FieldSet<Principal> = {
    idPrincipalPk: schema => schema.model.idPrincipalPk,
    grupoDoPrincipal1: schema => schema.model.grupoDoPrincipal1?.$id ?? null,
    grupoDoPrincipal2: schema => schema.model.grupoDoPrincipal2?.$id ?? null,
    textoObrigatorio: schema => schema.model.textoObrigatorio,
    inteiroObrigatorio: schema => schema.model.inteiroObrigatorio,
    unico: schema => schema.model.unico,
    decimalObrigatorio: schema => schema.model.decimalObrigatorio,
    booleanoObrigatorio: schema =>
      Helper.bool(schema.model.booleanoObrigatorio),
    dataObrigatoria: schema => Helper.datetime(schema.model.dataObrigatoria),
    datahoraObrigatoria: schema =>
      Helper.datetime(schema.model.datahoraObrigatoria),
    ativo: schema => Helper.bool(schema.model.ativo),
    dataCriacao: schema => Helper.datetime(schema.model.dataCriacao),
    textoFacultativo: schema => schema.model.textoFacultativo,
    inteiroFacultativo: schema => schema.model.inteiroFacultativo,
    email: schema => schema.model.email,
    urlImagem: schema => schema.model.urlImagem,
    url: schema => schema.model.url,
    nome: schema => schema.model.nome,
    titulo: schema => schema.model.titulo,
    cpf: schema => Helper.cpf(schema.model.cpf),
    cnpj: schema => Helper.cnpj(schema.model.cnpj),
    rg: schema => Helper.rg(schema.model.rg),
    celular: schema => Helper.phone(schema.model.celular),
    textoGrande: schema => schema.model.textoGrande,
    snakeCase: schema => schema.model.snakeCase,
    decimalFacultativo: schema => schema.model.decimalFacultativo,
    booleanoFacultativo: schema =>
      Helper.bool(schema.model.booleanoFacultativo),
    dataFacultativa: schema => Helper.datetime(schema.model.dataFacultativa),
    datahoraFacultativa: schema =>
      Helper.datetime(schema.model.datahoraFacultativa),
    dataAlteracao: schema => Helper.datetime(schema.model.dataAlteracao),
    preco: schema => schema.model.preco,
  }
}
