<template>
  <div>
    <headlineVue v-if="tabid==0" style="overflow-y:auto;overflow-x:hidden;margin-top:55px;"></headlineVue>
    <dingbanVue v-if="tabid==2" style="overflow-y:auto;overflow-x:hidden;margin-top:55px;"></dingbanVue>
    <homeVue
      v-if="tabid==4"
      style="overflow-y:auto;overflow-x:hidden;margin-top:55px;padding-bottom:55px;"
    ></homeVue>

    <div
      style="z-index: 2; display: flex;position: fixed;bottom: 0px;background: #ffffff;width: 100%;height: 55px;font-size:15px;"
    >
      <div class="main_item" id="0">
        <img class="main_item_img" v-bind:src="tabImage[0]" />
        <div class="main_item_noSelect">头条</div>
      </div>
      <div class="main_item" id="1">
        <img class="main_item_img" v-bind:src="tabImage[1]" />
        <div class="main_item_noSelect">督办</div>
      </div>
      <div class="main_item" id="4" style="position: relative;width: 25%;">
        <img src="@/assets/img/tab_logo.png" style="height: 54px;" />
      </div>
      <div class="main_item" id="2">
        <img class="main_item_img" v-bind:src="tabImage[2]" />
        <div class="main_item_noSelect">钉办</div>
      </div>
      <div class="main_item" id="3">
        <img class="main_item_img" v-bind:src="tabImage[3]" />
        <div class="main_item_noSelect">热线</div>
      </div>
    </div>
  </div>
</template>

<script>
import headlineVue from "@/page/main/headline.vue";
import homeVue from "@/page/main/home.vue";
import dingbanVue from "@/page/main/dingban.vue";
import { Search } from "vant";
import $ from "jquery";
import { mainJs } from "../main/main.js";
import global_variable from "../../api/global_variable.js";
export default {
  name: "mainVue",
  props: ["intentState"],
  data() {
    return {
      tabid: 4,
      seach_value: "",
      tabImage: [
        require("@/assets/img/icon_news.png"),
        require("@/assets/img/icon_supervise.png"),
        require("@/assets/img/icon_ding.png"),
        require("@/assets/img/icon_hotline.png")
      ]
    };
  },
  mounted() {
    var context = this;
    $(".main_item").click(function() {
      var id = $(this).attr("id");
      context.changeTabStyle(id);
    });
      console.log(this.intentState);
    // this.$EventBus.$on("nodeClick", ({ id }) => {
    //   console.log(id);
    //   子组件接收参数;
    // });
    this.$root.$on("test11", function(msg) {
      console.log("111");
      context.changeTabStyle("4");
    });
  },
  methods: {
    //改变tab的状态和图片
    changeTabStyle: function(tabid) {
      global_variable.indexTabId = tabid;
      console.log(global_variable.indexTabId);
      if (tabid == 1 || tabid == 3) {
        this.$toast("功能开发中");
      } else {
        this.tabid = tabid;
        mainJs.changeTabStyle(tabid);
      }
    }
  },
  components: {
    homeVue,
    headlineVue,
    dingbanVue
  }
};
</script>

<style scoped>
</style>