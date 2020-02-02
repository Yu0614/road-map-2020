import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import internet from '@/components/internet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/internet',
      name: 'internet',
      component: internet
    }
  ]
})
