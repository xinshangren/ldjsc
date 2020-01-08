<template>
  <div style="
    margin-top:0px;overflow:hidden;
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
      <div style="width:33%;text-align:right;color:#1976d2;margin-top:6px;">共</div>
      <div ref="totalCountId" style="color:#1976d2;font-size:24px;">0</div>
      <div style="width:48%;color:#1976d2;margin-top:6px;">个重点污染源</div>
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
          <div style="display:flex;">
            <img
              style="margin-left: 10px;height: 15px;margin-top: 2px;"
              src="../../../../../assets/img/reseau_list_icon1.png"
            />
            <div style="width: 184px;margin-left: 6px;color: #333333;font-size: 14px;" class="van-ellipsis">{{item.PSName}}</div>
            <img
              style="margin-left:10px;height:20px;"
              v-if="item.PSClassName=='一般工业企业'"
              src="../../../../../assets/img/company_pollution_tab1.png"
            />
            <img
              style="margin-left:10px;height:20px;"
              v-if="item.PSClassName=='污水处理厂'"
              src="../../../../../assets/img/company_pollution_tab2.png"
            />
          </div>

          <div style="display:flex;position:relative;margin-top:7px;">
            <img  style="margin-left: 10px;height: 15px;margin-top: 2px;" src="../../../../../assets/img/reseau_list_icon2.png"/>
            <div style="width: 220px;margin-left: 6px;color: #333333;font-size: 14px;" class="van-ellipsis">{{item.PSAddress}}</div>
            <div style="font-size: 13px;color: #12b6ee;padding: 0px 5px;border: 1px solid  #12b6ee;border-radius: 5px;position:absolute;right:19px;"  v-if="item.AttentionDegreeName=='国控'">国控</div>
            <div style="font-size: 13px;color: #ff9900;padding: 0px 5px;border: 1px solid  #ff9900;border-radius: 5px;position:absolute;right:19px;" v-if="item.AttentionDegreeName=='省控'">省控</div>
            <div  style="font-size: 13px;color: #1bdab9;padding: 0px 5px;border: 1px solid  #1bdab9;border-radius: 5px;position:absolute;right:19px;" v-if="item.AttentionDegreeName=='市控'">市控</div>
            <div  style="font-size: 13px;color: #9230e5;padding: 0px 5px;border: 1px solid  #9230e5;border-radius: 5px;position:absolute;right:19px;"  v-if="item.AttentionDegreeName=='非重点污染源'">非重点污染源</div>
          </div>
          <div style="display:flex;margin-top:5px;">
            <img style="margin-top:3px;margin-left:10px;height:15px;" src="../../../../../assets/img/company_list_icon1.png"/>
            <div style="margin-left:4px;font-size: 14px;color: #666666;">{{item.AreaName}}</div>

            <img style="margin-top:3px;margin-left:30px;height:15px;" src="../../../../../assets/img/company_list_icon2.png"/>
            <div style="margin-left:4px;font-size: 14px;color: #666666;">{{item.ValleyName}}</div>

            <img style="margin-top:2px;margin-left:30px;height:15px;" src="../../../../../assets/img/company_list_icon3.png"/>
            <div style="margin-left:4px;font-size: 14px;color: #666666;">是否预警:</div>
            <div v-if="item.warning=='是'" style="margin-left:4px;font-size: 14px;color: #f30011;">{{item.warning}}</div>
            <div v-if="item.warning=='否'" style="margin-left:4px;font-size: 14px;color: #666666;">{{item.warning}}</div>
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
        <ul id="wrylxDialogId" class="ui-row" style="margin-top: 11px;margin-right: 15px;">
          <li
            v-for="(item,index) in  typelist"
            :key="index"
            :id="(index)"
            class="ui-col ui-col-50 dialogSelect"
            style="width:43%;"
          >{{item.PSClassName}}</li>
        </ul>

        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">所处区县</div>

        <ul class="ui-row" id="scqxDialogId" style="margin-top: 11px;margin-right: 15px;">
          <li
            v-for="(item,index) in  districtlist"
            :key="index"
            :class="[index==0?'ui-col ui-col-50 dialogSelect':'ui-col ui-col-50 dialogNoSelect']"
            :id="(item.typecode)"
            style="width:43%;"
          >{{item.typename}}</li>
        </ul>
        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">关注程度</div>

        <ul class="ui-row" id="gzcdDialogId" style="margin-top: 11px;margin-right: 15px;">
          <li
            v-for="(item,index) in  attentionlist"
            :key="index"
            :id="(item.AttentionDegreeCode)"
            class="ui-col ui-col-50 dialogSelect"
            style="width:43%;"
          >{{item.AttentionDegreeName}}</li>
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
import { hbgjAirJs } from "../../../../../page/zdgz/hbgj/hbgj_wrqy/hbgj_zdqylb/hbgj_zdqylb.js";
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
      show: false,
      seach_value: "",
      active: 0,
      list: [],
      typelist: [],
      attentionlist: [],
      districtlist: [],
      zdgzcd: "国控，省控，市控，非重点污染源",
      zdcurtype: "一般工业企业，污水处理厂",
      zdareaName: "全部",
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
    this.getQueryForFound();
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
        PSAddress: this.zdareaName, //区域
        AttentionDegreeNames: this.zdgzcd, //关注程度
        PSClassNames: this.zdcurtype, //污染源类型
        PSName: this.seach_value,
        page: page.num,
        pageSize: page.size,
        type: 1
      };
      httpMethod
        .getBaseinfoCompany(params)
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
    //污染源企业列表筛选字典
    getQueryForFound: function() {
      var params = {
        type: "district"
      };
      httpMethod
        .getQueryForFound(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            this.typelist = res.typelist; //污染源类型
            this.attentionlist = res.attentionlist; //关注程度
            this.districtlist = res.districtlist; //地域数据list
            var map = {
              typecode: "",
              typename: "晋城市"
            };
            this.districtlist.unshift(map);
          }
        })
        .catch(err => {});
    },
    openPop: function() {
      setTimeout(function() {
        var self = this;
        //污染源类型最少选一
        $("#wrylxDialogId li").click(function(e) {
          if ($(this).hasClass("dialogSelect")) {
            //循环获取选中的
            var index = 0;
            $("#wrylxDialogId li").each(function() {
              var isSelect = $(this).hasClass("dialogSelect");
              var id = $(this).html();
              if (isSelect) {
                index++;
              }
            });
            if (index > 1) {
              $(this).removeClass("dialogSelect");
              $(this).addClass("dialogNoSelect");
            } else {
              self.$toast("最少选择一项");
            }
          } else {
            $(this).addClass("dialogSelect");
            $(this).removeClass("dialogNoSelect");
          }
        });
        //所处区县单选
        $("#scqxDialogId li").click(function(e) {
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
        //关注程度
        $("#gzcdDialogId li").click(function(e) {
          if ($(this).hasClass("dialogSelect")) {
            $(this).removeClass("dialogSelect");
            $(this).addClass("dialogNoSelect");
          } else {
            $(this).addClass("dialogSelect");
            $(this).removeClass("dialogNoSelect");
          }
        });
      }, 500);
    },
    clickUlDy: function() {
      var context = this;
      context.zdcurtype = ""; //污染源类型
      context.zdgzcd = ""; //关注程度
      context.zdareaName = ""; //区域
      //循环获取污染源类型
      $("#wrylxDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        if (isSelect) {
          if (context.zdcurtype != "") {
            context.zdcurtype += "，" + $(this).html();
          } else {
            context.zdcurtype += $(this).html();
          }
        }
      });
      //所属区域
      $("#scqxDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        var id = $(this).html();
        if (isSelect) {
          if (id === "晋城市") {
            id = "全部";
          }
          if (context.zdareaName != "") {
            context.zdareaName += "，" + id;
          } else {
            context.zdareaName += id;
          }
        }
      });
      //关注程度
      $("#gzcdDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        var id = $(this).html();
        if (isSelect) {
          if (context.zdgzcd != "") {
            context.zdgzcd += "，" + id;
          } else {
            context.zdgzcd += id;
          }
        }
      });
      this.mescroll.resetUpScroll();
      this.show = false;
    },
    clearType: function() {
      var context = this;
      //循环重置查询条件污染源类型
      $("#wrylxDialogId li").each(function() {
        $(this).removeClass("dialogNoSelect");
        $(this).addClass("dialogSelect");
      });
      //循环重置查询条件//所属区域
      $("#scqxDialogId li").each(function() {
        if ($(this).index() == 0) {
          $(this).removeClass("dialogNoSelect");
          $(this).addClass("dialogSelect");
        } else {
          $(this).removeClass("dialogSelect");
          $(this).addClass("dialogNoSelect");
        }
      });
      //循环重置查询条件关注类型
      $("#gzcdDialogId li").each(function() {
        $(this).removeClass("dialogNoSelect");
        $(this).addClass("dialogSelect");
      });

      context.zdgzcd = "国控，省控，市控，非重点污染源";
      context.zdcurtype = "一般工业企业，污水处理厂";
      context.zdareaName = "全部";
      this.mescroll.resetUpScroll();
      this.show = false;
    },
    goDetile(item) {
      //console.log(item);
      this.$router.push({
        path: "/zdgz/hbgj/hbgj_wrqy/hbgj_zdqylb/hbgj_zdqylb_deali/hbgj_zdqylb_deali",
        name: "hbgj_zdqylb_deali",
        params: {
          entity: item
        }
      });
    }
  }
};
</script>

<style scoped>
@import "../../../../../page/zdgz/hbgj/hbgj_wrqy/hbgj_zdqylb/hbgj_zdqylb.css";
@import "../../../../../assets/css/frozenui.css";
</style>