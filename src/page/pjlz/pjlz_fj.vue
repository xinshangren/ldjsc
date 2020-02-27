<style scoped>
  .pdf-box {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    font-size: 17px;
  }
</style>
<template>
  <div id="content" style="background:#ffffff;position: relative;">
    <div id="sss" class="pdf-box">
      <pdf ref="pdf" :src="pdfSrc" :page="pageNum" @num-pages="pageTotalNum=$event"></pdf>
    </div>
    <div style="position:absolute;bottom: 0px;width: 100%;height:30px;font-size: 18px;display: flex;background: #ffffff;">
      <button class="btn-def btn-pre" @click.stop="prePage">上一页</button>
      <button class="btn-def btn-next" @click.stop="nextPage">下一页</button>
      <div>{{pageNum}}/{{pageTotalNum}}</div>
      <button :class="{select:idx==0}" @touchstart="idx=0" @touchend="idx=-1" @click="scaleD">放大</button>
      <button :class="{select:idx==1}" @touchstart="idx=1" @touchend="idx=-1" @click="scaleX">缩小</button>
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
  import pdf from "vue-pdf";
  export default {
    beforeCreate() {
      document.querySelector("body").setAttribute("style", "background:#F1F4F6");
    },
    name: "pjlz_fj",
    components: { pdf },
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
        idx: -1
      };
    },
    mounted() {
      this.pdfSrc = this.$route.params.entity;
      this.pdSingleApp();

      // this.pdfSrc = pdf.createLoadingTask(this.pdfSrc);
      // this.pdfSrc.then(pdf => {
      //   this.numPages = pdf.numPages;
      // });
    },
    methods: {
      //判断是否是单独app
      pdSingleApp: function () {
        String.prototype.getValue = function (parm) {
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
        console.log(window.innerHeight)
        console.log($("#content").offset())
        var s = window.innerHeight - $("#content").offset().top;
        $("#content").css("height", s);
        if (detail == "1") {
          $("#content").css("margin", "0px 0px 10px");
         
          // $("#pjlzDeali_fk_top_id").css("margin-top","0px");
        }
      },
      
      openFj: function (item) {
        console.log(item);
      },
      //获取记录日志的logid
      doAddAppLogList: function (logId, ddPhone, grouping_id, grouping_name) {
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
      //放大
      scaleD: function () {
        this.scale += 5;
        console.log(this.$refs.pdf);
        this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
      },

      //缩小
      scaleX: function () {
        if (this.scale == 100) {
          return;
        }
        this.scale += -5;
        this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
      },
      prePage() {
        var p = this.pageNum;
        p = p > 1 ? p - 1 : this.pageTotalNum;
        this.pageNum = p;
      },
      nextPage() {
        var p = this.pageNum;
        p = p < this.pageTotalNum ? p + 1 : 1;
        this.pageNum = p;
      }
    }
  };
</script>

<style>
</style>