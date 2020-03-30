/**
 * List DefaultSchema of Conectado
 * @author Simpli CLI generator
 */
import {Conectado} from '@/model/resource/Conectado'
import {DefaultSchema} from '@/schema/DefaultSchema'
import {FieldComponent, FieldSet} from '@simpli/meta-schema'
import {Render} from '@simpli/vue-render-schema'

/* TODO: review generated DefaultSchema */
export class ListConectadoSchema extends DefaultSchema {
  readonly name = 'ListConectado'

  readonly fieldSet: FieldSet<Conectado> = {
    idConectadoPk: (): FieldComponent => ({
      is: Render,
    }),
    titulo: (): FieldComponent => ({
      is: Render,
    }),
  }
}
