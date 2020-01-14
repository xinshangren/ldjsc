<template>
  <div>
    <div class="threeTab">
      <div class="oneTab">
        <div class="fontStyle">集团</div>
        <div style="display: flex;margin-left: 50%;">
          <div id="nyts_mt_gk_jts_count_id" style="font-size: 20px;color: #2796e7;margin-top:3px;">0</div>
          <div style="font-size: 14px;color: #333333;line-height: 35px;">个</div>
        </div>
      </div>
      <div class="twoTab">
        <div class="fontStyle">企业</div>
        <div style="display: flex;margin-left: 50%;">
          <div id="nyts_mt_gk_qys_count_id" style="font-size: 20px;color: #46e1c5;margin-top:3px;">0</div>
          <div style="font-size: 14px;color: #333333;line-height: 35px;">个</div>
        </div>
      </div>
      <div class="thirdTab">
        <div class="fontStyle">项目</div>
        <div style="display: flex;margin-left: 50%;">
          <div id="nyts_mt_gk_pm_count_id" style="font-size: 20px;color: #33d1f8;margin-top:3px;">0</div>
          <div style="font-size: 14px;color: #333333;line-height: 35px;">个</div>
        </div>
      </div>
    </div>
    <div class="dateSelect">
      <div class="sx"></div>
      <div class="tj_z">煤炭行业产销情况统计</div>
      <div class="timeYear" @click="showDatePicker()">{{nowYear}}</div>
      <div class="timeYear" style="margin-left:3px;">年</div>
      <img class="xl" src="../../../../../assets/img/air_data_arrow.png" />
    </div>
    <div style="display:flex;width:100%;height: 70px;padding:10px;">
      <div style="width:46%;background-color: #e9f8ff;">
        <div style="display:flex;margin-left: 30px;margin-top: 12px;">
          <div id="nyts_mt_gk_gyzcz_count_id" style="color: #3ca1ec;font-size: 16px;">0</div>
          <div style="margin-top: 5px;font-size: 12px;">亿元</div>
        </div>
        <div style="margin-left: 30px;font-size: 12px;">工业总产值</div>
      </div>
      <div style="width:46%;background-color: #e9f8ff;">
        <div style="display:flex;margin-left: 30px;margin-top: 12px;">
          <div id="nyts_mt_gk_xjxscz_count_id" style="color: #46e1c5;font-size: 16px;">0</div>
          <div style="margin-top: 5px;font-size: 12px;">亿元</div>
        </div>
        <div style="margin-left: 30px;font-size: 12px;">现价销售产值</div>
      </div>
    </div>
    <!--产值图表-->
    <div ref="nyts_nymtgk_echars_id" style="width: 100%;height: 270px;"></div>

    <div style="display:flex;width:100%;height: 70px;padding:10px;">
      <div style="width:46%;background-color: #fffebf;">
        <div style="display:flex;margin-left: 30px;margin-top: 12px;">
          <div id="nyts_mt_gk_gyzcz_count_id" style="color: #5eb0ef;font-size: 16px;">{{ymcl}}</div>
          <div style="margin-top: 5px;font-size: 12px;">万吨</div>
        </div>
        <div style="margin-left: 30px;font-size: 12px;">原煤产量</div>
      </div>
      <div style="width:46%;background-color: #fffebf;">
        <div style="display:flex;margin-left: 30px;margin-top: 12px;">
          <div id="nyts_mt_gk_xjxscz_count_id" style="color: #fab52a;font-size: 16px;">{{ktcl}}</div>
          <div style="margin-top: 5px;font-size: 12px;">万吨</div>
        </div>
        <div style="margin-left: 30px;font-size: 12px;">块碳产量</div>
      </div>
    </div>
    <!--产值图表-->
    <div style="width: 93%;margin: auto;margin-top: 12px;">
      <div style="display:flex;">
        <div id="mycharts1" ref="myCharts1" style="height:220px;width:93%;"></div>
      </div>
    </div>

    <div style="display:flex;width:100%;height: 70px;padding:10px;">
      <div style="width:92%;background-color: #e9f8ff;">
        <div style="margin-top: 25px;margin-left: 30px;font-size: 12px;float: left;">煤炭销量</div>
        <div style="display:flex;margin-left: 115px;  margin-top: 20px;">
          <div id="nyts_mt_gk_gyzcz_count_id" style="font-size: 16px;color: #3ea1ec;">{{mtxs}}</div>
          <div style="margin-top: 5px;font-size: 12px;">万吨</div>
        </div>
      </div>
    </div>
    <!--产值图表-->
    <div style="width: 93%;margin: auto;margin-top: 12px;">
      <div style="display:flex;">
        <div id="myCharts2" ref="myCharts2" style="height:220px;width:93%;"></div>
      </div>
    </div>

    <van-popup v-model="show" @opened="openPopYear" position="bottom" :style="{ height: '200px',overflow:'hidden' }">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        style="height: 200px;"
        @confirm="onconfirm"
        :formatter="formatter"
      />
    </van-popup>
  </div>
</template>

