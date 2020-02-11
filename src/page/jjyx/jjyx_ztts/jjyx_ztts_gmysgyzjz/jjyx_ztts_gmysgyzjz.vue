<template>
  <div style="margin-top:0px;">
    <div
      style="display: flex;background: rgb(255, 255, 255);margin-left: 10px;margin-right: 10px;padding-top: 10px;padding-bottom: 10px;"
    >
      <div style="width:50%;display:flex;">
        <img
          style="height: 30px;margin-top: 10px;margin-left:23px;margin-right:5px;"
          src="../../../../assets/img/data_icon2.png"
        />
        <div>
          <div style="display:flex;font-size:20px;">
            <div style="color:#ffd06b;">{{totalData[1].rate}}</div>
            <div>%</div>
            <img
              v-if="totalData[1].rate>0||totalData[1].rate==0"
              style="height: 13px;margin-top: 4px;"
              src="../../../../assets/img/eco_rise.png"
            />
            <img
              v-if="totalData[1].rate<0"
              style="height: 13px;margin-top: 4px;"
              src="../../../../assets/img/eco_down.png"
            />
          </div>
          <div style="font-size:12px;color:#666666;">1-{{indexMonth}}月增长速度</div>
        </div>
      </div>
      <div style="height:50px;width:1px;background:#cccccc;"></div>
      <div style="width:50%;display:flex;">
        <img
          style="height: 30px;margin-top: 10px;margin-left:40px;margin-right:5px;"
          src="../../../../assets/img/data_icon3.png"
        />
        <div>
          <div style="display:flex;font-size:20px;">
            <div style="color:#ff7550;">{{totalData[0].rate}}</div>
            <div>%</div>
            <img
              v-if="totalData[0].rate>0||totalData[0].rate==0"
              style="height: 13px;margin-top: 4px;"
              src="../../../../assets/img/eco_rise.png"
            />
            <img
              v-if="totalData[0].rate<0"
              style="height: 13px;margin-top: 4px;"
              src="../../../../assets/img/eco_down.png"
            />
          </div>
          <div style="font-size:12px;color:#666666;">{{indexMonth}}月增长速度</div>
        </div>
      </div>
    </div>

    <div style="background:#ffffff;height:260px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div">全市规模以上工业增加值累计增长速度</div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div id="myCharts1" ref="myCharts1" style="height:220px;width:100%;"></div>
    </div>

    <div
      style="margin-top:7px;display: flex;background: rgb(255, 255, 255);margin-left: 10px;margin-right: 10px;padding-top: 10px;padding-bottom: 10px;"
    >
      <div style="width:50%;padding-left:13px; ">
        <div style="display:flex;line-height:18px;">
          <div style="color: #0b91ed;font-size: 20px;">{{electricityDatalj.indexdata}}</div>
          <div style="font-size:12px;">亿千瓦时</div>
        </div>
        <div style="font-size: 12px;color: #666666;">1-{{indexMonth}}月全社会用电量</div>
        <div style="display:flex;line-height:21px;">
          <div style="color: #0b91ed;font-size: 20px;">{{electricityDatalj.yonydata}}</div>
          <div style="font-size:12px;">%</div>
          <img
            v-if="electricityDatalj.yonydata>=0"
            style="height: 15px;margin-top: 3px;"
            src="../../../../assets/img/eco_rise.png"
          />
          <img
            v-if="electricityDatalj.yonydata<0"
            style="height: 15px;margin-top: 3px;"
            src="../../../../assets/img/eco_down.png"
          />
        </div>
        <div style="font-size: 12px;color: #666666;">同比增长</div>
      </div>
      <div style="height:80px;width:1px;background:#cccccc;"></div>
      <div style="width:50%;padding-left:13px; ">
        <div style="display:flex;line-height:18px;">
          <div style="color: #0b91ed;font-size: 20px;">{{electricityDatady.indexdata}}</div>
          <div style="font-size:12px;">亿千瓦时</div>
        </div>
        <div style="font-size: 12px;color: #666666;">{{indexMonth}}月全社会用电量</div>
        <div style="display:flex;line-height:21px;">
          <div style="color: #0b91ed;font-size: 20px;">{{electricityDatady.yonydata}}</div>
          <div style="font-size:12px;">%</div>
          <img
            v-if="electricityDatady.yonydata>=0"
            style="height: 15px;margin-top: 3px;"
            src="../../../../assets/img/eco_rise.png"
          />
          <img
            v-if="electricityDatady.yonydata<0"
            style="height: 15px;margin-top: 3px;"
            src="../../../../assets/img/eco_down.png"
          />
        </div>
        <div style="font-size: 12px;color: #666666;">同比增长</div>
      </div>
    </div>

    <div style="background:#ffffff;height:290px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div">全社会用电量累计增长速度</div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div style="display:flex;">
        <div id="myCharts2" ref="myCharts2" style="height:250px;width:100%;"></div>
      </div>
    </div>

    <div style="background:#ffffff;height:290px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div">全行业用电量与增速</div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div style="display:flex;">
        <div id="myCharts3" ref="myCharts3" style="height:250px;width:100%;"></div>
      </div>
    </div>
    <div style="background:#ffffff;height:290px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div">城乡居民生活用电量与增速</div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div style="display:flex;">
        <div id="myCharts4" ref="myCharts4" style="height:250px;width:100%;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
import { echarsEnti } from "../../../../page/jjyx/jjyx_ztts/jjyx_ztts_gmysgyzjz/jjyx_ztts_gmysgyzjz.js";
import { httpMethod } from "../../../../api/getData.js";
export default {
  props: ["getChild"],
  name: "jjyx_ztts_gmysgyzjz",
  data() {
    return {
      show: false,
      qssczzEnti: {},
      totalData: [{ rate: "" }, { rate: "" }],
      dataList: [],
      indexMonth: "",
      electricityDatady: {},
      electricityDatalj: {}
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
        .getIndustrialValueAdded(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            this.electricityData = res.electricityData;
            for (var i = 0; i < this.electricityData.length; i++) {
              var enti = this.electricityData[i];
              var type = enti.type;
              var indexdata = enti.indexdata;
              var rate = enti.yonydata;
              if (type == "单月") {
                this.electricityDatady = enti;
              } else {
                this.electricityDatalj = enti;
              }
            }

            this.totalData = res.totalData;
            this.indexMonth = res.month;
            var incomeRate = res.incomeRate;
            this.getOneEchars(echarts, this.$refs.myCharts1, res);
            this.getTwoEchars(echarts, this.$refs.myCharts2, res);
            this.getThreeEchars(echarts, this.$refs.myCharts3, res);
            this.getFourEchars(echarts, this.$refs.myCharts4, res);
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
      echarsEnti.qyzjzEchars1(echarts, value, data);
    },
    //初始化第二个图表
    getTwoEchars: function(echarts, value, data) {
      echarsEnti.qyzjzEchars2(echarts, value, data);
    },
    //初始化第三个图表
    getThreeEchars: function(echarts, value, data) {
      echarsEnti.qyzjzEchars3(echarts, value, data);
    },
    //初始化第4个图表
    getFourEchars: function(echarts, value, data) {
      echarsEnti.qyzjzEchars4(echarts, value, data);
    }
  }
};
</script>
<style scoped>
@import "../../../../page/jjyx/jjyx_ztts/jjyx_ztts_gmysgyzjz/jjyx_ztts_gmysgyzjz.css";
@import "../../../../assets/css/frozenui.css";
</style>
