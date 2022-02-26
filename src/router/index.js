import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import axios from '../util/require'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    meta: {
      title: "工作"
    },
    component: () => import("@/pages/Login.vue"),
    children: [

    ]
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/Home/Home.vue"),
    redirect: "/home/doctor/",
    children: [
      {
        path: "doctor",
        name: "doctor",
        component: () => import("@/pages/Doctor/index.vue")
      },
      {
        path: "medical",
        name: "medical",
        component: () => import("@/pages/Medical/index.vue")
      },
      {
        path: "score",
        name: "score",
        component: () => import("@/pages/Score/index.vue")
      },
      {
        path: "inform",
        name: "inform",
        component: () => import("@/pages/Inform/index.vue")
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

router.beforeEach((to, from, next) => {
  console.log("守卫",to,from);
  console.log("守卫中的sotre", store.state)

  if (store.state.uid&&!store.state.username){
    let user = {uid: store.state.uid}
    axios.post("/user/checkUserBy",user).then(e=>{
      // this.user = e.data
      console.log("内部",e);
    store.commit("getuser",e)
    })
    console.log("ti",store.state.user);
    // next({path:"/home"})
  }
  if (to.path == "/login") {
    if (store.state.uid){
      // let user = {uid: store.state.uid}
      // axios.post("/user/checkUserBy",user).then(e=>{
      //   // this.user = e.data
      // store.commit("getuser",e.data)
      // })
      next({path:"/home"})
    }
    else
    next()
      // this.$router.push({ path: "/home/doctor" });
  }
      // this.user.uid = this.$store.state.uid;
    // console.log("home的",this.$store.state.uid,this.user);
    // if (this.user.uid===0) this.$router.push({ path: "/" });
    // else {
    //   console.log(this.user);
    //   this.$axios.post("/user/checkUserBy",this.user).then(e=>{
    //     this.user = e.data
    //   this.$store.commit("getuser",this.user)
    //   })
    // }
  
  // if(to.path!=="/home/inform"){
  //   next({path:"/home/inform"})
  // }else
  next()
})

export default router
