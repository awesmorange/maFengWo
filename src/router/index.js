import Vue from 'vue'
import Router from 'vue-router'

import FirstPage from '@/components/FirstPage'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage,
      meta:{
        title: '首页',
        header: true,
      }
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage,
      meta:{
        title: '首页',
        header: true,
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta:{
        title: '注册',
        header: false,
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta:{
        title: '登录',
        header: false,
      }
    }
  ]
})
