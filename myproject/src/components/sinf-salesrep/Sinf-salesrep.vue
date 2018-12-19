<template>
  <div class="extra">
    <div class="row">
      <div class="col-md-4 d-flex">
          <vuestic-widget :headerText="$t('My Profile')" class="profile-card-widget">
          <vuestic-profile-card :name="'Veronique Lee'" :location="'Malaga, Spain'" photoSource="https://i.imgur.com/NLrdqsk.png"
                                :social="{twitter: 'twitter.com', facebook: 'facebook.com',
                                  instagram: 'instagram.com'}"
                                class="w-100"
          >
          </vuestic-profile-card>
        </vuestic-widget>
      </div>
      <div class="col-md-8">
        <vuestic-widget :headerText="'extra.tabs.title' | translate" class="no-v-padding">
          <vuestic-tabs class="tabs" :names="[$t('Statistics'), $t('Tasks'), $t('extra.tabs.maps')]">
            <div :slot="'Statistics' | translate" class="d-flex justify-content-center">
              <data-visualization-tab></data-visualization-tab>
            </div>
            <div :slot="'extra.tabs.maps' | translate" class="maps-tab">
              <leaflet-map></leaflet-map>
            </div>
            <div :slot="'Tasks' | translate">
              <deals-table
                api-url="https://vuetable.ratiw.net/api/users"
                :fields="fields"
                :sort-order="sortOrder"
                :append-params="moreParams"
              >
              </deals-table>
            </div>
          </vuestic-tabs>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
  import LeafletMap from 'components/maps/leaflet-maps/LeafletMap.vue'
  import DataVisualizationTab from '../sinf-dashboard/data-visualisation-tab/DataVisualisation'
  import VuesticWidget from "../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget";
  import DealsTable from '../sinf-salesorders/DealsTable'
  import FieldsDefs from './FieldDefs'

  export default {
    name: 'extra',
    components: {
      VuesticWidget,
      LeafletMap,
      DataVisualizationTab,
      DealsTable
    },
    data () {
      return {
        apiUrl: 'https://vuetable.ratiw.net/api/users',
        fields: FieldsDefs,
        sortOrder: [
          {
            field: '__slot:name',
            sortField: 'name',
            direction: 'asc'
          }
        ],
        moreParams: {}
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
</style>
