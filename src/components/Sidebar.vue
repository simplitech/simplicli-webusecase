<template>
  <aside class="sidebar" :class="sidebarClass">
    <div class="m-0 lg:my-2 horiz items-center-center">
      <div class="sidebar__title">
        <router-link to="/" class="horiz lg:verti items-center">
          <img
            src="@/assets/img/logo.png"
            class="mr-2 h-8 lg:mb-2 lg:h-16 object-contain"
            alt="Logo"
          />
          {{ $t('app.title') }}
        </router-link>
      </div>

      <button
        @click="toggleMenu"
        class="z-10 text-white btn btn--flat btn--icon"
      >
        <i class="fa fa-bars" />
      </button>
    </div>

    <transition-expand>
      <div class="verti lg:weight-1" v-if="menu || isDesktop">
        <ul class="my-4 grid grid-columns-1 grid-gap-1">
          <li>
            <router-link to="/dashboard" @click.native="menuOff" class="pill">
              <i class="pill__icon fas fa-tachometer-alt mr-1" />
              <div class="pill__content">
                {{ $t('view.dashboard.title') }}
              </div>
            </router-link>
          </li>

          <li>
            <router-link
              to="/conector-principal/list"
              @click.native="menuOff"
              class="pill"
            >
              <i class="pill__icon fas fa-table mr-1" />
              <div class="pill__content">
                {{ $tc('resource.ConectorPrincipal', 0) }}
              </div>
            </router-link>
          </li>

          <li>
            <router-link to="/user/list" @click.native="menuOff" class="pill">
              <i class="pill__icon fas fa-table mr-1" />
              <div class="pill__content">
                {{ $tc('resource.User', 0) }}
              </div>
            </router-link>
          </li>

          <li>
            <router-link
              to="/conectado/list"
              @click.native="menuOff"
              class="pill"
            >
              <i class="pill__icon fas fa-table mr-1" />
              <div class="pill__content">
                {{ $tc('resource.Conectado', 0) }}
              </div>
            </router-link>
          </li>

          <li>
            <router-link
              to="/endereco/list"
              @click.native="menuOff"
              class="pill"
            >
              <i class="pill__icon fas fa-table mr-1" />
              <div class="pill__content">
                {{ $tc('resource.Endereco', 0) }}
              </div>
            </router-link>
          </li>

          <li>
            <router-link
              to="/grupo-do-principal/list"
              @click.native="menuOff"
              class="pill"
            >
              <i class="pill__icon fas fa-table mr-1" />
              <div class="pill__content">
                {{ $tc('resource.GrupoDoPrincipal', 0) }}
              </div>
            </router-link>
          </li>

          <li>
            <router-link to="/tag/list" @click.native="menuOff" class="pill">
              <i class="pill__icon fas fa-table mr-1" />
              <div class="pill__content">
                {{ $tc('resource.Tag', 0) }}
              </div>
            </router-link>
          </li>

          <li>
            <router-link
              to="/extensao-do-principal/list"
              @click.native="menuOff"
              class="pill"
            >
              <i class="pill__icon fas fa-table mr-1" />
              <div class="pill__content">
                {{ $tc('resource.ExtensaoDoPrincipal', 0) }}
              </div>
            </router-link>
          </li>

          <li>
            <router-link
              to="/item-do-principal/list"
              @click.native="menuOff"
              class="pill"
            >
              <i class="pill__icon fas fa-table mr-1" />
              <div class="pill__content">
                {{ $tc('resource.ItemDoPrincipal', 0) }}
              </div>
            </router-link>
          </li>

          <li>
            <router-link
              to="/principal/list"
              @click.native="menuOff"
              class="pill"
            >
              <i class="pill__icon fas fa-table mr-1" />
              <div class="pill__content">
                {{ $tc('resource.Principal', 0) }}
              </div>
            </router-link>
          </li>
        </ul>

        <div class="weight-1"></div>

        <a @click="$auth.signOut" class="pill mb-1">
          <i class="pill__icon fas fa-sign-out-alt mr-1" />
          <div class="pill__content">
            {{ $t('app.logout') }}
          </div>
        </a>

        <footer class="p-2 text-white-700 hidden md:block">
          <small><b>v</b>{{ $app.version }}</small>
        </footer>
      </div>
    </transition-expand>
  </aside>
</template>

<script lang="ts">
import {Component, Prop, Mixins} from 'vue-property-decorator'
import {MixinScreenSize} from '@/components/mixins/MixinScreenSize'

@Component
export default class Sidebar extends Mixins(MixinScreenSize) {
  menu = false

  get sidebarClass() {
    return {
      'sidebar--collapse': !this.desktopMenu,
    }
  }

  get desktopMenu() {
    return this.menu || !this.isDesktop
  }

  created() {
    if (this.isDesktop) {
      this.menu = true
    }
  }

  toggleMenu() {
    this.menu = !this.menu
  }

  menuOff() {
    if (!this.isDesktop) {
      this.menu = false
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  @apply transition fixed w-full verti overflow-y-auto p-2 bg-gray-800 shadow-box-md;

  @screen lg {
    @apply w-64 relative;
  }

  @screen print {
    @apply hidden;
  }

  &.sidebar--collapse {
    @apply overflow-hidden;

    @screen lg {
      @apply w-20;
    }

    .sidebar__title {
      @apply m-0 w-0 opacity-0;
      flex: 0 !important;
    }

    .pill {
      .pill__icon {
        @apply text-lg w-8;
        padding: 0;
        margin: auto;
      }
      .pill__content {
        @apply opacity-0 min-w-0;
      }
    }
  }

  .sidebar__title {
    @apply transition weight-1 mx-2 text-center font-light tracking-widest text-xl text-white opacity-75 select-none;
  }
}

.pill {
  @apply horiz h-8 items-center px-3 rounded overflow-hidden text-white-700 font-medium uppercase tracking-wider transition;

  &:hover {
    @apply bg-white-100 text-white-700;
  }

  .pill__icon {
    @apply transition pr-2 text-center w-0;
    min-width: 1.5rem;
  }

  .pill__content {
    @apply transition fix-truncate;
  }

  &.router-link-active {
    @apply rounded bg-secondary text-white-700 font-semibold uppercase tracking-wider transition;
  }
}
</style>
