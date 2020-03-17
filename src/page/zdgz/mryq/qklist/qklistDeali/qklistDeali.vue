<template>
  <div style="background:#ffffff;">
      
    <div :style="backgroundDiv" style="width: 92%;padding: 2% 4% 2% 4%;background-size: 100% 100%;">
      <div style="font-size: 20px;text-align:center;padding-top: 8px;">{{entity.remark}}</div>
      <div id="pmJjdivid" style="width:100%;font-size:15px;margin-top:15px;overflow:auto;" v-html="entity.content"></div>
      <van-field
        v-model="content"
        rows="4"
        autosize
        type="textarea"
        maxlength="150"
        placeholder="请输入批示内容"
        show-word-limit
        :formatter="formatter(content)"
        class="qklistDealiContent"
      />
      
       <div
          style="display: flex;background: #28bcfe;border-radius:20px;width: 64%;
                margin: auto;
                margin-top: 15px;
                height: 40px;"
          @click="saveCmsArticlePsMryq"
        > 
        <div style="width:44%;text-align:right;line-height:28px;">
          <img
            style="height: 20px;"
            src="../../../../../assets/img/tijiao_icon.png"
          />
          </div>
          <div
            style="margin-top: 6px; color: #ffffff;font-size: 18px;font-weight: 600;margin-left: 5px;"
          >确定</div>
        </div>

      <div v-if="isShow" style="position: fixed;bottom: 20px;right: 10px;">
        <div
          style="background: rgba(0,0,0,0.6);width: 40px;height: 40px;border-radius: 5px;text-align: center;position:relative;"
          @click="resizeBig()"
        >
          <img
            style="height: 27px;top: 13%;position: absolute;right: 17%;"
            src="../../../../../assets/img/iframe_big.png"
          />
        </div>
        <div
          style="margin-top:7px;background: rgba(0,0,0,0.6);width: 40px;height: 40px;border-radius: 5px;text-align: center;position:relative;"
          @click="resizeSmall()"
        >
          <img
            style="height: 27px;top: 13%;position: absolute;right: 17%;"
            src="../../../../../assets/img/iframe_small.png"
          />
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
  name: "qklistDealiVue",
  data() {
    return {
      list: [],
      entity: { content: "" },
      itemEnti: null,
      isShow: false,
      content: "",
      backgroundDiv: {
        backgroundImage:
          "url(" + require("../../../../../assets/img/head_bg.jpg") + ")"
      }
    };
  },
  activated() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  beforeRouteLeave(to, from, next) {
    console.log(from);
    console.log(to);
    next();
  },
  updated(){
 var height = document.body.clientHeight;
   
    $("#pmJjdivid p").each(function() {
      $(this).attr("style", "font-size:15px;");
    });
    var self = this;
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
          self.isShow = true;
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
        self.isShow = true;
        $(this).css("width", "100%;");
        $(this).css("max-width", "100%;");
        // $(this).attr("style", "");
      });
      $("#pmJjdivid div").each(function() {
        if ($(this).find("img").length > 0) {
          self.isShow = true;
          // console.log("有");
          $(this).css("overflow-x", "auto");
        } else {
          // console.log("没有");
        }
      });
    }, 100);
  },
  mounted() {
    this.entity = this.$route.params.entity; //期刊实体
    this.itemEnti = this.$route.params.itemEnti; //cms实体
    console.log(this.itemEnti);
    console.log(this.entity);
    this.findQkIdByXq(this.entity.id);
   
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
    formatter(content) {
      //去空格   特殊字符
      let str = content.replace(/\s*/g, "");
      var pattern = new RegExp(
        "[`~@#$^&*=|{}''\\[\\]<>/~@%#￥……&*——|{}【】\"‘”“']"
      );
      var rs = "";
      for (var i = 0; i < str.length; i++) {
        rs = rs + str.substr(i, 1).replace(pattern, "");
      }
      var rs = rs.replace(
        /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi,
        ""
      );
      this.content = rs;
      return str;
    },
    //根据期刊id获取详情并统计查看次数
    findQkIdByXq: function(qkid) {
      var that = this;
      var params = {
        userId: global_variable.roleJs.dingUserId,
        qkid: qkid
      };
      httpMethod
        .findQkIdByXq(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            var xkxx = res.xkxx;
            this.list = xkxx;
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    }, //保存领导批示记录
    saveCmsArticlePsMryq: function() {
      if (this.content == "") {
        this.$toast("请输入批示内容");
        return;
      }
      var that = this;
      var params = {
        userId: global_variable.roleJs.dingUserId,
        cmsId: that.itemEnti.id,
        qkId: that.entity.id,
        content: that.content
      };
       that.$store.commit("showLoadingBigText", "提交批示中");
      httpMethod
        .saveCmsArticlePsMryq(params)
        .then(res => {
            that.$store.commit("hideLoadingBig");
          console.log(res);
          if (res.success == "1") {
            that.$toast("提交成功");
            that.$router.go(-1);
          }
        })
        .catch(err => {
             that.$store.commit("hideLoadingBig");
          // this.$toast(err);
        });
    }
  }
};
</script>

<style >
@import "../../../../../page/zdgz/mryq/qklist/qklistDeali/qklistDeali.css";
</style>
