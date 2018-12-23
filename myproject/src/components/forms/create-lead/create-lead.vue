<template>
  <div class="create-lead">
    <div class="form-elements">
      <div class="row">
        <div class="col-md-8">
          <vuestic-widget :headerText="'Create Lead' | translate">
            <form name="newLead" @submit.prevent="newLead	">
              <div class="row justify-content-center">
                <div class="col-md-4">
                  <fieldset>
                    <div class="form-group">
                      <div class="input-group">
                        <input id="simple-input" required>
                        <label class="control-label" for="simple-input">
                          {{'ID'
                          | translate}}
                        </label>
                        <i class="bar"></i>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-4">
                  <fieldset>
                    <div class="form-group">
                      <div class="input-group">
                        <input id="simple-input" required>
                        <label class="control-label" for="simple-input">
                          {{'Description'
                          | translate}}
                        </label>
                        <i class="bar"></i>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div class="row justify-content-center">
                <div class="col-md-4">
                  <fieldset>
                    <div class="form-group">
                      <div class="input-group">
                        <input id="simple-input" required>
                        <label class="control-label" for="simple-input">
                          {{'Summary'
                          | translate}}
                        </label>
                        <i class="bar"></i>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-4">
                  <fieldset>
                    <div class="form-group">
                      <div class="input-group">
                        <input id="simple-input" required>
                        <label class="control-label" for="simple-input">
                          {{'Cliente'
                          | translate}}
                        </label>
                        <i class="bar"></i>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-4">
                  <fieldset>
                    <div class="form-group">
                      <div class="input-group">
                        <input id="simple-input" required>
                        <label class="control-label" for="simple-input">
                          {{'Vendedor'
                          | translate}}
                        </label>
                        <i class="bar"></i>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-4">
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-primary">{{'Submit' | translate}}</button>
                  </div>
                </div>
              </div>
            </form>
          </vuestic-widget>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      ID: "",
      description: "",
      Summmary: "",
      Client: "",
      Salemen: "",
      error: false
    };
  },
  methods: {
    newLead() {
      var self = this;
      const url = "http://localhost:2018/WebApi/";
      axios
        .post(
          url + "Administrador/Consulta",
          {
            body: {
              Oportunidade: "OPV05",
              Descricao: "Teste",
              DataCriacao: "11/27/2018",
              DataExpiracao: "11/27/2018",
              Resumo: "Teste",
              Entidade: "SOFRIO",
              TipoEntidade: "C",
              EstadoVenda: "0",
              Moeda: "EUR",
              Vendedor: "1",
              CicloVenda: "CV_SOFT",
              Zona: "01"
            }
          },
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

<style scoped>
</style>
