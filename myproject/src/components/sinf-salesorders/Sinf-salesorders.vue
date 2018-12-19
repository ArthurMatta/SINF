<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-md-12">
        <vuestic-widget :headerText="$t('tables.deals')">
          <deals-table
            api-url="https://vuetable.ratiw.net/api/users"
            :fields="fields"
            :sort-order="sortOrder"
            :append-params="moreParams"
          >
            <template slot="name" slot-scope="props">
              <router-link class="link" :to="{name: 'saleDescription', params: { deal: {name: props.rowData.name } } }">
                {{ props.rowData.name }}
              </router-link>
            </template>
          </deals-table>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>


<script>
  import DealsTable from './DealsTable'
  import FieldsDef from './SinfFieldDefs'
  import VuesticWidget from "../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget";

  export default {
    name: "Sinf-salesorders",
    components: {
      VuesticWidget,
      DealsTable,
    },
    data () {
      return {
        apiUrl: 'https://vuetable.ratiw.net/api/users',
        fields: FieldsDef,
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

<style lang="scss">
  .color-icon-label-table {
    td:first-child {
      width: 1rem;
    }
  }
</style>
