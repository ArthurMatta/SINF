<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-md-12">
        <vuestic-widget :headerText="$t('tables.deals')">
          <div class="table-responsive">
            <table class="table table-striped first-td-padding">
              <thead>
              <tr>
                <td>{{'tables.headings.dealname' | translate}}</td>
                <td>{{'tables.headings.dealstage' | translate}}</td>
                <td>{{'tables.headings.closedate' | translate}}</td>
                <td>{{'tables.headings.dealowner' | translate}}</td>
                <td>{{'tables.headings.amount' | translate}}</td>
                <td>{{'tables.headings.associated' | translate}}</td>
                <td></td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <router-link class='link' :to="{name: 'saleDescription', params: { deal: {name: 'Worten', stage: 0, closeDate: 'Apr 26, 2019', owner: 'Arthur Johas Matta', amount: '350,000', associatedWith: 'Worten'} }}">Worten</router-link>
                </td>
                <td>{{'tables.dataTable.appointmentScheduled' | translate}}</td>
                <td>Apr 26, 2019</td>
                <td>Arthur Johas Matta</td>
                <td>$350,000</td>
                <td>Worten</td>
              </tr>
              <tr>
                <td>
                  <router-link class='link' :to="{name: 'saleDescription', params: { deal: {name: 'Fnac', stage: 1, closeDate: 'Nov 10, 2019', owner: 'Andre Mori', amount: '275,000', associatedWith: 'Fnac'} }}">Fnac</router-link>
                </td>
                <td>{{'tables.dataTable.qualifiedToBuy' | translate}}</td>
                <td>Nov 10, 2019</td>
                <td>Andre Mori</td>
                <td>$275,000</td>
                <td>Fnac</td>
              </tr>
              <tr>
                <td>
                  <router-link class='link' :to="{name: 'saleDescription', params: { deal: {name: 'HubSpot', stage: 4, closeDate: 'Sep 05, 2019', owner: 'Daniel Bradaschia', amount: '50,000', associatedWith: 'HubSpot'} }}" v-model="deal">HubSpot</router-link>
                </td>
                <td>{{'tables.dataTable.contractSent' | translate}}</td>
                <td>Sep 05, 2019</td>
                <td>Daniel Bradaschia</td>
                <td>$50,000</td>
                <td>HubSpot</td>
              </tr>
              <tr>
                <td>
                  <router-link class='link' :to="{name: 'saleDescription', params: { deal: {name: 'H&M', stage: 2, closeDate: 'Jan 31, 2019', owner: 'Ana Maria Braga', amount: '127,000', associatedWith: 'H&M'} }}">H&M</router-link>
                </td>
                <td>{{'tables.dataTable.presentationScheduled' | translate}}</td>
                <td>Jan 31, 2019</td>
                <td>Ana Maria Braga</td>
                <td>$127,000</td>
                <td>H&M</td>
              </tr>
              </tbody>
            </table>
          </div>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-12">
        <vuestic-widget :headerText="$t('tables.deals')">
          <deals-table
            api-url="https://vuetable.ratiw.net/api/users"
            :fields="fields"
            :sort-order="sortOrder"
            :append-params="moreParams"
          ></deals-table>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>


<script>
  import DealsTable from './DealsTable'
  import FieldsDef from './FieldDefs'
  import VuesticWidget from "../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget";


  export default {
    name: "Sinf-salesorder",
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
            field: 'name',
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
