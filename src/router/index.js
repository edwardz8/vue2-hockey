import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PlayerDetails from '../components/PlayerDetails.vue'
import Pitchers from '../components/Pitchers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pitchers',
    name: 'Pitchers',
    component: Pitchers
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/player/:id",
    name: "PlayerDetails",
    props: true,
    component: PlayerDetails
  },
]

const router = new VueRouter({
  routes
})

export default router
