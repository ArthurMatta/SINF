<template>
  <div class="row">
    <div class="col-xs-12 col-md-12">
      <vuestic-widget>
        <div class="table-responsive">
          <table class="table table-striped table-sm color-icon-label-table">
            <thead>
              <tr>
                <td></td>
                <td>ID</td>
                <td>Name</td>
                <td>Address</td>
                <td>Country</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="entry in tableData" :key="entry.ID">
                <td></td>
                <td>
                  <router-link class="link" :to="{name: 'clientDescription', params: { deal: entry } }">
                  {{ entry.Cliente }}
                 </router-link>
                </td>
                <td align="middle">{{entry.Nome}}</td>
                <td align="middle">{{entry.Fac_Mor}}</td>
                <td align="middle">{{entry.Pais}}</td>

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
    this.getClients();
    console.log("mounted: got here");
  },
  data: function() {
    return {
      tableData: []
    };
  },
  components: {},
  methods: {
    getClients: function() {
      var self = this;
      const url = "http://localhost:2018/WebApi/";
      axios
        .get(
          url + "Base/Clientes/LstClientes",
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
    }
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