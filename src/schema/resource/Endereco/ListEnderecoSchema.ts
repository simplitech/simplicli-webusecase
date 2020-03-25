/**
 * List DefaultSchema of Endereco
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import {Render} from '@simpli/vue-render-schema'
import {Endereco} from '@/model/resource/Endereco'

/* TODO: review generated DefaultSchema */
export class ListEnderecoSchema extends DefaultSchema {
  readonly name = 'ListEndereco'

  readonly fieldSet: FieldSet<Endereco> = {
    idEnderecoPk: (): FieldComponent => ({
      is: Render,
    }),
    cep: (): FieldComponent => ({
      is: Render,
    }),
    zipcode: (): FieldComponent => ({
      is: Render,
    }),
    rua: (): FieldComponent => ({
      is: Render,
    }),
    nro: (): FieldComponent => ({
      is: Render,
    }),
    cidade: (): FieldComponent => ({
      is: Render,
    }),
    uf: (): FieldComponent => ({
      is: Render,
    }),
    latitude: (): FieldComponent => ({
      is: Render,
    }),
    longitude: (): FieldComponent => ({
      is: Render,
    }),
  }
}
