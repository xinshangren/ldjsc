<template>
  <div style="margin-top:0px;">
    <van-popup v-model="show" position="bottom" :style="{ height: '200px' }">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        style="height: 200px;"
        @confirm="onconfirm"
        :formatter="formatter"
      />
    </van-popup>
   
      <div style="display: flex;background: rgb(255, 255, 255);height: 40px;position: fixed;width: 100%;z-index: 2;">
        <div class="ui-row-flex ui-whitespace" style="margin-top: 9px;">
          <div class="ui-col ui-col">
            <div class="div_next_style">前一年</div>
          </div>
          <div class="ui-col ui-col" @click="showDatePicker()">
            <div class="div_flex" style="background: #f1f1f1;border-radius: 6px;">
              <img
                src="../../../../assets/img/project_calendar.png"
                style="height: 17px;margin-top: 3px;margin-right: 10px;margin-left: 21px;"
              />
              <div class="div_next_style">2019年</div>
            </div>
          </div>
          <div class="ui-col ui-col">
            <div class="div_next_style" style="text-align:right;">后一年</div>
          </div>
        </div>
      </div>
    
    <div class="ui-row-flex ui-whitespace" style="height: 88px;margin-top: 55px;">
      <div class="ui-col ui-col backgroundDiv1">
        <div class="ztqk_tabmodel_title">重点工程数量</div>
        <div class="div_flex">
          <div class="ztqk_tabmodel_left_title">{{zdgcsl}}</div>
          <div class="ztqk_tabmodel_right_title">个</div>
        </div>
      </div>
      <div class="ui-col ui-col backgroundDiv2">
        <div class="ztqk_tabmodel_title1">计划投资额</div>
        <div class="div_flex">
          <div class="ztqk_tabmodel_left_title1">{{jhtze}}</div>
          <div class="ztqk_tabmodel_right_title1">亿元</div>
        </div>
      </div>
      <div class="ui-col ui-col backgroundDiv3">
        <div class="ztqk_tabmodel_title1">完成投资额</div>
        <div class="div_flex">
          <div class="ztqk_tabmodel_left_title1">{{wctze}}</div>
          <div class="ztqk_tabmodel_right_title1">亿元</div>
        </div>
      </div>
    </div>
    <div ref="myCharts1" style=" height:200px;margin-bottom:10px;"></div>

    <div style="background:#ffffff;">
      <div class="div_flex echars_title" style="position: relative;">
        <div style="font-size:14px;margin-left: 10px;">当前存在问题工程数量</div>

        <div class="div_flex echars_title">
          <div style="margin-left: 10px;font-size:20px;color:#3ca1ec;">{{czwtCount}}</div>
          <div style="margin-left: 3px;font-size:14px;color:#3ca1ec;margin-top:2px;">个</div>
        </div>
        <img
          style="height: 19px;position: absolute;right: 4px;top: 9px;"
          src="../../../../assets/img/icon_more.png"
        />
      </div>
      <div ref="myCharts2" style=" height:200px;margin-bottom:10px;"></div>
    </div>

    <div style="background:#ffffff;margin-top:10px;">
      <van-list>
        <div
          v-for="(item,key) of bottomList "
          :key="key"
          style="height:60px;border-bottom:1px solid #cccccc;position:relative;"
        >
          <div style="display:flex;padding-top:7px;">
            <div
              style="margin-left: 17px;font-size: 14px;width: 169px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
            >{{item.projectName}}</div>
            <img
              v-if="item.zdProLevel=='2'"
              style="height:20px;margin-left:5px;margin-top:2px;"
              src="../../../../assets/img/project_city.png"
            />
            <img
              v-if="item.zdProLevel=='1'"
              style="height:20px;margin-left:5px;margin-top:2px;"
              src="../../../../assets/img/project_province.png"
            />
            <img
              v-if="item.zdProType=='1'"
              style="height:18px;margin-left:5px;margin-top:2px;"
              src="../../../../assets/img/zdgc_ctcysj.png"
            />
            <img
              v-if="item.zdProType=='0'"
              style="height:18px;margin-left:5px;margin-top:2px;"
              src="../../../../assets/img/zdgc_jcss.png"
            />
            <img
              v-if="item.zdProType=='2'"
              style="height:18px;margin-left:5px;margin-top:2px;"
              src="../../../../assets/img/zdgc_cyzx.png"
            />
          </div>
          <van-progress
            :percentage="item.rate"
            stroke-width="8"
            :show-pivot="true"
            :color="color[key]"
            style="width: 74%;margin-left: 18px;margin-top: 11px;"
          />
          <img class="list_right_jt" src="../../../../assets/img/icon_more.png" />
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>

