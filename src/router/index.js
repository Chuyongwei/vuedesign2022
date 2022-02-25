import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    meta:{
      title:"工作"
    },
    component: ()=>import("@/pages/Login.vue"),
    children:[

    ]
  },
  {
    path: "/home",
    name:"home",
    component:()=>import("@/pages/Home/Home.vue"),
    redirect: "/home/doctor/",
    children:[
      {
        path:"doctor",
        name:"doctor",
        component:()=>import("@/pages/Doctor/index.vue")
      },
      {
        path:"medical",
        name:"medical",
        component:()=>import("@/pages/Medical/index.vue")
      },
      {
        path:"score",
        name:"score",
        component:()=>import("@/pages/Score/index.vue")
      },
      {
        path:"inform",
        name: "inform",
        component:()=>import("@/pages/Inform/index.vue")
      }
    ]
  },

  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
