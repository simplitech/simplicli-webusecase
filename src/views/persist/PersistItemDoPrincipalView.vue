<template>
  <div class="view">
    <header class="header">
      <h1 class="header__title">
        {{ $t('resource.ItemDoPrincipal') }}
      </h1>
    </header>

    <section class="relative weight-1 bg-black-100">
      <await
        name="getItemDoPrincipal"
        class="absolute inset-0 px-4 py-8 overflow-y-auto"
      >
        <form class="container card" @submit.prevent="persist">
          <div class="mb-8 grid grid-columns lg:grid-columns-2 grid-gap-4">
            <render-schema
              v-for="field in schema.allFields"
              v-model="itemDoPrincipal"
              :schema="schema"
              :field="field"
              :key="field"
            />
          </div>

          <await name="persistItemDoPrincipal" class="items-center-center">
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
import {ItemDoPrincipal} from '@/model/resource/ItemDoPrincipal'
import {InputItemDoPrincipalSchema} from '@/schema/resource/ItemDoPrincipal/InputItemDoPrincipalSchema'

@Component
export default class PersistItemDoPrincipalView extends Vue {
  @Prop() id?: string

  @Provide('validator') validator = this.$validator

  schema = new InputItemDoPrincipalSchema()
  itemDoPrincipal = new ItemDoPrincipal()

  async created() {
    this.populateResource()
    await this.populate()
  }

  populateResource() {
    this.schema.collectionPrincipal.listPrincipal()
  }

  async populate() {
    const id = Number(this.id) || null

    if (id) {
      await this.itemDoPrincipal.getItemDoPrincipal(id)
    }

    $.await.done('getItemDoPrincipal')
  }

  async persist() {
    const isValid = await this.validator.validateAll()

    if (!isValid) {
      Helper.abort('system.error.validation')
    }

    await this.itemDoPrincipal.persistItemDoPrincipal()
    await Helper.successAndPush(
      'system.success.persist',
      '/item-do-principal/list'
    )
  }
}
</script>
