<template>
  <div>
    <div style="display: flex;margin: 15px;height:120px;padding: 10px;border: 1px solid #EAEAEA;background: #ffffff;">
      <img id="ldzc_head_img_id" src="../../assets/img/zzc.jpg" style="width: 69px;height:95px;margin-top: 10px;">
      <div style="margin-left: 4px;height: 100px;">
        <div style="display: flex;margin-top: 13px;">
          <div id="news1positionId" style="font-size: 13px;">书记:</div>
          <div id="news1nameId" style="font-size: 13px;margin-left: 3px;">张志川</div>
          <img id="showLdsxId" style="height:15px;margin-left: 5px;" src="../../assets/img/icon_filtrate.png">
        </div>
        <div style="font-size: 11px;color: #666666;margin-top: 3px;line-height: 15px;">
          <span class="mui-ellipsis-2 "
            id="ldjj_summary_id">　　张志川，男，汉族，一九六四年九月出生，河南荥阳人，博士研究生学历，一九九七年六月加入中国共产党，一九八二年七月参加工作，现任晋城市委书记。<br>
            　　一九八Ο年七月至一九八二年七月在郑州水利学校农田水利专业学习；</span>
            <span id="ldjj_summary_xx_id" style="color: rgb(25, 118, 211); font-size: 13px;">【详细】</span></div>
      </div>
    </div>
    <div style="display: flex;">
    <div style="display: flex; margin-left: 22%;border-radius: 16px;width: 28%;height: 32px;background: #3ea2ed;color: #ffffff;font-size: 13px;text-align: center;line-height: 32px;vertical-align: middle;">
      <img src="../../assets/img/head_icon1.png" style="height:14px;"/>
      最新活动
    </div>
    <div style="display: flex;border-radius: 16px;width: 28%;height: 32px;color: #3ca1ec;background: #ffffff;font-size: 13px;text-align: center;line-height: 32px;vertical-align: middle;">
      <img src="../../assets/img/head_icon2_selected.png" style="height:14px;"/>
      领导讲话
    </div>
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
        data: {}
      };
    },
    methods: {

      getCmsArticleContent: function (articleId) {
        var params = {
          articleId: articleId,

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