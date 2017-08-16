import Vue from 'vue'
import  Vuex from  'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    accesstoken:'',
  },
  mutations: {
    ADDINFO(state,info){
      state.accesstoken.push(info);
    },
  },
  actions :{
    addInfo(context,info){
      context.commit("ADDINFO",info);
    }
  }
});
export  default  store
