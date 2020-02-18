<template>
  <div style="margin-top:0px;overflow:hidden;">
    <!-- <div class="div_flex" style="background:#ffffff;height:49px;">
      <van-search
        placeholder="请输入重点工程项目名称"
        @search="onSearch"
        v-model="seach_value"
        style="width:85%;margin-left:13px;"
      />
      <img
        @click="showRecord()"
        src="../../../../assets/img/project_voice.png"
        style="height: 27px;margin-top: 10px;"
      />
    </div> -->
    <div style="display: flex;background: #ffffff;height: 36px;">
      <van-popup v-model="showPop" position="bottom" :style="{ height: '200px' }">
        <van-datetime-picker
          v-model="currentDate"
          type="year-month"
          style="height: 200px;"
          @confirm="onconfirm"
        />
      </van-popup>
      <div
        @click="showDatePicker(1)"
        style="width:98px;display: flex;background: #f3f3f3;border-radius: 4px;height: 30px;line-height: 31px;font-size: 14px;margin-left: 20px;padding-right: 15px;"
      >
        <img
          src="../../../../assets/img/project_calendar.png"
          style="height: 17px;margin-top: 6px;margin-right: 10px;margin-left: 10px;"
        />
        <div>{{date1}}</div>
      </div>
      <div style="background: #b7b7b7;height: 1px;width: 20px;margin-left: 10px;margin-top: 14px;"></div>
      <div
        @click="showDatePicker(2)"
        style="width:98px;display: flex;background: #f3f3f3;border-radius: 4px;height: 30px;line-height: 31px;font-size: 14px;margin-left: 10px;padding-right: 15px;"
      >
        <img
          src="../../../../assets/img/project_calendar.png"
          style="height: 17px;margin-top: 6px;margin-right: 10px;margin-left: 10px;"
        />
        <div>{{date2}}</div>
      </div>
      <div
        @click="query_button"
        style="background: rgb(39, 150, 231);height: 26px;color: #ffffff;padding: 1px 10px;font-size: 14px;line-height: 26px;border-radius: 4px;margin-left: 20px;"
      >查询</div>
    </div>

    <div id="count_id" style="display:flex;">
      <div style="width:35%;text-align:right;color:#1976d2;margin-top:6px;font-size:14px;">共</div>
      <div ref="totalCountId" style="color:#1976d2;font-size:24px;">0</div>
      <div style="width:48%;color:#1976d2;margin-top:6px;font-size:14px;">个项目存在问题</div>
    </div>
    <mescroll-vue
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
      style="top: 218px;"
    >
      <div id="newsList" style="padding-left:10px;padding-right:10px;">
        <div
          v-for="(item,index) in list"
          :key="index"
          :class="item.hasCamera=='0'?'backgroundDivPhotonohave':'backgroundDivPhotonohave' "
          style="padding-top:7px;padding-bottom:7px;box-shadow:0px 0px 2px #cccccc;"
          @click="goDetile(item)"
        >
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
                v-if="item.projectNature=='1'"
                style="height:18px;margin-left:5px;margin-top:2px;"
                src="../../../../assets/img/zdgc_ctcysj.png"
              />
              <img
                v-if="item.projectNature=='0'"
                style="height:18px;margin-left:5px;margin-top:2px;"
                src="../../../../assets/img/zdgc_jcss.png"
              />
              <img
                v-if="item.projectNature=='2'"
                style="height:18px;margin-left:5px;margin-top:2px;"
                src="../../../../assets/img/zdgc_cyzx.png"
              />
            </div>
            <div style="display:flex;margin-top:6px;">
              <img
                style="height:14px;margin-left:16px;margin-top:3px;"
                src="../../../../assets/img/project_list_problem.png"
              />
              <div
                class="van-multi-ellipsis--l2"
                style="font-size:13px;margin-left:6px;"
              >{{item.existingProblem}}</div>
            </div>

            <div style="display:flex;margin-top:6px;position:relative;">
              <img
                style="height:14px;margin-left:16px;margin-top:2px;"
                src="../../../../assets/img/project_list_icon4.png"
              />
              <div style="font-size:13px;margin-left:6px;color:#00cc00;">{{item.completionRate}}%</div>
            </div>
          </div>
        </div>
      </div>
    </mescroll-vue>
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
import { httpMethod } from "../../../../api/getData.js";
import Vue from "vue";
import { Search, PullRefresh, Popup } from "vant";
import dd from "dingtalk-jsapi";
Vue.use(Search)
  .use(PullRefresh)
  .use(Popup);
export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  name: "zdgc_czwt",
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
      date1: "开始时间",
      date2: "结束时间",
      flage: 1,
      showPop: false,
      currentDate: new Date(),
      activeClassUldy: -1,
      listZdgcType: [],
      listZdgcDyType: [],
      show: false,
      seach_value: "",
      active: 0,
      list: [],
      starttime: "",
      projectName: "",
      endtime: "",
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
    query_button: function() {
      this.mescroll.resetUpScroll();
    },
    showDatePicker(index) {
      this.showPop = true;
      this.flage = index;
    },
    timeFormat(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return year + "-" + month;
    },
    onconfirm() {
      if (this.flage == 1) {
        this.date1 = this.timeFormat(this.currentDate);
        this.starttime = this.date1;
      } else {
        this.date2 = this.timeFormat(this.currentDate);
        this.endtime = this.date2;
      }
      this.showPop = false;
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
    compareDate(date1, date2) {
      var oDate1 = new Date(date1);
      var oDate2 = new Date(date2);
      if (oDate1.getTime() > oDate2.getTime()) {
        return true; //第一个大
      } else {
        return false; //第二个大
      }
    },
    //项目列表
    upCallback: function(page, mescroll) {
      if (this.starttime != "" && this.endtime != "") {
        var isflag = this.compareDate(this.starttime, this.endtime);
        if (isflag) {
          this.$toast("结束时间应该大于开始时间");
        }
      }
      var params = {
        starttime: this.starttime,
        projectName: this.seach_value,
        endtime: this.endtime,
        page: page.num,
        pageSize: page.size
      };
      httpMethod
        .getVoExistiongPro(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            if (page.num == 1) {
              this.list = [];
              this.$refs.totalCountId.innerHTML = res.total;
              if (res.reportDate != null) {
                this.date1 = res.reportDate;
                this.starttime = this.date1;
              }
              if (res.reportDate != null) {
                this.date2 = res.reportDate;
                this.endtime = this.date2;
              }
            }
            var data = res.dataList;
            if (data && data.length > 0) {
              this.list = this.list.concat(data);
            } else {
              this.list = this.list.concat(data);
            }

            this.$nextTick(() => {
              this.mescroll.endBySize(data.length, res.total);
            });
          } else {
            this.list = [];
          }
        })
        .catch(err => {
          // this.$toast(err);
          mescroll.endErr();
        });
    },
    goDetile(item) {
      //console.log(item);
      this.$router.push({
        path: "/zdgz/zdgc/zdgc_czwt/zdgc_czwt_dali/zdgc_czwt_deali",
        name: "zdgc_czwt_deali",
        params: {
          entity: item
        }
      });
    }
  }
};
</script>
<style scoped>
@import "../../../../page/zdgz/zdgc/zdgc_czwt/zdgc_czwt.css";
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
