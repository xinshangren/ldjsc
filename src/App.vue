<style scoped>
.marquee-wrap {
  width: 100%;
  height: 35px;
  margin: 0 auto;
  overflow: hidden;
}

.marquee-list li {
  width: 100%;
  height: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  list-style: none;
  line-height: 36px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
}
.animate-up {
  transition: all 1s ease-in-out;
  transform: translateY(-35px);
}
.singleApp {
  margin-top: 0px;
}
.nosingleApp {
  margin-top: 101px;
}
</style>

<template>
  <div id="app">
    <loading v-show="LOADING" style="z-index:3;"></loading>
    <LoadingBig v-show="BIGLOADING" style="z-index:3;"></LoadingBig>
    <!--搜索框部分start-->
    <div
      v-if="isSingleApp==false"
      style="z-index: 2; height: 64px;background: #3098fb;position: fixed;top: 0px;width: 100%;"
    >
      <div style="display: flex;">
        <div id="appVueleftId" style="width:63%;position:relative;">
          <van-search
            id="search_all"
            ref="search_allref"
            :placeholder="seach_placeholder"
            shape="round"
            background="rgb(255, 255, 255,0)"
            v-model="seach_value"
            class="index_top_style"
            style="width:100%;height: 64px;"
          />
          <!-- <img
            ref="shaixuanImgId"
            class="shaixuanImg"
            style="display:none;  position: absolute;right: 23px;top: 24px;height: 20px;"
            src="@/assets/img/icon_filtrate.png"
          />-->
        </div>
        <!-- <div
          id="appVuerightId"
          class="index_top_style"
          style="display:flex;color:#ffffff;width:32%;height: 64px;"
        >
          <div class="index_top_img_jg1">
           
          </div>
          <div class="index_top_img_jg">
        
          </div>
          <div class="index_top_img_jg">
           
          </div>
          <div id="yjzlid" class="index_top_img_jg" style="display:none;">
        
          </div>
        </div>-->

        <div
          id="appVuerightId"
          class="ui-row-flex ui-whitespace"
          style="color:#ffffff;width:25%;height: 64px;font-size:14px;padding:0px;margin-left: 20px;"
        >
          <img
          class="shaixuanImg"
          ref="shaixuanImgId"
            src="@/assets/img/project_filtrate_white.png"
            style=" display:none;height: 31px; top: 17px; position: absolute; right: 121px; z-index: 3;"
            
          />
          <div class="ui-col ui-col index_top_div_style">
            <img src="@/assets/img/icon_home.png" class="home_top_img" @click="gotoHome()" />
            <div class="appvueRightFont">首页</div>
          </div>
          <!-- <div class="ui-col ui-col index_top_div_style">
            <img src="@/assets/img/icon_message.png" class="home_top_img" @click="toast()" />
            <div class="appvueRightFont">消息</div>
          </div>-->
          <div class="ui-col ui-col index_top_div_style">
            <img src="@/assets/img/icon_user.png" class="home_top_img" @click="toast()" />
            <div class="appvueRightFont">我的</div>
          </div>
          <div
            id="yjzlid"
            class="ui-col ui-col index_top_div_style"
            style="display:none;"
            @click="gotoYjzl()"
          >
            <img src="@/assets/img/zl.png" class="home_top_img" />
            <div class="appvueRightFont">直联</div>
          </div>
        </div>
      </div>
      <div
        class="index_gonggao_style"
        style="display:flex;background: #3098fb;height: 36px;	line-height:36px;border-top:1px solid #ffffff;"
      >
        <div class="index_gonggao_left"></div>
        <div style="margin-left:7px;font-weight:600;" @click="goNotice">公告</div>
        <div style="margin-left:7px;">
          <div class="marquee-wrap">
            <ul class="marquee-list" :class="{'animate-up': animateUp}">
              <li
                v-for="(item, index) in scroll_notice"
                :key="index"
                @click="goNoticeDetail(item.obj)"
              >{{item.name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--搜索框部分end-->
    <!-- <router-view></router-view> -->
    <keep-alive>
      <router-view
        :class="isSingleApp==true?'singleApp':'nosingleApp'"
        v-if="$route.meta.keepAlive"
      ></router-view>
    </keep-alive>
    <router-view :class="isSingleApp==true?'singleApp':'nosingleApp'" v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from "vuex";
import { httpMethod } from "./api/getData.js";
import global_variable from "./api/global_variable.js";
import Loading from "../src/store/loading.vue";
import LoadingBig from "../src/store/loadingBig.vue";
import dd from "dingtalk-jsapi";
export default {
  name: "App",
  activated: function() {
    console.log("+++++++++++++++++");
    this.$setgoindex();
  },
  data() {
    return {
      scroll_notice: [],
      animateUp: false,
      timer: null,
      isSingleApp: false
    };
  },
  mounted() {
    String.prototype.getValue = function(parm) {
      var reg = new RegExp("(^|&)" + parm + "=([^&]*)(&|$)");
      var r = this.substr(this.indexOf("?") + 1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    };
    var hrefUrl = window.location.href;
    var indexUrl = hrefUrl.replace("#", "");

    var url = decodeURI(hrefUrl);
    console.log(url);
    var detail = url.getValue("type");
    console.log(detail);
    if (detail != null) {
      if (detail == "1") {
        this.isSingleApp = true;
        document.title="批件管理";
        // this.$route.meta.title = "批件管理";
        global_variable.singleApp = 1; //独立app判断
      }
    }else{
      document.title="晋城市领导驾驶舱";
      //  this.$route.meta.title = "晋城市领导驾驶舱";
    }
    this.getUserInfo();
    this.getFiveNotice();
    this.timer = setInterval(this.scrollAnimate, 5000);
  },
  watch: {
    $route: "getPath"
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    scrollAnimate() {
      this.animateUp = true;
      setTimeout(() => {
        this.scroll_notice.push(this.scroll_notice[0]);
        this.scroll_notice.shift();
        this.animateUp = false;
      }, 1000);
    },
    getPath() {
      var path = this.$route.path;
      if (path == "/") {
        $("#yjzlid").hide();
        $("#appVuerightId").css("width", "22%");
        $("#appVueleftId").css("width", "63%");
      } else {
        $("#yjzlid").show();
        $("#appVuerightId").css("width", "29%");
        $("#appVueleftId").css("width", "63%");
      }
      var zdgcDeali = "/zdgz/zdgc/zdgc_xmlb/zdgc_xmdeali/zdgc_xmdeali";
      if (path == "/pjlz/pjlz"||path=="/pjlz/pjlzListSearch/pjlzListSearch") {
        $(".shaixuanImg").show();
      } else {
        $(".shaixuanImg").hide();
      }
      console.log(this.$route.path);
    },
    toast: function() {
      this.$toast("功能开发中");
    },
    gotoYjzl: function() {
      this.$router.replace({
        path: "/main/dingban"
      });
    },
    gotoHome: function() {
      //console.log(global_variable.indexTabId);
      console.log(this.$route.name);
      var name = this.$route.name;
      if (name == "main") {
        this.$root.$emit("test11", "hi");
        //mainJs.changeTabStyle("4");
      } else {
        this.$router.push("/");
      }
    },
    goNotice: function() {
      this.$router.push({
        path: "/main/notice"
      });
    },
    getFiveNotice: function() {
      var self = this;
      httpMethod.getCmsGG().then(res => {
        console.log(res);
        if (res.success == "1") {
          if (res.dataList != null && res.dataList.length > 0) {
            var data = res.dataList;
            if (data.length <= 5) {
              data.forEach(element => {
                var map = {};
                map.obj = element;
                if (element.title.length > 20) {
                  map.name = element.title.substring(0, 20) + "...";
                  self.scroll_notice.push(map);
                } else {
                  map.name = element.title;
                  self.scroll_notice.push(map);
                }
              });
            } else {
              data.sort(function(a, b) {
                if (a.createDate > b.createDate) {
                  return -1;
                } else if (a.createDate == b.createDate) {
                  return 0;
                } else {
                  return 1;
                }
              });
              for (var i = 0; i < 5; i++) {
                var map = {};
                map.obj = data[i];
                if (data[i].title.length > 20) {
                  map.name = data[i].title.substring(0, 20) + "...";
                  self.scroll_notice.push(map);
                } else {
                  map.name = data[i].title;
                  self.scroll_notice.push(map);
                }
              }
            }
          } else {
            self.scroll_notice.push("无");
          }
          console.log(self.scroll_notice);
        }
      });
    },
    goNoticeDetail(item) {
      this.$router.push({
        path: "/main/noticeDetail",
        name: "noticeDetail",
        params: {
          entity: item
        }
      });
    },
    //获取用户角色
    getUserInfo: function() {
      var self = this;
      dd.ready(function() {
        dd.runtime.permission.requestAuthCode({
          corpId: "dingf1c7cc28f05dbd2335c2f4657eb6378f", // 企业id
          onSuccess: function(info) {
            var code = info.code; // 通过该免登授权码可以获取用户身份
            var params = {
              method: "getUserInfo",
              code: code
            };
            httpMethod.getApprovalInfo(params).then(res => {
              console.log(JSON.stringify(res));
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
    }
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#f7f7f7");
  },
  computed: {
    ...mapState(["LOADING", "BIGLOADING", "seach_value", "seach_placeholder"]),
    seach_value: {
      get() {
        return this.$store.state.seach_value;
      },
      set(val) {
        this.$store.commit("setSeach_value", val);
      }
    }
  },
  components: {
    Loading,
    LoadingBig
  }
};
</script>

<style>
@import "assets/css/main.css";
@import "assets/css/frozenui.css";
</style>