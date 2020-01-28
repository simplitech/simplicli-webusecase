<template>
  <div class="view">
    <header class="header">
      <h1 class="header__title">
        {{ $t('resource.Endereco') }}
      </h1>
    </header>

    <section class="relative weight-1 bg-black-100">
      <await
        name="getEndereco"
        class="absolute inset-0 px-4 py-8 overflow-y-auto"
      >
        <form class="container card" @submit.prevent="persist">
          <div class="mb-8 grid grid-columns lg:grid-columns-2 grid-gap-4">
            <render-schema
              v-for="field in schema.allFields"
              v-model="endereco"
              :schema="schema"
              :field="field"
              :key="field"
            />
          </div>

          <await name="persistEndereco" class="items-center-center">
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
import {Endereco} from '@/model/resource/Endereco'
import {InputEnderecoSchema} from '@/schema/resource/Endereco/InputEnderecoSchema'

@Component
export default class PersistEnderecoView extends Vue {
  @Prop() id?: string

  @Provide('validator') validator = this.$validator

  schema = new InputEnderecoSchema()
  endereco = new Endereco()

  async created() {
    await this.populate()
  }

  async populate() {
    const id = Number(this.id) || null

    if (id) {
      await this.endereco.getEndereco(id)
    }

    $.await.done('getEndereco')
  }

  async persist() {
    const isValid = await this.validator.validateAll()

    if (!isValid) {
      Helper.abort('system.error.validation')
    }

    await this.endereco.persistEndereco()
    await Helper.successAndPush('system.success.persist', '/endereco/list')
  }
}
</script>