/**
 * Csv Schema of Endereco
 * @author Simpli CLI generator
 */
import {Helper, Schema, FieldSet} from 'simpli-web-sdk'
import {Endereco} from '@/model/resource/Endereco'

/* TODO: review generated schema */
export class CsvEnderecoSchema extends Schema {
  readonly name = 'CsvEndereco'

  readonly fieldSet: FieldSet<Endereco> = {
    idEnderecoPk: schema => schema.model.idEnderecoPk,
    cep: schema => schema.model.cep,
    zipcode: schema => schema.model.zipcode,
    rua: schema => schema.model.rua,
    nro: schema => schema.model.nro,
    cidade: schema => schema.model.cidade,
    uf: schema => schema.model.uf,
    latitude: schema => schema.model.latitude,
    longitude: schema => schema.model.longitude,
  }
}
