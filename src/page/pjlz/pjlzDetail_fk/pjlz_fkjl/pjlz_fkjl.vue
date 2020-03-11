<style scoped>
</style>
<template>
  <div id="content" style="background:#f7f7f7">
    <div style="padding-top: 15px;">
      <div
        style="padding:0px 15px 0px 15px;position: relative;"
        v-if="fkjl_list.length>0"
        v-for="fk in fkjl_list"
      >
        <div style="display: flex;font-size: 16px;margin-top: 0px;">
          <div style="width: 95%;word-break:break-all; overflow: hidden;">{{fk.feedback_content}}</div>
        </div>
        <div style="display: flex;font-size: 14px;margin-top: 13px;color:#666666 ;">
          <div style="display: flex;">
            <img style="height: 18px;" src="../../../../assets/img/icon_people.png" />
            <div style="margin-left: 2px;">反馈人:</div>
            <div style="margin-left: 2px;">{{fk.feedback_person}}</div>
          </div>
          <div style="display: flex;padding-left:10px;">
            <img style="height: 18px;" src="../../../../assets/img/icon_time.png" />
            <div style="margin-left: 2px;">反馈时间:{{fk.feedback_time}}</div>
          </div>
        </div>
        <!-- <div style="display: flex;font-size: 14px;margin-top: 13px;color:#666666 ;">
          <div style="display: flex;width: 100%;">
            <img style="height: 18px;" src="../../../../assets/img/icon_people.png" />
            <div style="margin-left: 2px;">附件:</div>
            <div style="margin-left: 2px;display:flex;width:76%">
              <div
                style="display: flex;width:100%;"
              >
                <div @click="openFj(file)" style="width: 80%;word-break:break-all">d.png</div>
                <a
                  download
                  style="display: flex;background: #DBEEFF;height: 26px;border-radius: 5px;width: 30%;color: #3098fb;"
                >
                  <img
                    style="height: 16px;margin: auto;margin-left: 6px;"
                    src="../../../../assets/img/icon_download_new.png"
                  />
                  <div
                    style="color: #3098fb;font-size: 15px;margin-top: 2px;width: 100%;text-align: center;"
                  >下载</div>
                </a>
              </div>
            </div>
          </div>
        </div> -->
        <img
          style="right: 8px; top: 10px;width: 30px;position: absolute;"
          src="../../../../assets/img/icon_more.png"
          @click="goDetail(fk.id)"
        />
        <van-divider />
      </div>
      <div
        v-else
        style="height:36px ;padding:0px 15px 0px 15px;position: relative;color:#000000;text-align: center;font-size: 18px;"
      >暂无数据</div>
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
import pjlz_fkjl_detail_Vue from "@/page/pjlz/pjlzDetail_fk/pjlz_fkjl/pjlz_fkjl_detail.vue";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "pjlz_fkjl",
  data() {
    return {
      fkjl_list: [],
      pj_id: ""
    };
  },
  mounted() {
    this.pj_id = this.$route.params.id;
    this.getdata();
    this.pdSingleApp();
  },
  activated() {
    this.pj_id =
      this.$route.params.id != null ? this.$route.params.id : this.pj_id;
    this.getdata();
    this.pdSingleApp();
  },
  methods: {
    goDetail: function(id) {
      this.$router.push({
        path: "/pjlz/pjlzDetail_fk/pjlz_fkjl/pjlz_fkjl_detail",
        name: "pjlz_fkjl_detail",
        params: {
          id: id
        }
      });
    },
    getdata: function() {
      var self = this;
      let approvalInfoId = self.pj_id;
      var params = {
        method: "approvalFeedbackList",
        //dingUserId: "086404191926187734",
        dingUserId: global_variable.roleJs.dingUserId,
        //corpId: global_variable.corpId, //机构id
        approvalInfoId: approvalInfoId //批件id
      };
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            // res.data.feedbacklist.forEach(element => {
            //   element.feedback_time = element.feedback_time.substr(
            //     0,
            //     element.feedback_time.length - 5
            //   );
            // });
            self.fkjl_list = res.data.feedbacklist;
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
        this.$route.meta.title = "领导批示办理";
      }
    }
  }
};
</script>

<style>
</style>