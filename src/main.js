// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css'
import axios from  'axios'
/*import  Vuex from 'vuex'*/
import store from './vuex/store'
Vue.use(MuseUI)
Vue.config.productionTip = false;
Vue.prototype.$http =axios;
axios.defaults.withCredentials = true;
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
