<template>
  <div>
    <transition name="blur" mode="out-in">
      <router-view />
    </transition>

    <modal-dialog />

    <vue-snotify :class="$config.toast.style" />
  </div>
</template>

<script lang="ts">
import {MetaInfo} from 'vue-meta'
import {Component, Vue} from 'vue-property-decorator'
import ModalDialog from '@/components/modals/ModalDialog.vue'

Component.registerHooks(['metaInfo'])

@Component({
  components: {ModalDialog},
})
export default class App extends Vue {
  metaInfo(): MetaInfo {
    return {
      title: this.$t('app.title') as string,
      titleTemplate: `%s | ${this.$t('app.title')}`,
    }
  }

  created() {
    this.$auth.populateToken()
  }
}
</script>

<style lang="scss">
@import './scss/app.scss';
</style>
