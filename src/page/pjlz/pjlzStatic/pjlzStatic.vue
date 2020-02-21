
<template>
  <div style="margin-top: 44px;font-size: 15px;border-top: 1px solid #f1f1f1;padding-top:16px;">
      <div style="display:flex;">
         <div class="pjlzStaticTitile">工作完成情况</div>

         <div id="dateTimeId" style="display:flex;margin-left:24px;">
             <div class="pjlzStaticTimeSelect">
               年
             </div>
              <div class="pjlzStaticTimenoSelect">
               月
             </div>
             <div class="pjlzStaticTimenoSelect">
               周
             </div>
              <div class="pjlzStaticTimenoSelect">
               日
             </div>
         </div>
      </div>

  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
import { Tab, Tabs, Search,Popup } from "vant";
import dd from "dingtalk-jsapi";
import MescrollVue from "mescroll.js/mescroll.vue";
Vue.use(Tab)
  .use(Tabs)
  .use(Search)
  .use(Popup);
import global_variable from "../../../api/global_variable.js";
import { httpMethod } from "../../../api/getData.js";
export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  name: "pjlzStaticVue",
  data() {
    return {
      seach_value: "",
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log(from);
    console.log(to);
    next();
  },
  mounted() {
  
  },
  methods: {
    
  }
};
</script>

<style >
@import "../../../page/pjlz/pjlzStatic/pjlzStatic.css";
</style>
