<template>
  <div class="view">
    <header class="header">
      <h1 class="header__title">
        {{ $t('resource.GrupoDoPrincipal') }}
      </h1>

      <div class="header__items">
        <adap-searchfield
          :collection="collection"
          :placeholder="$t('app.search')"
          class="input h-8"
        />

        <await name="listGrupoDoPrincipal" :spinnerScale="0.8" />

        <div class="weight-1"></div>

        <span v-if="!collection.isEmpty()">
          {{ $t('app.totalLines', {total: collection.total}) }}
        </span>

        <await name="listCsvGrupoDoPrincipal" :spinnerScale="0.8">
          <button @click="downloadCsv" class="btn btn--solid">
            {{ $t('app.downloadCsv') }}
          </button>
        </await>

        <router-link
          to="/grupo-do-principal/new"
          class="btn btn--contrast bg-secondary"
        >
          {{ $t('app.add') }}
        </router-link>
      </div>
    </header>

    <section class="weight-1 h-full bg-black-100">
      <await
        init
        name="query"
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
          <div class="weight-1 w-full overflow-auto bg-primary">
            <table class="table">
              <thead>
                <tr>
                  <th></th>

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
                    </div>
                  </td>

                  <td v-for="field in schema.allFields" :key="field">
                    <render-schema
                      v-model="collection.get(i)"
                      :schema="schema"
                      :field="field"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="absolute bottom-4">
            <adap-pagination :collection="collection" class="m-auto" />
          </div>
        </template>

        <await name="adapQuery" class="z-20 await__spinner--screen-light" />
      </await>
    </section>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Watch, Mixins} from 'vue-property-decorator'
import {MixinAdapRoute} from '@simpli/vue-adap-table'
import {Helper} from '@/helpers'
import {GrupoDoPrincipal} from '@/model/resource/GrupoDoPrincipal'
import {GrupoDoPrincipalCollection} from '@/model/collection/GrupoDoPrincipalCollection'
import {ListGrupoDoPrincipalSchema} from '@/schema/resource/GrupoDoPrincipal/ListGrupoDoPrincipalSchema'
import {CsvGrupoDoPrincipalSchema} from '@/schema/resource/GrupoDoPrincipal/CsvGrupoDoPrincipalSchema'

@Component
export default class ListGrupoDoPrincipalView extends Mixins(MixinAdapRoute) {
  schema = new ListGrupoDoPrincipalSchema()
  collection = new GrupoDoPrincipalCollection()

  async created() {
    await this.query()
  }

  goToPersistView(item: GrupoDoPrincipal) {
    Helper.pushByName('editGrupoDoPrincipal', item.$id)
  }

  async downloadCsv() {
    const {params} = this.collection
    delete params.ascending
    delete params.orderBy
    delete params.page
    delete params.limit

    const csv = new GrupoDoPrincipalCollection()
      .clearFilters()
      .addFilter(params)

    await csv.listCsvGrupoDoPrincipal()
    Helper.downloadCsv(csv.items, new CsvGrupoDoPrincipalSchema())
  }
}
</script>
