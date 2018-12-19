<template>
  <div>
    <div class="ui form-group">
      <div class="d-inline">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 d-flex align-items-center">
            <div class="form-group with-icon-left">
              <div class="input-group">
                <input v-model="filterText" id="input-icon-left" name="input-icon-left"
                       required @keyup="doFilter"/>
                <i class="fa fa-search icon-left input-icon"></i>
                <label class="control-label" for="input-icon-left">Search</label><i class="bar"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        filterText: ''
      }
    },
    methods: {
      doFilter () {
        this.$events.fire('filter-set', this.filterText)
      }
    }
  }
</script>
