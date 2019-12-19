// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store/store'
import global_ from './api/global_variable.js'
//import moment from 'moment'
import router from './router'
//Vue.prototype.$moment = moment
Vue.prototype.GLOBAL=global_
Vue.config.productionTip = false
Vue.use(Vant);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
