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
                        <input type="text" v-model="ID" required="required"/>
                        <label class="control-label" for="ID">{{'Oportunity id' | translate}}</label><i class="bar"></i>
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
                        <input id="simple-input" v-model="description" required>
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
                        <input id="simple-input" v-model="summmary" required>
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
                        <input id="simple-input" v-model="Client"required>
                        <label class="control-label" for="simple-input">
                          {{'Client'
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
                        <input id="simple-input" v-model="Salesmen"required>
                        <label class="control-label" for="simple-input">
                          {{'Salesmen'
                          | translate}}
                        </label>
                        <i class="bar"></i>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div class="alert alert-danger" v-if="error">{{ error }}</div>
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
import axios from 'axios'
export default {
  components: {},
  data() {
    return {
      ID: '',
      description: '',
      summmary: '',
      Client: '',
      Salesmen: '',
      error: false
    };
  },
  methods: {
    newLead() {
      var self = this;
      const url = "http://localhost:2018/WebApi/";
      axios
        .post(
          url + "CRM/OportunidadesVenda/Actualiza/%22%22 ",
          {
              Oportunidade: self.ID,
              Descricao: self.description,
              DataCriacao: "11/27/2018",
              DataExpiracao: "11/27/2018",
              Resumo: self.summmary,
              Entidade: self.Client,
              TipoEntidade: "C",
              EstadoVenda: "0",
              Moeda: "EUR",
              Vendedor: self.Salesmen,
              CicloVenda: "CV_SOFT",
              Zona: "01"
            },{
            headers: {
              "cache-control": "no-cache",
              Authorization: "Bearer " + localStorage.token,
              "Content-Type": "application/json"
            }
          }
        )
        .then( request => this.insertSucc(request))
        .catch(error => this.insertFail(error));
    },
    insertSucc(resq){
      this.$router.push('/leads/overview')
      console.log(resq)
    },
    insertFail(resq){
      this.error = 'New Opportunitty failed !'
    }
  }
};
</script>

<style scoped>
</style>
