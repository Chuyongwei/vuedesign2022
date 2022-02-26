import Vuex from 'vuex'
import Vue from 'vue'
import { getToken, setToken, removeToken } from '@/util/auth'
Vue.use(Vuex)

 export default new Vuex.Store({
    state(){
        return {
            user: {},
            uid: getToken()-0
        }
    },
    mutations:{
        loginin(state,user){
            console.log("store的",user);
            state.user = user
            state.uid = user.uid
            setToken(user.uid)
        },
        getuser(state,user){
            state.user =user
        },
        logout(state){
            removeToken()
            state.user=null
        },


    },
    actions:{

    }
})

