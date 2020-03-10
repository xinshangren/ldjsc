<template>
  <div id="content" style="background:#ffffff;">
    <div id="sss" style="width: 96%;padding: 2% 2% 2% 2%;background-size: 100% 100%;">
      <img id="pmJjdivid" style="width:100%" :src="pdfSrc" />
    </div>
    <div v-if="isShow" style="position: fixed;bottom: 20px;right: 10px;">
      <div
        style="background: rgba(0,0,0,0.6);width: 40px;height: 40px;border-radius: 5px;text-align: center;position:relative;"
        @click="resizeBig()"
      >
        <img
          style="height: 27px;top: 13%;position: absolute;right: 17%;"
          src="../../assets/img/iframe_big.png"
        />
      </div>
      <div
        style="margin-top:7px;background: rgba(0,0,0,0.6);width: 40px;height: 40px;border-radius: 5px;text-align: center;position:relative;"
        @click="resizeSmall()"
      >
        <img
          style="height: 27px;top: 13%;position: absolute;right: 17%;"
          src="../../assets/img/iframe_small.png"
        />
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
  name: "pjlz_fj",
  data() {
    return {
      list: [],
      pdfSrc: "",
      fileList: [],
      fileListnew: [],
      isShow:true,
    };
  },
  mounted() {
    this.pdfSrc = this.$route.params.entity;
    var self = this;
    setTimeout(() => {
      self.isShow = true;
      $("#pmJjdivid").css("width", "100%;");
      $("#pmJjdivid").css("max-width", "100%;");
    }, 100);
    this.pdSingleApp();
  },
  methods: {
     resizeBig: function() {
          var imgWidth =$("#pmJjdivid").width();
          // console.log("imgWidth======="+imgWidth);
          $("#content").css("overflow-x","auto")
         $("#pmJjdivid")
            .css("width", imgWidth + 20);
         $("#pmJjdivid")
            .css("max-width", imgWidth + 20);
    },
    resizeSmall: function() {
          var imgWidth = $("#pmJjdivid")
            .width();
          // console.log("imgWidth======="+imgWidth);
          if (imgWidth < 300) {
            return;
          }
        $("#pmJjdivid")
            .css("width", imgWidth - 20);
        $("#pmJjdivid")
            .css("max-width", imgWidth - 20);
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
      var s = window.innerHeight - $("#content").offset().top;
      $("#content").css("min-height", s);
      if (detail == "1") {
       setTimeout(() => {
          var height = document.body.clientHeight;
          $("#content").css("height", height + "px");
        }, 100);
        // $("#pjlzDeali_fk_top_id").css("margin-top","0px");
      } else {
        setTimeout(() => {
          var height = document.body.clientHeight - 105;
          $("#content").css("height", height + "px");
        }, 100);
      }
    },
    openFj: function(item) {
      console.log(item);
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
    }
  }
};
</script>

<style >
</style>
