<template>
  <div style="margin-top:0px;overflow:hidden;">
    <!-- <div class="div_flex" style="background:#ffffff;height:49px;">
      <form action="/" style="width:77%;margin-left:13px;margin-top:8px;">
        <van-search placeholder="请输入重点工程项目名称" @search="onSearch" v-model="seach_value" />
      </form>
      <img
        @click="showRecord()"
        src="../../../../assets/img/project_voice.png"
        style="height: 27px;margin-top: 10px;"
    />-->
    <img
      src="../../../../assets/img/project_filtrate.png"
      style=" height: 26px; top: -81px; position: absolute; right: 34.5%; z-index: 3;"
      @click="queryList"
    />
    <!-- </div> -->
    <div id="count_id" style="display:flex;">
      <div style="width:48%;text-align:right;color:#1976d2;margin-top:6px;font-size:16px;">共</div>
      <div ref="totalCountId" style="color:#1976d2;font-size:24px;">0</div>
      <div style="width:48%;color:#1976d2;margin-top:6px;font-size:16px;">个</div>
    </div>
    <mescroll-vue
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
      style="top:183px;"
    >
      <div id="newsList" style="padding-left:10px;padding-right:10px;">
        <div
          v-for="(item,index) in list"
          :key="index"
          :class="item.hasCamera=='0'?'backgroundDivPhotonohave':'backgroundDivPhotohave' "
          style="padding-top:7px;padding-bottom:7px;box-shadow:0px 0px 2px #cccccc;position:relative;font-size:15px;"
          @click="goDetile(item)"
        >
          <img
            v-if="item.hasCamera=='1'"
            @click="openApp(item,$event)"
            style="height: 22px;position: absolute;right: 18px;top:29px;"
            src="../../../../assets/img/details_camera.png"
          />
          <div>
            <div style="display:flex;">
              <div class="li_div_title">{{item.projectName}}</div>
              <img
                v-if="item.zdProLevel=='2'"
                style="height:20px;margin-left:5px;margin-top:2px;"
                src="../../../../assets/img/project_city.png"
              />
              <img
                v-if="item.zdProLevel=='1'"
                style="height:20px;margin-left:5px;margin-top:2px;"
                src="../../../../assets/img/project_province.png"
              />
              <img
                v-if="item.zdProType=='1'"
                style="height:18px;margin-left:5px;margin-top:2px;"
                src="../../../../assets/img/zdgc_ctcysj.png"
              />
              <img
                v-if="item.zdProType=='0'"
                style="height:18px;margin-left:5px;margin-top:2px;"
                src="../../../../assets/img/zdgc_jcss.png"
              />
              <img
                v-if="item.zdProType=='2'"
                style="height:18px;margin-left:5px;margin-top:2px;"
                src="../../../../assets/img/zdgc_cyzx.png"
              />
            </div>
            <div style="display:flex;margin-top:6px;">
              <img
                style="height:15px;margin-left:16px;"
                src="../../../../assets/img/project_list_icon1.png"
              />
              <div style="font-size:13px;margin-left:6px;">{{item.comName}}</div>
            </div>

            <div style="display:flex;margin-top:6px;position:relative;">
              <img
                style="height:15px;margin-left:16px;"
                src="../../../../assets/img/project_list_icon2.png"
              />
              <div style="font-size:13px;margin-left:6px;">{{item.projectEstimatedTotal}}亿元</div>
              <div style="position: relative;margin-left:56px;">
                <img style="height:20px;" src="../../../../assets/img/project_list_progress_bg.png" />
                <div style="display: flex;position: absolute;top: 0px;left:35px;">
                  <div style="font-size:13px;color:#3ca0ec;">推进进度</div>
                  <div style="font-size:13px;color:#3ca0ec;">+{{item.boost}}%</div>
                </div>
              </div>

              <div style="position: relative;margin-left:3px;">
                <img style="height:15px;" src="../../../../assets/img/project_list_icon4.png" />
                <div style="display: flex;position: absolute;top: 0px;left:23px;">
                  <div
                    v-if="item.rate!=undefined&&item.rate<51"
                    style="font-size:13px;color:#FF4F26;"
                  >{{item.rate}}%</div>
                  <div
                    v-if="item.rate!=undefined&&item.rate>50&&item.rate< 76"
                    style="font-size:13px;color:#FFB423;"
                  >{{item.rate}}%</div>
                  <div
                    v-if="item.rate!=undefined&&item.rate>75&&item.rate< 1000"
                    style="font-size:13px;color:#01CC00;"
                  >{{item.rate}}%</div>
                </div>
              </div>
            </div>

            <div
              style="display:flex;margin-top:0px;position:relative;"
              v-if="item.chargeName!=''&&item.chargeName!=null"
            >
              <img
                style="height:15px;margin-left:16px;"
                src="../../../../assets/img/project_list_icon3.png"
              />
              <div style="font-size:13px;margin-left:6px;">{{item.chargeName}}</div>
              <div
                style="position: absolute;right: 125px;"
                v-if="item.chargePhone!=''"
                @click="callPhone(item.chargePhone,$event)"
              >
                <img style="height:14px;" src="../../../../assets/img/project_list_icon5.png" />
                <div style="display: flex;position: absolute;top: 0px;left:23px;">
                  <div style="font-size:13px;color:#666666;">{{item.chargePhone}}</div>
                  <!-- <img
                    style="height:15px;margin-top:2px;margin-left:5px;"
                    src="../../../../assets/img/project_list_phone.png"
                  />-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </mescroll-vue>

    <!-- 挂载到 #app 节点下 -->
    <!-- 自定义图标 -->
    <van-popup
      v-model="show"
      position="top"
      get-container="#count_id"
      :style="{ height: '65%' }"
      @opened="openPop"
      style="overflow:hidden;background:rgb(243, 243, 243);"
    >
      <div style="background:#ffffff;">
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">进度分类</div>
        <ul id="jdflDialogId" class="ui-row" style="margin-top: 11px;margin-right: 15px;">
          <li id="0" class="ui-col ui-col-50 dialogNoSelect" style="width:27%;">前期</li>
          <li id="1" class="ui-col ui-col-50 dialogNoSelect" style="width:27%;">新建</li>
          <li id="2" class="ui-col ui-col-50 dialogNoSelect" style="width:27%;">续建</li>
        </ul>

        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">项目类型</div>

        <ul class="ui-row" id="xmlxDialogId" style="margin-top: 11px;margin-right: 15px;">
          <li
            v-for="(item,index) in listZdgcType"
            :key="index"
            :id="(index)"
            class="ui-col ui-col-50 dialogNoSelect"
            style="width:43%;"
          >{{item.typename}}</li>
        </ul>
        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">地域类型</div>
        <ul class="ui-row" id="dylxDialogId" style="margin-top: 11px;margin-right: 15px;">
          <li
            v-for="(item,index) in listZdgcDyType"
            :key="index"
            :id="(index)"
            class="ui-col ui-col-25 dialogNoSelect"
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
      <img style="height:74px;margin-top:32px;" src="../../../../assets/img/ic_record@2x.png" />
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
import echarts from "echarts";
import { echarsEnti } from "../../../../page/zdgz/zdgc/zdgc_ztqk/zdgc_ztqk.js";
import { httpMethod } from "../../../../api/getData.js";
import Vue from "vue";
import dd from "dingtalk-jsapi";
import { Search, PullRefresh, Popup, Dialog } from "vant";
import global_variable from "../../../../api/global_variable.js";
Vue.use(Search)
  .use(PullRefresh)
  .use(Popup)
  .use(Dialog);
