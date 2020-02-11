<template>
  <div id="jqgkid" ref="jqgkid" style="background: #ffffff;overflow-y: scroll;">
    <div
      style="display: flex;line-height: 16px;vertical-align: bottom;margin-left: 20px;height: 50px;border-bottom: 1px #c6c6c6 solid;margin-right: 10px;">
      <div
        style="margin-top: 15px;color: #333333;font-size: 12px;border-left: 2px #3ca1ec solid;height:16px;padding-left: 20px;">
        A级共有景区</div>
      <div style="margin-top: 15px;color: #3ca1ec;font-size: 16px;">{{levelCount}}</div>
      <div style="margin-top: 15px;color: #3ca1ec;font-size: 12px;">个</div>
    </div>

    <div ref="myCharts1" style=" height:200px;margin-bottom:10px;"></div>

    <div
      style="display: flex;line-height: 16px;vertical-align: bottom;margin-left: 20px;height: 50px;border-bottom: 1px #c6c6c6 solid;margin-right: 10px;">
      <div
        style="margin-top: 15px;color: #333333;font-size: 12px;border-left: 2px #3ca1ec solid;height:16px;padding-left: 20px;">
        本年度接待游客</div>
      <div style="margin-top: 15px;color: #3ca1ec;font-size: 16px;">{{visitorTotal}}万</div>
      <div style="margin-top: 15px;color: #3ca1ec;font-size: 12px;">人次</div>
    </div>
    <div ref="myCharts2" style=" height:200px;margin-bottom:10px;"></div>

    <div
    style="display: flex;line-height: 16px;vertical-align: bottom;margin-left: 20px;height: 50px;border-bottom: 1px #c6c6c6 solid;margin-right: 10px;">
    <div
      style="margin-top: 15px;color: #333333;font-size: 12px;border-left: 2px #3ca1ec solid;height:16px;padding-left: 20px;">
      本年旅游  收入</div>
    <div style="margin-top: 15px;color: #3ca1ec;font-size: 16px;">{{incomeTotal}}</div>
    <div style="margin-top: 15px;color: #3ca1ec;font-size: 12px;">万元</div>
    <div
      style="margin-top: 15px;color: #333333;font-size: 12px;height:16px;margin-left: 15px;">
      支出</div>
    <div style="margin-top: 15px;color: #faad14;font-size: 16px;">{{expenditureTotal}}</div>
    <div style="margin-top: 15px;color: #faad14;font-size: 12px;">万元</div>
  </div>
  <div ref="myCharts3" style=" height:200px;margin-bottom:10px;"></div>
  </div>
</template>
<script>
  import echarts from "echarts";
  import { echarsEnti } from "./jqgk.js";
  import { httpMethod } from "../../../api/getData.js";
  export default {
    name: "jqgk",
    beforeCreate() {
    },
    activated() {//返回保留页面记录
    },
    data() {
      return {
        levelCount: 0,
        visitorTotal:0,
        incomeTotal:0,
        expenditureTotal:0,
      };
    },
    mounted() {
      // var orderHight1 = document.documentElement.clientHeight;
      // var heightlist = orderHight1 -160;
      // $("#jqgkid").css('height',heightlist + "px");
      this.getData();
      var _this=this;
      // var display='flex'
      // this.$refs.jqgkid.addEventListener('scroll', () => {
      //       var current_offset_top = _this.$refs.jqgkid.scrollTop;
      //       if(current_offset_top>60&&display=='flex'){
      //         _this.$emit('fatherMethod');
      //         display='none'
      //       }
      //       if(current_offset_top==0&&display=='none'){
      //         _this.$emit('fatherMethod');
      //         display='flex'
      //       }
 
      //   }, false);


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
      getThreeEchars: function (data) {
        echarsEnti.createEcharsThree(echarts, this.$refs.myCharts3, data);
      },
      getData: function () {
        var _this = this;
        httpMethod.getScenicBasicStatistic()
          .then(res => {
            if (res.success == "1") {
              _this.getOneEchars(res.scenics);
              _this.levelCount = res.levelCount;
              _this.visitorTotal = res.visitorTotal;
              _this.incomeTotal = (res.incomeTotal/10000).toFixed(2);
              _this.expenditureTotal = (res.expenditureTotal/10000).toFixed(2);

              _this.getTwoEchars(res.visitors);
              _this.getThreeEchars(res.outputs);

            } else if (res.success == "0") {
              this.error = true;
            }
            this.loading = false;
            this.isLoading = false;
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