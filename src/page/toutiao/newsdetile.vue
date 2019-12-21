<template>
  <div :style="backgroundDiv" style="background-size: 100% 100%;">
    <div id="newsDealiTitleId" style="margin-top: 55px;text-align: center;font-size: 22px;font-weight: 600;">
      {{data.title}}</div>
    <div style="margin-top:10px;">
      <div id="newsDealiTimeId" style="color: #666666;font-size: 13px;float:left;margin-left: 4px;">{{data.showTime}}
      </div>
      <span id="newsDealiSouceId"
        style="color: #666666;font-size: 13px;float:right;margin-right: 4px;">{{data.source}}</span>
    </div>
    <div style="width: 92%;padding: 2% 4% 2% 4%;">
      <div id="pmJjdivid" style="width:100%;" v-html="data.content"></div>
    </div>
  </div>


</template>
<script>
  import $ from "jquery";
  import Vue from "vue";
  import { httpMethod } from "../../api/getData.js";
  export default {
    name: "newsdetile",
    mounted() {
      var articleId = this.$route.params.articleId;
      this.getCmsArticleContent(articleId);
    },
    data() {
      return {
        data: {},
        userId: "8a87821a6b1c0bb4016b1c113e2f0001",//暂时默认
        backgroundDiv: {
          backgroundImage: "url(" + require("../../assets/img/head_bg.jpg") + ")"
        },
      };
    },
    methods: {

      getCmsArticleContent: function (articleId) {
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
                $("#pmJjdivid img").css('width', '100%');
                $("#pmJjdivid p").each(function () {
                  $(this).attr("style", "font-size:17px;");
                });
              }, 100);


            } else if (res.success == "0") {
              this.data = {};
            }
          })
          .catch(err => {
            this.$toast(err);
          });
      },
    },

  };
</script>

<style socped>

</style>