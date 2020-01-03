<template>
  <div style="
    overflow: auto;
">
    <div class="div_flex" style="background:#ffffff;height:49px;display:flex;">
      <form action="/" style="width:77%;margin-left:13px;margin-top:8px;">
        <van-search placeholder="请输入污染源名称" @search="onSearch" v-model="seach_value" />
      </form>
      <img src="../../../../../assets/img/project_voice.png" style="height: 27px;margin-top: 11px;" />
      <img
        src="../../../../../assets/img/project_filtrate.png"
        style="height: 27px;margin-top: 11px;margin-left:5px;"
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
          class="backgroundDivPhotonohave"
          style="padding-top:7px;padding-bottom:7px;box-shadow:0px 0px 2px #cccccc;position:relative;"
          @click="goDetile(item)"
        >
          <div style="display:flex;margin-left:10px;">
            <img
              style="height:15px;margin-top:3px"
              src="../../../../../assets/img/reseau_list_icon1.png"
            />
            <div
              class="van-ellipsis"
              style="color: #333333;font-size: 15px;margin-left:14px;width:200px;"
            >{{item.name}}</div>
            <div v-if="item.type=='餐饮单位'" class="listTypeStyle">
              <img style="height:15px;" src="../../../../../assets/img/pollution_type_icon2.png" />
              <div>餐饮单位</div>
            </div>
            <div v-if="item.type=='畜禽养殖'" class="listTypeStyle">
              <img style="height:15px;" src="../../../../../assets/img/pollution_type_icon3.png" />
              <div>畜禽养殖</div>
            </div>
            <div v-if="item.type=='建筑工地'" class="listTypeStyle">
              <img style="height:15px;" src="../../../../../assets/img/pollution_type_icon4.png" />
              <div>建筑工地</div>
            </div>
            <div v-if="item.type=='堆场'" class="listTypeStyle">
              <img style="height:15px;" src="../../../../../assets/img/pollution_type_icon5.png" />
              <div>堆场</div>
            </div>
            <div v-if="item.type=='加油站'" class="listTypeStyle">
              <img style="height:15px;" src="../../../../../assets/img/pollution_type_icon6.png" />
              <div>加油站</div>
            </div>
            <div v-if="item.type=='汽修'" class="listTypeStyle">
              <img style="height:15px;" src="../../../../../assets/img/pollution_type_icon7.png" />
              <div>汽修</div>
            </div>
            <div v-if="item.type=='其他单位'" class="listTypeStyle">
              <img style="height:15px;" src="../../../../../assets/img/pollution_type_icon8.png" />
              <div>其他单位</div>
            </div>
            <div v-if="item.type=='工业企业'" class="listTypeStyle">
              <img style="height:15px;" src="../../../../../assets/img/pollution_type_icon1.png" />
              <div>工业企业</div>
            </div>
          </div>

          <div style="display:flex;margin-left:10px;">
            <img
              style="margin-top:3px;height:15px;"
              src="../../../../../assets/img/reseau_list_icon2.png"
            />
            <div style="margin-left:15px;font-size:14px;color:#666666;">{{item.address}}</div>
          </div>

          <div style="display:flex;margin-left:10px;">
            <img
              style="margin-top:3px;height:15px;"
              src="../../../../../assets/img/reseau_list_icon3.png"
            />
            <div style="margin-left:15px;font-size:14px;color:#666666;">{{item.contact_user}}</div>

            <img
              style="margin-top:3px;height:15px;margin-left:10px;"
              src="../../../../../assets/img/reseau_list_icon4.png"
            />
            <div style="margin-left:5px;font-size:14px;color:#666666;">{{item.contact_phone}}</div>

            <img
              style="margin-top:3px;height:15px;margin-left:10px;"
              src="../../../../../assets/img/reseau_list_icon5.png"
            />
            <div style="margin-left:5px;font-size:14px;color:#666666;">年度问题</div>

            <div style="color:#f30011;font-size:14px;margin-left:10px;">{{item.problemcount}}次</div>
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
      :style="{ height: '65%' }"
      @opened="openPop"
      style="overflow:hidden;background:rgb(243, 243, 243);"
    >
      <div style="background:#ffffff;">
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">污染源类型</div>
        <ul id="jdflDialogId" class="ui-row" style="margin-top: 11px;margin-right: 15px;">
          <li
            v-for="(item,index) in  companyTypeList"
            :key="index"
            :id="(index)"
            class="ui-col ui-col-50 dialogSelect"
            style="width:43%;"
          >{{item.type}}</li>
        </ul>

        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">所处区县</div>

        <ul class="ui-row" id="xmlxDialogId" style="margin-top: 11px;margin-right: 15px;">
          <li
            v-for="(item,index) in  areaTypeList"
            :key="index"
            :id="(item.typecode)"
            class="ui-col ui-col-50 dialogNoSelect"
            style="width:43%;"
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
import echarts from "echarts";
import $ from "jquery";
import MescrollVue from "mescroll.js/mescroll.vue";
import { httpMethod } from "../../../../../api/getData.js";
import { hbgjAirJs } from "../../../../../page/zdgz/hbgj/hbgj_wgjg/hbgj_wgjg_wrylist/hbgj_wgjg_wrylist.js";
import Vue from "vue";
import { Search, PullRefresh, Popup, Dialog } from "vant";
Vue.use(Search)
  .use(PullRefresh)
  .use(Popup)
  .use(Dialog);
