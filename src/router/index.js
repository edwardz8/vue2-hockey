import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PlayerDetails from '../components/PlayerDetails.vue'
import BatterDetails from '../components/BatterDetails.vue'
import Players from '../views/Players.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/players',
    name: 'Players',
    component: Players
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
  {
    path: "/batter/:id",
    name: "BatterDetails",
    props: true,
    component: BatterDetails
  },
]

const router = new VueRouter({
  routes
})

export default router
