<template>
  <div class="sinf-opportunities">
    <vuestic-widget class="no-h-padding no-v-padding" :headerText="$t('timelines.horizontalSimple')">
      <vuestic-timeline>
        <vuestic-timeline-item active>
          <template slot="before">
            <div class="vuestic-timeline-item__title">
              February 2018
            </div>
            <div class="vuestic-timeline-item__description">
              Pre-sail rate: 50%
            </div>
          </template>
        </vuestic-timeline-item>
        <vuestic-timeline-item active>
          <template slot="before">
            <div class="vuestic-timeline-item__title">
              March 2018
            </div>
            <div class="vuestic-timeline-item__description">
              Pre-sail rate: 40%
            </div>
          </template>
        </vuestic-timeline-item>
        <vuestic-timeline-item>
          <template slot="before">
            <div class="vuestic-timeline-item__title">
              April 2018
            </div>
            <div class="vuestic-timeline-item__description">
              Pre-sail rate: 20%
            </div>
          </template>
        </vuestic-timeline-item>
      </vuestic-timeline>
    </vuestic-widget>
    <h4>Tasks</h4>
    <table class="table table-striped first-td-padding">
      <thead>
      <tr>
        <td>Name</td>
        <td>Email</td>
        <td>City</td>
        <td>Score</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Matthew McCormick</td>
        <td>matthew30@mail.ol</td>
        <td>Vancouver</td>
        <td>93</td>
      </tr>
      </tbody>
    </table>
    <vuestic-widget
      class="google-maps-page__widget"
      headerText="Google Maps"
    >
    <google-map/>
    </vuestic-widget>
  </div>
</template>

<script>
  import GoogleMapsPage from '../maps/google-maps/GoogleMapsPage'
  import GoogleMap from '../maps/google-maps/GoogleMap'

  export default {
    components:{
      GoogleMapsPage,
      GoogleMap
    }
  }
</script>

<style scoped>

</style>
