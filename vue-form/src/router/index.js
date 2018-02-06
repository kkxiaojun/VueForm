import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login/login'
import Register from '@/components/signup/signup'
import Form from '@/components/form/form'
import Main from '@/components/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    }
  ]
})
