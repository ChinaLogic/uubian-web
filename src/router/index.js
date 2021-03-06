import Vue from 'vue'
import Router from 'vue-router'

// 首页
const index = r => require.ensure([], () => r(require('../views/Index.vue')), 'index')

import otherRouters from './module/others'
import debateRouters from './module/debate'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/', redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        name: '首页'
      }
    }
  ]
})
router.addRoutes(otherRouters)
router.addRoutes(debateRouters)
export default router
