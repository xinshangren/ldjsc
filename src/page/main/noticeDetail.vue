<template>
  <div style="margin-top:54px;background:#ffffff;">
    <div :style="backgroundDiv" style="width: 92%;padding: 2% 4% 2% 4%;background-size: 100% 100%;">
      <div id="pmJjdivid" style="width:100%;font-size:15px;" v-html="itemEnti.content"></div>
      <div
        v-if="fileListnew.length>0"
        style="font-size: 15px;margin-left: 10px;color: #666666;"
      >附件查看:</div>
      <div v-for="(item,index) of fileListnew" :key="index">
        <div style="height: 31px;line-height: 14px;">
          <span
            @click="openFj(item)"
            style="font-size: 15px;margin-left: 10px;color: #3098FB;border-bottom: 1px solid #3098FB;width: auto;"
          >{{item.tSAttachmentName}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
import { httpMethod } from "../../api/getData.js";
import global_variable from "../../api/global_variable.js";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "zdgz_mryqVue",
  data() {
    return {
      list: [],
      itemEnti: {},
      fileList: [],
      fileListnew: [],
      backgroundDiv: {
        backgroundImage:
          "url(" + require("../../assets/img/head_bg.jpg") + ")"
      }
    };
  },
  mounted() {
    this.itemEnti = this.$route.params.entity;
    console.log(this.itemEnti)
    this.fileList = this.itemEnti.fileList;
    this.fileListnew = [];
    this.fileListnew = this.fileList;
    for (var i = 0; i < this.fileList.length; i++) {
      var url = this.fileList[i].url;
      var index = url.lastIndexOf(".");
      var changeUrl = url.substring(index + 1, url.length);
      // console.log(changeUrl);
      var tSAttachmentName = this.fileList[i].tSAttachmentName;
      if (tSAttachmentName.indexOf(".") == -1) {
        this.fileListnew[i].tSAttachmentName =
          tSAttachmentName + "." + changeUrl;
      }
    }

    //console.log(this.itemEnti);
    $("#pmJjdivid p").each(function() {
      $(this).attr("style", "font-size:15px;");
    });
  },
  methods: {
    openFj: function(item) {
      console.log(item);
       this.$router.push({
        path: "/main/noticeDetailFj",
        name: "noticeDetailFj",
        params: {
          entity: item
        }
      });
    },
    //获取记录日志的logid
    doAddAppLogList: function(logId, ddPhone, grouping_id, grouping_name) {
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
    },
  }
};
</script>

<style >
@import "../../page/zdgz/mryq/mryqDeali/mryqDeali.css";
</style>
