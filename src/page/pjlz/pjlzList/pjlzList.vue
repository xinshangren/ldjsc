
<template>
  <div style="margin-top:0px;overflow:hidden;">
    <div v-if="list.length<1" style="text-align: center;">
      <img style="height: 200px;margin-top: 57px;" src="../../../assets/img/no_data.png" />
    </div>
    <mescroll-vue
      id="mescroll"
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
      style="top:154px;"
    >
      <div id="newsList" style="padding-left:10px;padding-right:10px;">
        <div
          v-for="(item,index) in list"
          :key="index"
          style="padding-top:7px;padding-bottom:7px;box-shadow:0px 0px 2px #cccccc;position:relative;font-size:15px;background:#ffffff;"
        >
          <div style="position:relative;" @click="openIndexFun(item,$event)">
            <div style="display:flex;">
              <img
                v-if="item.approval_warn_flag==0"
                style="height:30px;"
                src="../../../assets/img/no_overdue.png"
              />
              <img
                v-if="item.approval_warn_flag==1"
                style="height:30px;"
                src="../../../assets/img/noverdue.png"
              />
              <div class="van-ellipsis pjlzListTitle">{{item.approval_name}}</div>
              <!-- <div v-if="item.approval_status==0" class="pjlzListblz">办理中</div>
              <div v-if="item.approval_status==1" class="pjlzListyfk">已反馈</div>
              <div v-if="item.approval_status==2" class="pjlzListwfk">未反馈</div>
              <div v-if="item.approval_status==3" class="pjlzListsqjx">申请结项</div>
              <div v-if="item.approval_status==4" class="pjlzListybj">已办结</div>-->
              <!-- <div v-if="item.approval_status==5" class="pjlzListjjjx">拒绝结项</div> -->
            </div>
            <div class="pjlzListSmallDiv">
              <img class="pjlzListSmallIcon" src="../../../assets/img/icon_people.png" />
              <div class="pjlzListSmallDivFont">承办人：</div>
              <div
                class="pjlzListSmallDivFont"
                style="margin-left:19px;"
              >{{item.approval_manage_person}}</div>
            </div>
            <div class="pjlzListSmallDiv">
              <img class="pjlzListSmallIcon" src="../../../assets/img/icon_deadline.png" />
              <div class="pjlzListSmallDivFont">办理期限：</div>
              <div class="pjlzListSmallDivFont">{{item.approval_limit_time}}</div>
            </div>
            <div class="pjlzListSmallDiv" style="margin-bottom:11px;">
              <img class="pjlzListSmallIcon" src="../../../assets/img/icon_time_pjlz.png" />
              <div class="pjlzListSmallDivFont">交办时间：</div>
              <div class="pjlzListSmallDivFont">{{item.approval_create_date}}</div>
            </div>

            <img
              v-if="item.approval_check_flag==0"
              class="pjlzListImgRightNew"
              src="../../../assets/img/state_1.png"
            />
            <!-- <div v-if="item.approval_status==0" class="pjlzListblz">办理中</div>
              <div v-if="item.approval_status==1" class="pjlzListyfk">已反馈</div>
              <div v-if="item.approval_status==2" class="pjlzListwfk">未反馈</div>
              <div v-if="item.approval_status==3" class="pjlzListsqjx">申请结项</div>
            <div v-if="item.approval_status==4" class="pjlzListybj">已办结</div>-->
            <!-- <div v-if="item.approval_status==5" class="pjlzListjjjx">拒绝结项</div> -->
            <img
              v-if="item.approval_check_flag==1&&item.approval_status==1"
              class="pjlzListImgRightNew"
              src="../../../assets/img/state_3.png"
            />
            <img
              v-if="item.approval_check_flag==1&&item.approval_status==2"
              class="pjlzListImgRightNew"
              src="../../../assets/img/state_2.png"
            />
            <img
              v-if="item.approval_check_flag==1&&item.approval_status==3"
              class="pjlzListImgRightNew"
              src="../../../assets/img/state_4.png"
            />
            <img
              v-if="item.approval_check_flag==1&&item.approval_status==4"
              class="pjlzListImgRightNew"
              src="../../../assets/img/state_6.png"
            />
            <img
              v-if="item.approval_check_flag==1&&item.approval_status==5"
              class="pjlzListImgRightNew"
              src="../../../assets/img/state_5.png"
            />
            <div
              @click="openYjcbFun(item,$event)"
              v-if="(flag.role=='ld'||flag.role=='wdk')&&(item.approval_status!=4&&item.approval_status!=3)"
              class="pjlzListyjcbNew"
            >
              <div style="width:46%;text-align:right;margin-right:3px;">
                <img class="pjlzListyjcbImg" src="../../../assets/img/icon_urge.png" />
              </div>
              <div class="pjlzListyjcbfont">一键催办</div>
            </div>

            <div
              @click="openShsqFun(item,$event)"
              v-if="flag.role=='wdk'&&item.approval_status==3"
              class="pjlzListyjcb"
            >
              <div style="width:46%;text-align:right;margin-right:3px;">
                <img class="pjlzListyjcbImg" src="../../../assets/img/icon_check.png" />
              </div>
              <div class="pjlzListyjcbfont">审核申请</div>
            </div>
            <div style="display:flex;">
              <div
                v-if="flag.role=='cbr'&&item.approval_status==1"
                class="pjlzListyjcbNew"
                @click="openSqjxFun(item,$event)"
              >
                <div style="width:33%;text-align:right;margin-right:3px;">
                  <img class="pjlzListyjcbImg" src="../../../assets/img/icon_complete.png" />
                </div>
                <div class="pjlzListyjcbfont">申请结项</div>
              </div>
              <div
                @click="openFkFun(item,$event)"
                v-if="(flag.role=='cbr'&&(item.approval_status==2||item.approval_status==0||item.approval_status==5))"
                class="pjlzListyjcbNew"
              >
                <div style="width:46%;text-align:right;margin-right:3px;">
                  <img class="pjlzListyjcbImg" src="../../../assets/img/icon_feedback.png" />
                </div>
                <div class="pjlzListyjcbfont">反馈</div>
              </div>
            </div>
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
          <li id="0" class="ui-col ui-col-25 dialogSelect" style="width:30%;">全部</li>
          <li id="1" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">超期</li>
          <li id="2" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">未超期</li>
        </ul>

        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">是否结办</div>

        <ul class="ui-row" id="sfbjDialogId" style="margin-top: 11px;">
          <li id="0" class="ui-col ui-col-25 dialogSelect" style="width:30%;">全部</li>
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
import { Tab, Tabs, Search, Popup } from "vant";
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
      flag: {
        dingUserId: "",
        role: "",
        department: "",
        username: ""
      }, //判断角色
      currentView: "child1",
      isOvertime: "0", //是否超期：0-全部，1-超期，2-未超期
      status: "0", //办理状态:0-全部，1-办理中，2-已结办，3-申请结办
      list: [],
      Popshow: false,
      mescroll: null, // mescroll实例对象
      mescrollDown: {}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      nodataImg: require("../../../assets/img/nodata.png"),
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        auto: false,
        //以下是一些常用的配置,当然不写也可以的.
        page: {
          num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10 //每页数据条数,默认10
        },
        htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
        noMoreSize: 3,
        empty: {
          //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
          warpId: "newsList", //父布局的id (1.3.5版本支持传入dom元素)
          // icon: "../../../assets/img/nodata.png", //图标,默认null,支持网络图
          tip: "" //提示
        }
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log(from);
    console.log(to);
    next();
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
        this.mescroll.resetUpScroll();
      }
    }
  },
  mounted() {
    // this.flag=global_variable.roleJs;
    var shaixuan = this.$parent.$root.$children[0].$refs.shaixuanImgId;
    var search_allref = this.$parent.$root.$children[0].seach_value;

    console.log(search_allref);
    var self = this;
    if (global_variable.singleApp != 1) {
      shaixuan.addEventListener("click", function() {
        console.log("openPop");
        self.Popshow = true;
      });
    }

    console.log(global_variable.roleJs);
    if (global_variable.roleJs != null) {
      self.flag = global_variable.roleJs;
    }
    console.log(self.flag);
    // self.flag.role="cbr";
    if (self.flag.role != "ld") {
      self.createListTop();
    }
    self.pdSingleApp();
  },
  methods: {
    //判断是否是单独app
    pdSingleApp: function() {
      String.prototype.getValue = function(parm) {
        var reg = new RegExp("(^|&)" + parm + "=([^&]*)(&|$)");
        var r = this.substr(this.indexOf("?") + 1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
      };
      var hrefUrl = window.location.href;
      var indexUrl = hrefUrl.replace("#", "");

      var url = decodeURI(hrefUrl);
      console.log(url);
      var detail = url.getValue("type");
      console.log("type===" + detail);
      if (detail == "1") {
        $("#mescroll").css("top", "113px");
        // this.showRightMenu();
        this.getUserInfo();
        // this.status=1;
        this.mescroll.resetUpScroll();
        var shaixuanApp = this.$parent.$refs.PjlzshaixuanImgId;
        console.log(shaixuanApp);
        var self = this;
        shaixuanApp.addEventListener("click", function() {
          console.log("openPop");
          self.Popshow = true;
        });
      } else {
        this.mescroll.resetUpScroll();
      }
    },
    createListTop: function(top) {
      $("#mescroll").css("top", "210px");
    },
    //切换办理中和已办结
    changetabState: function(state) {
      console.log(state);
      this.status = state;
      this.mescroll.resetUpScroll();
    },
    //切换办理中和已办结
    resetUpScroll: function(name) {
      // console.log(name);
      this.seach_value = name;
      this.mescroll.resetUpScroll();
    },
    //刷新列表
    resetList: function() {
      this.mescroll.resetUpScroll();
    },
    openPopStart: function() {
      $("#openPopId").css("z-index", "10003");
    },
    openPop: function() {
      console.log("openPop");
      $("#openPopId").css("z-index", "10003");
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
      //是否超期
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
    //获取用户角色
    getUserInfo: function() {
      var self = this;
      dd.ready(function() {
        dd.runtime.permission.requestAuthCode({
          corpId: "dingf1c7cc28f05dbd2335c2f4657eb6378f", // 企业id
          onSuccess: function(info) {
            var code = info.code; // 通过该免登授权码可以获取用户身份
            var params = {
              method: "getUserInfo",
              code: code
            };
            httpMethod.getApprovalInfo(params).then(res => {
              console.log(JSON.stringify(res));
              if (res.success == "1") {
                global_variable.roleJs = Object.assign(
                  {},
                  global_variable.roleJs,
                  {
                    dingUserId: res.data.dingUserId,
                    username: res.data.username,
                    role: res.data.role,
                    department: res.data.department
                  }
                );
                self.flag = global_variable.roleJs;
                self.mescroll.resetUpScroll();
                console.log(global_variable.roleJs);
                console.log(self.flag);
                // var roleCode=res.data.role;
                // global_variable.roleCode=res.data.role;//cbr=承办人 wdk=文电科 ld=领导
              }
            });
          },
          onFail: function(err) {
            alert("dd error: " + JSON.stringify(err));
          }
        });
      });
    },
    clickUlDy: function() {
      var context = this;
      //循环获取选中的是否办结
      $("#sfbjDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        if (isSelect) {
          console.log($(this).attr("id"));
          context.status = $(this).attr("id");
        }
      });

      //循环获取选中的是否超期
      $("#sfcqDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        if (isSelect) {
          context.isOvertime = $(this).attr("id");
        }
      });
      this.mescroll.resetUpScroll();
      this.Popshow = false;
    },
    clearType: function() {
      var context = this;
      //循环重置查询条件
      $("#sfbjDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
      });
      //循环重置查询条件
      $("#sfcqDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
      });

      context.isOvertime = "";
      context.status = "";
      // context.projectNature = "";
      this.mescroll.resetUpScroll();
      this.Popshow = false;
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    //项目列表
    upCallback: function(page, mescroll) {
      var params = {
        method: "getApprovalInfoList",
        pageNo: page.num,
        pageSize: page.size,
        // corpId:global_variable.corpId,
        // dingUserId: "086404191926187734",
        dingUserId: global_variable.roleJs.dingUserId,
        approvalKeywords: this.seach_value, //关键词
        isOvertime: this.isOvertime, //是否超期：0-全部，1-超期，2-未超期
        status: this.status, //办理状态:0-全部，1-办理中，2-已结办，3-申请结办
        createDateBegin: "",
        createDateEnd: ""
      };
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            if (page.num == 1) {
              this.list = [];
              // this.$refs.totalCountId.innerHTML = res.total;
            }
            var data = res.data.approvallist;
            if (data && data.length > 0) {
              //  this.list = [];
              this.list = this.list.concat(data);
              //  this.list = this.list.concat(data);
              //   this.list = this.list.concat(data);
            } else {
              data = [];
              this.list = [];
              res.data.total = 0;
            }

            this.$nextTick(() => {
              this.mescroll.endBySize(data.length, res.data.total);
            });
          }
        })
        .catch(err => {
          // this.$toast(err);
          mescroll.endErr();
        });
    },
    //申请结项
    openSqjxFun: function(item, e) {
      this.$parent.showSqjxPop(item);
      e.stopPropagation();
    },
    //一键催办跳转
    openYjcbFun: function(item, e) {
      this.$router.push({
        path: "/pjlz/pjlzDetail_cb/pjlzDetail_cb",
        name: "pjlzDetail_cb",
        params: {
          obj: item
        }
      });
      e.stopPropagation();
    },
    //审核申请跳转
    openShsqFun: function(item, e) {
      this.$router.push({
        path: "/pjlz/pjlzDetail_jx/pjlzDetail_jx",
        name: "pjlzDetail_jx",
        params: {
          obj: item
        }
      });
      e.stopPropagation();
    },
    //反馈跳转
    openFkFun: function(item, e) {
      this.$router.push({
        path: "/pjlz/pjlzDetail_fk/pjlzDetail_fk",
        name: "pjlzDetail_fk",
        params: {
          obj: item
        }
      });
      e.stopPropagation();
    },
    //列表大块的点击事件
    openIndexFun: function(item, e) {
    
      e.stopPropagation();
    }
  }
};
</script>

<style >
@import "../../../page/pjlz/pjlzList/pjlzList.css";
.van-popup--top {
  z-index: 100000;
}
</style>
