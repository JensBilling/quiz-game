import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateUser from "@/views/CreateUser";
import Login from "@/views/Login";
import QuizCard from "@/components/QuizCard";
import Highscores from "../components/Highscores";

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createuser',
    name: 'createuser',
    component: CreateUser
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/startgame',
    name: 'startgame',
    component: QuizCard

  },
  {
    path: '/highscores',
    name: 'highscores',
    component: Highscores
  }

]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
