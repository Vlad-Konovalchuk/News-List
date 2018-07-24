import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import News from './views/News.vue'
import Contacts from './views/Contacts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/about',
      name:'about',
      component:About
    },
    {
      path:'/news',
      name:'news',
      component:News
    },
    {
      path:'/contacts',
      name:'contacts',
      component:Contacts
    }



  ]
})
