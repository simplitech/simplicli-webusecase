/**
 * List Schema of Conectado
 * @author Simpli CLI generator
 */
import {$} from '@/facade'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import * as Component from '@simpli/vue-render-schema'
import {Conectado} from '@/model/resource/Conectado'

/* TODO: review generated schema */
export class ListConectadoSchema extends DefaultSchema {
  readonly name = 'ListConectado'

  readonly fieldSet: FieldSet<Conectado> = {
    idConectadoPk: (): FieldComponent => ({
      is: Component.Render,
    }),
    titulo: (): FieldComponent => ({
      is: Component.Render,
    }),
  }
}
