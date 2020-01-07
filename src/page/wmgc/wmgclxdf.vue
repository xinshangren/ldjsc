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
      <div style="width: 50%; background: #333333">
      
      </div>
      <div style="width: 100%;overflow: scroll;">
        <div style="width: 210%;">
          <van-grid :border="false" :column-num="10">
            <van-grid-item v-for="value in 35" :key="value">
              
              <div :class="value==2?'gridtitle':'gridtitle1'">{{value}}</div>
            </van-grid-item>
          </van-grid>
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

  .gridtitle1 {
    display: flex;
    background: #3ca1ec;
    width: 100%;
    height: 30px;
    padding: 6px;
  }

</style>