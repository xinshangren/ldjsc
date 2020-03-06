<template>
  <div style="margin-top:0px;overflow:hidden;">
    <!-- <div class="div_flex" style="background:#ffffff;height:49px;display:flex;">
      <form action="/" style="width: 84%;margin-left:13px;margin-top:8px;">
        <van-search placeholder="请输入企业名称" @search="onSearch" v-model="pro_name" />
      </form> -->
        <img
      src="../../../../../assets/img/project_filtrate.png"
      style=" height: 26px; top:20px; position: absolute; right: 128px; z-index: 3;"
      @click="queryList"
    />
    <!-- </div> -->
    <div id="count_id" style="display:flex;">
      <div style="width:48%;text-align:right;margin-top:8px;font-size:14px;">项目总数</div>
      <div ref="totalCountId" style="color:#1976d2;font-size:24px;">{{compCount}}</div>
      <div style="width:48%;color:#1976d2;margin-top:8px;font-size:14px;">项</div>
    </div>

    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
      <div
        id="newsList"
        style="margin-top:3px;margin-left:10px;margin-right:10px;box-shadow:1px 1px 2px 3px  #f3f3f3;"
      >
        <div
          v-for="(item,index) in comp_dataList"
          :key="index"
          @click="goDetail(item)"
          style="position:relative;"
        >
          <div style="padding:7px;">
            <div style="display:flex;position:relative;">
              <p
                class="xnyxmlb_font_style"
                style="display: block;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"
              >{{item.pro_name}}</p>
            </div>
            <div style="display:flex;position:relative;font-size:15px;">
              <div style="margin-left: 10px;margin-top: 3px;">
                <img
                  class="xny_xmlxImg"
                  v-if="item.pro_type == 1"
                  src="../../../../../assets/img/xny-qy-gd.png"
                />
                <img
                  class="xny_xmlxImg"
                  v-if="item.pro_type == 2"
                  src="../../../../../assets/img/xny-qy-fd.png"
                />
                <img
                  class="xny_xmlxImg"
                  v-if="item.pro_type == 3"
                  src="../../../../../assets/img/xny-qy-swzfd.png"
                />
                <img
                  class="xny_xmlxImg"
                  v-if="item.pro_type == 4"
                  src="../../../../../assets/img/xny-qy-sd.png"
                />
                <img
                  class="xny_xmlxImg"
                  v-if="item.pro_type == 5"
                  src="../../../../../assets/img/xny-qy-qt.png"
                />
              </div>
              <div style="margin-left: 10px;margin-top: 3px;">
                <img
                  class="xny_xmjdImg"
                  v-if="item.project_phase == 1"
                  src="../../../../../assets/img/xny-xm-zj.png"
                />
                <img
                  class="xny_xmjdImg"
                  v-if="item.project_phase == 2"
                  src="../../../../../assets/img/xny-xm-yyx.png"
                />
                <img
                  class="xny_xmjdImg"
                  v-if="item.project_phase == 3"
                  src="../../../../../assets/img/xny-xm-tjqq.png"
                />
                <img
                  class="xny_xmjdImg"
                  v-if="item.project_phase == 4"
                  src="../../../../../assets/img/xny-xm-xz.png"
                />
              </div>
            </div>
            <div style="display:flex;position:relative;">
              <img
                style="height: 13px;margin-top:3px;"
                src="../../../../../assets/img/details_icon17.png"
              />
              <span
                class="xnyxmlb_font_style"
                style="margin-left: 5px;color: gray;width: 330px;"
              >所属区县：{{item.counties}}</span>
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
      :style="{ height: '63%' }"
      @opened="openPop"
      style="overflow:hidden;background:rgb(243, 243, 243);"
    >
      <div style="background:#ffffff;">
        <div style="padding-top:9px;font-size: 16px;margin-left:17px;">项目类型</div>
        <ul class="ui-row" id="xmlxListDialogId" style="margin-top: 11px;margin-right: 0px;">
          <li
            v-for="(item,index) in xmlx_dataList"
            style="width: 26%;"
            :key="index"
            :id="(item.typecode)"
            class="ui-col ui-col-25 dialogNoSelect"
          >{{item.typename}}</li>
        </ul>
        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="padding-top:9px;font-size: 16px;margin-left:17px;">项目阶段</div>
        <ul class="ui-row" id="xmjdListDialogId" style="margin-top: 11px;margin-right: 0px;">
          <li
            v-for="(item,index) in xmjd_dataList"
            :key="index"
            :id="(item.typecode)"
            class="ui-col ui-col-25 dialogNoSelect"
          >{{item.typename}}</li>
        </ul>
        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="padding-top:9px;font-size: 16px;margin-left:17px;">所属区域</div>
        <ul id="ssqyListDialogId" class="ui-row" style="margin-top: 11px;margin-right: 0px;">
          <li
            v-for="(item,index) in ssqy_dataList"
            :key="index"
            :id="(item.typecode)"
            class="ui-col ui-col-25 dialogNoSelect"
          >{{item.typename}}</li>
        </ul>
        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="display: flex;background: #f3f3f3;height:110px;">
          <div
            @click="clearType"
            style="width: 50%;height: 36px;background: #ffffff;line-height: 36px;text-align: center;font-size:14px;"
          >重置</div>
          <div
            @click="clickUlDy"
            style="background:#3ca1ec;width: 50%;height: 36px;color:#ffffff;line-height: 36px;text-align: center;font-size:14px;"
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
import { nytsMcqQylbJs } from "../../../../../page/cyzx/nyts/nyts_xny/nyts_xny_xmlb/nyts_xny_xmlb.js";
export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  data() {
    return {
      xmlx_dataList: [],
      xmjd_dataList: [],
      ssqy_dataList: [],
      comp_dataList: [],
      compCount: 0,
      query_params: {
        counties: "", //所属区县
        pro_type: "", //项目类型
        project_phase: "" //项目阶段
      },
      pro_name: "",
      pro_type: "",
      counties: "",
      project_phase: "",
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
        this.pro_name = this.$store.state.seach_value;
        console.log(this.$store.state.seach_value);
        //alert(this.searchkey);
        this.comp_dataList = [];
        this.mescroll.resetUpScroll();
      }
    }
  },
  methods: {
    //企业列表
    upCallback: function(page, mescroll) {
      var params = {
        pro_name: this.pro_name, //名称
        pro_type: this.query_params.pro_type, //类型
        counties: this.query_params.counties, //区县
        project_phase: this.query_params.project_phase, //阶段
        page: page.num,
        pageSize: page.size
      };
      httpMethod
        .getXnyProjectList(params)
        .then(res => {
          console.log(params);
          console.log(res);
          if (res.success == "1") {
            this.xmjd_dataList = res.xnyphase.dataList;
            this.xmlx_dataList = res.xnytype.dataList;
            this.ssqy_dataList = res.county.dataList;
            this.compCount = res.total;
            $.each(res.dataList, function(i, v) {
              switch (v.counties) {
                case "1":
                  v.counties = "市直";
                  break;
                case "2":
                  v.counties = "城区";
                  break;
                case "3":
                  v.counties = "泽州县";
                  break;
                case "4":
                  v.counties = "沁水县";
                  break;
                case "5":
                  v.counties = "高平市";
                  break;
                case "6":
                  v.counties = "阳城县";
                  break;
                case "7":
                  v.counties = "陵川县";
                  break;
                default:
                  break;
              }
            });
          }
          this.comp_dataList = this.comp_dataList.concat(res.dataList);
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
      this.comp_dataList = [];
      this.mescroll.resetUpScroll();
    },
    downCallback: function() {
      this.listValue = [];
      this.mescroll.resetUpScroll();
    },
    openPop: function() {
      var self = this;
      $("#xmlxListDialogId li").off("click");
      $("#xmjdListDialogId li").off("click");
      $("#ssqyListDialogId li").off("click");
      //项目类型选择列表
      $("#xmlxListDialogId li").click(function() {
        if ($(this).hasClass("dialogSelect")) {
          $(this).removeClass("dialogSelect");
          $(this).addClass("dialogNoSelect");
        } else {
          $(this).addClass("dialogSelect");
          $(this).removeClass("dialogNoSelect");
        }
      });
      //项目阶段吗选择列表
      $("#xmjdListDialogId li").click(function() {
        if ($(this).hasClass("dialogSelect")) {
          $(this).removeClass("dialogSelect");
          $(this).addClass("dialogNoSelect");
        } else {
          $(this).addClass("dialogSelect");
          $(this).removeClass("dialogNoSelect");
        }
      });
      //区域选择列表
      $("#ssqyListDialogId li").click(function(e) {
        if ($(this).hasClass("dialogSelect")) {
          $(this).removeClass("dialogSelect");
          $(this).addClass("dialogNoSelect");
        } else {
          $(this).addClass("dialogSelect");
          $(this).removeClass("dialogNoSelect");
          $(this)
            .siblings("li")
            .addClass("dialogNoSelect");
          $(this)
            .siblings("li")
            .removeClass("dialogSelect");
        }
      });
    },
    clearType: function() {
      var self = this;
      //初始化 aqi
      $("#xmlxListDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
      });
      $("#xmjdListDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
      });
      $("#ssqyListDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
      });
      (self.query_params = {
        pro_type: "",
        counties: "",
        project_phase: ""
      }),
        (self.comp_dataList = []);
      self.mescroll.resetUpScroll();
      self.show = false;
    },
    //确定
    clickUlDy: function() {
      var self = this;
      self.ent_scale = "";
      self.counties = "";
      self.ent_nature = "";
      self.ent_type = "";
      //项目类型选择
      $("#xmlxListDialogId li").each(function() {
        if ($(this).hasClass("dialogSelect")) {
          self.pro_type += $(this).attr("id");
          self.pro_type += "，";
        }
      });
      //项目阶段选择
      $("#xmjdListDialogId li").each(function() {
        if ($(this).hasClass("dialogSelect")) {
          self.project_phase += $(this).attr("id");
          self.project_phase += "，";
        }
      });
      //所属区域选择
      $("#ssqyListDialogId li").each(function() {
        if ($(this).hasClass("dialogSelect")) {
          self.counties = $(this).attr("id");
        }
      });
      self.query_params.pro_type = self.pro_type;
      self.query_params.counties = self.counties;
      self.query_params.project_phase = self.project_phase;
      self.show = false;
      self.comp_dataList = [];
      console.log(self.query_params);
      this.mescroll.resetUpScroll();
    },
    goDetail(item) {
      this.$router.push({
        path: "/cyzx/nyts/nyts_xny/nyts_xny_xmlb/nyts_xny_xmlb_detail/",
        name: "nyts_xny_xmlb_detail",
        params: {
          entity: item
        }
      });
    }
  }
};
</script>
<style scoped>
@import "../../../../../page/cyzx/nyts/nyts_xny/nyts_xny_xmlb/nyts_xny_xmlb.css";
@import "../../../../../assets/css/frozenui.css";
</style>