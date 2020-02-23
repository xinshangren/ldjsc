
<template>
  <div style="font-size: 15px;border-top: 1px solid #f1f1f1;padding-top:54px;">
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
    <div style="display:flex;">
      <div class="pjlzStaticTitile">工作完成情况</div>

      <div id="dateTimeId" style="display:flex;margin-left:1px;">
        <div class="pjlzStaticTimeSelect">年</div>
        <div class="pjlzStaticTimenoSelect">月</div>
        <div class="pjlzStaticTimenoSelect">周</div>
        <div class="pjlzStaticTimenoSelect">日</div>
      </div>

      <div @click="showSelectTime()" style="display:flex;margin-left:10px;">
        <div class="pjlzStaticRightSelect">{{currentYear1}}</div>
        <img class="pjlzStaticRightImg" src="../../../assets/img/time_arrow.png" />
      </div>
    </div>

    <ul class="ui-row" style="margin-top:20px;">
      <li class="ui-col ui-col-50">
        <div class="pjlzStaticModel1">
          <div style="display:flex;">
            <div style="width:50%;"></div>
            <div style="width:50%;">
              <div style="display: flex;margin-top: 8px;line-height: 22px;height: 22px;">
                <div style="font-size:20px;color:#3098fb;">{{oneData.approval_create}}</div>
                <div style="color: #333333;font-size: 13px;line-height: 29px;">项</div>
              </div>
              <div style="color: #999999;font-size: 13px;">录入工作</div>
            </div>
          </div>
        </div>
      </li>
      <li class="ui-col ui-col-50">
        <div class="pjlzStaticModel2">
          <div style="display:flex;">
            <div style="width:50%;"></div>
            <div style="width:50%;">
              <div style="display: flex;margin-top: 8px;line-height: 22px;height: 22px;">
                <div style="font-size:20px;color:#0ed3e5;">{{oneData.approval_done}}</div>
                <div style="color: #333333;font-size: 13px;line-height: 29px;">项</div>
              </div>
              <div style="color: #999999;font-size: 13px;">已完成工作</div>
            </div>
          </div>
        </div>
      </li>
      <li class="ui-col ui-col-50" style="margin-top:14px;">
        <div class="pjlzStaticModel3">
          <div style="display:flex;">
            <div style="width:50%;"></div>
            <div style="width:50%;">
              <div style="display: flex;margin-top: 8px;line-height: 22px;height: 22px;">
                <div style="font-size:20px;color:#f9bf4e;">{{oneData.approval_undone_normal}}</div>
                <div style="color: #333333;font-size: 13px;line-height: 29px;">项</div>
              </div>
              <div style="color: #999999;font-size: 13px;">正常未完成</div>
            </div>
          </div>
        </div>
      </li>
      <li class="ui-col ui-col-50" style="margin-top:14px;">
        <div class="pjlzStaticModel4">
          <div style="display:flex;">
            <div style="width:50%;"></div>
            <div style="width:50%;">
              <div style="display: flex;margin-top: 8px;line-height: 22px;height: 22px;">
                <div style="font-size:20px;color:#f96a4e;">{{oneData.approval_undone_overtime}}</div>
                <div style="color: #333333;font-size: 13px;line-height: 29px;">项</div>
              </div>
              <div style="color: #999999;font-size: 13px;">超时未完成</div>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div style="margin-top: 18px;border-top: 10px solid #f1f1f1;padding-top: 10px;">
      <div class="pjlzStaticTitile">工作完成情况</div>
      <div
        class="van-hairline--top"
        style="height: 1px;margin-top: 10px;margin-left: 16px;margin-right: 18px;"
      ></div>
      <div ref="myCharts3" style="height:210px;width:100%;"></div>
    </div>
    <div style="margin-top: 18px;border-top: 10px solid #f1f1f1;padding-top: 10px;">
      <div class="pjlzStaticTitile">本年度累计延期未完成的工作情况</div>
      <div
        class="van-hairline--top"
        style="height: 1px;margin-top: 10px;margin-left: 16px;margin-right: 18px;"
      ></div>
      <div ref="myCharts4" style="height:210px;width:100%;"></div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
