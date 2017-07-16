import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/components/List'
import Training from '@/components/training'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hsk/:id',
      name: 'list',
      component: List
    },
    {
      path: '/training/:id',
      name: 'training',
      component: Training
    }
  ]
})
