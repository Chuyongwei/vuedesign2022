import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

 export default new Vuex.Store({
    state(){
        return {
            count: 0,
            msg: "bugao"
        }
    },
    mutations:{
        increment(state){
            state.count++
        }
    }
})

