/**
 * Filter Schema of Conectado
 * @author Simpli CLI generator
 */
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldSet, FieldComponent} from '@simpli/meta-schema'
import * as Component from '@simpli/vue-input'
import {IConectadoCollectionResourcesHolder} from '@/model/collection/ConectadoCollection'
import {Conectado} from '@/model/resource/Conectado'

/* TODO: review generated schema */
export class FilterConectadoSchema extends DefaultSchema
  implements IConectadoCollectionResourcesHolder {
  readonly name = 'FilterConectado'

  readonly fieldSet: FieldSet<Conectado> = {}
}
