<template>
  <div style="margin-top:55px;">
    <div class="ui-row-flex ui-whitespace">
      <div class="ui-col ui-col">
        <div class="block_div_style">
          <img class="top_img"  src="../../assets/img/air_home_tab1selected.png" />
          <div class="top_title_select1">空气监测</div>
        </div>
      </div>
      <div class="ui-col ui-col">
        <div class="block_div_style">
          <img class="top_img"  src="../../assets/img/air_home_tab2.png" />
          <div class="top_title_noselect">空气监测</div>
        </div>
      </div>
      <div class="ui-col ui-col">
        <div class="block_div_style">
          <img class="top_img"  src="../../assets/img/air_home_tab3.png" />
          <div class="top_title_noselect">空气监测</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import { httpMethod } from "../../api/getData.js";
export default {
  name: "zdgz",
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F7F7F7");
  },
  activated() {
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#F7F7F7");
  },
  data() {
    return {};
  },
  mounted() {
   //this.getListData();
  },
  methods: {
    getListData: function() {
      var params = {
        targetIds: "58，59，61，62，63"
      };
      //获取数据
      httpMethod
        .findByTargetIds(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/frozenui.css";
@import "../../page/hbgj/hbgj.css";
</style>