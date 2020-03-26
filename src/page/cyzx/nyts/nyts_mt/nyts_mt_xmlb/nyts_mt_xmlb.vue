<style scoped>
.mt_qyxzImg {
  height: 20px;
}

.mt_wsdjImg {
  height: 20px;
}
</style>
<template>
  <div style="margin-top:0px;overflow:hidden;">
    <!-- <div class="div_flex" style="background:#ffffff;height:49px;display:flex;">
      <form action="/" style="width: 84%;margin-left:13px;margin-top:8px;">
        <van-search placeholder="请输入项目名称" @search="onSearch" v-model="seach_value" />
      </form> -->
      <img
      src="../../../../../assets/img/project_filtrate.png"
      style=" height: 26px; top:20px; position: absolute;right: 39.5%; z-index: 3;"
      @click="queryList"
    />
    <!-- </div> -->

    <div slot="title" style="display: flex;">
      <div style="width:48%;text-align:right; margin-top: 8px;font-size:16px;">项目总数</div>
      <div id="font_color1" ref="totalCountId" style="font-size:24px;color:#1976d2;">{{proCount}}</div>
      <div style="margin-top:8px;font-size:16px;">家</div>
    </div>
    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
      <div
        id="newsList"
        style="margin-top:3px;margin-left:10px;margin-right:10px;box-shadow:1px 1px 2px 3px  #f3f3f3;"
      >
        <div
          v-for="(item,index) in pro_dataList"
          :key="index"
          @click="goDetail(item)"
          style="position:relative;"
        >
          <div style="padding:7px;">
            <div style="display:flex;position:relative;">
              <p
                class="mt_xmlb_font_style"
                style="display: block;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"
              >{{item.pro_name}}</p>
            </div>
            <div style="display:flex;position:relative;margin-top: 3px;">
              <img
                style="height: 12px;margin-top:5px;"
                src="../../../../../assets/img/iconmt-jsxz.png"
              />
              <span
                class="mt_xmlb_font_style"
                style="margin-left: 5px;color: gray;width: 330px;"
              >建设性质：{{item.pro_nature}}</span>
            </div>
            <div style="display:flex;position:relative;margin-top: 3px;">
              <img
                style="height: 12px;margin-top:5px;"
                src="../../../../../assets/img/iconmt-sj.png"
              />
              <span
                class="mt_xmlb_font_style"
                style="margin-left: 5px;color: gray;width: 330px;"
              >开工年月：{{item.start_work_date}}</span>
            </div>
            <div style="display:flex;position:relative;margin-top: 3px;">
              <div style="display:flex;width: 50%;">
                <img
                  style="height: 12px;margin-top:5px;"
                  src="../../../../../assets/img/iconmt-sj.png"
                />
                <span
                  class="mt_xmlb_font_style"
                  style="margin-left: 5px;color: gray;width: 330px;"
                >投资年月：{{item.production_date}}</span>
              </div>
              <div style="display:flex;width: 50%;">
                <img
                  style="height: 7px; width: 25px;margin-top:5px;"
                  src="../../../../../assets/img/jd.png"
                />
                <i
                  style="padding-left: 10px;color: #33cc33;font-size: 12px;"
                >已完成进度{{item.percentage}}%</i>
              </div>
            </div>
            <div style="width:50%;position:relative;float:right;">
              <van-progress
                v-if="item.percentage<=100"
                :show-pivot="false"
                color="#33cc33"
                :percentage="item.percentage"
              />
              <van-progress
                v-if="item.percentage>100"
                :show-pivot="false"
                color="#33cc33"
                :percentage="100"
              />
            </div>
          </div>
          <div class="van-hairline--bottom"></div>
        </div>
      </div>
    </mescroll-vue>

    <van-popup
      v-model="show"
      position="top"
      get-container="#count_id"
      :style="{ height: '48%' }"
      @opened="openPop"
      style="overflow:hidden;background:rgb(243, 243, 243);"
    >
      <div style="background:#ffffff;">
        <div style="padding-top:9px;font-size: 16px;margin-left:17px;">建设性质</div>
        <ul class="ui-row" id="jsxzListDialogId" style="margin-top: 11px;margin-right: 0px;">
          <li
            v-for="(item,index) in jsxz_dataList"
            style="width: 30%;"
            :key="index"
            :id="(item.typecode)"
            class="ui-col ui-col-25 dialogNoSelect"
          >{{item.typename}}</li>
        </ul>

        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="padding-top:9px;font-size: 16px;margin-left:17px;">开拓方式</div>
        <ul class="ui-row" id="ktfsListDialogId" style="margin-top: 11px;margin-right: 0px;">
          <li
            v-for="(item,index) in ktfs_dataList"
            style="width: 26%;"
            :key="index"
            :id="(item.typecode)"
            class="ui-col ui-col-25 dialogNoSelect"
          >{{item.typename}}</li>
        </ul>

        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="display: flex;background: #f3f3f3;height:110px;font-size:14px;">
          <div
            @click="clearType"
            style="width: 50%;height: 36px;background: #ffffff;line-height: 36px;font-size:14px;text-align: center;"
          >重置</div>
          <div
            @click="clickUlDy"
            style="background:#3ca1ec;width: 50%;height: 36px;color:#ffffff;line-height: 36px;font-size:14px;text-align: center;"
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
import Vue from "vue";
import { Tab, Tabs, Sticky } from "vant";
import { Progress } from "vant";
Vue.use(Progress);
Vue.use(Tab)
  .use(Tabs)
  .use(Sticky);
