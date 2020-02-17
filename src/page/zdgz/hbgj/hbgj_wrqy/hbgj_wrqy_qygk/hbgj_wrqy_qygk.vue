<template>
  <div style="
    overflow: auto;
">
    <div style="background:#ffffff;border-top:7px solid #F1F4F6;">
      <div style="position:relative;height:105px;z-index:0;">
        <img class="wrqy_qygk_top" src="../../../../../assets/img/company_situation_bg.png" />
        <div style="padding-top:35px;">
          <div style="display:flex;line-height:27px;">
            <div style="margin-left:41px;font-size:14px;color:#333333;line-height:31px;">重点污染源</div>
            <div
              style="font-size: 24px;color: rgb(51, 51, 51);margin-left: 5px;margin-right: 5px;"
            >{{allCount}}</div>
            <div style="font-size:14px;color:#333333;line-height:31px;">家</div>
          </div>
        </div>
      </div>
      <div style="display:flex;">
        <div style="width:50%;display:flex;">
            <img  class="wrqy_qygk_top_left_img" src="../../../../../assets/img/company_situation_icon1.png"/>
            <div style="margin-left:5px;">
              <div style="color:#666666;font-size:14px;">一般工业企业</div>
              <div style="display: flex;line-height: 19px;margin-top: 5px;">
                <div style="color:#faad15;font-size:20px;">{{ybqyCount}}</div>
                <div style="color:#333333;font-size:13px;line-height:22px;">家</div>
              </div>
            </div>
        </div>
        <div style="width:50%;display:flex;">
           <img  class="wrqy_qygk_top_left_img" src="../../../../../assets/img/company_situation_icon2.png"/>
            <div style="margin-left:5px;">
              <div style="color:#666666;font-size:14px;">污水处理厂</div>
              <div style="display: flex;line-height: 19px;margin-top: 5px;">
                <div style="color:#3097fb;font-size:20px;">{{wsclcCount}}</div>
                <div style="color:#333333;font-size:13px;line-height:22px;">家</div>
              </div>
            </div>
        </div>
      </div>
    </div>

    <div
      style="background:#ffffff;height:240px;width:100%;margin-top:8px;padding-top:7px;border-top:7px solid #F1F4F6;"
    >
      <div style="display:flex;">
        <div class="echars_titile_div">所属区域</div>
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
        <div class="echars_titile_div">关注程度</div>
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
        <div class="echars_titile_div">所属流域</div>
      </div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div ref="myCharts3" style="height:210px;width:100%;"></div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import $ from "jquery";
import { httpMethod } from "../../../../../api/getData.js";
import { hbgjAirJs } from "../../../../../page/zdgz/hbgj/hbgj_wrqy/hbgj_wrqy_qygk/hbgj_wrqy_qygk.js";
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
      gkcode: "555555",
      showYear: false, //年显示
      currentYear: new Date(),
      currentYear1: new Date().getFullYear(),
      wryCount: 0,
      jgPersonCount: 0,
      allCount:0,
      ybqyCount:0,
      wsclcCount:0
    };
  },
  mounted() {
    this.getRegionCount();
    this.getFollowCount();
    this.getLvCount();
    this.getPollutionCount();
    // this.getBasicRecordList();
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
      this.showYear = true;
    },
    //首页污染源数量等
    getPollutionCount: function() {
      var params = {};
      //获取数据
      httpMethod
        .getPollutionCount(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
           var data = res.list;
           this.allCount =res.pscCount;
           this.ybqyCount=data[0].countnum;
           this.wsclcCount=data[1].countnum;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取所属区域数据
    getRegionCount: function() {
      var params = {};
      //获取数据
      httpMethod
        .getRegionCount(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            this.showEcharsView1(echarts, this.$refs.myCharts1, res.list);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    showEcharsView1: function(echarts, value, data1) {
      hbgjAirJs.showLbEcharsOne(echarts, value, data1);
    },
    //首页关注程度
    getFollowCount: function() {
      var params = {};
      //获取数据
      httpMethod
        .getFollowCount(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            this.showEcharsView2(echarts, this.$refs.myCharts2, res.list);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    showEcharsView2: function(echarts, value, data1) {
      hbgjAirJs.showLbEcharsTwo(echarts, value, data1);
    },
    //获取首页所属流域
    getLvCount: function() {
      var params = {};
      //获取数据
      httpMethod
        .getLvCount(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            var data = res.recordList;
            this.showEcharsView3(echarts, this.$refs.myCharts3, res.list);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    showEcharsView3: function(echarts, value, data1) {
      hbgjAirJs.showLbEcharsThree(echarts, value, data1);
    }
  }
};
</script>

<style>
@import "../../../../../page/zdgz/hbgj/hbgj_wrqy/hbgj_wrqy_qygk/hbgj_wrqy_qygk.css";
@import "../../../../../assets/css/frozenui.css";
</style>