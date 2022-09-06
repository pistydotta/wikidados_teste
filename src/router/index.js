import Vue from 'vue'
import VueRouter from 'vue-router'
import userIndex from '../views/user/index'
import userEdit from '../views/user/edit'
import userCreate from '../views/user/create'
Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'users',
    component: userIndex
  },
  {
    path: '/users/create',
    name: 'users.create',
    component: userCreate
  },
  {
    path: '/users/:id/edit',
    name: 'users.edit',
    component: userEdit
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
