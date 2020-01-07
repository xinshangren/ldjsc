
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
    <van-sticky id="twoLeveltab" :offset-top="50">
      <div class="child_tab" style="display:flex;border-bottom:1px solid #f3f3f3;">
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
      <div class="child_tab" style="display:flex;border-bottom:1px solid #f3f3f3;">
        <div class="twoLevel_left_div" style="width: 30%;">
          <img style="height: 30px; margin-top: 6px;margin-left: 10px;" src="../../../assets/img/icon1-xny.png" />
          <div style="font-size: 14px;line-height: 40px;margin-left: 3px;">新能源</div>
          <img
            style="height: 14px;margin-top: 14px;"
            src="../../../assets/img/air_home_tab_arrow.png"
          />
        </div>
        <van-tabs
          id="tabId1"
          title-active-color="#2796e7"
          title-inactive-color="#333333"
          line-width="75"
          v-model="airactive1"
          style="width:75%;"
        >
          <van-tab title="概况"></van-tab>
          <van-tab title="企业列表"></van-tab>
          <van-tab title="项目列表"></van-tab>
        </van-tabs>
      </div>
      <div class="child_tab" style="display:flex;border-bottom:1px solid #f3f3f3;">
        <div style="width:30%;" class="twoLevel_left_div" >
          <img style="height: 30px; margin-top: 6px;margin-left: 10px;" src="../../../assets/img/icon1-mcq.png" />
          <div style="font-size: 14px;line-height: 40px;margin-left: 3px;">煤层气</div>
          <img
            style="height: 14px;margin-top: 14px;"
            src="../../../assets/img/air_home_tab_arrow.png"
          />
        </div>
        <van-tabs
          id="tabId2"
          title-active-color="#2796e7"
          title-inactive-color="#333333"
          line-width="70"
          v-model="airactive2"
          style="width:75%;"
        >
          <van-tab title="概况"></van-tab>
          <van-tab title="企业列表"></van-tab>
        </van-tabs>
      </div>
      <div class="child_tab" style="display:flex;border-bottom:1px solid #f3f3f3;">
        <div class="twoLevel_left_div">
          <img style="height: 30px; margin-top: 6px;margin-left: 10px;" :src="TwoLevelTabImg1" />
          <div style="font-size: 14px;line-height: 40px;margin-left: 3px;">煤炭</div>
          <img
            style="height: 14px;margin-top: 14px;"
            src="../../../assets/img/air_home_tab_arrow.png"
          />
        </div>
        <van-tabs
          @click="smallTab_select_nyxc"
          id="tabId3"
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
import child2 from "@/page/zdgz/hbgj/hbgj_air/hbgj_air_station_list/hbgj_air_station_list.vue";
import child3 from "@/page/zdgz/hbgj/hbgj_air/hbgj_air_tj/hbgj_air_tj.vue";
import child4 from "@/page/cyzx/nyts/nyts_xny/nyts_xny_gk/nyts_xny_gk.vue";
import child5 from "@/page/cyzx/nyts/nyts_xny/nyts_xny_qylb/nyts_xny_qylb.vue";
import child6 from "@/page/cyzx/nyts/nyts_xny/nyts_xny_xmlb/nyts_xny_xmlb.vue";
import child7 from "@/page/cyzx/nyts/nyts_mcq/nyts_mcq_gk/nyts_mcq_gk.vue";
import child8 from "@/page/cyzx/nyts/nyts_mcq/nyts_mcq_qylb/nyts_mcq_qylb.vue";
import child9 from "@/page/cyzx/nyts/nyts_nyxc/nyts_nyxc.vue";
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
  data() {
    return {
      airactive: 0,
      airactive1: 0,
      airactive2: 0,
      flag:1,
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
    $('.child_tab').hide();
    $('.child_tab ').eq(0).show();
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
    //能源相册子选项卡选择
    smallTab_select_nyxc: function(name, title) {
     
    },
    
    //选择顶部的选项卡
    selectIndexTab: function(index) {
      $('.child_tab').hide();
      $('.child_tab ').eq(index-1).show();
      this.flag=index;
      switch (index) {
        case 1:
          $("#twoLeveltab").show();
          this.indexTabImg1 = require("../../../assets/img/mt2_tab.png");
          this.indexTabImg2 = require("../../../assets/img/xny1_tab.png");
          this.indexTabImg3 = require("../../../assets/img/mcq1_tab.png");
          this.indexTabImg4 = require("../../../assets/img/energy_pic_tab.png");
          break;
        case 2:
          $("#twoLeveltab").show();
          this.indexTabImg1 = require("../../../assets/img/mt1_tab.png");
          this.indexTabImg2 = require("../../../assets/img/xny2_tab.png");
          this.indexTabImg3 = require("../../../assets/img/mcq1_tab.png");
          this.indexTabImg4 = require("../../../assets/img/energy_pic_tab.png");
          break;
        case 3:
           $("#twoLeveltab").show();
          this.indexTabImg1 = require("../../../assets/img/mt1_tab.png");
          this.indexTabImg2 = require("../../../assets/img/xny1_tab.png");
          this.indexTabImg3 = require("../../../assets/img/mcq2_tab.png");
          this.indexTabImg4 = require("../../../assets/img/energy_pic_tab.png");
          break;
        case 4:
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

<style >
@import "../../cyzx/nyts/nyts.css";

</style>
