
<template>
  <div style="font-size: 15px;border-top: 1px solid #f1f1f1;">
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
    <div id="contentStaticId" style="overflow:auto;">
      <div style="width:100%;height:10px;"></div>
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
        <li class="ui-col ui-col-50" @click="intentSearchList(1)">
          <div class="pjlzStaticModel1">
            <div style="display:flex;">
              <div style="width:50%;"></div>
              <div style="width:50%;">
                <div style="display: flex;margin-top: 8px;line-height: 22px;height: 22px;">
                  <div style="font-size:20px;color:#3098fb;">{{oneData.approval_create}}</div>
                  <div style="color: #333333;font-size: 13px;line-height: 29px;margin-left:2px;">项</div>
                </div>
                <div style="color: #999999;font-size: 13px;">录入工作</div>
              </div>
            </div>
          </div>
        </li>
        <li class="ui-col ui-col-50" @click="intentSearchList(2)">
          <div class="pjlzStaticModel2">
            <div style="display:flex;">
              <div style="width:50%;"></div>
              <div style="width:50%;">
                <div style="display: flex;margin-top: 8px;line-height: 22px;height: 22px;">
                  <div style="font-size:20px;color:#0ed3e5;">{{oneData.approval_done}}</div>
                  <div style="color: #333333;font-size: 13px;line-height: 29px;margin-left:2px;">项</div>
                </div>
                <div style="color: #999999;font-size: 13px;">已完成工作</div>
              </div>
            </div>
          </div>
        </li>
        <li class="ui-col ui-col-50" style="margin-top:14px;" @click="intentSearchList(3)">
          <div class="pjlzStaticModel3">
            <div style="display:flex;">
              <div style="width:50%;"></div>
              <div style="width:50%;">
                <div style="display: flex;margin-top: 8px;line-height: 22px;height: 22px;">
                  <div style="font-size:20px;color:#f9bf4e;">{{oneData.approval_undone_normal}}</div>
                  <div style="color: #333333;font-size: 13px;line-height: 29px;margin-left:2px;">项</div>
                </div>
                <div style="color: #999999;font-size: 13px;">正常未完成</div>
              </div>
            </div>
          </div>
        </li>
        <li class="ui-col ui-col-50" style="margin-top:14px;" @click="intentSearchList(4)">
          <div class="pjlzStaticModel4">
            <div style="display:flex;">
              <div style="width:50%;"></div>
              <div style="width:50%;">
                <div style="display: flex;margin-top: 8px;line-height: 22px;height: 22px;">
                  <div style="font-size:20px;color:#f96a4e;">{{oneData.approval_undone_overtime}}</div>
                  <div style="color: #333333;font-size: 13px;line-height: 29px;margin-left:2px;">项</div>
                </div>
                <div style="color: #999999;font-size: 13px;">超时未完成</div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div style="margin-top: 18px;border-top: 10px solid #f1f1f1;padding-top: 10px;">
        <div class="pjlzStaticTitile">每个月工作安排情况</div>
        <div
          class="van-hairline--top"
          style="height: 1px;margin-top: 10px;margin-left: 16px;margin-right: 18px;"
        ></div>
        <div ref="myCharts3" style="height:210px;width:100%;"></div>
      </div>
      <div style="margin-top: 18px;border-top: 10px solid #f1f1f1;padding-top: 10px;">
        <div class="pjlzStaticTitile">年度累计延期未完成的工作情况</div>
        <div
          class="van-hairline--top"
          style="height: 1px;margin-top: 10px;margin-left: 16px;margin-right: 18px;"
        ></div>
        <div ref="myCharts4" style="height:210px;width:100%;"></div>
      </div>
      <div style="width:100%;height:10px;"></div>
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
  activated() {
    console.log("activated");
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#ffffff");
    this.pdSingleApp();
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
      switch (self.flagindex) {
        case 0: //年
          console.log(new Date().getFullYear());
          self.currentYear1 = self.timeFormatYear(new Date());
          break;
        case 1: //月
          self.currentYear1 = self.timeFormatMonth(new Date());
          break;
        case 2: //周
          self.currentYear1 = self.timeFormatDay(new Date());
        case 3: //日
          self.currentYear1 = self.timeFormatDay(new Date());
          break;
        default:
          break;
      }
      self.statisticJobDone(); //统计工作完成情况
      self.statisticJobCreate(); //按照年份获取每月工作安排情况的统计数据
      self.statisticJobUndone(); //按照年份获取每月延期未完成工作情况的统计数据
    });

    self.statisticJobDone(); //统计工作完成情况
    self.statisticJobCreate(); //按照年份获取每月工作安排情况的统计数据
    self.statisticJobUndone(); //按照年份获取每月延期未完成工作情况的统计数据
    self.pdSingleApp();
  },
  methods: {
    //判断是否是单独app
    pdSingleApp: function() {
      String.prototype.getValue = function(parm) {
        var reg = new RegExp("(^|&)" + parm + "=([^&]*)(&|$)");
        var r = this.substr(this.indexOf("?") + 1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
      };
      var hrefUrl = window.location.href;
      var indexUrl = hrefUrl.replace("#", "");

      var url = decodeURI(hrefUrl);
      console.log(url);
      var detail = url.getValue("type");
      console.log("type===" + detail);
      if (detail == "1") {
        console.log(global_variable.roleJs);
        if (global_variable.roleJs.role == "cbr") {
          this.showRightMenu1();
        }
        var height = document.body.clientHeight;
        setTimeout(() => {
          console.log(height);
          $("#contentStaticId").css("height", height - 44 + "px");
        }, 100);
      } else {
        var height = document.body.clientHeight;
        setTimeout(() => {
          console.log(height);
          $("#contentStaticId").css("height", height - 44 + "px");
          $("#contentStaticId").css("margin-top", "48px");
        }, 100);
      }
    },
    //添加标题右上方按钮
    showRightMenu1: function() {
      var self = this;
      dd.ready(function() {
        dd.biz.navigation.setMenu({
          items: [
            {
              id: "1",
              iconId: "file",
              text: "消息",
              url: httpMethod.returnBaseUrlFun() + global_variable.messageUrl
            }
          ],
          onSuccess: function(data) {
            self.$router.push({
              path: "/pjlz/pjfkMessage/pjfkMessage"
            });
          },
          onFail: function(err) {}
        });
      });
    },
    //跳转独立的页面
    intentSearchList: function(flag) {
      console.log(flag);
      var dateFormat = /^(\d{4})-(\d{2})-(\d{2})$/;
      var dateFormatMonth = /^(\d{4})-(\d{2})$/;
      var dateFormatyear = /^(\d{4})$/;
      if (this.flagindex == "0") {
        if (!dateFormatyear.test(this.currentYear1)) {
          this.$toast("时间格式不对,请先选择时间,请选择年份");
          return;
        }
      } else if (this.flagindex == "1") {
        if (!dateFormatMonth.test(this.currentYear1)) {
          this.$toast("时间格式不对,请先选择时间,请选择年月");
          return;
        }
      } else {
        if (!dateFormat.test(this.currentYear1)) {
          this.$toast("时间格式不对,请先选择时间，请选择年月日");
          return;
        }
      }
      localStorage.setItem("intentSearch", "");
      this.$router.push({
        path: "/pjlz/pjlzListSearch/pjlzListSearch",
        name: "pjlzListSearchVue",
        params: {
          entity: flag,
          periodType: this.flagindex,
          time: this.currentYear1
        }
      });
    },
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
            self.oneData = data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //按照年份获取每月工作安排情况的统计数据
    statisticJobCreate: function() {
      var yearDate = new Date().getFullYear();
      if (this.flagindex == 0) {
        yearDate = this.currentYear1;
      } else {
        yearDate = this.currentYear1.split("-")[0];
      }

      var self = this;
      var params = {
        method: "statisticJobCreate",
        dingUserId: global_variable.roleJs.dingUserId,
        year: yearDate
      };
      //获取数据
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            var data = res.data;
            this.showEcharsView3(echarts, this.$refs.myCharts3, data);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //按照年份获取每月延期未完成工作情况的统计数据
    statisticJobUndone: function() {
      var yearDate = new Date().getFullYear();
      if (this.flagindex == 0) {
        yearDate = this.currentYear1;
      } else {
        yearDate = this.currentYear1.split("-")[0];
      }
      var self = this;
      var params = {
        method: "statisticJobUndone",
        dingUserId: global_variable.roleJs.dingUserId,
        year: yearDate
      };
      //获取数据
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            var data = res.data;
            this.showEcharsView4(echarts, this.$refs.myCharts4, data);
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
      this.statisticJobCreate(); //按照年份获取每月工作安排情况的统计数据
      this.statisticJobUndone(); //按照年份获取每月延期未完成工作情况的统计数据
    },
    //年月的确定
    onconfirmYearMonth: function() {
      var date = this.timeFormatMonth(this.currentYearMonth);
      this.showYearMonth = false; //年月显示
      this.currentYear1 = date;
      this.statisticJobDone(); //统计工作完成情况
      this.statisticJobCreate(); //按照年份获取每月工作安排情况的统计数据
      this.statisticJobUndone(); //按照年份获取每月延期未完成工作情况的统计数据
    },
    //年月日的确定
    onconfirmAlltime: function() {
      var date = this.timeFormatDay(this.currentYearMonthDay);
      this.showAllTime = false; //年月日显示
      this.currentYear1 = date;
      this.statisticJobDone(); //统计工作完成情况
      this.statisticJobCreate(); //按照年份获取每月工作安排情况的统计数据
      this.statisticJobUndone(); //按照年份获取每月延期未完成工作情况的统计数据
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
