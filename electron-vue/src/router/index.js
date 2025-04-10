import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalendarView from '../views/CalendarView.vue'
import EventRegistrationView from '../views/EventRegistrationView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/event_registration',
    name: 'event_registration',
    component: EventRegistrationView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
