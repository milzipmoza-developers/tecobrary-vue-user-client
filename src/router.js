import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/Main.vue'
import Search from '@/views/Search'
import BookDesc from '@/views/BookDesc'
import CodeReader from '@/views/CodeReader'
import Auth from '@/views/Auth'
import Mypage from '@/views/Mypage'

import RequestBook from '@/views/RequestBook'
import RequestResult from '@/views/RequestResult'
import MustRead from '@/views/MustRead'
import CurrentRental from '@/views/CurrentRental'
import Reservation from '@/views/Reservation'
import Favorite from '@/views/Favorite'
import History from '@/views/History'

import NotFound from '@/views/NotFound'

import store from '@/store'

Vue.use(Router)

const requireAuth = (from, to, next) => {
  const isUserLoggedIn = store.state.isUserLoggedIn
  if (!isUserLoggedIn) {
    next('/')
  }
  next()
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'main', component: Main, props: true },
    { path: '/search', name: 'search', component: Search },
    { path: '/book', name: 'book', component: BookDesc, props: (route) => ({ id: route.query.id }) },
    { path: '/rent', name: 'rent', component: CodeReader, beforeEnter: requireAuth },
    { path: '/auth', name: 'auth', component: Auth, props: (route) => ({ code: route.query.code }) },
    { path: '/mypage', name: 'mypage', component: Mypage, beforeEnter: requireAuth },
    { path: '/request_book', name: 'request_book', component: RequestBook, beforeEnter: requireAuth },
    { path: '/request_result', name: 'request_result', component: RequestResult, props: { book: null }, beforeEnter: requireAuth},
    { path: '/current_rental', name: 'current_rental', component: CurrentRental, beforeEnter: requireAuth },
    { path: '/reservation', name: 'reservation', component: Reservation, beforeEnter: requireAuth },
    { path: '/favorite', name: 'favorite', component: Favorite, beforeEnter: requireAuth },
    { path: '/history', name: 'history', component: History, beforeEnter: requireAuth },
    { path: '/mustread', name: 'mustread', component: MustRead, beforeEnter: requireAuth },
    { path: '*', component: NotFound }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
