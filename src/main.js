// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios';
import Vant from 'vant';
import 'vant/lib/index.css';
import eruda from 'eruda';
import store from './store/store'
import global_ from './api/global_variable.js'
import 'amfe-flexible/index.js';
//import moment from 'moment'

import Vue from 'vue'
import App from './App'

import Vconsole from 'vconsole';
import router from './router'

//Vue.prototype.$moment = moment
Vue.prototype.GLOBAL=global_
Vue.config.productionTip = false
Vue.use(Vant);
var instance = axios.create({
  baseURL:'',
  timeout:10000,
  headers:{"Content-Type":"multipart/form-data"}
});
 
Vue.prototype.axios = axios;
Vue.prototype.instance=instance;
// eruda.init();
// const vConsole = new Vconsole();
// Vue.use(vConsole)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
