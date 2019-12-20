<template>
  <div style="margin-top:0px;overflow:hidden;">
    <div class="div_flex" style="background:#ffffff;">
      <van-search
        placeholder="请输入重点工程项目名称"
        @search="onSearch"
        v-model="seach_value"
        style="width:77%;"
      />
      <img src="../../../../assets/img/project_voice.png" style="height: 33px;margin-top: 12px;" />
      <img
        src="../../../../assets/img/project_filtrate.png"
        style="height: 33px;margin-top: 12px;margin-left:10px;"
        @click="queryList"
      />
    </div>
    <div id="count_id" style="display:flex;">
      <div style="width:48%;text-align:right;color:#1976d2;margin-top:6px;">共</div>
      <div ref="totalCountId" style="color:#1976d2;font-size:24px;">0</div>
      <div style="width:48%;color:#1976d2;margin-top:6px;">个</div>
    </div>
    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
      <div id="newsList" style="padding-left:10px;padding-right:10px;">
        <div
          v-for="(item,index) in list"
          :key="index"
          style="background:#ffffff;padding-top:7px;padding-bottom:7px;box-shadow:0px 0px 2px #cccccc;"
          @click="goDetile(item)"
        >
          <div style="display:flex;">
            <div class="li_div_title">{{item.projectName}}</div>
            <img
              v-if="item.zdProLevel=='2'"
              style="height:20px;margin-left:5px;margin-top:2px;"
              src="../../../../assets/img/project_city.png"
            />
            <img
              v-if="item.zdProLevel=='1'"
              style="height:20px;margin-left:5px;margin-top:2px;"
              src="../../../../assets/img/project_province.png"
            />
            <img
              v-if="item.zdProType=='1'"
              style="height:18px;margin-left:5px;margin-top:2px;"
              src="../../../../assets/img/zdgc_ctcysj.png"
            />
            <img
              v-if="item.zdProType=='0'"
              style="height:18px;margin-left:5px;margin-top:2px;"
              src="../../../../assets/img/zdgc_jcss.png"
            />
            <img
              v-if="item.zdProType=='2'"
              style="height:18px;margin-left:5px;margin-top:2px;"
              src="../../../../assets/img/zdgc_cyzx.png"
            />
          </div>
          <div style="display:flex;margin-top:6px;">
            <img
              style="height:15px;margin-left:16px;"
              src="../../../../assets/img/project_list_icon1.png"
            />
            <div style="font-size:13px;margin-left:6px;">{{item.comName}}</div>
          </div>

          <div style="display:flex;margin-top:6px;position:relative;">
            <img
              style="height:15px;margin-left:16px;"
              src="../../../../assets/img/project_list_icon2.png"
            />
            <div style="font-size:13px;margin-left:6px;">{{item.projectEstimatedTotal}}亿元</div>
            <div style="position: relative;margin-left:56px;">
              <img style="height:20px;" src="../../../../assets/img/project_list_progress_bg.png" />
              <div style="display: flex;position: absolute;top: 0px;left:35px;">
                <div style="font-size:13px;color:#3ca0ec;">推进进度</div>
                <div style="font-size:13px;color:#3ca0ec;">+{{item.boost}}%</div>
              </div>
            </div>

            <div style="position: relative;margin-left:3px;">
              <img style="height:15px;" src="../../../../assets/img/project_list_icon4.png" />
              <div style="display: flex;position: absolute;top: 0px;left:23px;">
                <div style="font-size:13px;color:#00cc00;">{{item.rate}}%</div>
              </div>
            </div>
          </div>

          <div
            style="display:flex;margin-top:0px;position:relative;"
            v-if="item.chargeName!=''&&item.chargeName!=null"
          >
            <img
              style="height:15px;margin-left:16px;"
              src="../../../../assets/img/project_list_icon3.png"
            />
            <div style="font-size:13px;margin-left:6px;">{{item.chargeName}}</div>
            <div style="position: absolute;right: 125px;" v-if="item.chargePhone!=''">
              <img style="height:14px;" src="../../../../assets/img/project_list_icon5.png" />
              <div style="display: flex;position: absolute;top: 0px;left:23px;">
                <div style="font-size:13px;color:#666666;">{{item.chargePhone}}</div>
                <img
                  style="height:15px;margin-top:2px;margin-left:5px;"
                  src="../../../../assets/img/project_list_phone.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </mescroll-vue>

    <!-- 挂载到 #app 节点下 -->
    <!-- 自定义图标 -->
    <van-popup
      v-model="show"
      position="top"
      get-container="#count_id"
      :style="{ height: '60%' }"
      @opened="openPop"
      style="overflow:hidden;"
    >
      <div>
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">进度分类</div>
        <ul id="jdflDialogId" class="ui-row" style="margin-top: 11px;margin-right: 15px;">
          <li id="0" class="ui-col ui-col-50 dialogNoSelect" style="width:27%;">前期</li>
          <li id="1" class="ui-col ui-col-50 dialogNoSelect" style="width:27%;">新建</li>
          <li id="2" class="ui-col ui-col-50 dialogNoSelect" style="width:27%;">续建</li>
        </ul>

        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">项目类型</div>

        <ul class="ui-row" id="xmlxDialogId" style="margin-top: 11px;margin-right: 15px;">
          <li
            v-for="(item,index) in listZdgcType"
            :key="index"
            :id="(index)"
            class="ui-col ui-col-50 dialogNoSelect"
            style="width:43%;"
          >{{item.typename}}</li>
        </ul>
        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">地域类型</div>
        <ul class="ui-row" id="dylxDialogId" style="margin-top: 11px;margin-right: 15px;">
          <li
            v-for="(item,index) in listZdgcDyType"
            :key="index"
            :id="(index)"
            class="ui-col ui-col-25 dialogNoSelect"
          >{{item.typename}}</li>
        </ul>

        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="display: flex;background: #f3f3f3;height:110px;">
          <div
          @click="clearType"
            style="width: 50%;height: 36px;background: #ffffff;line-height: 36px;text-align: center;"
          >重置</div>
          <div
            @click="clickUlDy"
            style="background:#3ca1ec;width: 50%;height: 36px;color:#ffffff;line-height: 36px;text-align: center;"
          >确定</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import $ from "jquery";
