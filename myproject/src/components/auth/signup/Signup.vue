<template>
  <div class="signup">
    <h2>{{'auth.createNewAccount' | translate}}</h2>
      <div class="form-group with-icon-right"
           :class="{'has-error': errors.has('email'), 'valid': isFormFieldValid('email')}">
        <div class="input-group">
          <input
            type="text"
            v-model="email"
            v-validate="'required|email'"
            required="required"/>
          <i
            class="fa fa-exclamation-triangle icon-right input-icon"
            v-show="errors.has('email')"></i>
          <i class="fa fa-check valid-icon icon-right input-icon"></i>
          <label class="control-label" for="email">{{'auth.email' | translate}}</label><i class="bar"></i>
          <small v-show="errors.has('email')" class="help text-danger">{{
            errors.first('email') }}
          </small>
        </div>
      </div>
      <div class="form-group with-icon-right"
           :class="{'has-error': errors.has('password'), 'valid': isFormFieldValid('password')}">
        <div class="input-group">
          <input
            type="password"
            v-model="password"
            v-validate="'required|min:8|max:25'"
            required="required"/>
          <i
            class="fa fa-exclamation-triangle icon-right input-icon"
            v-show="errors.has('password')"></i>
          <i class="fa fa-check valid-icon icon-right input-icon"></i>
          <label class="control-label" for="password">{{'auth.password' | translate}}</label><i class="bar"></i>
          <small v-show="errors.has('password')" class="help text-danger">{{
            errors.first('password') }}
          </small>
        </div>
      </div>
      <div class="form-group with-icon-right"
           :class="{'has-error': errors.has('termsOfUse'), 'valid': isFormFieldValid('termsOfUse')}">
        <div class="input-group">
          <vuestic-checkbox
            :id="'termsOfUse'"
            v-validate="'required'"
            v-model="checkboxOneModel">
            {{'auth.agree' | translate}}
            <router-link to="/admin/dashboard">{{'auth.termsOfUse' | translate}}</router-link>
          </vuestic-checkbox>
          <i
            class="fa fa-exclamation-triangle icon-right input-icon"
            v-show="errors.has('termsOfUse')"></i>
          <i class="fa fa-check valid-icon icon-right input-icon"></i>
          <small v-show="errors.has('termsOfUse')" class="help text-danger">{{
            errors.first('termsOfUse') }}
          </small>
        </div>
      </div>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary" @click ="signUp">
          Sign Up
        </button>
        <router-link class='link' :to="{name: 'login'}">{{'auth.alreadyJoined' | translate}}</router-link>
      </div>
  </div>
</template>

<script>


import firebase from 'firebase';

export default {
  name: 'signup',
  data() {
      return {
        email: '',
        password: '',
        checkboxOneModel: false
      }
    },
  methods: {
    signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('home')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      },
    isFormFieldValid (field) {
      let isValid = false
      if (this.formFields[field]) {
        isValid = this.formFields[field].validated && this.formFields[field].valid
      }
      return isValid
    },
    validateFormField (fieldName) {
      this.$validator.validate(fieldName, this[fieldName])
    }
  }
}
</script>

<style lang="scss">
  .signup {
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
      margin-top: 2.6875rem;
    }
  }
</style>
