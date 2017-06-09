/**
 * Author:Vinsea.
 * CreateDate:2017/6/7 9:28.
 * Describe:网站上线倒计时页面 路由
 */
const countDown = r => require.ensure([], () => r(require('../../views/others/CountDown.vue')), 'countDown')

export default
[
  {
    path: '/countDown',
    name: 'countDown',
    component: countDown
  }
]
