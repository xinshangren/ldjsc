<template style="background: #ffffff;">
  <div>
    <div
      style="display: flex;line-height: 16px;vertical-align: bottom;margin-left: 20px;height: 50px;margin-right: 10px;">
      <div
        style="margin-top: 15px;color: #333333;font-size: 14px;border-left: 2px #3ca1ec solid;height:16px;padding-left: 20px;">
        点位类型得分明细
      </div>
    </div>

    <div style="display: flex;">
      <div style="width: 50%;border-right: 2px #FFD59F solid;">
        <div v-for="(value,index) in names" :key="index" class="gridtitleName" style="border-bottom: 1px #E5E6E7 solid;">{{value}}</div>
      </div>
      <div style="width: 100%;overflow: scroll;">
        <div style="width: 210%;display:flex;border-bottom: 1px #E5E6E7 solid;">
          <div style="width: 25%;margin-left: -25%;" class="gridtitleName">点位类型</div>
          <div style="width: 20%;margin: auto 0;" class="griddate" v-for="(valued,indexd) in 5" :key="indexd">2019-08</div>
        </div>
        <div style="width: 210%;display:flex;border-bottom: 1px #E5E6E7 solid;">
          <div style="width: 25%;margin-left: -25%;" class="gridtitleName">得分/星级</div>
          <div style="width: 10%;margin: auto 0;" class="griddate">得分</div>
          <div style="width: 10%;margin: auto 0;" class="griddate">星级</div>
          <div style="width: 10%;margin: auto 0;" class="griddate">得分</div>
          <div style="width: 10%;margin: auto 0;" class="griddate">星级</div>
          <div style="width: 10%;margin: auto 0;" class="griddate">得分</div>
          <div style="width: 10%;margin: auto 0;" class="griddate">星级</div>
          <div style="width: 10%;margin: auto 0;" class="griddate">得分</div>
          <div style="width: 10%;margin: auto 0;" class="griddate">星级</div>
          <div style="width: 10%;margin: auto 0;" class="griddate">得分</div>
          <div style="width: 10%;margin: auto 0;" class="griddate">星级</div>
        </div>
        <div style="width: 210%;display:flex;border-bottom: 1px #E5E6E7 solid;" v-for="(value1,index1) in names1"
          :key="index1">
          <div style="width: 25%;margin-left: -25%;" class="gridtitleName">{{value1}}</div>
          <div style="width: 10%;margin: auto 0;" class="value1" v-for="(value1,index1) in names1":key="index1">{{index1}}</div>
        </div>
      </div>
    </div>





  </div>
</template>
<script>
  import echarts from "echarts";
  import { echarsEnti } from "./wmgc.js";
  import { httpMethod } from "../../api/getData.js";
  import Vue from 'vue';
  import { Grid, GridItem } from 'vant';
  Vue.use(Grid).use(GridItem);
  export default {
    beforeCreate() {
      document.querySelector("body").setAttribute("style", "background:#FFFFFF");
    },
    name: "wmgclxdf",
    data() {
      return {
        names: ['点位类型','得分/星级','问题药品举报电话', '劳动者维权举报电话', '青少年课外活动中心', '城市规划馆、文化馆、博物馆、纪念馆、科技馆、少年宫'],
        names1: ['问题药品举报电话', '劳动者维权举报电话', '青少年课外活动中心', '城市规划馆、文化馆、博物馆、纪念馆、科技馆、少年宫'],
      };
    },
    mounted() {
    },
    methods: {
    },
    components: {

    }
  };
</script>

<style socped>
  .gridtitleName {
    background: #F3F4F7;
    text-align: center;
    padding: 7px;
    font-size: 15px;
    color: #333333;
    width: 100%;
    line-height: 15px;
    box-sizing: border-box;
  }

  .griddate {
    background: #FFFDCF;
    text-align: center;
    padding: 7px;
    font-size: 15px;
    color: #333333;
    width: 100%;
    line-height: 15px;
    box-sizing: border-box;
  }
  .value1 {
    text-align: center;
    font-size: 15px;
    color: #333333;
    width: 100%;
    line-height: 15px;
    padding: 7px;
    box-sizing: border-box;
  }
  .value2 {
    text-align: center;
    font-size: 15px;
    color: #333333;
    width: 100%;
    line-height: 15px;
    padding: 7px;
    box-sizing: border-box;
  }
</style>