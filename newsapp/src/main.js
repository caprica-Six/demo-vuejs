// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)
Vue.prototype.$axios = axios

Vue.config.productionTip = false

import home from './components/Home'
import business from './components/Business'
import sidebar from './components/Sidebar'

// define routes
const routes = [
// define the root url of the application.
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/business',
    name: 'business',
    component: business
  },
  {
    path: '/',
    name: 'sidebar',
    component: sidebar
  }
]

/* eslint-disable no-new */

// Create the router instance and pass the `routes` option

const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history',
  hashbang: false
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app') // mounts the router on the app
