<template>
  <div style="margin-top:0px;">
    <van-popup v-model="show" @opened="openPop" position="bottom" :style="{ height: '200px' }">
      <van-datetime-picker
        id="popClass"
        v-model="currentDate"
        type="year-month"
        style="height: 200px;"
        @confirm="onconfirm"
        :formatter="formatter"
      />
    </van-popup>
    <div
      style="display: flex;background: rgb(255, 255, 255);height: 40px; position: fixed; width: 100%;z-index:1"
    >
      <div class="ui-row-flex ui-whitespace" style="margin-top: 9px;">
        <div class="ui-col ui-col" @click="upYearClick">
          <div class="div_next_style">前一年</div>
        </div>
        <div class="ui-col ui-col" @click="showDatePicker()">
          <div class="div_flex" style="background: #f1f1f1;border-radius: 6px;">
            <img
              src="../../../../assets/img/project_calendar.png"
              style="height: 17px;margin-top: 3px;margin-right: 10px;margin-left: 21px;"
            />
            <div class="div_next_style">{{nowYear}}年</div>
          </div>
        </div>
        <div class="ui-col ui-col" @click="downYearClick">
          <div class="div_next_style" style="text-align:right;">后一年</div>
        </div>
      </div>
    </div>
    <div style="margin-top: 47px;">
      <div style="background:#ffffff;height:220px;width:100%;margin-top:8px;padding-top:7px;">
        <div class="echars_titile_div">重点项目各阶段项目数量统计</div>
        <div
          class="van-hairline--bottom"
          style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
        ></div>
        <div id="myCharts1" ref="myCharts1" style="height:210px;width:100%;"></div>
      </div>

      <div style="background:#ffffff;height:220px;width:100%;margin-top:8px;padding-top:7px;">
        <div class="echars_titile_div">区县统计各阶段项目数量</div>
        <div
          class="van-hairline--bottom"
          style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
        ></div>
        <div id="myCharts2" ref="myCharts2" style="height:210px;width:100%;"></div>
      </div>

      <div style="background:#ffffff;height:240px;width:100%;margin-top:8px;padding-top:7px;">
        <div class="echars_titile_div">各区县实际投资额占比</div>
        <div
          class="van-hairline--bottom"
          style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
        ></div>
        <div id="myCharts3" ref="myCharts3" style="height:230px;width:100%;"></div>
      </div>

      <div style="background:#ffffff;height:240px;width:100%;margin-top:8px;padding-top:7px;">
        <div class="echars_titile_div">各区县实际投资额完成率</div>
        <div
          class="van-hairline--bottom"
          style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
        ></div>
        <div id="myCharts4" ref="myCharts4" style="height:230px;width:100%;"></div>
      </div>

      <div style="background:#ffffff;height:190px;width:100%;margin-top:8px;padding-top:7px;">
        <div class="echars_titile_div">各类型实际投资额占比</div>
        <div
          class="van-hairline--bottom"
          style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
        ></div>
        <div id="myCharts5" ref="myCharts5" style="height:180px;width:100%;"></div>
      </div>

      <div style="background:#ffffff;height:240px;width:100%;margin-top:8px;padding-top:7px;">
        <div class="echars_titile_div">各类型投资完成率</div>
        <div
          class="van-hairline--bottom"
          style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
        ></div>
        <div id="myCharts6" ref="myCharts6" style="height:230px;width:100%;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
