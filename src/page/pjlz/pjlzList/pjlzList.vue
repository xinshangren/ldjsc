
<template>
  <div style="margin-top:0px;">
    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
      <div id="newsList" style="padding-left:10px;padding-right:10px;">
        <div
          v-for="(item,index) in list"
          :key="index"
          style="padding-top:7px;padding-bottom:7px;box-shadow:0px 0px 2px #cccccc;position:relative;font-size:15px;background:#ffffff;"
        >
          <div style="position:relative;">
            <div style="display:flex;">
              <img style="height:30px;" src="../../../assets/img/no_overdue.png" />
              <!-- <img style="height:30px;" src="../../../assets/img/noverdue.png" /> -->
              <div class="van-ellipsis pjlzListTitle">就初步确定的2020年就初步确定的2020年</div>
              <div class="pjlzListblz">办理中</div>
              <!-- <div class="pjlzListybj">已办结</div> -->
              <!-- <div class="pjlzListsqjx">申请结项</div> -->

              <!-- <div class="pjlzListjjjx">拒绝结项</div> -->
            </div>
            <div class="pjlzListSmallDiv">
              <img class="pjlzListSmallIcon" src="../../../assets/img/icon_people.png" />
              <div class="pjlzListSmallDivFont">承办人：</div>
              <div class="pjlzListSmallDivFont">张三</div>
            </div>
            <div class="pjlzListSmallDiv">
              <img class="pjlzListSmallIcon" src="../../../assets/img/icon_deadline.png" />
              <div class="pjlzListSmallDivFont">办理期限：</div>
              <div class="pjlzListSmallDivFont">3个工作日</div>
            </div>
            <div class="pjlzListSmallDiv" style="margin-bottom:11px;">
              <img class="pjlzListSmallIcon" src="../../../assets/img/icon_time_pjlz.png" />
              <div class="pjlzListSmallDivFont">交办时间：</div>
              <div class="pjlzListSmallDivFont">2020年3月10日</div>
            </div>

            <!-- <div class="pjlzListyjcb">
              <img class="pjlzListyjcbImg" src="../../../assets/img/icon_urge.png" />
              <div class="pjlzListyjcbfont">一键催办</div>
            </div> -->

            <div class="pjlzListyjcb"  @click="openSqjxFun(item,$event)">
              <img class="pjlzListyjcbImg" src="../../../assets/img/icon_complete.png" />
              <div class="pjlzListyjcbfont">申请结项</div>
            </div>

            <!-- <div class="pjlzListyjcb">
              <img class="pjlzListyjcbImg" src="../../../assets/img/icon_check.png" />
              <div class="pjlzListyjcbfont">审核申请</div>
            </div>-->

            <!-- <div class="pjlzListyjcb">
              <img class="pjlzListyjcbImg" src="../../../assets/img/icon_feedback.png" />
              <div class="pjlzListyjcbfont">反馈</div>
            </div>-->
          </div>
        </div>
      </div>
    </mescroll-vue>
     <!-- 挂载到 #app 节点下 -->
    <!-- 自定义图标 -->
    <van-popup
      id="openPopId"
      v-model="Popshow"
      position="top"
      get-container="body"
      :style="{ height: '45%' }"
      @opened="openPop"
      @open="openPopStart"
      style="overflow:hidden;background:rgb(243, 243, 243);"
    >
      <div style="background:#ffffff;">
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">是否超期</div>
        <ul id="sfcqDialogId" class="ui-row" style="margin-top: 11px;">
          <li id="0" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">全部</li>
          <li id="1" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">超期</li>
          <li id="2" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">未超期</li>
        </ul>

        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">是否结办</div>

        <ul class="ui-row" id="sfbjDialogId" style="margin-top: 11px;">
          <li id="0" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">全部</li>
          <li id="1" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">办理中</li>
          <li id="2" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">已办结</li>
           <li id="3" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">申请办结</li>
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
import $ from "jquery";
import Vue from "vue";
import { Tab, Tabs, Search,Popup } from "vant";
import dd from "dingtalk-jsapi";
import MescrollVue from "mescroll.js/mescroll.vue";
Vue.use(Tab)
  .use(Tabs)
  .use(Search)
  .use(Popup);
import global_variable from "../../../api/global_variable.js";
import { httpMethod } from "../../../api/getData.js";
export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "pjlzListvue",
  data() {
    return {
      seach_value: "",
      active: 0,
      flag: 0, //判断角色
      currentView: "child1",
      list: [],
      Popshow:false,
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
  beforeRouteEnter(to, from, next) {
    console.log(from);
    console.log(to);
    next();
  },
  mounted() {
    var shaixuan=(this.$parent.$root.$children)[0].$refs.shaixuanImgId;
    // console.log(shaixuan);
    var self=this;
    shaixuan.addEventListener('click',function(){
      console.log("openPop");
           self.Popshow=true;
    });
  },
  methods: {
    openPopStart:function(){
        $("#openPopId").css("z-index","10003");
    },
     openPop: function() {
       console.log("openPop");
       $("#openPopId").css("z-index","10003");
      //是否办结
      $("#sfbjDialogId li").off("click");
      $("#sfbjDialogId li").click(function(e) {
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
      $("#sfcqDialogId li").off("click");
      //选择进度类型
      $("#sfcqDialogId li").click(function(e) {
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
    },
    clickUlDy: function() {
      var context = this;
      //循环获取选中的是否办结
      $("#sfbjDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        if (isSelect) {
          console.log($(this).attr("id"));
          context.projectNature = $(this).attr("id");
        }
      });

      //循环获取选中的是否超期
      $("#sfcqDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        if (isSelect) {
          context.buildAddr = $(this).attr("id");
        }
      });
      this.mescroll.resetUpScroll();
      this.Popshow = false;
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

      context.zdProType = "";
      context.buildAddr = "";
      context.projectNature = "";
      this.mescroll.resetUpScroll();
      this.show = false;
    },
    changeListState: function(state) {
      console.log(state);
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    //项目列表
    upCallback: function(page, mescroll) {
      var params = {
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
              // this.$refs.totalCountId.innerHTML = res.total;
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
    //申请结项
    openSqjxFun:function(item,e){
      this.$parent.showSqjxPop(item);
       e.stopPropagation(); //非IE浏览器
    }
  }
};
</script>

<style >
@import "../../../page/pjlz/pjlzList/pjlzList.css";
.van-popup--top{
  z-index: 100000;
}
</style>
