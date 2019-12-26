<template>
  <div style="margin-top:0px;">
    <div style="background:#ffffff;">
      <ul class="ui-row">
        <li class="ui-col ui-col-50" style="position:relative;">
          <div class="wcgk_one_right_driver"></div>
          <div style="display:flex;margin-top:20px;">
            <img
              style="height:28px;margin-left:20px;"
              src="../../../../assets/img/eco_home_icon1.png"
            />
            <div class="wcgk_one_title">全市生产总值</div>
            <img
              style="height: 14px; margin-top: 7px; margin-left: 6px;"
              src="../../../../assets/img/eco_home_more.png"
            />
          </div>
          <div style="display: flex;margin-top: 10px;margin-bottom: 7px;">
            <div style="width:50%;display:flex;position:relative;line-height:18px;">
              <div
                style="width:60%;text-align:right;font-size:17px;color:#0b91ed;margin-left:10px;"
              >{{qssczzEnti.indexdata}}</div>
              <div style="width:40%;font-size:12px;color:#333333;">亿元</div>
            </div>
            <div style="width:50%;display:flex;position:relative;line-height:18px;">
              <div style="font-size:12px;color:#333333;">同比</div>
              <div style="font-size:17px;color:#f30011;">{{qssczzEnti.yonydata}}</div>
              <div style="font-size:12px;color:#333333;">%</div>
              <img
                v-if="qssczzEnti.yonydata>0||qssczzEnti.yonydata==0"
                style="height: 14px;"
                src="../../../../assets/img/eco_rise.png"
              />
              <img
                v-if="qssczzEnti.yonydata<0"
                style="height: 14px;"
                src="../../../../assets/img/eco_down.png"
              />
            </div>
          </div>
        </li>

        <li class="ui-col ui-col-50" style="position:relative;">
          <!-- <div class="wcgk_one_right_driver"></div> -->
          <div style="display:flex;margin-top:20px;">
            <img
              style="height:28px;margin-left:20px;"
              src="../../../../assets/img/eco_home_icon2.png"
            />
            <div class="wcgk_one_title">固定资产投资</div>
            <img
              style="height: 14px; margin-top: 7px; margin-left: 6px;"
              src="../../../../assets/img/eco_home_more.png"
            />
          </div>
          <div style="display: flex;margin-top: 10px;margin-bottom: 7px;">
            <div style="width:50%;display:flex;position:relative;line-height:18px;">
              <div
                style="width:60%;text-align:right;font-size:17px;color:#0b91ed;margin-left:10px;"
              >{{gdzctzEnti.indexdata}}</div>
              <div style="width:40%;font-size:12px;color:#333333;">亿元</div>
            </div>
            <div style="width:50%;display:flex;position:relative;line-height:18px;">
              <div style="font-size:12px;color:#333333;">同比</div>
              <div style="font-size:17px;color:#f30011;">{{gdzctzEnti.yonydata}}</div>
              <div style="font-size:12px;color:#333333;">%</div>
              <img
                v-if="gdzctzEnti.yonydata>0||gdzctzEnti.yonydata==0"
                style="height: 14px;"
                src="../../../../assets/img/eco_rise.png"
              />
              <img
                v-if="gdzctzEnti.yonydata<0"
                style="height: 14px;"
                src="../../../../assets/img/eco_down.png"
              />
            </div>
          </div>
        </li>

        <li class="ui-col ui-col-50" style="position:relative;">
          <div class="wcgk_one_right_driver"></div>
          <div style="display:flex;margin-top:20px;">
            <img
              style="height:28px;margin-left:20px;"
              src="../../../../assets/img/eco_home_icon3.png"
            />
            <div class="wcgk_one_title">一般公共预算收入</div>
            <img
              style="height: 14px; margin-top: 7px; margin-left: 6px;"
              src="../../../../assets/img/eco_home_more.png"
            />
          </div>
          <div style="display: flex;margin-top: 10px;margin-bottom: 7px;">
            <div style="width:50%;display:flex;position:relative;line-height:18px;">
              <div
                style="width:60%;text-align:right;font-size:17px;color:#0b91ed;margin-left:10px;"
              >{{ybggyssrEnti.indexdata}}</div>
              <div style="width:40%;font-size:12px;color:#333333;">亿元</div>
            </div>
            <div style="width:50%;display:flex;position:relative;line-height:18px;">
              <div style="font-size:12px;color:#333333;">同比</div>
              <div style="font-size:17px;color:#f30011;">{{ybggyssrEnti.yonydata}}</div>
              <div style="font-size:12px;color:#333333;">%</div>
              <img
                v-if="ybggyssrEnti.yonydata>0||ybggyssrEnti.yonydata==0"
                style="height: 14px;"
                src="../../../../assets/img/eco_rise.png"
              />
              <img
                v-if="ybggyssrEnti.yonydata<0"
                style="height: 14px;"
                src="../../../../assets/img/eco_down.png"
              />
            </div>
          </div>
        </li>

        <li class="ui-col ui-col-50" style="position:relative;">
          <!-- <div class="wcgk_one_right_driver"></div> -->
          <div style="display:flex;margin-top:20px;">
            <img
              style="height:28px;margin-left:6px;"
              src="../../../../assets/img/eco_home_icon4.png"
            />
            <div class="wcgk_one_title">社会消费品零售总额</div>
            <img
              style="height: 14px; margin-top: 7px; margin-left: 6px;"
              src="../../../../assets/img/eco_home_more.png"
            />
          </div>
          <div style="display: flex;margin-top: 10px;margin-bottom: 7px;">
            <div style="width:50%;display:flex;position:relative;line-height:18px;">
              <div
                v-if="shxfplszeEnti.indexdata!=undefined&&shxfplszeEnti.indexdata!=null"
                style="width:60%;text-align:right;font-size:17px;color:#0b91ed;margin-left:10px;"
              >{{shxfplszeEnti.indexdata}}</div>
              <div style="width:40%;font-size:12px;color:#333333;">亿元</div>
            </div>
            <div style="width:50%;display:flex;position:relative;line-height:18px;">
              <div style="font-size:12px;color:#333333;">同比</div>
              <div style="font-size:17px;color:#f30011;">{{shxfplszeEnti.yonydata}}</div>
              <div style="font-size:12px;color:#333333;">%</div>
              <img
                v-if="shxfplszeEnti.yonydata>0||shxfplszeEnti.yonydata==0"
                style="height: 14px;"
                src="../../../../assets/img/eco_rise.png"
              />
              <img
                v-if="shxfplszeEnti.yonydata<0"
                style="height: 14px;"
                src="../../../../assets/img/eco_down.png"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div style="background:#ffffff;margin-top:10px;padding-top:13px;">
      <div style="display:flex;font-size:14px;color:#333333;line-height:30px;">
        <div style="margin-left:17px;">居民人均可支配收入</div>
        <img
          style="height: 14px;margin-left: 6px;margin-top:9px;"
          src="../../../../assets/img/eco_home_more.png"
        />
      </div>

      <div style="display:flex;">
        <div style="width:50%;">
          <div style="display:flex;line-height:21px;">
            <div
              style="width:60%;text-align:right;color: #0b91ed;font-size: 20px;"
            >{{jmrjkzpsrEnti.indexdata}}</div>
            <div style="width:40%;font-size:13px;margin-left:3px;">元</div>
          </div>
          <div style="color: #666666;font-size: 13px;text-align: center;">人均收入</div>
        </div>
        <div style="width:50%;">
          <div style="display:flex;line-height:21px;">
            <div
              style="width:60%;text-align:right;color: #0b91ed;font-size: 20px;"
            >{{jmrjkzpsrEnti.yonydata}}</div>
            <div style="font-size:13px;margin-left:3px;">%</div>
            <img
              v-if="jmrjkzpsrEnti.yonydata>0||jmrjkzpsrEnti.yonydata==0"
              style="height: 14px;"
              src="../../../../assets/img/eco_rise.png"
            />
            <img
              v-if="jmrjkzpsrEnti.yonydata<0"
              style="height: 14px;"
              src="../../../../assets/img/eco_down.png"
            />
          </div>
          <div style="color: #666666;font-size: 13px;text-align: center;">同比增加</div>
        </div>
      </div>

      <div style="display:flex;height:115px;">
        <div style="width:50%;">
          <div class="wcgk_jmsr_table">
            <div
              style="background: rgb(25, 118, 210);color: rgb(255, 255, 255);font-size: 13px;position: absolute;border-radius: 3px 0px 10px 0px;padding: 6px;"
            >城镇</div>

            <div style="margin-top: 31px;text-align: center;font-size:14px;">人均可支配收入</div>
            <div style="display:flex;margin-top:11px;">
              <div style="width:50%;display:flex;line-height:16px;">
                <div
                  style="width:80%;text-align:right;color:#0b91ed;font-size:17px;"
                >{{czjmrjkzpsrEnti.indexdata}}</div>
                <div style="width:20%;color:#333333;font-size:14px;">元</div>
              </div>
              <div style="width:50%;display:flex;line-height:16px;">
                <div style="font-size:13px;">同比</div>
                <div
                  style="text-align: center;margin-left:5px;color:#f30011;font-size: 17px;"
                >{{czjmrjkzpsrEnti.yonydata}}</div>
                <img
                  v-if="czjmrjkzpsrEnti.yonydata>0||czjmrjkzpsrEnti.yonydata==0"
                  style="height: 14px;"
                  src="../../../../assets/img/eco_rise.png"
                />
                <img
                  v-if="czjmrjkzpsrEnti.yonydata<0"
                  style="height: 14px;"
                  src="../../../../assets/img/eco_down.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div style="width:50%;">
          <div class="wcgk_jmsr_table">
            <div
              style="background: rgb(25, 118, 210);color: rgb(255, 255, 255);font-size: 13px;position: absolute;border-radius: 3px 0px 10px 0px;padding: 6px;"
            >农村</div>

            <div style="margin-top: 31px;text-align: center;font-size:14px;">人均可支配收入</div>
            <div style="display:flex;margin-top:11px;">
              <div style="width:50%;display:flex;line-height:16px;">
                <div
                  style="width:80%;text-align:right;color:#0b91ed;font-size:17px;"
                >{{ncjmrjkzpsrEnti.indexdata}}</div>
                <div style="width:20%;font-size:13px;margin-left:3px;">元</div>
              </div>
              <div style="width:50%;display:flex;line-height:16px;">
                <div style="font-size:13px;">同比</div>
                <div
                  style="text-align: center;margin-left:5px;color:#f30011;font-size: 17px;"
                >{{ncjmrjkzpsrEnti.yonydata}}</div>
                <img
                  v-if="ncjmrjkzpsrEnti.yonydata>0||ncjmrjkzpsrEnti.yonydata==0"
                  style="height: 14px;"
                  src="../../../../assets/img/eco_rise.png"
                />
                <img
                  v-if="ncjmrjkzpsrEnti.yonydata<0"
                  style="height: 14px;"
                  src="../../../../assets/img/eco_down.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="background:#ffffff;margin-top:10px;">
      <div style="display:flex;">
        <div style="width:50%;text-align:center;">
          <div style="display:flex;font-size:14px;color:#333333;line-height:30px;">
            <div style="margin-left:28px;">工业增加值</div>
            <img
              style="height: 14px;margin-left: 6px;margin-top:9px;"
              src="../../../../assets/img/eco_home_more.png"
            />
          </div>

          <div
            style="margin-left:67px;display:flex;position:relative;line-height:16px;margin-top:14px;"
          >
            <div style="font-size:20px;color:#f30011;">{{gyzjzEnti.indexdata}}</div>
            <div style="font-size:12px;color:#333333;">%</div>
            <img
              v-if="gyzjzEnti.indexdata>0||gyzjzEnti.indexdata==0"
              style="height: 14px;"
              src="../../../../assets/img/eco_rise.png"
            />
            <img
              v-if="gyzjzEnti.indexdata<0"
              style="height: 14px;"
              src="../../../../assets/img/eco_down.png"
            />
          </div>
          <div style="font-size: 13px;color: #666666;">工业增加值增长速度</div>
          <img style="height:50px;" src="../../../../assets/img/eco_home_icon5.png" />
        </div>
        <div style="width:60%;text-align:center;">
          <div style="display:flex;font-size:14px;color:#333333;line-height:30px;">
            <div style="margin-left:38px;">海关进出口总额</div>
            <img
              style="height: 14px;margin-left: 6px;margin-top:9px;"
              src="../../../../assets/img/eco_home_more.png"
            />
          </div>
          <div style="display:flex;margin-top:14px;">
            <div style="width:50%;">
              <div style=" display:flex;position:relative;line-height:16px;">
                <div
                  style="font-size:20px;color:#0b91ed;margin-left:21px;"
                >{{hgjckzeEnti.indexdata}}</div>
                <div style="font-size:12px;color:#333333;">亿元</div>
              </div>
              <div style="font-size: 13px;color: #666666;">进出口总额</div>
            </div>
            <div style="width:50%;">
              <div style="display:flex;position:relative;line-height:16px;">
                <div style="font-size:20px;color:#f30011;margin-left:17px;">{{hgjckzeEnti.yonydata}}</div>
                <div style="font-size:12px;color:#333333;">%</div>
                <img
                  v-if="hgjckzeEnti.yonydata>0||hgjckzeEnti.yonydata==0"
                  style="height: 14px;"
                  src="../../../../assets/img/eco_rise.png"
                />
                <img
                  v-if="hgjckzeEnti.yonydata<0"
                  style="height: 14px;"
                  src="../../../../assets/img/eco_down.png"
                />
              </div>
              <div style="font-size: 13px;color: #666666;">同比增长</div>
            </div>
          </div>

          <!-- <div style="font-size: 13px;color: #666666;">工业增加值增长速度</div> -->
          <img style="height:50px;" src="../../../../assets/img/eco_home_icon6.png" />
        </div>
      </div>
    </div>

    <div style="margin-top:10px;background:#ffffff;height:50px;position:relative;">
      <div style="display:flex;">
        <img
          style="height: 27px;margin-top: 11px;margin-left: 16px;"
          src="../../../../assets/img/eco_home_countyicon.png"
        />
        <div style="font-size:15px;color:#333333;line-height:47px;">各区县主要经济指标</div>
      </div>
      <img
        style="top:0px;position: absolute;right: 57px;height: 46px;"
        src="../../../../assets/img/eco_home_countybg.png"
      />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
