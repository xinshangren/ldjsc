<template>
  <div style="margin-top:0px;">
    <div
      style="display: flex;background: rgb(255, 255, 255);margin-left: 10px;margin-right: 10px;padding-top: 10px;padding-bottom: 10px;"
    >
      <div style="width:50%;display:flex;">
        <img
          style="height: 30px;margin-top: 10px;margin-left:23px;margin-right:5px;"
          src="../../../../assets/img/data_icon1.png"
        />
        <div>
          <div style="display:flex;line-height:27px;">
            <div style="color:#0b91ed;font-size:20px;">{{totalData.zeNum}}</div>
            <div>元</div>
          </div>
          <div style="font-size:12px;color:#666666;">海关进出口总额</div>
        </div>
      </div>
      <div style="height:50px;width:1px;background:#cccccc;"></div>
      <div style="width:50%;display:flex;">
        <img
          style="height: 30px;margin-top: 10px;margin-left:40px;margin-right:5px;"
          src="../../../../assets/img/data_icon2.png"
        />
        <div>
          <div style="display:flex;">
            <div>{{totalData.zeRatio}}</div>
            <div>%</div>
            <img
              v-if="totalData.zeRatio>0||totalData.zeRatio==0"
              style="height: 13px;margin-top: 4px;"
              src="../../../../assets/img/eco_rise.png"
            />
            <img
              v-if="totalData.zeRatio<0"
              style="height: 13px;margin-top: 4px;"
              src="../../../../assets/img/eco_down.png"
            />
          </div>
          <div style="font-size:12px;color:#666666;">同比增长</div>
        </div>
      </div>
    </div>

    <div style="background:#ffffff;height:460px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div">进口、出口占比和增速</div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div id="myCharts1" ref="myCharts1" style="height:220px;width:100%;"></div>
      <div id="myCharts2" ref="myCharts2" style="height:220px;width:100%;"></div>
      
    </div>
    
    <div style="background:#ffffff;height:300px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div">近5年海关进出口总额及增长速度</div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div style="display:flex;">
        <div id="myCharts3" ref="myCharts3" style="height:290px;width:100%;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
import { echarsEnti } from "../../../../page/jjyx/jjyx_ztts/jjyx_ztts_hgjckze/jjyx_ztts_hgjckze.js";
import { httpMethod } from "../../../../api/getData.js";
export default {
  props: ["getChild"],
  name: "jjyx_ztts_hgjckze",
  data() {
    return {
      show: false,
      qssczzEnti: {},
      totalData: {},
      dataList: [],
      indexMonth: ""
    };
  },
  mounted() {
    console.log(this.getChild);
    this.dateTime = this.getChild;
    var year = this.dateTime.substr(0, 4);
    var month = this.dateTime.substr(5, this.dateTime.length - 1);

    this.indexMonth = month.replace(/\b(0+)/gi, "");
    this.getHomeData(year, month);
  },
  methods: {
    changeTitme: function(date) {
      console.log(date);
      this.dateTime = date;
      var year = date.substr(0, 4);
      var month = date.substr(5, date.length - 1);
      this.indexMonth = month.replace(/\b(0+)/gi, "");
      this.getHomeData(year, month);
    },
    //第一个头和统计饼图
    getHomeData: function(year, month) {
      var self = this;
      var params = {
        year: year,
        month: month
      };
      //获取数据
      httpMethod
        .getCustomsTrading(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
             this.totalData=res.date;
            this.getOneEchars(echarts, this.$refs.myCharts1, res);
            this.getTwoEchars(echarts, this.$refs.myCharts2, res);
            this.getThreeEchars(echarts, this.$refs.myCharts3, res);
          }
        })
        .catch(err => {});
    },
    //格式化参数
    formmgetData: function(data) {
      if (data != null && data != undefined) {
        return data;
      } else {
        return "-";
      }
    },
    //初始化第一个图表
    getOneEchars: function(echarts, value, data) {
      echarsEnti.showHgckjkzeEchars1(echarts, value, data);
    },
    //初始化第二个图表
    getTwoEchars: function(echarts, value, data) {
      echarsEnti.showHgckjkzeEchars2(echarts, value, data);
    },
    //初始化第三个图表
    getThreeEchars: function(echarts, value, data) {
      echarsEnti.showHgckjkzeEchars3(echarts, value, data);
    }
  }
};
</script>
<style scoped>
@import "../../../../page/jjyx/jjyx_ztts/jjyx_ztts_hgjckze/jjyx_ztts_hgjckze.css";
@import "../../../../assets/css/frozenui.css";
</style>
