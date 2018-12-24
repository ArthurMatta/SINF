import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../components/admin/AppLayout'
import AuthLayout from '../components/auth/AuthLayout'
import lazyLoading from './lazyLoading'

Vue.use(Router)

const demoRoutes = []
if (process.env.NODE_ENV === 'development') {
  const VueBook = require('vue-book').default

  demoRoutes.push(
    VueBook(require.context('./..', true, /.demo.vue$/), '/demo'),
    VueBook(require.context('./../components', true, /.vue$/), '/presentation'),
  )
}

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

const deal = {
  props: {
    name: String,
    stage: String,
    closeDate: Date,
    owner: String,
    amount: Number,
    associate: String
  }
}

export default new Router({
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: {name: 'dashboard'},
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: lazyLoading('auth/login/Login'),
        },
        {
          name: 'signup',
          path: 'signup',
          component: lazyLoading('auth/signup/Signup'),
        },
        {
          path: '',
          redirect: {name: 'login'},
        },
      ],
    },
    {
      name: 'Admin',
      path: '/admin',
      component: AppLayout,
      children: [
        {
          name: 'dashboard',
          path: 'dashboard',
          component: lazyLoading('sinf-dashboard/Sinf-Dashboard'),
          default: true,
        },
        
        {
          name: 'leads',
          path: 'leads',
          component: EmptyParentComponent,
          children: [
            {
              name: 'overview',
              path: 'overview',
              component: lazyLoading('sinf-salesorders/Sinf-salesorders'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables'
              }
            },
            {
              name: 'saleDescription',
              path: 'saleDescription',
              component: lazyLoading('sinf-salesorders/Sinf-saleDescription'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Timelines'
              },
              props: true
            },
            {
              name: 'newLead',
              path: 'newLead',
              component: lazyLoading('sinf-salesorders/newLead'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Timelines'
              },
              props: true
            }
          ],
        },
         {
          name: 'clients',
          path: 'clients',
          component: EmptyParentComponent,
          children: [
            {
              name: 'overviewClient',
              path: 'overview',
              component: lazyLoading('sinf-clients/Sinf-clients'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables'
              }
            },
            {
              name: 'newClient',
              path: 'newClient',
              component: lazyLoading('sinf-opportunities/Sinf-opportunities'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Timelines'
              },
              props: true
            }
          ],
        },
        {
          name: 'salesrep',
          path: 'salesrep',
          component: lazyLoading('sinf-salesrep/Sinf-salesrep'),
          meta: {
            wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables'
          }
        },
         {
          name: 'opportunities',
          path: 'oppo',
          component: lazyLoading('sinf-opportunities/Sinf-opportunities'),
          meta: {
            wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables'
          }
    	},
      {
          name: 'create-lead',
          path: 'create-lead',
          component: lazyLoading('forms/create-lead/create-lead'),
          meta: {
            wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables'
          }
      }
      ],
    },
  ],
})
