/**
 * Input Schema of ExtensaoDoPrincipal
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import * as Component from '@simpli/vue-input'
import {ExtensaoDoPrincipal} from '@/model/resource/ExtensaoDoPrincipal'
import {PrincipalCollection} from '@/model/collection/PrincipalCollection'

/* TODO: review generated schema */
export class InputExtensaoDoPrincipalSchema extends DefaultSchema {
  collectionPrincipal = new PrincipalCollection().noPagination()

  readonly name = 'InputExtensaoDoPrincipal'

  readonly fieldSet: FieldSet<ExtensaoDoPrincipal> = {
    principal: (schema): FieldComponent => ({
      is: Component.InputSelect,
      bind: {
        label: this.translateFrom(schema.fieldName),
        items: this.collectionPrincipal.items,
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
