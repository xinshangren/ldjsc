<template>
  <div style="
    overflow: auto;
">
    <div class="tianqi">
      <div style="text-align:right;font-size:14px;color:#ccc">最新时间：<span id="updatetime"></span></div>
      <div id="indexaqi_value_id" class="ssgk_title1">0</div>
      <div style="display:flex;margin-top:0px;">
        <div class="ssgk_title1_div">AQI</div>
        <div style="width:50%;text-align:left;font-size:14px;">
          <div
            id="indexaqi_id"
            style="width: 40px;text-align: center;color:#ffffff;border-radius: 5px;"
          ></div>
        </div>
      </div>

      <div style="display:flex;margin-top:5px;">
        <div id="rankPm_id" class="ssgk_title1_div" style="color:#333333;width:100%;text-align:center;">省内排名：  首要污染物：</div>
      </div>

      <div style="display:flex;margin-top:5px;">
        <div class="ssgk_title1_div">
          <div style="display: flex;position: absolute;right: 0;">
            <img style="height:19px;" src="../../../../../assets/img/air_icon_temp.png" />
            <div id="nowwd_id" style="color:#333333;"></div>
          </div>
        </div>
        <div class="ssgk_title2_div">
          <div class="ssgk_title1_div">
            <div style="display: flex;position: absolute;left: 0;">
              <img style="height:19px;" src="../../../../../assets/img/air_icon_wind.png" />
              <div id="fldj_id" style="width:100px;color:#333333;text-align:left"></div>
            </div>
          </div>
        </div>
      </div>

      <div style="background: rgba(255, 255, 255, 0.7);position: absolute;width: 100%;bottom: 0px;">
        <div
          class="ui-row-flex ui-whitespace"
          style="padding-left: 0px;padding-right: 0px;font-size: 14px;color: #333333;"
        >
          <div
            class="ui-col ui-col"
            v-for="(item,index) in listPmList"
            :key="index"
            :id="(index)"
            style="text-align:center;"
          >
            <div>{{item.name}}</div>
            <div style="display:flex;">
              <div style="width: 50%;text-align: right;">{{item.value}}</div>
              <div class="yuanquan" v-if="item.colorvalue=='1'" style="background:#75d492;"></div>
              <div class="yuanquan" v-if="item.colorvalue=='2'" style="background:#c5d686;"></div>
              <div class="yuanquan" v-if="item.colorvalue=='3'" style="background:#f0a15c;"></div>
              <div class="yuanquan" v-if="item.colorvalue=='4'" style="background:#e35e5f;"></div>
              <div class="yuanquan" v-if="item.colorvalue=='5'" style="background:#b83b5d;"></div>
              <div class="yuanquan" v-if="item.colorvalue=='6'" style="background:#57155d;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <van-swipe @change="swipeChange" indicator-color="#1976d2">
      <van-swipe-item>
        <div style="background:#ffffff;height:300px;width:100%;margin-top:8px;padding-top:7px;">
          <div class="echars_titile_div">省内空气质量日排名</div>
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
      </van-swipe-item>
      <van-swipe-item>
        <div style="background:#ffffff;height:300px;width:100%;margin-top:8px;padding-top:7px;">
          <div class="echars_titile_div">优良天数占比</div>
          <div
            class="van-hairline--bottom"
            style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
          ></div>
          <div id="myCharts2" ref="myCharts2" style="height:210px;width:100%;"></div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div style="background:#ffffff;height:220px;width:100%;margin-top:8px;padding-top:7px;">
          <div class="echars_titile_div">空气质量变化趋势</div>
          <div
            class="van-hairline--bottom"
            style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
          ></div>
          <div id="myCharts3" ref="myCharts3" style="height:240px;width:100%;"></div>
        </div>
      </van-swipe-item>
    </van-swipe>
    <div style="background:#ffffff;height:220px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div">污染严重站点</div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div style="font-size: 14px;text-align: center;margin-left:10px;margin-right:10px;">
        <div
          class="ui-row-flex ui-whitespace"
          style="color: rgb(255, 255, 255);background: rgb(60, 161, 236);padding-top: 6px;padding-bottom: 6px;"
        >
          <div class="ui-col ui-col">站点</div>
          <div class="ui-col ui-col">站点类型</div>
          <div class="ui-col ui-col">AQI</div>
          <div class="ui-col ui-col">等级</div>
        </div>
      </div>
      <div style="margin-left:10px;margin-right:10px;">
        <div
           @click="goDetile(item)"
          style="font-size: 14px;text-align: center;border-bottom:1px solid #cccccc;"
          v-for="(item,index) in bottomList"
          :key="index"
          :id="(index)"
        >
          
          <div
            class="ui-row-flex ui-whitespace"
            style="color:#333333;background:#e2f3ff;padding-top: 6px;padding-bottom: 6px;"
          >
            <div class="ui-col ui-col" style="word-break:break-all;">{{item.stationName}}</div>
            <div class="ui-col ui-col"  style="word-break:break-all;">{{item.stationType}}</div>
            <div class="ui-col ui-col">{{item.dataAqi}}</div>
            <div class="ui-col ui-col" v-if="item.dataAqiLevel=='6'">严重</div>
            <div class="ui-col ui-col" v-if="item.dataAqiLevel=='5'">重度</div>
            <div class="ui-col ui-col" v-if="item.dataAqiLevel=='4'">中度</div>
            <div class="ui-col ui-col" v-if="!item.dataAqiLevel">&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import $ from "jquery";
