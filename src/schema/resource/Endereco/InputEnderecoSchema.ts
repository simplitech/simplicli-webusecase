/**
 * Input DefaultSchema of Endereco
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import {InputSelect, InputText} from '@simpli/vue-input'
import {Endereco} from '@/model/resource/Endereco'

/* TODO: review generated DefaultSchema */
export class InputEnderecoSchema extends DefaultSchema {
  readonly name = 'InputEndereco'

  readonly fieldSet: FieldSet<Endereco> = {
    cep: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'zipcode',
        label: this.translateFrom(schema.fieldName),
        validation: 'cep',
      },
    }),
    zipcode: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'zipcode',
        label: this.translateFrom(schema.fieldName),
        validation: 'cep',
      },
    }),
    rua: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'text',
        maxlength: 45,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    nro: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'number',
        maxlength: 11,
        step: 1,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    cidade: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'text',
        maxlength: 45,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    uf: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'text',
        maxlength: 45,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    latitude: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'number',
        maxlength: 255,
        step: 'any',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    longitude: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'number',
        maxlength: 255,
        step: 'any',
        label: this.translateFrom(schema.fieldName),
      },
    }),
  }
}
