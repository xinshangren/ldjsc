<template>
  <div>
  
        <homeVue
          style="overflow-y:auto;overflow-x:hidden;margin-top:55px;margin-bottom:56px;"
        ></homeVue>
    

    <div
      style="z-index: 2; display: flex;position: fixed;bottom: -1px;background: #ffffff;width: 100%;height: 55px;"
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
        <img
          src="@/assets/img/tab_logo.png"
          style="height: 54px;position: absolute;left: 8px;top: -3px;"
        />
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
import Vue from "vue";
import homeVue from "@/page/main/home.vue";
import { Search } from "vant";
import $ from "jquery";
import { mainJs } from "../main/main.js";
Vue.use(Search);
export default {
  name: "mainVue",
  data() {
    return {
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
  },
  methods: {
    //改变tab的状态和图片
    changeTabStyle: function(tabid) {
      mainJs.changeTabStyle(tabid);
    }
  },
  components: {
    homeVue
  }
};
</script>

<style scoped>

</style>
