<template>
  <div style=""  @click="closeState">
    <div class="ui-row-flex ui-whitespace" style="padding-top:10px;">
      <div class="ui-col ui-col" @click="selectIndexTab(1)">
        <div class="block_div_style">
          <img id="indexTabImg1" class="top_img" :src="indexTabImg1" />
          <div id="indexTabDiv1" class="top_title_select1">空气监测</div>
        </div>
      </div>
      <div class="ui-col ui-col" @click="selectIndexTab(2)">
        <div class="block_div_style">
          <img id="indexTabImg2" class="top_img" :src="indexTabImg2" />
          <div id="indexTabDiv2" class="top_title_noselect">网格监管</div>
        </div>
      </div>
      <div class="ui-col ui-col" @click="selectIndexTab(3)">
        <div class="block_div_style">
          <img id="indexTabImg3" class="top_img" :src="indexTabImg3" />
          <div id="indexTabDiv3" class="top_title_noselect">重点企业</div>
        </div>
      </div>
    </div>
    <van-sticky :offset-top="101">
      <div style="display:flex;border-bottom:1px solid #f3f3f3;">
        <div @click="showHideLeftSelect()" id="twoLevel_left_div" class="twoLevel_left_div">
          <img style="height: 24px; margin-top: 8px;margin-left: 10px;" :src="TwoLevelTabImg1" />
          <div id="selectDivName" style="font-size: 14px;line-height: 40px;">空气</div>
          <img
            style="height: 14px;margin-top: 14px;margin-left:3px;"
            src="../../../assets/img/air_home_tab_arrow.png"
          />
        </div>
        <van-tabs
          @touchmove.prevent
          @click="smallTab_select"
          ref="tabId1"
          title-active-color="#2796e7"
          title-inactive-color="#333333"
          line-width="75"
          v-model="airactive"
          :ellipsis="false"
          v-show="oneShow"
          style="width:75%;"
        >
          <van-tab title="实时状况"></van-tab>
          <van-tab title="站点列表"></van-tab>
          <van-tab title="数据统计"></van-tab>
        </van-tabs>
        <van-tabs
          @touchmove.prevent
          @click="smallTab_select_wgjg"
          ref="tabId2"
          title-active-color="#2796e7"
          title-inactive-color="#333333"
          line-width="75"
          v-model="wgjgactive"
          v-show="twoShow"
          style="width:75%;"
          :ellipsis="false"
          @rendered="rendered_wgjg"
        >
          <van-tab title="概况"></van-tab>
          <van-tab title="污染源列表"></van-tab>
          <van-tab title="人员列表"></van-tab>
          <van-tab title="统计分析"></van-tab>
        </van-tabs>
        <van-tabs
          @touchmove.prevent
          @click="smallTab_select_zdqy"
          ref="tabId3"
          title-active-color="#2796e7"
          title-inactive-color="#333333"
          line-width="75"
          v-model="zdqyactive"
          v-show="threeShow"
          style="width:75%;"
          :ellipsis="false"
        >
          <van-tab title="企业概况"></van-tab>
          <van-tab title="重点企业列表"></van-tab>
        </van-tabs>
      </div>
    </van-sticky>
    <div
      id="leftSelectDivId"
      style="display:none; position: fixed;top: 164px;height: 97px;background: rgb(255, 255, 255);z-index: 1;padding: 5px 10px;border-radius: 5px;left: 8px;"
    >
      <ul id="leftUlId">
        <li style="display: flex;border-bottom: 1px solid #cccccc;">
          <img style="height:23px;" :src="lefttabimg1" />
          <div style="color: rgb(39, 150, 231);font-size: 15px;margin-left: 5px;">空气</div>
        </li>
        <li style="margin-top:10px;display: flex;border-bottom: 1px solid #cccccc;">
          <img style="height:20px;" :src="lefttabimg2" />
          <div style="color: #333333;font-size: 15px;margin-left: 5px;">网格</div>
        </li>
        <li style="margin-top:10px;display: flex;border-bottom: 1px solid #cccccc;">
          <img style="height:20px;" :src="lefttabimg3" />
          <div style="color: #333333;font-size: 15px;margin-left: 5px;">企业</div>
        </li>
      </ul>
    </div>

    <!-- <div :is="currentView"></div> -->
    <child1 v-if="Bigflag==1&&airactive==0"></child1>
    <child2 v-if="Bigflag==1&&airactive==1"></child2>
    <child3 v-if="Bigflag==1&&airactive==2"></child3>
    <child4 v-if="Bigflag==2&&wgjgactive==0"></child4>
    <child5 v-if="Bigflag==2&&wgjgactive==1"></child5>
    <child6 v-if="Bigflag==2&&wgjgactive==2"></child6>
    <child7 v-if="Bigflag==2&&wgjgactive==3"></child7>
    <child8 v-if="Bigflag==3&&zdqyactive==0"></child8>
    <child9 v-if="Bigflag==3&&zdqyactive==1"></child9>

    <div  id="moveId" style="height: 50px;position: fixed;right: 0px;bottom: 11px;display:flex;"  @touchmove.prevent>
      <div id="rightAreaDivId" style="display:none;">
        <div
          style="display: flex;width: 268px;height: 44px;margin-right: -20px;margin-top: 3px;background: rgb(255, 255, 255);border-radius: 30px 0px 0px 30px;box-shadow:#f67b09 1px 1px 8px 1px"
        >
          <div style="width:40%;margin-left:25px;">
            <div style="display:flex;margin-top:6px;">
              <img
                style="height: 13px;margin-top: 4px;margin-right: 4px;"
                src="../../../assets/img/project_list_icon1.png"
              />
              <div style="font-size:13px; color:#666666;">责任单位</div>
            </div>
            <div style="color:#333333;font-size:13px;">市生态环境局</div>
          </div>
          <div style="width:50%;margin-left:25px;">
            <div>
              <div
                @click="callPhone()"
                style="display: flex;width: 72%;border: 1px solid rgb(246, 123, 9);border-radius: 5px;padding: 3px;margin-top: 10px;"
              >
                <img
                  style="height: 15px;margin-left: 7px;margin-right: 4px;"
                  src="../../../assets/img/icon_phone_orange.png"
                />
                <div style="color: rgb(246, 123, 9);font-size: 13px;">一键调度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
      @touchmove.prevent
        id="leftAreaDivId"
        style="height:53px;margin-right:15px;"
        src="../../../assets/img/phone_button.png"
      />
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import { httpMethod } from "../../../api/getData.js";
import global_variable from "../../../api/global_variable.js";
import Vue from "vue";
import { Tab, Tabs, Sticky } from "vant";
Vue.use(Tab)
  .use(Tabs)
  .use(Sticky);
