import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import "./style/theme/index.css"
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';
import store from './store'
import axios from './util/require'
// import axios from 'axios'
// axios.defaults.baseURL="/api"
Vue.config.productionTip = false
Vue.prototype.$axios = axios
// 导入echarts
import echarts from 'echarts'

import router from './router'
Vue.prototype.$echarts = echarts
Vue.use(ElementUI, { locale })


// 导入Element ui
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
