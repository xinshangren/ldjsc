<template>
  <div style="
    margin-top:0px;overflow:hidden;
">
    <!-- <div class="div_flex" style="background:#ffffff;height:49px;display:flex;">
      <form action="/" style="width:77%;margin-left:13px;margin-top:8px;">
        <van-search placeholder="请输入污染源名称" @search="onSearch" v-model="seach_value" />
      </form>
      <img  @click="showRecord()" src="../../../../../assets/img/project_voice.png" style="height: 27px;margin-top: 11px;" /> -->
         <img
      src="../../../../../assets/img/project_filtrate.png"
      style=" height: 26px; top:20px; position: absolute; right: 34.5%; z-index: 3;"
      @click="queryList"
    />
    <!-- </div> -->

    <div id="count_id" style="display:flex;">
      <div style="width:33%;text-align:right;color:#1976d2;margin-top:6px;font-size:14px;">共</div>
      <div ref="totalCountId" style="color:#1976d2;font-size:24px;">0</div>
      <div style="width:48%;color:#1976d2;margin-top:6px;font-size:14px;">个重点污染源</div>
    </div>

    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
      <div id="newsList" style="padding-left:10px;padding-right:10px;">
        <div
          v-for="(item,index) in list"
          :key="index"
          class="backgroundDivPhotonohave"
          style="padding-top:7px;padding-bottom:7px;box-shadow:0px 0px 2px #cccccc;position:relative;"
          @click="goDetile(item)"
        >
          <div style="display:flex;">
            <img
              style="margin-left: 10px;height: 15px;margin-top: 2px;"
              src="../../../../../assets/img/reseau_list_icon1.png"
            />
            <div style="width: 184px;margin-left: 6px;color: #333333;font-size: 14px;" class="van-ellipsis">{{item.PSName}}</div>
            <img
              style="margin-left:10px;height:20px;"
              v-if="item.PSClassName=='一般工业企业'"
              src="../../../../../assets/img/company_pollution_tab1.png"
            />
            <img
              style="margin-left:10px;height:20px;"
              v-if="item.PSClassName=='污水处理厂'"
              src="../../../../../assets/img/company_pollution_tab2.png"
            />
          </div>

          <div style="display:flex;position:relative;margin-top:7px;">
            <img  style="margin-left: 10px;height: 15px;margin-top: 2px;" src="../../../../../assets/img/reseau_list_icon2.png"/>
            <div style="width: 220px;margin-left: 6px;color: #333333;font-size: 14px;" class="van-ellipsis">{{item.PSAddress}}</div>
            <div style="font-size: 13px;color: #12b6ee;padding: 0px 5px;border: 1px solid  #12b6ee;border-radius: 5px;position:absolute;right:19px;"  v-if="item.AttentionDegreeName=='国控'">国控</div>
            <div style="font-size: 13px;color: #ff9900;padding: 0px 5px;border: 1px solid  #ff9900;border-radius: 5px;position:absolute;right:19px;" v-if="item.AttentionDegreeName=='省控'">省控</div>
            <div  style="font-size: 13px;color: #1bdab9;padding: 0px 5px;border: 1px solid  #1bdab9;border-radius: 5px;position:absolute;right:19px;" v-if="item.AttentionDegreeName=='市控'">市控</div>
            <div  style="font-size: 13px;color: #9230e5;padding: 0px 5px;border: 1px solid  #9230e5;border-radius: 5px;position:absolute;right:19px;"  v-if="item.AttentionDegreeName=='非重点污染源'">非重点污染源</div>
          </div>
          <div style="display:flex;margin-top:5px;">
            <img style="margin-top:3px;margin-left:10px;height:15px;" src="../../../../../assets/img/company_list_icon1.png"/>
            <div style="margin-left:4px;font-size: 14px;color: #666666;">{{item.AreaName}}</div>

            <img style="margin-top:3px;margin-left:30px;height:15px;" src="../../../../../assets/img/company_list_icon2.png"/>
            <div style="margin-left:4px;font-size: 14px;color: #666666;">{{item.ValleyName}}</div>

            <img style="margin-top:2px;margin-left:30px;height:15px;" src="../../../../../assets/img/company_list_icon3.png"/>
            <div style="margin-left:4px;font-size: 14px;color: #666666;">是否预警:</div>
            <div v-if="item.warning=='是'" style="margin-left:4px;font-size: 14px;color: #f30011;">{{item.warning}}</div>
            <div v-if="item.warning=='否'" style="margin-left:4px;font-size: 14px;color: #666666;">{{item.warning}}</div>
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
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">污染源类型</div>
        <ul id="wrylxDialogId" class="ui-row" style="margin-top: 11px;margin-right: 15px;">
          <li
            v-for="(item,index) in  typelist"
            :key="index"
            :id="(index)"
            class="ui-col ui-col-50 dialogSelect"
            style="width:43%;"
          >{{item.PSClassName}}</li>
        </ul>

        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">所处区县</div>

        <ul class="ui-row" id="scqxDialogId" style="margin-top: 11px;margin-right: 15px;">
          <li
            v-for="(item,index) in  districtlist"
            :key="index"
            :class="[index==0?'ui-col ui-col-50 dialogSelect':'ui-col ui-col-50 dialogNoSelect']"
            :id="(item.typecode)"
            style="width:43%;"
          >{{item.typename}}</li>
        </ul>
        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">关注程度</div>

        <ul class="ui-row" id="gzcdDialogId" style="margin-top: 11px;margin-right: 15px;">
          <li
            v-for="(item,index) in  attentionlist"
            :key="index"
            :id="(item.AttentionDegreeCode)"
            class="ui-col ui-col-50 dialogSelect"
            style="width:43%;"
          >{{item.AttentionDegreeName}}</li>
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
import echarts from "echarts";
import $ from "jquery";
import dd from "dingtalk-jsapi";
import MescrollVue from "mescroll.js/mescroll.vue";
import { httpMethod } from "../../../../../api/getData.js";
import { hbgjAirJs } from "../../../../../page/zdgz/hbgj/hbgj_wrqy/hbgj_zdqylb/hbgj_zdqylb.js";
import Vue from "vue";
import { Search, PullRefresh, Popup, Dialog } from "vant";
Vue.use(Search)
  .use(PullRefresh)
  .use(Popup)
  .use(Dialog);
