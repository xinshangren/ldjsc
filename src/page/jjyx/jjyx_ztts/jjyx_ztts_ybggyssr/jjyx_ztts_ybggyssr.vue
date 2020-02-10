<template>
  <div style="margin-top:0px;">
    <div
      style="display: flex;background: rgb(255, 255, 255);margin-left: 10px;margin-right: 10px;padding-top: 10px;padding-bottom: 10px;"
    >
      <div style="width:50%;padding-left:13px; ">
        <div style="display:flex;line-height:18px;">
          <div style="color: #0b91ed;font-size: 20px;">{{totalData.lj_index}}</div>
          <div style="font-size:12px;">万元</div>
        </div>
        <div style="font-size: 12px;color: #666666;">1-{{indexMonth}}月一般公共预算收入</div>
        <div style="display:flex;line-height:21px;">
          <div style="color: #0b91ed;font-size: 20px;">{{totalData.lj_yony}}</div>
          <div style="font-size:12px;">%</div>
          <img
            v-if="totalData.lj_yony>=0"
            style="height: 15px;margin-top: 3px;"
            src="../../../../assets/img/eco_rise.png"
          />
          <img
            v-if="totalData.lj_yony<0"
            style="height: 15px;margin-top: 3px;"
            src="../../../../assets/img/eco_down.png"
          />
        </div>
        <div style="font-size: 12px;color: #666666;">同比增长</div>
      </div>
      <div style="height:80px;width:1px;background:#cccccc;"></div>
      <div style="width:50%;padding-left:13px; ">
        <div style="display:flex;line-height:18px;">
          <div style="color: #0b91ed;font-size: 20px;">{{totalData.dy_index}}</div>
          <div style="font-size:12px;">万元</div>
        </div>
        <div style="font-size: 12px;color: #666666;">{{indexMonth}}月一般公共预算收入</div>
        <div style="display:flex;line-height:21px;">
          <div style="color: #0b91ed;font-size: 20px;">{{totalData.dy_yony}}</div>
          <div style="font-size:12px;">%</div>
          <img
            v-if="totalData.dy_yony>=0"
            style="height: 15px;margin-top: 3px;"
            src="../../../../assets/img/eco_rise.png"
          />
          <img
            v-if="totalData.dy_yony<0"
            style="height: 15px;margin-top: 3px;"
            src="../../../../assets/img/eco_down.png"
          />
        </div>
        <div style="font-size: 12px;color: #666666;">同比增长</div>
      </div>
    </div>

    <div style="background:#ffffff;height:240px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div">税收收入与非税收收入占比</div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div style="display:flex;">
        <div id="myCharts1" ref="myCharts1" style="height:220px;width:50%;"></div>
        <div id="myCharts2" ref="myCharts2" style="height:220px;width:50%;"></div>
      </div>
    </div>

    <div style="background:#ffffff;height:340px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div">一般公共预算收入累计增长速度</div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div id="myCharts3" ref="myCharts3" style="height:300px;width:100%;"></div>
    </div>
    <div style="background:#ffffff;height:300px;width:100%;margin-top:8px;padding-top:7px;">
      <div class="echars_titile_div">一般公共预算收入(万元)</div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>

      <table id="ybggyssrTableId1" width="100%">
        <thead>
          <tr style="background:#3ba1eb;color:#ffffff;height: 40px;border-bottom:1px solid #cccccc; line-height: 41px;">
            <th width="20%" style="text-align:center">类型</th>
            <th width="20%" style="text-align:center">1-{{indexMonth}}月</th>
            <th width="20%" style="text-align:center">同比±%</th>
            <th width="20%" style="text-align:center">{{indexMonth}}月</th>
            <th width="20%" style="text-align:center">同比±%</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background:#ffffff;font-size:12px; margin-top: 0px;padding: 0;height: 40px;border-bottom:1px solid #cccccc; "
          v-for="(item,index) in dataList"
                :key="index">
            <td style="text-align:center">{{item.statis_name}}</td>
            <td style="text-align:center">{{item.lj_index}}</td>
            <td style="text-align:center">{{item.lj_yony}}%
              <img
                    v-if="item.lj_yony>=0"
                    style="height: 15px;margin-top: 13px;margin:auto;"
                    src="../../../../assets/img/eco_rise.png"
                  />
              <img
                    v-if="item.lj_yony<0"
                    style="height: 15px;margin-top: 13px;margin:auto;"
                    src="../../../../assets/img/eco_down.png"
                  /></td>
            <td style="text-align:center">{{item.dy_index}}</td>
            <td style="text-align:center">{{item.dy_yony}}%
                  <img
                    v-if="item.dy_yony>=0"
                    style="height: 15px;margin-top: 13px;margin:auto;"
                    src="../../../../assets/img/eco_rise.png"
                  />
                  <img
                    v-if="item.dy_yony<0"
                    style="height: 15px;margin-top: 13px;margin:auto;"
                    src="../../../../assets/img/eco_down.png"
                  />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
import { echarsEnti } from "../../../../page/jjyx/jjyx_ztts/jjyx_ztts_ybggyssr/jjyx_ztts_ybggyssr.js";
import { httpMethod } from "../../../../api/getData.js";
export default {
  props: ["getChild"],
  name: "jjyx_ztts_ybggyssr",
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
        .getCommonalityIncome(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            var dateZb = res.dateZb; //城乡零售占比及增速
            var listObj = res.listObj;
            this.totalData = res.date; //标题
            this.dataList = res.dateForm;
            this.getOneEchars(echarts, this.$refs.myCharts1, dateZb);
            this.getTwoEchars(echarts, this.$refs.myCharts2, dateZb);
            this.getThreeEchars(echarts, this.$refs.myCharts3, listObj);
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
      echarsEnti.showShxfplszeEchars11(echarts, value, data);
    },
    //初始化第二个图表
    getTwoEchars: function(echarts, value, data) {
      echarsEnti.showShxfplszeEchars21(echarts, value, data);
    },
    //初始化第三个图表
    getThreeEchars: function(echarts, value, data) {
      echarsEnti.showShxfplszeEchars31(echarts, value, data);
    }
  }
};
</script>
<style scoped>
@import "../../../../page/jjyx/jjyx_ztts/jjyx_ztts_ybggyssr/jjyx_ztts_ybggyssr.css";
@import "../../../../assets/css/frozenui.css";
</style>
