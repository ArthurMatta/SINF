<template>
  <div class="sinf-dashboard">
    <vuestic-widget class="no-padding no-v-padding">
      <vuestic-tabs class="tabs" :names="[$t('Task List')]" ref="tabs">
        <div :slot="$t('Task List')">
          <div class="row">
            <div class="col-md-12">
              <vuestic-widget :headerText="$t('tables.advanced')">
                <div class="table-responsive">
                  <table class="table table-striped table-sm color-icon-label-table">
                    <thead>
                      <tr>
                        <td></td>
						<td align="middle">OPID</td>
                        <td align="middle">Tipo</td>
                        <td align="middle">Descricao</td>
                        <td align="middle">EndDate</td>
						
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="entry in tableData" :key="entry.ID">
                        <td></td>
                        <td align="middle">
                          <router-link
                            class="link"
                            :to="{name: 'saleDescription', params: { deal: entry } }"
                          >{{ entry.OpportunityId }}</router-link>
                        </td>
                        <td align="middle">{{entry.Type}}</td>
                        <td align="middle">{{entry.Title}}</td>
                        <td align="middle">{{entry.EndDate}}</td>
                        <td align="middle"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </vuestic-widget>
            </div>
          </div>
        </div>
      </vuestic-tabs>

      <vuestic-tabs class="tabs" :names="[$t('Route')]" ref="tabs">
        <div :slot="'Route' | translate" class="maps-tab">
          <leaflet-map></leaflet-map>
        </div>
      </vuestic-tabs>
    </vuestic-widget>
  </div>
</template>

<script>
import UsersMembersTab from "./users-and-members-tab/UsersMembersTab.vue";
import SetupProfileTab from "./setup-profile-tab/SetupProfileTab.vue";
import FeaturesTab from "./features-tab/FeaturesTab.vue";
import DataVisualisationTab from "./data-visualisation-tab/DataVisualisation.vue";
import DashboardBottomWidgets from "./DashboardBottomWidgets.vue";
import LeafletMap from "components/maps/leaflet-maps/LeafletMap.vue";
import FieldsDef from "vuestic-components/vuestic-datatable/data/fields-definition";
import ItemsPerPageDef from "vuestic-components/vuestic-datatable/data/items-per-page-definition";
import QueryParams from "vuestic-components/vuestic-datatable/data/query-params";
import { SpringSpinner } from "epic-spinners";
import axios from "axios";
export default {
  name: "Sinf-Dashboard",
  tableData : [],
  components: {
    LeafletMap
  },

  data() {
    return {
		tableData : []
	};
  },
  mounted() {
    this.getConsulta();
  },
  methods: {
    getConsulta() {
      var self = this;
      const url = "http://localhost:2018/WebApi/";
      axios
        .post(
          "http://localhost:2018/WebApi/Administrador/Consulta",
          '"SELECT Tarefas.Id AS ActivityId, Tarefas.DataInicio AS StartDate, Tarefas.DataFim AS EndDate, Tarefas.Resumo AS Title, TiposTarefa.Descricao AS Type, Tarefas.EntidadePrincipal AS Client, Tarefas.IdContactoPrincipal AS DBContactId, Tarefas.Utilizador AS RepresentativeId, Tarefas.LocalRealizacao AS Location, CabecOportunidadesVenda.Oportunidade AS OpportunityId, Tarefas.Descricao AS Notes ' +
            "FROM Tarefas JOIN TiposTarefa ON Tarefas.IdTipoActividade = TiposTarefa.Id LEFT JOIN CabecOportunidadesVenda ON Tarefas.IDCabecOVenda LIKE CabecOportunidadesVenda.ID " +
            "WHERE Tarefas.Utilizador LIKE '" +
            "lucia.ribeiro" +
            "'\"",
          {
            headers: {
              "cache-control": "no-cache",
              Authorization: "Bearer " + localStorage.token,
              "Content-Type": "application/json"
            }
          }
        )
        .then(function(response) {
          self.tableData = response.data["DataSet"]["Table"];
          console.log(self.tableData);
        })
        .catch(function(error) {
          console.log(error);
        });

      //format data
    }
  }
};
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
