<template>
  <div style="margin-top:61px;">
    <div class="ui-row-flex ui-whitespace">
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

    <div style="display:flex;border-bottom:1px solid #f3f3f3;">
      <div class="twoLevel_left_div">
        <img style="height: 30px; margin-top: 6px;margin-left: 10px;" :src="TwoLevelTabImg1" />
        <div style="font-size: 14px;line-height: 40px;">空气</div>
        <img
          style="height: 14px;margin-top: 14px;"
          src="../../../assets/img/air_home_tab_arrow.png"
        />
      </div>
      <van-tabs
        @click="smallTab_select"
        id="tabId"
        title-active-color="#2796e7"
        title-inactive-color="#333333"
        line-width="75"
        v-model="active"
        style="width:75%;"
      >
        <van-tab title="实时状况"></van-tab>
        <van-tab title="站点列表"></van-tab>
        <van-tab title="数据统计"></van-tab>
      </van-tabs>
    </div>
    <div>
      <child1>
        
      </child1>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import child1 from "@/page/zdgz/hbgj/hbgj_air/hbgj_air.vue";
import $ from "jquery";
import { httpMethod } from "../../../api/getData.js";
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
export default {
  name: "hbgj",
  components: {
    child1
  },
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
      indexTabImg1: require("../../../assets/img/air_home_tab1selected.png"),
      indexTabImg2: require("../../../assets/img/air_home_tab2.png"),
      indexTabImg3: require("../../../assets/img/air_home_tab3.png"),
      TwoLevelTabImg1: require("../../../assets/img/air_list_icon1.png"),
      TwoLevelTabImg2: require("../../../assets/img/air_list_icon2.png"),
      TwoLevelTabImg3: require("../../../assets/img/air_list_icon3.png")
    };
  },
  mounted() {
    //this.getListData();
  },
  methods: {
    //空气子选项卡选择
    smallTab_select: function(name, title) {
      // console.log(name,title);
      switch (name) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          break;

        default:
          break;
      }
    },
    //选择顶部的选项卡
    selectIndexTab: function(index) {
      switch (index) {
        case 1:
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
          $("#indexTabDiv1").addClass("top_title_noselect");
          $("#indexTabDiv2").addClass("top_title_select2");
          $("#indexTabDiv3").addClass("top_title_noselect");

          $("#indexTabDiv1").removeClass("top_title_select1");
          $("#indexTabDiv2").removeClass("top_title_noselect");
          $("#indexTabDiv3").removeClass("top_title_select3");
          this.indexTabImg1 = require("../../../assets/img/air_home_tab1.png");
          this.indexTabImg2 = require("../../../assets/img/air_home_tab2selected.png");
          this.indexTabImg3 = require("../../../assets/img/air_home_tab3.png");
          break;
        case 3:
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
@import "../../../page/zdgz/hbgj/hbgj.css";
@import "../../../assets/css/frozenui.css";
</style>