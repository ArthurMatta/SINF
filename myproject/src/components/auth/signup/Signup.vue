<template>
  <div class="signup">
    <h2>{{'auth.createNewAccount' | translate}}</h2>
    <form method="post" action="/auth/signup" name="signup">
      <div class="form-group with-icon-right"
           :class="{'has-error': errors.has('name'), 'valid': isFormFieldValid('name')}">
        <div class="input-group">
          <input
            type="text"
            name="name"
            v-model="name"
            v-validate="'required|min:3|max:50|alpha_spaces'"
            required="required"/>
          <i
            class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
          <i class="fa fa-check valid-icon icon-right input-icon"></i>
          <label class="control-label">Name</label><i class="bar"></i>
          <small v-show="errors.has('name')" class="help text-danger">{{
            errors.first('name') }}
          </small>
        </div>
      </div>
      <div class="form-group with-icon-right"
           :class="{'has-error': errors.has('email'), 'valid': isFormFieldValid('email')}">
        <div class="input-group">
          <input
            type="text"
            id="email"
            name="email"
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
           :class="{'has-error': errors.has('phone'), 'valid': isFormFieldValid('phone')}">
        <div class="input-group">
          <input
            type="text"
            id="phone"
            name="phone"
            v-validate="'required|digits:9'"
            required="required"/>
          <i
            class="fa fa-exclamation-triangle icon-right input-icon"
            v-show="errors.has('phone')"></i>
          <i class="fa fa-check valid-icon icon-right input-icon"></i>
          <label class="control-label" for="phone">Phone number</label><i class="bar"></i>
          <small v-show="errors.has('phone')" class="help text-danger">{{
            errors.first('phone') }}
          </small>
        </div>
      </div>
      <div class="form-group with-icon-right"
           :class="{'has-error': errors.has('password'), 'valid': isFormFieldValid('password')}">
        <div class="input-group">
          <input
            type="password"
            id="password"
            name="password"
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
        <button class="btn btn-primary" type="submit">
          {{'auth.signUp' | translate}}
        </button>
        <router-link class='link' :to="{name: 'login'}">{{'auth.alreadyJoined' | translate}}</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      checkboxOneModel: false
    }
  },
  methods: {
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