import { httpMethod } from "../../../../../api/getData.js";
import { hbgjAirJs } from "../../../../../page/zdgz/hbgj/hbgj_air/hbgj_air_ssgk/hbgj_air_ssgk.js";
import Vue from "vue";
import { Tab, Tabs, Swipe, SwipeItem } from "vant";
Vue.use(Tab)
  .use(Tabs)
  .use(Swipe)
  .use(SwipeItem);
export default {
  name: "hbgj_air",
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
      aqiList: [],
      listPmList: [],
      alllevelist: [],
      bottomList: []
    };
  },
  mounted() {
    this.getAirPollutantsLevel();

    this.percentageOfGoodDays();
    this.trendsInAirQuality();
    this.getStationRealtimeData();
  },
  methods: {
    swipeChange: function(index) {
      console.log(index);
    },
    //省内空气质量排名
    provincialAirRanking: function(resData) {
      var params = {
        // dateType: "年",
        // dateStr: new Date().getFullYear()
      };
      //获取数据
      httpMethod
        .provincialAir(params)
        .then(res => {
          //console.log(res);
          var code = res.success;
          if (code == "1") {
            var dataList = res.dataList;
            this.showSnAirRank(echarts, this.$refs.myCharts1, dataList);
            this.showSnAirRank1(echarts, this.$refs.myCharts11, dataList);
            var dataListnew = dataList.reverse();
            console.log(dataListnew);
            var index = 1;
            for (var i = 0; i < dataListnew.length; i++) {
              var enti = dataListnew[i];
              let cityName = enti.cityName;
                let cityRank = enti.rownum; //城市名称
              //console.log(cityName);
              if (cityName == "晋城市") {
                var dataPollutant = resData.data.dataPollutant; //首要污染物
                $("#rankPm_id").html("省内排名：" + cityRank+"\t\t\t\t\t\t\t\t首要污染物：" + dataPollutant);
                // $("#rankPm_id").html("省内排名：" + (i + 1));
              }
            }
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
    //实时概况
    getAirRealtimeData: function() {
      //获取数据
      httpMethod
        .getAirRealtimeData("")
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            var dataEn = res.data;
            var wdLabel = ["PM10", "SO2", "NO2", "PM2.5", "O3", "CO"];
            var wdLabel1 = ["PM10", "SO2", "NO2", "PM25", "O3", "CO"];
            var wdValue = [
              dataEn.dataPm10,
              dataEn.dataSo2,
              dataEn.dataNo2,
              dataEn.dataPm25,
              dataEn.dataO3,
              dataEn.dataCo
            ];

            for (var j = 0; j < wdLabel.length; j++) {
              var colorLevel = "";
              var labelName = wdLabel1[j]; //污染物名称
              var wdValues = wdValue[j];
              for (var Key in this.alllevelist) {
                var entityList = this.alllevelist[Key];
                if (labelName == Key) {
                  for (var m = 0; m < entityList.length; m++) {
                    var entity = entityList[m];
                    var levelValueStart = entity.levelValueStart; //范围开始
                    var levelValueEnd = entity.levelValueEnd; //范围结束
                    var levelName = entity.levelName; //污染等级文字
                    var levelCode = entity.levelCode; //污染等级code
                    if (
                      parseInt(wdValues) > parseInt(levelValueStart) &&
                      parseInt(wdValues) < parseInt(levelValueEnd)
                    ) {
                      colorLevel = levelCode;
                      console.log(
                        labelName + "===" + wdValues + "===" + levelCode
                      );
                    }
                  }
                }
              }

              var map = {
                name: wdLabel[j],
                value: wdValue[j],
                colorvalue: colorLevel
              };
              this.listPmList.push(map);
            }
            console.log(JSON.stringify(this.listPmList));
            this.showTopData(res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //显示顶部数据
    showTopData: function(res) {
      this.provincialAirRanking(res);
      hbgjAirJs.showTopTip(res, this.aqiList);
    },
    //实时概况污染物等级
    getAirPollutantsLevel: function() {
      //获取数据
      httpMethod
        .getAirPollutantsLevel("")
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            this.alllevelist = res.data; //总的图例
            this.aqiList = res.data.AQI;
            this.getAirRealtimeData(); //实时概况
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //优良天数占比
    percentageOfGoodDays: function() {
      var params = {
        dateType: "年",
        dateStr: new Date().getFullYear()
      };
      //获取数据
      httpMethod
        .percentageOfGoodDays(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            this.showYltsZb(echarts, this.$refs.myCharts2, res.data);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //显示优良天数占比
    showYltsZb: function(echarts, value, data) {
      hbgjAirJs.showLbEcharsTwo(echarts, value, data);
    },
    //空气质量变化趋势
    trendsInAirQuality: function() {
      var  month=new Date().getMonth()+1;
      if(month<10){
        month="0"+month;
      }
      var  dateStrs=new Date().getFullYear() + "-" + month;
      var params = {
        dateType: "天",
        dateStr: dateStrs
      };
      //获取数据
      httpMethod
        .trendsInAirQuality(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            var axisY = res.axisY;
            var axisX = res.axisX;
            this.showAirBhQs(echarts, this.$refs.myCharts3, axisY, axisX);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //显示空气质量变化趋势
    showAirBhQs: function(echarts, value, axisY, axisX) {
      hbgjAirJs.showLbEcharsThree(echarts, value, axisY, axisX);
    },
    //获取站点数据及信息list
    getStationRealtimeData: function() {
      var params = {
        dataType: 6,
        wrdj: "4，5，6",
        stationName: "",
        stationTypeCode: "1，2，3，4，5，6，7"
      };
      //获取数据
      httpMethod
        .getStationRealtimeData(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            this.bottomList = res.dataList;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    goDetile(item) {
      //console.log(item);
      this.$router.push({
        path:
          "/zdgz/hbgj/hbgj_air/hbgj_air_station_list/hbgj_air_station_list_deali",
        name: "hbgj_air_station_list_deali",
        params: {
          entity: item
        }
      });
    }
  }
};
</script>

<style>
@import "../../../../../page/zdgz/hbgj/hbgj_air/hbgj_air_ssgk/hbgj_air_ssgk.css";
@import "../../../../../assets/css/frozenui.css";
</style>