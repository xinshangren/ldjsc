<template>
  <div style="margin-top:54px;">
    <div style="zz-index: 99;position: absolute;right: 0px;background: #ffffff;width: 14%;height: 44px;text-align: center;">
     <div style="background: rgb(247, 247, 247);height: 40px;width: 44px;margin-left: 4px;">
      <img
        style="height: 24px;margin-top: 9px;"
        src="../../../assets/img/eco_tab_iconlist.png"
      />
      </div>
    </div>
    <van-sticky :offset-top="55">
      <div style="display:flex;">
        <van-tabs
          @touchmove.prevent
          @click="smallTab_select"
          v-model="active"
          title-active-color="#2599e6"
          :offset-top="55"
          title-inactive-color="#333333"
          :sticky="true"
          line-width="75px"
          style="width:86%;"
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
      </div>

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
    </van-sticky>
    <div style="margin-top:46px;z-index: -1;overflow: auto;">
      <div
        :is="currentView"
        @changeTime="changeTime"
        ref="child1"
        :getChild="nowYear"
        :getChildMax="maxDate"
      ></div>
      <!-- <child1 v-show="active=='0'" @changeTime="changeTime" ref="child1" :getChild="nowYear" :getChildMax="maxDate"></child1>

      <child2 v-show="active=='1'" @changeTime="changeTime" ref="child2" :getChild="nowYear" :getChildMax="maxDate"></child2>-->
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
import child2 from "@/page/jjyx/jjyx_ztts/jjyx_ztts_qssczz/jjyx_ztts_qssczz.vue";
import child3 from "@/page/jjyx/jjyx_ztts/jjyx_ztts_gdzctz/jjyx_ztts_gdzctz.vue";
import child4 from "@/page/jjyx/jjyx_ztts/jjyx_ztts_ybggyssr/jjyx_ztts_ybggyssr.vue";
import child5 from "@/page/jjyx/jjyx_ztts/jjyx_ztts_shxfplszz/jjyx_ztts_shxfplszz.vue";
import child6 from "@/page/jjyx/jjyx_ztts/jjyx_ztts_jmrjkzpsr/jjyx_ztts_jmrjkzpsr.vue";
import child7 from "@/page/jjyx/jjyx_ztts/jjyx_ztts_gmysgyzjz/jjyx_ztts_gmysgyzjz.vue";
import child8 from "@/page/jjyx/jjyx_ztts/jjyx_ztts_hgjckze/jjyx_ztts_hgjckze.vue";
import child9 from "@/page/jjyx/jjyx_ztts/jjyx_ztts_qxqktj/jjyx_ztts_qxqktj.vue";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "jjyx_ztts",
  data() {
    return {
      currentView: "child1",
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
    //空气子选项卡选择
    smallTab_select: function(name, title) {
      // console.log(name,title);
      switch (name) {
        case 0:
          this.active = 0;
          this.currentView = "child1";
          break;
        case 1:
          this.active = 1;
          this.currentView = "child2";
          break;
        case 2:
          this.active = 2;
          this.currentView = "child3";
          break;
        case 3:
          this.active = 3;
          this.currentView = "child4";
          break;
        case 4:
          this.active = 4;
          this.currentView = "child5";
          break;
        case 5:
          this.active = 5;
          this.currentView = "child6";
          break;
        case 6:
          this.active = 6;
          this.currentView = "child7";
          break;
        case 7:
          this.active = 7;
          this.currentView = "child8";
          break;
        case 8:
          this.active = 8;
          this.currentView = "child9";
          break;
        default:
          break;
      }
    },
    changeTime: function(year, month) {
      console.log(year + "==" + month);
      this.maxDate = new Date(parseInt(year), parseInt(month) - 1, 1);
      this.nowYear = year + "-" + month;
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
    child1,
    child2,
    child3,
    child4,
    child5,
    child6,
    child7,
    child8,
    child9
  }
};
</script>

<style >
@import "../../../page/jjyx/jjyx_ztts/jjyx_ztts.css";
@import "../../../assets/css/frozenui.css";
</style>