export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  name: "hbgj_wgjg_wrylist",
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  activated() {
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  data() {
    return {
      activeClassUldy: -1,
      listZdgcType: [],
      listZdgcDyType: [],
      companyTypeList: [],
      areaTypeList: [],
      show: false,
      seach_value: "",
      active: 0,
      list: [],
      curwrwtype:
        "餐饮单位，畜禽养殖，汽修，建筑工地，工业企业，堆场，加油站或油库，其他单位",
      projectName: "",
      wresarea: "",
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
          //icon: "../../../../../assets/img/nodata.png", //图标,默认null,支持网络图
          tip: "暂无相关数据~" //提示
        }
      }
    };
  },
  mounted() {
    this.getCompanyType();
    this.getTypeList();
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
        type: this.curwrwtype,
        name: this.seach_value,
        district: this.wresarea,
        methodType: 1,
        page: page.num,
        pageSize: page.size
      };
      httpMethod
        .getGridSourceList(params)
        .then(res => {
          // console.log(JSON.stringify(res));
          if (res.success == "1") {
            if (page.num == 1) {
              this.list = [];
              this.$refs.totalCountId.innerHTML = res.total;
            }
            var data = res.list;
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
    //获取列表筛选企业类型
    getCompanyType: function() {
      var params = {};

      httpMethod
        .getCompanyType(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            this.companyTypeList = res.typelist;
          }
        })
        .catch(err => {});
    },
    //获取列表筛选企业类型
    getTypeList: function() {
      var params = {
        type: "district"
      };
      httpMethod
        .getTypeList(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            var map = {
              typecode: "",
              typename: "晋城市"
            };

            this.areaTypeList = res.dataList;
            this.areaTypeList.unshift(map);
          }
        })
        .catch(err => {});
    },
    openPop: function() {
      //地域类型
      $("#xmlxDialogId li").click(function(e) {
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
      //选择污染源类型
      $("#jdflDialogId li").click(function(e) {
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
      context.wresarea = "";
      context.curwrwtype = "";
      //循环获取选中的地域类型
      $("#xmlxDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        if (isSelect) {
          context.wresarea = $(this).html();
        }
      });

      //循环获取选中的项目类型
      $("#jdflDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        var id = $(this).html();
        if (isSelect) {
          if (context.curwrwtype != "") {
            context.curwrwtype += "，" + id;
          } else {
            context.curwrwtype += id;
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
        $(this).removeClass("dialogNoSelect");
        $(this).addClass("dialogSelect");
      });
      //循环重置查询条件
      $("#xmlxDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
      });
      context.wresarea = "";
      context.curwrwtype =
        "餐饮单位，畜禽养殖，汽修，建筑工地，工业企业，堆场，加油站或油库，其他单位";
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

<style scoped>
@import "../../../../../page/zdgz/hbgj/hbgj_wgjg/hbgj_wgjg_wrylist/hbgj_wgjg_wrylist.css";
@import "../../../../../assets/css/frozenui.css";
</style>