<template>
  <div style="background:#ffffff;">
    <div :style="backgroundDiv" style="width: 92%;padding: 2% 4% 2% 4%;background-size: 100% 100%;">
      <div id="pmJjdivid" style="width:100%;font-size:15px;" v-html="itemEnti.html"></div>
       <div v-if="isShow" style="position: fixed;bottom: 20px;right: 10px;">
        <div
          style="background: rgba(0,0,0,0.6);width: 40px;height: 40px;border-radius: 5px;text-align: center;position:relative;"
          @click="resizeBig()"
        >
          <img style="height: 27px;top: 13%;position: absolute;right: 17%;" src="../../../../../assets/img/iframe_big.png" />
        </div>
        <div
          style="margin-top:7px;background: rgba(0,0,0,0.6);width: 40px;height: 40px;border-radius: 5px;text-align: center;position:relative;"
          @click="resizeSmall()"
        >
          <img style="height: 27px;top: 13%;position: absolute;right: 17%;" src="../../../../../assets/img/iframe_small.png" />
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
import { httpMethod } from "../../../../../api/getData.js";
import global_variable from "../../../../../api/global_variable.js";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "mryqDealiFjVue",
  data() {
    return {
      list: [],
      itemEnti: {},
      fileList: [],
       isShow:false,
      fileListnew: [],
      backgroundDiv: {
        backgroundImage:
          "url(" + require("../../../../../assets/img/head_bg.jpg") + ")"
      }
    };
  },
  mounted() {
    this.itemEnti = this.$route.params.entity;
    console.log(this.itemEnti);
    console.log(document.body.clientHeight);

    var height = document.body.clientHeight;
    // $("#contentId").css("height",height+200+"px");
    //console.log(this.itemEnti);
    $("#pmJjdivid p").each(function() {
      $(this).attr("style", "font-size:15px;");
    });
    var self=this;
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
          self.isShow=true;
          // console.log("有");
          $(this).css("overflow-x", "auto");
          $(this)
            .children("img")
            .css("width", "100%");
          $(this)
            .children("img")
            .css("max-width", "100%;");
        } else {
          // console.log("没有");
        }
      });
      $("#pmJjdivid  img").each(function() {
        self.isShow=true;
        $(this).css("width", "100%;");
        $(this).css("max-width", "100%;");
        // $(this).attr("style", "");
      });
      $("#pmJjdivid div").each(function() {
        if ($(this).find("img").length > 0) {
          self.isShow=true;
          // console.log("有");
          $(this).css("overflow-x", "auto");
        } else {
          // console.log("没有");
        }
      });
    }, 100);
  },
  methods: {
     resizeBig: function() {
      $("#pmJjdivid p").each(function() {
        if ($(this).children("img").length > 0) {
          var imgWidth = $(this)
            .children("img")
            .width();
          // console.log("imgWidth======="+imgWidth);
          $(this)
            .children("img")
            .css("width", imgWidth + 20);
          $(this)
            .children("img")
            .css("max-width", imgWidth + 20);
        } else {
          // console.log("没有");
        }
      });
      $("#pmJjdivid  img").each(function() {
        var imgWidth = $(this).width();
        $(this).css("width", imgWidth + 20);
        $(this).css("max-width", imgWidth + 20);
        // $(this).attr("style", "");
      });
      $("#pmJjdivid div").each(function() {
        if ($(this).find("img").length > 0) {
          // console.log("有");
          $(this).css("overflow-x", "auto");
          var imgWidth = $(this)
            .children("img")
            .width();
          // console.log("imgWidth======="+imgWidth);
          $(this)
            .children("img")
            .css("width", imgWidth + 20);
          $(this)
            .children("img")
            .css("max-width", imgWidth + 20);
        } else {
          // console.log("没有");
        }
      });
    },
    resizeSmall: function() {
      $("#pmJjdivid p").each(function() {
        if ($(this).children("img").length > 0) {
          var imgWidth = $(this)
            .children("img")
            .width();
          // console.log("imgWidth======="+imgWidth);
          if (imgWidth < 300) {
            return;
          }
          $(this)
            .children("img")
            .css("width", imgWidth - 20);
          $(this)
            .children("img")
            .css("max-width", imgWidth - 20);
        } else {
          // console.log("没有");
        }
      });
      $("#pmJjdivid  img").each(function() {
        var imgWidth = $(this).width();
        if (imgWidth < 300) {
          return;
        }
        $(this).css("width", imgWidth - 20);
        $(this).css("max-width", imgWidth - 20);
        // $(this).attr("style", "");
      });
      $("#pmJjdivid div").each(function() {
        if ($(this).find("img").length > 0) {
          // console.log("有");
          $(this).css("overflow-x", "auto");
          var imgWidth = $(this)
            .children("img")
            .width();
          // console.log("imgWidth======="+imgWidth);
          if (imgWidth < 300) {
            return;
          }
          $(this)
            .children("img")
            .css("width", imgWidth - 20);
          $(this)
            .children("img")
            .css("max-width", imgWidth - 20);
        } else {
          // console.log("没有");
        }
      });
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
    },
    goDetile(item) {
      this.$router.push({
        path: "/toutiao/newsdetile",
        name: "newsdetile",
        params: {
          articleId: id
        }
      });
    }
  }
};
</script>

<style >
@import "../../../../../page/zdgz/mryq/mryqDeali/mryqDealiFj/mryqDealiFj.css";
</style>
