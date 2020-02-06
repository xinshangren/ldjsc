<style>
#tabId .van-tabs__line {
  background-color: #3097fb;
  margin-bottom: 2px;
  height: 2px;
}
#tabId1 .van-tabs__line {
  background-color: #3097fb;
  margin-bottom: 2px;
  height: 2px;
  width: 75px;
  transform: translateX(47px) translateX(-50%);
  transition-duration: 0.3s;
}
#tabId2 .van-tabs__line {
  background-color: #3097fb;
  margin-bottom: 2px;
  height: 2px;
  width: 70px;
  transform: translateX(67px) translateX(-50%);
  transition-duration: 0.3s;
}
</style>
<template>
  <div style="margin-top:0px;">
    <div class="ui-row-flex ui-whitespace" style="padding-top:10px;">
      <div class="ui-col ui-col" @click="selectIndexTab(1)">
        <div class="block_div_style">
          <img id="indexTabImg1" class="top_img" :src="indexTabImg1" />
        </div>
      </div>
      <div class="ui-col ui-col" @click="selectIndexTab(2)">
        <div class="block_div_style">
          <img id="indexTabImg2" class="top_img" :src="indexTabImg2" />
        </div>
      </div>
      <div class="ui-col ui-col" @click="selectIndexTab(3)">
        <div class="block_div_style">
          <img id="indexTabImg3" class="top_img" :src="indexTabImg3" />
        </div>
      </div>
      <div class="ui-col ui-col" @click="selectIndexTab(4)">
        <div class="block_div_style">
          <img id="indexTabImg4" class="top_img" :src="indexTabImg4" />
        </div>
      </div>
    </div>
    <van-sticky id="twoLeveltab" :offset-top="101">
      <div class="child_tab" style="display:flex;border-bottom:1px solid #f3f3f3;">
        <div @click="showHideLeftSelect()" class="twoLevel_left_div">
          <img style="height: 21px;margin-top: 9px;margin-left: 7px;" :src="TwoLevelTabImg1" />
          <div id="selectDivName" style="font-size: 14px;line-height: 40px;margin-left: 3px;">煤炭</div>
          <img
            style="height: 14px;margin-top: 14px;"
            src="../../../assets/img/air_home_tab_arrow.png"
          />
        </div>
        <van-tabs
          id="tabId"
          @click="smallTab_select"
          title-active-color="#2796e7"
          title-inactive-color="#333333"
          line-width="75"
          v-model="airactive"
          style="width:75%;"
          v-show="oneShow"
        >
          <van-tab title="概况"></van-tab>
          <van-tab title="企业列表"></van-tab>
          <van-tab title="项目列表"></van-tab>
        </van-tabs>
        <van-tabs
          id="tabId1"
          title-active-color="#2796e7"
          title-inactive-color="#333333"
          line-width="75"
          v-model="airactive1"
          style="width:75%;"
          v-show="twoShow"
          @click="smallTab_select_xny"
        >
          <van-tab title="概况"></van-tab>
          <van-tab title="企业列表"></van-tab>
          <van-tab title="项目列表"></van-tab>
        </van-tabs>
        <van-tabs
          id="tabId2"
          title-active-color="#2796e7"
          title-inactive-color="#333333"
          line-width="70"
          v-model="airactive2"
          style="width:75%;"
          v-show="threeShow"
          @click="smallTab_select_mcq"
        >
          <van-tab title="概况"></van-tab>
          <van-tab title="企业列表"></van-tab>
        </van-tabs>
      </div>
    </van-sticky>
    <div
      id="leftSelectDivId"
      style="display:none; position: absolute;top: 164px;height: 97px;background: rgb(255, 255, 255);z-index: 1;padding: 5px 10px;border-radius: 5px;left: 8px;"
    >
      <ul id="leftUlId">
        <li style="display: flex;border-bottom: 1px solid #cccccc;">
          <img style="height:23px;" :src="lefttabimg1" />
          <div style="color: rgb(39, 150, 231);font-size: 15px;margin-left: 5px;">煤炭</div>
        </li>
        <li style="margin-top:10px;display: flex;border-bottom: 1px solid #cccccc;">
          <img style="height:20px;" :src="lefttabimg2" />
          <div style="color: #333333;font-size: 15px;margin-left: 5px;">新能源</div>
        </li>
        <li style="margin-top:10px;display: flex;border-bottom: 1px solid #cccccc;">
          <img style="height:20px;" :src="lefttabimg3" />
          <div style="color: #333333;font-size: 15px;margin-left: 5px;">煤层气</div>
        </li>
      </ul>
    </div>
    <div>
      <child1 v-if="flag==1&&airactive==0"></child1>
      <child2 v-if="flag==1&&airactive==1"></child2>
      <child3 v-if="flag==1&&airactive==2"></child3>

      <child4 v-if="flag==2&&airactive1==0"></child4>
      <child5 v-if="flag==2&&airactive1==1"></child5>
      <child6 v-if="flag==2&&airactive1==2"></child6>

      <child7 v-if="flag==3&&airactive2==0"></child7>
      <child8 v-if="flag==3&&airactive2==1"></child8>
      <child9 v-if="flag==4"></child9>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import child1 from "@/page/cyzx/nyts/nyts_mt/nyts_mt_gk/nyts_mt_gk.vue";
