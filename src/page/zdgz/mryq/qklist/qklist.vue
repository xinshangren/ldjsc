<template>
  <div id="qklistId" :style="backgroundDiv" style="background-size: 100% 100%;">
    <div style="font-size: 20px;padding-left: 16px;padding-top: 8px;">{{itemEnti.title}}</div>
      <div id="newsList" style="padding-left:10px;padding-right:10px;margin-top:10px;">
        <div
          style="margin-top:12px;position: relative;padding: 10px;background: rgb(255, 255, 255);height: 36px;border-radius: 10px;margin-bottom: 6px;box-shadow: rgb(204, 204, 204) 1px 1px 11px"
          v-for="(item,index) of list"
          :key="index"
          @click="goDetile(item)"
        >
          <div
            class="van-multi-ellipsis--l2"
            style="color: #333333;font-size: 16px;width: 93%; overflow: hidden;"
          >{{item.remark}}</div>
        </div>
      </div>
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
import { httpMethod } from "../../../../api/getData.js";
import global_variable from "../../../../api/global_variable.js";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "qklistVue",
  data() {
    return {
      list: [],
      itemEnti:{title:""},
      backgroundDiv: {
        backgroundImage:
          "url(" + require("../../../../assets/img/head_bg.jpg") + ")"
      }
    };
  },
  activated() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  beforeRouteLeave(to, from, next) {
    console.log(from);
    console.log(to);
    next();
  },
  mounted() {
    this.itemEnti = this.$route.params.entity;
   
     var qklistitemEnti= localStorage.getItem("qklistitemEnti");
     if(qklistitemEnti!=''){
       this.itemEnti=JSON.parse(qklistitemEnti);
     }
     console.log(this.itemEnti);
      this.findIdByMyrq(this.itemEnti.id);
      
    var height = document.body.clientHeight;
     $("#qklistId").css("height", height - 80 + "px");
  },
  methods: {
    //获取记录日志的logid
    findIdByMyrq: function(id) {
      var that = this;
      var params = {
        userId: global_variable.roleJs.dingUserId,
        cms_Id: id
      };
      httpMethod
        .findIdByMyrq(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            var xkxx = res.xkxx;
            this.list=xkxx;
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    },
    goDetile(item) {
       localStorage.setItem("qklistitemEnti", JSON.stringify(this.itemEnti));
      this.$router.push({
        path: "/zdgz/mryq/qklist/qklistDeali",
        name: "qklistDealiVue",
        params: {
          entity: item,
          itemEnti:this.itemEnti
        }
      });
    }
  }
};
</script>

<style >
@import "../../../../page/zdgz/mryq/qklist/qklist.css";
</style>
