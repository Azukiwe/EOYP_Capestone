import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleProduct from '../components/singleProduct.vue'

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
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/products',
    name: 'Shop Now',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import('../views/adminView.vue')
  },
  {
    path: '/NewsFeed',
    name: 'News',
    component: () => import('../views/NewsFeed.vue')
  },
  {
    path: '/userProfile',
    name: 'myAccount',
    component: () => import('../views/userProfile.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/signUp',
    name: 'Register',
    component: () => import('../views/signUp.vue')
  },
  {
    path: '/singleProduct/:id',
    name: 'singleProduct',
    component: SingleProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
