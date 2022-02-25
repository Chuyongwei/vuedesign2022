import Vuex from 'vuex'
import Vue from 'vue'
import { getToken, setToken, removeToken } from '@/util/auth'
Vue.use(Vuex)

 export default new Vuex.Store({
    state(){
        return {
            user: getToken(),
        }
    },
    mutations:{
        loginin(state,user){
            console.log(user,"vuex");
            state.user = user.data.username
            setToken(user.data.username)
        },
        logout(state){
            removeToken()
            state.user=null
        },


    },
    actions:{

    }
})

