<template>
  <ul id="main_new_ul_id" class="ui-row indexFontstyle" style="padding-top:0px;">
    <li v-for="(item,index) in tabImage" :key="index" class="ui-col ui-col-25 indexLiStyle" :id="forid(index)"
      @touchstart="start(index)" @touchend="end" @click="godetile(index,tabIdList[index])">

      <div style="position: relative;">
        <img v-if="tabNameList[index]=='晋城信息'&&yd_hits=='1'"
          style="position: absolute;height: 16px;top: -7px;right: 12px;"
          src="../../assets/img/icon_jcxx_info_tip.png" />
        <img class="indexLiContentImgStyle" :src="tabImage[index]" />
        <img v-if="folowlist.indexOf(tabNameList[index])>-1" class="indexLiContentGzImgStyle"
          src="../../assets/img/icon_collect.png" />
      </div>

      <div class="indexLiContentDivStyle">{{tabNameList[index]}}</div>
    </li>
    <van-overlay :show="show" @click="gbshow" :z-index="2001">
      <div class="wrapper">
        <img  v-if="showjs==0" style="position:absolute;bottom:310px;width:220px;left: 13px;" src="../../assets/img/pic1.png" />
        <img v-if="showjs==1" style="position: absolute;top: 9px;width: 167px;z-index: 108;right: -4px;" src="../../assets/img/pic2.png" />
      </div>
    </van-overlay>
  </ul>
</template>

