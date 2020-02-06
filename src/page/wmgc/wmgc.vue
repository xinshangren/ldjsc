<template>
  <div style="margin-top:55px;">
    <van-tabs
      @click="onClick"
      v-model="active"
      :sticky="true"
      :offset-top="101"
      :ellipsis="false"
      line-width="25%"
      style="font-size: 14px;"
      color="#2796e7"
      title-inactive-color="#999999"
      title-active-color="#2796e7"
      @change="tabsclick"
    >
      <van-tab title="概况">
        <child1 v-bind:active="active"></child1>
      </van-tab>
      <van-tab title="创城动态">
        <child2 style></child2>
      </van-tab>
      <van-tab title="星级展示">
        <child3 style></child3>
      </van-tab>
      <van-tab title="类型得分">
        <child4 style></child4>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import child1 from "@/page/wmgc/wmgcgk.vue";
import child2 from "@/page/wmgc/wmgcccdt.vue";
import child3 from "@/page/wmgc/wmgcxjzs.vue";
import child4 from "@/page/wmgc/wmgclxdf.vue";
import { httpMethod } from "../../api/getData.js";
import global_variable from "../../api/global_variable.js";
export default {
  name: "headline",
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  activated() {
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  data() {
    return {
      active: 0
    };
  },
  mounted() {
    this.doAddAppLogList(
      global_variable.logId,
      global_variable.ddPhone,
      "61",
      "概况"
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
            "61",
            "概况"
          );
          break;
        case 1:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "62",
            "创城动态"
          );
          break;
        case 2:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "63",
            "星级展示"
          );
          break;
        case 3:
          this.doAddAppLogList(
            global_variable.logId,
            global_variable.ddPhone,
            "64",
            "类型得分"
          );
          break;
        default:
          break;
      }
    },
    //获取记录日志的logid
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
