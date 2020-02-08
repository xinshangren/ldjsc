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
            <div>亿元</div>
          </div>
          <div style="font-size:12px;color:#666666;">社会消费品零售总额</div>
        </div>
      </div>
      <div style="height:50px;width:1px;background:#cccccc;"></div>
      <div style="width:50%;display:flex;">
        <img
          style="height: 30px;margin-top: 10px;margin-left:40px;margin-right:5px;"
          src="../../../../assets/img/data_icon2.png"
        />
        <div>
          <div style="display:flex;">
            <div>{{totalData.yonydata}}</div>
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

    <div style="background:#ffffff;height:290px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div">城镇、乡村零售额占比与增速</div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>

      <div
        style="display: flex;height: 40px;margin-top: 20px;margin-left: 10px;margin-right: 10px;"
      >
        <div style="width:50%;position:relative;">
          <div @click="selectTab(1)" id="tabdiv1" class="pop_tab_select_div1">
            <div style="margin-right:0px;">占比</div>
          </div>
        </div>
        <div style="width:50%;position:relative;">
          <div @click="selectTab(2)" id="tabdiv2" class="pop_tab_noselect_div2">
            <div style="margin-right:0px;">增速</div>
          </div>
        </div>
      </div>
      <div style="display:flex;">
        <div id="myCharts1" ref="myCharts1" style="height:200px;width:100%;"></div>
        <div id="myCharts2" ref="myCharts2" style="display:none;height:220px;width:350px;"></div>
      </div>
    </div>

    <div style="background:#ffffff;height:340px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div">社会消费品零售总额增速</div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div id="myCharts3" ref="myCharts3" style="height:300px;width:100%;"></div>
    </div>
    <div style="background:#ffffff;height:300px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div">社会消费品零售(万元)</div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div id="ybggyssrTableId1" style="border: 1px solid #cccccc;">
        <div
          class="ui-row-flex ui-whitespace"
          style="background:#3ba1eb;color:#ffffff; margin-top: 0px;padding: 0;height: 40px;border-bottom:1px solid #cccccc; line-height: 41px;"
        >
          <div class="ui-col ui-col" style="text-align: center;"></div>
          <div class="ui-col ui-col" style="text-align: center;">1-{{indexMonth}}季度</div>
          <div class="ui-col ui-col" style="text-align: center;">
            <div style="margin-left: 23px;">同比±%</div>
          </div>
          <div class="ui-col ui-col" style="text-align: center;">第{{indexMonth}}季度</div>
          <div class="ui-col ui-col" style="text-align: center;">
            <div style="margin-left: 0px;">同比±%</div>
          </div>
        </div>
        <div   v-for="(item,index) in dataList" :key="index">
          <div
            class="ui-row-flex ui-whitespace"
            :class="[index==0||index==1||index==2||index==5||index==8||index==11?'hightBackground':'nohightBackground']"
          >
            <div class="ui-col ui-col" style="text-align: center;">{{item.statisname}}</div>
            <div class="ui-col ui-col" style="text-align: center;">{{item.ljindexdata}}</div>
            <div class="ui-col ui-col" style="text-align: center;display: flex;">
              <div style="color: red;margin-left: 23px;">{{item.ljyonydata}}%</div>
              <img
                v-if="item.ljyonydata>=0"
                style="height: 15px;margin-top: 13px;margin:auto;"
                src="../../../../assets/img/eco_rise.png"
              />
              <img
                v-if="item.ljyonydata<0"
                style="height: 15px;margin-top: 13px;margin:auto;"
                src="../../../../assets/img/eco_down.png"
              />
            </div>
            <div class="ui-col ui-col" style="text-align: center;">{{item.indexdata}}</div>
            <div class="ui-col ui-col" style="text-align: center;display: flex;">
              <div style="color: red;margin-left: 7px;">{{item.yonydata}}%</div>
              <img
                v-if="item.yonydata>=0"
                style="height: 15px;margin-top: 13px;margin:auto;"
                src="../../../../assets/img/eco_rise.png"
              />
              <img
                v-if="item.yonydata<0"
                style="height: 15px;margin-top: 13px;margin:auto;"
                src="../../../../assets/img/eco_down.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
import { echarsEnti } from "../../../../page/jjyx/jjyx_ztts/jjyx_ztts_shxfplszz/jjyx_ztts_shxfplszz.js";
import { httpMethod } from "../../../../api/getData.js";
export default {
  props: ["getChild"],
  name: "jjyx_ztts_shxfplszz",
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
        .getSocialConsumerGoods(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            // var dateZb = res.dateZb; //城乡零售占比及增速
            // var listObj = res.listObj;
            this.totalData = res.totalData[0]; //标题
            if(totalData.indexdata)
              this.totalData.indexdata = parseFloat(
                this.totalData.indexdata / 10000
              ).toFixed(2);
              else totalData.indexdata = 0;
            // this.dataList = res.dateForm;
            var urbanOrTownData = res.urbanOrTownData; //城乡零售占比及增速
            var consumerGoodsRate = res.consumerGoodsRate;
            this.indexMonth = res.quarter;
            this.dataList = res.allConsumerData; //数据列表
            this.getOneEchars(
              echarts,
              this.$refs.myCharts1,
              urbanOrTownData,
              res
            );
            this.getTwoEchars(echarts, this.$refs.myCharts2, urbanOrTownData);
            this.getThreeEchars(
              echarts,
              this.$refs.myCharts3,
              consumerGoodsRate
            );
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
    getOneEchars: function(echarts, value, data, data2) {
      echarsEnti.showShxfplszeEchars1(echarts, value, data, data2);
    },
    //初始化第二个图表
    getTwoEchars: function(echarts, value, data) {
      echarsEnti.showShxfplszeEchars2(echarts, value, data);
    },
    //初始化第三个图表
    getThreeEchars: function(echarts, value, data) {
      echarsEnti.showShxfplszeEchars3(echarts, value, data);
    }
  }
};
</script>
<style scoped>
@import "../../../../page/jjyx/jjyx_ztts/jjyx_ztts_shxfplszz/jjyx_ztts_shxfplszz.css";
@import "../../../../assets/css/frozenui.css";
</style>
