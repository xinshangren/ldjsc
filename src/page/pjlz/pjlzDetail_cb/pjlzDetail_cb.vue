<style scoped>
.choose {
  color: #2099eb;
}

.cbfs {
  width: 31%;
  height: 47px;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 10px;
}

.tzfs_div {
  width: 57%;
  margin: 13px;
  font-size: 15px;
}
</style>


<template>
  <div id="pjlzDeali_fk_top_id" style="margin-top:54px;background:#f7f7f7">
    <pjlzDetailVue :pj_detail="pj_detail"></pjlzDetailVue>
    <div style="margin:10px 0px 0px 0px;background:#ffffff;min-height: 400px;">
      <div style="padding:15px 15px 0px 15px;position: relative;">
        <div style="display: flex;font-size: 15px;margin-top: 13px">被催办人</div>
        <div
          style="display: flex;font-size: 14px;margin-top: 10px;color:#666666 ;"
        >{{pj_detail.approval_main_person}}</div>
        <van-divider />
      </div>
      <div style="padding:0px 15px 0px 15px;position: relative;">
        <div style="display: flex;font-size: 15px;margin-top: 13px">被催办内容</div>
        <textarea
          v-model="cb_content"
          placeholder="请输入催办内容"
          style="font-size: 15px;margin-top: 10px;border: 1px solid #9f9f9f;border-radius: 10px;resize: none;width: 100%;height: 70px;"
        ></textarea>
        <van-divider />
      </div>
      <div style="padding:0px 15px 0px 15px;position: relative;">
        <div style="display: flex;font-size: 15px;margin-top: 13px">催办方式</div>
        <div style="display: flex;">
          <div
            @click="choose_cbfs('yytz')"
            class="cbfs"
            id="yytz"
            style="margin-left: 0px;"
            :style="{backgroundImage:'url(' + yytz_url + ')',backgroundSize:'cover',backgroundRepeat: 'no-repeat'}"
          >
            <div class="tzfs_div">应用通知</div>
          </div>
          <div
            @click="choose_cbfs('dxtz')"
            class="cbfs"
            id="dxtz"
            :style="{backgroundImage:'url(' + dxtz_url + ')',backgroundSize:'cover',backgroundRepeat: 'no-repeat'}"
          >
            <div class="tzfs_div">短信通知</div>
          </div>
          <div
            @click="choose_cbfs('dhtz')"
            class="cbfs"
            id="dhtz"
            :style="{backgroundImage:'url(' + dhtz_url + ')',backgroundSize:'cover',backgroundRepeat: 'no-repeat'}"
          >
            <div class="tzfs_div">电话通知</div>
          </div>
        </div>
        <div
          style="display: flex;background: #28bcfe;border-radius:20px;width: 64%;
                margin: auto;
                margin-top: 15px;
                height: 40px;"
          @click="execute_cb"
        >
          <img
            style="margin: 11px 0px 9px 62px;height: 20px;"
            src="../../../assets/img/button_urge.png"
          />
          <div
            style="margin-top: 6px; color: #ffffff;font-size: 18px;font-weight: 600;margin-left: 5px;"
          >一键催办</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
import { Tab, Tabs, Search } from "vant";
import dd from "dingtalk-jsapi";
import { Divider } from "vant";
import { httpMethod } from "../../../api/getData.js";
import pjlzDetailVue from "@/page/pjlz/pjlzDetail.vue";
Vue.use(Divider);
Vue.use(Tab)
  .use(Tabs)
  .use(Search);
