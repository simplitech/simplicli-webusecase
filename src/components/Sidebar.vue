<template>
  <aside class="sidebar">
    <div class="horiz items-center-center">
      <img src="@/assets/img/logo.png" alt="Logo" class="w-8" />

      <div class="weight-1 mx-2 font-bold text-xl text-white opacity-75">
        {{ $t('app.title') }}
      </div>

      <a
        class="icon icon-menu text-primary p-2 lg:hidden"
        @click="toggleMenu"
      />
    </div>

    <transition-expand>
      <div class="verti lg:weight-1" v-if="menu || isDesktop">
        <ul class="my-4 grid grid-columns-1 grid-gap-1">
          <li>
            <router-link
              to="/dashboard"
              @click.native="menuOff"
              class="pill horiz h-8 items-center px-3"
            >
              <i class="fas fa-tachometer-alt mr-1" />
              {{ $t('view.dashboard.title') }}
            </router-link>
          </li>

          <li>
            <router-link
              to="/conector-principal/list"
              @click.native="menuOff"
              class="pill horiz h-8 items-center px-3"
            >
              <i class="fas fa-table mr-1" />
              {{ $t('resource.ConectorPrincipal') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/user/list"
              @click.native="menuOff"
              class="pill horiz h-8 items-center px-3"
            >
              <i class="fas fa-table mr-1" />
              {{ $t('resource.User') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/conectado/list"
              @click.native="menuOff"
              class="pill horiz h-8 items-center px-3"
            >
              <i class="fas fa-table mr-1" />
              {{ $t('resource.Conectado') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/endereco/list"
              @click.native="menuOff"
              class="pill horiz h-8 items-center px-3"
            >
              <i class="fas fa-table mr-1" />
              {{ $t('resource.Endereco') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/grupo-do-principal/list"
              @click.native="menuOff"
              class="pill horiz h-8 items-center px-3"
            >
              <i class="fas fa-table mr-1" />
              {{ $t('resource.GrupoDoPrincipal') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/tag/list"
              @click.native="menuOff"
              class="pill horiz h-8 items-center px-3"
            >
              <i class="fas fa-table mr-1" />
              {{ $t('resource.Tag') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/extensao-do-principal/list"
              @click.native="menuOff"
              class="pill horiz h-8 items-center px-3"
            >
              <i class="fas fa-table mr-1" />
              {{ $t('resource.ExtensaoDoPrincipal') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/item-do-principal/list"
              @click.native="menuOff"
              class="pill horiz h-8 items-center px-3"
            >
              <i class="fas fa-table mr-1" />
              {{ $t('resource.ItemDoPrincipal') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/principal/list"
              @click.native="menuOff"
              class="pill horiz h-8 items-center px-3"
            >
              <i class="fas fa-table mr-1" />
              {{ $t('resource.Principal') }}
            </router-link>
          </li>
        </ul>

        <div class="weight-1"></div>

        <a
          @click="$auth.signOut()"
          class="pill horiz h-8 items-center px-3 mb-1"
        >
          <i class="fas fa-sign-out-alt mr-1" />
          {{ $t('app.logout') }}
        </a>

        <footer class="p-2 text-white-700 hidden md:block">
          <small>
            <b>Version</b>
            {{ $app.version }}
          </small>
        </footer>
      </div>
    </transition-expand>
  </aside>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class Sidebar extends Vue {
  menu = false
  screenWidth = window.innerWidth

  get isDesktop() {
    return this.screenWidth >= Number(process.env.VUE_APP_LARGE_SCREEN)
  }

  created() {
    window.addEventListener('resize', this.resizeEvent)
  }

  destroyed() {
    window.removeEventListener('resize', this.resizeEvent)
  }

  resizeEvent() {
    this.screenWidth = window.innerWidth
  }

  toggleMenu() {
    this.menu = !this.menu
  }

  menuOff() {
    this.menu = false
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  @apply verti overflow-y-auto p-2 bg-gray-800 shadow-box-md;
}

.translucent-pill {
  @apply rounded-full bg-white-200 text-white-500 font-semibold uppercase tracking-wider transition;
  &:hover {
    @apply bg-white-100 text-white-700;
  }
}

.invisible-pill {
  @apply rounded-full text-white-500 font-semibold uppercase tracking-wider transition;
  &:hover {
    @apply bg-white-100 text-white-700;
  }
}

.pill {
  @extend .invisible-pill;

  &.router-link-active {
    @extend .translucent-pill;
  }
}
</style>
