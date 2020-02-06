<template>
  <ul class="ui-row indexFontstyle" style="padding-top:10px;">
    <li @click="godetile(1)" class="ui-col ui-col-25 indexLiStyle">
      <img class="indexLiContentImgStyle" src="../../assets/img/cq_new.png" />
      <div class="indexLiContentDivStyle">城区</div>
    </li>
    <li @click="godetile(2)" class="ui-col ui-col-25 indexLiStyle">
      <img class="indexLiContentImgStyle" src="../../assets/img/gp_new.png" />
      <div class="indexLiContentDivStyle">高平市</div>
    </li>
    <li @click="godetile(3)" class="ui-col ui-col-25 indexLiStyle">
      <img class="indexLiContentImgStyle" src="../../assets/img/lc_new.png" />
      <div class="indexLiContentDivStyle">陵川县</div>
    </li>
    <li @click="godetile(4)" class="ui-col ui-col-25 indexLiStyle">
      <img class="indexLiContentImgStyle" src="../../assets/img/qs_new.png" />
      <div class="indexLiContentDivStyle">沁水县</div>
    </li>
    <li @click="godetile(5)" class="ui-col ui-col-25 indexLiStyle">
      <img class="indexLiContentImgStyle" src="../../assets/img/yc_new.png" />
      <div class="indexLiContentDivStyle">阳城县</div>
    </li>
      <li @click="godetile(6)" class="ui-col ui-col-25 indexLiStyle">
      <img class="indexLiContentImgStyle" src="../../assets/img/zz_new.png" />
      <div class="indexLiContentDivStyle">泽州县</div>
    </li>
  </ul>
</template>
<script>
import { Search } from "vant";
import $ from "jquery";
import { mainJs } from "../main/main.js";
import global_variable from "../../api/global_variable.js";
import { httpMethod } from "../../api/getData.js";
import dd from "dingtalk-jsapi";
export default {
  name: "mainVue",
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  activated() {
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  data() {
    return {
      seach_value: "",
      permissionList: []
    };
  },
  mounted() {
    var context = this;
    context.permissionList = this.$route.query.permissionList;
  },
  methods: {
    godetile: function(index) {
      switch (index) {
        case 1:
          if (this.permissionList.indexOf("城区") > -1) {
            name = "城区";
            this.$router.push({
              path: "/qxztc/cq/cq_dingban",
              query: {
                departId: "402809816c1cc114016c1cc3cfc80005",
                num: "1",
                menu: "城区"
              }
            });
          } else {
            this.$toast("权限不足");
          }
          break;
        case 2:
          if (this.permissionList.indexOf("泽州县") > -1) {
            name = "泽州县";
            this.$router.push({
              path: "/qxztc/cq/cq_dingban",
              query: {
                departId: "402809816c1cc114016c1cc43cff0007",
                num: "2",
                menu: "泽州县"
              }
            });
          } else {
            this.$toast("权限不足");
          }
          break;
        case 3:
          if (this.permissionList.indexOf("高平市") > -1) {
            name = "高平市";
            this.$router.push({
              path: "/qxztc/cq/cq_dingban",
              query: {
                departId: "402809816c1cc114016c1cc49bb80009",
                num: "3",
                menu: "高平市"
              }
            });
          } else {
            this.$toast("权限不足");
          }
          break;
        case 4:
          if (this.permissionList.indexOf("阳城县") > -1) {
            name = "阳城县";
            this.$router.push({
              path: "/qxztc/cq/cq_dingban",
              query: {
                departId: "8a8180c970012108017003b8a6fb0045",
                num: "4",
                menu: "阳城县"
              }
            });
          } else {
            this.$toast("权限不足");
          }
          break;
        case 5:
          if (this.permissionList.indexOf("沁水县") > -1) {
            name = "沁水县";
            this.$router.push({
              path: "/qxztc/cq/cq_dingban",
              query: {
                departId: "8a8180c970012108017003b8e60a0047",
                num: "5",
                menu: "沁水县"
              }
            });
          } else {
            this.$toast("权限不足");
          }
          break;
        case 6:
          if (this.permissionList.indexOf("陵川县") > -1) {
            name = "陵川县";
            this.$router.push({
              path: "/qxztc/cq/cq_dingban",
              query: {
                departId: "8a8180c970012108017003b92b5a0049",
                num: "6",
                menu: "陵川县"
              }
            });
          } else {
            this.$toast("权限不足");
          }
          break;
        default:
          break;
      }
    },
    //获取记录日志的logid
    doAddAppLog: function(userId) {
      var params = {
        userId: userId
      };
      httpMethod
        .doAddAppLog(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            global_variable.logId = res.logId;
            global_variable.ddPhone = res.ddPhone;
            // this.getFrequentlyApp(global_variable.ddPhone);
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    },
    doAddAppLogList: function(logId, ddPhone, grouping_id, grouping_name) {
      var params = {
        logId: logId,
        ddPhone: ddPhone,
        grouping_id: grouping_id,
        grouping_name: grouping_name
      };
      httpMethod
        .doAddAppLogList(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    }
  }
};
</script>

<style scoped>
@import "../../page/main/main_new.css";
@import "../../assets/css/frozenui.css";
</style>