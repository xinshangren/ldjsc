<template>
  <div style="margin-top:54px;">
    <iframe
      id="iframe"
      :src="itemEnti"
      frameborder="no"
      scrolling="yes"
      style="width:100%; overflow-x:scroll; overflow-y:hidden; "
    ></iframe>
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
import { httpMethod } from "../../api/getData.js";
import global_variable from "../../api/global_variable.js";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  name: "yqdataVue",
  data() {
    return {
      active: 0,
      itemEnti: "",
      ifrheight: ""
    };
  },
  mounted() {
    this.itemEnti = this.$route.params.entity;
    console.log(this.itemEnti);
    var height = window.innerHeight + "px";
    console.log(height);
    $("#iframe").css("height", height);
  },
  methods: {}
};
</script>

<style >
#iframe ::-webkit-scrollbar {
  width: 0 !important;
}
#iframe::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>
