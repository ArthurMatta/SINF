<template>
  <div class="clients">
    <vuestic-widget :headerText="$t('Clients') | translate" class="no-v-padding">
      <vuestic-tabs class="tabs" :names="[$t('Location'), $t('Leads'), $t('Invoices')]">
        <div :slot="'Invoices'">
          <div class="row">
            <div class="col-md-12">
              <vuestic-widget :headerText="$t('tables.advanced')">
                <vuestic-data-table
                :apiUrl="apiUrl"
                :tableFields="tableFields"
                :itemsPerPage="itemsPerPage"
                :defaultPerPage="defaultTablePerPage"
                :sortFunctions="sortFunctions"
                :apiMode="apiMode"
                :paginationPath="paginationPath"
                :queryParams="queryParams">
                <spring-spinner
                slot="loading"
                :animation-duration="2500"
                :size="70"
                color="#4ae387"/>
              </vuestic-data-table>
            </vuestic-widget>
          </div>
        </div>
      </div>
      <div :slot="'Location' | translate" class="maps-tab">
        <leaflet-map></leaflet-map>
      </div>
      <div :slot="'Leads' ">
        <div class="row">
          <div class="col-md-12">
            <vuestic-widget :headerText="$t('tables.advanced')">
              <vuestic-data-table
              :apiUrl="apiUrl"
              :tableFields="tableFields"
              :itemsPerPage="itemsPerPage"
              :defaultPerPage="defaultTablePerPage"
              :sortFunctions="sortFunctions"
              :apiMode="apiMode"
              :paginationPath="paginationPath"
              :queryParams="queryParams">
              <spring-spinner
              slot="loading"
              :animation-duration="2500"
              :size="70"
              color="#4ae387"/>
            </vuestic-data-table>
          </vuestic-widget>
        </div>
      </div>
    </div>
  </vuestic-tabs>
</vuestic-widget>
</div>
</div>
</div>
</template>

<script>
  import OverviewTab from 'components/sinf-dashboard/features-tab/FeaturesTab.vue'
  import SetupProfileTab from 'components/sinf-dashboard/setup-profile-tab/SetupProfileTab.vue'
  import LeafletMap from 'components/maps/leaflet-maps/LeafletMap.vue'
  import VuesticWidget from "../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget"
  import FieldsDef from 'vuestic-components/vuestic-datatable/data/fields-definition'
  import ItemsPerPageDef from 'vuestic-components/vuestic-datatable/data/items-per-page-definition'
  import QueryParams from 'vuestic-components/vuestic-datatable/data/query-params'
  import { SpringSpinner } from 'epic-spinners';

  export default {
    name: 'Sinf-clients',
    components: {
      LeafletMap,
      SetupProfileTab,
      OverviewTab,
      SpringSpinner
    },
    data () {
      return {
        apiUrl: 'https://vuetable.ratiw.net/api/users',
        apiMode: true,
        tableFields: FieldsDef.tableFields,
        itemsPerPage: ItemsPerPageDef.itemsPerPage,
        sortFunctions: FieldsDef.sortFunctions,
        paginationPath: '',
        defaultTablePerPage: 6,
        queryParams: QueryParams
      }
    }  
  }
</script>

<style lang="scss" scoped>
  .tabs {
    .overview-tab {
      .explore-row {
        display: none !important;
      }
    }

    .maps-tab {
      height: 500px;
    }
  }

  .profile-card-widget, .chat-widget {
    width: 100%;
    .widget-body {
      display: flex;
      justify-content: center;
      align-items: center;
      & > div {
        width: 100%;
      }
    }
  }

  .bottom-widgets {
    > div[class^='col'] {
      & > div {
        width: 100%;
      }
    }
  }

  .color-icon-label-table {
    td:first-child {
      width: 1rem;
    }
  }
</style>
