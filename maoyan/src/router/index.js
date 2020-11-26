import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: main,
    redirect:'/home',
    children:[{
      path: '/home',
      name: 'Home',
      component: ()=>import('@/views/Home'),
    },{
      path: '/movies',
      name: 'movies',
      component: ()=>import('@/views/movie'),
    }
  ]
  },
  {
    path: '*',
    name: 'other',
    component: () => import( '@/components/comment/404')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
