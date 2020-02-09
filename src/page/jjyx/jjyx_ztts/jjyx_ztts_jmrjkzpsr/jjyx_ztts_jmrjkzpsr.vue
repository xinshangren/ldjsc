<template>
  <div style="margin-top:0px;">
    <div
      style="display: flex;background: rgb(255, 255, 255);margin-left: 10px;margin-right: 10px;padding-top: 10px;padding-bottom: 10px;"
    >
      <div style="width:50%;display:flex;">
        <img
          style="height: 30px;margin-top: 10px;margin-left:23px;margin-right:5px;"
          src="../../../../assets/img/data_icon1.png"
        />
        <div>
          <div style="display:flex;line-height:27px;">
            <div style="color:#0b91ed;font-size:20px;">{{totalData.indexdata}}</div>
            <div>元</div>
          </div>
          <div style="font-size:12px;color:#666666;">居民人均可支配收入</div>
        </div>
      </div>
      <div style="height:50px;width:1px;background:#cccccc;"></div>
      <div style="width:50%;display:flex;">
        <img
          style="height: 30px;margin-top: 10px;margin-left:40px;margin-right:5px;"
          src="../../../../assets/img/data_icon2.png"
        />
        <div>
          <div style="display:flex;font-size:20px;">
            <div style="color:#ffd06b;">{{totalData.yonydata}}</div>
            <div>%</div>
            <img
              v-if="totalData.yonydata>0||totalData.yonydata==0"
              style="height: 13px;margin-top: 4px;"
              src="../../../../assets/img/eco_rise.png"
            />
            <img
              v-if="totalData.yonydata<0"
              style="height: 13px;margin-top: 4px;"
              src="../../../../assets/img/eco_down.png"
            />
          </div>
          <div style="font-size:12px;color:#666666;">同比增长</div>
        </div>
      </div>
    </div>

    <div style="background:#ffffff;height:660px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div">人均可支配收入和增速</div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div id="myCharts1" ref="myCharts1" style="height:220px;width:100%;"></div>
      <div id="myCharts2" ref="myCharts2" style="height:180px;width:100%;"></div>
      <div style="display:flex;">
        <div id="myCharts3" ref="myCharts3" style="height:180px;width:50%;"></div>
        <div id="myCharts4" ref="myCharts4" style="height:180px;width:50%;"></div>
      </div>
    </div>
    
    <div style="background:#ffffff;height:290px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div">居民人均可支配收入及增速</div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div style="display:flex;">
        <div id="myCharts5" ref="myCharts5" style="height:290px;width:100%;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
import { echarsEnti } from "../../../../page/jjyx/jjyx_ztts/jjyx_ztts_jmrjkzpsr/jjyx_ztts_jmrjkzpsr.js";
import { httpMethod } from "../../../../api/getData.js";
export default {
  props: ["getChild"],
  name: "jjyx_ztts_jmrjkzpsr",
  data() {
    return {
      show: false,
      qssczzEnti: {},
      totalData: {},
      dataList: [],
      indexMonth: ""
    };
  },
  mounted() {
    console.log(this.getChild);
    this.dateTime = this.getChild;
    var year = this.dateTime.substr(0, 4);
    var month = this.dateTime.substr(5, this.dateTime.length - 1);

    this.indexMonth = month.replace(/\b(0+)/gi, "");
    this.getHomeData(year, month);
  },
  methods: {
    selectTab: function(flag) {
      console.log(flag);
      switch (flag) {
        case 1: //形象进度
          this.isFlag = true;
          $("#tabdiv1").removeClass("pop_tab_noselect_div1");
          $("#tabdiv1").addClass("pop_tab_select_div1");
          $("#tabdiv2").addClass("pop_tab_noselect_div2");
          $("#tabdiv2").removeClass("pop_tab_select_div2");
          $("#myCharts1").show();
          $("#myCharts2").hide();
          break;
        case 2: //存在问题
          this.isFlag = false;
          $("#tabdiv1").removeClass("pop_tab_select_div1");
          $("#tabdiv1").addClass("pop_tab_noselect_div1");
          $("#tabdiv2").addClass("pop_tab_select_div2");
          $("#tabdiv2").removeClass("pop_tab_noselect_div2");
          $("#myCharts1").hide();
          $("#myCharts2").show();
          break;
        default:
          break;
      }
    },
    changeTitme: function(date) {
      console.log(date);
      this.dateTime = date;
      var year = date.substr(0, 4);
      var month = date.substr(5, date.length - 1);
      this.indexMonth = month.replace(/\b(0+)/gi, "");
      this.getHomeData(year, month);
    },
    //第一个头和统计饼图
    getHomeData: function(year, month) {
      var self = this;
      var params = {
        year: year,
        month: month
      };
      //获取数据
      httpMethod
        .getDisposableIncome(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            // var dateZb = res.dateZb; //城乡零售占比及增速
            // var listObj = res.listObj;
          

            var disposableIncomeData = res.disposableIncomeData;
              this.totalData = res.disposableIncomeData[0]; //标题
            // this.totalData.indexdata = parseFloat(
            //   this.totalData.indexdata / 10000
            // ).toFixed(2);
					 var incomeRate = res.incomeRate;
            this.getOneEchars(echarts, this.$refs.myCharts1, disposableIncomeData);
            this.getTwoEchars(echarts, this.$refs.myCharts2, disposableIncomeData);
            this.getThreeEchars(echarts, this.$refs.myCharts3, disposableIncomeData);
               this.getFourEchars(echarts, this.$refs.myCharts4, disposableIncomeData);
            this.getFiveEchars(echarts, this.$refs.myCharts5, incomeRate);
          }
        })
        .catch(err => {});
    },
    //格式化参数
    formmgetData: function(data) {
      if (data != null && data != undefined) {
        return data;
      } else {
        return "-";
      }
    },
    //初始化第一个图表
    getOneEchars: function(echarts, value, data) {
      echarsEnti.showjmrjsrEchars1(echarts, value, data);
    },
    //初始化第二个图表
    getTwoEchars: function(echarts, value, data) {
      echarsEnti.showjmrjsrEchars2(echarts, value, data);
    },
    //初始化第三个图表
    getThreeEchars: function(echarts, value, data) {
      echarsEnti.showjmrjsrEchars3(echarts, value, data);
    },
    //初始化第4个图表
    getFourEchars: function(echarts, value, data) {
      echarsEnti.showjmrjsrEchars4(echarts, value, data);
    },
    //初始化第5个图表
    getFiveEchars: function(echarts, value, data) {
      echarsEnti.showjmrjsrEchars5(echarts, value, data);
    }
  }
};
</script>
<style scoped>
@import "../../../../page/jjyx/jjyx_ztts/jjyx_ztts_jmrjkzpsr/jjyx_ztts_jmrjkzpsr.css";
@import "../../../../assets/css/frozenui.css";
</style>
