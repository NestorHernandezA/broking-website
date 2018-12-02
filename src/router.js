import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})