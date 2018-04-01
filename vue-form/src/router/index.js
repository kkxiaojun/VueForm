import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login/login'
import Register from '@/components/signup/signup'
import CustomForm from '@/components/form/custom_form'
import ModelForm from '@/components/form/model_form'
import Help from '@/components/help/help'
import Person from '@/components/person/person'
import Main from '@/components/main'
import Preview from '@/components/form/PreviewForm'
import View from '@/components/form/view'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
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
      path: '/customform/:id',
      name: 'customform',
      component: CustomForm
    },
    {
      path: '/modelform',
      name: 'ModelForm',
      component: ModelForm
    },
    {
      path: '/view',
      name:'View',
      component: View
    },
    {
      path: '/preview/:id',
      name: 'preview',
      component: Preview
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/person',
      name: 'person',
      component: Person
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    }
  ]
})
