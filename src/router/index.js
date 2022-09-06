import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import userIndex from '../views/user/index'
import userEdit from '../views/user/edit'
import userCreate from '../views/user/create'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/users',
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
  routes
})

export default router
