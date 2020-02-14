<template>
  <div style="margin-top:0px;overflow:hidden;">
    <div class="div_flex" style="background:#ffffff;height:49px;display:flex;">
      <form action="/" style="width:77%;margin-left:13px;margin-top:8px;">
        <van-search placeholder="请输入站点名称" @search="onSearch" v-model="seach_value" />
      </form>
      <img   @click="showRecord()" src="../../../../../assets/img/project_voice.png" style="height: 27px;margin-top: 10px;" />
      <img
        src="../../../../../assets/img/project_filtrate.png"
        style="height: 27px;margin-top: 10px;margin-left:5px;"
        @click="queryList"
      />
    </div>
    <div id="count_id" style="display:flex;">
      <div style="width:100%;text-align:center;color:#1976d2;margin-top:6px;font-size:15px;">
        共<span ref="totalCountId">0</span>个站点
      </div>
    </div>

    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
      <div
        id="newsList"
        style="margin-top:3px;margin-left:10px;margin-right:10px;box-shadow:1px 1px 2px 3px  #f3f3f3;"
      >
        <div
          v-for="(item,index) in list"
          :key="index"
         class="backgroundDivPhotonohave"
          style="position:relative;"
          @click="goDetile(item)"
        >
          <div style="padding:7px;">
            <div style="display:flex;position:relative;">
              <img
                style="margin-top:6px;height:14px;"
                src="../../../../../assets/img/icon_list_icon1.png"
              />
              <div class="van-ellipsis" style="width:200px;font-size:15px;">{{item.stationName}}</div>
              <!-- <div style="margin-top:2px;font-size:14px;margin-left:6px;">{{item.stationName}}</div> -->
              <div
                style="position:absolute;right:0px; display: flex;border: 1px solid #1976d2;border-radius: 5px;padding: 1px 5px;margin-left: 4px;"
              >
                <img style="height:20px;" src="../../../../../assets/img/air_type_icon1.png" />
                <div style="margin-left:5px;color:#1976d2;font-size:14px;">{{item.stationType}}</div>
              </div>
            </div>
            <div style="position:relative;display:flex;margin-top:13px;">
              <div style="display:flex;">
                <img style="height:20px;" src="../../../../../assets/img/icon_list_icon2.png" />

                <div
                  v-if="curwuwlx==0"
                  class="selectWrwName"
                  style="font-size:14px;margin-left:5px;"
                >PM10</div>
                <div
                  v-if="curwuwlx==1"
                  class="selectWrwName"
                  style="font-size:14px;margin-left:5px;"
                >PM2.5</div>
                <div
                  v-if="curwuwlx==2"
                  class="selectWrwName"
                  style="font-size:14px;margin-left:5px;"
                >SO2</div>
                <div
                  v-if="curwuwlx==3"
                  class="selectWrwName"
                  style="font-size:14px;margin-left:5px;"
                >NO2</div>
                <div
                  v-if="curwuwlx==4"
                  class="selectWrwName"
                  style="font-size:14px;margin-left:5px;"
                >CO</div>
                <div
                  v-if="curwuwlx==5"
                  class="selectWrwName"
                  style="font-size:14px;margin-left:5px;"
                >O3</div>
                <div
                  v-if="curwuwlx==6"
                  class="selectWrwName"
                  style="font-size:14px;margin-left:5px;"
                >AQI</div>
                <div
                  v-if="curwuwlx==7"
                  class="selectWrwName"
                  style="font-size:14px;margin-left:5px;"
                >TVOC</div>
              </div>
              <div style="display:flex;position:absolute;right:0px;">
                <img style="height:20px;" src="../../../../../assets/img/icon_list_icon3.png" />
                <div
                  :style="{'color':listValue[index].colors1}"
                  style="font-size:14px;margin-left:5px;"
                >{{listValue[index].value1}} {{listValue[index].valueText1}}</div>
              </div>
            </div>
          </div>
          <div class="van-hairline--bottom" style="height:7px;"></div>
        </div>
      </div>
    </mescroll-vue>

    <!-- 挂载到 #app 节点下 -->
    <!-- 自定义图标 -->
    <van-popup
      v-model="show"
      position="top"
      get-container="#count_id"
      :style="{ height: '80%' }"
      @opened="openPop"
      style="overflow:hidden;background:rgb(243, 243, 243);"
    >
      <div style="background:#ffffff;">
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">污染物项目</div>
        <ul id="wrwListDialogId" class="ui-row" style="margin-top: 11px;margin-right: 0px;">
          <li
            v-for="(item,index) in wrwNameList"
            :key="index"
            :id="(item.typecode)"
            class="ui-col ui-col-25 dialogNoSelect"
          >{{item.typename}}</li>
        </ul>

        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">空气质量</div>
        <ul class="ui-row" id="airZlDialogId" style="margin-top: 11px;margin-right: 0px;">
          <li
            v-for="(item,index) in listAirZlList"
            :key="index"
            :id="(item.value)"
            class="ui-col ui-col-25"
            style="text-align: center;"
            @click="airIntent(item,$event)"
          >
            <div v-if="index==0" class="kqzlSelect0"></div>
            <div v-if="index==1" class="kqzlSelect1"></div>
            <div v-if="index==2" class="kqzlSelect2"></div>
            <div v-if="index==3" class="kqzlSelect3"></div>
            <div v-if="index==4" class="kqzlSelect4"></div>
            <div v-if="index==5" class="kqzlSelect5"></div>
            <div v-if="index==6" class="kqzlSelect6"></div>
            <div style="font-size:12px;">{{item.name}}</div>
          </li>
        </ul>
        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">站点筛选</div>
        <ul class="ui-row" id="zdlbDialogId" style="margin-top: 11px;margin-right: 0px;">
          <li
            v-for="(item,index) in stationList"
            :key="index"
            :id="(item.typecode)"
            class="ui-col ui-col-25 dialogNoSelect"
            style="width:30%;"
          >{{item.typename}}</li>
        </ul>

        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="display: flex;background: #f3f3f3;height:110px;">
          <div
            @click="clearType"
            style="width: 50%;height: 36px;background: #ffffff;line-height: 36px;text-align: center;font-size:14px;"
          >重置</div>
          <div
            @click="clickUlDy"
            style="background:#3ca1ec;width: 50%;height: 36px;color:#ffffff;line-height: 36px;text-align: center;font-size:14px;"
          >确定</div>
        </div>
      </div>
    </van-popup>
      <div class="blackBoxSpeak">
      <img style="height:74px;margin-top:32px;" src="../../../../../assets/img/ic_record@2x.png" />
      <img style="height:74px;margin-top:32px;margin-left:16px;" :src="recordUrl9" />
      <div style="font-size: 18px;color: #ffffff;">{{countSize}}秒</div>
      <div style="display:flex;">
        <div
          @click="stopRecord(1)"
          style="width:50%;font-size: 16px;color: #ffffff;text-align:center;"
        >完成识别</div>
        <div
          @click="stopRecord(2)"
          style="width:50%;font-size: 16px;color: #ffffff;text-align:center;"
        >取消识别</div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import MescrollVue from "mescroll.js/mescroll.vue";
