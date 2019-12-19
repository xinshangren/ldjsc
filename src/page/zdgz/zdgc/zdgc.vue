<template>
<div style="margin-top:54px;">
<van-tabs v-model="active" title-active-color="#2599e6" :offset-top="54" title-inactive-color="#333333" :sticky="true" line-width="75px">
  <van-tab title="总体情况">
     <child1
          style="overflow-y:auto;overflow-x:hidden;"
        ></child1>
  </van-tab>
  <van-tab title="项目列表"></van-tab>
  <van-tab title="存在问题"></van-tab>
  <van-tab title="统计分析"></van-tab>
</van-tabs>


</div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
import child1 from "@/page/zdgz/zdgc/zdgc_ztqk/zdgc_ztqk.vue";
export default {
  name: "zdgcvue",
  data() {
    return {
      seach_value: "",
       active: 0
    };
  },
  mounted() {
  },
  methods: {
    
  },
   components: {
    child1
  }
};
</script>

<style >
@import "../../../page/zdgz/zdgc/zdgc.css";
</style>
