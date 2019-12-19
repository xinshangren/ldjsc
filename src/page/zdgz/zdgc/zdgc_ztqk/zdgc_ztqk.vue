<template>
  <div style="margin-top:0px;">
    <div style="display: flex;background: rgb(255, 255, 255);height: 40px;">
      <div class="ui-row-flex ui-whitespace" style="margin-top: 9px;">
        <div class="ui-col ui-col">
          <div class="div_next_style">前一年</div>
        </div>
        <div class="ui-col ui-col">
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

    <div class="ui-row-flex ui-whitespace" style="height: 88px;margin-top: 15px;">
      <div class="ui-col ui-col backgroundDiv1">
        <div class="ztqk_tabmodel_title">重点工程数量</div>
        <div class="div_flex">
          <div class="ztqk_tabmodel_left_title">70</div>
          <div class="ztqk_tabmodel_right_title">个</div>
        </div>
      </div>
      <div class="ui-col ui-col backgroundDiv2">
        <div class="ztqk_tabmodel_title1">计划投资额</div>
        <div class="div_flex">
          <div class="ztqk_tabmodel_left_title1">70</div>
          <div class="ztqk_tabmodel_right_title1">亿元</div>
        </div>
      </div>
      <div class="ui-col ui-col backgroundDiv3">
        <div class="ztqk_tabmodel_title1">完成投资额</div>
        <div class="div_flex">
          <div class="ztqk_tabmodel_left_title1">70</div>
          <div class="ztqk_tabmodel_right_title1">亿元</div>
        </div>
      </div>
    </div>
    <div ref="myCharts1" style=" height:200px;margin-bottom:10px;"></div>

    <div style="background:#ffffff;">
      <div class="div_flex echars_title" style="position: relative;">
        <div style="font-size:14px;margin-left: 10px;">当前存在问题工程数量</div>

        <div class="div_flex echars_title">
          <div style="margin-left: 10px;font-size:20px;color:#3ca1ec;">17</div>
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
        <div v-for="item in list" :key="item" :title="item" style="height:60px;border-bottom:1px solid #cccccc;position:relative;">
          <div style="display:flex;padding-top:7px;" >
              <div style="margin-left:17px;">项目名称</div>
              <img style="height:20px;margin-left:5px;margin-top:2px;" src="../../../../assets/img/project_city.png" />
              <img style="height:18px;margin-left:5px;margin-top:2px;"  src="../../../../assets/img/zdgc-ctcysj.png" />
          </div>
          <van-progress :percentage="50" stroke-width="8" style="width: 74%;margin-left: 18px;margin-top: 11px;" />
          <img class="list_right_jt" src="../../../../assets/img/icon_more.png" />
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import { echarsEnti } from "../../../../page/zdgz/zdgc/zdgc_ztqk/zdgc_ztqk.js";
import Vue from "vue";
import { Tab, Tabs, Progress } from "vant";
Vue.use(Tab).use(Tabs);
Vue.use(Progress);
export default {
  name: "zdgc_ztqk_vue",
  data() {
    return {
      seach_value: "",
      active: 0,
      list:[1,2,3]
    };
  },
  mounted() {
    this.getOneEchars(echarts, this.$refs.myCharts1);
    this.getThreeEchars(echarts, this.$refs.myCharts2);
  },
  methods: {
    //初始化第一个图表
    getOneEchars: function(echarts, value) {
      // this.$store.commit('showLoading');//加载loading
      //this.$store.commit('hideLoading');//解除loading
      echarsEnti.createEcharsOne(echarts, value);
    },
    //初始化第二个图表
    getThreeEchars: function(echarts, value) {
      // this.$store.commit('showLoading');//加载loading
      //this.$store.commit('hideLoading');//解除loading
      echarsEnti.createEcharsThree(echarts, value);
    }
  }
};
</script>

<style >
@import "../../../../page/zdgz/zdgc/zdgc_ztqk/zdgc_ztqk.css";
@import "../../../../assets/css/frozenui.css";
</style>
