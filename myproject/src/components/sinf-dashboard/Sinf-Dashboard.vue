<template>
  <div class="sinf-dashboard">

    <dashboard-info-widgets></dashboard-info-widgets>

    <vuestic-widget class="no-padding no-v-padding">
      <vuestic-tabs
        :names="[$t('sinf-dashboard.dataVisualization'), $t('sinf-dashboard.usersAndMembers'), $t('sinf-dashboard.setupProfile'), $t('sinf-dashboard.features')]"
        ref="tabs">
        <div :slot="$t('sinf-dashboard.dataVisualization')">
          <data-visualisation-tab></data-visualisation-tab>
        </div>
        <div :slot="$t('sinf-dashboard.usersAndMembers')">
          <users-members-tab></users-members-tab>
        </div>
        <div :slot="$t('sinf-dashboard.setupProfile')">
          <setup-profile-tab></setup-profile-tab>
        </div>
        <div :slot="$t('sinf-dashboard.features')">
          <features-tab></features-tab>
        </div>
      </vuestic-tabs>
    </vuestic-widget>

    <dashboard-bottom-widgets></dashboard-bottom-widgets>

  </div>
</template>

<script>
import DashboardInfoWidgets from './DashboardInfoWidgets'
import UsersMembersTab from './users-and-members-tab/UsersMembersTab.vue'
import SetupProfileTab from './setup-profile-tab/SetupProfileTab.vue'
import FeaturesTab from './features-tab/FeaturesTab.vue'
import DataVisualisationTab from './data-visualisation-tab/DataVisualisation.vue'
import DashboardBottomWidgets from './DashboardBottomWidgets.vue'

export default {
  name: 'Sinf-Dashboard',
  components: {
    DataVisualisationTab,
    DashboardInfoWidgets,
    UsersMembersTab,
    SetupProfileTab,
    FeaturesTab,
    DashboardBottomWidgets
  },

  methods: {
    launchEpicmaxToast () {
      this.showToast(`Let's work together!`, {
        icon: 'fa-star-o',
        position: 'top-right',
        duration: Infinity,
        action: {
          text: 'Hire us',
          href: 'http://epicmax.co/#/contact',
          class: 'vuestic-toasted-link'
        }
      })
    }
  }
}

</script>
<style lang="scss" scoped>
</style>
