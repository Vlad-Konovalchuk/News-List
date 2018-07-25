import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contacts from './views/Contacts.vue'
import Article from './views/Article.vue'
import HomeMain from './components/HomeMain.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'home',
      component:Home,
      redirect:{component:HomeMain},
      children:[
        {
          path:'/',
          name:'homemain',
          component:HomeMain
        },
        {
          path:'/:sourse',
          name:'ny',
          component: Article
        }
      ]
    },
    {
      path:'/about',
      name:'about',
      component:About
    },
    // {
    //   path:'/news',
    //   name:'news',
    //   component:News
    // },
    {
      path:'/contacts',
      name:'contacts',
      component:Contacts
    }



  ]
})
