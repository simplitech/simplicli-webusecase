import {root, store} from '@/store'
import {Currency, Lang} from '@/enums'

const {read, dispatch, commit} = root.accessors
const {getters, actions, mutations} = root

export abstract class App {
  static get version() {
    return read(getters.version)(store)
  }

  static get language() {
    return read(getters.language)(store)
  }

  static get currency() {
    return read(getters.currency)(store)
  }

  static setLang(lang: Lang) {
    return dispatch(actions.setLang)(store, lang)
  }

  static setCurrency(currency: Currency) {
    return dispatch(actions.setCurrency)(store, currency)
  }
}
