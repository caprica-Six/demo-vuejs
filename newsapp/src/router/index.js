import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Business from 'components/Business'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/business',
      name: 'business',
      component: Business
    }
  ]
})
