<template>
  <div style="margin-top:0px;">
    <div style="display:flex;background:#ffffff;">
      <div class="ui-row-flex ui-whitespace">
        <div class="ui-col ui-col">
          <div style="font-size:14px;">前一年</div>
        </div>
        <div class="ui-col ui-col">
          <div class="div_flex">
            <img src="../../../../assets/img/project_calendar.png" />
            <div style="color:#333333;">2019年</div>
          </div>
        </div>
        <div class="ui-col ui-col">
          <div>后一年</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
export default {
  name: "zdgc_ztqk_vue",
  data() {
    return {
      seach_value: "",
      active: 0
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style >
@import "../../../../page/zdgz/zdgc/zdgc_ztqk/zdgc_ztqk.css";
@import "../../../../assets/css/frozenui.css";
</style>