import child1 from "@/page/zdgz/hbgj/hbgj_air/hbgj_air_ssgk/hbgj_air_ssgk.vue";
import child2 from "@/page/zdgz/hbgj/hbgj_air/hbgj_air_station_list/hbgj_air_station_list.vue";
import child3 from "@/page/zdgz/hbgj/hbgj_air/hbgj_air_tj/hbgj_air_tj.vue";
import child4 from "@/page/zdgz/hbgj/hbgj_wgjg/hbgj_wgjg_wggk/hbgj_wgjg_wggk.vue";
import child5 from "@/page/zdgz/hbgj/hbgj_wgjg/hbgj_wgjg_wrylist/hbgj_wgjg_wrylist.vue";
import child6 from "@/page/zdgz/hbgj/hbgj_wgjg/hbgj_wgjg_wgperson/hbgj_wgjg_wgperson.vue";
import child7 from "@/page/zdgz/hbgj/hbgj_wgjg/hbgj_wgjg_tjfx/hbgj_wgjg_tjfx.vue";
import child8 from "@/page/zdgz/hbgj/hbgj_wrqy/hbgj_wrqy_qygk/hbgj_wrqy_qygk.vue";
import child9 from "@/page/zdgz/hbgj/hbgj_wrqy/hbgj_zdqylb/hbgj_zdqylb.vue";
export default {
  name: "hbgj",
  components: {
    child1,
    child2,
    child3,
    child4,
    child5,
    child6,
    child7,
    child8,
    child9
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  activated() {
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  beforeRouteEnter(to, from, next) {
    console.log(from);
    if (from.path != "/") {
      if (to.path == "/zdgz/hbgj/hbgj") {
        to.meta.keepAlive = true;
      } else {
        to.meta.keepAlive = false;
      }
    } else {
      to.meta.keepAlive = false;
    }
    next();
  },
  data() {
    return {
      currentView: "child1",
      Bigflag: 1,
      airactive: 0,
      wgjgactive: 0,
      zdqyactive: 0,
      threeShow: false,
      twoShow: false,
      oneShow: true,
      indexTabImg1: require("../../../assets/img/air_home_tab1selected.png"),
      indexTabImg2: require("../../../assets/img/air_home_tab2.png"),
      indexTabImg3: require("../../../assets/img/air_home_tab3.png"),
      TwoLevelTabImg1: require("../../../assets/img/air_list_icon1.png"),
      TwoLevelTabImg2: require("../../../assets/img/air_list_icon2.png"),
      TwoLevelTabImg3: require("../../../assets/img/air_list_icon3.png"),
      lefttabimg1: require("../../../assets/img/air_list_icon1_selected.png"),
      lefttabimg2: require("../../../assets/img/air_list_icon2.png"),
      lefttabimg3: require("../../../assets/img/air_list_icon3.png"),
        flag: false,
      nx: null,
      ny: null,
      dx: null,
      dy: null,
      x: null,
      y: null,
      cur: {
        x: 0,
        y: 0
      },
      div1: null,
      div2: null
    };
  },
  mounted() {
    var self = this;
    $("#leftAreaDivId").click(function() {
      $("#rightAreaDivId").animate({
        width: "toggle"
      });
    });

    $("#leftUlId li").click(function() {
      console.log($(this).index());
      self.selectLeftTab($(this).index());
      switch ($(this).index()) {
        case 0:
          self.selectIndexTab(1);
          break;
        case 1:
          self.selectIndexTab(2);
          break;
        case 2:
          self.selectIndexTab(3);
          break;
        default:
          break;
      }
    });

    this.div1 = document.getElementById("moveId");
    this.div2 = document.getElementById("moveId");
    var self = this;
    this.div1.addEventListener(
      "mousedown",
      function() {
        self.down();
      },
      false
    );
    this.div1.addEventListener(
      "touchstart",
      function() {
        self.down();
      },
      false
    );
    this.div1.addEventListener(
      "mousemove",
      function() {
        self.move();
      },
      false
    );
    this.div1.addEventListener(
      "touchmove",
      function() {
        self.move();
      },
      false
    );
    document.body.addEventListener(
      "mouseup",
      function() {
        self.end();
      },
      false
    );
    this.div1.addEventListener(
      "touchend",
      function() {
        self.end();
      },
      false
    );
  },
  activated:function(){
    var typebt= this.$route.params.typebt;
    if(typebt !=undefined&& typebt!='undefined' &&typebt!=null){
      this.selectIndexTab(parseInt(typebt)+1)
    }
  },
  methods: {
     down: function() {
      var self = this;
      self.flag = true;
      var touch;
      console.log(event);
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      self.cur.x = touch.clientX;
      self.cur.y = touch.clientY;
      self.dx = self.div2.offsetLeft;
      self.dy = self.div2.offsetTop;
    },
    move: function() {
      var self = this;
      if (self.flag) {
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        self.nx = touch.clientX - self.cur.x;
        self.ny = touch.clientY - self.cur.y;
        self.x = self.dx + self.nx;
        self.y = self.dy + self.ny;

        var clientWidth = document.body.clientWidth;
        // console.log(self.x + "--" + self.y + "--" + clientWidth);
        if (self.x > 0) {
        }
        self.div2.style.left = self.x + "px";
        self.div2.style.top = self.y + "px";
        //阻止页面的滑动默认事件
        document.addEventListener(
          "touchmove",
          function() {
            event.preventDefault();
          },
          false
        );
      }
    },
    //鼠标释放时候的函数
    end: function() {
      console.log("end");
      if (this.flag) {
        $("#leftAreaDivId").off("click");
        $("#leftAreaDivId").click(function() {
            $("#moveId").css("left","");
         $("#moveId").css("top","");
          $("#rightAreaDivId").animate({
            width: "toggle"
          });
        });
      }
      this.flag = false;
     
    },
    //获取记录日志的logid
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
    selectLeftTab: function(index) {
      switch (index) {
        case 0:
          $("#selectDivName").html("空气");
          $("#leftUlId li")
            .eq(0)
            .find("div")
            .css("color", "rgb(39, 150, 231)");
          $("#leftUlId li")
            .eq(1)
            .find("div")
            .css("color", "#333333");
          $("#leftUlId li")
            .eq(2)
            .find("div")
            .css("color", "#333333");
          this.TwoLevelTabImg1 = require("../../../assets/img/air_list_icon1.png");
          this.lefttabimg1 = require("../../../assets/img/air_list_icon1_selected.png");
          this.lefttabimg2 = require("../../../assets/img/air_list_icon2.png");
          this.lefttabimg3 = require("../../../assets/img/air_list_icon3.png");
          break;
        case 1:
          $("#selectDivName").html("网格");
          $("#leftUlId li")
            .eq(1)
            .find("div")
            .css("color", "rgb(39, 150, 231)");
          $("#leftUlId li")
            .eq(0)
            .find("div")
            .css("color", "#333333");
          $("#leftUlId li")
            .eq(2)
            .find("div")
            .css("color", "#333333");
          this.TwoLevelTabImg1 = require("../../../assets/img/air_list_icon2.png");
          this.lefttabimg1 = require("../../../assets/img/air_list_icon1.png");
          this.lefttabimg2 = require("../../../assets/img/air_list_icon2_selected.png");
          this.lefttabimg3 = require("../../../assets/img/air_list_icon3.png");
          break;
        case 2:
          $("#selectDivName").html("企业");
          $("#leftUlId li")
            .eq(2)
            .find("div")
            .css("color", "rgb(39, 150, 231)");
          $("#leftUlId li")
            .eq(0)
            .find("div")
            .css("color", "#333333");
          $("#leftUlId li")
            .eq(1)
            .find("div")
            .css("color", "#333333");
          this.TwoLevelTabImg1 = require("../../../assets/img/air_list_icon3.png");
          this.lefttabimg1 = require("../../../assets/img/air_list_icon1.png");
          this.lefttabimg2 = require("../../../assets/img/air_list_icon2.png");
          this.lefttabimg3 = require("../../../assets/img/air_list_icon3_selected.png");
          break;
        default:
          break;
      }
      $("#leftSelectDivId").hide();
    },
    showHideLeftSelect: function() {
      if ($("#leftSelectDivId").is(":hidden")) {
        $("#leftSelectDivId").show();
      } else {
        $("#leftSelectDivId").hide();
      }
    },
    callPhone: function() {
      window.location.href = "tel://18635609998";
    },
    //空气子选项卡选择
    smallTab_select: function(name, title) {
      // console.log(name,title);
      this.airactive = name;
      switch (name) {
        case 0:
          this.$store.commit("setSeach_placeholder", "搜索");
          this.$store.commit("setSeach_value", "");
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "16",
            "实时情况"
          );
          this.currentView = "child1";
          break;
        case 1:
          this.$store.commit("setSeach_placeholder", "请输入站点名称");
           this.$store.commit("setSeach_value", "");
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "17",
            "站点列表"
          );
          this.currentView = "child2";
          break;
        case 2:
           this.$store.commit("setSeach_placeholder", "搜索");
            this.$store.commit("setSeach_value", "");
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "18",
            "数据分析"
          );
          this.currentView = "child3";
          break;
        default:
          break;
      }
    },
    //网格子选项卡选择
    smallTab_select_wgjg: function(name, title) {
      // console.log(name,title);
      this.wgjgactive = name;
      switch (name) {
        case 0:
           this.$store.commit("setSeach_placeholder", "搜索");
            this.$store.commit("setSeach_value", "");
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "19",
            "概况"
          );
          this.currentView = "child4";
          break;
        case 1:
           this.$store.commit("setSeach_placeholder", "请输入污染源名称");
            this.$store.commit("setSeach_value", "");
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "20",
            "污染源列表"
          );
          this.currentView = "child5";
          break;
        case 2:
           this.$store.commit("setSeach_placeholder", "搜索");
            this.$store.commit("setSeach_value", "");
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "21",
            "人员列表"
          );
          this.currentView = "child6";
          break;
        case 3:
           this.$store.commit("setSeach_placeholder", "搜索");
            this.$store.commit("setSeach_value", "");
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "22",
            "统计分析"
          );
          this.currentView = "child7";
          break;
        default:
          break;
      }
    },
    smallTab_select_zdqy: function(name, title) {
      this.zdqyactive = name;
      switch (name) {
        case 0:
          this.$store.commit("setSeach_placeholder", "搜索");
           this.$store.commit("setSeach_value", "");
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "59",
            "企业概况"
          );
          this.currentView = "child8";
          break;
        case 1:
          this.$store.commit("setSeach_placeholder", "请输入污染源名称");
           this.$store.commit("setSeach_value", "");
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "60",
            "重点企业列表"
          );
          this.currentView = "child9";
          break;

        default:
          break;
      }
    },
    rendered_wgjg: function(name, title) {
      console.log(name, title);
    },
    //选择顶部的选项卡
    selectIndexTab: function(index) {
      this.Bigflag = index;
      switch (index) {
        case 1:
           this.$store.commit("setSeach_placeholder", "搜索");
            this.$store.commit("setSeach_value", "");
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "13",
            "空气检测"
          );
          this.selectLeftTab(0);
          this.oneShow = true;
          this.twoShow = false;
          this.threeShow = false;
          this.$refs.tabId1.resize();
          switch (this.airactive) {
            case 0:
               this.$store.commit("setSeach_placeholder", "搜索");
              this.currentView = "child1";
              break;
            case 1:
               this.$store.commit("setSeach_placeholder", "请输入站点名称");
              this.currentView = "child2";
              break;
            case 2:
               this.$store.commit("setSeach_placeholder", "搜索");
              this.currentView = "child3";
              break;
            default:
              break;
          }

          $("#indexTabDiv1").addClass("top_title_select1");
          $("#indexTabDiv2").addClass("top_title_noselect");
          $("#indexTabDiv3").addClass("top_title_noselect");

          $("#indexTabDiv1").removeClass("top_title_noselect");
          $("#indexTabDiv2").removeClass("top_title_select2");
          $("#indexTabDiv3").removeClass("top_title_select3");

          this.indexTabImg1 = require("../../../assets/img/air_home_tab1selected.png");
          this.indexTabImg2 = require("../../../assets/img/air_home_tab2.png");
          this.indexTabImg3 = require("../../../assets/img/air_home_tab3.png");
          break;
        case 2:
           this.$store.commit("setSeach_placeholder", "搜索");
            this.$store.commit("setSeach_value", "");
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "14",
            "网格监管"
          );
          this.selectLeftTab(1);
          this.oneShow = false;
          this.twoShow = true;
          this.threeShow = false;
          this.$refs.tabId2.resize();
          this.currentView = "child4";
          $("#indexTabDiv1").addClass("top_title_noselect");
          $("#indexTabDiv2").addClass("top_title_select2");
          $("#indexTabDiv3").addClass("top_title_noselect");

          $("#indexTabDiv1").removeClass("top_title_select1");
          $("#indexTabDiv2").removeClass("top_title_noselect");
          $("#indexTabDiv3").removeClass("top_title_select3");
          this.indexTabImg1 = require("../../../assets/img/air_home_tab1.png");
          this.indexTabImg2 = require("../../../assets/img/air_home_tab2selected.png");
          this.indexTabImg3 = require("../../../assets/img/air_home_tab3.png");
          this.wgjgactive = 0;
          break;
        case 3:
          this.$store.commit("setSeach_placeholder", "搜索");
           this.$store.commit("setSeach_value", "");
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "14",
            "重点企业"
          );
          this.selectLeftTab(2);
          this.oneShow = false;
          this.twoShow = false;
          this.threeShow = true;
          this.$refs.tabId3.resize();
          this.currentView = "child8";
          $("#indexTabDiv1").addClass("top_title_noselect");
          $("#indexTabDiv2").addClass("top_title_noselect");
          $("#indexTabDiv3").addClass("top_title_select3");

          $("#indexTabDiv1").removeClass("top_title_select1");
          $("#indexTabDiv2").removeClass("top_title_select2");
          $("#indexTabDiv3").removeClass("top_title_noselect");
          this.indexTabImg1 = require("../../../assets/img/air_home_tab1.png");
          this.indexTabImg2 = require("../../../assets/img/air_home_tab2.png");
          this.indexTabImg3 = require("../../../assets/img/air_home_tab3selected.png");
          break;
        default:
          break;
      }
    },
    closeState(event) {
      var myPanel = document.getElementById('leftSelectDivId');// 得到点击出现的节点
      var myPanel2 = document.getElementById('leftUlId');// 得到点击出现的节点
      
      var  twolevel= document.getElementById('twoLevel_left_div');// 得到点击出现的节点
      if(twolevel.contains(event.target)){
        return;
      }
      console.log(myPanel);
      if (myPanel||myPanel2) {
        if (!(myPanel.contains(event.target))&&!(myPanel2.contains(event.target))) { // 这句是说如果我们点击到了id为myPanel以外的区域，为false
          // this.show = false// 消失
          $("#leftSelectDivId").hide();
        }
      }
    }
  }
};
</script>

<style >
@import "../../../page/zdgz/hbgj/hbgj.css";
@import "../../../assets/css/frozenui.css";
</style>