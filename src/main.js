// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

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
Vue.prototype.$setgoindex = function () {
  console.log("===========");
  if (window.history.length <= 1) {
    if (location.href.indexOf('?') === -1) {
      window.location.href = location.href + '?goindex=true'
    } else if (location.href.indexOf('?') !== -1 && location.href.indexOf('goindex') === -1) {
      window.location.href = location.href + '&goindex=true'
    }
  }
}
Vue.use(Vant);
<<<<<<< HEAD
eruda.init();
=======
// eruda.init();
>>>>>>> d4169dc68a5c258302c92235df322bca57df3adf
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
