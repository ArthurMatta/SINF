<template>
  <div class="row">
    <div class="col-xs-12 col-md-12">
      <vuestic-widget>
        <div class="table-responsive">
          <table class="table table-striped table-sm color-icon-label-table">
            <thead>
              <tr>
                <td></td>
                <td>Name</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="entry in tableData" :key="entry.ID">
                <td></td>
                <td>
                  <router-link class="link" :to="{name: 'clientDescription', params: { deal: entry } }">
                  {{ entry.Name }}
                 </router-link>
                </td>
                <td align="middle"></td>
              </tr>
            </tbody>
            <template slot="name" slot-scope="props">
              
            </template>
          </table>
        </div>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ClientsTable from "./ClientsTable";
export default {
  name: "Sinf-clients",
  mounted: function() {
    //this.getOpportunities();
    console.log("mounted: got here");
  },
  data: function() {
    return {
      tableData: []
    };
  },
  components: {},
  methods: {
    /*getOpportunities: function() {
      var self = this;
      const url = "http://localhost:2018/WebApi/";
      axios
        .post(
          url + "Administrador/Consulta",
          '"Select * From CabecOportunidadesVenda"',
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
    }*/
  }
};
</script>

<style lang="scss">
.color-icon-label-table {
  td:first-child {
    width: 1rem;
  }
}
</style>