export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  name: "zdgc_xmlb_vue",
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
          'url("../../../../assets/img/project_filtrate.png") 28px 16px / 64px 104px no-repeat, url("../../../../assets/img/ic_record_ripple@2x-9.png") 111.2px 32px / 28.8px 88px no-repeat rgba(0, 0, 0, 0.7)'
      },
      recordUrlBack: require("../../../../assets/img/ic_record@2x.png"),
      recordUrl9: require("../../../../assets/img/ic_record_ripple@2x-9.png"),
      activeClassUldy: -1,
      listZdgcType: [],
      listZdgcDyType: [],
      show: false,
      active: 0,
      list: [],
      zdProType: "",
      projectName: "",
      buildAddr: "",
      projectNature: "",
      mescroll: null, // mescroll实例对象
      mescrollDown: {}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: {
        // 上拉加载的配置.
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
    this.getTypeList();
    this.getDyTypeList();
    this.gojq();
    var self = this;
  },
  computed: {
    listenComponentState() {
      return this.$store.state.seach_value;
    }
  },
  watch: {
    //监听全局变量componentId的变化
    listenComponentState: function(val, oldval) {
      if (val != oldval) {
        this.seach_value = this.$store.state.seach_value;
        console.log(this.$store.state.seach_value);
        //alert(this.searchkey);
        this.mescroll.resetUpScroll();
      }
    }
  },
  destroyed(){
     this.$store.commit("setSeach_placeholder", "搜索");
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
        self.$store.commit('showLoadingBigText',"语音识别中...");
        dd.ready(function() {
          dd.device.audio.translateVoice({
            mediaId: mediaIds,
            duration: 5.0,
            onSuccess: function(res) {
              self.$store.commit("hideLoadingBig");
              // res.mediaId; // 转换的语音的mediaId
              console.log("录音识别结果：" + res.content);
              var result = self.palindrome(res.content);
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
        return val !== " " && val !== "," && val !== "." && val !== "。";
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
          self.recordUrl9 = require("../../../../assets/img/ic_record_ripple@2x-" +
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
    callPhone: function(phone, event) {
      window.location.href = "tel://" + phone;
      event.stopPropagation();
    },
    openApp: function(item, e) {
      var isTip = localStorage.getItem("isTip");
      if (isTip != undefined) {
        var regionName = item.regionName;
        var hasCamera = item.hasCamera + "";
        if (hasCamera == "1") {
          window.location.href =
            "m://com.hikvision.sdk.app/openwith?projname=" + regionName;
        }
      } else {
        Dialog.alert({
          message: "请先确定已经安装《项目视频监控》apk"
        }).then(() => {
          localStorage.setItem("isTip", "1");
          var regionName = item.regionName;
          var hasCamera = item.hasCamera + "";
          if (hasCamera == "1") {
            window.location.href =
              "m://com.hikvision.sdk.app/openwith?projname=" + regionName;
          }
        });
      }
      e.stopPropagation(); //非IE浏览器
    },
    queryList: function() {
      this.show = true;
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    onSearch() {
      //this.upCallback()
    },
    //项目列表
    upCallback: function(page, mescroll) {
      var params = {
        zdProType: this.zdProType,
        projectName: this.seach_value,
        buildAddr: this.buildAddr,
        projectNature: this.projectNature,
        page: page.num,
        pageSize: page.size
      };
      httpMethod
        .getProReportInfoByzdProType(params)
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
    //重点工程类型
    getTypeList: function() {
      var params = {
        type: "zdxmlx"
      };

      httpMethod
        .getTypeList(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            var data = res.dataList;
            this.listZdgcType = [];
            this.listZdgcType = data;
          }
        })
        .catch(err => {});
    },
    //地域工程类型
    getDyTypeList: function() {
      var params = {
        type: "district"
      };

      httpMethod
        .getTypeList(params)
        .then(res => {
          console.log("-----------------");
          if (res.success == "1") {
            var data = res.dataList;
            this.listZdgcDyType = [];
            this.listZdgcDyType = data;
            $(function() {});
          }
        })
        .catch(err => {});
    },
    openPop: function() {
      //地域类型
      $("#dylxDialogId li").off("click");
      $("#dylxDialogId li").click(function(e) {
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
      });
      $("#jdflDialogId li").off("click");
      //选择进度类型
      $("#jdflDialogId li").click(function(e) {
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
      });
      $("#xmlxDialogId li").off("click");
      //选择项目类型
      $("#xmlxDialogId li").click(function(e) {
        if ($(this).hasClass("dialogSelect")) {
          $(this).removeClass("dialogSelect");
          $(this).addClass("dialogNoSelect");
        } else {
          $(this).addClass("dialogSelect");
          $(this).removeClass("dialogNoSelect");
        }
      });
    },
    clickUlDy: function() {
      var context = this;
      //循环获取选中的进度类型
      $("#jdflDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        if (isSelect) {
          console.log($(this).attr("id"));
          context.projectNature = $(this).attr("id");
        }
      });

      //循环获取选中的地域类型
      $("#dylxDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        if (isSelect) {
          context.buildAddr = $(this).attr("id");
        }
      });

      //循环获取选中的项目类型
      $("#xmlxDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        var id = $(this).attr("id");
        if (isSelect) {
          if (context.zdProType != "") {
            context.zdProType += "，" + id;
          } else {
            context.zdProType += id;
          }
        }
      });
      this.mescroll.resetUpScroll();
      this.show = false;
    },
    clearType: function() {
      var context = this;
      //循环重置查询条件
      $("#jdflDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
      });
      //循环重置查询条件
      $("#xmlxDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
      });
      //循环重置查询条件
      $("#dylxDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
      });

      context.zdProType = "";
      context.buildAddr = "";
      context.projectNature = "";
      this.mescroll.resetUpScroll();
      this.show = false;
    },
    goDetile(item) {
      //console.log(item);
      this.$router.push({
        path: "/zdgz/zdgc/zdgc_xmlb/zdgc_xmdeali",
        name: "zdgc_xmdeali",
        params: {
          entity: item
        }
      });
    }
  }
};
</script>
<style scoped>
@import "../../../../page/zdgz/zdgc/zdgc_xmlb/zdgc_xmlb.css";
@import "../../../../assets/css/frozenui.css";
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
}
</style>
