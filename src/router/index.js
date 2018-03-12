import Vue from 'vue'
import Router from 'vue-router'
import Page from '../page.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LuisVilches',
      component: Page
    }
  ]
})
