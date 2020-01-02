
<template>
<div style="margin-top:61px;">
    <div class="ui-row-flex ui-whitespace">
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
    <van-sticky :offset-top="50">
      <div style="display:flex;border-bottom:1px solid #f3f3f3;">
        <div class="twoLevel_left_div">
          <img style="height: 30px; margin-top: 6px;margin-left: 10px;" :src="TwoLevelTabImg1" />
          <div style="font-size: 14px;line-height: 40px;margin-left: 3px;">煤炭</div>
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
          v-model="airactive"
          style="width:75%;"
        >
          <van-tab title="概况"></van-tab>
          <van-tab title="企业列表"></van-tab>
          <van-tab title="项目列表"></van-tab>
        </van-tabs>
      </div>
    </van-sticky>
    <div>
      <child1 v-if="airactive==0"></child1>
      <child2 v-if="airactive==1"></child2>
      <child3 v-if="airactive==2"></child3>
    </div>
</div>

  
</template>
<script>
import echarts from "echarts";
import child1 from "@/page/cyzx/nyts/nyts_mt/nyts_mt_gk/nyts_mt_gk.vue";
import child2 from "@/page/zdgz/hbgj/hbgj_air/hbgj_air_station_list/hbgj_air_station_list.vue";
import child3 from "@/page/zdgz/hbgj/hbgj_air/hbgj_air_tj/hbgj_air_tj.vue";
import $ from "jquery";
import { httpMethod } from "../../../api/getData.js";
import Vue from "vue";
import { Tab, Tabs,Sticky } from "vant";
Vue.use(Tab).use(Tabs).use(Sticky);
export default {
  name: "hbgj",
  components: {
    child1,
    child2,
    child3
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
      airactive: 0,
      indexTabImg1: require("../../../assets/img/mt2_tab.png"),
      indexTabImg2: require("../../../assets/img/xny1_tab.png"),
      indexTabImg3: require("../../../assets/img/mcq1_tab.png"),
      indexTabImg4: require("../../../assets/img/energy_pic_tab.png"),
      TwoLevelTabImg1: require("../../../assets/img/icon1-mt.png"),
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
          this.airactive = 0;
          break;
        case 1:
          this.airactive = 1;
          break;
        case 2:
          this.airactive = 2;
          break;

        default:
          break;
      }
    },
    //选择顶部的选项卡
    selectIndexTab: function(index) {
      switch (index) {
        case 1:
          this.indexTabImg1 = require("../../../assets/img/mt2_tab.png");
          this.indexTabImg2 = require("../../../assets/img/xny1_tab.png");
          this.indexTabImg3 = require("../../../assets/img/mcq1_tab.png");
          this.indexTabImg4 = require("../../../assets/img/energy_pic_tab.png");
          break;
        case 2:
          this.indexTabImg1 = require("../../../assets/img/mt1_tab.png");
          this.indexTabImg2 = require("../../../assets/img/xny2_tab.png");
          this.indexTabImg3 = require("../../../assets/img/mcq1_tab.png");
          this.indexTabImg4 = require("../../../assets/img/energy_pic_tab.png");
          break;
        case 3:
          this.indexTabImg1 = require("../../../assets/img/mt1_tab.png");
          this.indexTabImg2 = require("../../../assets/img/xny1_tab.png");
          this.indexTabImg3 = require("../../../assets/img/mcq2_tab.png");
          this.indexTabImg4 = require("../../../assets/img/energy_pic_tab.png");
          break;
        case 4:
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

<style >
@import "../../cyzx/nyts/nyts.css";

</style>
