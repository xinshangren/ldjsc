<template style="background: #ffffff;">
  <div>
    <div class="gkmaintitle">
      <div id="gkdatepick"
        style="margin-left: 7%;display: flex; width: 18%; line-height: 70px;vertical-align: middle; color: #ffff66;font-size: 12px;">
        {{date}}
        <img src="../../assets/img/xl.png" style="height: 12px;margin-top: 29px;">
      </div>
      <div style="margin-left: 15%;line-height: 70px;vertical-align: middle;font-size: 14px;color:#ff3d2e;">评级点位：</div>
      <div style="line-height: 70px;vertical-align: middle;font-size: 26px;color:#ff3d2e;">{{datatj.dw_zs}}</div>
      <div style="line-height: 70px;vertical-align: middle;font-size: 14px;color:#ff3d2e;">个</div>
      <div v-if="date!='2019-06'"
        style="margin-left: 5%;line-height: 70px;vertical-align: middle;font-size: 14px;color:#ff3d2e;">
        {{datatj.dw_zj}}</div>

      <img v-if="date!='2019-06'" :src="iconpath" style="margin-top: 28px; height: 14px;">
    </div>

    <div id="gkdateselect"
      style="display: none; background:#ffffff;position: absolute;width:70px;z-index: 998;left:12%;top:98px;border:0.5px #e03e3c solid;">
      <ul id="gkdateul">
        <li show="6月份" code='2019-06'
          style="border-top:0.5px #e03e3c solid;font-size:15px;color: #e03e3c;height: 25px;text-align: center;" >2019-06
        </li>
        <li show="7月份" code='2019-07'
          style="border-top:0.5px #e03e3c solid;font-size:15px;color: #e03e3c;height: 25px;text-align: center;">2019-07
        </li>
        <li show="8月份" code='2019-08'
          style="border-top:0.5px #e03e3c solid;font-size:15px;color: #e03e3c;height: 25px;text-align: center;">2019-08
        </li>
        <li show="9月份" code='2019-09'
          style="border-top:0.5px #e03e3c solid;font-size:15px;color: #e03e3c;height: 25px;text-align: center;">2019-09
        </li>
        <li show="10月份" code='2019-10'
          style="border-top:0.5px #e03e3c solid;font-size:15px;color: #e03e3c;height: 25px;text-align: center;">2019-10
        </li>
      </ul>
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
    <div ref="myCharts2" style=" height:200px;"></div>
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
            <img src="../../assets/img/xx-r.png" style="height: 50%;margin-top: 10%;">
            <div>红星</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="gridtitle">
            <img src="../../assets/img/xx-p.png" style="height: 50%;margin-top: 10%;">
            <div>粉星</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="gridtitle">
            <img src="../../assets/img/xx-y.png" style="height: 50%;margin-top: 10%;">
            <div>黄星</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="gridtitle">
            <img src="../../assets/img/xx-g.png" style="height: 50%;margin-top: 10%;">
            <div>绿星</div>
          </div>
        </van-grid-item>
        <van-grid-item style="padding: 0;">
          <div class="gridtitle">
            <img src="../../assets/img/xx-b.png" style="height: 50%;margin-top: 10%;">
            <div>蓝星</div>
          </div>
        </van-grid-item>
      </van-grid>

      <van-grid :border="true" :column-num="7">
        <van-grid-item v-for="(value,index) in MonthLevelist" :key="index">
          {{value}}
        </van-grid-item>
      </van-grid>
    </div>
    <div style="height: 30px;"></div>
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
        iconpath:require('../../assets/img/eco_rise.png'),
        dwRateList: [],
        datatj: {},
        date: "2019-10",
        MonthLevelist: []
      };
    },
    mounted() {
      var  _this=this;
      this.getDwSummary();
      this.getMonthLevelNum();

      //月份选择
      $("#gkdatepick").off("click");
      $("#gkdatepick").on("click", function () {
        $("#gkdateselect").css('display', '');
      });
      $("#gkdateul li").click(function () {
        var code = $(this).attr("code");
        _this.date=code;
        $("#gkdateselect").css('display', 'none');
        _this.getDwSummary();
        // isfirst = 1;
        // initxjzs();
        // $("#xjDialogId li").each(function() {
        // 	if($(this).hasClass("dialogNoSelect")) {
        // 		$(this).removeClass("dialogNoSelect");
        // 		$(this).addClass("dialogSelect");
        // 	}
        // });
        // entrySend();
      });
    },
    methods: {
      // 
      getDwSummary: function () {
        var _this = this;
        var params = {
          date: _this.date
        };
        httpMethod
          .getDwSummary(params)
          .then(res => {
            console.log(res);
            if (res.success == "1") {
              _this.getOneEchars(res.dwRateList);
              _this.datatj = res.dataList[0]
              if((_this.datatj.dw_zj+'').indexOf('-')==0){
                _this.iconpath=require('../../assets/img/eco_down.png')
              }else{
                _this.datatj.dw_zj='+'+_this.datatj.dw_zj
                _this.iconpath=require('../../assets/img/eco_rise.png')
              }
            }
          })
          .catch(err => {

          });
      },
      // 
      getMonthLevelNum: function () {
        var _this = this;
        var params = {
        };
        httpMethod
          .getMonthLevelNum(params)
          .then(res => {
            console.log(res);
            if (res.success == "1") {
              _this.getTwoEchars(res.dataList);
              _this.MonthLevelist = [];
              for (var i = 0; i < res.dataList.length; i++) {
                var datav = res.dataList[i].monthList;
                var date = res.dataList[i].date.substring(5, 7)
                if (date.indexOf('0') == 0) {
                  date = date.replace('0', '');
                }

                _this.MonthLevelist.push(date + '月')
                _this.MonthLevelist.push(res.dataList[i].total)
                for (var j = 0; j < datav.length; j++) {
                  _this.MonthLevelist.push(datav[j].dw_count);
                }

              }
            }
          })
          .catch(err => {

          });
      },
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
  .gkmaintitle {
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