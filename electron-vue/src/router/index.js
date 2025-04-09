import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalendarView from '../views/CalendarView.vue'
import EventFeedView from '../views/EventFeedView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/event_feed',
    name: 'event_feed',
    component: EventFeedView
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
