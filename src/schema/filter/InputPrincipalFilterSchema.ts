/**
 * Input Schema of Principal
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import {InputCheckbox, InputSelect, InputText} from '@simpli/vue-input'
import {Principal} from '@/model/resource/Principal'
import {GrupoDoPrincipalCollection} from '@/model/collection/GrupoDoPrincipalCollection'
import {IPrincipalCollectionResourcesHolder} from '@/model/collection/PrincipalCollection'

/* TODO: review generated schema */
export class InputPrincipalFilterSchema extends DefaultSchema
  implements IPrincipalCollectionResourcesHolder {
  collectionGrupoDoPrincipal = new GrupoDoPrincipalCollection().noPagination()

  readonly name = 'InputPrincipalFilter'

  readonly fieldSet: FieldSet<Principal> = {
    grupoDoPrincipal1: (schema): FieldComponent => ({
      is: InputSelect,
      bind: {
        items: this.collectionGrupoDoPrincipal.items,
        multiple: true,
        closeOnSelect: false,
        clearOnSelect: false,
        preserveSearch: true,
        label: this.translateFrom(schema.fieldName),
        trackBy: 'idGrupoPrincipalPk',
        preselectFirst: true,
      },
    }),
    grupoDoPrincipal2: (schema): FieldComponent => ({
      is: InputSelect,
      bind: {
        items: this.collectionGrupoDoPrincipal.items,
        multiple: true,
        closeOnSelect: false,
        clearOnSelect: false,
        preserveSearch: true,
        label: this.translateFrom(schema.fieldName),
        trackBy: 'idGrupoPrincipalPk',
        preselectFirst: true,
      },
    }),
    minInteiroObrigatorio: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'number',
        maxlength: 11,
        step: 1,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    maxInteiroObrigatorio: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'number',
        maxlength: 11,
        step: 1,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    minDecimalObrigatorio: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'number',
        maxlength: 255,
        step: 'any',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    maxDecimalObrigatorio: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'number',
        maxlength: 255,
        step: 'any',
        label: this.translateFrom(schema.fieldName),
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
    minDataObrigatoria: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    maxDataObrigatoria: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    minDatahoraObrigatoria: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    maxDatahoraObrigatoria: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    minDataCriacao: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    maxDataCriacao: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    minInteiroFacultativo: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'number',
        maxlength: 11,
        step: 1,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    maxInteiroFacultativo: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'number',
        maxlength: 11,
        step: 1,
        label: this.translateFrom(schema.fieldName),
      },
    }),
    minDecimalFacultativo: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'number',
        maxlength: 255,
        step: 'any',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    maxDecimalFacultativo: (schema): FieldComponent => ({
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
    minDataFacultativa: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    maxDataFacultativa: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    minDatahoraFacultativa: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    maxDatahoraFacultativa: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    minDataAlteracao: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    maxDataAlteracao: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'mask',
        maskPreset: 'datetime',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    minPreco: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'currency',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    maxPreco: (schema): FieldComponent => ({
      is: InputText,
      bind: {
        type: 'currency',
        label: this.translateFrom(schema.fieldName),
      },
    }),
  }
}