export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  data() {
    return {
      jsxz_dataList: [],
      ktfs_dataList: [],
      pro_dataList: [],
      proCount: 0,
      query_params: {
        pro_nature: "",
        pioneering_way: ""
      },
      pro_nature: "",
      pioneering_way: "",
      seach_value: "",
      show: false,
      mescroll: null, // mescroll实例对象
      selectWrwNamePage: 0,
      mescrollDown: {
        callback: this.downCallback,
        auto: false
      }, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: {
        // 上拉加载的配置.
        auto: false,
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        //以下是一些常用的配置,当然不写也可以的.
        page: {
          num: 1, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
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
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  activated() {
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#ffffff");
  },
  computed: {
    listenComponentState() {
      return this.$store.state.seach_value;
    }
  },
  watch: {
    //监听全局变量componentId的变化
    listenComponentState: function(val, oldval) {
      if (val != oldval) {
        this.seach_value = this.$store.state.seach_value;
        console.log(this.$store.state.seach_value);
        //alert(this.searchkey);
        this.pro_dataList = [];
        this.mescroll.resetUpScroll();
      }
    }
  },
  
  methods: {
    //企业列表
    upCallback: function(page, mescroll) {
      var params = {
        bloc_name: "", //集团名称
        pro_name: this.seach_value, //企业名称
        pro_nature: this.query_params.pro_nature, //性质
        pioneering_way: this.query_params.pioneering_way, //规模
        page: page.num,
        pageSize: page.size
      };
      httpMethod
        .getMtProjectList(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            $.each(res.mtJsxz.dataList, function(i, v) {
              $.each(res.dataList, function(i1, v1) {
                if (v.typecode == v1.pro_nature) {
                  v1.pro_nature = v.typename;
                }
              });
            });
            $.each(res.mtKtfs.dataList, function(i, v) {
              $.each(res.dataList, function(i1, v1) {
                if (v.typecode == v1.pioneering_way) {
                  v1.pioneering_way = v.typename;
                }
              });
            });
            this.pro_dataList = this.pro_dataList.concat(res.dataList);
            this.jsxz_dataList = res.mtJsxz.dataList;
            this.ktfs_dataList = res.mtKtfs.dataList;
            this.proCount = res.total;
          }
          this.$nextTick(() => {
            this.mescroll.endBySize(res.dataList.length, res.total);
          });
        })
        .catch(err => {
          // this.$toast(err);
          mescroll.endErr();
        });
    },

    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
      this.mescroll.resetUpScroll();
    },
    queryList: function() {
      this.show = true;
    },
    onSearch() {
      this.pro_dataList = [];
      this.mescroll.resetUpScroll();
    },
    downCallback: function() {
      this.pro_dataList = [];
      this.mescroll.resetUpScroll();
    },
    openPop: function() {
      var airList = this.alllevelist;
      var context = this;
      $("#jsxzListDialogId li").off("click");
      $("#ktfsListDialogId li").off("click");
      //企业规模选择列表
      $("#jsxzListDialogId li").click(function() {
        if ($(this).hasClass("dialogSelect")) {
          $(this).removeClass("dialogSelect");
          $(this).addClass("dialogNoSelect");
        } else {
          $(this).addClass("dialogSelect");
          $(this).removeClass("dialogNoSelect");
        }
      });
      //企业性质选择列表
      $("#ktfsListDialogId li").click(function() {
        if ($(this).hasClass("dialogSelect")) {
          $(this).removeClass("dialogSelect");
          $(this).addClass("dialogNoSelect");
        } else {
          $(this).addClass("dialogSelect");
          $(this).removeClass("dialogNoSelect");
        }
      });
    },
    clearType: function() {
      var self = this;
      //初始化 aqi
      $("#jsxzListDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
      });
      $("#ktfsListDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
      });
      (self.query_params = {
        pro_nature: "",
        pioneering_way: ""
      }),
        (self.pro_dataList = []);
      self.mescroll.resetUpScroll();
      self.show = false;
    },
    //确定
    clickUlDy: function() {
      var self = this;
      self.pro_nature = "";
      self.pioneering_way = "";
      //企业规模选择
      $("#jsxzListDialogId li").each(function() {
        if ($(this).hasClass("dialogSelect")) {
          self.pro_nature += $(this).attr("id");
          self.pro_nature += "，";
        }
      });
      //企业规模选择
      $("#ktfsListDialogId li").each(function() {
        if ($(this).hasClass("dialogSelect")) {
          self.pioneering_way = $(this).attr("id");
          self.pioneering_way += "，";
        }
      });
      self.query_params.pro_nature = self.pro_nature;
      self.query_params.pioneering_way = self.pioneering_way;
      self.show = false;
      console.log(self.query_params);
      self.pro_dataList = [];
      this.mescroll.resetUpScroll();
    },
    goDetail(item) {
      this.$router.push({
        path: "/cyzx/nyts/nyts_mt/nyts_mt_xmlb/nyts_mt_xmlb_detail/",
        name: "nyts_mt_xmlb_detail",
        params: {
          entity: item
        }
      });
    }
  }
};
</script>
<style scoped>
@import "../../../../../assets/css/frozenui.css";
@import "../../../../../page/cyzx/nyts/nyts_mt/nyts_mt_xmlb/nyts_mt_xmlb.css";
</style>