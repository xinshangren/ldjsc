<template>
  <div style="
    overflow: auto;
">
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

    <van-popup v-model="showYearMonth" position="bottom" :style="{ height: '200px' }">
      <van-datetime-picker
        v-model="currentYearMonth"
        type="year-month"
        style="height: 200px;"
        @confirm="onconfirmYearMonth"
      />
    </van-popup>

    <van-popup v-model="showAllTime" position="bottom" :style="{ height: '200px' }">
      <van-datetime-picker
        v-model="currentYearMonthDay"
        type="date"
        style="height: 200px;"
        @confirm="onconfirmAlltime"
      />
    </van-popup>

    <div style="background:#ffffff;height:300px;width:100%;margin-top:8px;padding-top:7px;">
      <div style="display:flex;">
        <div class="echars_titile_div">省内空气质量</div>
        <div id="echar1typeId" class="ui-row-flex ui-whitespace" style="width: 171px;">
          <div class="chars_div_time_select" style="text-align: center;width:43px;">年</div>
          <div class="chars_div_time_noselect" style="text-align: center;width:43px;">月</div>
          <div class="chars_div_time_noselect" style="text-align: center;width:43px;">日</div>
        </div>

        <div @click="showSelectTime(1)" style="display:flex;">
          <div
            id="oneTimeDivId"
            style="color:#3097fb;font-size:14px;line-height:24px;"
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
      <div
        id="myCharts11"
        ref="myCharts11"
        style="width:100%; height: 40px;padding: 0px;margin-top:0px;"
      ></div>
      <div id="myCharts1" ref="myCharts1" style="height:210px;width:100%;"></div>
    </div>

    <div style="background:#ffffff;height:230px;width:100%;margin-top:8px;padding-top:7px;">
      <div style="display:flex;">
        <div class="echars_titile_div">市内空气质量排名</div>
        <div id="echar2typeId" class="ui-row-flex ui-whitespace" style="width: 161px;">
          <div class="ui-col ui-col chars_div_time_select" style="text-align: center;width:43px;">年</div>
          <div
            class="ui-col ui-col chars_div_time_noselect"
            style="text-align: center;width:43px;"
          >月</div>
          <div
            class="ui-col ui-col chars_div_time_noselect"
            style="text-align: center;width:43px;"
          >日</div>
        </div>

        <div @click="showSelectTime(2)" style="display:flex;">
          <div
            id="twoTimeDivId"
            style="color:#3097fb;font-size:14px;line-height:24px;"
          >{{currentYear2}}</div>
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
      <div id="myCharts2" ref="myCharts2" style="height:210px;width:100%;"></div>
    </div>

    <div style="background:#ffffff;height:240px;width:100%;margin-top:8px;padding-top:7px;">
      <div style="display:flex;">
        <div class="echars_titile_div" style="width:30%;">空气质量变化趋势</div>
        <div id="echar3typeId" class="chars_title_select" style="width:30%;">
          <div class="chars_div_time_select" style="text-align: center;width: 43px;">小时</div>
          <div class="chars_div_time_noselect" style="text-align: center;width: 43px;">天</div>
        </div>

        <div @click="showSelectTime(3)" style="display:flex;">
          <div
            id="twoTimeDivId"
            style="color:#3097fb;font-size:14px;line-height:24px;"
          >{{currentYear3}}</div>
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
      <div id="myCharts3" ref="myCharts3" style="height:210px;width:100%;"></div>
    </div>

    <div style="background:#ffffff;height:300px;width:100%;margin-top:8px;padding-top:7px;">
      <div style="display:flex;">
        <div class="echars_titile_div">优良天数占比</div>
        <div id="echar4typeId" class="chars_title_select">
          <div class="chars_div_time_select" style="text-align: center;width: 43px;">年</div>
          <div class="chars_div_time_noselect" style="text-align: center;width: 43px;">月</div>
        </div>

        <div @click="showSelectTime(4)" style="display:flex;margin-left:10px;">
          <div
            id="twoTimeDivId"
            style="color:#3097fb;font-size:14px;line-height:24px;"
          >{{currentYear4}}</div>
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
      <div id="myCharts4" ref="myCharts4" style="height:210px;width:100%;"></div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import $ from "jquery";
