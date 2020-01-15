/**
 * Input Schema of ExtensaoDoPrincipal
 * @author Simpli CLI generator
 */
import {Schema, FieldSet, FieldComponent, Component} from 'simpli-web-sdk'
import {ExtensaoDoPrincipal} from '@/model/resource/ExtensaoDoPrincipal'
import {PrincipalCollection} from '@/model/collection/PrincipalCollection'

/* TODO: review generated schema */
export class InputExtensaoDoPrincipalSchema extends Schema {
  collectionPrincipal = new PrincipalCollection().noPagination()

  readonly name = 'InputExtensaoDoPrincipal'

  readonly fieldSet: FieldSet<ExtensaoDoPrincipal> = {
    principal: (schema): FieldComponent => ({
      is: Component.InputSelect,
      bind: {
        label: this.translateFrom(schema.fieldName),
        items: this.collectionPrincipal.all(),
      },
    }),
    titulo: (schema): FieldComponent => ({
      is: Component.InputText,
      bind: {
        type: 'text',
        maxlength: 45,
        label: this.translateFrom(schema.fieldName),
        required: true,
        validation: 'required',
      },
    }),
  }
}
