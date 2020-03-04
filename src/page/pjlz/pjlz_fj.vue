<style scoped>
.pdf-box {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  overflow-x: auto;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  font-size: 17px;
}
.btn_tools {
  height: 27px;
  margin-left: 20px;
}
.btn1_tools {
  height: 20px;
  margin-left: 20px;
}
</style>
<template>
  <div id="content" style="background:#ffffff;position: relative;padding:13px;">
    <!-- <iframe
      id="iframe"
      :src="attach_view_url"
      frameborder="no"
      scrolling="yes"
      style="width:100%; overflow-x:scroll; overflow-y:hidden; "
    ></iframe>-->
    <div id="pmJjdivid" style="width:100%;font-size:15px;overflow:auto;" v-html="attach_view_url"></div>
    <!-- <div id="sss" class="pdf-box">
      <pdf ref="pdf" :src="pdfSrc" :page="pageNum" @num-pages="pageTotalNum=$event"></pdf>
    </div>
    <div
      style="position:absolute;bottom: 0px;left:63px;width: 100%;height:35px;font-size: 16px;display: flex;background: #ffffff;  "
    >
      <img class="btn_tools" src="../../assets/img/fanye_left.png" @click.stop="prePage" />
      <img class="btn_tools" src="../../assets/img/fanye_right.png" @click.stop="nextPage" />
      <div style="margin-left:20px;">{{pageNum}}&nbsp/&nbsp{{pageTotalNum}}</div>
      <img class="btn1_tools" src="../../assets/img/suofang_big.png" :class="{select:idx==0}" @touchstart="idx=0" @touchend="idx=-1" @click="scaleD"/>
      <img class="btn1_tools" src="../../assets/img/suofang_small.png" :class="{select:idx==1}" @touchstart="idx=1" @touchend="idx=-1" @click="scaleX"/>
    </div>-->
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
      pageNum: 1,
      pageTotalNum: 1,
      pageRotate: 0,
      // 加载进度
      loadedRatio: 0,
      curPageNum: 0,
      scale: 100, //放大系数
      idx: -1,
      attach_view_url: ""
    };
  },
  mounted() {
    var attach_view_urls = this.$route.params.entity.attach_view_url;
    console.log(attach_view_urls);
    this.sendGetUrl(attach_view_urls);
    this.pdSingleApp();
    //  setTimeout(() => {
    //             this.pdfSrc = pdf.createLoadingTask(pdfSrcs);
    //         }, 1000);
    // this.pdfSrc = pdf.createLoadingTask(this.pdfSrc);
    // this.pdfSrc.then(pdf => {
    //   this.numPages = pdf.numPages;
    // });
  },
  methods: {
    sendGetUrl: function(attach_view_urls) {
      var params = {
        url: attach_view_urls
      };
      httpMethod
        .fileShow(params)
        .then(res => {
          console.log(res);
          this.attach_view_url = res.data;
          console.log(res.data);
          setTimeout(() => {
            var index = attach_view_urls.lastIndexOf("/");
            var url = attach_view_urls.substring(0, index + 1);
            console.log(url);
            // var height = document.body.clientHeight;
            // var o = document.getElementById("pmJjdivid");
            // var h = o.clientHeight || o.offsetHeight;
            // if (h < height) {
            //   $("#pmJjdivid").css("height", height - 80 + "px");
            // }
            $("#pmJjdivid img").each(function() {
              $(this).css("width", "100%");
              var imageurl = $(this).attr("src");
              if (imageurl.indexOf("http") == -1) {
                $(this).attr("src", url + imageurl);
                $(this).removeAttr("hspace");
                $(this).removeAttr("vspace");
                $(this).removeAttr("width");
                $(this).removeAttr("height");
              }
            });
          }, 100);
        })
        .catch(err => {
          // this.$toast(err);
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
      console.log(window.innerHeight);
      console.log($("#content").offset());
      var height = document.body.clientHeight;
      if (detail == "1") {
        // $("#content").css("margin", "0px 0px 10px");
        setTimeout(() => {
          var height = document.body.clientHeight;
          $("#pmJjdivid").css("height", height + "px");
        }, 100);
        // $("#pjlzDeali_fk_top_id").css("margin-top","0px");
      }else{
          setTimeout(() => {
          var height = document.body.clientHeight-100;
          $("#pmJjdivid").css("height", height + "px");
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
    },
    
  }
};
</script>

<style>
</style>