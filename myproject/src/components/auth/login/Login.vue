<template>
  <div class="login">
    <h2>{{'auth.welcome' | translate}}</h2>
    <form name="login" @submit.prevent="login">
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <div class="form-group">
        <div class="input-group">
          <input type="text" v-model="email" required="required"/>
          <label class="control-label" for="email">{{'auth.email' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" v-model="password" required="required"/>
          <label class="control-label" for="password">{{'auth.password' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary" type="submit">
          {{'auth.login' | translate}}
        </button>
        <router-link class='link' :to="{name: 'signup'}">{{'auth.createAccount' | translate}}</router-link>
      </div>
    </form>
    
  </div>
    
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      error: false
    }
  },
  methods: {
    login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('home')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      },
    /*login () {
      const qs = require('qs');
      const data = {
        'username': 'FEUP' ,
        'password' : 'qualquer1' ,
        'instance' : 'DEFAULT' ,
        'grant_type' : 'password' ,
        'company': 'BELAFLOR',
        'line' : 'professional'};
      const headers = { 'content-type': 'application/x-www-form-urlencoded' }
      
      this.$http.post('/token',qs.stringify(data),headers)
        .then(request => this.loginSuccessful(request))
        .catch(() => this.loginFailed())
    },*/
    loginSuccessful (req) {
      console.log(req)
      if (!req.data['access_token']) {
        this.loginFailed()
        return
      }
      this.error = false
      localStorage.token = req.data['access_token']
      console.log(localStorage.token)
      this.$router.push('/')
      
    },
    loginFailed () {
      this.error = 'Login failed!'
      delete localStorage.token
    }
  }
}
</script>

<style lang="scss">
  .login {
    @include media-breakpoint-down(md) {
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
      .down-container {
        .link {
          margin-top: 2rem;
        }
      }
    }

    h2 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 3.125rem;
    }
  }
</style>
