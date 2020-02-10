<template>
  <div>
    <van-tabs ref="tabId1" id="tabId1" v-model="active" :sticky="false" :ellipsis="false" line-width="20%"
      style="font-size: 14px;" color="#2796e7" title-inactive-color="#999999" title-active-color="#2796e7"
      @change="tabsclick">
      <!-- <van-tab id="tabone" v-show="isShowTabOne" title="工作群">
        <child5 @getWorkGroupList="getWorkGroupList"></child5>
      </van-tab>-->
      <van-tab title="市委常委" id="8a8180c9700ff44e01701014c9940006">
        <child1 v-on:addPhone="addPhone" :callPhoneList_p="callPhoneList"></child1>
      </van-tab>

      <van-tab title="市政府" id="8a8180c9700ff44e01701015295f0008">
        <child2 style v-on:addPhone="addPhone" :callPhoneList_p="callPhoneList"></child2>
      </van-tab>
      <van-tab title="市委工作部门" id="8a8180c9700ff44e01701016140f000b">
        <child3 style v-on:addPhone="addPhone" :callPhoneList_p="callPhoneList"></child3>
      </van-tab>

      <van-tab title="市政府工作部门" id="8a8180c9700ff44e017010166e88000d">
        <child4 style v-on:addPhone="addPhone" :callPhoneList_p="callPhoneList"></child4>
      </van-tab>
      <van-tab title="各区县委" id="8a8180c9701a1a4b01701ef148c60034">
        <child8 style v-on:addPhone="addPhone" :callPhoneList_p="callPhoneList"></child8>
      </van-tab>
      <van-tab title="各区县委政府" id="402809816c1cc114016c1cc330320003">
        <child6 style v-on:addPhone="addPhone" :callPhoneList_p="callPhoneList"></child6>
      </van-tab>
      <van-tab title="测试工作组" id="8a8180c97018f74601701a042cf4001c">
        <child7 style v-on:addPhone="addPhone" :callPhoneList_p="callPhoneList"></child7>
      </van-tab>
    </van-tabs>
    <div
     id="callButton" style="z-index: 2;display: none; width: 100%; height: 53px; position: absolute;bottom: 0px;
      right: 0px;background-color:#ffffff;">
      <div style=" width:100%;vertical-align: middle;display: flex;margin: 18px 0px 0px 0px;">
        <div style="font-size: 14px;margin-left: 15px;">已选人数:</div>
        <div style="font-size: 14px;width: 49%; margin-left: 1px;color: rgb(48, 152, 251) ">{{callPhoneList.length}}人</div>
        <img id="leftAreaDivId" style=" height: 36px; margin: -9px -3px 0px;" src="../../assets/img/dingtalk_more.png"
          @click="goDingPhone" />
      </div>
    </div>
  </div>
