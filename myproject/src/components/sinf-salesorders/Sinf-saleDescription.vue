<template>
  <div class="timelines">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget>
          <div class="typo-headers">
            <h1>{{deal.Entidade}}</h1>
            <h2>{{deal.Resumo}}</h2>
          </div>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="row">
          <div class="col-md-12">
            <vuestic-collapse>
              <span slot="header">{{'collapse.about' | translate}}</span>
              <div slot="body">
                <vuestic-widget>
                  <div class="row">
                    <div class="col-md-12">
                      <h4>{{'tables.headings.amount' | translate}}</h4>
                      <p>${{deal.ValorTotalOV}}</p>
                    </div>
                  </div>
                  <div style="border: 1px solid lightgray"></div>
                  <div class="row mt-3">
                    <div class="col-md-12">
                      <h4>{{'tables.headings.dealowner' | translate}}</h4>
                      <p>{{deal.CriadoPor}}</p>
                    </div>
                  </div>
                  <div style="border: 1px solid lightgray"></div>
                </vuestic-widget>
              </div>
            </vuestic-collapse>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <vuestic-collapse>
              <span slot="header">Contacts</span>
              <div slot="body">
                <vuestic-widget>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="collapse-page__content">
                        <h4 class="collapse-page__content__title">February 2018</h4>
                        <div>
                          The unique stripes of zebras make them one of the animals
                          most familiar to people. They occur in a variety of habitats,
                          such as grasslands, savannas, woodlands, thorny scrublands.
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="collapse-page__content">
                        <h4 class="collapse-page__content__title">March 2018</h4>
                        <div>
                          They occur in a variety of habitats,
                          such as grasslands, savannas, woodlands, thorny scrublands.
                        </div>
                      </div>
                    </div>
                  </div>
                </vuestic-widget>
              </div>
            </vuestic-collapse>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <vuestic-collapse>
              <span slot="header">Company</span>
              <div slot="body">
                <vuestic-widget>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="collapse-page__content">
                        <h4 class="collapse-page__content__title">February 2018</h4>
                        <div>
                          The unique stripes of zebras make them one of the animals
                          most familiar to people. They occur in a variety of habitats,
                          such as grasslands, savannas, woodlands, thorny scrublands.
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="collapse-page__content">
                        <h4 class="collapse-page__content__title">March 2018</h4>
                        <div>
                          They occur in a variety of habitats,
                          such as grasslands, savannas, woodlands, thorny scrublands.
                        </div>
                      </div>
                    </div>
                  </div>
                </vuestic-widget>
              </div>
            </vuestic-collapse>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <vuestic-collapse>
              <span slot="header">Products</span>
              <div slot="body">
                <vuestic-widget>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="collapse-page__content">
                        <h4 class="collapse-page__content__title">February 2018</h4>
                        <div>
                          The unique stripes of zebras make them one of the animals
                          most familiar to people. They occur in a variety of habitats,
                          such as grasslands, savannas, woodlands, thorny scrublands.
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="collapse-page__content">
                        <h4 class="collapse-page__content__title">March 2018</h4>
                        <div>
                          They occur in a variety of habitats,
                          such as grasslands, savannas, woodlands, thorny scrublands.
                        </div>
                      </div>
                    </div>
                  </div>
                </vuestic-widget>
              </div>
            </vuestic-collapse>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <vuestic-widget class="no-h-padding no-v-padding" :headerText="$t('timelines.pipeline')">
          <vuestic-timeline>
            <vuestic-timeline-item :active="deal.EstadoVenda >= 0">
              <template slot="before">
                <div class="vuestic-timeline-item__title">Open</div>
                <div class="vuestic-timeline-item__description">{{deal.DataCriacao}}</div>
              </template>
            </vuestic-timeline-item>

            <vuestic-timeline-item :active="deal.EstadoVenda >= 1">
              <template slot="before">
                <div class="vuestic-timeline-item__title">Closed Won</div>
                <div class="vuestic-timeline-item__description"></div>
              </template>
            </vuestic-timeline-item>
            <vuestic-timeline-item :active="deal.EstadoVenda >= 2">
              <template slot="before">
                <div class="vuestic-timeline-item__title">Closed Lost</div>
                <div class="vuestic-timeline-item__description"></div>
              </template>
            </vuestic-timeline-item>
          </vuestic-timeline>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-12">
            <vuestic-widget class="no-padding no-v-padding">
              <vuestic-tabs :names="[$t('Tasks'), $t('Proposals')]" ref="tabs">
                <div class="table-responsive" :slot="$t('Tasks') ">
                  <table class="table table-striped table-sm color-icon-label-table">
                    <thead>
                      <tr>
                        <td></td>
                        <td align="middle">Vendedor</td>
                        <td align="middle">Descrição</td>
                        <td align="middle">Tipo</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="entry in tableData" :key="entry.ID">
                        <td></td>
                        <td align="middle">{{entry.RepresentativeId}}</td>
                        <td align="middle">{{entry.Title}}</td>
                        <td align="middle">{{entry.Type}}</td>
                        <td align="middle"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="table-responsive" :slot="$t('Proposals')">
                  <table class="table table-striped table-sm color-icon-label-table">
                    <thead>
                      <tr>
                        <td></td>
                        <td align="left">ProductId</td>
                        <td align="middle">Nome</td>
                        <td align="middle">Quantity</td>
                        <td align="right">Profit</td>
                        <td align="right">Selling Price</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="d in propData" :key="d.ID">
                        <td></td>
                        <td align="left">{{d.ProductId}}</td>
                        <td align="middle">{{d.ProductName}}</td>
                        <td align="middle">{{d.Quantity}}</td>
                        <td align="right">{{d.Profitability}}</td>
                        <td align="right">{{d.SellingPrice}}</td>
                        <td align="middle"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </vuestic-tabs>
            </vuestic-widget>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardInfoWidgets from "../sinf-dashboard/DashboardInfoWidgets";
