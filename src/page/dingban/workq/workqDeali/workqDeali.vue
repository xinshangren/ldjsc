<template>
  <div style="margin-top:54px;overflow:hidden;">
    <img style="width:100%;" src="../../../../assets/img/banner.jpg" />

    <div class="workqDealifontClass">
      <div class="workdealiDiv">
        <div>群名称：</div>
        <div style="position: absolute;right: 10px;">{{entity.name}}</div>
      </div>
      <div class="workdealiHeadDiv">
        <div>群管理员：</div>
        <img class="workdealiImgHeadDiv" :src="headUrl" />
        <div style="position: absolute;right: 10px;">{{entity.groupOwner}}</div>
      </div>
      <div class="workdealiDiv">
        <div>群成员数：</div>
        <div style="position: absolute;right: 10px;">{{entity.groupUserNub}}人</div>
      </div>
      <div class="workdealiDiv">
        <div>创建时间：</div>
        <div style="position: absolute;right: 10px;">{{entity.creatDate}}</div>
      </div>
      <div class="workdealiDiv">
        <div>审核状态：</div>
        <div v-if="entity.state==1" style="position: absolute;right: 10px;">审核通过</div>
        <div v-if="entity.state==2" style="position: absolute;right: 10px;">未申请</div>
        <div v-if="entity.state==0" style="position: absolute;right: 10px;">审核中</div>
      </div>
    </div>

    <!-- <div v-if="entity.state==2" class="workdealiBottomButton">申请</div> -->

    <div v-if="entity.state==1" @click="sjjq()" class="workdealiBottomButton">点击进群</div>
  </div>
</template>

<script>
import { Search } from "vant";
import $ from "jquery";
import { httpMethod } from "../../../../api/getData.js";
import global_variable from "../../../../api/global_variable.js";
export default {
  name: "workqDeali",
  data() {
    return {
      seach_value: "",
      list: [],
      isshow: false,
      itemEnti: {},
      headUrl: require("../../../../assets/img/defaultImg.png"),
      entity: {},
      corpId:""
    };
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  activated() {
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  mounted() {
    this.itemEnti = this.$route.params.entity;
    console.log(JSON.stringify(this.$route.params.entity));
    this.gojq();
    this.getGroupInfo(global_variable.userId, this.itemEnti.groupId);
  },
  methods: {
    sjjq: function() {
      dd.ready(function() {
        dd.runtime.info({
          onSuccess: function(info) {
            console.log("runtime info: " + JSON.stringify(info));
          },
          onFail: function(err) {
            console.log("fail: " + JSON.stringify(err));
          }
        });
        dd.biz.chat.toConversation({
          corpId: this.corpId, ////企业id,必须是用户所属的企业的corpid
          chatId: this.entity.groupNumber, //会话Id
          onSuccess: function(info) {
            console.log(this.corpId);
            console.log( this.entity.groupNumber);
            console.log("toConversation info: " + JSON.stringify(info));
          },
          onFail: function(e) {
            console.log("toConversation fail: " + JSON.stringify(e));
             this.$toast("系统出现问题，请稍后再试!");
          }
        });
      });
    },
    //获取群列表
    getGroupInfo: function(dingUserId, groupId) {
      var params = {
        method: "groupDetail",
        dingUserId:dingUserId,
          // dingUserId: "1264283316793072",
        groupId: groupId,
        groupName: ""
      };
      httpMethod
        .getGroupInfo(params)
        .then(res => {
          console.log(res);
          if (res.code == "success") {
            this.entity = res.data;
            if (this.entity.imgUrl != "" || this.entity.imgUrl != null) {
              this.headUrl = this.entity.imgUrl;
            }
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    },
    gojq: function() {
      var currentUrl = window.location.href; //当前页面地址
      if (window.location.hash == "#/") {
        currentUrl = currentUrl.substring(
          0,
          currentUrl.indexOf(window.location.hash)
        );
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
            dd.ready(function() {
              dd.config({
                agentId: data.agentId,
                corpId: data.corpId,
                timeStamp: data.timeStamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: ["runtime.info", "biz.chat.toConversation"]
              });
              dd.error(function(error) {
                alert("dd error: " + JSON.stringify(error));
              });
            });
          } else if (res.success == "0") {
            this.error = true;
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    }
  }
};
</script>

<style scoped>
@import "../../../../page/dingban/workq/workqDeali/workqDeali.css";
</style>