<template>
  <div style="margin-top:0px;overflow:hidden;">
    <div class="div_flex" style="background:#ffffff;height:49px;display:flex;">
      <form action="/" style="width:77%;margin-left:13px;">
        <van-search placeholder="请输入群名称" @search="onSearch" v-model="seach_value" />
      </form>
      <div
        style="
    background: #3098FB;
    color: #ffffff;
    height: 30px;
    padding: 2px 13px;
    line-height: 30px;
    margin-top: 9px;
    border-radius: 5px;
"
        @click="onSearch"
      >查询</div>
    </div>
    <div style="background:#ffffff;">
      <div v-for="(item,index) in list" :key="index" class="groupList">
        <div style="display: flex;position: relative;">
          <img src="../../../assets/img/group.png" class="groupLeftImg"  @click="goDetile(item)" />
          <div style="display:flex;position: relative;width:80%;" @click="sjjq(item)">
            <div style="line-height:33px;margin-left:12px;">{{item.name}}</div>
            <img v-if="item.state==0" class="stateClass" src="../../../assets/img/zt1.png" />
            <img v-if="item.state==1" class="stateClass" src="../../../assets/img/zt2.png" />
            <img v-if="item.state==2" class="stateClass" src="../../../assets/img/zt3.png" />
          </div>
        </div>
      </div>
      <img v-show="isshow" style="width:100%;" src="../../../assets/img/no-data.jpg" />
    </div>
  </div>
</template>

<script>
import { Search } from "vant";
import $ from "jquery";
import { httpMethod } from "../../../api/getData.js";
import global_variable from "../../../api/global_variable.js";
import dd from "dingtalk-jsapi";
export default {
  name: "workqVue",
  data() {
    return {
      seach_value: "",
      list: [],
      isshow: false,
      indexFlag: 0,
      corpId: ""
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
    this.gojq();
    this.getGroupInfo(1);
    var list = [];
    //  console.log(this.$parent.active);

    //  this.$parent.getWorkGroupList(list);
  },
  methods: {
    onSearch: function() {
      this.getGroupInfo(1);
    },
    //获取群列表
    getGroupInfo: function(flag) {
      var params = {
        method: "myGroupList",
        dingUserId: global_variable.userId,
        // dingUserId:"086404192126244705",
        groupId: "",
        groupName: this.seach_value
      };
      httpMethod
        .getGroupInfo(params)
        .then(res => {
          console.log(res);
          if (res.code == "success") {
            this.list = [];
            var datalist = res.data;
            if (datalist != null && datalist.length > 0) {
              this.list = this.list.concat(res.data);
              if (indexFlag == 0) {
                this.$emit("getWorkGroupList", this.list);
                // this.$parent.getWorkGroupList(this.list);
              }
              indexFlag++;
              // this.list =this.list.concat(res.data);
              this.isshow = false;
            } else {
              this.list = [];
              this.isshow = true;
              if (indexFlag == 0) {
                this.$emit("getWorkGroupList", this.list);
                // this.$parent.getWorkGroupList(this.list);
              }
            }
          } else if (res.code == "fail") {
            var list = [];
            this.$emit("getWorkGroupList", list);
            // this.$toast(res.message);
            this.isshow = true;
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    },
    goDetile: function(item) {
      this.$router.push({
        path: "/dingban/workq/workqDeali/workqDeali",
        name: "workqDeali",
        params: {
          entity: item
        },
        query: {
          departId: "8a8180c970012108017003b8e60a0047",
          num: "27",
          menu: "111"
        }
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
            dd.ready(function() {
              dd.config({
                agentId: data.agentId,
                corpId: data.corpId,
                timeStamp: data.timeStamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: ["biz.chat.toConversation", "runtime.info"]
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
    sjjq: function(entity) {
      console.log(entity);
      var self = this;
      dd.ready(function() {
        console.log(self.corpId);
        console.log(entity.groupNumber);
        dd.biz.chat.toConversation({
          corpId: self.corpId, ////企业id,必须是用户所属的企业的corpid
          chatId: entity.groupNumber, //会话Id
          onSuccess: function(info) {
            // console.log(self.corpId);
            // console.log(self.entity.groupNumber);
            // console.log("toConversation info: " + JSON.stringify(info));
          },
          onFail: function(e) {
            console.log("toConversation fail: " + JSON.stringify(e));
            //  this.$toast("系统出现问题，请稍后再试!");
          }
        });
      });
    }
  }
};
</script>

<style scoped>
@import "../../../page/dingban/workq/workq.css";
</style>