import Vue from 'vue'
import Router from 'vue-router'

//pages
import MainPage from '@/components/MainPage';
import Login from '@/components/Login';
import Registration from '@/components/Registration';
import NotFoundPage from '@/components/NotFoundPage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/auth/reg',
      name: 'Registration',
      component: Registration
    },
    {
      path: '*',
      name: '404',
      component: NotFoundPage
    }
  ]
})
