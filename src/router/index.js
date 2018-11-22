import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Main from '@/pages/Main/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
