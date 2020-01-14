<template>
  <div>
    <van-tabs
      @click="onClick"
      v-model="active"
      :sticky="false"
      :ellipsis="false"
      line-width="25%"
      style="font-size: 14px;"
      color="#2796e7"
      title-inactive-color="#999999"
      title-active-color="#2796e7"
    >
      <van-tab title="图片新闻">
        <child1 v-bind:active="active"></child1>
      </van-tab>
      <van-tab title="领导之窗">
        <child2 style></child2>
      </van-tab>
      <van-tab title="政务公开">
        <child3 style></child3>
      </van-tab>
      <van-tab title="美丽晋城">
        <child4 style></child4>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import child1 from "@/page/toutiao/picsnews.vue";
import child2 from "@/page/toutiao/ldzc.vue";
import child3 from "@/page/toutiao/zwgk.vue";
import child4 from "@/page/toutiao/mljc.vue";
import { httpMethod } from "../../api/getData.js";
import global_variable from "../../api/global_variable.js";
export default {
  name: "headline",
  data() {
    return {
      active: 0
    };
  },
  mounted() {
    this.doAddAppLogList(
      global_variable.logId,
      global_variable.ddPhone,
      "7",
      "头条"
    );
  },
  methods: {
    changeactive: function(data) {
      console.log(data);
      this.active = data;
    },
    onClick(name, title) {},
    tabsclick: function(name, title) {
      console.log(name);
      switch (parseInt(name)) {
        case 0:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "51",
            "图片新闻"
          );
          break;
        case 1:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "52",
            "领导之窗"
          );
          break;
        case 2:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "53",
            "政务公开"
          );
          break;
        case 3:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "54",
            "美丽晋城"
          );
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

<style socped >
</style>
