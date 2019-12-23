<template>

  <div>
    <van-list id="newslist3" v-model="loading" :finished="finished" @load="onLoad" :offset="60" :error.sync="error"
      error-text="查询失败" style="background: #F7F7F7;padding: 0 13px 13px 13px;overflow-y: auto;">
      <div
        style="display: flex; position: relative; margin-top: 15px; border-radius:12px;border: 1px solid #EFEFEF; background: #ffffff;height: 87px;"
        v-for="item of list" :key="item.id">
        <img :src=item.img style="margin: 15px 10px 15px 10px; width: 60px;height:60px;" />
        <div style="color: #333333;font-size: 15px;margin-top: 20px;">
          <div>
            {{item.realname}}
          </div>
          <div style="margin-top: 20px;">
            {{item.dutyName}}
          </div>
        </div>
        <div style="display: flex; position: absolute; right: 10px;top: 10px;">
          <img src="../../assets/img/phonecall.png" style="width: 50px;height:50px;" @click="goDetile(item)" />
          <img src="../../assets/img/sms.png" style="width: 50px;height:50px;margin-left: 5px;" @click="goSms(item)" />
          <img src="../../assets/img/ding.png" style="width: 50px;height:50px;margin-left: 5px;" @click="goDing(item)" />
        </div>
      </div>
    </van-list>
  </div>

</template>
<script>
  import Vue from "vue";
  import { PullRefresh } from "vant";
  import { httpMethod } from "../../api/getData.js";
  import dd from 'dingtalk-jsapi';
  Vue.use(PullRefresh);
  export default {
    name: "picsnews",
    data() {
      return {
        userId: "8a87821a6b1c0bb4016b1c113e2f0001",//暂时默认
        error: false,
        list: [],
        loading: false, //是否处于加载状态
        finished: false, //是否已加载完所有数据
        isLoading: false, //是否处于下拉刷新状态
        page: 1,
        pageSize: 4,
        corpId: ""
      };
    },
    mounted() {
      var orderHight1 = document.documentElement.clientHeight;
      var heightlist = orderHight1 - 175;
      document.getElementById("newslist3").style.height = heightlist + "px"
      this.gojq()
    },
    methods: {
      getUserOrDepart: function () {
        var params = {
          departId: "2c9bfcdd6c3d7c42016c3d84d4a6000e"
        };
        httpMethod
          .getUserOrDepart(params)
          .then(res => {
            if (res.success == "1") {
              this.list = this.list.concat(res.userList);
              for (var i = 0; i < this.list.length; i++) {
                this.list[i].img = httpMethod.returnBaseUrlFun() + this.list[i].img
              }
              this.finished = true;
            } else if (res.success == "0") {
              this.error = true;
            }
            this.loading = false;
            this.isLoading = false;
          })
          .catch(err => {
            this.$toast(err);
            this.finished = true;
          });
      },
      onRefresh() {
        this.isLoading = false;
        this.finished = true;
      },
      onLoad() {
        //上拉加载
        this.error = false;
        console.log("onLoad");
        this.getUserOrDepart();
      },
      gojq: function () {
        var currentUrl = window.location.href;//当前页面地址 
        if (window.location.hash == "#/") {
          currentUrl = currentUrl.substring(0, currentUrl.indexOf(window.location.hash));
        }
        var params = {
          currentUrl: currentUrl
        };

        httpMethod
          .getConfig(params)
          .then(res => {
            if (res.success == "1") {
              var data = JSON.parse(res.config);
              this.corpId = data.corpId;
              dd.ready(function () {
                dd.config({
                  agentId: data.agentId,
                  corpId: data.corpId,
                  timeStamp: data.timeStamp,
                  nonceStr: data.nonceStr,
                  signature: data.signature,
                  jsApiList: [
                  'runtime.info',
                    'biz.contact.choose',
                    'device.notification.confirm',
                    'device.notification.alert',
                    'device.notification.prompt',
                    'biz.ding.post',
                    'biz.util.openLink',
                    'device.audio',
                    'device.audio.startRecord',
                    'device.audio.stopRecord',
                    'device.audio.translateVoice',
                    'biz.ding.create',
                    'biz.telephone.call',
                    'biz.contact.complexPicker',
                    'biz.util.open',
                    'biz.chat.open',
                    'biz.chat.pickConversation',
                    'biz.user.get',
                    'biz.util.uploadImage',
                    'biz.chat.openSingleChat',
                    'biz.ding.create'
                  ]
                });
                dd.error(function (error) {
                  alert('dd error: ' + JSON.stringify(error));
                });
              });

            } else if (res.success == "0") {
              this.error = true;
            }

          })
          .catch(err => {
            this.$toast(err);

          });
      },
      //打电话
      goDetile(item) {
        var ddd = this.corpId;
        dd.ready(function () {
          dd.biz.telephone.call({
            users: [item.dingid], //用户列表，工号
            corpId: ddd, //企业id
            onSuccess: function () {
            },
            onFail: function (e) {
              alert("打电话错误" + JSON.stringify(e));
            }
          });
        });
      },
      //发消息
      goSms(item) {
        var ddd = this.corpId;
        dd.biz.chat.openSingleChat({
          corpId: ddd, // 企业id,必须是用户所属的企业的corpid
          userId: item.dingid, // 用户的工号
          onSuccess: function () {

          },
          onFail: function (e) {
            alert("发消息" + JSON.stringify(e));
          }
        })
      },
      goDing(item) {
        var ddd = this.corpId;
        dd.biz.ding.create({
          users: [item.dingid],// 用户列表，工号
          corpId: ddd, // 企业id
          type: 1, // 附件类型 1：image  2：link
          alertType: 2, // 钉发送方式 0:电话, 1:短信, 2:应用内
          alertDate: { "format": "yyyy-MM-dd HH:mm", "value": "2019-12-23 08:00" },
          attachment: {
            images: [''],
          }, // 附件信息
          text: '',  // 正文
          bizType: 0, // 业务类型 0：通知DING；1：任务；2：会议；
          confInfo: {
            bizSubType: 0, // 子业务类型如会议：0：预约会议；1：预约电话会议；2：预约视频会议；（注：目前只有会议才有子业务类型）
            location: '某某会议室', //会议地点；（非必填）
            startTime: { "format": "yyyy-MM-dd HH:mm", "value": "2019-12-23 08:00" },// 会议开始时间
            endTime: { "format": "yyyy-MM-dd HH:mm", "value": "2019-12-23 08:00" }, // 会议结束时间
            remindMinutes: 30, // 会前提醒。单位分钟-1：不提醒；0：事件发生时提醒；5：提前5分钟；15：提前15分钟；30：提前30分钟；60：提前1个小时；1440：提前一天；
            remindType: 2 // 会议提前提醒方式。0:电话, 1:短信, 2:应用内
          },

          taskInfo: {
            ccUsers: ['100', '101'], // 抄送用户列表，工号
            deadlineTime: { "format": "yyyy-MM-dd HH:mm", "value": "2015-05-09 08:00" }, // 任务截止时间
            taskRemind: 30// 任务提醒时间，单位分钟0：不提醒；15：提前15分钟；60：提前1个小时；180：提前3个小时；1440：提前一天；
          },

          onSuccess: function () {
            //onSuccess将在点击发送之后调用
          },
          onFail: function () { }
        })
      },
      toast: function () {
        this.$toast('功能开发中');
      }
    },

  };
</script>

<style socped>

</style>