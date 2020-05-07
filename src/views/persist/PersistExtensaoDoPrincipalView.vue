<template>
  <div class="view">
    <header class="header">
      <h1 class="header__title">
        {{ $t('resource.ExtensaoDoPrincipal') }}
      </h1>
    </header>

    <section class="relative">
      <await name="getExtensaoDoPrincipal" class="px-4 py-8">
        <form class="container card w-full lg:w-160" @submit.prevent="persist">
          <div class="mb-8 grid md:grid-cols-2 gap-4">
            <render-schema
              v-for="field in schema.allFields"
              v-model="extensaoDoPrincipal"
              :schema="schema"
              :field="field"
              :key="field"
            />
          </div>

          <await name="persistExtensaoDoPrincipal" class="items-center-center">
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
import {ExtensaoDoPrincipal} from '@/model/resource/ExtensaoDoPrincipal'
import {InputExtensaoDoPrincipalSchema} from '@/schema/resource/ExtensaoDoPrincipal/InputExtensaoDoPrincipalSchema'

@Component
export default class PersistExtensaoDoPrincipalView extends Vue {
  @Prop() id?: string

  @Provide('validator') validator = this.$validator

  schema = new InputExtensaoDoPrincipalSchema()
  extensaoDoPrincipal = new ExtensaoDoPrincipal()

  async created() {
    this.populateResource()
    await this.populate()
  }

  populateResource() {
    this.schema.collectionPrincipal.queryAsPage()
  }

  async populate() {
    const id = Number(this.id) || null

    if (id) {
      await this.extensaoDoPrincipal.getExtensaoDoPrincipal(id)
    }

    this.$await.done('getExtensaoDoPrincipal')
  }

  async persist() {
    const isValid = await this.validator.validateAll()

    if (!isValid) {
      this.$toast.abort('system.error.validation')
    }

    await this.extensaoDoPrincipal.persistExtensaoDoPrincipal()
    this.$toast.success('system.success.persist')
    await this.$nav.push('/extensao-do-principal/list')
  }
}
</script>
