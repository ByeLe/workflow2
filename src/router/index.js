import Vue from 'vue'
import flowDesign from '@/pages/flowDesign/index'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/flowDesign', // 流程图G6
      name: 'flowDesign',
      component: flowDesign
    },
  ]
})