import { httpMethod } from "../../../../../api/getData.js";
import { hbgjAirJs } from "../../../../../page/zdgz/hbgj/hbgj_air/hbgj_air_tj/hbgj_air_tj.js";
import Vue from "vue";
import { DatetimePicker, Popup } from "vant";
Vue.use(DatetimePicker).use(Popup);
export default {
  name: "hbgj_air_tj",
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
      showYear: false, //年显示
      showYearMonth: false, //年月显示
      showAllTime: false, //年月日显示
      currentYear: new Date(),
      currentYearMonth: new Date(),
      currentYearMonthDay: new Date(),
      flagindex: 0, //判断是第几个图表
      flagsmallIndex: 0, //时间是年月日
      currentYear1: new Date().getFullYear(),
      currentYear2: new Date().getFullYear(),
      currentYear3:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
      currentYear4: new Date().getFullYear()
    };
  },
  mounted() {
    $("#echar1typeId div").click(function(e) {
      $(this).removeClass("chars_div_time_noselect");
      $(this).addClass("chars_div_time_select");
      $(this)
        .siblings("div")
        .removeClass("chars_div_time_noselect");
      $(this)
        .siblings("div")
        .removeClass("chars_div_time_select");
      $(this)
        .siblings("div")
        .addClass("chars_div_time_noselect");
    });
    $("#echar2typeId div").click(function(e) {
      $(this).removeClass("chars_div_time_noselect");
      $(this).addClass("chars_div_time_select");
      $(this)
        .siblings("div")
        .removeClass("chars_div_time_noselect");
      $(this)
        .siblings("div")
        .removeClass("chars_div_time_select");
      $(this)
        .siblings("div")
        .addClass("chars_div_time_noselect");
    });
    $("#echar3typeId div").click(function(e) {
      $(this).removeClass("chars_div_time_noselect");
      $(this).addClass("chars_div_time_select");
      $(this)
        .siblings("div")
        .removeClass("chars_div_time_noselect");
      $(this)
        .siblings("div")
        .removeClass("chars_div_time_select");
      $(this)
        .siblings("div")
        .addClass("chars_div_time_noselect");
    });
    $("#echar4typeId div").click(function(e) {
      $(this).removeClass("chars_div_time_noselect");
      $(this).addClass("chars_div_time_select");
      $(this)
        .siblings("div")
        .removeClass("chars_div_time_noselect");
      $(this)
        .siblings("div")
        .removeClass("chars_div_time_select");
      $(this)
        .siblings("div")
        .addClass("chars_div_time_noselect");
    });
    var myDate = new Date();
    var nowYear = myDate.getFullYear();
    this.provincialAirRanking("年", this.currentYear1);
    this.cityAirRanking("年", this.currentYear2);
    this.trendsInAirQuality("小时", this.currentYear3);
    this.percentageOfGoodDays('年', this.currentYear4);
  },
  methods: {
    //判断是选的哪个图表时间
    showSelectTime: function(index) {
      this.flagindex = index;
      var number = 0;
      switch (index) {
        case 1: //第一个图表的时间
          number = this.getYearOrMonthOrDay("echar1typeId");
          break;
        case 2: //第二个图表的时间
          number = this.getYearOrMonthOrDay("echar2typeId");
          break;
        case 3: //第三个图表的时间
          number = this.getYearOrMonthOrDay("echar3typeId");
          break;
        case 4: //第四个图表的时间
          number = this.getYearOrMonthOrDay("echar4typeId");
          break;
        default:
          break;
      }
      this.flagsmallIndex = number;
      console.log(number);
      switch (number) {
        case 1:
          this.showYear = true;
          break;
        case 2:
          this.showYearMonth = true;
          break;
        case 3:
          this.showAllTime = true;
          break;
        default:
          break;
      }
    },
    //返回选中的是哪一个数据
    getYearOrMonthOrDay: function(id) {
      var number = 1;
      if (id != "echar3typeId") {
        $("#" + id + " div").each(function() {
          if ($(this).hasClass("chars_div_time_select")) {
            number = $(this).index() + 1;
          }
        });
      } else {
        $("#" + id + " div").each(function() {
          if ($(this).hasClass("chars_div_time_select")) {
            number = $(this).index() + 1;
          }
        });
        if(number==1){
          number=3;
        }else{
          number=2;
        }
      }

      return number;
    },
    //格式化事件
    timeFormatYear(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return year;
    },

    //格式化事件
    timeFormatMonth(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return year + "-" + month;
    },
    //格式化事件
    timeFormatDay(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return year + "-" + month + "-" + day;
    },
    formatterYear(type, value) {
      if (type === "year") {
        return `${value}年`;
      }
      return "";
    },
    //年的确定
    onconfirmYear() {
      var date = this.timeFormatYear(this.currentYear);
      this.showYear = false;
      switch (this.flagindex) {
        case 1: //第一个图表
          this.currentYear1 = date;
          this.provincialAirRanking("年", this.currentYear1);
          break;
        case 2: //第二个图表
          this.currentYear2 = date;
          this.cityAirRanking("年", this.currentYear2);
          break;
        case 3: //第三个图表
          break;
        case 4: //第四个图表
         this.currentYear4 = date;
         this.percentageOfGoodDays('年', this.currentYear4);
          break;
        default:
          break;
      }
    },
    //年月的确定
    onconfirmYearMonth: function() {
      var date = this.timeFormatMonth(this.currentYearMonth);
      this.showYearMonth = false; //年月显示
      switch (this.flagindex) {
        case 1: //第一个图表
          this.currentYear1 = date;
          this.provincialAirRanking("月", this.currentYear1);
          break;
        case 2: //第二个图表
          this.currentYear2 = date;
          this.cityAirRanking("月", this.currentYear2);
          break;
        case 3: //第三个图表
          this.currentYear3 = date;
          this.trendsInAirQuality("天", this.currentYear3);
          break;
        case 4: //第四个图表
         this.currentYear4 = date;
         this.percentageOfGoodDays('月', this.currentYear4);
          break;
        default:
          break;
      }
    },
    //年月日的确定
    onconfirmAlltime: function() {
      var date = this.timeFormatDay(this.currentYearMonthDay);
      this.showAllTime = false; //年月日显示
      switch (this.flagindex) {
        case 1: //第一个图表
          this.currentYear1 = date;
          this.provincialAirRanking("日", this.currentYear1);
          break;
        case 2: //第二个图表
          this.currentYear2 = date;
          this.cityAirRanking("日", this.currentYear2);
          break;
        case 3: //第三个图表
          this.currentYear3 = date;
          this.trendsInAirQuality("小时", this.currentYear3);
          break;
        case 4: //第四个图表
          this.currentYear4 = date;
         this.percentageOfGoodDays('日', this.currentYear4);
          break;
        default:
          break;
      }
    },
    //开启年时间选择
    openPopYear: function() {
      $(".van-picker__columns")
        .find(".van-picker-column")
        .eq(1)
        .hide();
    },
    //省内空气质量排名
    provincialAirRanking: function(dateTypes, dateStrs) {
      var params = {
        dateType: dateTypes,
        dateStr: dateStrs
      };
      //获取数据
      httpMethod
        .provincialAirRanking(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            var result = res.dataList;
            this.showSnAirRank(echarts, this.$refs.myCharts1, result);
            this.showSnAirRank1(echarts, this.$refs.myCharts11, result);
          }
        })
        .catch(err => {});
    },
    //显示省内空气质量
    showSnAirRank: function(echarts, value, data) {
      hbgjAirJs.showLbEcharsOne(echarts, value, data);
    },
    showSnAirRank1: function(echarts, value, data) {
      hbgjAirJs.showEcharsView1_ssgk1(echarts, value, data);
    },
    //市内空气质量排名
    cityAirRanking: function(dateTypes, dateStrs) {
      var params = {
        dateType: dateTypes,
        dateStr: dateStrs
      };
      //获取数据
      httpMethod
        .cityAirRanking(params)
        .then(res => {
          console.log("222222222222");
          var code = res.success;
          if (code == "1") {
            var result = res.dataList;
            if (result.length === 0) {
              var newDataList = [];
              var dataList = [
                "城区",
                "开发区",
                "泽州县",
                "高平市",
                "沁水县",
                "阳城县",
                "陵川县"
              ];
              for (let i = 0; i < dataList.length; i++) {
                var map = {
                  cityName: dataList[i],
                  dataCompositeIndex: 0,
                  cityRank: 1
                };
                newDataList.push(map);
              }
              this.showEcharsView2(echarts, this.$refs.myCharts2, newDataList);
            } else {
              this.showEcharsView2(echarts, this.$refs.myCharts2, result);
            }
          }
        })
        .catch(err => {});
    },
    //显示市内排名
    showEcharsView2: function(echarts, value, result) {
      hbgjAirJs.showLbEcharsTwo(echarts, value, result);
    },
    //空气质量变化趋势
    trendsInAirQuality: function(dateTypes, dateStrs) {
      var params = {
        dateType: dateTypes,
        dateStr: dateStrs
      };
      //获取数据
      httpMethod
        .trendsInAirQuality(params)
        .then(res => {
          console.log("3333333");
          var code = res.success;
          if (code == "1") {
            var axisY = res.axisY;
            var axisX = res.axisX;
            this.showEcharsView3(echarts, this.$refs.myCharts3, axisY, axisX);
          }
        })
        .catch(err => {});
    },
    //空气质量变化趋势
    showEcharsView3: function(echarts, value, axisY, axisX) {
      hbgjAirJs.showLbEcharsThree(echarts, value, axisY, axisX);
    },
    //优良天数占比
    percentageOfGoodDays: function(dateTypes, dateStrs) {
      var params = {
        dateType: dateTypes,
        dateStr: dateStrs
      };
      //获取数据
      httpMethod
        .percentageOfGoodDays(params)
        .then(res => {
          console.log("44444");
          var code = res.success;
          if (code == "1") {
            var data=res.data;
            this.showEcharsView4(echarts, this.$refs.myCharts4,data);
          }
        })
        .catch(err => {});
    },
    //优良天数占比
    showEcharsView4: function(echarts, value,data) {
      hbgjAirJs.showLbEcharsFour(echarts, value,data);
    }
  }
};
</script>

<style>
@import "../../../../../page/zdgz/hbgj/hbgj_air/hbgj_air_tj/hbgj_air_tj.css";
@import "../../../../../assets/css/frozenui.css";
</style>