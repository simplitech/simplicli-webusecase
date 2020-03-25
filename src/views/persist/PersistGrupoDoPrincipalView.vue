<template>
  <div class="view">
    <header class="header">
      <h1 class="header__title">
        {{ $t('resource.GrupoDoPrincipal') }}
      </h1>
    </header>

    <section class="relative weight-1 bg-black-100">
      <await
        name="getGrupoDoPrincipal"
        class="absolute inset-0 px-4 py-8 overflow-y-auto"
      >
        <form class="container card" @submit.prevent="persist">
          <div class="mb-8 grid grid-columns lg:grid-columns-2 grid-gap-4">
            <render-schema
              v-for="field in schema.allFields"
              v-model="grupoDoPrincipal"
              :schema="schema"
              :field="field"
              :key="field"
            />
          </div>

          <await name="persistGrupoDoPrincipal" class="items-center-center">
            <button
              type="submit"
              class="h-12 px-20 btn btn--contrast bg-secondary"
            >
              {{ $t('app.submit') }}
            </button>
          </await>
        </form>
      </await>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Watch, Provide, Vue} from 'vue-property-decorator'
import {Helper} from '@/helpers'
import {$} from '@/config/framework.config'
import {GrupoDoPrincipal} from '@/model/resource/GrupoDoPrincipal'
import {InputGrupoDoPrincipalSchema} from '@/schema/resource/GrupoDoPrincipal/InputGrupoDoPrincipalSchema'

@Component
export default class PersistGrupoDoPrincipalView extends Vue {
  @Prop() id?: string

  @Provide('validator') validator = this.$validator

  schema = new InputGrupoDoPrincipalSchema()
  grupoDoPrincipal = new GrupoDoPrincipal()

  async created() {
    await this.populate()
  }

  async populate() {
    const id = Number(this.id) || null

    if (id) {
      await this.grupoDoPrincipal.getGrupoDoPrincipal(id)
    }

    $.await.done('getGrupoDoPrincipal')
  }

  async persist() {
    const isValid = await this.validator.validateAll()

    if (!isValid) {
      Helper.abort('system.error.validation')
    }

    await this.grupoDoPrincipal.persistGrupoDoPrincipal()
    await Helper.successAndPush(
      'system.success.persist',
      '/grupo-do-principal/list'
    )
  }
}
</script>