<script>
import Vue from "vue";
import { Search, Dialog } from "vant";
import $ from "jquery";
import { mainJs } from "../main/main.js";
import global_variable from "../../api/global_variable.js";
import { httpMethod } from "../../api/getData.js";
import dd from "dingtalk-jsapi";
import Watermark from "../../assets/js/watermark";
import { Overlay } from "vant";
Vue.use(Overlay);
Vue.use(Search).use(Dialog);
export default {
  name: "mainVue",
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  activated() {
    //返回保留页面记录
    console.log("activated");
    this.getCmsMyrqIfHits();
    document.querySelector("body").setAttribute("style", "background:#ffffff");
    localStorage.setItem("mryqList", "");
    localStorage.setItem("mryqDealiId", "");
  },
  beforeRouteLeave(to, from, next) {
    console.log(from);
    console.log(to);
    if (to.name == "splashVue") {
      dd.ready(function() {
        dd.biz.navigation.close();
      });
    }

    next();
  },
  data() {
    return {
      show: true,
      showjs:0,
      tabid: 4,
      isCreate: false,
      isDeali: false,
      seach_value: "",
      yd_hits: "0",
      nohaveJcxx: require("@/assets/img/icon_jcxx.png"),
      haveJcxx: require("@/assets/img/icon_jcxx_info.png"),
      tabImage: [
        require("@/assets/img/icon-yjzl.png"),
        require("@/assets/img/icon_pz.png"),
        require("@/assets/img/icon_jcxx.png"),
        require("@/assets/img/icon-zdgc.png"),
        require("@/assets/img/icon-jjyx.png"),
        require("@/assets/img/icon-hbgj.png"),
        require("@/assets/img/icon-qyly.png"),
        require("@/assets/img/icon-nyts.png"),
        require("@/assets/img/icon-qxzt.png"),
        require("@/assets/img/icon-wmgc.png"),
        require("@/assets/img/icon-zhxx.png")
        // require("@/assets/img/icon-zhxx.png"),
        // require("@/assets/img/icon-zhxx.png")
      ],
      tabNameList: [
        "一键直连",
        "领导批示",
        "晋城信息",
        "重点工程",
        "经济运行",
        "环保攻坚",
        "全域旅游",
        "能源革命",
        "区县直通",
        "文明共创",
        "综合信息"
        // "疫情地图",
        // "疫情数据"
      ],
      tabIdList: [
        "8",
        "100",
        "65",
        "1",
        "5",
        "2",
        "3",
        "6",
        "23",
        "4",
        "7"
        // "999",
        // "1000"
      ],
      folowlist: ""
      // permissionList: []
    };
  },
  created() {
    // var context = this;
    // context.getCuruserid();

    this.getUserInfo();
    // Watermark.set(global_variable.roleJs.username+" 领导驾驶舱");
    // this.getCmsMyrqIfHits();
  },
  mounted() {
    var gzxxts =localStorage.getItem("gzxxts");
    if(gzxxts==1){
      this.show=false;
    }
    dd.biz.navigation.setRight({
      show: false
    });
    var sss = global_variable.followList;
    for (var i = 0; i < global_variable.followList.length; i++) {
      this.folowlist += global_variable.followList[i].name + ",";
    }
  },
  methods: {
    gbshow(){
      this.showjs++;
      if(this.showjs==2){
        this.show=false; 
        localStorage.setItem("gzxxts","1");//关注消息是否已读1是已读
      }
    },
    start(index) {
      clearTimeout(this.loop); //再次清空定时器，防止重复注册定时器
      this.loop = setTimeout(() => {
        if (this.folowlist.indexOf(this.tabNameList[index]) > -1) {
          this.saveAttentionRelevancy(this.tabNameList[index], 2);
        } else {
          this.saveAttentionRelevancy(this.tabNameList[index], 1);
        }
      }, 1000);
    },

    end() {
      clearTimeout(this.loop); //清空定时器，防止重复注册定时器
    },
    forid(index) {
      return "forid" + index;
    },
    saveAttentionRelevancy(name, msg) {
      var params = {
        userId: global_variable.roleJs.dingUserId,
        bmid: "",
        type: msg
      };

      for (var i = 0; i < global_variable.allList.length; i++) {
        if (global_variable.allList[i].name.indexOf(name) > -1) {
          params.bmid = global_variable.allList[i].id;
        }
      }

      httpMethod.saveAttentionRelevancy(params).then(res => {
        if (res.success == "1") {
          if (msg == 1) {
            this.$toast("添加关注");
            this.folowlist += name + ",";
          } else {
            this.$toast("取消关注");
            this.folowlist = this.folowlist.replace(name + ",", "");
            for (var i = 0; i < global_variable.followList.length; i++) {
              if (global_variable.followList[i].name.indexOf(name) > -1) {
                global_variable.followList.splice(i, 1);
              }
            }
          }
        }
      });
    },
    getCmsMyrqIfHits: function() {
      console.log("获取已读");
      var self = this;
      var params = {
        userId: global_variable.roleJs.dingUserId
      };
      httpMethod.getCmsMyrqIfHits(params).then(res => {
        console.log(JSON.stringify(res));
        if (res.success == "1") {
          var yd_hit = res.yd_hits;
          self.yd_hits = yd_hit;
        }
      });
    },
    //获取用户角色
    getUserInfo: function() {
      console.log("获取用户角色");
      var self = this;
      dd.ready(function() {
        dd.runtime.permission.requestAuthCode({
          corpId: global_variable.corpId, // 企业id
          onSuccess: function(info) {
            var code = info.code; // 通过该免登授权码可以获取用户身份
            console.log("code=======" + code);
            var params = {
              method: "getUserInfo",
              code: code
            };
            httpMethod.getApprovalInfo(params).then(res => {
              console.log("getUserInfo=====" + JSON.stringify(res));
              if (res.success == "1") {
                global_variable.roleJs = Object.assign(
                  {},
                  global_variable.roleJs,
                  {
                    dingUserId: res.data.dingUserId,
                    username: res.data.username,
                    role: res.data.role,
                    department: res.data.department
                  }
                );
                self.getCmsMyrqIfHits();
                Watermark.set(res.data.username + " 领导驾驶舱");
                console.log("roleJs=====" + JSON.stringify(global_variable));
                console.log(global_variable.roleJs);
                // var roleCode=res.data.role;
                // global_variable.roleCode=res.data.role;//cbr=承办人 wdk=文电科 ld=领导
              }
            });
          },
          onFail: function(err) {
            alert("dd error: " + JSON.stringify(err));
          }
        });
      });
    },
    godetile: function(index, idValue) {
      console.log(index + "-" + idValue);
      var id = "";
      var name = "";
      var isUploadLog = true;
      switch (parseInt(idValue)) {
        case 1:
          if (global_variable.permissionList.indexOf("重点工程") > -1) {
            this.$router.push({
              path: "/zdgz/zdgc/zdgc"
            });
            name = "重点工程";
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;
        case 2:
          if (global_variable.permissionList.indexOf("环保攻坚") > -1) {
            this.$router.push({
              path: "/zdgz/hbgj/hbgj"
            });
            name = "环保攻坚";
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;
        case 3:
          if (global_variable.permissionList.indexOf("全域旅游") > -1) {
            this.$router.push({
              path: "/qyly/qyly"
            });
            name = "全域旅游";
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;
        case 4:
          if (global_variable.permissionList.indexOf("文明共创") > -1) {
            this.$router.push({
              path: "/wmgc/wmgc"
            });
            name = "文明共创";
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;
        case 5:
          if (global_variable.permissionList.indexOf("经济运行") > -1) {
            this.$router.push({
              path: "/jjyx/jjyx_ztts/jjyx_ztts"
            });
            name = "经济运行";
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;
        case 6:
          if (global_variable.permissionList.indexOf("能源革命") > -1) {
            this.$router.push({
              path: "/cyzx/nyts/nyts"
            });
            name = "能源革命";
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;
        case 7:
          if (global_variable.permissionList.indexOf("综合信息") > -1) {
            name = "综合信息";
            this.$router.push({
              path: "/main/headline"
            });
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;
        case 8:
          if (global_variable.permissionList.indexOf("一键直连") > -1) {
            name = "一键直连";
            this.$router.push({
              path: "/main/dingban"
            });
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;
        case 29:
          if (global_variable.permissionList.indexOf("13710督办") > -1) {
            this.$toast("功能开发中");
            isUploadLog = false;
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;
        case 30:
          if (global_variable.permissionList.indexOf("市长热线") > -1) {
            this.$toast("功能开发中");
            isUploadLog = false;
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;
        case 9:
          if (global_variable.permissionList.indexOf("重大改革") > -1) {
            name = "重大改革";
            this.$toast("功能开发中");
            isUploadLog = false;
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;
        case 10:
          if (global_variable.permissionList.indexOf("三大产业") > -1) {
            name = "三大产业";
            this.$toast("功能开发中");
            isUploadLog = false;
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;

        case 11:
          if (global_variable.permissionList.indexOf("招商引资") > -1) {
            name = "招商引资";
            this.$toast("功能开发中");
            isUploadLog = false;
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;

        case 12:
          if (global_variable.permissionList.indexOf("热点问题") > -1) {
            name = "热点问题";
            this.$toast("功能开发中");
            isUploadLog = false;
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;

        case 13:
          if (global_variable.permissionList.indexOf("热点事件") > -1) {
            name = "热点事件";
            this.$toast("功能开发中");
            isUploadLog = false;
          } else {
            isUploadLog = false;
            this.$toast(global_variable.permissTip);
          }
          break;

        case 14:
          if (global_variable.permissionList.indexOf("工作效能") > -1) {
            name = "工作效能";
            this.$toast("功能开发中");
            isUploadLog = false;
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;

        case 15:
          if (global_variable.permissionList.indexOf("教育服务") > -1) {
            name = "教育服务";
            this.$toast("功能开发中");
            isUploadLog = false;
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;

        case 16:
          if (global_variable.permissionList.indexOf("12345") > -1) {
            name = "12345";
            this.$toast("功能开发中");
            isUploadLog = false;
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;

        case 17:
          if (global_variable.permissionList.indexOf("就业服务") > -1) {
            name = "就业服务";
            this.$toast("功能开发中");
            isUploadLog = false;
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;

        case 18:
          if (global_variable.permissionList.indexOf("行政审批") > -1) {
            name = "行政审批";
            this.$toast("功能开发中");
            isUploadLog = false;
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;

        case 19:
          if (global_variable.permissionList.indexOf("行政监督") > -1) {
            name = "行政监督";
            this.$toast("功能开发中");
            isUploadLog = false;
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;

        case 20:
          if (global_variable.permissionList.indexOf("游客画像") > -1) {
            name = "游客画像";
            this.$toast("功能开发中");
            isUploadLog = false;
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;

        case 21:
          if (global_variable.permissionList.indexOf("非遗保护") > -1) {
            name = "非遗保护";
            this.$toast("功能开发中");
            isUploadLog = false;
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;
        case 22:
          if (global_variable.permissionList.indexOf("远程调度") > -1) {
            name = "远程调度";
            this.$toast("功能开发中");
            isUploadLog = false;
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;
        case 23:
          if (global_variable.permissionList.indexOf("区县直通") > -1) {
            name = "区县直通";
            this.$router.push({
              path: "/main/qxtz_new",
              query: {
                permissionList: global_variable.permissionList
              }
            });
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;

        case 65:
          // this.$toast("改版中");
          // isUploadLog = false;
          if (global_variable.permissionList.indexOf("晋城信息") > -1) {
            id = "65";
            name = "晋城信息";
            this.$router.push({
              path: "/zdgz/mryq/mryq"
            });
            // this.$parent.removeEvent();
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;
        case 112:
          this.$toast("部署中");
          isUploadLog = false;
          break;
        case 999:
          this.$router.push({
            path: "/yqdata/yqdata",
            name: "yqdataVue",
            params: {
              entity:
                "https://m.carelink.cn/activity/epidemic/yqdt_jd.html?ad_od=share&utm_source=androidapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=Wxfriends&from=singlemessage&isappinstalled=0"
            }
          });
          isUploadLog = false;
          break;
        case 1000:
          this.$router.push({
            path: "/yqdata/yqdata",
            name: "yqdataVue",
            params: {
              entity:
                "https://m.carelink.cn/activity/epidemic/ssbb_jd.html?ad_od=share&utm_source=androidapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=Wxfriends&from=singlemessage&isappinstalled=0"
            }
          });
          isUploadLog = false;
          break;
        case 100:
          if (global_variable.permissionList.indexOf("领导批示") > -1) {
            id = "100";
            name = "领导批示";
            this.$router.push({
              path: "/pjlz/pjlz"
            });
            // this.$parent.removeEvent();
          } else {
            this.$toast(global_variable.permissTip);
            isUploadLog = false;
          }
          break;
        default:
          this.$toast("功能开发中");
          isUploadLog = false;
          break;
      }

      if (index != 999) {
        if (isUploadLog) {
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            id,
            name
          );
        }
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
    },
    getCuruserid: function() {
      var self = this;
      dd.ready(function() {
        dd.ui.webViewBounce.disable();
        dd.runtime.permission.requestAuthCode({
          corpId: global_variable.corpId, // 企业id
          onSuccess: function(info) {
            var code = info.code; // 通过该免登授权码可以获取用户身份
            var params = {
              code: code
            };
            httpMethod
              .getUser(params)
              .then(res => {
                console.log(res);
                if (res.success == "1") {
                  if (res.functions != null) {
                    global_variable.permissionList = res.functions;
                    console.log("main权限" + res.functions);
                    global_variable.userId = res.userId; //将全局变量模块挂载到Vue.prototype中
                    self.doAddAppLog(global_variable.userId);
                  }
                } else if (res.success == "0") {
                }
              })
              .catch(err => {
                //self.$toast(err);
              });
          },
          onFail: function(err) {
            alert("dd error: " + JSON.stringify(err));
          }
        });
      });
    }
  }
};
</script>

<style scoped>
@import "../../page/main/main_new.css";
@import "../../assets/css/frozenui.css";
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
}
</style>