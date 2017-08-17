import Vue from 'vue'
import  Vuex from  'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    token: '',
  },
  mutations: {
    ADDINFO(state, info){
      state.token = info;
    },
  },
  actions: {
    addInfo(context, info){
      context.commit("ADDINFO", info);
    }
  }
});
export  default  store
