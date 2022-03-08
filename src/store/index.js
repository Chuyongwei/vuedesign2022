import Vuex from 'vuex'
import Vue from 'vue'
import { getToken, setToken, removeToken } from '@/util/auth'
import axios from "@/util/require.js"
Vue.use(Vuex)

 export default new Vuex.Store({
    state(){
        return {
            user: {},
            uid: getToken()-0,
            patient: null
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
        SET_PATIENT(state,data){
            state.patient = data
        }

    },
    actions:{
        setPatient({commit,state}){
            
            axios.post("/user/findpatientbyname", state.user)
            .then((data) => {
              console.log("路由获取病人的数据", data);
              if (data.length) {
                let inform = data[0];
                commit("SET_PATIENT",inform)
              } 
              console.log("订阅3");
            })
        },
    }
})

