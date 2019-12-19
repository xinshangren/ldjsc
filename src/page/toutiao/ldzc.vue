<template>
  <div>
    <div style="display: flex;margin-top: 0px;padding: 10px;border-bottom: 3px solid #f3f3f3f3;border-top: 3px solid #f3f3f3f3;">
      <img id="ldzc_head_img_id" style="height: 76px;width: 63px;" src="http://www.jcgov.gov.cn/zwgk/ldzc/swld/sj/zzc/grjl/201712/W020180519796743218329.jpg">
      <div style="margin-left: 4px;">
        <div style="display: flex;">
          <div id="news1positionId" style="font-size: 13px;">书记:</div>
          <div id="news1nameId" style="font-size: 13px;margin-left: 3px;">张志川</div>
          <img id="showLdsxId" style="height:15px;margin-left: 5px;" src="../../assets/img/icon_filtrate.png">
        </div>
        <div style="font-size: 11px;color: #666666;margin-top: 3px;line-height: 15px;"><span class="mui-ellipsis-2 " style="-webkit-line-clamp:3;" id="ldjj_summary_id">　　张志川，男，汉族，一九六四年九月出生，河南荥阳人，博士研究生学历，一九九七年六月加入中国共产党，一九八二年七月参加工作，现任晋城市委书记。<br>
　　一九八Ο年七月至一九八二年七月在郑州水利学校农田水利专业学习；一九八二年七月至一九九一年四月任河南省水科院农田水利研究室职员(其间:一九八三年七月至一九八八年十二月在武汉大学水利水电工程专业本科学习)......</span><span id="ldjj_summary_xx_id" style="color: rgb(25, 118, 211); font-size: 13px;">【详细】</span></div>
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