import { echarsEnti } from "../../../../page/zdgz/zdgc/zdgc_ztqk/zdgc_ztqk.js";
import { httpMethod } from "../../../../api/getData.js";
export default {
  props: ["getChild"],
  name: "zdgc_ztqk_vue",
  data() {
    return {
      show: false,
      qssczzEnti: {}, //全市生产总值
      gdzctzEnti: {}, //固定资产投资
      ybggyssrEnti: {}, //一般公共预算收入
      shxfplszeEnti: {}, //社会消费品零售总额
      jmrjkzpsrEnti: {}, //居民人均可支配收入
      czjmrjkzpsrEnti: {}, //城镇居民人均可支配收入
      ncjmrjkzpsrEnti: {}, //农村居民人均可支配收入
      gyzjzEnti: {}, //工业增加值
      hgjckzeEnti: {}, //海关进出口总额
      dateTime: "",
      indexPage: 0
    };
  },
  mounted() {
    console.log(this.getChild);
    // this.dateTime = this.getChild;
    // var year = this.dateTime.substr(0, 4);
    // var month = this.dateTime.substr(5, this.dateTime.length - 1);
    this.getHomeData("", "");
  },
  methods: {
    changeTitme: function(date) {
      console.log(date);
      this.dateTime = date;
      var year = date.substr(0, 4);
      var month = date.substr(5, date.length - 1);
      this.getHomeData(year, month);
    },
    //第一个头和统计饼图
    getHomeData: function(year, month) {
      var self = this;
      var params = {
        year: year,
        month: month
      };
      httpMethod
        .getHomeData(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            var data = res.date; //数据
            for (var i = 0; i < data.length; i++) {
              var enti = data[i];
              var num = enti.val;
              switch (parseInt(num)) {
                case 1: //全市生产总值
                  this.qssczzEnti = enti;
                  if (
                    this.qssczzEnti.indexdata != null &&
                    this.qssczzEnti.indexdata != undefined
                  ) {
                  } else {
                    this.qssczzEnti.indexdata = "-";
                  }
                  if (
                    this.qssczzEnti.yonydata != null &&
                    this.qssczzEnti.yonydata != undefined
                  ) {
                  } else {
                    this.qssczzEnti.yonydata = "-";
                  }
                  break;
                case 2: //城镇居民人均可支配收入（元）
                  this.czjmrjkzpsrEnti = enti;
                  if (
                    this.czjmrjkzpsrEnti.indexdata != null &&
                    this.czjmrjkzpsrEnti.indexdata != undefined
                  ) {
                  } else {
                    this.czjmrjkzpsrEnti.indexdata = "-";
                  }
                  if (
                    this.czjmrjkzpsrEnti.yonydata != null &&
                    this.czjmrjkzpsrEnti.yonydata != undefined
                  ) {
                  } else {
                    this.czjmrjkzpsrEnti.yonydata = "-";
                  }
                  break;
                case 3: //农村居民人均可支配收入（元）
                  this.ncjmrjkzpsrEnti = enti;
                  if (
                    this.ncjmrjkzpsrEnti.indexdata != null &&
                    this.ncjmrjkzpsrEnti.indexdata != undefined
                  ) {
                  } else {
                    this.ncjmrjkzpsrEnti.indexdata = "-";
                  }
                  if (
                    this.ncjmrjkzpsrEnti.yonydata != null &&
                    this.ncjmrjkzpsrEnti.yonydata != undefined
                  ) {
                  } else {
                    this.ncjmrjkzpsrEnti.yonydata = "-";
                  }
                  break;
                case 4: //工业增加值
                  this.gyzjzEnti = enti;
                  if (
                    this.gyzjzEnti.indexdata != null &&
                    this.gyzjzEnti.indexdata != undefined
                  ) {
                  } else {
                    this.gyzjzEnti.indexdata = "-";
                  }
                  if (
                    this.gyzjzEnti.yonydata != null &&
                    this.gyzjzEnti.yonydata != undefined
                  ) {
                  } else {
                    this.gyzjzEnti.yonydata = "-";
                  }
                  break;
                case 5: //社会消费品零售总额
                  this.shxfplszeEnti = enti;
                  if (
                    this.shxfplszeEnti.indexdata != null &&
                    this.shxfplszeEnti.indexdata != undefined
                  ) {
                    this.shxfplszeEnti.indexdata = parseFloat(
                      this.shxfplszeEnti.indexdata / 10000
                    ).toFixed(2);
                  } else {
                    this.shxfplszeEnti.indexdata = "-";
                  }
                  if (
                    this.shxfplszeEnti.yonydata != null &&
                    this.shxfplszeEnti.yonydata != undefined
                  ) {
                  } else {
                    this.shxfplszeEnti.yonydata = "-";
                  }

                  break;
                case 6: //固定资产投资
                  this.gdzctzEnti = enti;
                  if (
                    this.gdzctzEnti.indexdata != null &&
                    this.gdzctzEnti.indexdata != undefined
                  ) {
                  } else {
                    this.gdzctzEnti.indexdata = "-";
                  }
                  if (
                    this.gdzctzEnti.yonydata != null &&
                    this.gdzctzEnti.yonydata != undefined
                  ) {
                  } else {
                    this.gdzctzEnti.yonydata = "-";
                  }
                  break;
                case 7: //海关进出口总额（亿元）
                  this.hgjckzeEnti = enti;
                  if (
                    this.hgjckzeEnti.indexdata != null &&
                    this.hgjckzeEnti.indexdata != undefined
                  ) {
                  } else {
                    this.hgjckzeEnti.indexdata = "-";
                  }
                  if (
                    this.hgjckzeEnti.yonydata != null &&
                    this.hgjckzeEnti.yonydata != undefined
                  ) {
                  } else {
                    this.hgjckzeEnti.yonydata = "-";
                  }
                  break;
                case 8: //一般公共预算收入
                  this.ybggyssrEnti = enti;

                  if (
                    this.ybggyssrEnti.indexdata != null &&
                    this.ybggyssrEnti.indexdata != undefined
                  ) {
                    this.ybggyssrEnti.indexdata = parseFloat(
                      this.ybggyssrEnti.indexdata / 10000
                    ).toFixed(2);
                  } else {
                    this.ybggyssrEnti.indexdata = "-";
                  }
                  if (
                    this.ybggyssrEnti.yonydata != null &&
                    this.ybggyssrEnti.yonydata != undefined
                  ) {
                  } else {
                    this.ybggyssrEnti.yonydata = "-";
                  }

                  break;
                case 9: //城镇居民人均可支配收入
                  this.jmrjkzpsrEnti = enti;
                  if (
                    this.jmrjkzpsrEnti.indexdata != null &&
                    this.jmrjkzpsrEnti.indexdata != undefined
                  ) {
                  } else {
                    this.jmrjkzpsrEnti.indexdata = "-";
                  }
                  if (
                    this.jmrjkzpsrEnti.yonydata != null &&
                    this.jmrjkzpsrEnti.yonydata != undefined
                  ) {
                  } else {
                    this.jmrjkzpsrEnti.yonydata = "-";
                  }
                  break;
                default:
                  break;
              }
            }
            if (this.indexPage == 0) {
              //  this.$emit('changeTime', res.year + "-" + res.month)
              self.$parent.changeTime(res.year, res.month);
            }
            this.indexPage++;
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
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
      echarsEnti.createEcharsOne(echarts, value, data);
    },
    intentDeali: function(item) {
      // this.$router.push({
      //   path: "/zdgz/zdgc/zdgc_xmlb/zdgc_xmdeali",
      //   name: "zdgc_xmdeali",
      //   params: {
      //     entity: item
      //   }
      // });
    }
  }
};
</script>
<style scoped>
@import "../../../../page/jjyx/jjyx_ztts/jjyx_ztts_wcgk/jjyx_ztts_wcgk.css";
@import "../../../../assets/css/frozenui.css";
</style>
