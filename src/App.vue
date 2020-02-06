<template>
  <div id="app">
    <loading v-show="LOADING" style="z-index:3;"></loading>
    <!--搜索框部分start-->
    <div style="z-index: 2; height: 64px;background: #3098fb;position: fixed;top: 0px;width: 100%;">
      <div style="display: flex;">
        <div  id="appVueleftId" style="width:68%;">
        <van-search
          placeholder="搜索"
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
          style="color:#ffffff;width:32%;height: 64px;font-size:14px;padding:0px;"
        >
          <div class="ui-col ui-col index_top_div_style">
            <img src="@/assets/img/icon_home.png" class="home_top_img" @click="gotoHome()" />
            <div class="appvueRightFont">首页</div>
          </div>
          <div class="ui-col ui-col index_top_div_style">
            <img src="@/assets/img/icon_message.png" class="home_top_img" @click="toast()" />
            <div class="appvueRightFont">消息</div>
          </div>
          <div class="ui-col ui-col index_top_div_style">
            <img src="@/assets/img/icon_user.png" class="home_top_img" @click="toast()" />
            <div class="appvueRightFont">我的</div>
          </div>
          <div id="yjzlid" class="ui-col ui-col index_top_div_style" style="display:none;">
            <img src="@/assets/img/zl.png" class="home_top_img" />
            <div class="appvueRightFont">直连</div>
          </div>
        </div>
      </div>
      <div
        class="index_gonggao_style"
        style="display:flex;background: #3098fb;height: 47px;	line-height:47px;border-top:1px solid #ffffff;"
      >
        <div class="index_gonggao_left"></div>
        <div style="margin-left:7px;font-weight:600;">公告</div>
        <div style="margin-left:7px;">无</div>
      </div>
    </div>
    <!--搜索框部分end-->
    <!-- <router-view></router-view> -->
    <keep-alive>
      <router-view style="margin-top: 111px;" class="index_main_view" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view style="margin-top: 111px;" v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from "vuex";
import Loading from "../src/store/loading.vue";
export default {
  name: "App",
  activated: function() {
    console.log("+++++++++++++++++");
    this.$setgoindex();
  },
  data() {
    return {
      seach_value: ""
    };
  },
  mounted() {
    //this.gotoHome();
  },
  watch: {
    $route: "getPath"
  },
  methods: {
    getPath() {
      var path = this.$route.path;
      if (path == "/") {
        $("#yjzlid").hide();
        $("#appVuerightId").css("width", "32%");
        $("#appVueleftId").css("width", "68%");
      } else {
        $("#yjzlid").show();
        $("#appVuerightId").css("width", "37%");
        $("#appVueleftId").css("width", "61%");
      }
      console.log(this.$route.path);
    },
    toast: function() {
      this.$toast("功能开发中");
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
    }
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#f7f7f7");
  },
  computed: {
    ...mapState(["LOADING"])
  },
  components: {
    Loading
  }
};
</script>

<style>
@import "assets/css/main.css";
@import "assets/css/frozenui.css";
</style>