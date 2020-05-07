/**
 * List Schema of Endereco
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import * as Component from '@simpli/vue-render-schema'
import {Endereco} from '@/model/resource/Endereco'

/* TODO: review generated schema */
export class ListEnderecoSchema extends DefaultSchema {
  readonly name = 'ListEndereco'

  readonly fieldSet: FieldSet<Endereco> = {
    idEnderecoPk: (): FieldComponent => ({
      is: Component.Render,
    }),
    cep: (): FieldComponent => ({
      is: Component.Render,
    }),
    zipcode: (): FieldComponent => ({
      is: Component.Render,
    }),
    rua: (): FieldComponent => ({
      is: Component.Render,
    }),
    cidade: (): FieldComponent => ({
      is: Component.Render,
    }),
    uf: (): FieldComponent => ({
      is: Component.Render,
    }),
    nro: (): FieldComponent => ({
      is: Component.Render,
    }),
    latitude: (): FieldComponent => ({
      is: Component.Render,
    }),
    longitude: (): FieldComponent => ({
      is: Component.Render,
    }),
  }
}
