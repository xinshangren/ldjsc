<template>
  <div >
    <div style="background:#ffffff;padding-bottom:15px;">
      <div
        style="color: rgb(39, 150, 231);font-size: 16px;margin-left: 20px;padding-top: 10px;"
      >{{itemEnti.name}}</div>
      <div style="margin-left: 20px;margin-top: 6px;">
        <div style="display:flex;">
          <img style="height:19px;" src="../../../../../../assets/img/1icon-dw.png" />
          <div style="color:#999999;font-size:14px;margin-left:5px;">污染源地址</div>
        </div>
        <div style="color:#333333;font-size:14px;margin-left:5px;">{{itemEnti.address}}</div>
      </div>
      <div style="display:flex;">
        <div style="margin-left: 20px;margin-top: 6px;width:50%;">
          <div style="display:flex;">
            <img style="height:19px;" src="../../../../../../assets/img/1icon-xmjsxz.png" />
            <div style="color:#999999;font-size:14px;margin-left:5px;">污染类型</div>
          </div>
          <div style="color:#333333;font-size:14px;margin-left:5px;">{{itemEnti.type}}</div>
        </div>
        <div style="height:50px;width:1px;background:#f3f3f3;"></div>
        <div style="margin-left: 20px;margin-top: 6px;width:50%;">
          <div style="display:flex;">
            <img style="height:19px;" src="../../../../../../assets/img/1icon-ry.png" />
            <div style="color:#999999;font-size:14px;margin-left:5px;">巡查网格员</div>
          </div>
          <div style="color:#333333;font-size:14px;margin-left:5px;">{{itemEnti.contact_user}}</div>
        </div>
      </div>
      <div style="margin-left: 20px;margin-top: 6px;">
        <div style="display:flex;">
          <img style="height:19px;" src="../../../../../../assets/img/1icon-dh.png" />
          <div style="color:#999999;font-size:14px;margin-left:5px;">网格员电话</div>
        </div>
        <div style="color:#333333;font-size:14px;margin-left:5px;">{{itemEnti.contact_phone}}</div>
      </div>
    </div>

  <div
      style="background:#ffffff;height:280px;width:100%;margin-top:8px;padding-top:7px;border-top:7px solid #F1F4F6;"
    >
      <div style="display:flex;">
        <div class="echars_titile_div">监管信息</div>
        <div @click="showSelectTime(1)" style="display:flex;margin-left:17px;">
          <div
            id="oneTimeDivId"
            style="color:#3097fb;font-size:14px;line-height:22px;"
          >{{currentYear1}}</div>
          <img
            style="height: 11px;margin-top: 6px;margin-left: 5px;"
            src="../../../../../../assets/img/air_data_arrow.png"
          />
        </div>
      </div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div ref="myCharts1" style="height:220px;width:100%;"></div>
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
import { httpMethod } from "../../../../../../api/getData.js";
import { hbgjAirJs } from "../../../../../../page/zdgz/hbgj/hbgj_wgjg/hbgj_wgjg_wrylist/hbgj_wgjg_wrylist_deali/hbgj_wgjg_wrylist_deali.js";
import Vue from "vue";
import { DatetimePicker, Popup } from "vant";
Vue.use(DatetimePicker).use(Popup);
export default {
  name: "hbgj_wgjg_wrylist_deali",
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#f7f7f7");
  },
  mounted() {
    this.itemEnti = this.$route.params.entity;
    console.log(this.$route.params.entity);
    this.lineGridRecord(this.itemEnti.id,this.currentYear1);
  },
  data() {
    return {
       showYear: false, //年显示
        currentYear: new Date(),
      currentYear1: new Date().getFullYear(),
      itemEnti:{}
    };
  },
  updated() {},
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
     this.lineGridRecord(this.itemEnti.id,this.currentYear1);
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
    //获重点污染源覆盖物详情-污染物情况图表
    lineGridRecord: function(id,year) {
      var params = {
       	patrolobjid: id,
		   	problemYear: year
      };
      httpMethod
        .lineGridRecord(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
          var list = res.recordList;
            this.showEcharsView(echarts, this.$refs.myCharts1,list);
          }
        })
        .catch(err => {});
    },
    showEcharsView: function(echarts, value,  data1) {
      hbgjAirJs.showLbEcharsOne(echarts, value, data1);
    }
  }
};
</script>

<style scoped>
@import "../../../../../../page/zdgz/hbgj/hbgj_wgjg/hbgj_wgjg_wrylist/hbgj_wgjg_wrylist_deali/hbgj_wgjg_wrylist_deali.css";
</style>