<template>
  <ul class="ui-row indexFontstyle" style="padding-top:10px;">
    <li @click="godetile(1)" class="ui-col ui-col-25 indexLiStyle">
      <img class="indexLiContentImgStyle" src="../../assets/img/cq_new.png" />
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
  },
  methods: {
    godetile: function(index) {
      switch (index) {
        case 1:
          if (this.permissionList.indexOf("重点工程") > -1) {
            this.$router.push({
              path: "/zdgz/zdgc/zdgc"
            });
            name = "重点工程";
          } else {
            this.$toast("权限不足");
            isUploadLog = false;
          }
          break;
        case 2:
          if (this.permissionList.indexOf("环保攻坚") > -1) {
            this.$router.push({
              path: "/zdgz/hbgj/hbgj"
            });
            name = "环保攻坚";
          } else {
            this.$toast("权限不足");
            isUploadLog = false;
          }
          break;
        case 3:
          if (this.permissionList.indexOf("全域旅游") > -1) {
            this.$router.push({
              path: "/qyly/qyly"
            });
            name = "全域旅游";
          } else {
            this.$toast("权限不足");
            isUploadLog = false;
          }
          break;
        case 4:
          if (this.permissionList.indexOf("文明共创") > -1) {
            this.$router.push({
              path: "/wmgc/wmgc"
            });
            name = "文明共创";
          } else {
            this.$toast("权限不足");
            isUploadLog = false;
          }
          break;
        case 5:
          if (this.permissionList.indexOf("经济运行") > -1) {
            this.$router.push({
              path: "/jjyx/jjyx_ztts/jjyx_ztts"
            });
            name = "经济运行";
          } else {
            this.$toast("权限不足");
            isUploadLog = false;
          }
          break;
        case 6:
          if (this.permissionList.indexOf("能源革命") > -1) {
            this.$router.push({
              path: "/cyzx/nyts/nyts"
            });
            name = "能源革命";
          } else {
            this.$toast("权限不足");
            isUploadLog = false;
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