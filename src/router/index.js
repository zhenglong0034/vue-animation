import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import test from '@/components/test.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'pageIndex',
      component: index,
    },
    {
      path: '/test',
      name: 'pageTest',
      component: test,
    },

  ]
})
