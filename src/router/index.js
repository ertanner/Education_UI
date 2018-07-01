import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import AddUser from '@/components/AddUser'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/addUser',
      name: 'AddUser',
      component: AddUser
    }
  ]
})
