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

#refuse_div {
  background: url("../../../assets/img/pop_bg.png");
  background-size: 100% 100%;
  height: 270px;
  width: 300px;
  position: relative;
}
</style>
<template>
  <div id="pjlzDeali_fk_top_id" style="margin-top:54px;background:#f7f7f7">
    <pjlzDetailVue :pj_detail="pj_detail"></pjlzDetailVue>
    <div v-show="jx_div" id="jx_div" style="margin:10px 0px 0px 0px;background:#ffffff;min-height: 196px;">
      <div style="padding:10px 15px 0px 15px;position: relative;">
        <div style="display: flex;font-size: 15px;margin-top: 13px">申请说明</div>
        <div style="display: flex;font-size: 15px;margin-top: 5px;color: #666666;">
          <div style="margin:10px ;">{{jx_content}}</div>
        </div>
        <div style="display: flex;">
          <div
            style="display: flex;background: #ffffff;border-radius:20px;width: 39%;border: 1px solid #f44118;
                    margin: auto;
                    margin-top: 8px;
                    height: 40px;"
            @click="refuse"
          >
            <img
              style="height: 18px; margin: 11px 0px 5px 26px;"
              src="../../../assets/img/icon_reject.png"
            />
            <div style="margin-top: 9px; margin-left: 3px; color: #f44118;font-size: 15px;">拒绝结项</div>
          </div>
          <div
            style="display: flex;background: #28bcfe;border-radius:20px;width: 39%;border: 1px solid #28bcfe;
                    margin: auto;
                    margin-top: 8px;
                    height: 40px;"
          >
            <img
              style="height: 18px; margin: 11px 0px 5px 26px;"
              src="../../../assets/img/icon_agree.png"
            />
            <div
              @click="submit_sqjx('1')"
              style="margin-top: 9px; margin-left: 3px; color: #ffffff;font-size: 15px;"
            >同意结项</div>
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model="show" round style="border-radius:13px">
      <div id="refuse_div">
        <img
          @click="close"
          style="height: 25px; position: absolute;right: 0px;"
          src="../../../assets/img/pop_close.png"
        />
        <div style="padding-top:60px;padding: 60px 5px 1px 5px;">
         <van-field
          v-model="refuse_content"
          rows="4"
          autosize
          type="textarea"
          maxlength="150"
          placeholder="请输入反馈内容"
          show-word-limit
          :formatter="formatter(refuse_content)"
          style="font-size: 16px;border: 1px solid #9f9f9f;border-radius: 10px;resize: none;" />
        </div>
        <div style="margin-top:5px;margin-left: 20px;display: flex;width: 257px;">
          <div
            style="display: flex;background: #ffffff;border-radius:20px;width: 40%;border: 1px solid #28bcfe;
                    margin: auto;
                    height: 35px;"
            @click="close"
          >
            <div @click="close" style="margin-top: 6px; margin: auto; color: #28bcfe;font-size: 15px;">取消</div>
          </div>
          <div
            style="display: flex;background: #28bcfe;border-radius:20px;width: 40%;border: 1px solid #28bcfe;
                    margin: auto;
                    height: 35px;"
          >
            <div
              @click="submit_sqjx('0')"
              style="margin-top: 6px; margin: auto; color: #ffffff;font-size: 15px;"
            >提交</div>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
import { Tab, Tabs, Search } from "vant";
import dd from "dingtalk-jsapi";
import { Divider } from "vant";
import { Uploader } from "vant";
import pjlzDetailVue from "@/page/pjlz/pjlzDetail.vue";
import { httpMethod } from "../../../api/getData.js";
Vue.use(Uploader);
Vue.use(Divider);
Vue.use(Tab)
  .use(Tabs)
  .use(Search);
