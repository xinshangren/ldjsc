<template>
  <div style="margin-top:55px">
    <div style="background:#ffffff;padding-bottom:15px;">
      <div
        style="color: rgb(39, 150, 231);font-size: 16px;margin-left: 20px;padding-top: 10px;"
      >{{itemEnti.PSName}}</div>

      <div style="display:flex;">
        <div style="margin-left: 20px;margin-top: 6px;width:50%;">
          <div style="display:flex;">
            <img style="height:19px;" src="../../../../../../assets/img/company_details_icon1.png" />
            <div style="color:#999999;font-size:14px;margin-left:5px;">是否监控</div>
          </div>
          <div style="color:#333333;font-size:14px;margin-left:5px;">{{indexItem.IsMonitor}}</div>
        </div>
        <div style="height:50px;width:1px;background:#f3f3f3;"></div>
        <div style="margin-left: 20px;margin-top: 6px;width:50%;">
          <div style="display:flex;">
            <img style="height:19px;" src="../../../../../../assets/img/company_details_icon2.png" />
            <div style="color:#999999;font-size:14px;margin-left:5px;">污染源规模</div>
          </div>
          <div style="color:#333333;font-size:14px;margin-left:5px;">{{indexItem.PSScaleName}}</div>
        </div>
      </div>
      <div style="display:flex;">
        <div style="margin-left: 20px;margin-top: 6px;width:50%;">
          <div style="display:flex;">
            <img style="height:19px;" src="../../../../../../assets/img/company_details_icon3.png" />
            <div style="color:#999999;font-size:14px;margin-left:5px;">行业类别</div>
          </div>
          <div style="color:#333333;font-size:14px;margin-left:5px;">{{indexItem.IndustryTypeName}}</div>
        </div>
        <div style="height:50px;width:1px;background:#f3f3f3;"></div>
        <div style="margin-left: 20px;margin-top: 6px;width:50%;">
          <div style="display:flex;">
            <img style="height:19px;" src="../../../../../../assets/img/details_icon3.png" />
            <div style="color:#999999;font-size:14px;margin-left:5px;">法人代表</div>
          </div>
          <div style="color:#333333;font-size:14px;margin-left:5px;">{{indexItem.CorporationName}}</div>
        </div>
      </div>
    </div>

    <div
      style="background:#ffffff;height:320px;width:100%;margin-top:8px;padding-top:7px;border-top:7px solid #F1F4F6;"
    >
      <div style="display:flex;">
        <div class="echars_titile_div">污染情况</div>
      </div>
      <div
        class="van-hairline--bottom"
        style="margin-top: 8px;margin-left: 10px;margin-right: 10px;"
      ></div>
      <div style="display:flex;">
        <div style="width:30%;margin-left:10px;">
          <ul style="margin-left:11px;">
            <li class="oneLiNoSelectClass">
              <img style="height:37px;" src="../../../../../../assets/img/company_details_tab1.png" />
              <div style="font-size: 13px;text-align: center;">污染物报警</div>
            </li>
          </ul>
        </div>
        <div style="width:70%;">
          <div v-if="type=='1'">
            <div style="display:flex;">
              <div
                @click="showSelectTime(1)"
                style="display: flex;background: #eeeeee;border-radius: 4px;padding: 2px 9px;"
              >
                <div style="font-size:14px;">{{starttime}}</div>
                <img
                  style="height: 11px;margin-left: 3px;margin-top: 6px;"
                  src="../../../../../../assets/img/air_home_tab_arrow.png"
                />
              </div>
              <div
                style="width: 12px;height: 1px;background: rgb(51, 51, 51);margin-top: 14px;margin-left: 3px;margin-right: 3px;"
              ></div>
              <div
                @click="showSelectTime(2)"
                style="display: flex;background: #eeeeee;border-radius: 4px;padding: 2px 9px;"
              >
                <div  style="font-size:14px;">{{endtime}}</div>
                <img
                  style="height: 11px;margin-left: 3px;margin-top: 6px;"
                  src="../../../../../../assets/img/air_home_tab_arrow.png"
                />
              </div>
            </div>

            <div
              class="ui-row-flex ui-whitespace"
              style="border-radius:4px 4px 0px 0px;width:96%; font-size:14px;background: rgb(59, 161, 235); color: rgb(255, 255, 255); margin-top: 10px; padding: 0px; height: 40px; border-bottom: 1px solid rgb(204, 204, 204); line-height: 41px;"
            >
              <div class="ui-col ui-col" style="text-align: center;">污染物</div>
              <div class="ui-col ui-col" style="text-align: center;">报警次数</div>
              <div class="ui-col ui-col" style="text-align: center;">持续时间(m)</div>
              <div class="ui-col ui-col" style="text-align: center;">处置次数</div>
            </div>
            <div v-if="list.length==0" style="text-align: center;margin-right:12px;">
              <img style="height:118px;" src="../../../../../../assets/img/no_data.png" />
            </div>
            <div v-if="list.length>0">
              <div v-for="(item,index) in list" :key="index">
                <div
                  v-if="index%2!=0"
                  class="ui-row-flex ui-whitespace"
                  style="width: 96%;font-size: 14px;background: #f2f9ff;color: #333333;padding: 0px;height: 40px;border-bottom: 1px solid rgb(204, 204, 204);line-height: 41px;"
                >
                  <div class="ui-col ui-col" style="text-align: center;">{{item.PollutantName}}</div>
                  <div class="ui-col ui-col" style="text-align: center;">{{item.ycz}}</div>
                  <div class="ui-col ui-col" style="text-align: center;">{{item.Duration}}(m)</div>
                  <div class="ui-col ui-col" style="text-align: center;">{{item.cnum}}</div>
                </div>
                <div
                  v-if="index%2==0"
                  class="ui-row-flex ui-whitespace"
                  style="width: 96%;font-size: 14px;background: #ffffff;color: #333333;padding: 0px;height: 40px;border-bottom: 1px solid rgb(204, 204, 204);line-height: 41px;"
                >
                  <div class="ui-col ui-col" style="text-align: center;">{{item.PollutantName}}</div>
                  <div class="ui-col ui-col" style="text-align: center;">{{item.ycz}}</div>
                  <div class="ui-col ui-col" style="text-align: center;">{{item.Duration}}(m)</div>
                  <div class="ui-col ui-col" style="text-align: center;">{{item.cnum}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <van-popup v-model="showYear" position="bottom" :style="{ height: '200px' }">
      <van-datetime-picker
        v-model="currentYear"
        type="date"
        style="height: 200px;"
        @confirm="onconfirmYear"
      />
    </van-popup>
  </div>
</template>
<script>
import echarts from "echarts";
import $ from "jquery";
import { httpMethod } from "../../../../../../api/getData.js";
import { hbgjAirJs } from "../../../../../../page/zdgz/hbgj/hbgj_wrqy/hbgj_zdqylb/hbgj_zdqylb_deali/hbgj_zdqylb_deali.js";
import Vue from "vue";
import { DatetimePicker, Popup } from "vant";
Vue.use(DatetimePicker).use(Popup);
export default {
  name: "hbgj_zdqylb_deali",
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#f7f7f7");
  },
  mounted() {
    this.itemEnti = this.$route.params.entity;
    console.log(this.$route.params.entity);
    this.getBaseinfo(this.itemEnti.PSCode);
    this.getPollutantalarm(this.itemEnti.PSCode);
  },
  data() {
    return {
      type: "1", //选项卡选项
      showYear: false, //年显示
      currentYear: new Date(),
      currentYear1: new Date().getFullYear(),
      itemEnti: {},
      indexItem: {},
      list: [],
      starttime: this.getNowDateFun(),
      endtime: this.getNowDateFun(),
      yearFlag: "1"
    };
  },
  updated() {},
  methods: {
    //nowdate
    getNowDateFun: function() {
      // 时间格式化 2019-09-08
      let year = new Date().getFullYear();
      let month = new Date().getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      let day = new Date().getDate();
      if (day < 10) {
        day = "0" + day;
      }
      return year + "-" + month + "-" + day;
    },
    //格式化事件
    timeFormatYear(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month =time.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      let day = time.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      return year + "-" + month + "-" + day;
    },
    //年的确定
    onconfirmYear() {
      this.showYear = false;
      this.currentYear1 = this.timeFormatYear(this.currentYear);
      switch (this.yearFlag) {
        case 1:
          this.starttime = this.currentYear1;
          // this.getPollutantalarm(this.itemEnti.PSCode);
          break;
        case 2:
          this.endtime = this.currentYear1;
          this.getPollutantalarm(this.itemEnti.PSCode);
          break;
        default:
          break;
      }
    },
    //判断是选的哪个图表时间
    showSelectTime: function(index) {
      this.showYear = true;
      this.yearFlag = index;
    },
    //获重点污染源覆盖物详情-污染物情况图表
    getBaseinfo: function(PSCode) {
      var params = {
        PSCode: PSCode
      };
      httpMethod
        .getBaseinfo(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            var result = res.list;
            if (result != null && result.length > 0) {
              this.indexItem = result[0];
            }
          }
        })
        .catch(err => {});
    },
    //重点污染源覆盖物详情-污染物报警
    getPollutantalarm: function(PSCode) {
      var params = {
        PSCode: PSCode,
        BeginAlarmTime: this.starttime,
        EndAlarmTime: this.endtime
      };
      httpMethod
        .getPollutantalarm(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            var result = res.list;
            if (result != null && result.length > 0) {
              this.list = result;
            }else{
               this.list=[];
            }
          }
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
@import "../../../../../../page/zdgz/hbgj/hbgj_wrqy/hbgj_zdqylb/hbgj_zdqylb_deali/hbgj_zdqylb_deali.css";
</style>