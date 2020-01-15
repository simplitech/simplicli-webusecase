<template>
  <div class="view">
    <header class="header">
      <h1 class="header__title">
        {{ $t('resource.ConectorPrincipal') }}
      </h1>
    </header>

    <section class="relative weight-1 bg-black-100">
      <await
        name="getConectorPrincipal"
        class="absolute inset-0 px-4 py-8 overflow-y-auto"
      >
        <form class="container card" @submit.prevent="persist">
          <div class="mb-8 grid grid-columns lg:grid-columns-2 grid-gap-4">
            <render-schema
              v-for="field in schema.allFields"
              v-model="conectorPrincipal"
              :schema="schema"
              :field="field"
              :key="field"
            />
          </div>

          <await name="persistConectorPrincipal" class="items-center-center">
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
import {$, Helper} from 'simpli-web-sdk'
import {ConectorPrincipal} from '@/model/resource/ConectorPrincipal'
import {InputConectorPrincipalSchema} from '@/schema/resource/ConectorPrincipal/InputConectorPrincipalSchema'

@Component
export default class PersistConectorPrincipalView extends Vue {
  @Prop() id1?: string
  @Prop() id2?: string

  @Provide('validator') validator = this.$validator

  schema = new InputConectorPrincipalSchema()
  conectorPrincipal = new ConectorPrincipal()

  async created() {
    this.populateResource()
    await this.populate()
  }

  populateResource() {
    this.schema.collectionConectado.listConectado()
    this.schema.collectionPrincipal.listPrincipal()
  }

  async populate() {
    const id1 = Number(this.id1) || null
    const id2 = Number(this.id2) || null

    if (id1 && id2) {
      await this.conectorPrincipal.getConectorPrincipal(id1, id2)
    }

    $.await.done('getConectorPrincipal')
  }

  async persist() {
    const isValid = await this.validator.validateAll()

    if (!isValid) {
      Helper.abort('system.error.validation')
    }

    await this.conectorPrincipal.persistConectorPrincipal()
    await Helper.successAndPush(
      'system.success.persist',
      '/conector-principal/list'
    )
  }
}
</script>
