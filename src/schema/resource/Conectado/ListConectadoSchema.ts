/**
 * List Schema of Conectado
 * @author Simpli CLI generator
 */
import {
  Helper,
  Schema,
  FieldSet,
  FieldComponent,
  Component,
} from 'simpli-web-sdk'
import {Conectado} from '@/model/resource/Conectado'

/* TODO: review generated schema */
export class ListConectadoSchema extends Schema {
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
