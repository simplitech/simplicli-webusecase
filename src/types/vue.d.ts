import {Env} from '@/helpers/Env'
import {App} from '@/helpers/vuex/App'
import {Auth} from '@/helpers/vuex/Auth'

declare module 'vue/types/vue' {
  interface Vue {
    $env: typeof Env

    $app: typeof App
    $auth: typeof Auth
  }
}
