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
    <div style="margin:10px 0px 0px 0px;background:#ffffff;min-height: 250px;">
      <div style="padding:10px 15px 10px 15px;position: relative;">
        <div style="display: flex;font-size: 15px;margin-top: 13px">工作反馈</div>
        <textarea
          v-model="fk_content"
          placeholder="请输入反馈内容"
          style="font-size: 15px;margin-top: 10px;border: 1px solid #9f9f9f;border-radius: 10px;resize: none;width: 100%;height: 70px;"
        ></textarea>
        <van-uploader
          v-model="file_list"
          multiple
          :after-read="afterRead"
          :preview-image="false"
          accept="*"
        >
          <div style="display: flex;font-size: 15px;margin-top: 15px;color:#2599e6">
            <img style="height: 18px;" src="../../../assets/img/icon_accessory.png" />
            <div style="margin-left: 5px;">添加附件</div>
          </div>
        </van-uploader>
        <div
          v-for="(item,index) of file_list"
          style="display: flex;font-size: 14px;color:#2599e6 ;"
        >
          <div @click="preview_adjunct(item)">{{item.file.name}}</div>
          <img
            @click="delete_adjunct(index)"
            style="height: 20px;margin-left: 5px;"
            src="../../../assets/img/icon_delete.png"
          />
        </div>
        <div
          style="display: flex;background: #28bcfe;border-radius:20px;width: 64%;
                margin: auto;
                margin-top: 15px;
                height: 40px;"
        >
          <div
            style="margin: auto;margin-top: 6px;margin-bottom: 6px; color: #ffffff;font-size: 18px;"
            @click="submit_fk"
          >提交</div>
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
import { Uploader } from "vant";
import { ImagePreview } from "vant";
import { httpMethod } from "../../../api/getData.js";
import pjlzDetailVue from "@/page/pjlz/pjlzDetail.vue";
Vue.use(ImagePreview);
Vue.use(Uploader);
Vue.use(Divider);
Vue.use(Tab)
  .use(Tabs)
  .use(Search);
import global_variable from "../../../api/global_variable.js";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "pjlzDetail_fk",
  components: {
    pjlzDetailVue
  },
  data() {
    return {
      overdue: true,
      file_one: {},
      file_list: [],
      pj_obj: "",
      pj_detail: "",
      fk_content: ""
    };
  },
  mounted() {
    this.getdata();
    this.pdSingleApp();
    console.log(this.pj_obj);
  },
  activated() {
    this.getdata();
    this.pdSingleApp();
    console.log(this.pj_obj);
  },
  beforeRouteEnter(to, from, next) {
    console.log(from);
    console.log(to);
    if (to.name == "pjlzDetail_fk") {
      to.meta.keepAlive = true;
    }
    next();
  },
  beforeRouteLeave(to, from, next) {
    // console.log(from);
    // console.log(to);
    if (to.name == "pjlzListvue") {
      from.meta.keepAlive = false;
    }
    next();
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
      self.pj_obj = self.$route.params.obj;
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
            if (self.pj_detail.approval_feedback != null) {
              self.last_feedback = self.pj_detail.approval_feedback;
            }
            if (self.pj_detail.approval_warn != null) {
              self.last_warn = self.pj_detail.approval_warn;
            }
            if (self.pj_detail.approval_done != null) {
              self.last_done = self.pj_detail.approval_done;
            }
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    },
    //附件读取后操作
    afterRead: function() {
      var file = this.file_list.slice(-1)[0];
      //单个附件上传
      var approvalInfoId = this.pj_detail.id;
      var params = {
        method: "attachUpload",
        dingUserId: "086404191926187734",
        // dingUserId: global_variable.roleJs.dingUserId,
        //corpId: global_variable.corpId, //机构id
        approvalInfoId: approvalInfoId, //批件id
        // approvalInfoId: "5",
        attach: file.file
      };
      let formData = new FormData();
      formData.append("method", "attachUpload");
      formData.append("dingUserId", "086404191926187734");
      formData.append("approvalInfoId", approvalInfoId);
      formData.append("attach", file.file);
      console.log(formData.get("attach"));
      console.log(formData.get("method"));
       this.instance.post(httpMethod.returnBaseUrlFun()+"dingTalkController.action?fileUpload",formData).then((res)=>{
                    console.log(res);
            })
      // httpMethod
      //   .fileUpload(formData)
      //   .then(res => {
      //     console.log(res);
      //     if (res.success == "1") {
      //     }
      //   })
      //   .catch(err => {
      //     this.$toast(err);
      //   });
    },
    //删除上传附件
    delete_adjunct: function(index) {
      this.file_list.splice(index, 1);
    },
    //预览
    preview_adjunct: function(item) {},
    submit_fk: function() {
      let self = this;
      let approvalInfoId = self.pj_obj.id;
      let feedbackContent = self.fk_content;
      if (feedbackContent == "") {
        this.$toast("请填写反馈内容");
        return false;
      }
      var params = {
        method: "approvalFeedback",
        dingUserId: "086404191926187734",
        // dingUserId: global_variable.roleJs.dingUserId,
        //corpId: global_variable.corpId, //机构id
        approvalInfoId: approvalInfoId, //批件id
        feedbackContent: feedbackContent,
        attachIds: ""
      };
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(params);
          console.log(res);
          if (res.success == "1") {
            self.fk_content = "";
            self.getdata();
            this.$toast("提交成功");
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    }
  }
};
</script>

<style>
</style>