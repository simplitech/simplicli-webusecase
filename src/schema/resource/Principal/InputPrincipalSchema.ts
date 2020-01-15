/**
 * Input Schema of Principal
 * @author Simpli CLI generator
 */
import {Schema, FieldSet, FieldComponent, Component} from 'simpli-web-sdk'
import {Principal} from '@/model/resource/Principal'
import {GrupoDoPrincipalCollection} from '@/model/collection/GrupoDoPrincipalCollection'
import {TagCollection} from '@/model/collection/TagCollection'

/* TODO: review generated schema */
export class InputPrincipalSchema extends Schema {
  collectionGrupoDoPrincipal = new GrupoDoPrincipalCollection().noPagination()
  collectionTag = new TagCollection().noPagination()

  readonly name = 'InputPrincipal'

  readonly fieldSet: FieldSet<Principal> = {
    grupoDoPrincipal1: (schema): FieldComponent => ({
      is: Component.InputSelect,
      bind: {
        label: this.translateFrom(schema.fieldName),
        items: this.collectionGrupoDoPrincipal.all(),
      },
    }),
    grupoDoPrincipal2: (schema): FieldComponent => ({
      is: Component.InputSelect,
      bind: {
        label: this.translateFrom(schema.fieldName),
        items: this.collectionGrupoDoPrincipal.all(),
      },
    }),
    tagPrincipal: (schema): FieldComponent => ({
      is: Component.InputSelect,
      bind: {
        label: this.translateFrom(schema.fieldName),
        items: this.collectionTag.all(),
      },
    }),
    textoObrigatorio: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'text',
        maxlength: 160,
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required',
      },
    }),
    inteiroObrigatorio: (schema): FieldComponent => ({
      is: Component.InputText,
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
      is: Component.InputText,
      bind: {
        type: 'text',
        maxlength: 40,
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required',
      },
    }),
    decimalObrigatorio: (schema): FieldComponent => ({
      is: Component.InputText,
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
      is: Component.InputCheckbox,
      bind: {
        label: this.translateFrom(schema.fieldName),
        class: 'pretty p-switch p-fill justify-center mt-8',
        labelClass: 'relative state',
      },
    }),
    dataObrigatoria: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required',
      },
    }),
    datahoraObrigatoria: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required',
      },
    }),
    ativo: (schema): FieldComponent => ({
      is: Component.InputCheckbox,
      bind: {
        label: this.translateFrom(schema.fieldName),
        class: 'pretty p-switch p-fill justify-center mt-8',
        labelClass: 'relative state',
      },
    }),
    dataCriacao: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required',
      },
    }),
    textoFacultativo: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'text',
        maxlength: 45,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    inteiroFacultativo: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'number',
        maxlength: 11,
        step: 1,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    email: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'email',
        label: this.translateFrom(schema.fieldName),
        validation: 'email',
      },
    }),
    urlImagem: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'text',
        maxlength: 200,
        label: this.translateFrom(schema.fieldName),
        validation: 'url',
      },
    }),
    url: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'text',
        maxlength: 200,
        label: this.translateFrom(schema.fieldName),
        validation: 'url',
      },
    }),
    nome: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'text',
        maxlength: 45,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    titulo: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'text',
        maxlength: 45,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    cpf: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'cpf',
        label: this.translateFrom(schema.fieldName),
        validation: 'cpf',
      },
    }),
    cnpj: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'cnpj',
        label: this.translateFrom(schema.fieldName),
        validation: 'cnpj',
      },
    }),
    rg: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'rg',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    celular: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'phone',
        label: this.translateFrom(schema.fieldName),
        validation: 'phone',
      },
    }),
    textoGrande: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'text',
        maxlength: 300,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    snakeCase: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'text',
        maxlength: 200,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    decimalFacultativo: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'number',
        maxlength: 255,
        step: 'any',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    booleanoFacultativo: (schema): FieldComponent => ({
      is: Component.InputCheckbox,
      bind: {
        label: this.translateFrom(schema.fieldName),
        class: 'pretty p-switch p-fill justify-center mt-8',
        labelClass: 'relative state',
      },
    }),
    dataFacultativa: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    datahoraFacultativa: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    dataAlteracao: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    preco: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'currency',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    senha: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'password',
        label: this.translateFrom(schema.fieldName),
      },
    }),
  }
}
