<template>
  <div style="margin-top:54px;">
    <van-tabs
      @touchmove.prevent
      v-model="active"
      title-active-color="#2599e6"
      :offset-top="54"
      title-inactive-color="#333333"
      :sticky="true"
      line-width="75px"
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
                <img style="height: 15px;margin-left: 7px;margin-right: 4px;" src="../../../assets/img/icon_phone_orange.png" />
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
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "zdgcvue",
  data() {
    return {
      seach_value: "",
      active: 0
    };
  },
  mounted() {
    $("#leftAreaDivId").click(function() {
      $("#rightAreaDivId").animate({
        width: "toggle"
      });
    });
  },
  methods: {
    callPhone:function(){
       window.location.href = 'tel://13935612128'
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
