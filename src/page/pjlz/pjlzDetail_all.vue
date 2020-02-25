<template>
  <div id="pjlzDeali_fk_top_id" style="margin-top:54px;background:#f7f7f7">
    <pjlzDetailVue :pj_detail="pj_detail"></pjlzDetailVue>
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
import { Tab, Tabs, Search } from "vant";
import dd from "dingtalk-jsapi";
import { Divider } from "vant";
import { httpMethod } from "../../api/getData.js";
import pjlzDetailVue from "@/page/pjlz/pjlzDetail.vue";
Vue.use(Divider);
Vue.use(Tab)
  .use(Tabs)
  .use(Search);
import global_variable from "../../api/global_variable.js";
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
      pj_obj: "",
      pj_detail: "",
    };
  },
  mounted() {
    this.pj_obj = this.$route.params.obj;
    this.getdata();
    console.log(this.pj_obj);
  },
  activated(){
     this.pj_obj = this.$route.params.obj;
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
        this.$route.meta.title = "批件流转";
      }
    },
    getdata: function() {
      let self = this;
      $(".cbfs").removeClass("choose");
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
                  break;
                case "5":
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
    
  }
};
</script>

<style>
</style>