</template>
<script>
  import $ from "jquery";
  import child1 from "@/page/dingban/swszf.vue";
  import child2 from "@/page/dingban/srd.vue";
  import child3 from "@/page/dingban/szx.vue";
  import child4 from "@/page/dingban/dsjyyj.vue";
  import child6 from "@/page/dingban/qxqkfq.vue";
  import child5 from "@/page/dingban/workq/workq.vue";
  import child7 from "@/page/dingban/testdingban.vue";
  import child8 from "@/page/dingban/gqxwsj.vue";
  import { httpMethod } from "../../api/getData.js";
  import global_variable from "../../api/global_variable.js";
  import vhtmlpanel from "@/components/HtmlPanel.vue";
  import dd from "dingtalk-jsapi";
  export default {
    name: "headline",
    data() {
      return {
        corpId: "",
        swszf: [],
        srd: [],
        szx: [],
        dsjyyj: [],
        qxqkfq: [],
        testdingban: [],
        gqxwsj: [],
        callPhoneList: [],
        callButton: false,
        active: 0,
        data: {},
        workGroupList: [],
        isShowTabOne: false,
        url1:
          "http://203.207.104.105:22001/gov-inter/pages/groupManage/myGroupList.html"
        // url1:
        //   "http://203.207.104.105:22001/gov-inter/pages/index.jsp?type=12%25269UFckSUDKYbqp5WXsFeANg%253D%253D&corpId=12%2526zm5I%252B28cxAMS%252B8HHXdo5eHVKvsWXYvgTY07BZfJRnlTqhywqrsMf84vlraBG5RiW"
      };
    },
    mounted() {
      this.doAddAppLogList(
        global_variable.logId,
        global_variable.ddPhone,
        "8",
        "钉办"
      );
      this.gojq();
    },
    methods: {
      gojq: function () {
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
              this.corpId = data.corpId;
              dd.ready(function () {
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
                dd.error(function (error) {
                  alert("dd error: " + JSON.stringify(error));
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
      addPhone: function (map) {
        if (map != null) {
          if (map.flag == "swszf") {
            this.swszf = map.callPhoneList;
          } else if (map.flag == "srd") {
            this.srd = map.callPhoneList;
          } else if (map.flag == "szx") {
            this.szx = map.callPhoneList;
          } else if (map.flag == "dsjyyj") {
            this.dsjyyj = map.callPhoneList;
          } else if (map.flag == "qxqkfq") {
            this.qxqkfq = map.callPhoneList;
          } else if (map.flag == "testdingban") {
            this.testdingban = map.callPhoneList;
          } else if (map.flag == "gqxwsj") {
            this.gqxwsj = map.callPhoneList;
          }
        }
        var a = [];
        var b = a.concat(this.swszf);
        var c = b.concat(this.szx);
        var d = c.concat(this.srd);
        var e = d.concat(this.dsjyyj);
        var f = e.concat(this.qxqkfq);
        var g = f.concat(this.testdingban);
        var h = g.concat(this.gqxwsj);
        if(h.length>35){
          this.$toast("多人通话选择人数不得大于35人");
          return false;
        }else{
          this.callPhoneList = h;
          console.log("父页面");
          console.log(this.callPhoneList);
          if (this.callPhoneList != null && this.callPhoneList.length > 0) {
            this.callButton = true;
            $("#callButton").slideDown("slow");
          } else {
            this.callButton = false;
            $("#callButton").slideUp("slow");
          }
          console.log(this.callButton);
        }
      },
      //群视频会议
      goDingPhone() {
        var ddd = this.corpId;
        var users = this.callPhoneList;
        console.log(users);
        if(users.length == 1 && users[0] == global_variable.userId){
          this.$toast("无法拨打自己电话");
        }else{
          
          if(users.length>0 && users.length <= 35){
            dd.ready(function () {
              dd.biz.telephone.call({
                users: users, //用户列表，工号
                corpId: ddd, //企业id
                onSuccess: function () { },
                onFail: function (e) {
                  console.log(e)
                  this.$toast("钉钉资源不足，请稍后再试");
                }
              });
            });
          }else if(users.length>35){
            this.$toast("多人通话选择人数不得大于35人");
          }else{
            this.$toast("请选择多人通话参与人");
          }
        }
      },
      //获取工作群
      getWorkGroupList: function (list) {
        console.log(list);
        this.workGroupList = list;
        if (list.length > 0) {
          this.isShowTabOne = true;
          //  var tablist = $(".van-tabs__nav.van-tabs__nav--line")
          //   .children(":first")
          //   .css("display", "");
          //    $("#tabone").show();
          // this.active=1;
        } else {
          this.isShowTabOne = false;
          $("#tabone").hide();
          $("#tabId1").children();
          var tablist = $(".van-tabs__nav.van-tabs__nav--line")
            .children(":first")
            .css("display", "none");
          console.log();

          this.active = 1;
          // [0].hide();
        }
        this.$refs.tabId1.resize();
      },
      changeactive: function (data) {
        console.log(data);
        this.active = data;
      },
      tabsclick: function (name, title) {
        console.log(name);
        switch (parseInt(name)) {
          case 1:
            this.doAddAppLogList(
              global_variable.logId,
              global_variable.ddPhone,
              "55",
              "市委市政府"
            );
            break;
          case 2:
            this.doAddAppLogList(
              global_variable.logId,
              global_variable.ddPhone,
              "56",
              "市人大"
            );
            break;
          case 3:
            this.doAddAppLogList(
              global_variable.logId,
              global_variable.ddPhone,
              "57",
              "市政协"
            );
            break;
          case 4:
            this.doAddAppLogList(
              global_variable.logId,
              global_variable.ddPhone,
              "58",
              "大数据应用局"
            );
            break;
          default:
            break;
        }
      }, //获取记录日志的logid
      doAddAppLogList: function (logId, ddPhone, grouping_id, grouping_name) {
        var params = {
          logId: logId,
          ddPhone: ddPhone,
          grouping_id: grouping_id,
          grouping_name: grouping_name
        };
        httpMethod
          .doAddAppLogList(params)
          .then(res => {
            console.log(res);
            if (res.success == "1") {
            }
          })
          .catch(err => {
            // this.$toast(err);
          });
      }
    },
    components: {
      child1,
      child2,
      child3,
      child4,
      child5,
      child6,
      child7,
      child8
    }
  };
</script>

<style socped>
</style>