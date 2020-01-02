<template>
  <div style="
    overflow: auto;
">
    <div
      style="background:#ffffff;height:240px;width:100%;margin-top:8px;padding-top:7px;border-top:7px solid #F1F4F6;"
    >
      <div style="display:flex;">
        <div class="echars_titile_div">污染源</div>
        <div style="display: flex;line-height: 20px;margin-left:20px;">
          <div style="color:#3097fb;font-size:21px;">8833</div>
          <div style="color:#3097fb;font-size:13px;">个</div>
        </div>
      </div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div ref="myCharts1" style="height:210px;width:100%;"></div>
    </div>

    <div
      style="background:#ffffff;height:230px;width:100%;margin-top:8px;padding-top:7px;border-top:7px solid #F1F4F6;"
    >
      <div style="display:flex;">
        <div class="echars_titile_div">监管人员</div>
        <div style="display: flex;line-height: 20px;margin-left:20px;">
          <div style="color:#3097fb;font-size:21px;">18833</div>
          <div style="color:#3097fb;font-size:13px;">个</div>
        </div>
      </div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div ref="myCharts2" style="height:210px;width:100%;"></div>
    </div>

    <div
      style="background:#ffffff;height:240px;width:100%;margin-top:8px;padding-top:7px;border-top:7px solid #F1F4F6;"
    >
      <div style="display:flex;">
        <div class="echars_titile_div">各区县网格监管情况展示</div>
        <div @click="showSelectTime(1)" style="display:flex;margin-left:17px;">
          <div
            id="oneTimeDivId"
            style="color:#3097fb;font-size:14px;line-height:22px;"
          >{{currentYear1}}</div>
          <img
            style="height: 11px;margin-top: 6px;margin-left: 5px;"
            src="../../../../../assets/img/air_data_arrow.png"
          />
        </div>
      </div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div ref="myCharts3" style="height:210px;width:100%;"></div>
    </div>

    <van-popup
      v-model="showYear"
      @opened="openPopYear"
      position="bottom"
      :style="{ height: '200px' }"
    >
      <van-datetime-picker
        v-model="currentYear"
        type="year-month"
        style="height: 200px;"
        @confirm="onconfirmYear"
        :formatter="formatterYear"
      />
    </van-popup>
  </div>
</template>
<script>
import echarts from "echarts";
import $ from "jquery";
import { httpMethod } from "../../../../../api/getData.js";
import { hbgjAirJs } from "../../../../../page/zdgz/hbgj/hbgj_wgjg/hbgj_wgjg_wggk/hbgj_wgjg_wggk.js";
import Vue from "vue";
import { DatetimePicker, Popup } from "vant";
Vue.use(DatetimePicker).use(Popup);
export default {
  name: "hbgj_wgjg_wggk",
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
      gkcode :"555555",
       showYear: false, //年显示
        currentYear: new Date(),
      currentYear1: new Date().getFullYear(),
    };
  },
  mounted() {
    this.getStationRealtimeData();
    this.getBasicRecordList();
  },
  methods: {
    
    //格式化事件
    timeFormatYear(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return year;
    },
    formatterYear(type, value) {
      if (type === "year") {
        return `${value}年`;
      }
      return "";
    },
    //年的确定
    onconfirmYear() {
      this.currentYear1 = this.timeFormatYear(this.currentYear);
      this.showYear = false;
      this.getStationRealtimeData();
    this.getBasicRecordList();
    },
    //开启年时间选择
    openPopYear: function() {
      $(".van-picker__columns")
        .find(".van-picker-column")
        .eq(1)
        .hide();
    },
    //判断是选的哪个图表时间
    showSelectTime: function(index) {
      this.showYear=true;
    },
    //获取站点数据及信息list
    getStationRealtimeData: function() {
      var params = {
        code: this.gkcode,
      };
      //获取数据
      httpMethod
        .getbasicList(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            var pay = res.sourceList;
            this.showEcharsView1(echarts, this.$refs.myCharts1,res.leaderNum, res.personNum, pay, res.countyList);
              this.showEcharsView2(echarts, this.$refs.myCharts2,res.leaderNum, res.personNum, pay, res.countyList);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    showEcharsView1: function(echarts, value,  data1,data2,data3,data4) {
      hbgjAirJs.showLbEcharsOne(echarts, value, data1,data2,data3,data4);
    },
    showEcharsView2: function(echarts, value,  data1,data2,data3,data4) {
      hbgjAirJs.showLbEcharsTwo(echarts, value, data1,data2,data3,data4);
    },
    //获取监管概况巡查图表
    getBasicRecordList: function() {
      var params = {
        code: this.gkcode,
        recordTime:this.currentYear1
      };
      //获取数据
      httpMethod
        .getBasicRecordList(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            var data = res.recordList;
            this.showEcharsView3(echarts, this.$refs.myCharts3,data);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    showEcharsView3: function(echarts, value,  data1) {
      hbgjAirJs.showLbEcharsThree(echarts, value, data1);
    }
  }
};
</script>

<style>
@import "../../../../../page/zdgz/hbgj/hbgj_wgjg/hbgj_wgjg_wggk/hbgj_wgjg_wggk.css";
@import "../../../../../assets/css/frozenui.css";
</style>