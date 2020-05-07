<template>
  <div class="view">
    <header class="header">
      <h1 class="header__title">
        {{ $t('resource.ConectorPrincipal') }}
      </h1>

      <div class="header__items">
        <adap-searchfield
          :collection="collection"
          :placeholder="$t('app.search')"
          class="input h-8"
        />

        <filter-toggle v-model="filterOpen" />

        <await name="listConectorPrincipal" :spinnerScale="0.8" class="w-12" />

        <div class="weight-1" />

        <span v-if="!collection.isEmpty()">
          {{ $t('app.totalLines', {total: collection.total}) }}
        </span>

        <await name="listExportConectorPrincipal" :spinnerScale="0.8">
          <button @click="downloadXlsx" class="btn btn--solid">
            {{ $t('app.downloadXlsx') }}
          </button>
        </await>

        <router-link
          to="/conector-principal/new"
          class="btn btn--contrast bg-secondary"
        >
          {{ $t('app.add') }}
        </router-link>
      </div>

      <transition-expand>
        <div v-show="filterOpen" class="z-10">
          <filter-conector-principal :collection="collection" />
        </div>
      </transition-expand>
    </header>

    <section>
      <await
        name="hardQuery"
        class="relative verti items-center"
        effect="fade-up"
        spinner="MoonLoader"
        spinnerPadding="20px"
      >
        <template v-if="collection.isEmpty()">
          <div
            class="mt-10 uppercase text-center text-black-600 text-lg font-light"
          >
            {{ $t('app.noDataToShow') }}
          </div>
        </template>

        <template v-else>
          <div class="w-full overflow-x-auto">
            <table class="table">
              <thead>
                <tr>
                  <th />

                  <th v-for="(value, key) in schema.header" :key="key">
                    <adap-orderby
                      :collection="collection"
                      :name="key"
                      :label="value"
                    />
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(item, i) in collection.items" :key="item.$id">
                  <td>
                    <div class="horiz children:mx-1">
                      <a
                        @click="goToPersistView(item)"
                        class="btn btn--flat btn--icon"
                      >
                        <i class="far fa-edit" />
                      </a>
                    </div>
                  </td>

                  <td v-for="field in schema.allFields" :key="field">
                    <render-schema
                      v-model="collection.items[i]"
                      :schema="schema"
                      :field="field"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="fixed z-10 bottom-4">
            <adap-pagination :collection="collection" class="m-auto" />
          </div>
        </template>

        <await name="softQuery" class="z-20 await__spinner--screen-light" />
      </await>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Watch, Mixins} from 'vue-property-decorator'
import {MixinRouteMatch} from '@/components/mixins/MixinRouteMatch'
import FilterToggle from '@/components/FilterToggle.vue'
import FilterConectorPrincipal from '@/components/filters/FilterConectorPrincipal.vue'
import {ConectorPrincipal} from '@/model/resource/ConectorPrincipal'
import {ConectorPrincipalCollection} from '@/model/collection/ConectorPrincipalCollection'
import {ListConectorPrincipalSchema} from '@/schema/resource/ConectorPrincipal/ListConectorPrincipalSchema'
import {ExportConectorPrincipalSchema} from '@/schema/resource/ConectorPrincipal/ExportConectorPrincipalSchema'

@Component({
  components: {FilterToggle, FilterConectorPrincipal},
})
export default class ListConectorPrincipalView extends Mixins(MixinRouteMatch) {
  schema = new ListConectorPrincipalSchema()
  collection = new ConectorPrincipalCollection()
  filterOpen = false

  async created() {
    if (this.hasQueryParams) {
      this.updateObjectFromRoute(this.collection)
    }
    await this.$await.run('hardQuery', () => this.collection.queryAsPage())
  }

  @Watch('collection', {deep: true})
  collectionEvent() {
    this.updateRouteFromObject(this.collection)
  }

  goToPersistView(item: ConectorPrincipal) {
    this.$nav.pushByName(
      'editConectorPrincipal',
      item.idPrincipalFk,
      item.idConectadoFk
    )
  }

  async downloadXlsx() {
    const {ascending, orderBy, page, limit, ...params} = this.collection.params

    const coll = new ConectorPrincipalCollection()
      .clearFilters()
      .addFilter(params)

    await coll.listExportConectorPrincipal()
    this.$xlsx.downloadFromSchema(
      coll.items,
      new ExportConectorPrincipalSchema()
    )
  }
}
</script>
