<template>
  <div class="verti p-4 border-b border-primary">
    <div
      class="mb-4 grid grid-columns-2 md:grid-columns-4 lg:grid-columns-5 grid-gap-4"
    >
      <div v-for="field in schema.allFields" :key="field">
        <render-schema v-model="collection" :schema="schema" :field="field" />
      </div>
    </div>
    <await name="adapQuery" spinner="MoonLoader" class="self-center">
      <button @click="doFilter" class="lg:w-40 btn btn--contrast bg-secondary">
        {{ $t('app.filter') }}
      </button>
    </await>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Watch, Vue} from 'vue-property-decorator'
import {PrincipalCollection} from '@/model/collection/PrincipalCollection'
import {InputPrincipalFilterSchema} from '@/schema/filter/InputPrincipalFilterSchema'

@Component
export default class PrincipalFilterComponent extends Vue {
  @Prop({type: Object, required: true}) collection!: PrincipalCollection

  schema = new InputPrincipalFilterSchema()

  async created() {
    await this.populateFilterOptions()
  }

  async populateFilterOptions() {
    this.collection.resource = this.schema

    const promises: Array<Promise<any>> = [
      this.collection.resource.collectionGrupoDoPrincipal.queryAsPage(),
    ]

    await this.$await.run('adapQuery', () => Promise.all(promises))
  }

  async doFilter() {
    this.$emit('submit')
    await this.$await.run('adapQuery', () => this.collection.queryAsPage())
  }
}
</script>
