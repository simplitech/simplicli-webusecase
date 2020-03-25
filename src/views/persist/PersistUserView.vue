<template>
  <div class="view">
    <header class="header">
      <h1 class="header__title">
        {{ $t('resource.User') }}
      </h1>
    </header>

    <section class="relative weight-1 bg-black-100">
      <await name="getUser" class="absolute inset-0 px-4 py-8 overflow-y-auto">
        <form class="container card" @submit.prevent="persist">
          <div class="mb-8 grid grid-columns lg:grid-columns-2 grid-gap-4">
            <render-schema
              v-for="field in schema.allFields"
              v-model="user"
              :schema="schema"
              :field="field"
              :key="field"
            />
          </div>

          <await name="persistUser" class="items-center-center">
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
import {User} from '@/model/resource/User'
import {InputUserSchema} from '@/schema/resource/User/InputUserSchema'

@Component
export default class PersistUserView extends Vue {
  @Prop() id?: string

  @Provide('validator') validator = this.$validator

  schema = new InputUserSchema()
  user = new User()

  async created() {
    await this.populate()
  }

  async populate() {
    const id = Number(this.id) || null

    if (id) {
      await this.user.getUser(id)
    }

    $.await.done('getUser')
  }

  async persist() {
    const isValid = await this.validator.validateAll()

    if (!isValid) {
      Helper.abort('system.error.validation')
    }

    await this.user.persistUser()
    await Helper.successAndPush('system.success.persist', '/user/list')
  }
}
</script>
