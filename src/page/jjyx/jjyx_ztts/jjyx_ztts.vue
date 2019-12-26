<template>
  <div style="margin-top:54px;">
    <van-tabs
      v-model="active"
      title-active-color="#2599e6"
      :offset-top="55"
      title-inactive-color="#333333"
      sticky
      line-width="75px"
    >
      <van-tab title="完成概况"></van-tab>
      <van-tab title="GDP"></van-tab>
      <van-tab title="固定资产"></van-tab>
      <van-tab title="一般公共预算收入"></van-tab>
      <van-tab title="社会消费品零售总额"></van-tab>
      <van-tab title="人均可支配收入"></van-tab>
      <van-tab title="工业增加值"></van-tab>
      <van-tab title="海关进出口总额"></van-tab>
      <van-tab title="区县情况"></van-tab>
    </van-tabs>
    <div
      style="display: flex;background: rgb(255, 255, 255);height: 40px;position: fixed;width: 100%;z-index: 1;"
    >
      <div class="ui-row-flex ui-whitespace" style="margin-top: 9px;">
        <div class="ui-col ui-col" @click="upYearClick">
          <div class="div_next_style">前一月</div>
        </div>
        <div class="ui-col ui-col" @click="showDatePicker()" style="width:12%;">
          <div
            class="div_flex"
            style="background: rgb(241, 241, 241);border-radius: 6px;display: flex;"
          >
            <img
              src="../../../assets/img/project_calendar.png"
              style="height: 17px;margin-top: 3px;margin-right: 10px;margin-left: 21px;"
            />
            <div class="div_next_style">{{nowYear}}</div>
          </div>
        </div>
        <div class="ui-col ui-col" @click="downYearClick">
          <div class="div_next_style" style="text-align:right;">后一月</div>
        </div>
      </div>
    </div>
    <div style="margin-top:46px;z-index: -1;">
      <child1 @changeTime="changeTime" ref="child1" :getChild="nowYear" :getChildMax="maxDate"></child1>
    </div>

    <div style="height: 50px;position: fixed;right: 0px;bottom: 11px;display:flex;">
      <div id="rightAreaDivId" style="display:none;">
        <div
          style="display: flex;width: 268px;height: 44px;margin-right: -20px;margin-top: 3px;background: rgb(255, 255, 255);border-radius: 30px 0px 0px 30px;box-shadow:#f67b09 1px 1px 8px 1px"
        >
          <div style="width:40%;margin-left:25px;">
            <div style="display:flex;margin-top:6px;">
              <img
                style="height: 13px;margin-top: 4px;margin-right: 4px;"
                src="../../../assets/img/project_list_icon1.png"
              />
              <div style="font-size:13px; color:#666666;">责任单位</div>
            </div>
            <div style="color:#333333;font-size:13px;">市发改委重点办</div>
          </div>
          <div style="width:50%;margin-left:25px;">
            <div>
              <div
                style="display: flex;width: 72%;border: 1px solid rgb(246, 123, 9);border-radius: 5px;padding: 3px;margin-top: 10px;"
              >
                <img
                  style="height: 15px;margin-left: 7px;margin-right: 4px;"
                  src="../../../assets/img/icon_phone_orange.png"
                />
                <div style="color: rgb(246, 123, 9);font-size: 13px;">一键调度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        id="leftAreaDivId"
        style="height:53px;margin-right:15px;"
        src="../../../assets/img/phone_button.png"
      />
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '200px' }">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        style="height: 200px;"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="onconfirm"
        :formatter="formatter"
        :filter="filter"
      />
    </van-popup>
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
import child1 from "@/page/jjyx/jjyx_ztts/jjyx_ztts_wcgk/jjyx_ztts_wcgk.vue";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "jjyx_ztts",
  data() {
    return {
      seach_value: "",
      active: 0,
      show: false,
      nowYear: "",
      currentDate: new Date(),
      maxDate: new Date(),
      minDate: new Date(2018, 0, 1)
    };
  },
  mounted() {},
  methods: {
    changeTime: function(year,month) {
      console.log(year+"=="+month);
      this.maxDate = new Date(parseInt(year),parseInt(month)-1,1);
      this.nowYear=year+"-"+month;
    },
    upYearClick: function() {
      var year = this.nowYear.split("-")[0];
      var month = this.nowYear.split("-")[1];
      if (parseInt(month) == 2) {
        year = parseInt(year) - 1;
        month = 12;
      } else {
        month = parseInt(month) - 1;
      }
      if (parseInt(month) < 10) {
        month = "0" + month;
      }
      this.nowYear = year + "-" + month;
      this.$refs.child1.changeTitme(this.nowYear);
    },
    downYearClick: function() {
      var year = this.nowYear.split("-")[0];
      var month = this.nowYear.split("-")[1];
      if (parseInt(month) == 12) {
        year = parseInt(year) + 1;
        month = 2;
      } else {
        month = parseInt(month) + 1;
      }
      if (parseInt(month) < 10) {
        month = "0" + month;
      }
      this.nowYear = year + "-" + month;
      this.$refs.child1.changeTitme(this.nowYear);
    },
    showDatePicker() {
      this.show = true;
    },
    timeFormat(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      if (month < 10) {
        month = "0" + month;
      }
      return year + "-" + month;
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      }
      if (type === "month") {
        return `${value}月`;
      }

      return "";
    },
    filter(type, options) {
      if (type === "month") {
        options.shift();
        // console.log(options);
        return options.filter(option => option > 0);
      }

      return options;
    },
    onconfirm() {
      this.nowYear = this.timeFormat(this.currentDate);
      // var year = this.nowYear.substr(0, 4);
      // var month = this.nowYear.substr(5, this.nowYear.length - 1);
      this.show = false;
      this.$refs.child1.changeTitme(this.nowYear);
    }
  },
  components: {
    child1
  }
};
</script>

<style >
@import "../../../page/jjyx/jjyx_ztts/jjyx_ztts.css";
@import "../../../assets/css/frozenui.css";
</style>
