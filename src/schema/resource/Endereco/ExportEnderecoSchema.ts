/**
 * Export Schema of Endereco
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet} from '@simpli/meta-schema'
import {Endereco} from '@/model/resource/Endereco'

/* TODO: review generated schema */
export class ExportEnderecoSchema extends DefaultSchema {
  readonly name = 'ExportEndereco'

  readonly fieldSet: FieldSet<Endereco> = {
    idEnderecoPk: schema => schema.model.idEnderecoPk,
    cep: schema => schema.model.cep,
    zipcode: schema => schema.model.zipcode,
    rua: schema => schema.model.rua,
    cidade: schema => schema.model.cidade,
    uf: schema => schema.model.uf,
    nro: schema => schema.model.nro,
    latitude: schema => schema.model.latitude,
    longitude: schema => schema.model.longitude,
  }
}
