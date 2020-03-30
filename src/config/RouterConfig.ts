/**
 * @file
 * Router Configuration
 * Used in library: vue-router
 *
 * Use this file to register the App routes
 * See https://router.vuejs.org/guide/#javascript
 * This configuration will be set in @/app/Setup.ts
 */
import {RouterOptions} from 'vue-router/types/router'

import DefaultLayout from '@/views/layouts/DefaultLayout.vue'
import DashboardView from '@/views/DashboardView.vue'

import SignInView from '@/views/auth/SignInView.vue'
import RecoverPasswordByMailView from '@/views/auth/RecoverPasswordByMailView.vue'
import ResetPasswordView from '@/views/auth/ResetPasswordView.vue'

import ListConectorPrincipalView from '@/views/list/ListConectorPrincipalView.vue'
import ListUserView from '@/views/list/ListUserView.vue'
import ListConectadoView from '@/views/list/ListConectadoView.vue'
import ListEnderecoView from '@/views/list/ListEnderecoView.vue'
import ListGrupoDoPrincipalView from '@/views/list/ListGrupoDoPrincipalView.vue'
import ListTagView from '@/views/list/ListTagView.vue'
import ListExtensaoDoPrincipalView from '@/views/list/ListExtensaoDoPrincipalView.vue'
import ListItemDoPrincipalView from '@/views/list/ListItemDoPrincipalView.vue'
import ListPrincipalView from '@/views/list/ListPrincipalView.vue'
import PersistConectorPrincipalView from '@/views/persist/PersistConectorPrincipalView.vue'
import PersistUserView from '@/views/persist/PersistUserView.vue'
import PersistConectadoView from '@/views/persist/PersistConectadoView.vue'
import PersistEnderecoView from '@/views/persist/PersistEnderecoView.vue'
import PersistGrupoDoPrincipalView from '@/views/persist/PersistGrupoDoPrincipalView.vue'
import PersistTagView from '@/views/persist/PersistTagView.vue'
import PersistExtensaoDoPrincipalView from '@/views/persist/PersistExtensaoDoPrincipalView.vue'
import PersistItemDoPrincipalView from '@/views/persist/PersistItemDoPrincipalView.vue'
import PersistPrincipalView from '@/views/persist/PersistPrincipalView.vue'

/**
 * VUE Router Configuration
 */
export class RouterConfig implements RouterOptions {
  readonly mode = 'history'

  readonly routes = [
    {
      path: '/sign-in',
      name: 'signIn',
      component: SignInView,
    },
    {
      path: '/password/recover',
      name: 'recoverPasswordByMail',
      component: RecoverPasswordByMailView,
    },
    {
      path: '/password/reset/:hash',
      name: 'resetPassword',
      component: ResetPasswordView,
      props: true,
    },
    {
      path: '/dashboard',
      component: DefaultLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: DashboardView,
        },

        {
          path: '/conector-principal/list',
          component: ListConectorPrincipalView,
        },
        {
          path: '/conector-principal/new',
          component: PersistConectorPrincipalView,
        },
        {
          path: '/conector-principal/edit/:id1/:id2',
          name: 'editConectorPrincipal',
          component: PersistConectorPrincipalView,
          props: true,
        },

        {path: '/user/list', component: ListUserView},
        {path: '/user/new', component: PersistUserView},
        {
          path: '/user/edit/:id',
          name: 'editUser',
          component: PersistUserView,
          props: true,
        },

        {path: '/conectado/list', component: ListConectadoView},
        {path: '/conectado/new', component: PersistConectadoView},
        {
          path: '/conectado/edit/:id',
          name: 'editConectado',
          component: PersistConectadoView,
          props: true,
        },

        {path: '/endereco/list', component: ListEnderecoView},
        {path: '/endereco/new', component: PersistEnderecoView},
        {
          path: '/endereco/edit/:id',
          name: 'editEndereco',
          component: PersistEnderecoView,
          props: true,
        },

        {
          path: '/grupo-do-principal/list',
          component: ListGrupoDoPrincipalView,
        },
        {
          path: '/grupo-do-principal/new',
          component: PersistGrupoDoPrincipalView,
        },
        {
          path: '/grupo-do-principal/edit/:id',
          name: 'editGrupoDoPrincipal',
          component: PersistGrupoDoPrincipalView,
          props: true,
        },

        {path: '/tag/list', component: ListTagView},
        {path: '/tag/new', component: PersistTagView},
        {
          path: '/tag/edit/:id',
          name: 'editTag',
          component: PersistTagView,
          props: true,
        },

        {
          path: '/extensao-do-principal/list',
          component: ListExtensaoDoPrincipalView,
        },
        {
          path: '/extensao-do-principal/new',
          component: PersistExtensaoDoPrincipalView,
        },
        {
          path: '/extensao-do-principal/edit/:id',
          name: 'editExtensaoDoPrincipal',
          component: PersistExtensaoDoPrincipalView,
          props: true,
        },

        {path: '/item-do-principal/list', component: ListItemDoPrincipalView},
        {
          path: '/item-do-principal/new',
          component: PersistItemDoPrincipalView,
        },
        {
          path: '/item-do-principal/edit/:id',
          name: 'editItemDoPrincipal',
          component: PersistItemDoPrincipalView,
          props: true,
        },

        {path: '/principal/list', component: ListPrincipalView},
        {path: '/principal/new', component: PersistPrincipalView},
        {
          path: '/principal/edit/:id',
          name: 'editPrincipal',
          component: PersistPrincipalView,
          props: true,
        },
      ],
    },
    {path: '/', redirect: '/sign-in'},
    {path: '*', redirect: '/dashboard'},
  ]
}