import global_variable from "../../../api/global_variable.js";
import Watermark from '../../../assets/js/watermark'; 
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "pjlzDetail_jx",
  components: {
    pjlzDetailVue
  },
  data() {
    return {
      file_list: [],
      show: false,
      refuse_content: "",
      pj_obj: {},
      pj_detail: "",
      jx_content: "",
      jx_div: true
    };
  },
  mounted() {
    this.jx_content = "";
    this.jx_div = true;
   
    this.pdSingleApp();
    console.log(this.pj_obj);
  },
  activated() {
    this.jx_div = true;
    
    this.pdSingleApp();
    console.log(this.pj_obj);
  },
  methods: {
    formatter(fk_content) {
      //去空格   特殊字符
      let str = fk_content.replace(/\s*/g, "");
      var pattern = new RegExp(
        "[`~@#$^&*=|{}''\\[\\]<>/~@%#￥……&*——|{}【】‘”“'\"]"
      );
      var rs = "";
      for (var i = 0; i < str.length; i++) {
        rs = rs + str.substr(i, 1).replace(pattern, "");
      }
      //去掉 emoji
      var rs = rs.replace(/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig, "");
      this.refuse_content = rs;
      return str;
    },
    //获取用户角色
    getUserInfo: function(id) {
      var self = this;
      dd.ready(function() {
        dd.runtime.permission.requestAuthCode({
          corpId: global_variable.corpId, // 企业id
          onSuccess: function(info) {
            var code = info.code; // 通过该免登授权码可以获取用户身份
            var params = {
              method: "getUserInfo",
              code: code
            };
            httpMethod.getApprovalInfo(params).then(res => {
              console.log(JSON.stringify(res));
              if (res.success == "1") {
                global_variable.roleJs = Object.assign(
                  {},
                  global_variable.roleJs,
                  {
                    dingUserId: res.data.dingUserId,
                    username: res.data.username,
                    role: res.data.role,
                    department: res.data.department
                  }
                );
                Watermark.set(global_variable.roleJs.username+" 领导批示办理");
                // if (global_variable.roleJs.role == "wdk") {
                //   self.jx_div = true;
                // } else {
                //   self.jx_div = false;
                // }
                self.pj_obj.id = id;
                self.getdata();
              }
            });
          },
          onFail: function(err) {
            alert("dd error: " + JSON.stringify(err));
          }
        });
      });
    },
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
        this.$route.meta.title = "领导批示办理";
        var id = url.getValue("id");
        if (id != null && id != "") {
          //推送页面  跳转
          console.log("---------");
          console.log(id);
          this.getUserInfo(id);
        } else {
          //独立app 流转批件详情
          this.pj_obj =
            this.$route.params.obj != null
              ? this.$route.params.obj
              : this.pj_obj;
          this.getdata();
        }
      } else {
        //领导驾驶舱 流转批件详情
        this.pj_obj =
          this.$route.params.obj != null ? this.$route.params.obj : this.pj_obj;
        this.getdata();
      }
    },
    getdata: function() {
      let self = this;
      let approvalInfoId = self.pj_obj.id;
      var params = {
        method: "getApprovalInfo",
        //dingUserId: "086404191926187734",
        dingUserId: global_variable.roleJs.dingUserId,
        //corpId: this.seach_value, //机构id
        approvalInfoId: approvalInfoId //批件id
      };
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            self.pj_detail = res.data;
            // if (
            //   self.pj_detail.approval_manage_person != null &&
            //   self.pj_detail.approval_manage_person != ""
            // ) {
            //   self.pj_detail.approval_manage_person = self.pj_detail.approval_manage_person.split(
            //     ","
            //   );
            // }
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
                  self.jx_div = false;
                  break;
                case "5":
                  self.pj_detail.approval_status = "拒绝结项";
                  break;
                default:
                  break;
              }
            }
            self.jx_content = self.pj_detail.approval_done.done_content;
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    },
    refuse: function() {
      var self = this;
      self.show = true;
    },
    close: function() {
      var self = this;
      self.show = false;
      self.jx_content = "";
    },
    submit_sqjx: function(flag) {
      let self = this;
      let approvalInfoId = self.pj_obj.id;
      let doneResult = flag;
      let rejectReason = "";
      if (flag == "0") {
        rejectReason = self.refuse_content;
      }
      if (flag == "0" && rejectReason == "") {
        this.$toast("请填写拒绝理由");
        return false;
      }
      self.$store.commit("showLoadingBigText", "审核提交中");
      var params = {
        method: "approvalDone",
        //dingUserId: "086404191926187734",
        dingUserId: global_variable.roleJs.dingUserId,
        //corpId: global_variable.corpId, //机构id
        approvalInfoId: approvalInfoId, //批件id
        doneResult: doneResult,
        rejectReason: rejectReason
      };
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(params);
          console.log(res);
           self.$store.commit("hideLoadingBig");
          if (res.success == "1") {
            self.jx_content = "";
            self.getdata();
            self.show = false;
            this.$toast("审核成功");
            self.jx_div = false;
          }
        })
        .catch(err => {
          self.$store.commit("hideLoadingBig");
          this.$toast(err);
        });
    }
  }
};
</script>

<style>
</style>