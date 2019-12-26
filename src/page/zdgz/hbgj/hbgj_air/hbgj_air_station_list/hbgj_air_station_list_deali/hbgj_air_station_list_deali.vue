<template>
  <div style="margin-top:54px;overflow:hidden;">
    <div style="position:relative;height:320px;">
      <img class="index_bg" src="../../../../../../assets/img/air_detail_bg.png" />
      <div
        style="font-size: 14px;color: rgb(51, 51, 51);text-align: center;margin-top: 10px;"
      >{{itemEnti.stationName}}</div>
      <div style="font-size:12px;color:#999999;text-align: center;">更新时间:{{time}}</div>
      <div style="position: absolute;top: 169px;font-size: 11px;color: #666666;left: 42%;">空气质量指数</div>
      <div
        style="position: absolute;top: 190px;font-size: 11px;color: rgb(102, 102, 102);width: 100%;display: flex;"
      >
        <div style="width:50%;text-align:right;color:#333333;font-size:13px;">AQI</div>
        <div
          id="aqiNameId"
          style="color:#ffffff; text-align: center;border-radius: 6px;background: #f3f3f3;width: 24px;padding: 3px;margin-left: 5px;"
        ></div>
      </div>
      <div
        style="display: flex;height: 60px;position: absolute;width: 90%;top: 235px;background: #ffffff;margin-left: 17px;margin-right: 17px;border-radius: 8px;box-shadow: 0px 1px 6px 2px #cccccc;"
      >
        <div style="width:50%;display:flex;">
          <img
            style="height: 30px;margin-top: 16px;margin-left: 58px;"
            src="../../../../../../assets/img/air_icon_temp.png"
          />
          <div>
            <div style="margin-top: 6px;font-size: 14px;color: #666666;">温度</div>
            <div id="wdDivId" style="color:#3ca1ec;font-size: 16px;">16°</div>
          </div>
        </div>
        <div style="height:50px;width:1px;background:#cccccc;"></div>
        <div style="width:50%;display:flex;">
          <img
            style="height: 27px;margin-top: 16px;margin-left: 58px;"
            src="../../../../../../assets/img/air_icon_wind.png"
          />
          <div style="margin-left:5px;">
            <div style="margin-top: 6px;font-size: 14px;color: #666666;">风速</div>
            <div id="fsDivId"  style="color:#3ca1ec;font-size: 16px;">0级</div>
          </div>
        </div>
      </div>
      <div ref="myCharts" style="width:100%;height:200px;"></div>
    </div>

    <div style="background: rgba(255, 255, 255, 0.7);width: 100%;">
      <ul class="ui-row">
        <li
          class="ui-col ui-col-33"
          v-for="(item,index) in listPmList"
          :key="index"
          :id="(index)"
          style="text-align:center;"
        >
          <div class="yuanquan" v-if="item.colorvalue=='1'" style="background:#75d492;"></div>
          <div class="yuanquan" v-if="item.colorvalue=='2'" style="background:#c5d686;"></div>
          <div class="yuanquan" v-if="item.colorvalue=='3'" style="background:#f0a15c;"></div>
          <div class="yuanquan" v-if="item.colorvalue=='4'" style="background:#e35e5f;"></div>
          <div class="yuanquan" v-if="item.colorvalue=='5'" style="background:#b83b5d;"></div>
          <div class="yuanquan" v-if="item.colorvalue=='6'" style="background:#57155d;"></div>
          <div style="color:#666666;font-size:13px;">{{item.name}}</div>

          <div
            v-if="item.colorvalue=='1'"
            style="width: 100%;text-align:center;color:#75d492;font-size:17px;"
          >{{item.value}}</div>
          <div
            v-if="item.colorvalue=='2'"
            style="width: 100%;text-align:center;color:#c5d686;font-size:17px;"
          >{{item.value}}</div>
          <div
            v-if="item.colorvalue=='3'"
            style="width: 100%;text-align:center;color:#f0a15c;font-size:17px;"
          >{{item.value}}</div>
          <div
            v-if="item.colorvalue=='4'"
            style="width: 100%;text-align:center;color:#e35e5f;font-size:17px;"
          >{{item.value}}</div>
          <div
            v-if="item.colorvalue=='5'"
            style="width: 100%;text-align:center;color:#b83b5d;font-size:17px;"
          >{{item.value}}</div>
          <div
            v-if="item.colorvalue=='6'"
            style="width: 100%;text-align:center;color:#57155d;font-size:17px;"
          >{{item.value}}</div>
        </li>
      </ul>
    </div>

    <div style="background:#ffffff;height:240px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div">空气质量变化趋势</div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div id="myCharts1" ref="myCharts1" style="height:210px;width:100%;"></div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import echarts from "echarts";
import { httpMethod } from "../../../../../../api/getData.js";
import { hbgjAirJs } from "../../../../../../page/zdgz/hbgj/hbgj_air/hbgj_air_station_list/hbgj_air_station_list_deali/hbgj_air_station_list_deali.js";
export default {
  name: "hbgj_air_station_list_deali",
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  activated() {
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  data() {
    return {
      alllevelist: [],
      listPmList: [],
      itemEnti: {},
      time: ""
    };
  },
  mounted() {
    this.itemEnti = this.$route.params.entity;
    this.time = this.dataFormat(new Date(this.itemEnti.dataUpdatetime));
    console.log(JSON.stringify(this.$route.params.entity));
    this.getAirPollutantsLevel();
    this.trendsInAirQuality();
  },
  methods: {
    dataFormat(time) {
      return `${time.getFullYear()}-${
        time.getMonth() + 1 >= 10
          ? time.getMonth() + 1
          : "0" + (time.getMonth() + 1)
      }-${time.getDate() >= 10 ? time.getDate() : "0" + time.getDate()}
                     ${
                       time.getHours() >= 10
                         ? time.getHours()
                         : "0" + time.getHours()
                     }:${
        time.getMinutes() >= 10 ? time.getMinutes() : "0" + time.getMinutes()
      }:${
        time.getSeconds() >= 10 ? time.getSeconds() : "0" + time.getSeconds()
      }`;
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
            // this.aqiList = res.data.AQI;
            this.getAirRealtimeData(); //实时概况
          }
        })
        .catch(err => {
          console.log(err);
        });
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
            this.showYbpFun(
              echarts,
              this.$refs.myCharts,
              res.data,
              this.alllevelist
            );
            console.log(JSON.stringify(this.listPmList));
            // this.showTopData(res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //显示空气质量
    showYbpFun: function(echarts, value, data, list) {
      hbgjAirJs.showLbEcharsOne(echarts, value, data, list);
    },
    //空气质量变化趋势
    trendsInAirQuality: function() {
      var params = {
        dateType: "天",
        dateStr: new Date().getFullYear() + "-" + (new Date().getMonth() + 1)
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
            this.showAirBhQs(echarts, this.$refs.myCharts1, axisY, axisX);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //显示空气质量变化趋势
    showAirBhQs: function(echarts, value, axisY, axisX) {
      hbgjAirJs.showLbEcharsThree(echarts, value, axisY, axisX);
    }
  }
};
</script>

<style scoped>
@import "../../../../../../page/zdgz/hbgj/hbgj_air/hbgj_air_station_list/hbgj_air_station_list_deali/hbgj_air_station_list_deali.css";
@import "../../../../../../assets/css/frozenui.css";
</style>