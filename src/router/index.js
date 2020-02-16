import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import internet from '@/components/internet'
import htmls from '@/components/htmls'
import css from '@/components/css'
import javascript from '@/components/javascript'

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
    },
    {
      path: '/htmls',
      name: 'htmls',
      component: htmls
    },
    {
      path: '/css',
      name: 'css',
      component: css
    },
    {
      path: '/javascript',
      name: 'javascript',
      component: javascript
    }
  ]
})
