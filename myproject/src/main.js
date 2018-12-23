// Polyfills
// import 'es6-promise/auto'
// import 'babel-polyfill'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App'
import store from './store'
import router from './router'
import VuesticPlugin from '@/vuestic-theme/vuestic-plugin'
import './i18n'
import YmapPlugin from 'vue-yandex-maps'
import axios from './backend/vue-axios'
import VueFire from 'vuefire'
import firebase from 'firebase'

Vue.use(VuesticPlugin)
Vue.use(YmapPlugin)
Vue.use(VueFire)

 var config = {
    apiKey: "AIzaSyBG_uHiesuRuEKCOQ7GIY9t5mofDwGBV1A",
    authDomain: "my-project-1524031309438.firebaseapp.com",
    databaseURL: "https://my-project-1524031309438.firebaseio.com",
    projectId: "my-project-1524031309438",
    storageBucket: "",
    messagingSenderId: "778604214225"
  };

  firebase.initializeApp(config)

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  next()
})

router.afterEach((to, from) => {
  store.commit('setLoading', false)
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  axios,
  render: h => h(App)
})
