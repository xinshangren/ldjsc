<template>
  <div style="background: #ffffff;">
    <div
      style="display: flex;line-height: 16px;vertical-align: bottom;margin-left: 20px;height: 50px;border-bottom: 1px #c6c6c6 solid;margin-right: 10px;">
      <div
        style="margin-top: 15px;color: #333333;font-size: 12px;border-left: 2px #3ca1ec solid;height:16px;padding-left: 20px;">
        共有示范村</div>
      <div style="margin-top: 15px;color: #3ca1ec;font-size: 16px;">{{total}}</div>
      <div style="margin-top: 15px;color: #3ca1ec;font-size: 12px;">个</div>
    </div>

    <div ref="myCharts1" style=" height:200px;margin-bottom:10px;"></div>

    <div
      style="display: flex;line-height: 16px;vertical-align: bottom;margin-left: 20px;height: 50px;border-bottom: 1px #c6c6c6 solid;margin-right: 10px;">
      <div
        style="margin-top: 15px;color: #333333;font-size: 12px;border-left: 2px #3ca1ec solid;height:16px;padding-left: 20px;">
        接待游客数TOP10</div>
    </div>
    <div ref="myCharts2" style=" height:200px;margin-bottom:10px;"></div>
   
  </div>
</template>
<script>
  import echarts from "echarts";
  import { echarsEnti } from "./sfcgk.js";
  import { httpMethod } from "../../../api/getData.js";
  export default {
    name: "jqgk",
    beforeCreate() {
    },
    activated() {//返回保留页面记录
    },
    data() {
      return {
        total: 0,
      };
    },
    mounted() {
      window.sessionStorage.removeItem('jqactivated');
      this.getData();
    },
    methods: {
      toast: function () {
        this.$toast('功能开发中');
      },
      //初始化第一个图表
      getOneEchars: function (data) {
        echarsEnti.createEcharsOne(echarts, this.$refs.myCharts1, data);
      },
      getTwoEchars: function (data) {
        echarsEnti.createEcharsTwo(echarts, this.$refs.myCharts2, data);
      },
      getData: function () {
        var _this = this;
        httpMethod.getVillageBasicStatistics()
          .then(res => {
            if (res.success == "1") {
              _this.getOneEchars(res.villages);
              _this.total = res.total;
              _this.getTwoEchars(res.statistics);
            } else if (res.success == "0") {
              
            }
           
          })
          .catch(err => {
            this.$toast(err);
          });
      }
    },
    components: {
    }
  };
</script>

<style scoped>

</style>