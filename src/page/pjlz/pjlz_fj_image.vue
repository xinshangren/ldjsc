<template>
  <div id="content" style="background:#ffffff;">
    <div id="sss" style="width: 96%;padding: 2% 2% 2% 2%;background-size: 100% 100%;">
      <img id="pmJjdivid" style="width:100%" :src="pdfSrc"/>
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
      fileListnew: []
    };
  },
  mounted() {
    this.pdfSrc = this.$route.params.entity;
    var s = window.innerHeight - $("#sss").offset().top;
    $("#sss").css("min-height", s);
    $("#pmJjdivid img").each(function() {
      $(this).attr("style", "width:100%;");
    });
    this.pdSingleApp();
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
      var s = window.innerHeight - $("#content").offset().top;
        $("#content").css("min-height", s);
      if (detail == "1") {
        $("#content").css("margin", "0px 0px 10px");
        // $("#pjlzDeali_fk_top_id").css("margin-top","0px");
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
