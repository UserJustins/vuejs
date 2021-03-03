import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: () => import('../views/home/Home.vue') },
  { path: '/category', component: () => import('../views/category/Category.vue') },
  { path: '/cart', component: () => import('../views/shopcart/Shopcart.vue') },
  { path: '/profile', component: () => import('../views/profile/Profile.vue') },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

export default router
