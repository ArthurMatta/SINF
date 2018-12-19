<template>
  <div class="ui">
    <filter-bar></filter-bar>
    <vuetable :css="css.table"></vuetable>
    <div class="row mb-2 mt-4">
      <div class="col-md-12 d-flex justify-content-center">
        <vuetable-pagination-info></vuetable-pagination-info>
      </div>
    </div>
    <div class="row mb-2 mt-4">
      <div class="col-md-12 d-flex justify-content-center">
        <vuetable-pagination></vuetable-pagination>
      </div>
    </div>
  </div>
</template>

<!--
ref="pagination"
:css="css.pagination"
@vuetable-pagination:change-page="onChangePage"
-->

<script>
  import Vue from 'vue'
  import VueEvents from 'vue-events'
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import accounting from 'accounting'
  import moment from 'moment'
  import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
  import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
  import FilterBar from './FilterBar'
  import DataTableStyles from '../../vuestic-theme/vuestic-components/vuestic-datatable/data/data-table-styles'

  Vue.use(VueEvents);
  Vue.component('filter-bar', FilterBar);

  export default {
    name: 'deals-table',
    components: {
      Vuetable,
      VuetablePagination,
      VuetablePaginationInfo
    },
    render (h) {
      return h(
        'div',
        {
          class: {ui: true}
        },
        [
          h('filter-bar'),
          this.renderVuetable(h),
          this.renderPagination(h)
        ]
      )
    },
    props: {
      apiUrl: {
        type: String,
        required: true
      },
      fields: {
        type: Array,
        required: true
      },
      sortOrder: {
        type: Array,
        default () {
          return []
        }
      },
      appendParams: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        css: DataTableStyles,
      }
    },
    mounted () {
      this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
    },
    methods: {
      renderVuetable (h) {
        return h(
          'vuetable',
          {
            ref: 'vuetable',
            props: {
              apiUrl: this.apiUrl,
              fields: this.fields,
              paginationPath: "",
              perPage: 10,
              multiSort: true,
              sortOrder: this.sortOrder,
              appendParams: this.appendParams
            },
            on: {
              'vuetable:pagination-data': this.onPaginationData,
            },
            scopedSlots: this.$vnode.data.scopedSlots
          },
        )
      },
      allcap (value) {
        return value.toUpperCase()
      },
      anchorName (value) {
          return value
      },
      genderLabel (value) {
        return value === 'M'
          ? '<span><i class="fa fa-mars"></i> Male</span>'
          : '<span><i class="fa fa-venus"></i> Female</span>'
      },
      formatNumber (value) {
        return accounting.formatNumber(value, 2)
      },
      formatDate (value, fmt = 'D MM YYYY') {
        return (value == null)
          ? ''
          : moment(value, 'YYYY-MM-DD').format(fmt)
      },
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
        this.$refs.paginationInfo.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      },
      onFilterSet (filterText) {
        this.appendParams.filter = filterText
        Vue.nextTick( () => this.$refs.vuetable.refresh() )
      }
    }
  }
</script>

<style lang="scss">
  .vuestic-data-table {
    min-height: 24rem;

    .form-group {
      margin-bottom: 1rem;
    }

    @media (max-width: 1258px) {
      .pagination-link-btn:first-child, .pagination-link-btn:last-child {
        display: none;
      }

      .pagination-link-btn:nth-child(2) {
        border-top-left-radius: $btn-border-radius !important;
        border-bottom-left-radius: $btn-border-radius !important;
      }

      .pagination-link-btn:nth-last-child(2) {
        border-top-right-radius: $btn-border-radius !important;
        border-bottom-right-radius: $btn-border-radius !important;
      }
    }

    @media (max-width: 576px) {
      .hide-not-focused-btn:not(.focus) {
        display: none;
      }
    }

    .data-table-loading {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 40%;
      left: 50%;
    }
  }

  .data-loading {
    opacity: .5;
    pointer-events: none;
  }
</style>
