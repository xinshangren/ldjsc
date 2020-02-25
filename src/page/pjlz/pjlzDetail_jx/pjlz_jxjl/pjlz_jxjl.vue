<style scoped>
</style>
<template>
  <div id="content" style="background:#f7f7f7">
    <div style="padding-top: 15px;">
      <div 
        v-if="jxjl_list.length>0"
        v-for="obj in jxjl_list"
      style="padding:0px 15px 0px 15px;position: relative;">
        <div style="display: flex;font-size: 15px;margin-top: 0px;">
          <div style="width: 80%;white-space: nowrap; overflow: hidden;text-overflow: ellipsis;">{{obj.apply_content}}</div>
        </div>
        <div style="display: flex;font-size: 14px;margin-top: 13px;color:#666666 ;">
          <div style="display: flex;">
            <img style="height: 18px;" src="../../../../assets/img/icon_people.png" />
            <div style="margin-left: 2px;">申请人:</div>
            <div style="margin-left: 2px;">{{obj.apply_person}}</div>
          </div>
          <div style="display: flex;padding-left:10px;">
            <img style="height: 18px;" src="../../../../assets/img/icon_time.png" />
            <div style="margin-left: 2px;">申请时间:{{obj.apply_time}}</div>
          </div>
        </div>
        <div style="display: flex;font-size: 14px;margin-top: 7px;color:#666666 ;">
          <div style="display: flex;">
            <img style="height: 18px;" src="../../../../assets/img/beicuibanren.png" />
            <div style="margin-left: 2px;">审核人:</div>
            <div style="margin-left: 2px;">{{obj.done_person}}</div>
          </div>
          <div style="display: flex;padding-left:10px;">
            <img style="height: 18px;" src="../../../../assets/img/pjjxjl_aduittime.png" />
            <div style="margin-left: 2px;">审核时间:{{obj.done_time}}</div>
          </div>
        </div>
        <div style="display: flex;font-size: 14px;margin-top: 7px;color:#666666 ;">
          <div style="display: flex;">
            <img style="height: 18px;" src="../../../../assets/img/pjjxjl_status.png" />
            <div style="margin-left: 2px;">审核结果:</div>
            <div style="margin-left: 2px;">{{obj.done_result}}</div>
          </div>
        </div>
        <div v-if="obj.done_reject != null && obj.done_reject.length>0" style="display: flex;font-size: 14px;margin-top: 7px;color:#666666 ;">
          <div style="display: flex;">
            <img style="height: 18px;" src="../../../../assets/img/pjjxjl_refuse.png" />
            <div style="margin-left: 2px;">拒绝结项说明:</div>
            <div style="margin-left: 2px;">{{obj.done_reject}}</div>
          </div>
        </div>
        <van-divider />
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
import { httpMethod } from "../../../../api/getData.js";
Vue.use(Uploader);
Vue.use(Divider);
Vue.use(Tab)
  .use(Tabs)
  .use(Search);
import global_variable from "../../../../api/global_variable.js";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "pjlz_jxjl",
  data() {
    return {
      jxjl_list: [],
      pj_id: ""
    };
  },
  mounted() {
    this.pj_id = this.$route.params.id;
    this.getdata();
    this.pdSingleApp();
  },
  methods: {
    getdata: function() {
      var self = this;
      let approvalInfoId = self.pj_id;
      var params = {
        method: "approvalDoneList",
        //dingUserId: "086404191926187734",
        dingUserId: global_variable.roleJs.dingUserId,
        //corpId: this.seach_value, //机构id
        approvalInfoId: approvalInfoId //批件id
      };
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(params);
          console.log(res);
          if (res.success == "1") {
            res.data.donelist.forEach(element => {
              element.apply_time = element.apply_time.substr(
                0,
                element.apply_time.length - 3
              );
              element.done_time = element.done_time.substr(
                0,
                element.done_time.length - 3
              );
              if(element.done_result != null && element.done_result == '1'){
                element.done_result = "同意结项"
              }
              if(element.done_result != null && element.done_result == '2'){
                element.done_result = "拒绝结项"
              }
              element.done_result 
            });
            self.jxjl_list = res.data.donelist;
          }
        })
        .catch(err => {
          this.$toast(err);
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
        $("#content").css("margin", "0px 0px 10px");
        // $("#pjlzDeali_fk_top_id").css("margin-top","0px");
        this.$route.meta.title = "批件流转";
      }
    }
  }
};
</script>

<style>
</style>