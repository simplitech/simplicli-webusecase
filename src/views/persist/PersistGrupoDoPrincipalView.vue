<template>
  <div class="view">
    <header class="header">
      <h1 class="header__title">
        {{ $t('resource.GrupoDoPrincipal') }}
      </h1>
    </header>

    <section class="relative">
      <await name="getGrupoDoPrincipal" class="px-4 py-8">
        <form class="container card w-full lg:w-160" @submit.prevent="persist">
          <div class="mb-8 grid md:grid-cols-2 gap-4">
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

    this.$await.done('getGrupoDoPrincipal')
  }

  async persist() {
    const isValid = await this.validator.validateAll()

    if (!isValid) {
      this.$toast.abort('system.error.validation')
    }

    await this.grupoDoPrincipal.persistGrupoDoPrincipal()
    this.$toast.success('system.success.persist')
    await this.$nav.push('/grupo-do-principal/list')
  }
}
</script>