export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  name: "hbgj_wgjg_wrylist",
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
      activeClassUldy: -1,
      show: false,
      seach_value: "",
      active: 0,
      list: [],
      typelist: [],
      attentionlist: [],
      districtlist: [],
      zdgzcd: "国控，省控，市控，非重点污染源",
      zdcurtype: "一般工业企业，污水处理厂",
      zdareaName: "全部",
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
          //icon: "../../../../../assets/img/nodata.png", //图标,默认null,支持网络图
          tip: "暂无相关数据~" //提示
        }
      }
    };
  },
  mounted() {
    this.getQueryForFound();
    this.gojq();
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
    queryList: function() {
      this.show = true;
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    onSearch() {
      //alert(this.searchkey);
      this.mescroll.resetUpScroll();
      //this.upCallback()
    },
    //项目列表
    upCallback: function(page, mescroll) {
      var params = {
        PSAddress: this.zdareaName, //区域
        AttentionDegreeNames: this.zdgzcd, //关注程度
        PSClassNames: this.zdcurtype, //污染源类型
        PSName: this.seach_value,
        page: page.num,
        pageSize: page.size,
        type: 1
      };
      httpMethod
        .getBaseinfoCompany(params)
        .then(res => {
          // console.log(JSON.stringify(res));
          if (res.success == "1") {
            if (page.num == 1) {
              this.list = [];
              this.$refs.totalCountId.innerHTML = res.total;
            }
            var data = res.list;
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
    //污染源企业列表筛选字典
    getQueryForFound: function() {
      var params = {
        type: "district"
      };
      httpMethod
        .getQueryForFound(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            this.typelist = res.typelist; //污染源类型
            this.attentionlist = res.attentionlist; //关注程度
            this.districtlist = res.districtlist; //地域数据list
            var map = {
              typecode: "",
              typename: "晋城市"
            };
            this.districtlist.unshift(map);
          }
        })
        .catch(err => {});
    },
    openPop: function() {
      setTimeout(function() {
        var self = this;
        //污染源类型最少选一
        $("#wrylxDialogId li").unbind();
        $("#wrylxDialogId li").click(function(e) {
          if ($(this).hasClass("dialogSelect")) {
            //循环获取选中的
            var index = 0;
            $("#wrylxDialogId li").each(function() {
              var isSelect = $(this).hasClass("dialogSelect");
              var id = $(this).html();
              if (isSelect) {
                index++;
              }
            });
            if (index > 1) {
              $(this).removeClass("dialogSelect");
              $(this).addClass("dialogNoSelect");
            } else {
              self.$toast("最少选择一项");
            }
          } else {
            $(this).addClass("dialogSelect");
            $(this).removeClass("dialogNoSelect");
          }
        });
        //所处区县单选
        $("#scqxDialogId li").unbind();
        $("#scqxDialogId li").click(function(e) {
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
        //关注程度
        $("#gzcdDialogId li").unbind();
        $("#gzcdDialogId li").click(function(e) {
          if ($(this).hasClass("dialogSelect")) {
            $(this).removeClass("dialogSelect");
            $(this).addClass("dialogNoSelect");
          } else {
            $(this).addClass("dialogSelect");
            $(this).removeClass("dialogNoSelect");
          }
        });
      }, 500);
    },
    clickUlDy: function() {
      var context = this;
      context.zdcurtype = ""; //污染源类型
      context.zdgzcd = ""; //关注程度
      context.zdareaName = ""; //区域
      //循环获取污染源类型
      $("#wrylxDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        if (isSelect) {
          if (context.zdcurtype != "") {
            context.zdcurtype += "，" + $(this).html();
          } else {
            context.zdcurtype += $(this).html();
          }
        }
      });
      //所属区域
      $("#scqxDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        var id = $(this).html();
        if (isSelect) {
          if (id === "晋城市") {
            id = "全部";
          }
          if (context.zdareaName != "") {
            context.zdareaName += "，" + id;
          } else {
            context.zdareaName += id;
          }
        }
      });
      //关注程度
      $("#gzcdDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        var id = $(this).html();
        if (isSelect) {
          if (context.zdgzcd != "") {
            context.zdgzcd += "，" + id;
          } else {
            context.zdgzcd += id;
          }
        }
      });
      this.mescroll.resetUpScroll();
      this.show = false;
    },
    clearType: function() {
      var context = this;
      //循环重置查询条件污染源类型
      $("#wrylxDialogId li").each(function() {
        $(this).removeClass("dialogNoSelect");
        $(this).addClass("dialogSelect");
      });
      //循环重置查询条件//所属区域
      $("#scqxDialogId li").each(function() {
        if ($(this).index() == 0) {
          $(this).removeClass("dialogNoSelect");
          $(this).addClass("dialogSelect");
        } else {
          $(this).removeClass("dialogSelect");
          $(this).addClass("dialogNoSelect");
        }
      });
      //循环重置查询条件关注类型
      $("#gzcdDialogId li").each(function() {
        $(this).removeClass("dialogNoSelect");
        $(this).addClass("dialogSelect");
      });

      context.zdgzcd = "国控，省控，市控，非重点污染源";
      context.zdcurtype = "一般工业企业，污水处理厂";
      context.zdareaName = "全部";
      this.mescroll.resetUpScroll();
      this.show = false;
    },
    goDetile(item) {
      //console.log(item);
      this.$router.push({
        path: "/zdgz/hbgj/hbgj_wrqy/hbgj_zdqylb/hbgj_zdqylb_deali/hbgj_zdqylb_deali",
        name: "hbgj_zdqylb_deali",
        params: {
          entity: item
        }
      });
    }
  }
};
</script>

<style scoped>
@import "../../../../../page/zdgz/hbgj/hbgj_wrqy/hbgj_zdqylb/hbgj_zdqylb.css";
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