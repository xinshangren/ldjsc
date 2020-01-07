<template style="background: #ffffff;">
  <div>
    <div class="maintitle">
      <div style="margin-left: 10%; line-height: 70px;vertical-align: middle; color: #ffff66;font-size: 12px;">2019-6
      </div>
      <div style="margin-left: 25%;line-height: 70px;vertical-align: middle;font-size: 14px;color:#ff3d2e;">评级点位：</div>
      <div style="line-height: 70px;vertical-align: middle;font-size: 26px;color:#ff3d2e;">420</div>
      <div style="line-height: 70px;vertical-align: middle;font-size: 14px;color:#ff3d2e;">个</div>
      <div style="margin-left: 5%;line-height: 70px;vertical-align: middle;font-size: 14px;color:#ff3d2e;">+6</div>
      <img src="../../assets/img/eco_rise.png" style="margin-top: 28px; height: 14px;">
    </div>
    <div ref="myCharts1" style=" height:170px;"></div>
    <div style=" height:5px;background:#F3F4F7;"></div>
    <div
      style="display: flex;line-height: 16px;vertical-align: bottom;margin-left: 20px;height: 50px;margin-right: 10px;">
      <div
        style="margin-top: 15px;color: #333333;font-size: 14px;border-left: 2px #3ca1ec solid;height:16px;padding-left: 20px;">
        每月各星级数量展示
      </div>
    </div>
    <div ref="myCharts2" style=" height:170px;"></div>
    <div style="margin-left: 20px;margin-right: 20px;border: 1px #F1F1F1 solid;">
      <van-grid :border="false" :column-num="7">
        <van-grid-item>
          <div
            style="display: flex;text-align: center;background: #FFEE92;width: 100%;height: 30px;padding-top: 5px;padding-left: 15px;">
            评期</div>
        </van-grid-item>
        <van-grid-item>
          <div
            style="display: flex;text-align: center;background: #FFEE92;width: 100%;height: 30px;padding-top: 5px;padding-left: 15px;">
            总数</div>
        </van-grid-item>
        <van-grid-item>
          <div class="gridtitle">
            <img src="../../assets/img/xx-r.png" style="height: 15px;">
            <div>红星</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="gridtitle">
            <img src="../../assets/img/xx-p.png" style="height: 15px;">
            <div>粉星</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="gridtitle">
            <img src="../../assets/img/xx-y.png" style="height: 15px;">
            <div>黄星</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="gridtitle">
            <img src="../../assets/img/xx-g.png" style="height: 15px;">
            <div>绿星</div>
          </div>
        </van-grid-item>
        <van-grid-item style="padding: 0;">
          <div class="gridtitle">
            <img src="../../assets/img/xx-b.png" style="height: 15px;">
            <div>蓝星</div>
          </div>
        </van-grid-item>
      </van-grid>

      <van-grid :border="true" :column-num="7">
        <van-grid-item v-for="value in 35" :key="value">
          {{value}}
        </van-grid-item>
      </van-grid>
     
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
    name: "wmgcgk",
    data() {
      return {
      };
    },
    mounted() {
      this.getOneEchars();
      this.getTwoEchars();
    },
    methods: {
      //初始化第一个图表
      getOneEchars: function (data) {
        echarsEnti.createEcharsOne(echarts, this.$refs.myCharts1, data);
      },
      //初始化第一个图表
      getTwoEchars: function (data) {
        echarsEnti.createEcharsTwo(echarts, this.$refs.myCharts2, data);
      },
    },
    components: {

    }
  };
</script>

<style socped>
  .maintitle {
    width: 90%;
    margin-top: 10px;
    margin-left: 5%;
    height: 70px;
    text-align: center;
    display: flex;
    background: url(../../assets/img/gk-zjbg.png) no-repeat;
    background-size: 100% 100%;
  }

  .van-grid-item__content {
    padding: 0;
    height: 30px;
    text-align: center;
  }

  .gridtitle {
    display: flex;
    background: #FFEE92;
    width: 100%;
    height: 30px;
    padding: 6px;
  }
</style>