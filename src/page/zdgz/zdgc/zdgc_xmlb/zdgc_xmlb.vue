<template>
  <div style="margin-top:0px;">
    <div class="div_flex" style="background:#ffffff;">
      <van-search placeholder="请输入重点工程项目名称" v-model="seach_value" style="width:77%;" />
      <img src="../../../../assets/img/project_voice.png" style="height: 33px;margin-top: 12px;" />
      <img
        src="../../../../assets/img/project_filtrate.png"
        style="height: 33px;margin-top: 12px;margin-left:10px;"
      />
    </div>
    <div style="display:flex;">
      <div style="width:48%;text-align:right;color:#1976d2;margin-top:6px;">共</div>
      <div style="color:#1976d2;font-size:24px;">11</div>
      <div style="width:48%;color:#1976d2;margin-top:6px;">个</div>
    </div>

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        id="newslist"
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        :offset="60"
        :error.sync="error"
        error-text="查询失败"
        style="background: #F7F7F7;padding: 0 13px 13px 13px;overflow-y: auto;"
      >
        <div style="background:#ffffff;padding-top:7px;padding-bottom:2px;">
          <div style="display:flex;">
            <div class="li_div_title">项目名称</div>
            <img
              style="height:20px;margin-left:5px;margin-top:2px;"
              src="../../../../assets/img/project_city.png"
            />
            <img
              style="height:18px;margin-left:5px;margin-top:2px;"
              src="../../../../assets/img/zdgc_ctcysj.png"
            />
          </div>
          <div style="display:flex;margin-top:6px;">
            <img
              style="height:15px;margin-left:16px;"
              src="../../../../assets/img/project_list_icon1.png"
            />
            <div style="font-size:13px;margin-left:6px;">中铁四局</div>
          </div>

          <div style="display:flex;margin-top:6px;position:relative;">
            <img
              style="height:15px;margin-left:16px;"
              src="../../../../assets/img/project_list_icon2.png"
            />
            <div style="font-size:13px;margin-left:6px;">6045万元</div>
            <div style="position: relative;margin-left:73px;">
              <img style="height:20px;" src="../../../../assets/img/project_list_progress_bg.png" />
              <div style="display: flex;position: absolute;top: 0px;left:35px;">
                <div style="font-size:13px;color:#3ca0ec;">推进进度</div>
                <div style="font-size:13px;color:#3ca0ec;">+0.00%</div>
              </div>
            </div>

            <div style="position: relative;margin-left:15px;">
              <img style="height:15px;" src="../../../../assets/img/project_list_icon4.png" />
              <div style="display: flex;position: absolute;top: 0px;left:23px;">
                <div style="font-size:13px;color:#00cc00;">30%</div>
              </div>
            </div>
          </div>

          <div style="display:flex;margin-top:0px;position:relative;">
            <img
              style="height:15px;margin-left:16px;"
              src="../../../../assets/img/project_list_icon3.png"
            />
            <div style="font-size:13px;margin-left:6px;">李根田</div>
            <div style="position: absolute;right: 125px;">
              <img style="height:14px;" src="../../../../assets/img/project_list_icon5.png" />
              <div style="display: flex;position: absolute;top: 0px;left:23px;">
                <div style="font-size:13px;color:#666666;">13593136552</div>
                <img
                  style="height:15px;margin-top:2px;margin-left:5px;"
                  src="../../../../assets/img/project_list_phone.png"
                />
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import echarts from "echarts";
import { echarsEnti } from "../../../../page/zdgz/zdgc/zdgc_ztqk/zdgc_ztqk.js";
import { httpMethod } from "../../../../api/getData.js";
import Vue from "vue";
import { Search, PullRefresh } from "vant";
Vue.use(Search).use(PullRefresh);
export default {
  name: "zdgc_xmlb_vue",
  data() {
    return {
      seach_value: "",
      active: 0,
      list: [],
       error: false,
      loading: false, //是否处于加载状态
      finished: false, //是否已加载完所有数据
      isLoading: false, //是否处于下拉刷新状态
      page: 1,
      pageSize: 4,
      zdProType: "",
      projectName: "",
      buildAddr: "",
      projectNature: ""
    };
  },
  mounted() {
    //this.getzdxmzj("");
  },
  methods: {
    //项目列表
    getProReportInfoByzdProType: function() {
      var params = {
        zdProType: this.zdProType,
        projectName: this.projectName,
        buildAddr: this.buildAddr,
        projectNature:this.projectNature,
        page: this.page,
        pageSize: this.pageSize
      };
      this.page = this.page + 1;
      httpMethod
        .getProReportInfoByzdProType(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
          }
          this.loading = false;
          this.isLoading = false;
        })
        .catch(err => {
          // this.$toast(err);
          this.finished = true;
        });
    },
    onRefresh() {
      this.page = 1;
      this.finished = false;
      this.list = [];
      console.log("onrefresh");
      this.getProReportInfoByzdProType();
    },
    onLoad() {
      //上拉加载
      this.error = false;
      console.log("onLoad");
      this.getProReportInfoByzdProType();
    }
  }
};
</script>
<style >
@import "../../../../page/zdgz/zdgc/zdgc_xmlb/zdgc_xmlb.css";
@import "../../../../assets/css/frozenui.css";
</style>
