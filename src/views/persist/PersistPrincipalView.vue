<template>
  <div class="view">
    <header class="header">
      <h1 class="header__title">
        {{ $t('resource.Principal') }}
      </h1>
    </header>

    <section class="relative weight-1 bg-black-100">
      <await
        name="getPrincipal"
        class="absolute inset-0 px-4 py-8 overflow-y-auto"
      >
        <form class="container card" @submit.prevent="persist">
          <div class="mb-8 grid grid-columns lg:grid-columns-2 grid-gap-4">
            <render-schema
              v-for="field in schema.allFields"
              v-model="principal"
              :schema="schema"
              :field="field"
              :key="field"
            />
          </div>

          <await name="persistPrincipal" class="items-center-center">
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
import {Principal} from '@/model/resource/Principal'
import {InputPrincipalSchema} from '@/schema/resource/Principal/InputPrincipalSchema'

@Component
export default class PersistPrincipalView extends Vue {
  @Prop() id?: string

  @Provide('validator') validator = this.$validator

  schema = new InputPrincipalSchema()
  principal = new Principal()

  async created() {
    this.populateResource()
    await this.populate()
  }

  populateResource() {
    this.schema.collectionGrupoDoPrincipal.listGrupoDoPrincipal()
  }

  async populate() {
    const id = Number(this.id) || null

    if (id) {
      await this.principal.getPrincipal(id)
    }

    this.$await.done('getPrincipal')
  }

  async persist() {
    const isValid = await this.validator.validateAll()

    if (!isValid) {
      this.$toast.abort('system.error.validation')
    }

    await this.principal.persistPrincipal()

    this.$toast.success('system.success.persist')
    await this.$nav.push('/principal/list')
  }
}
</script>
