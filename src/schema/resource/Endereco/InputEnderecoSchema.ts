/**
 * Input Schema of Endereco
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import * as Component from '@simpli/vue-input'
import {Endereco} from '@/model/resource/Endereco'

/* TODO: review generated schema */
export class InputEnderecoSchema extends DefaultSchema {
  readonly name = 'InputEndereco'

  readonly fieldSet: FieldSet<Endereco> = {
    cep: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'zipcode',
        label: this.translateFrom(schema.fieldName),
        validation: 'cep',
      },
    }),
    zipcode: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'zipcode',
        label: this.translateFrom(schema.fieldName),
        validation: 'cep',
      },
    }),
    rua: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'text',
        maxlength: 45,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    cidade: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'text',
        maxlength: 45,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    uf: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'text',
        maxlength: 45,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    nro: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'number',
        maxlength: 255,
        step: 1,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    latitude: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'number',
        maxlength: 255,
        step: 'any',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    longitude: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'number',
        maxlength: 255,
        step: 'any',
        label: this.translateFrom(schema.fieldName),
      },
    }),
  }
}
