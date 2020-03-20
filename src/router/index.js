import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import internet from '@/components/internet'
import htmls from '@/components/htmls'
import css from '@/components/css'
import javascript from '@/components/javascript'
import versionControl from '@/components/versionControl'
import webSecurity from '@/components/webSecurity'
import hostingService from '@/components/hostingService'
import cssArchitecture from '@/components/cssArchitecture'
import cssPreprocessor from '@/components/cssPreprocessor'
import packageManagers from '@/components/packageManagers'

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
    },
    {
      path: '/versionControl',
      name: 'versionControl',
      component: versionControl
    },
    {
      path: '/webSecurity',
      name: 'webSecurity',
      component: webSecurity
    },
    {
      path: '/cssArchitecture',
      name: 'cssArchitecture',
      component: cssArchitecture
    },
    {
      path: '/cssPreprocessor',
      name: 'cssPreprocessor',
      component: cssPreprocessor
    },
    {
      path: '/packageManagers',
      name: 'packageManagers',
      component: packageManagers
    },
    {
      path: '/hostingService',
      name: 'hostingService',
      component: hostingService
    }
  ]
})
