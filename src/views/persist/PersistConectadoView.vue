<template>
  <div class="view">
    <header class="header">
      <h1 class="header__title">
        {{ $t('resource.Conectado') }}
      </h1>
    </header>

    <section class="relative weight-1 bg-black-100">
      <await
        name="getConectado"
        class="absolute inset-0 px-4 py-8 overflow-y-auto"
      >
        <form class="container card" @submit.prevent="persist">
          <div class="mb-8 grid grid-columns lg:grid-columns-2 grid-gap-4">
            <render-schema
              v-for="field in schema.allFields"
              v-model="conectado"
              :schema="schema"
              :field="field"
              :key="field"
            />
          </div>

          <await name="persistConectado" class="items-center-center">
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
import {Conectado} from '@/model/resource/Conectado'
import {InputConectadoSchema} from '@/schema/resource/Conectado/InputConectadoSchema'

@Component
export default class PersistConectadoView extends Vue {
  @Prop() id?: string

  @Provide('validator') validator = this.$validator

  schema = new InputConectadoSchema()
  conectado = new Conectado()

  async created() {
    await this.populate()
  }

  async populate() {
    const id = Number(this.id) || null

    if (id) {
      await this.conectado.getConectado(id)
    }

    this.$await.done('getConectado')
  }

  async persist() {
    const isValid = await this.validator.validateAll()

    if (!isValid) {
      this.$toast.abort('system.error.validation')
    }

    this.$toast.success('system.success.persist')
    await this.$nav.push('/conectado/list')
  }
}
</script>
