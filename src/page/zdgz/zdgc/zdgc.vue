<template>
  <div style="margin-top:54px;">
    <van-tabs
      @touchmove.prevent
      v-model="active"
      title-active-color="#2599e6"
      :offset-top="101"
      title-inactive-color="#333333"
      :sticky="true"
      line-width="75px"
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
    </div> -->
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
  },
  methods: {
    callPhone: function() {
      window.location.href = "tel://13935612128";
    },
    tabsclick: function(name, title) {
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
