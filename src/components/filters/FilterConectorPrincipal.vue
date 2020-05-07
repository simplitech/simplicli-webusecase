<template>
  <div class="filter-conector-principal">
    <div class="filter-conector-principal__content">
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
import {ConectorPrincipalCollection} from '@/model/collection/ConectorPrincipalCollection'
import {FilterConectorPrincipalSchema} from '@/schema/resource/ConectorPrincipal/FilterConectorPrincipalSchema'

@Component
export default class FilterConectorPrincipal extends Vue {
  @Prop({type: Object, required: true}) collection!: ConectorPrincipalCollection

  schema = new FilterConectorPrincipalSchema()

  async created() {
    await this.populateFilterOptions()
  }

  async populateFilterOptions() {
    this.collection.resource = this.schema

    const promises: Array<Promise<any>> = [
      this.collection.resource.collectionConectado.queryAsPage(),
      this.collection.resource.collectionPrincipal.queryAsPage(),
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
.filter-conector-principal {
  @apply verti p-4 border-b border-primary;

  .filter-conector-principal__content {
    @apply mb-8 grid gap-4;

    @screen sm {
      @apply grid-cols-2;
    }

    @screen md {
      @apply grid-cols-3;
    }

    @screen lg {
      @apply grid-cols-4;
    }
  }
}
</style>
