<style scoped>
</style>
<template>
  <div id="content" style="background:#f7f7f7">
    <div style="padding-top: 15px;">
      <div
        v-if="cbjl_list.length>0"
        v-for="obj in cbjl_list"
        style="padding:0px 15px 0px 15px;position: relative;"
      >
        <div style="display: flex;font-size: 15px;margin-top: 0px;">
          <div
            style="width: 80%;white-space: nowrap; overflow: hidden;text-overflow: ellipsis;"
          >{{obj.warn_content}}</div>
        </div>
        <div style="display: flex;font-size: 14px;margin-top: 13px;color:#666666 ;">
          <div style="display: flex;">
            <img style="height: 18px;" src="../../../../assets/img/icon_people.png" />
            <div style="margin-left: 2px;">催办人:</div>
            <div style="margin-left: 2px;">{{obj.warn_person}}</div>
          </div>
          <div style="display: flex;padding-left:10px;">
            <img style="height: 18px;" src="../../../../assets/img/icon_time.png" />
            <div style="margin-left: 2px;">催办时间:{{obj.warn_time}}</div>
          </div>
        </div>
        <div style="display: flex;font-size: 14px;margin-top: 7px;color:#666666 ;">
          <div style="display: flex;">
            <img style="height: 18px;" src="../../../../assets/img/beicuibanren.png" />
            <div style="margin-left: 2px;">被催办人:</div>
            <div style="margin-left: 2px;">{{obj.warn_obj_person}}</div>
          </div>
          <div style="display: flex;padding-left:10px;">
            <img style="height: 18px;" src="../../../../assets/img/cuibanfangshi.png" />
            <div style="margin-left: 2px;">催办方式:</div>
            <div style="margin-left: 2px;">{{obj.warn_type}}</div>
          </div>
        </div>
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
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "pjlz_cbjl",
  data() {
    return {
      cbjl_list: [],
      pj_id: ""
    };
  },
  mounted() {
    this.pj_id = this.$route.params.id;
    this.getdata();
    this.pdSingleApp();
  },
  activated(){
    this.pj_id = this.$route.params.id!=null?this.$route.params.id:this.pj_id;
    this.getdata();
    this.pdSingleApp();
  },
  methods: {
    getdata: function() {
      var self = this;
      let approvalInfoId = self.pj_id;
      var params = {
        method: "approvalWarnList",
        //dingUserId: "086404191926187734",
        dingUserId: global_variable.roleJs.dingUserId,
        //corpId: global_variable.corpId, //机构id
        approvalInfoId: approvalInfoId //批件id
      };
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(params);
          console.log(res);
          if (res.success == "1") {
            res.data.warnlist.forEach(element => {
              //转换 通知方式 
              if (element.warn_type == "0") {
                element.warn_type = "应用通知";
              } else if (element.warn_type == "1") {
                element.warn_type = "短信通知";
              } else if (element.warn_type == "2") {
                element.warn_type = "电话通知";
              }
              //时间格式化 去掉  ：秒.0
              element.warn_time = element.warn_time.substr(0,element.warn_time.length-5);
            });
            self.cbjl_list = res.data.warnlist;
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