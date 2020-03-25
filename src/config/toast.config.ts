import {
  SnotifyGlobalConfig,
  SnotifyPosition,
  SnotifyToastConfig,
} from 'vue-snotify'

export abstract class ToastConfig {
  static ToastDefaultStyle:
    | 'vue-notify--material'
    | 'vue-notify--simple'
    | 'vue-notify--dark' = 'vue-notify--material'

  static ToastGlobalConfig: SnotifyGlobalConfig = {
    newOnTop: true, // true = stack, false = queue
    maxOnScreen: 5,
    maxAtPosition: 5,
  }

  static ToastDefaultConfig: SnotifyToastConfig = {
    timeout: 5000, // 0 is infinite
    position: SnotifyPosition.rightBottom,
    showProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    titleMaxLength: 31,
    bodyMaxLength: 127,
    backdrop: -1,
  }
}
