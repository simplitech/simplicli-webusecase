<template>
  <div class="principal-filter-component">
    <div class="principal-filter-component__content">
      <div v-for="field in schema.allFields" :key="field">
        <render-schema v-model="collection" :schema="schema" :field="field" />
      </div>
    </div>

    <await name="softQuery" spinner="MoonLoader" class="self-center">
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

    await this.$await.run('softQuery', () => Promise.all(promises))
  }

  async doFilter() {
    this.$emit('submit')
    await this.$await.run('softQuery', () => this.collection.queryAsPage())
  }
}
</script>

<style lang="scss" scoped>
.principal-filter-component {
  @apply verti p-4 border-b border-primary;

  .principal-filter-component__content {
    @apply mb-4 grid grid-gap-4;

    @screen sm {
      @apply grid-columns-2;
    }

    @screen md {
      @apply grid-columns-3;
    }

    @screen lg {
      @apply grid-columns-5;
    }
  }
}
</style>
