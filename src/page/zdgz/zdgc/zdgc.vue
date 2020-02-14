<style scoped>
.menu_li_img {
  height: 12px;
  margin-top: 4px;
  margin-right: 5px;
  margin-left: 5px;
}
.menu_li_div {
  color: #3098fb;
  margin-left: 3px;
  font-size: 15px;
  width: 90%;
}
</style>
<template>
  <div style="margin-top:54px;">
    <div
      id="menu_ul_id"
      v-show="md_show"
      style="width:43%; display:flex;position: fixed;background: #e8f4ff;top:101px;z-index:100;height:100%;left: -163px;"
    >
      <div style="left: 20px;background: #e8f4ff;top: 157px;z-index:100;">
        <div @click=" (1)" style="display:flex;margin-top: 10px;background: #e8f4ff;">
          <div class="menu_li_div">重点项目各阶段项目数量统计</div>
          <img class="menu_li_img" src="../../../assets/img/data_arrow_right.png" />
        </div>
        <div @click="returnCom(2)" style="display:flex;margin-top:10px;background: #e8f4ff;">
          <div class="menu_li_div">区县统计各阶段项目数量</div>
          <img class="menu_li_img" src="../../../assets/img/data_arrow_right.png" />
        </div>
        <div @click="returnCom(3)" style="display:flex;margin-top:10px;background: #e8f4ff;">
          <div class="menu_li_div">各区县实际投资额占比</div>
          <img class="menu_li_img" src="../../../assets/img/data_arrow_right.png" />
        </div>
        <div @click="returnCom(4)" style="display:flex;margin-top:10px;background: #e8f4ff;">
          <div class="menu_li_div">各区县实际投资额完成率</div>
          <img class="menu_li_img" src="../../../assets/img/data_arrow_right.png" />
        </div>
        <div @click="returnCom(5)" style="display:flex;margin-top:10px;background: #e8f4ff;">
          <div class="menu_li_div">各类型实际投资额占比</div>
          <img class="menu_li_img" src="../../../assets/img/data_arrow_right.png" />
        </div>
        <div @click="returnCom(6)" style="display:flex;margin-top:10px;background: #e8f4ff;">
          <div class="menu_li_div">各类型投资完成率</div>
          <img class="menu_li_img" src="../../../assets/img/data_arrow_right.png" />
        </div>
      </div>
      <img
        id="show_menu_Id"
        style="height:35px;position: absolute;top: 71px;right: -44px;"
        src="../../../assets/img/data_list_menu.png"
      />
    </div>
    <van-tabs
      id="tabs"
      @touchmove.prevent
      v-model="active"
      title-active-color="#2599e6"
      :offset-top="101"
      title-inactive-color="#333333"
      :sticky="true"
      line-width="75px"
      style="width: 100%;"
      @change="tabsclick"
    >
      <van-tab title="总体情况">
        <child1 style="overflow-y:auto;overflow-x:hidden;"></child1>
      </van-tab>
      <van-tab title="项目列表">
        <child2></child2>
      </van-tab>
      <van-tab title="存在问题">
        <child3 style></child3>
      </van-tab>
      <van-tab title="统计分析">
        <child4 style="overflow-y:auto;overflow-x:hidden;"></child4>
      </van-tab>
    </van-tabs>
    <!-- <div style="margin-top:46px;z-index: -1;overflow: auto;">
      <div
        id="childId"
        :is="currentView"
        ref="child1"
        style="font-size:15px;"
      ></div>
    </div>-->
    <div style="height: 50px;position: fixed;right: 0px;bottom: 11px;display:flex;">
      <div id="rightAreaDivId" style="display:none;">
        <div
          style="display: flex;width: 268px;height: 44px;margin-right: -20px;margin-top: 3px;background: rgb(255, 255, 255);border-radius: 30px 0px 0px 30px;box-shadow:#f67b09 1px 1px 8px 1px"
        >
          <div style="width:40%;margin-left:25px;">
            <div style="display:flex;margin-top:6px;">
              <img
                style="height: 13px;margin-top: 4px;margin-right: 4px;"
                src="../../../assets/img/project_list_icon1.png"
              />
              <div style="font-size:13px; color:#666666;">责任单位</div>
            </div>
            <div style="color:#333333;font-size:13px;">市发改委重点办</div>
          </div>
          <div style="width:50%;margin-left:25px;">
            <div>
              <div
                @click="callPhone"
                style="display: flex;width: 72%;border: 1px solid rgb(246, 123, 9);border-radius: 5px;padding: 3px;margin-top: 10px;"
              >
                <img
                  style="height: 15px;margin-left: 7px;margin-right: 4px;"
                  src="../../../assets/img/icon_phone_orange.png"
                />
                <div style="color: rgb(246, 123, 9);font-size: 13px;">一键调度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        id="leftAreaDivId"
        style="height:53px;margin-right:15px;"
        src="../../../assets/img/phone_button.png"
      />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