import child2 from "@/page/cyzx/nyts/nyts_mt/nyts_mt_qylb/nyts_mt_qylb.vue";
import child3 from "@/page/cyzx/nyts/nyts_mt/nyts_mt_xmlb/nyts_mt_xmlb.vue";
import child4 from "@/page/cyzx/nyts/nyts_xny/nyts_xny_gk/nyts_xny_gk.vue";
import child5 from "@/page/cyzx/nyts/nyts_xny/nyts_xny_qylb/nyts_xny_qylb.vue";
import child6 from "@/page/cyzx/nyts/nyts_xny/nyts_xny_xmlb/nyts_xny_xmlb.vue";
import child7 from "@/page/cyzx/nyts/nyts_mcq/nyts_mcq_gk/nyts_mcq_gk.vue";
import child8 from "@/page/cyzx/nyts/nyts_mcq/nyts_mcq_qylb/nyts_mcq_qylb.vue";
import child9 from "@/page/cyzx/nyts/nyts_nyxc/nyts_nyxc.vue";
import $ from "jquery";
import { httpMethod } from "../../../api/getData.js";
import global_variable from "../../../api/global_variable.js";
import Vue from "vue";
import { Tab, Tabs, Sticky } from "vant";
Vue.use(Tab)
  .use(Tabs)
  .use(Sticky);
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
      if (to.path == "/cyzx/nyts/nyts") {
        to.meta.keepAlive = true;
      } else {
        to.meta.keepAlive = false;
      }
    }else{
       to.meta.keepAlive = false;
    }
    next();
  },
  data() {
    return {
      oneShow: true,
      twoShow: false,
      threeShow: false,
      airactive: 0,
      airactive1: 0,
      airactive2: 0,
      flag: 1,
      indexTabImg1: require("../../../assets/img/mt2_tab.png"),
      indexTabImg2: require("../../../assets/img/xny1_tab.png"),
      indexTabImg3: require("../../../assets/img/mcq1_tab.png"),
      indexTabImg4: require("../../../assets/img/energy_pic_tab.png"),
      TwoLevelTabImg1: require("../../../assets/img/icon1-mt.png"),
      TwoLevelTabImg2: require("../../../assets/img/icon1-xny.png"),
      TwoLevelTabImg3: require("../../../assets/img/icon1-mcq.png"),
      lefttabimg1: require("../../../assets/img/icon1-mt2.png"),
      lefttabimg2: require("../../../assets/img/icon1-xny.png"),
      lefttabimg3: require("../../../assets/img/icon1-mcq.png")
    };
  },
  mounted() {
    this.doAddAppLogList(
      global_variable.logId,
      global_variable.ddPhone,
      "39",
      "煤炭"
    );
    var self = this;
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
  },
  methods: {
    showHideLeftSelect: function() {
      if ($("#leftSelectDivId").is(":hidden")) {
        $("#leftSelectDivId").show();
      } else {
        $("#leftSelectDivId").hide();
      }
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
          $("#selectDivName").html("煤炭");
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
          this.TwoLevelTabImg1 = require("../../../assets/img/icon1-mt.png");
          this.lefttabimg1 = require("../../../assets/img/icon1-mt2.png");
          this.lefttabimg2 = require("../../../assets/img/icon1-xny.png");
          this.lefttabimg3 = require("../../../assets/img/icon1-mcq.png");
          break;
        case 1:
          $("#selectDivName").html("新能源");
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
          this.TwoLevelTabImg1 = require("../../../assets/img/icon1-xny.png");
          this.lefttabimg1 = require("../../../assets/img/icon1-mt.png");
          this.lefttabimg2 = require("../../../assets/img/icon1-xny2.png");
          this.lefttabimg3 = require("../../../assets/img/icon1-mcq.png");
          break;
        case 2:
          $("#selectDivName").html("煤层气");
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
          this.TwoLevelTabImg1 = require("../../../assets/img/icon1-mcq.png");
          this.lefttabimg1 = require("../../../assets/img/icon1-mt.png");
          this.lefttabimg2 = require("../../../assets/img/icon1-xny.png");
          this.lefttabimg3 = require("../../../assets/img/icon1-mcq2.png");
          break;
        default:
          break;
      }
      $("#leftSelectDivId").hide();
    },
    //煤炭选项卡
    smallTab_select: function(name, title) {
      // console.log(name,title);
      switch (name) {
        case 0:
          this.airactive = 0;
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "43",
            "概况"
          );
          break;
        case 1:
          this.airactive = 1;
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "44",
            "企业列表"
          );
          break;
        case 2:
          this.airactive = 2;
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "45",
            "项目列表"
          );
          break;

        default:
          break;
      }
    },
    //新能源
    smallTab_select_xny: function(name, title) {
      switch (name) {
        case 0:
          this.airactive1 = 0;
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "46",
            "概况"
          );
          break;
        case 1:
          this.airactive1 = 1;
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "47",
            "企业列表"
          );
          break;
        case 2:
          this.airactive1 = 2;
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "48",
            "项目列表"
          );
          break;

        default:
          break;
      }
    },

    //煤层气
    smallTab_select_mcq: function(name, title) {
      switch (name) {
        case 0:
          this.airactive2 = 0;
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "49",
            "概况"
          );
          break;
        case 1:
          this.airactive2 = 1;
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "50",
            "企业列表"
          );
          break;
        default:
          break;
      }
    },
    //选择顶部的选项卡
    selectIndexTab: function(index) {
      this.flag = index;
      switch (index) {
        case 1:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "39",
            "煤炭"
          );
          $("#twoLeveltab").show();
          this.oneShow = true;
          this.twoShow = false;
          this.threeShow = false;
          this.selectLeftTab(0);
          this.indexTabImg1 = require("../../../assets/img/mt2_tab.png");
          this.indexTabImg2 = require("../../../assets/img/xny1_tab.png");
          this.indexTabImg3 = require("../../../assets/img/mcq1_tab.png");
          this.indexTabImg4 = require("../../../assets/img/energy_pic_tab.png");
          break;
        case 2:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "40",
            "新能源"
          );
          $("#twoLeveltab").show();
          this.oneShow = false;
          this.twoShow = true;
          this.threeShow = false;
          this.selectLeftTab(1);
          this.indexTabImg1 = require("../../../assets/img/mt1_tab.png");
          this.indexTabImg2 = require("../../../assets/img/xny2_tab.png");
          this.indexTabImg3 = require("../../../assets/img/mcq1_tab.png");
          this.indexTabImg4 = require("../../../assets/img/energy_pic_tab.png");
          break;
        case 3:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "41",
            "煤层气"
          );
          this.oneShow = false;
          this.twoShow = false;
          this.threeShow = true;
          $("#twoLeveltab").show();
          this.selectLeftTab(2);
          this.indexTabImg1 = require("../../../assets/img/mt1_tab.png");
          this.indexTabImg2 = require("../../../assets/img/xny1_tab.png");
          this.indexTabImg3 = require("../../../assets/img/mcq2_tab.png");
          this.indexTabImg4 = require("../../../assets/img/energy_pic_tab.png");
          break;
        case 4:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "42",
            "能源相册"
          );
          this.selectLeftTab(3);
          $("#twoLeveltab").hide();
          this.indexTabImg1 = require("../../../assets/img/mt1_tab.png");
          this.indexTabImg2 = require("../../../assets/img/xny1_tab.png");
          this.indexTabImg3 = require("../../../assets/img/mcq1_tab.png");
          this.indexTabImg4 = require("../../../assets/img/energy_pic_tab_selected.png");
          break;
        default:
          break;
      }
    },
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
<style scoped>
@import "../../../assets/css/frozenui.css";
@import "../../../page/cyzx/nyts/nyts.css";
</style>

