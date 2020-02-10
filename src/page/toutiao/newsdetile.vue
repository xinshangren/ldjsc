<template>
  <div
    id="detileid"
    :style="backgroundDiv"
    style="background-size: 100% 100%; overflow: scroll;margin-top: 50px;"
  >
    <div
      id="newsDealiTitleId"
      style="margin-top: 55px;text-align: center;font-size: 22px;font-weight: 600;"
    >{{data.title}}</div>
    <div style="margin-top:10px;">
      <div
        id="newsDealiTimeId"
        style="color: #666666;font-size: 13px;float:left;margin-left: 4px;"
      >{{data.showTime}}</div>
      <span
        id="newsDealiSouceId"
        style="color: #666666;font-size: 13px;float:right;margin-right: 4px;"
      >{{data.source}}</span>
    </div>
    <div style="width: 92%;padding: 2% 4% 2% 4%;">
      <div id="pmJjdivid" style="width:100%;font-size: 20px;" v-html="data.content"></div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import Vue from "vue";
import { httpMethod } from "../../api/getData.js";
import global_variable from "../../api/global_variable.js";
export default {
  name: "newsdetile",
  data() {
    return {
      data: {},
      userId: "", //暂时默认
      backgroundDiv: {
        backgroundImage: "url(" + require("../../assets/img/head_bg.jpg") + ")"
      }
    };
  },
  mounted() {
    var orderHight1 = document.documentElement.clientHeight;
    var heightlist = orderHight1 - 50;
    $("#detileid").css("height", heightlist + "px");
    var articleId = this.$route.params.articleId;
    this.userId = global_variable.userId;

    this.getCmsArticleContent(articleId);
  },
  methods: {
    getCmsArticleContent: function(articleId) {
      var params = {
        articleId: articleId,
        userId: this.userId
      };

      httpMethod
        .getCmsArticleContent(params)
        .then(res => {
          this.isLoading = false;
          this.finished = true;
          if (res.success == "1") {
            this.data = {};
            this.data = res.data;
            setTimeout(() => {
              $("#pmJjdivid img").css("width", "100%");
              $("#pmJjdivid p").each(function() {
                $(this).attr("style", "font-size:17px;");
              });
              $("#pmJjdivid section").each(function() {
                $(this).attr("style", "width:100%;");
              });
            }, 100);
          } else if (res.success == "0") {
            this.data = {};
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    }
  }
};
</script>

<style socped>
</style>