import child1 from "@/page/zdgz/zdgc/zdgc_ztqk/zdgc_ztqk.vue";
import child2 from "@/page/zdgz/zdgc/zdgc_xmlb/zdgc_xmlb.vue";
import child3 from "@/page/zdgz/zdgc/zdgc_czwt/zdgc_czwt.vue";
import child4 from "@/page/zdgz/zdgc/zdgc_tjfx/zdgc_tjfx.vue";
import { httpMethod } from "../../../api/getData.js";
import global_variable from "../../../api/global_variable.js";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "zdgcvue",
  data() {
    return {
      seach_value: "",
      active: 0,
      currentView: "child1",
      md_show: false
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log(from);
    console.log(to);
    if (from.path == "/zdgz/zdgc/zdgc_xmlb/zdgc_xmdeali/zdgc_xmdeali") {
      if (to.path == "/zdgz/zdgc/zdgc") {
        to.meta.keepAlive = true;
      } else {
        to.meta.keepAlive = false;
      }
    } else {
      to.meta.keepAlive = false;
    }
    next();
  },
  mounted() {
    $("#leftAreaDivId").click(function() {
      $("#rightAreaDivId").animate({
        width: "toggle"
      });
    });
    this.doAddAppLogList(
      global_variable.logId,
      global_variable.ddPhone,
      "9",
      "总体情况"
    );
     $("#show_menu_Id").click(function () {
        if ($("#menu_ul_id").css('left') == '-163px') {
          $("#menu_ul_id").animate({ 'left': '0px' }, 500);
          $("#tabs").animate({ 'left': '156px' }, 500);
          console.log($("#tjfx_tab"))
          $(".van-sticky").animate({ 'left': '156px' }, 500);
        } else {
          $("#menu_ul_id").animate({ 'left': '-163px' }, 500);
          $("#tabs").animate({ 'left': '0px' }, 500);
          $(".van-sticky").animate({ 'left': '0px' }, 500);
        }
      });
      $('body').click(function (e) {
        if (e.target.id != 'show_menu_Id')
          if ($("#menu_ul_id").css('left') == '-163px') {
          } else {
            $("#menu_ul_id").animate({ 'left': '-163px' }, 500);
          $("#tabs").animate({ 'left': '0px' }, 500);
          $(".van-sticky").animate({ 'left': '0px' }, 500);
          }
      })
  },
  methods: {
    returnCom: function(x) {

    },
    callPhone: function() {
      window.location.href = "tel://13935612128";
    },
    tabsclick: function(name, title) {
      this.md_show = false;
      console.log(name);
      switch (parseInt(name)) {
        case 0:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "9",
            "总体情况"
          );
          this.currentView = "child1";
          break;
        case 1:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "10",
            "项目列表"
          );
          this.currentView = "child2";
          break;
        case 2:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "11",
            "存在问题"
          );
          this.currentView = "child3";
          break;
        case 3:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "12",
            "统计分析"
          );
          this.md_show = true;
          this.currentView = "child4";
          break;
        default:
          break;
      }
    }, //获取记录日志的logid
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
  },
  components: {
    child1,
    child2,
    child3,
    child4
  }
};
</script>

<style >
@import "../../../page/zdgz/zdgc/zdgc.css";
</style>