import UsersMembersTab from "../sinf-dashboard/users-and-members-tab/UsersMembersTab.vue";
import SetupProfileTab from "../sinf-dashboard/setup-profile-tab/SetupProfileTab.vue";
import FeaturesTab from "../sinf-dashboard/features-tab/FeaturesTab.vue";
import DataVisualisationTab from "../sinf-dashboard/data-visualisation-tab/DataVisualisation.vue";
import DashboardBottomWidgets from "../sinf-dashboard/DashboardBottomWidgets.vue";

import axios from "axios";
export default {
  name: "timelines",
  props: {
    deal: {
      name: String,
      stage: Number,
      closeDate: Date,
      owner: String,
      amount: String,
      associatedWith: String
    }
  },
  components: {
    DataVisualisationTab,
    DashboardInfoWidgets,
    UsersMembersTab,
    SetupProfileTab,
    FeaturesTab,
    DashboardBottomWidgets
  },
  data() {
    return {
      tableData: [],
      propData: []
    };
  },
  methods: {
    changeStage(stage) {
      this.deal.stage = stage;
    },
    getTasks(OPVid) {
      var self = this;
      const url = "http://localhost:2018/WebApi/";
      axios
        .post(
          url + "Administrador/Consulta",
          '"SELECT Tarefas.Id AS ActivityId, Tarefas.DataInicio AS StartDate, Tarefas.DataFim AS EndDate, Tarefas.Resumo AS Title, TiposTarefa.Descricao AS Type, Tarefas.EntidadePrincipal AS Client, Tarefas.IdContactoPrincipal AS DBContactId, Tarefas.Utilizador AS RepresentativeId, Tarefas.LocalRealizacao AS Location, CabecOportunidadesVenda.Oportunidade AS OpportunityId, Tarefas.Descricao AS Notes ' +
            "FROM Tarefas, TiposTarefa, CabecOportunidadesVenda " +
            "WHERE Tarefas.IdTipoActividade = TiposTarefa.Id " +
            "AND Tarefas.IDCabecOVenda LIKE CabecOportunidadesVenda.ID " +
            "AND Tarefas.IDCabecOVenda LIKE '" +
            OPVid +
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
    },
    getProp(OPVid) {
      var self = this;
      const url = "http://localhost:2018/WebApi/";
      axios
        .post(
          url + "Administrador/Consulta",
          '"SELECT Artigo AS ProductId, Descricao AS ProductName, PrecoCusto AS Cost, PrecoVenda AS SellingPrice, Rentabilidade AS Profitability, Margem AS Margin, Quantidade AS Quantity ' +
            "FROM LinhasPropostasOPV " +
            "WHERE IdOportunidade LIKE '" +
            OPVid +
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
          self.propData = response.data["DataSet"]["Table"];
          console.log(self.propData);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getTasks(this.deal.ID);
    this.getProp(this.deal.ID);
  }
};
</script>

<style lang="scss">
.timelines {
  &__horizontal-long {
    .widget-body {
      overflow-x: auto;
    }
    &__timeline {
      min-width: 800px;
    }
  }
}
</style>
