<template>
  <div class="create-lead">
    <div class="form-elements">
      <div class="row">
        <div class="col-md-8">
          <vuestic-widget :headerText="'Create Client' | translate">
            <form name="newLead" @submit.prevent="newLead">
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
                        <input id="simple-input" v-model="name" required>
                        <label class="control-label" for="simple-input">
                          {{'name'
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
                        <input id="simple-input" v-model="Adress" required>
                        <label class="control-label" for="simple-input">
                          {{'Adress'
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
                        <input id="simple-input" v-model="Country"required>
                        <label class="control-label" for="simple-input">
                          {{'Country'
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
      name: '',
	  Adress: '',
	  Country:'',
      error: false
    };
  },
  methods: {
    newLead() {
      var self = this;
      const url = "http://localhost:2018/WebApi/";
      axios
        .post(
          url + "Base/Clientes/Actualiza",
          {
            Cliente: self.ID,
			Nome: self.name,
			Descricao: self.description,
			Morada: self.Adress,
			//Localidade: 'VILANUEVA DE ARRIBA',
			//CodigoPostal: '61001',
			//LocalidadeCodigoPostal: 'MADRID',
			//Telefone: '00.034.1.474747447',
			//Fax: '00.034.1.4374747474',
			//EnderecoWeb: 'http://alcad.es',
			//Distrito: '',
			NumContribuinte: '989922456',
			//Pais: 'ES',
			Moeda: 'EUR' 
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