import { httpMethod } from "../../../../../api/getData.js";
import { hbgjAirJs } from "../../../../../page/zdgz/hbgj/hbgj_air/hbgj_air_station_list/hbgj_air_station_list.js";
import Vue from "vue";
import dd from "dingtalk-jsapi";
import { Popup } from "vant";
Vue.use(Popup);
export default {
  name: "hbgj_air_station_list",
  components: {
    MescrollVue // 注册mescroll组件
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  activated() {
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  data() {
    return {
        timer: null, //用于清除计时器
      timerJs: null, //用于倒计时60s
      recordId: "0",
      countSize: 5,
      imgIndex: "9",
      mediaId: "",
      backgroundDiv: {
        background:
          'url("../../../../../assets/img/project_filtrate.png") 28px 16px / 64px 104px no-repeat, url("../../../../../assets/img/ic_record_ripple@2x-9.png") 111.2px 32px / 28.8px 88px no-repeat rgba(0, 0, 0, 0.7)'
      },
      recordUrlBack: require("../../../../../assets/img/ic_record@2x.png"),
      recordUrl9: require("../../../../../assets/img/ic_record_ripple@2x-9.png"),
      openIndex: 0,
      listAirZlList: [],
      wrwNameList: [],
      alllevelist: [],
      stationList: [],
      selectWrwNames: "AQI",
      selectWrwNames1: "AQI",
      selectWrwNameList: [],
      curwuwlx: "6",
      curleve: "-1，1，2，3，4，5，6",
      curstation: "1，2，3，4，5，6，7",
      active: 0,
      indexTabImg1: require("../../../../../assets/img/air_home_tab1selected.png"),
      list: [],
      listValue: [],
      curleverlist: [],
      seach_value: "",
      show: false,
      mescroll: null, // mescroll实例对象
      selectWrwNamePage: 0,
      mescrollDown: {
        callback: this.downCallback,
        auto: false
      }, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: {
        // 上拉加载的配置.
        auto: false,
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        //以下是一些常用的配置,当然不写也可以的.
        page: {
          num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10 //每页数据条数,默认10
        },
        htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
        noMoreSize: 5,
        empty: {
          //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
          warpId: "newsList", //父布局的id (1.3.5版本支持传入dom元素)
          //icon: "../../../../assets/img/nodata.png", //图标,默认null,支持网络图
          tip: "暂无相关数据~" //提示
        }
      }
    };
  },
  mounted() {
    this.getAirPollutantsLevel();
    this.getTypeList();
    this.getStationTypeList();
    this.gojq();
  },
  methods: {
      startRecord: function() {
      this.recordId = "1";
      console.log("开始录音");
      dd.ready(function() {
        dd.device.audio.startRecord({
          maxDuration: 5,
          onSuccess: function() {
            //支持最长为300秒（包括）的音频录制，默认60秒(包括)。
            console.log("开始录音成功");
          },
          onFail: function(err) {
            // var blackBoxSpeak = document.querySelector(".blackBoxSpeak");
            // blackBoxSpeak.style.display = "none";
          }
        });
      });
    },
    stopRecord: function(flag) {
      var self = this;
      console.log("停止录音");
      clearInterval(self.timer);
      clearInterval(self.timerJs);
      if (flag == 1) {
        self.recordId = "1";
        //完成识别
        dd.ready(function() {
          dd.device.audio.stopRecord({
            onSuccess: function(res) {
              console.log("停止录音成功");
              console.log(res.mediaId);
              console.log(res.duration);
              self.mediaId = res.mediaId;
              self.translateVoice(res.mediaId);
            },
            onFail: function(err) {}
          });
        });
        var blackBoxSpeak = document.querySelector(".blackBoxSpeak");
        blackBoxSpeak.style.display = "none";
      } else {
        var blackBoxSpeak = document.querySelector(".blackBoxSpeak");
        blackBoxSpeak.style.display = "none";
        //取消识别
        self.recordId = "0";
      }
    },
    //语音识别
    translateVoice: function(mediaIds) {
      
      var self = this;
      console.log("录音识别开始");
      if (self.recordId == "1") {
        self.$store.commit("showLoadingBig");
        dd.ready(function() {
          dd.device.audio.translateVoice({
            mediaId: mediaIds,
            duration: 5.0,
            onSuccess: function(res) {
              self.$store.commit("hideLoadingBig");
              // res.mediaId; // 转换的语音的mediaId
              console.log("录音识别结果：" + res.content);
              var result=self.palindrome(res.content);
              console.log("录音识别结果1：" + result);
              self.seach_value = result; // 语音转换的文字内容
              self.onSearch();
            },
            onFail: function(err) {
              self.$store.commit("hideLoadingBig");
              // var blackBoxSpeak = document.querySelector(".blackBoxSpeak");
              // blackBoxSpeak.style.display = "none";
            }
          });
        });
      }
    },
    onRecordEnd: function() {
      var self = this;
      console.log("监听停止录音");
      dd.ready(function() {
        dd.device.audio.onRecordEnd({
          onSuccess: function(res) {
            console.log("监听停止录音成功");
            console.log(res.mediaId);
            console.log(res.duration);
            self.mediaId = res.mediaId;
            self.translateVoice(res.mediaId);
            clearInterval(self.timer);
            clearInterval(self.timerJs);
            var blackBoxSpeak = document.querySelector(".blackBoxSpeak");
            blackBoxSpeak.style.display = "none";
          },
          onFail: function(err) {}
        });
      });
    },
    palindrome: function(str) {
      var arr = str.split("");
      arr = arr.filter(function(val) {
        return (
          val !== " " &&
          val !== "," &&
          val !== "." &&
          val !== "。" 
        );
      });
      console.log(arr.join("")); //arr变为"0000";
      return arr.join("");
    },
    gojq: function() {
      var currentUrl = window.location.href; //当前页面地址
      var number = currentUrl.indexOf("#");
      currentUrl = currentUrl.substring(0, number);
      console.log(currentUrl);
      var params = {
        currentUrl: currentUrl
      };

      httpMethod
        .getConfig(params)
        .then(res => {
          if (res.success == "1") {
            var data = JSON.parse(res.config);
            console.log(data);
            this.corpId = data.corpId;
            dd.ready(function() {
              dd.config({
                agentId: data.agentId,
                corpId: data.corpId,
                timeStamp: data.timeStamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: [
                  "runtime.info",
                  "biz.contact.choose",
                  "device.notification.confirm",
                  "device.notification.alert",
                  "device.notification.prompt",
                  "biz.ding.post",
                  "biz.util.openLink",
                  "device.audio",
                  "device.audio.startRecord",
                  "device.audio.stopRecord",
                  "device.audio.translateVoice",
                  "device.audio.onRecordEnd",
                  "biz.ding.create",
                  "biz.telephone.call",
                  "biz.contact.complexPicker",
                  "biz.util.open",
                  "biz.chat.open",
                  "biz.chat.pickConversation",
                  "biz.user.get",
                  "biz.util.uploadImage",
                  "biz.chat.openSingleChat",
                  "biz.ding.create",
                  "biz.chat.toConversation"
                ]
              });
              dd.error(function(error) {
                console.log("dd error: " + JSON.stringify(error));
              });
            });
          } else if (res.success == "0") {
            // this.error = true;
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    },
    showRecord: function() {
      this.countSize = 5;
      var blackBoxSpeak = document.querySelector(".blackBoxSpeak");
      var index = [9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      var num = index.length;
      this.timer = null; //用于清除计时器
      this.timerJs = null; //用于倒计时60s
      //直接开启轮播模式
      var indexNum = 5;
      this.setTimer(
        this.timer,
        this.timerJs,
        blackBoxSpeak,
        num,
        indexNum,
        index
      );
      blackBoxSpeak.style.display = "block";
      this.startRecord();
      this.onRecordEnd(); //监听是否
    },
    setTimer: function(timer, timerJs, blackBoxSpeak, num, indexNum, index) {
      var self = this;
      self.timer = setInterval(function() {
        setTimeout(function() {
          num++;
          // this.imgIndex = num;
          self.recordUrl9 = require("../../../../../assets/img/ic_record_ripple@2x-" +
            index[num] +
            ".png");
        }, 70);
        if (num >= index.length - 1) {
          num = 0;
        }
      }, 70);
      self.timerJs = setInterval(function() {
        console.log(indexNum);
        self.countSize = indexNum;
        indexNum = indexNum - 1;
        if (indexNum == 0) {
          setTimeout(function() {
            blackBoxSpeak.style.display = "none";
          }, 1000);
          clearInterval(self.timer);
          clearInterval(self.timerJs);
        }
      }, 1000);
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    onSearch() {
      //alert(this.searchkey);
      this.mescroll.resetUpScroll();
      //this.upCallback()
    },
    downCallback: function() {
      this.listValue = [];
      this.mescroll.resetUpScroll();
    },
    //项目列表
    upCallback: function(page, mescroll) {
      if (this.selectWrwNamePage == 0) {
        this.selectWrwNames1 = "AQI";
      }
      this.selectWrwNamePage++;
      console.log(this.selectWrwNames1);
      var params = {
        dataType: this.curwuwlx,
        wrdj: this.curleve,
        stationName: this.seach_value,
        stationTypeCode: this.curstation,
        page: page.num,
        pageSize: page.size
      };
      httpMethod
        .getStationRealtimeData(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            if (page.num == 1) {
              this.list = [];
              this.$refs.totalCountId.innerHTML = res.total;
            }
            var data = res.dataList;
            if (data && data.length > 0) {
              this.list = this.list.concat(data);
              var valueList = [];
              for (var kk = 0; kk < data.length; kk++) {
                var enti = data[kk];
                var value = ""; //数字值
                var valueText = ""; //汉字描述
                var colors = "";
                switch (parseInt(this.curwuwlx)) {
                  case 0:
                    value = enti.dataPm10;
                    break;
                  case 1:
                    value = enti.dataPm25;
                    break;
                  case 2:
                    value = enti.dataSo2;
                    break;
                  case 3:
                    value = enti.dataNo2;
                    break;
                  case 4:
                    value = enti.dataCo;
                    break;
                  case 5:
                    value = enti.dataO3;
                    break;
                  case 6:
                    value = enti.dataAqi;
                    break;
                  case 7:
                    value = enti.dataVoc;
                    break;
                  default:
                    break;
                }
                if (value == "" || value == null) {
                  value = "";
                  valueText = "无数据";
                } else {
                  var realmax = 0;
                  var realmaxname = "";
                  for (var j = 0; j < this.curleverlist.length; j++) {
                    var min = parseFloat(this.curleverlist[j].levelValueStart);
                    var max = parseFloat(this.curleverlist[j].levelValueEnd);
                    if (max > realmax) {
                      realmax = max;
                      realmaxname = this.curleverlist[j].levelName.trim();
                    }
                    if (value > realmax) {
                      valueText = realmaxname;
                    }
                    if (value >= min && value <= max) {
                      valueText = this.curleverlist[j].levelName.trim();
                      break;
                    }
                  }
                }
                if (valueText == "优") {
                  colors = "#75D492";
                } else if (valueText == "良") {
                  colors = "#C5D686";
                } else if (valueText == "轻度") {
                  colors = "#F0A15C";
                } else if (valueText == "中度") {
                  colors = "#E35E5F";
                } else if (valueText == "重度") {
                  colors = "#B83B5D";
                } else if (valueText == "严重") {
                  colors = "#57155D";
                } else if (valueText == "爆表") {
                  colors = "#25262B";
                } else {
                  colors = "#6699CC";
                }
                var map = {
                  value1: value,
                  valueText1: valueText,
                  colors1: colors
                };
                valueList.push(map);
              }
              this.listValue = this.listValue.concat(valueList);
              // console.log(this.listValue);
            }

            this.$nextTick(() => {
              this.mescroll.endBySize(data.length, res.total);
            });
          }
        })
        .catch(err => {
          // this.$toast(err);
          mescroll.endErr();
        });
    },
    queryList: function() {
      this.show = true;
    },
    //污染物等级
    getAirPollutantsLevel: function() {
      //获取数据
      httpMethod
        .getAirPollutantsLevel("")
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            this.alllevelist = res.data; //总的图例

            for (var Key in this.alllevelist) {
              var name = "";
              switch (parseInt(this.curwuwlx)) {
                case 0:
                  name="PM10"
                  break;
                case 1:
                    name="PM25"
                  break;
                case 2:
                    name="SO2"
                  break;
                case 3:
                    name="NO2"
                  break;
                case 4:
                    name="CO"
                  break;
                case 5:
                    name="O3"
                  break;
                case 6:
                    name="AQI"
                  break;
                case 7:
                    name="TVOC"
                  break;
                default:
                  break;
              }
              var entityList = this.alllevelist[Key];
              if (name == Key) {
                this.curleverlist = entityList;
              }
            }
            this.downCallback();
            var indexdata = res.data; //总数据
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //污染物类型
    getTypeList: function() {
      var params = {
        type: "hjjcx"
      };
      //获取数据
      httpMethod
        .getTypeList(params)
        .then(res => {
          //console.log("站点类型==" + JSON.stringify(res));
          var code = res.success;
          if (code == "1") {
            this.wrwNameList = res.dataList;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    //站点类型
    getStationTypeList: function() {
      var params = {
        type: "station"
      };
      //获取数据
      httpMethod
        .getTypeList(params)
        .then(res => {
          //console.log("站点类型==" + JSON.stringify(res));
          var code = res.success;
          if (code == "1") {
            this.stationList = res.dataList;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    openPop: function() {
      var airList = this.alllevelist;
      var context = this;

      //污染物列表
      $("#wrwListDialogId li").click(function(e) {
        $(this)
          .siblings("li")
          .removeClass("dialogSelect");
        $(this)
          .siblings("li")
          .removeClass("dialogNoSelect");
        $(this)
          .siblings("li")
          .addClass("dialogNoSelect");
        $(this).removeClass("dialogNoSelect");
        $(this).addClass("dialogSelect");
        var text = $(this).html();
        this.curwuwlx = $(this).attr("id");
        console.log(this.curwuwlx);
        if (text == "PM2.5") {
          text = "PM25";
        }
        this.selectWrwNames = text;
        this.selectWrwNames1 = text;
        console.log(this.selectWrwNames1);
        context.listAirZlList = [];
        //初始化所有的空气质量
        $("#airZlDialogId li").each(function() {
          var htmlName = $(this)
            .children("div:eq(1)")
            .text();
          //如果相等则选中或者取消
          var className = $(this)
            .children("div:eq(0)")
            .attr("class");
          var classNameleft = className.substr(0, className.length - 1);
          var classNameRight = className.substr(className.length - 1, 1);
          $(this)
            .children("div:eq(0)")
            .attr("class", "kqzlSelect" + classNameRight);
        });

        for (var Key in airList) {
          var entityList = airList[Key];
          if (this.selectWrwNames == Key) {
            this.curleverlist = entityList;
            var map = {
              name: "无",
              value: "-1"
            };
            context.listAirZlList.push(map);
            //如果选中的污染物和总数据key匹配
            for (var m = 0; m < entityList.length; m++) {
              var entity = entityList[m];
              var levelValueStart = entity.levelValueStart; //范围开始
              var levelValueEnd = entity.levelValueEnd; //范围结束
              var levelName = entity.levelName; //污染等级文字
              var levelCode = entity.levelCode; //污染等级code
              var map = {
                name: levelName,
                value: levelCode
              };
              context.listAirZlList.push(map);
            }
          }
        }
        console.log(this.selectWrwNames);
      });
      //站点列表
      $("#zdlbDialogId li").unbind();
      $("#zdlbDialogId li").click(function(e) {
        if ($(this).hasClass("dialogSelect")) {
          $(this).removeClass("dialogSelect");
          $(this).addClass("dialogNoSelect");
        } else {
          $(this).addClass("dialogSelect");
          $(this).removeClass("dialogNoSelect");
        }
      });

      if (this.openIndex == 0) {
        //站点列表
        $("#zdlbDialogId li").each(function(e) {
          $(this).addClass("dialogSelect");
          $(this).removeClass("dialogNoSelect");
        });
        //初始化 aqi
        $("#wrwListDialogId li").each(function() {
          var text = $(this).html();
          if (text == "AQI") {
            $(this).removeClass("dialogNoSelect");
            $(this).addClass("dialogSelect");
          } else {
            $(this).removeClass("dialogSelect");
            $(this).addClass("dialogNoSelect");
          }
        });

        for (var Key in airList) {
          var entityList = airList[Key];

          if (this.selectWrwNames == Key) {
            context.curleverlist = entityList;
            var map = {
              name: "无",
              value: "-1"
            };
            context.listAirZlList.push(map);
            //如果选中的污染物和总数据key匹配
            for (var m = 0; m < entityList.length; m++) {
              var entity = entityList[m];
              var levelValueStart = entity.levelValueStart; //范围开始
              var levelValueEnd = entity.levelValueEnd; //范围结束
              var levelName = entity.levelName; //污染等级文字
              var levelCode = entity.levelCode; //污染等级code
              var map = {
                name: levelName,
                value: levelCode
              };
              context.listAirZlList.push(map);
            }
          }
        }
      }

      this.openIndex++;
    },
    airIntent: function(item, event) {
      var event = event ? event : window.event;
      var obj = event.srcElement ? event.srcElement : event.target;
      // var $obj = $(obj);
      //  console.log(item.name);
      $("#airZlDialogId li").each(function() {
        var htmlName = $(this)
          .children("div:eq(1)")
          .text();
        if (htmlName == item.name) {
          //如果相等则选中或者取消
          var className = $(this)
            .children("div:eq(0)")
            .attr("class");
          var classNameleft = className.substr(0, className.length - 1);
          var classNameRight = className.substr(className.length - 1, 1);
          if (classNameleft == "kqzlSelect") {
            $(this)
              .children("div:eq(0)")
              .attr("class", "kqzlNoSelect" + classNameRight);
          } else {
            $(this)
              .children("div:eq(0)")
              .attr("class", "kqzlSelect" + classNameRight);
          }
        }
      });
    },
    goDetile(item) {
      //console.log(item);
      this.$router.push({
        path:
          "/zdgz/hbgj/hbgj_air/hbgj_air_station_list/hbgj_air_station_list_deali",
        name: "hbgj_air_station_list_deali",
        params: {
          entity: item
        }
      });
    },
    clearType: function() {
      var context = this;
      var airList = this.alllevelist;
      //初始化 aqi
      $("#wrwListDialogId li").each(function() {
        var text = $(this).html();
        if (text == "AQI") {
          $(this).removeClass("dialogNoSelect");
          $(this).addClass("dialogSelect");
        } else {
          $(this).removeClass("dialogSelect");
          $(this).addClass("dialogNoSelect");
        }
      });
      //站点列表
      $("#zdlbDialogId li").each(function(e) {
        $(this).addClass("dialogSelect");
        $(this).removeClass("dialogNoSelect");
      });
      //初始化所有的空气质量
      $("#airZlDialogId li").each(function() {
        var htmlName = $(this)
          .children("div:eq(1)")
          .text();
        //如果相等则选中或者取消
        var className = $(this)
          .children("div:eq(0)")
          .attr("class");
        var classNameleft = className.substr(0, className.length - 1);
        var classNameRight = className.substr(className.length - 1, 1);
        $(this)
          .children("div:eq(0)")
          .attr("class", "kqzlSelect" + classNameRight);
      });
      this.curwuwlx = "6";
      this.curleve = "-1，1，2，3，4，5，6";
      this.curstation = "1，2，3，4，5，6，7";

      this.mescroll.resetUpScroll();
      this.listValue = [];
      this.list = [];
      this.show = false;
    },
    //确定
    clickUlDy: function() {
      var context = this;

      context.curwuwlx = "";
      context.curleve = "";
      context.curstation = "";
      //空气质量选择
      $("#airZlDialogId li").each(function() {
        var className = $(this)
          .children("div:eq(0)")
          .attr("class");
        var classNameleft = className.substr(0, className.length - 1);
        var classNameRight = className.substr(className.length - 1, 1);
        if (classNameleft == "kqzlSelect") {
          var id = $(this).attr("id");
          if (id != null && id != "") {
            //删除图例的code图例没有code
            if (context.curleve != "") {
              context.curleve += "，" + id;
            } else {
              context.curleve += id;
            }
          }
        }
      });
      //污染物类型
      $("#wrwListDialogId li").each(function() {
        if ($(this).hasClass("dialogSelect")) {
          //console.log($(this).attr("id"));
          context.curwuwlx = $(this).attr("id");
        }
      });
      //站点选择
      $("#zdlbDialogId li").each(function() {
        if ($(this).hasClass("dialogSelect")) {
          var id = $(this).attr("id");

          //删除图例的code图例没有code
          if (context.curstation != "") {
            context.curstation += "，" + id;
          } else {
            context.curstation += id;
          }
        }
      });
      console.log(context.curwuwlx);
      console.log(context.curleve);
      console.log(context.curstation);
      console.log(this.selectWrwNames1);
      this.mescroll.resetUpScroll();
      this.listValue = [];
      this.list = [];
      this.show = false;
    }
  }
};
</script>

<style scoped>
@import "../../../../../page/zdgz/hbgj/hbgj_air/hbgj_air_station_list/hbgj_air_station_list.css";
@import "../../../../../assets/css/frozenui.css";
.blackBoxSpeak {
  width: 156px;
  height: 176px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.7);
  display: none;
  border-radius: 12px;
  text-align: center;
  z-index:999;
}
</style>