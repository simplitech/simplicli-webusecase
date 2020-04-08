<template>
  <div class="view">
    <header class="header">
      <h1 class="header__title">
        {{ $t('resource.Principal') }}
      </h1>

      <div class="header__items">
        <adap-searchfield
          :collection="collection"
          :placeholder="$t('app.search')"
          class="input h-8"
        />

        <await name="listPrincipal" :spinnerScale="0.8" class="w-12" />

        <filter-toggle v-model="filterOpen" />

        <div class="weight-1"></div>

        <span v-if="!collection.isEmpty()">
          {{ $t('app.totalLines', {total: collection.total}) }}
        </span>

        <await name="listExportPrincipal" :spinnerScale="0.8">
          <button @click="downloadXlsx" class="btn btn--solid">
            {{ $t('app.downloadXlsx') }}
          </button>
        </await>

        <router-link to="/principal/new" class="btn btn--contrast bg-secondary">
          {{ $t('app.add') }}
        </router-link>
      </div>

      <transition-expand>
        <div v-show="filterOpen">
          <principal-filter-component :collection="collection" />
        </div>
      </transition-expand>
    </header>

    <section class="weight-1 h-full bg-black-100">
      <await
        name="hardQuery"
        class="relative h-full verti items-center"
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
          <div class="weight-1 w-full overflow-auto">
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
                    <div class="grid grid-columns-2 grid-gap-1">
                      <a
                        @click="goToPersistView(item)"
                        class="btn btn--flat btn--icon"
                      >
                        <i class="far fa-edit" />
                      </a>
                      <a
                        @click="removeItem(item)"
                        class="btn btn--flat btn--icon"
                      >
                        <i class="far fa-trash-alt" />
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

          <div class="absolute bottom-8">
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
import {Principal} from '@/model/resource/Principal'
import {PrincipalCollection} from '@/model/collection/PrincipalCollection'
import {ListPrincipalSchema} from '@/schema/resource/Principal/ListPrincipalSchema'
import {ExportPrincipalSchema} from '@/schema/resource/Principal/ExportPrincipalSchema'
import PrincipalFilterComponent from '@/components/filter/PrincipalFilterComponent.vue'
import FilterToggle from '@/components/FilterToggle.vue'
import {MixinRouteMatch} from '@/mixins/MixinRouteMatch'

@Component({
  components: {FilterToggle, PrincipalFilterComponent},
})
export default class ListPrincipalView extends Mixins(MixinRouteMatch) {
  schema = new ListPrincipalSchema()
  collection = new PrincipalCollection()
  filterOpen = false

  async created() {
    if (this.hasQueryParams) {
      this.updateObjectFromRoute(this.collection)
    }
    await this.$await.run('hardQuery', () => this.collection.queryAsPage())
  }

  goToPersistView(item: Principal) {
    this.$nav.pushByName('editPrincipal', item.$id)
  }

  async removeItem(item: Principal) {
    await this.$dialog.remove(item)
    await item.removePrincipal()
    await this.collection.listPrincipal()
  }

  @Watch('collection', {deep: true})
  onCollectionChange() {
    this.updateRouteFromObject(this.collection)
  }

  async downloadXlsx() {
    const {ascending, orderBy, page, limit, ...params} = this.collection.params

    const coll = new PrincipalCollection().clearFilters().addFilter(params)

    await coll.listExportPrincipal()
    this.$xlsx.downloadFromSchema(coll.items, new ExportPrincipalSchema())
  }
}
</script>
