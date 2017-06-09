/**
 * Author:Vinsea.
 * CreateDate:2017/6/9 15:19.
 * Describe:辩论页面 路由
 */
const debatePage = r => require.ensure([], () => r(require('../../views/debate/debatePage.vue')), 'debatePage')
const blue = r => require.ensure([], () => r(require('../../views/debate/debatePage.vue')), 'debateBlue')
const red = r => require.ensure([], () => r(require('../../views/debate/debatePage.vue')), 'debateRed')

export default
[
  {
    path: '/debatePage',
    name: 'debatePage',
    component: debatePage
  },
  {
    path: '/debatePage/blue',
    name: 'blue',
    component: blue
  },
  {
    path: '/debatePage/red',
    name: 'red',
    component: red
  }
]