import global_variable from "../../../api/global_variable.js";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  components: {
    pjlzDetailVue
  },
  name: "pjlzDetail_cb",
  data() {
    return {
      yytz_url: require("../../../assets/img/pic_way1.png"),
      dxtz_url: require("../../../assets/img/pic_way2.png"),
      dhtz_url: require("../../../assets/img/pic_way3.png"),
      yytz_flag: false,
      dxtz_flag: false,
      dhtz_flag: false,
      pj_obj: "",
      pj_detail: "",
      cb_content: "",
      cb_type: ""
    };
  },
  mounted() {
    this.pj_obj = this.$route.params.obj;
    this.getdata();
    console.log(this.pj_obj);
  },
  activated(){
    this.getdata();
    this.pdSingleApp();
    console.log(this.pj_obj);
  },
  methods: {
    //判断是否是单独app
    pdSingleApp: function() {
      String.prototype.getValue = function(parm) {
        var reg = new RegExp("(^|&)" + parm + "=([^&]*)(&|$)");
        var r = this.substr(this.indexOf("?") + 1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
      };
      var hrefUrl = window.location.href;
      var indexUrl = hrefUrl.replace("#", "");

      var url = decodeURI(hrefUrl);
      console.log(url);
      var detail = url.getValue("type");
      console.log("type===" + detail);
      if (detail == "1") {
        // $("#pjlzDeali_fk_id").css("margin", "0px 0px 10px");
        $("#pjlzDeali_fk_top_id").css("margin-top", "0px");
      }
    },
    getdata: function() {
      let self = this;
      let approvalInfoId = self.pj_obj.id;
      var params = {
        method: "getApprovalInfo",
        dingUserId: "086404191926187734",
        // dingUserId: global_variable.roleJs.dingUserId,
        //corpId: this.seach_value, //机构id
        approvalInfoId: approvalInfoId //批件id
      };
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            self.pj_detail = res.data;
            if (
              self.pj_detail.approval_manage_person != null &&
              self.pj_detail.approval_manage_person != ""
            ) {
              self.pj_detail.approval_manage_person = self.pj_detail.approval_manage_person.split(
                ","
              );
            }
            if (self.pj_detail.approval_status != null) {
              switch (self.pj_detail.approval_status) {
                case "0":
                  self.pj_detail.approval_status = "办理中";
                  break;
                case "1":
                  self.pj_detail.approval_status = "已反馈";
                  break;
                case "2":
                  self.pj_detail.approval_status = "未反馈";
                  break;
                case "3":
                  self.pj_detail.approval_status = "申请结项";
                  break;
                case "4":
                  self.pj_detail.approval_status = "已结项";
                  break;
                case 5:
                  self.pj_detail.approval_status = "拒绝结项";
                  break;
                default:
                  break;
              }
            }
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    },
    execute_cb: function() {
      let self = this;
      //判断参数
      let approvalInfoId = self.pj_detail.id;
      let corpId = "";
      let dingUserId = global_variable.userId;
      let warnObjId = self.pj_detail.approval_main_person_dingid;
      let warnContent = self.cb_content;
      let warnType = self.cb_type;
      if (warnContent == "") {
        this.$toast("请填写催办内容");
        return false;
      }
      if (warnType == "") {
        this.$toast("请选择催办方式");
        return false;
      }
      let params = {
        method: "approvalWarn",
        //corpId: corpId,
        dingUserId: "086404191926187734",
        //dingUserId: dingUserId,
        approvalInfoId: approvalInfoId,
        warnObjId: warnObjId,
        warnContent: warnContent,
        warnType: warnType
      };
      console.log(params);
      //生成催办记录
      httpMethod
          .getApprovalInfo(params)
          .then(res => {
            console.log(params)
            console.log(res)
              if (res.success == "1") {
                  this.$toast("催办成功");
              }
          }).catch(err => {
              this.$toast(err);
          });

      //判断催办方式
      // if (warnType == '0') {
      //     self.goDing(params);
      // }else if (warnType == '1'){
      //     self.goSms(params);
      // }else if(warnType == '2'){
      //     self.goCall(params);
      // }

      // if(params.warnType == '0'){
      //     params.warnType == '2'
      //     self.goDing(params)
      // }else if(params.warnType == '2'){
      //     params.warnType == '0'
      //     self.goDing(params)
      // }else{
      //     self.goDing(params)
      // }
    },
    //应用通知
    goDing(item) {
      if (item.warnObjId != null) {
        var ddd = item.dingUserId;
        dd.biz.ding.create({
          users: [item.dingid], // 用户列表，工号
          corpId: ddd, // 企业id
          type: 1, // 附件类型 1：image  2：link
          alertType: item.warnType, // 钉发送方式 0:电话, 1:短信, 2:应用内
          alertDate: { format: "yyyy-MM-dd HH:mm", value: "2019-12-23 08:00" },
          attachment: {
            images: [""]
          }, // 附件信息
          text: item.warnContent, // 正文
          bizType: 0, // 业务类型 0：通知DING；1：任务；2：会议；
          onSuccess: function() {
            //onSuccess将在点击发送之后调用
          },
          onFail: function(e) {
            this.$toast("钉钉资源不足，请稍后再试");
          }
        });
      } else {
        this.$toast("该用户暂未注册");
      }
    },
    //短息通知
    goSms(item) {
      if (item.warnObjId != null) {
        var ddd = item.dingUserId;
        dd.biz.chat.openSingleChat({
          corpId: ddd, // 企业id,必须是用户所属的企业的corpid
          userId: item.warnObjId, // 用户的工号
          text: item.warnContent,
          onSuccess: function() {},
          onFail: function(e) {
            this.$toast("钉钉资源不足，请稍后再试");
          }
        });
      } else {
        this.$toast("该用户暂未注册");
      }
    },
    //电话通知
    goCall(item) {
      if (item.warnObjId != null) {
        var ddd = item.dingUserId;
        dd.ready(function() {
          dd.biz.telephone.call({
            users: item.warnObjId, //用户列表，工号
            corpId: ddd, //企业id
            onSuccess: function() {},
            onFail: function(e) {
              this.$toast("钉钉资源不足，请稍后再试");
            }
          });
        });
      } else {
        this.$toast("该用户暂未注册");
      }
    },
    choose_cbfs: function(str) {
      var self = this;
      self.cb_type = "";
      if (str == "yytz") {
        self.dxtz_flag = false;
        self.dhtz_flag = false;
        $(".cbfs").removeClass("choose");
        self.yytz_url = require("../../../assets/img/pic_way1.png");
        self.dxtz_url = require("../../../assets/img/pic_way2.png");
        self.dhtz_url = require("../../../assets/img/pic_way3.png");
        if (self.yytz_flag) {
          self.yytz_url = require("../../../assets/img/pic_way1.png");
          self.yytz_flag = false;
        } else {
          self.cb_type = "0";
          self.yytz_flag = true;
          $("#yytz").addClass("choose");
          self.yytz_url = require("../../../assets/img/pic_way1_selected.png");
        }
      } else if (str == "dxtz") {
        self.yytz_flag = false;
        self.dhtz_flag = false;
        $(".cbfs").removeClass("choose");
        self.yytz_url = require("../../../assets/img/pic_way1.png");
        self.dxtz_url = require("../../../assets/img/pic_way2.png");
        self.dhtz_url = require("../../../assets/img/pic_way3.png");
        if (self.dxtz_flag) {
          self.dxtz_flag = false;
          self.dxtz_url = require("../../../assets/img/pic_way2.png");
        } else {
          self.cb_type = "1";
          self.dxtz_flag = true;
          $("#dxtz").addClass("choose");
          self.dxtz_url = require("../../../assets/img/pic_way2_selected.png");
        }
      } else if (str == "dhtz") {
        self.yytz_flag = false;
        self.dxtz_flag = false;
        $(".cbfs").removeClass("choose");
        self.yytz_url = require("../../../assets/img/pic_way1.png");
        self.dxtz_url = require("../../../assets/img/pic_way2.png");
        self.dhtz_url = require("../../../assets/img/pic_way3.png");
        if (self.dhtz_flag) {
          self.dhtz_flag = false;
          self.dhtz_url = require("../../../assets/img/pic_way3.png");
        } else {
          self.cb_type = "2";
          self.dhtz_flag = true;
          $("#dhtz").addClass("choose");
          self.dhtz_url = require("../../../assets/img/pic_way3_selected.png");
        }
      }
    }
  }
};
</script>

<style>
</style>