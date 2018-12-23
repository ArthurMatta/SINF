<template>
	<div class="sinf-dashboard">
		<vuestic-widget class="no-padding no-v-padding">
			<vuestic-tabs class="tabs"
			:names="[$t('Task List')]"
			ref="tabs">
			<div :slot="$t('Task List')">
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

	<vuestic-tabs class="tabs"
			:names="[$t('Route')]"
			ref="tabs">
		<div :slot="'Route' | translate" class="maps-tab">
			<leaflet-map></leaflet-map>
		</div>
	</vuestic-tabs>
</vuestic-widget>
</div>
</template>

<script>
	import UsersMembersTab from './users-and-members-tab/UsersMembersTab.vue'
	import SetupProfileTab from './setup-profile-tab/SetupProfileTab.vue'
	import FeaturesTab from './features-tab/FeaturesTab.vue'
	import DataVisualisationTab from './data-visualisation-tab/DataVisualisation.vue'
	import DashboardBottomWidgets from './DashboardBottomWidgets.vue'
	import LeafletMap from 'components/maps/leaflet-maps/LeafletMap.vue'
	import FieldsDef from 'vuestic-components/vuestic-datatable/data/fields-definition'
	import ItemsPerPageDef from 'vuestic-components/vuestic-datatable/data/items-per-page-definition'
	import QueryParams from 'vuestic-components/vuestic-datatable/data/query-params'
	import { SpringSpinner } from 'epic-spinners'
    import axios from 'axios'
	export default {
		name: 'Sinf-Dashboard',
		components: {
			DataVisualisationTab,
			UsersMembersTab,
			SetupProfileTab,
			FeaturesTab,
			DashboardBottomWidgets,
			LeafletMap,
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
      queryParams: QueryParams,
      info : null
    }
  },
  mounted(){
		  this.getConsulta()
  },
  methods: {
		getConsulta(){
			// Send a POST request
			axios.post(
			'http://localhost:2018/WebApi/Administrador/Consulta','\"Select * From Artigo\"', {headers : {
				'cache-control': 'no-cache',
				Authorization: 'Bearer '+ localStorage.token,
				'Content-Type': 'application/json'
			}}
			).then( response => {
				console.log(response)
			}).catch(error => {
				console.log(error);
			})

			//format data 

			

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

	.color-icon-label-table {
		td:first-child {
			width: 1rem;
		}
	}
</style>
