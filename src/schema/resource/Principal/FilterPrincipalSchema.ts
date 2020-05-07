/**
 * Filter Schema of Principal
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import * as Component from '@simpli/vue-input'
import {IPrincipalCollectionResourcesHolder} from '@/model/collection/PrincipalCollection'
import {Principal} from '@/model/resource/Principal'
import {GrupoDoPrincipalCollection} from '@/model/collection/GrupoDoPrincipalCollection'
import {TagCollection} from '@/model/collection/TagCollection'

/* TODO: review generated schema */
export class FilterPrincipalSchema extends DefaultSchema
  implements IPrincipalCollectionResourcesHolder {
  collectionGrupoDoPrincipal = new GrupoDoPrincipalCollection().noPagination()
  collectionTag = new TagCollection().noPagination()

  readonly name = 'FilterPrincipal'

  readonly fieldSet: FieldSet<Principal> = {
    grupoDoPrincipal: (schema): FieldComponent => ({
      is: Component.InputSelect,
      bind: {
        items: this.collectionGrupoDoPrincipal.items,
        multiple: true,
        closeOnSelect: false,
        preserveSearch: true,
        label: this.translateFrom(schema.fieldName),
        trackBy: '$id',
        preselectFirst: true,
      },
    }),
    grupoDoPrincipalFacultativo: (schema): FieldComponent => ({
      is: Component.InputSelect,
      bind: {
        items: this.collectionGrupoDoPrincipal.items,
        multiple: true,
        closeOnSelect: false,
        preserveSearch: true,
        label: this.translateFrom(schema.fieldName),
        trackBy: '$id',
        preselectFirst: true,
      },
    }),
    startDataObrigatoria: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'date',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    endDataObrigatoria: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'date',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    startDataFacultativa: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'date',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    endDataFacultativa: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'date',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    startDatahoraObrigatoria: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'date',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    endDatahoraObrigatoria: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'date',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    startDatahoraFacultativa: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'date',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    endDatahoraFacultativa: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'date',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    startDataCriacao: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'date',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    endDataCriacao: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'date',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    startDataAlteracao: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'date',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    endDataAlteracao: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'mask',
        maskPreset: 'date',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    minDecimalObrigatorio: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'number',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    maxDecimalObrigatorio: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'number',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    minDecimalFacultativo: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'number',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    maxDecimalFacultativo: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'number',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    minInteiroObrigatorio: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'number',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    maxInteiroObrigatorio: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'number',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    minInteiroFacultativo: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'number',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    maxInteiroFacultativo: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'number',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    minPreco: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'number',
        label: this.translateFrom(schema.fieldName),
      },
    }),
    maxPreco: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'number',
        label: this.translateFrom(schema.fieldName),
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
    booleanoFacultativo: (schema): FieldComponent => ({
      is: Component.InputCheckbox,
      bind: {
        label: this.translateFrom(schema.fieldName),
        class: 'pretty p-switch p-fill justify-center mt-8',
        labelClass: 'relative state',
      },
    }),
  }
}
