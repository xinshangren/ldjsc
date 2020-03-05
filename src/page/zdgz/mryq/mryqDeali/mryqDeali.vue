<template>
  <div style="background:#ffffff;">
    <div
      id="contentId"
      :style="backgroundDiv"
      style="width: 92%;padding: 2% 4% 2% 4%;background-size: 100% 100%;"
    >
      <div
        id="pmJjdivid"
        style="width:100%;font-size:15px;overflow:auto;"
        v-html="itemEnti.content"
      ></div>
      <div
        v-if="fileListnew.length>0"
        style="font-size: 15px;margin-left: 10px;color: #666666;"
      >附件查看:</div>
      <div v-for="(item,index) of fileListnew" :key="index" style="margin-bottom:20px;">
        <div style="display:flex;">
          <span
            @click="openFj(item)"
            style="font-size: 15px;margin-left: 10px;color: #3098FB;width: 80%;"
          >{{item.tSAttachmentName}}</span>
          <a
            :href="item.AllUrl"
            download
            style="margin-left:10px;display: flex;background: #DBEEFF;height: 26px;border-radius: 5px;width: 68px;color: #3098fb;"
          >
            <img
              style="height: 16px;margin: auto;margin-left:8px;"
              src="../../../../assets/img/icon_download_new.png"
            />
            <div
              style="color: #3098fb;font-size: 15px;margin-top: 2px;width: 100%;text-align: center;"
            >下载</div>
          </a>
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
import { httpMethod } from "../../../../api/getData.js";
import global_variable from "../../../../api/global_variable.js";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  name: "zdgz_mryqVue",
  data() {
    return {
      list: [],
      itemEnti: {
        content: ""
      },
      fileList: [],
      itemId: "",
      fileListnew: [],
      backgroundDiv: {
        backgroundImage:
          "url(" + require("../../../../assets/img/head_bg.jpg") + ")"
      }
    };
  },
  mounted() {
    this.itemEnti = this.$route.params.entity;
    console.log(this.itemEnti);
    if (this.itemEnti != undefined) {
      this.itemId = this.itemEnti.id;
    } else {
      this.itemId = localStorage.getItem("mryqItemId");
    }
    this.findIdByMyrq(this.itemId);
    console.log(document.body.clientHeight);

    var height = document.body.clientHeight;
    // $("#contentId").css("height",height+200+"px");
    //console.log(this.itemEnti);
    $("#pmJjdivid p").each(function() {
      $(this).attr("style", "font-size:15px;");
    });
    setTimeout(() => {
      var o = document.getElementById("pmJjdivid");
      var h = o.clientHeight || o.offsetHeight;

      console.log(height + "=" + h);
      if (h < height) {
        $("#pmJjdivid").css("height", height - 80 + "px");
      }
      console.log(h);
      $("#pmJjdivid p").each(function() {
        if ($(this).children("img").length > 0) {
          // console.log("有");
          $(this).css("overflow-x", "auto");
        } else {
          // console.log("没有");
        }
      });
      $("#pmJjdivid img").each(function() {
        $(this).attr("style", "width:100%;");
        $(this).attr("style", "max-width:100%;");
      });
      $("#pmJjdivid div").each(function() {
        if ($(this).find("img").length > 0) {
          // console.log("有");
          $(this).css("overflow-x", "auto");
        } else {
          // console.log("没有");
        }
      });
    }, 100);
  },
  methods: {
    //获取记录日志的logid
    findIdByMyrq: function(id) {
      var that = this;
      var params = {
        userId: global_variable.roleJs.dingUserId,
        cms_Id: id
      };
      httpMethod
        .findIdByMyrq(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            var data = res.data;
            that.itemEnti = data;
            that.fileList = data.fileList;
            that.fileListnew = [];
            that.fileListnew = that.fileList;
            for (var i = 0; i < that.fileList.length; i++) {
              var url = that.fileList[i].url;
              var index = url.lastIndexOf(".");
              var changeUrl = url.substring(index + 1, url.length);
              // console.log(changeUrl);
              var tSAttachmentName = that.fileList[i].tSAttachmentName;
              if (tSAttachmentName.indexOf(".") == -1) {
                that.fileListnew[i].tSAttachmentName =
                  tSAttachmentName + "." + changeUrl;
              }
              that.fileListnew[i].AllUrl =
                httpMethod.returnBaseUrlFun() + that.fileList[i].url;
            }
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    },
    downFj: function(item) {
      console.log(item.AllUrl);
      //  window.location.href=item.Allurl;
      window.open(item.AllUrl);
    },
    openFj: function(item) {
      console.log(item.Allurl);
      // window.location.href=httpMethod.returnBaseUrlFun()+item.url;
      //window.open('http://view.officeapps.live.com/op/view.aspx?src=http%3a%2f%2f203.207.104.209%3a7081%2fjcsldjsc%2fupload%2ffiles%2f2003%2f20200303153033Tvd4ErCc.docx');

      localStorage.setItem("mryqItemId", this.itemId);
      this.$router.push({
        path: "/zdgz/mryq/mryq/mryqDeali/mryqDealiFj",
        name: "mryqDealiFjVue",
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
    goDetile(item) {
      this.$router.push({
        path: "/zdgz/mryq/mryq/mryqDeali/mryqDealiFj",
        name: "mryqDealiFjVue",
        params: {
          entity: item
        }
      });
    }
  }
};
</script>

<style >
@import "../../../../page/zdgz/mryq/mryqDeali/mryqDeali.css";
</style>