<style scoped>
@import "../../../../../page/cyzx/nyts/nyts_mt/nyts_mt_gk/nyts_mt_gk.css";
@import "../../../../../assets/css/frozenui.css";
</style>
<script>
import echarts from "echarts";
import $ from "jquery";
import { httpMethod } from "../../../../../api/getData.js";
import { nytsMtGkJs } from "../../../../../page/cyzx/nyts/nyts_mt/nyts_mt_gk/nyts_mt_gk.js";
import Vue from "vue";
import { DatetimePicker, Popup } from "vant";
Vue.use(DatetimePicker).use(Popup);
export default {
  data() {
    return {
      ktcl: "0",
      ymcl: "0",
      mtxs: "0",
      show: false,
      nowYear: "",
      currentDate: new Date(),
      maxDate: new Date(),
      minDate: new Date(2018, 0, 1)
    };
  },
  mounted() {
    this.getMtTjProduction(this.nowYear);
    this.getMtTjQuantity(this.nowYear);
    this.getMtTjOutput(this.nowYear);
    this.getMtTjMarket(this.nowYear);
  },
  methods: {
    //开启年时间选择
    openPopYear: function() {
      console.log("111");
      $(".van-picker__columns")
        .find(".van-picker-column")
        .eq(1)
        .hide();
    },
    getTwoEcharts: function(echarts, value, data) {
      nytsMtGkJs.showMtgk_echar2(echarts, value, data, httpMethod);
    },
    getThreeEcharts: function(echarts, value, data) {
      nytsMtGkJs.showMtgk_echar3(echarts, value, data);
    },
    //能源煤炭统计产值
    getMtTjProduction: function(date) {
      var params = {
        //dateType: "年",
        year: date
      };

      //获取数据
      httpMethod
        .getMtTjProduction(params)
        .then(ret => {
          if (ret != null) {
            var isSuccess = ret.success;
            var message = ret.msg;
            var total = ret.total;
            if (isSuccess != null && isSuccess == "1") {
              var tjs = ret.tjs;
              if (tjs.length > 0) {
                var gyzcz = tjs[0].gyzcz; //工业总产值
                var xscz = tjs[0].xscz; //现价销售产值
                if (gyzcz != "-") {
                  $("#nyts_mt_gk_gyzcz_count_id").html(
                    parseFloat(gyzcz / 10000).toFixed(2)
                  );
                } else {
                  $("#nyts_mt_gk_gyzcz_count_id").html("-");
                }
                if (xscz != "-") {
                  $("#nyts_mt_gk_xjxscz_count_id").html(
                    parseFloat(xscz / 10000).toFixed(2)
                  );
                } else {
                  $("#nyts_mt_gk_xjxscz_count_id").html("-");
                }
              }
              var tjt = ret.tjt;
              //调用统计图
              this.showMtgk_echar1(
                echarts,
                this.$refs.nyts_nymtgk_echars_id,
                tjt
              );
            } else {
            }
          } else {
          }
        })
        .catch(err => {});
    },
    //显示统计图
    showMtgk_echar1: function(echarts, id, data) {
      nytsMtGkJs.showMtgk_echar1(echarts, id, data);
    },
    //能源煤炭统计数量
    getMtTjQuantity: function(date) {
      var params = {
        //dateType: "年",
        year: date
      };

      //获取数据
      httpMethod
        .getMtTjQuantity(params)
        .then(ret => {
          if (ret != null) {
            var isSuccess = ret.success;
            var message = ret.msg;
            var total = ret.total;
            if (isSuccess != null && isSuccess == "1") {
              var jts = ret.jts;
              var jts1 = jts.jts; //集团数
              var qys = jts.qys; //企业数
              var xms = jts.xms; //项目数
              $("#nyts_mt_gk_jts_count_id").html(jts1);
              $("#nyts_mt_gk_qys_count_id").html(qys);
              $("#nyts_mt_gk_pm_count_id").html(xms);
            } else {
            }
          } else {
          }
        })
        .catch(err => {});
    },
    //能源煤炭产值
    getMtTjOutput: function(date) {
      var params = {
        //dateType: "年",
        year: date
      };
      //获取数据
      httpMethod
        .getMtTjOutput(params)
        .then(ret => {
          if (ret != null) {
            var isSuccess = ret.success;
            var message = ret.msg;
            var total = ret.total;
            if (isSuccess != null && isSuccess == "1") {
              let dataList = ret.tjs;
              if (this.nowYear == "") {
                this.nowYear = ret.year;
              }
              this.ktcl = dataList[0].ktcl != null ? dataList[0].ktcl : 0;
              this.ymcl = dataList[0].ymcl != null ? dataList[0].ymcl : 0;
              this.getTwoEcharts(echarts, mycharts1, ret.tjt);
            }
          }
        })
        .catch(err => {});
    },
    //能源煤炭销量
    getMtTjMarket: function(date) {
      var params = {
        //dateType: "年",
        year: date
      };
      //获取数据
      httpMethod
        .getMtTjMarket(params)
        .then(ret => {
          if (ret != null) {
            var isSuccess = ret.success;
            var message = ret.msg;
            var total = ret.total;
            if (isSuccess != null && isSuccess == "1") {
              this.mtxs = ret.tjs.mtxs != null ? ret.tjs.mtxs : 0;
              this.getThreeEcharts(echarts, this.$refs.myCharts2, ret.tjt);
            }
          }
        })
        .catch(err => {});
    },
    timeFormat(time) {
      // 时间格式化 2019
      let year = time.getFullYear();
      return year;
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      }
      return "";
    },
    onconfirm() {
      this.nowYear = this.timeFormat(this.currentDate);
      this.show = false;
      //this.$refs.child1.changeTitme(this.nowYear);
      console.log(this.nowYear);
      this.getMtTjProduction(this.nowYear);
      this.getMtTjQuantity(this.nowYear);
      this.getMtTjOutput(this.nowYear);
      this.getMtTjMarket(this.nowYear);
    },
    showDatePicker() {
      this.show = true;
    },
    hideDataPicker() {
      this.show = false;
    }
  }
};
</script>