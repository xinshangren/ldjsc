<template>
  <div style="">
    1111
  </div>
</template>
<script>
import echarts from "echarts";
import $ from "jquery";
import { httpMethod } from "../../../../api/getData.js";
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
export default {
  name: "hbgj_air",
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  activated() {
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  data() {
    return {
      active: 0,
      indexTabImg1: require("../../../../assets/img/air_home_tab1selected.png"),
     
    };
  },
  mounted() {
    //this.getListData();
  },
  methods: {
    getListData: function() {
      var params = {
        targetIds: "58，59，61，62，63"
      };
      //获取数据
      httpMethod
        .findByTargetIds(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
@import "../../../../page/zdgz/hbgj/hbgj.css";
@import "../../../../assets/css/frozenui.css";
</style>