import Vue from "vue";
import { Sticky, Popup } from "vant";
Vue.use(Sticky).use(Popup);
import "echarts/theme/macarons.js";
import { echarsEnti } from "../../../../page/zdgz/zdgc/zdgc_tjfx/zdgc_tjfx.js";
import { httpMethod } from "../../../../api/getData.js";
export default {
  name: "zdgc_tjfx",
  data() {
    return {
      nowYear: "2019",
      currentDate: new Date(),
      activeClassUldy: -1,
      listZdgcType: [],
      listZdgcDyType: [],
      show: false,
      seach_value: "",
      active: 0,
      list: []
    };
  },
  mounted() {
    this.statisticsProgress();
    this.statisticsRegionStage();
    this.statisticsNdProportion();
    this.statisticsNdPercentage();
    this.statisticsLbNdProportion();
    this.statisticsLbNdPercentage();
  },
  methods: {
    returnCom(flag) {
      var returnEle = null;
      $("#menu_ul_id").animate({ left: "-163px" }, 500);
      $("#tabs").animate({ left: "0px" }, 500);
      switch (flag) {
        case 1:
          returnEle = document.getElementById("myCharts1");
          break;
        case 2:
          returnEle = document.getElementById("myCharts2");
          break;
        case 3:
          returnEle = document.getElementById("myCharts3");
          break;
        case 4:
          returnEle = document.getElementById("myCharts4");
          break;
        case 5:
          returnEle = document.getElementById("myCharts5");
          break;
        case 5:
          returnEle = document.getElementById("myCharts6");
          break;
        default:
          break;
      }
      //  $("#myCharts6").scrollIntoView(true);
      if (returnEle) {
        returnEle.scrollIntoView({block: "end"});
      }
    },
    upYearClick: function() {
      this.nowYear = parseInt(this.nowYear) - 1 + "";
      this.statisticsProgress();
      this.statisticsRegionStage();
      this.statisticsNdProportion();
      this.statisticsNdPercentage();
      this.statisticsLbNdProportion();
      this.statisticsLbNdPercentage();
    },
    downYearClick: function() {
      this.nowYear = parseInt(this.nowYear) + 1 + "";
      this.statisticsProgress();
      this.statisticsRegionStage();
      this.statisticsNdProportion();
      this.statisticsNdPercentage();
      this.statisticsLbNdProportion();
      this.statisticsLbNdPercentage();
    },
    //开启时间选择
    openPop: function() {
      $(".van-picker__columns")
        .find(".van-picker-column")
        .eq(1)
        .hide();
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      }
      return "";
    },
    timeFormat(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return year;
    },
    onconfirm() {
      this.nowYear = this.timeFormat(this.currentDate);
      this.show = false;
      this.statisticsProgress();
      this.statisticsRegionStage();
      this.statisticsNdProportion();
      this.statisticsNdPercentage();
      this.statisticsLbNdProportion();
      this.statisticsLbNdPercentage();
    },
    showDatePicker() {
      this.show = true;
    },
    //统计图1
    statisticsProgress: function() {
      var params = {
        reportDate: this.nowYear
      };
      httpMethod
        .statisticsProgress(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            this.getOneEchars(echarts, this.$refs.myCharts1, res.data);
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    },
    //统计图2
    statisticsRegionStage: function() {
      var params = {
        reportDate: this.nowYear
      };
      httpMethod
        .statisticsRegionStage(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            this.getTwoEchars(echarts, this.$refs.myCharts2, res.data);
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    },
    //统计图3
    statisticsNdProportion: function() {
      var params = {
        reportDate: this.nowYear
      };
      httpMethod
        .statisticsNdProportion(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            this.getThreeEchars(echarts, this.$refs.myCharts3, res.data);
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    },
    //统计图4
    statisticsNdPercentage: function() {
      var params = {
        reportDate: this.nowYear
      };
      httpMethod
        .statisticsNdPercentage(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            this.getFourEchars(echarts, this.$refs.myCharts4, res.data);
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    },
    //统计图5
    statisticsLbNdProportion: function() {
      var params = {
        reportDate: this.nowYear
      };
      httpMethod
        .statisticsLbNdProportion(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            this.getFiveEchars(echarts, this.$refs.myCharts5, res.data);
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    },
    //统计图6
    statisticsLbNdPercentage: function() {
      var params = {
        reportDate: this.nowYear
      };
      httpMethod
        .statisticsLbNdPercentage(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            this.getSixEchars(echarts, this.$refs.myCharts6, res.data);
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    },
    //初始化第一个图表
    getOneEchars: function(echarts, value, data) {
      // this.$store.commit('showLoading');//加载loading
      //this.$store.commit('hideLoading');//解除loading
      echarsEnti.createEcharsOne(echarts, value, data);
    },
    //初始化第2个图表
    getTwoEchars: function(echarts, value, data) {
      // this.$store.commit('showLoading');//加载loading
      //this.$store.commit('hideLoading');//解除loading
      echarsEnti.createEcharsTwo(echarts, value, data);
    },
    //初始化第3个图表
    getThreeEchars: function(echarts, value, data) {
      // this.$store.commit('showLoading');//加载loading
      //this.$store.commit('hideLoading');//解除loading
      echarsEnti.createEcharsThree(echarts, value, data);
    },
    //初始化第4个图表
    getFourEchars: function(echarts, value, data) {
      // this.$store.commit('showLoading');//加载loading
      //this.$store.commit('hideLoading');//解除loading
      echarsEnti.createEcharsFour(echarts, value, data);
    },
    //初始化第5个图表
    getFiveEchars: function(echarts, value, data) {
      // this.$store.commit('showLoading');//加载loading
      //this.$store.commit('hideLoading');//解除loading
      echarsEnti.createEcharsFive(echarts, value, data);
    },
    //初始化第6个图表
    getSixEchars: function(echarts, value, data) {
      // this.$store.commit('showLoading');//加载loading
      //this.$store.commit('hideLoading');//解除loading
      echarsEnti.createEcharsSix(echarts, value, data);
    }
  }
};
</script>
<style scoped>
@import "../../../../page/zdgz/zdgc/zdgc_tjfx/zdgc_tjfx.css";
@import "../../../../assets/css/frozenui.css";
</style>