import { Popup, DatetimePicker } from "vant";
import dd from "dingtalk-jsapi";
import MescrollVue from "mescroll.js/mescroll.vue";
Vue.use(DatetimePicker).use(Popup);
import global_variable from "../../../api/global_variable.js";
import { httpMethod } from "../../../api/getData.js";
import { hbgjAirJs } from "../../../page/pjlz/pjlzStatic/pjlzStatic.js";
import echarts from "echarts";
export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  name: "pjlzStaticVue",
  data() {
    return {
      seach_value: "",
      showYear: false, //年显示
      showYearMonth: false, //年月显示
      showAllTime: false, //年月日显示
      currentYear: new Date(),
      currentYearMonth: new Date(),
      currentYearMonthDay: new Date(),
      currentYear1: new Date().getFullYear(),
      flagindex: 0,
      oneData: {
        approval_create: 0,
        approval_done: 0,
        approval_undone_normal: 0,
        approval_undone_overtime: 0
      } //工作完成数据实体
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log(from);
    console.log(to);
    next();
  },
  mounted() {
    var self = this;
    $("#dateTimeId div").click(function(e) {
      $(this)
        .siblings("div")
        .removeClass("pjlzStaticTimeSelect");
      $(this)
        .siblings("div")
        .removeClass("pjlzStaticTimenoSelect");
      $(this)
        .siblings("div")
        .addClass("pjlzStaticTimenoSelect");
      $(this).removeClass("pjlzStaticTimenoSelect");
      $(this).addClass("pjlzStaticTimeSelect");
      console.log($(this).index());
      self.flagindex = $(this).index();
    });
    self.getLvCount();

    self.statisticJobDone(); //统计工作完成情况
    self.statisticJobCreate(); //按照年份获取每月工作安排情况的统计数据
    self.statisticJobUndone(); //按照年份获取每月延期未完成工作情况的统计数据
  },
  methods: {
    //获取工作完成情况
    statisticJobDone: function() {
      var self = this;
      var params = {
        method: "statisticJobDone",
        dingUserId: global_variable.roleJs.dingUserId,
        // corpId: global_variable.corpId,
        periodType: self.flagindex,
        periodData: this.currentYear1
      };
      //获取数据
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            var data = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //按照年份获取每月工作安排情况的统计数据
    statisticJobCreate: function() {
      var self = this;
      var params = {
        method: "statisticJobCreate",
        dingUserId: global_variable.roleJs.dingUserId,
        year: new Date().getFullYear()
      };
      //获取数据
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            var data = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //按照年份获取每月延期未完成工作情况的统计数据
    statisticJobUndone: function() {
      var self = this;
      var params = {
        method: "statisticJobUndone",
        dingUserId: global_variable.roleJs.dingUserId,
        year: new Date().getFullYear()
      };
      //获取数据
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            var data = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
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
            this.showEcharsView4(echarts, this.$refs.myCharts4, res.list);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    showEcharsView3: function(echarts, value, data1) {
      hbgjAirJs.showLbEcharsThree(echarts, value, data1);
    },
    showEcharsView4: function(echarts, value, data1) {
      hbgjAirJs.showLbEcharsFour(echarts, value, data1);
    },
    //判断是选的哪个图表时间
    showSelectTime: function() {
      switch (this.flagindex) {
        case 0:
          this.showYear = true;
          break;
        case 1:
          this.showYearMonth = true;
          break;
        case 2:
          this.showAllTime = true;
        case 3:
          this.showAllTime = true;
          break;
        default:
          break;
      }
    },
    //格式化事件
    timeFormatYear(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      let day = time.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      return year;
    },

    //格式化事件
    timeFormatMonth(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      let day = time.getDate();
      return year + "-" + month;
    },
    //格式化事件
    timeFormatDay(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
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
      this.currentYear1 = date;
      this.statisticJobDone(); //统计工作完成情况
    },
    //年月的确定
    onconfirmYearMonth: function() {
      var date = this.timeFormatMonth(this.currentYearMonth);
      this.showYearMonth = false; //年月显示
      this.currentYear1 = date;
       this.statisticJobDone(); //统计工作完成情况
    },
    //年月日的确定
    onconfirmAlltime: function() {
      var date = this.timeFormatDay(this.currentYearMonthDay);
      this.showAllTime = false; //年月日显示
      this.currentYear1 = date;
       this.statisticJobDone(); //统计工作完成情况
    },
    //开启年时间选择
    openPopYear: function() {
      $(".van-picker__columns")
        .find(".van-picker-column")
        .eq(1)
        .hide();
    }
  }
};
</script>

<style >
@import "../../../page/pjlz/pjlzStatic/pjlzStatic.css";
@import "../../../assets/css/frozenui.css";
.van-hairline--top::after {
  border: 1px solid #ebedf0;
}
</style>
