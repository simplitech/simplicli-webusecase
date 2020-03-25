/**
 * Input Schema of Principal
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import {InputCheckbox, InputSelect, InputText} from '@simpli/vue-input'
import {Principal} from '@/model/resource/Principal'
import {GrupoDoPrincipalCollection} from '@/model/collection/GrupoDoPrincipalCollection'

/* TODO: review generated schema */
export class InputPrincipalSchema extends DefaultSchema {
  collectionGrupoDoPrincipal = new GrupoDoPrincipalCollection().noPagination()

  readonly name = 'InputPrincipal'

  readonly fieldSet: FieldSet<Principal> = {
    grupoDoPrincipal1: (schema): FieldComponent => ({
      is: InputSelect,
      bind: {
        label: this.translateFrom(schema.fieldName),
        items: this.collectionGrupoDoPrincipal.items,
      },
    }),
    grupoDoPrincipal2: (schema): FieldComponent => ({
      is: InputSelect,
      bind: {
        label: this.translateFrom(schema.fieldName),
        items: this.collectionGrupoDoPrincipal.items,
      },
    }),
    textoObrigatorio: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'text',
        maxlength: 160,
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required',
      },
    }),
    inteiroObrigatorio: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'number',
        maxlength: 11,
        step: 1,
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required',
      },
    }),
    unico: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'text',
        maxlength: 40,
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required',
      },
    }),
    decimalObrigatorio: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'number',
        maxlength: 255,
        step: 'any',
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required',
      },
    }),
    booleanoObrigatorio: (schema): FieldComponent => ({
      is: InputCheckbox,
      bind: {
        label: this.translateFrom(schema.fieldName),
        class: 'pretty p-switch p-fill justify-center mt-8',
        labelClass: 'relative state',
      },
    }),
    dataObrigatoria: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required',
      },
    }),
    datahoraObrigatoria: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required',
      },
    }),
    ativo: (schema): FieldComponent => ({
      is: InputCheckbox,
      bind: {
        label: this.translateFrom(schema.fieldName),
        class: 'pretty p-switch p-fill justify-center mt-8',
        labelClass: 'relative state',
      },
    }),
    dataCriacao: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required',
      },
    }),
    textoFacultativo: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'text',
        maxlength: 45,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    inteiroFacultativo: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'number',
        maxlength: 11,
        step: 1,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    email: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'email',
        label: this.translateFrom(schema.fieldName),
        validation: 'email',
      },
    }),
    urlImagem: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'text',
        maxlength: 200,
        label: this.translateFrom(schema.fieldName),
        validation: 'url',
      },
    }),
    url: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'text',
        maxlength: 200,
        label: this.translateFrom(schema.fieldName),
        validation: 'url',
      },
    }),
    nome: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'text',
        maxlength: 45,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    titulo: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'text',
        maxlength: 45,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    cpf: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'cpf',
        label: this.translateFrom(schema.fieldName),
        validation: 'cpf',
      },
    }),
    cnpj: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'cnpj',
        label: this.translateFrom(schema.fieldName),
        validation: 'cnpj',
      },
    }),
    rg: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'rg',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    celular: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'phone',
        label: this.translateFrom(schema.fieldName),
        validation: 'phone',
      },
    }),
    textoGrande: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'text',
        maxlength: 300,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    snakeCase: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'text',
        maxlength: 200,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    decimalFacultativo: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'number',
        maxlength: 255,
        step: 'any',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    booleanoFacultativo: (schema): FieldComponent => ({
      is: InputCheckbox,
      bind: {
        label: this.translateFrom(schema.fieldName),
        class: 'pretty p-switch p-fill justify-center mt-8',
        labelClass: 'relative state',
      },
    }),
    dataFacultativa: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    datahoraFacultativa: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    dataAlteracao: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    preco: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'currency',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    senha: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'password',
        label: this.translateFrom(schema.fieldName),
      },
    }),
  }
}
