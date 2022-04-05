import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import axios from '../util/require'
import { getToken } from '@/util/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home",
    meta: {
      title: "工作"
    },
    component: () => import("@/pages/Home/Home.vue"),
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
      }, {
        path: "doctor/detail/:id",
        name: "detail",
        component: () => import("@/pages/Doctor/Detail.vue")
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
    component: () => import('../pages/Login.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log("守卫", to, from);
  console.log("守卫中的sotre", store.state)
  // if (pageTitle) {
  //   // INFO 修改标题名
  //   return `${pageTitle} - ${title}`
  // }
  // return `${title}`
  document.title = "用户预约"
  const hasToken = getToken()
  if (hasToken) {
    console.log("有hasToken", hasToken);
    // 有账号在登录就转到应用页面
    if (to.path == "/login") {
      next("/")
    } else {
      // 添加用户信息
      console.log("user", store.state.user);
      if (!store.state.user) {
        let user = { uid: hasToken }
        axios.post("/user/checkUserBy", user).then(e => {
          console.log("守卫中获取的user", e);
          // XXX 修改get为SET
          store.commit("getuser", e)
          store.dispatch("setPatient")
        })
      } else {
        if (!store.state.patient) {
          store.dispatch("setPatient")
        }
      }

    }
  } else {
    console.log("没有有hasToken");
    if (to.path == "/login") {
      next()
    } else {
      next("/login")
    }
  }
  next()
})


export default router
