<template>
  <div class="timelines">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget>
          <div class="typo-headers">
            <h1>{{deal.name}}</h1>
          </div>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="no-h-padding no-v-padding" :headerText="$t('timelines.pipeline')">
          <vuestic-timeline>
            <vuestic-timeline-item :active="deal.stage >= 0">
              <template slot="before">
                <div class="vuestic-timeline-item__title">
                  {{'tables.dataTable.appointmentScheduled' | translate}}
                </div>
                <div class="vuestic-timeline-item__description">
                  Jul 25, 2018
                </div>
              </template>
            </vuestic-timeline-item>
            <vuestic-timeline-item :active="deal.stage >= 1">
              <template slot="before">
                <div class="vuestic-timeline-item__title">
                  {{'tables.dataTable.qualifiedToBuy' | translate}}
                </div>
                <div class="vuestic-timeline-item__description">
                  Ago 02, 2018
                </div>
              </template>
            </vuestic-timeline-item>
            <vuestic-timeline-item :active="deal.stage >= 2">
              <template slot="before">
                <div class="vuestic-timeline-item__title">
                  {{'tables.dataTable.presentationScheduled' | translate}}
                </div>
                <div class="vuestic-timeline-item__description">

                </div>
              </template>
            </vuestic-timeline-item>
            <vuestic-timeline-item :active="deal.stage >= 3">
              <template slot="before">
                <div class="vuestic-timeline-item__title">
                  {{'tables.dataTable.decisionMakerBroughtIn' | translate}}
                </div>
                <div class="vuestic-timeline-item__description">

                </div>
              </template>
            </vuestic-timeline-item>
            <vuestic-timeline-item :active="deal.stage >= 4">
              <template slot="before">
                <div class="vuestic-timeline-item__title">
                  {{'tables.dataTable.contractSent'| translate}}
                </div>
                <div class="vuestic-timeline-item__description">

                </div>
              </template>
            </vuestic-timeline-item>
            <vuestic-timeline-item :active="deal.stage >= 5">
              <template slot="before">
                <div class="vuestic-timeline-item__title">
                  {{'tables.dataTable.closedWon' | translate}}
                </div>
                <div class="vuestic-timeline-item__description">

                </div>
              </template>
            </vuestic-timeline-item>
            <vuestic-timeline-item :active="deal.stage >= 6">
              <template slot="before">
                <div class="vuestic-timeline-item__title">
                  {{'tables.dataTable.closedLost' | translate}}
                </div>
                <div class="vuestic-timeline-item__description">

                </div>
              </template>
            </vuestic-timeline-item>
          </vuestic-timeline>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="row">
          <div class="col-md-12">
            <vuestic-collapse>
              <span slot="header"> {{'collapse.about' | translate}} </span>
              <div slot="body">
                <vuestic-widget>
                  <div class="row">
                    <div class="col-md-12">
                      <h4>
                        {{'tables.headings.amount' | translate}}
                      </h4>
                      <p>
                        ${{deal.amount}}
                      </p>
                    </div>
                  </div>
                  <div style="border: 1px solid lightgray"></div>
                  <div class="row mt-3">
                    <div class="col-md-12">
                      <h4>
                        {{'tables.headings.dealstage' | translate}}
                      </h4>
                      <p v-if="deal.stage === 0">
                        {{'tables.dataTable.appointmentScheduled' | translate}}
                      </p>
                      <p v-else-if="deal.stage === 1">
                        {{'tables.dataTable.qualifiedToBuy' | translate}}
                      </p>
                      <p v-else-if="deal.stage === 2">
                        {{'tables.dataTable.presentationScheduled' | translate}}
                      </p>
                      <p v-else-if="deal.stage === 3">
                        {{'tables.dataTable.decisionMakerBoughtIn' | translate}}
                      </p>
                      <p v-else-if="deal.stage === 4">
                        {{'tables.dataTable.contractSent' | translate}}
                      </p>
                      <p v-else-if="deal.stage === 5">
                        {{'tables.dataTable.qualifiedToBuy' | translate}}
                      </p>
                      <p v-else-if="deal.stage === 6">
                        {{'tables.dataTable.qualifiedToBuy' | translate}}
                      </p>
                    </div>
                  </div>
                  <div style="border: 1px solid lightgray"></div>
                  <div class="row mt-3">
                    <div class="col-md-12">
                      <h4>
                        {{'tables.headings.closedate' | translate}}
                      </h4>
                      <p>
                        {{deal.closeDate}}
                      </p>
                    </div>
                  </div>
                  <div style="border: 1px solid lightgray"></div>
                  <div class="row mt-3">
                    <div class="col-md-12">
                      <h4>
                        {{'tables.headings.dealowner' | translate}}
                      </h4>
                      <p>
                        {{deal.owner}}
                      </p>
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
              <span slot="header"> Contacts </span>
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
              <span slot="header"> Company </span>
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
              <span slot="header"> Products </span>
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
        <div class="row">
          <div class="col-md-12">
            <vuestic-widget class="no-padding no-v-padding">
              <vuestic-tabs
                :names="[$t('dashboard.dataVisualization'), $t('dashboard.usersAndMembers'), $t('dashboard.setupProfile'), $t('dashboard.features')]"
                ref="tabs">
                <div :slot="$t('dashboard.dataVisualization')">
                  <data-visualisation-tab></data-visualisation-tab>
                </div>
                <div :slot="$t('dashboard.usersAndMembers')">
                  <users-members-tab></users-members-tab>
                </div>
                <div :slot="$t('dashboard.setupProfile')">
                  <setup-profile-tab></setup-profile-tab>
                </div>
                <div :slot="$t('dashboard.features')">
                  <features-tab></features-tab>
                </div>
              </vuestic-tabs>
            </vuestic-widget>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <vuestic-widget class="no-h-padding no-v-padding" :headerText="$t('timelines.verticalLabel')">
              <vuestic-timeline vertical>
                <vuestic-timeline-item active>
                  <span class="vuestic-timeline-item__text" slot="before">{{ dateFirst }}</span>
                  <vuestic-card
                    slot="after"
                    stripe="success"
                  >
                    <template slot="title">{{ titleFirst }}</template>
                    {{ contentFirst }}
                  </vuestic-card>
                </vuestic-timeline-item>
                <vuestic-timeline-item>
                  <span class="vuestic-timeline-item__text" slot="before">{{ dateSecond }}</span>
                  <vuestic-card
                    slot="after"
                    stripe="success"
                  >
                    <template slot="title">{{ titleSecond }}</template>
                    {{ contentFirst }}
                  </vuestic-card>
                </vuestic-timeline-item>
              </vuestic-timeline>
            </vuestic-widget>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import DashboardInfoWidgets from '../sinf-dashboard/DashboardInfoWidgets'
  import UsersMembersTab from '../sinf-dashboard/users-and-members-tab/UsersMembersTab.vue'
  import SetupProfileTab from '../sinf-dashboard/setup-profile-tab/SetupProfileTab.vue'
  import FeaturesTab from '../sinf-dashboard/features-tab/FeaturesTab.vue'
  import DataVisualisationTab from '../sinf-dashboard/data-visualisation-tab/DataVisualisation.vue'
  import DashboardBottomWidgets from '../sinf-dashboard/DashboardBottomWidgets.vue'

  export default {
    name: 'timelines',
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
    data () {
      return {
      }
    },
    methods: {
      changeStage (stage) {
        this.deal.stage = stage;
      }
    }
  }
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
