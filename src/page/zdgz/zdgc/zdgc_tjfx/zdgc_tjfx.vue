<template>
  <div style="margin-top:0px;">
   <div style="display: flex;background: rgb(255, 255, 255);height: 40px;">
      <div class="ui-row-flex ui-whitespace" style="margin-top: 9px;">
        <div class="ui-col ui-col">
          <div class="div_next_style">前一年</div>
        </div>
        <div class="ui-col ui-col" @click="showDatePicker()">
          <div class="div_flex" style="background: #f1f1f1;border-radius: 6px;">
            <img
              src="../../../../assets/img/project_calendar.png"
              style="height: 17px;margin-top: 3px;margin-right: 10px;margin-left: 21px;"
            />
            <div class="div_next_style">2019年</div>
          </div>
        </div>
        <div class="ui-col ui-col">
          <div class="div_next_style" style="text-align:right;">后一年</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import echarts from "echarts";
import { echarsEnti } from "../../../../page/zdgz/zdgc/zdgc_ztqk/zdgc_ztqk.js";
import { httpMethod } from "../../../../api/getData.js";
import Vue from "vue";
import { Search, PullRefresh, Popup } from "vant";
Vue.use(Search)
  .use(PullRefresh)
  .use(Popup);
export default {
  name: "zdgc_tjfx",
  data() {
    return {
      activeClassUldy: -1,
      listZdgcType: [],
      listZdgcDyType: [],
      show: false,
      seach_value: "",
      active: 0,
      list: []
    };
  },
  mounted() {
   
  },
  methods: {
    queryList: function() {
      this.show = true;
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    onSearch() {
      //alert(this.searchkey);
      this.mescroll.resetUpScroll();
      //this.upCallback()
    }
  }
};
</script>
<style scoped>
@import "../../../../page/zdgz/zdgc/zdgc_tjfx/zdgc_tjfx.css";
@import "../../../../assets/css/frozenui.css";
</style>
