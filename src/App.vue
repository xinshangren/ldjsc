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
</style>

<template>
  <div id="app">
    <loading v-show="LOADING" style="z-index:3;"></loading>
    <LoadingBig v-show="BIGLOADING" style="z-index:3;"></LoadingBig>
    <!--搜索框部分start-->
    <div style="z-index: 2; height: 64px;background: #3098fb;position: fixed;top: 0px;width: 100%;">
      <div style="display: flex;">
        <div id="appVueleftId" style="width:63%;">
          <van-search
            id="search_all"
            :placeholder="seach_placeholder"
            shape="round"
            background="rgb(255, 255, 255,0)"
            v-model="seach_value"
            class="index_top_style"
            style="width:100%;height: 64px;"
          />
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
      <router-view style="margin-top: 101px;" class="index_main_view" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view style="margin-top: 101px;" v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from "vuex";
import { httpMethod } from "./api/getData.js";
import Loading from "../src/store/loading.vue";
import LoadingBig from "../src/store/loadingBig.vue";
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
      timer: null
    };
  },
  mounted() {
    //this.gotoHome();
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