import echarts from "echarts";
import { echarsEnti } from "../../../../page/zdgz/zdgc/zdgc_ztqk/zdgc_ztqk.js";
import { httpMethod } from "../../../../api/getData.js";
import Vue from "vue";
import { Tab, Tabs, Progress, Popup, DatetimePicker } from "vant";
Vue.use(Tab)
  .use(Tabs)
  .use(Progress)
  .use(Popup)
  .use(DatetimePicker);
export default {
  name: "zdgc_ztqk_vue",
  data() {
    return {
      nowYear: 2019,
      seach_value: "",
      active: 0,
      list: [1, 2, 3],
      currentDate: new Date(),
      show: false,
      zdgcsl: 0,
      jhtze: 0,
      wctze: 0,
      czwtCount: 0,
      bottomList: [
        { projectName: "", percentage: 0 },
        { projectName: "", percentage: 0 },
        { projectName: "", percentage: 0 }
      ],
      jingduList: [0.0, 0.0, 0.0],
      color: ["#faad14", "#3ecbb2", "#3ca1ec"]
    };
  },
  mounted() {
    this.getzdxmzj("");
    this.statisticsExistiong("");
    this.getProjectPlanTopThree("2019");
    //this.getThreeEchars(echarts, this.$refs.myCharts2);
  },
  methods: {
    //第一个头和统计饼图
    getzdxmzj: function(year) {
      var params = {
        year: year
      };

      httpMethod
        .getzdxmzj(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            this.zdgcsl = res.data.gcslmk.gcsl;
            this.getOneEchars(echarts, this.$refs.myCharts1, res.data.gcslmk);
            this.jhtze = res.data.jhtz;
            this.wctze = res.data.wctz;
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    },
    //第二个存在问题
    statisticsExistiong: function(year) {
      var params = {
        reportDate: year
      };

      httpMethod
        .statisticsExistiong(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            this.czwtCount = res.wts;
            this.getThreeEchars(echarts, this.$refs.myCharts2, res);
          }
        })
        .catch(err => {
          //this.$toast(err);
        });
    },
    //第三个接口
    getProjectPlanTopThree: function(year) {
      var params = {
        year: year
      };

      httpMethod
        .getProjectPlanTopThree(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            this.jingduList = [];
            this.bottomList = res.dataList;
            for (var i = 0; i < res.dataList.length; i++) {
              this.jingduList.push(res.dataList[i].rate);
            }
            console.log("=============" + this.jingduList);
          }
        })
        .catch(err => {
          //this.$toast(err);
        });
    },
    //初始化第一个图表
    getOneEchars: function(echarts, value, data) {
      // this.$store.commit('showLoading');//加载loading
      //this.$store.commit('hideLoading');//解除loading
      echarsEnti.createEcharsOne(echarts, value, data);
    },
    //初始化第二个图表
    getThreeEchars: function(echarts, value, data) {
      // this.$store.commit('showLoading');//加载loading
      //this.$store.commit('hideLoading');//解除loading
      echarsEnti.createEcharsThree(echarts, value, data);
    },
    showDatePicker() {
      this.show = true;
    },
    timeFormat(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return year + "-" + month + "-" + day;
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      }
      return "";
    },
    onconfirm() {
      this.nowYear = this.timeFormat(this.currentDate);

      this.show = false;
    }
  }
};
</script>
<style scoped>
@import "../../../../page/zdgz/zdgc/zdgc_ztqk/zdgc_ztqk.css";
@import "../../../../assets/css/frozenui.css";
</style>