import MescrollVue from "mescroll.js/mescroll.vue";

import echarts from "echarts";
import { echarsEnti } from "../../../../page/zdgz/zdgc/zdgc_ztqk/zdgc_ztqk.js";
import { httpMethod } from "../../../../api/getData.js";
import Vue from "vue";
import { Search, PullRefresh, Popup } from "vant";
Vue.use(Search)
  .use(PullRefresh)
  .use(Popup);
export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  name: "zdgc_xmlb_vue",
  data() {
    return {
      activeClassUldy: -1,
      listZdgcType: [],
      listZdgcDyType: [],
      show: false,
      seach_value: "",
      active: 0,
      list: [],
      zdProType: "",
      projectName: "",
      buildAddr: "",
      projectNature: "",
      mescroll: null, // mescroll实例对象
      mescrollDown: {}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        //以下是一些常用的配置,当然不写也可以的.
        page: {
          num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10 //每页数据条数,默认10
        },
        htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
        noMoreSize: 5,
        empty: {
          //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
          warpId: "newsList", //父布局的id (1.3.5版本支持传入dom元素)
          //icon: "../../../../assets/img/nodata.png", //图标,默认null,支持网络图
          tip: "暂无相关数据~" //提示
        }
      }
    };
  },
  mounted() {
    this.getTypeList();
    this.getDyTypeList();
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
    },
    //项目列表
    upCallback: function(page, mescroll) {
      var params = {
        zdProType: this.zdProType,
        projectName: this.seach_value,
        buildAddr: this.buildAddr,
        projectNature: this.projectNature,
        page: page.num,
        pageSize: page.size
      };
      httpMethod
        .getProReportInfoByzdProType(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            if (page.num == 1) {
              this.list = [];
              this.$refs.totalCountId.innerHTML = res.total;
            }
            var data = res.dataList;
            if (data && data.length > 0) {
              this.list = this.list.concat(data);
            }

            this.$nextTick(() => {
              this.mescroll.endBySize(data.length, res.total);
            });
          }
        })
        .catch(err => {
          // this.$toast(err);
          mescroll.endErr();
        });
    },
    //重点工程类型
    getTypeList: function() {
      var params = {
        type: "zdxmlx"
      };

      httpMethod
        .getTypeList(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            var data = res.dataList;
            this.listZdgcType = [];
            this.listZdgcType = data;
          }
        })
        .catch(err => {});
    },
    //地域工程类型
    getDyTypeList: function() {
      var params = {
        type: "district"
      };

      httpMethod
        .getTypeList(params)
        .then(res => {
          console.log("-----------------");
          if (res.success == "1") {
            var data = res.dataList;
            this.listZdgcDyType = [];
            this.listZdgcDyType = data;
            $(function() {});
          }
        })
        .catch(err => {});
    },
    openPop: function() {
      //地域类型
      $("#dylxDialogId li").click(function(e) {
        $(this)
          .siblings("li")
          .removeClass("dialogSelect");
        $(this)
          .siblings("li")
          .removeClass("dialogNoSelect");
        $(this)
          .siblings("li")
          .addClass("dialogNoSelect");
        $(this).removeClass("dialogNoSelect");
        $(this).addClass("dialogSelect");
      });
      //选择进度类型
      $("#jdflDialogId li").click(function(e) {
        $(this)
          .siblings("li")
          .removeClass("dialogSelect");
        $(this)
          .siblings("li")
          .removeClass("dialogNoSelect");
        $(this)
          .siblings("li")
          .addClass("dialogNoSelect");
        $(this).removeClass("dialogNoSelect");
        $(this).addClass("dialogSelect");
      });
      //选择项目类型
      $("#xmlxDialogId li").click(function(e) {
        if ($(this).hasClass("dialogSelect")) {
          $(this).removeClass("dialogSelect");
          $(this).addClass("dialogNoSelect");
        } else {
          $(this).addClass("dialogSelect");
          $(this).removeClass("dialogNoSelect");
        }
      });
    },
    clickUlDy: function() {
      var context = this;
      //循环获取选中的进度类型
      $("#jdflDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        if (isSelect) {
          console.log($(this).attr("id"));
          context.projectNature = $(this).attr("id");
        }
      });

      //循环获取选中的地域类型
      $("#dylxDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        if (isSelect) {
          context.buildAddr = $(this).attr("id");
        }
      });

      //循环获取选中的项目类型
      $("#xmlxDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        var id = $(this).attr("id");
        if (isSelect) {
          if (context.zdProType != "") {
            context.zdProType += "，" + id;
          } else {
            context.zdProType += id;
          }
        }
      });
      this.mescroll.resetUpScroll();
      this.show = false;
    },
    clearType: function() {
      var context = this;
      //循环重置查询条件
      $("#jdflDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
      });
      //循环重置查询条件
      $("#xmlxDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
      });
      //循环重置查询条件
      $("#dylxDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
      });

      context.zdProType="";
      context.buildAddr="";
      context.projectNature="";
      this.mescroll.resetUpScroll();
      this.show = false;
    },
     goDetile(item) {
      //console.log(item);
      this.$router.push({
        path: "/zdgz/zdgc/zdgc_xmlb/zdgc_xmdeali",
        name: "zdgc_xmdeali",
        params: {
          entity: item
        }
      });
    }
  }
};
</script>
<style >
@import "../../../../page/zdgz/zdgc/zdgc_xmlb/zdgc_xmlb.css";
@import "../../../../assets/css/frozenui.css";
</style>
