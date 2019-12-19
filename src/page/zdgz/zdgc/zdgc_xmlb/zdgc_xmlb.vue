<template>
  <div style="margin-top:0px;">
     <div class="div_flex" style="background:#ffffff;">
       <van-search placeholder="请输入重点工程项目名称" v-model="seach_value" style="width:77%;" />
       <img src="../../../../assets/img/project_voice.png" style="height: 33px;margin-top: 12px;" />
        <img src="../../../../assets/img/project_filtrate.png"  style="height: 33px;margin-top: 12px;margin-left:10px;" />
     </div>
     <div style="display:flex;">
        <div style="width:48%;text-align:right;color:#1976d2;margin-top:6px;">共</div>
        <div style="color:#1976d2;font-size:24px;">11</div>
        <div style="width:48%;color:#1976d2;margin-top:6px;">个</div>
     </div>
  </div>
</template>

<script>
import echarts from "echarts";
import { echarsEnti } from "../../../../page/zdgz/zdgc/zdgc_ztqk/zdgc_ztqk.js";
import { httpMethod } from "../../../../api/getData.js";
import Vue from "vue";
import { Search  } from "vant";
Vue.use(Search);
export default {
  name: "zdgc_xmlb_vue",
  data() {
    return {
      seach_value: "",
      active: 0,
    };
  },
  mounted() {
    this.getzdxmzj("");
   
    
  },
  methods: {
    //第一个头和统计饼图
    getzdxmzj: function(year) {
      var params = {
        year: year
      };
      httpMethod
        .getzdxmzj(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            this.zdgcsl = res.data.gcslmk.gcsl;
            this.getOneEchars(echarts, this.$refs.myCharts1, res.data.gcslmk);
            this.jhtze = res.data.jhtz;
            this.wctze = res.data.wctz;
          }
        })
        .catch(err => {
         // this.$toast(err);
        });
    }
  }
};
</script>
<style >
@import "../../../../page/zdgz/zdgc/zdgc_xmlb/zdgc_xmlb.css";
@import "../../../../assets/css/frozenui.css";
</style>
