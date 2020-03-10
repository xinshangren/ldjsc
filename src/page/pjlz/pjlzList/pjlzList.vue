
<template>
  <div style="margin-top:0px;overflow:hidden;">
    <div v-if="list.length<1" style="text-align: center;">
      <img style="height: 200px;margin-top: 57px;" src="../../../assets/img/no_data.png" />
    </div>
    <div id="count_id" style="display:flex;top:154px;position:fixed;width:100%;">
      <div style="width:48%;text-align:right;color:#1976d2;margin-top:6px;font-size:16px;">共</div>
      <div
        id="totalCountId"
        ref="totalCountId"
        style="color: rgb(25, 118, 210);font-size: 25px;height: 32px;line-height: 33px;"
      >0</div>
      <div style="width:48%;color:#1976d2;margin-top:6px;font-size:16px;">条</div>
    </div>
    <mescroll-vue
      id="mescroll"
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
      style="top:184px;"
    >
      <div id="newsList" style="padding-left:10px;padding-right:10px;">
        <div
          v-for="(item,index) in list"
          :key="index"
          style="padding-top:7px;padding-bottom:7px;box-shadow:0px 0px 2px #cccccc;position:relative;font-size:15px;background:#ffffff;"
        >
          <img
            v-if="item.approval_check_flag==0"
            class="pjlzListImgRightNew1"
            src="../../../assets/img/state_1.png"
          />
          <img
            v-if="item.approval_check_flag==1&&item.approval_status==1"
            class="pjlzListImgRightNew1"
            src="../../../assets/img/state_3.png"
          />
          <img
            v-if="item.approval_check_flag==1&&item.approval_status==2"
            class="pjlzListImgRightNew1"
            src="../../../assets/img/state_2.png"
          />
          <img
            v-if="item.approval_check_flag==1&&item.approval_status==3"
            class="pjlzListImgRightNew1"
            src="../../../assets/img/state_4.png"
          />
          <img
            v-if="item.approval_check_flag==1&&item.approval_status==4"
            class="pjlzListImgRightNew1"
            src="../../../assets/img/state_6.png"
          />
          <img
            v-if="item.approval_check_flag==1&&item.approval_status==5"
            class="pjlzListImgRightNew1"
            src="../../../assets/img/state_5.png"
          />
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
            <div v-if="item.cbr1!=''" class="pjlzListSmallDiv">
              <img class="pjlzListSmallIcon" src="../../../assets/img/icon_people.png" />
              <div class="pjlzListSmallDivFont">承办人：</div>
              <div class="pjlzListSmallDivFontNew1">{{item.cbr1}}</div>
            </div>
            <div v-if="item.cbr2!=''" class="pjlzListSmallDiv">
              <!-- <img class="pjlzListSmallIcon" src="../../../assets/img/icon_people.png" />
              <div class="pjlzListSmallDivFont">承办人：</div>-->
              <div class="pjlzListSmallDivFontNew">{{item.cbr2}}</div>
            </div>
            <div class="pjlzListSmallDiv" style="margin-bottom:15px;">
              <img class="pjlzListSmallIcon" src="../../../assets/img/icon_deadline.png" />
              <div class="pjlzListSmallDivFont">反馈时限：</div>
              <div class="pjlzListSmallDivFontTime">{{item.approval_end_date}}</div>
            </div>
            <!-- <div class="pjlzListSmallDiv" style>
              <img class="pjlzListSmallIcon" src="../../../assets/img/icon_time_pjlz.png" />
              <div class="pjlzListSmallDivFont">交办时间：</div>
              <div class="pjlzListSmallDivFont">{{item.approval_create_date}}</div>
            </div>
            <div class="pjlzListSmallDiv" style="margin-bottom:11px;">
              <img class="pjlzListSmallIcon" src="../../../assets/img/icon_time_pjlz.png" />
              <div class="pjlzListSmallDivFont">截止时间：</div>
              <div class="pjlzListSmallDivFont">{{item.approval_end_date}}</div>
            </div>-->

            <div
              @click="openYjcbFun(item,$event)"
              v-if="(flag.role!='cbr')&&(item.approval_status!=4&&item.approval_status!=3)&&flag.dingUserId!=item.approval_main_person_dingid"
              class="pjlzListyjcbNew"
              style="z-index:2;"
            >
              <div style="width:43%;text-align:right;margin-right:3px;">
                <img class="pjlzListyjcbImg" src="../../../assets/img/icon_urge.png" />
              </div>
              <div class="pjlzListyjcbfont">一键催办</div>
            </div>

            <div style="display:flex;">
              <div
                @click="openShsqFun(item,$event)"
                v-if="item.approval_create_person_dingid==flag.dingUserId&&item.approval_status==3"
                class="pjlzListyjcbNew"
                style="z-index:2;"
              >
                <div
                  v-if="flag.role!='ld'&&item.approval_status!=4&&flag.dingUserId==item.approval_main_person_dingid"
                  style="width:33%;text-align:right;margin-right:3px;"
                >
                  <img class="pjlzListyjcbImg" src="../../../assets/img/icon_check.png" />
                </div>
                <div
                  v-if="flag.dingUserId!=item.approval_main_person_dingid"
                  style="width:43%;text-align:right;margin-right:3px;"
                >
                  <img class="pjlzListyjcbImg" src="../../../assets/img/icon_check.png" />
                </div>
                <div class="pjlzListyjcbfont">审核申请</div>
              </div>
              <div
                v-if="flag.role!='ld'&&item.approval_status==1&&flag.dingUserId==item.approval_main_person_dingid"
                class="pjlzListyjcbNew"
                @click="openSqjxFun(item,$event)"
                style="z-index:2;"
              >
                <div style="width:33%;text-align:right;margin-right:3px;">
                  <img class="pjlzListyjcbImg" src="../../../assets/img/icon_complete.png" />
                </div>
                <div class="pjlzListyjcbfont">申请结项</div>
              </div>
              <div
                @click="openFkFun(item,$event)"
                v-if="flag.role!='ld'&&item.approval_status!=4&&flag.dingUserId==item.approval_main_person_dingid"
                class="pjlzListyjcbNew"
                style="z-index:2;"
              >
                <div style="width:43%;text-align:right;margin-right:3px;">
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
      :style="oneStyle"
      @opened="openPop"
      @open="openPopStart"
      style="overflow:hidden;background:rgb(243, 243, 243);"
    >
      <div style="background:#ffffff;">
        <div>
          <div style="padding-top:9px;font-size: 14px;margin-left:17px;">是否超期</div>
          <ul id="sfcqDialogId" class="ui-row" style="margin-top: 11px;">
            <li id="0" class="ui-col ui-col-25 dialogSelect" style="width:30%;">全部</li>
            <li id="1" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">超期</li>
            <li id="2" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">未超期</li>
          </ul>
          <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        </div>
        <div v-if="status==0">
          <div style="padding-top:9px;font-size: 14px;margin-left:17px;">批件状态</div>

          <ul class="ui-row" id="pjztDialogId" style="margin-top: 11px;">
            <li id="0" class="ui-col ui-col-25 dialogSelect" style="width:30%;">全部</li>
            <li id="1" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">已反馈</li>
            <li id="2" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">未反馈</li>
            <li id="3" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">申请结项</li>
            <li id="5" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">拒绝结项</li>
          </ul>
          <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
          <div style="padding-top:9px;font-size: 14px;margin-left:17px;">是否签收</div>

          <ul class="ui-row" id="sfbjDialogId" style="margin-top: 11px;">
            <li id class="ui-col ui-col-25 dialogSelect" style="width:30%;">全部</li>
            <li id="0" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">未签收</li>
            <li id="1" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">已签收</li>
          </ul>
          <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        </div>
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
import { Tab, Tabs, Search, Popup, Dialog } from "vant";
import dd from "dingtalk-jsapi";
import MescrollVue from "mescroll.js/mescroll.vue";
Vue.use(Tab)
  .use(Tabs)
  .use(Search)
  .use(Popup)
  .use(Dialog);
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
      oneStyle: {
        height: "60%"
      },
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
      isChecked: "", //是否签收：0-未签收，1-已签收
      approval_status: "0", //批件状态
      list: [],
      Popshow: false,
      indexPage: null,
      allCount: 0,
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
    next();
  },
  beforeRouteLeave(to, from, next) {
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
        this.seach_value = this.seach_value.replace(/\s*/g, "");
        this.$store.state.seach_value = this.$store.state.seach_value.replace(
          /\s*/g,
          ""
        );
        //  alert(this.seach_value);
        this.mescroll.resetUpScroll();
      }
    }
  },
  activated() {
    console.log("activated");
    var pjlzId = localStorage.getItem("pjlzDealiId");
    // this.pdSingleApp();
    if (pjlzId != null && pjlzId != "") {
      this.getPjlzDeali(pjlzId);
      setTimeout(() => {
        var top = localStorage.getItem("newsListPjlzList");

        console.log("滑动距离" + top);
        $("#mescroll").scrollTop(top);
        $("#totalCountId").html(localStorage.getItem("pjlzListcount"));
      }, 100);
    } else {
      this.pdSingleApp();
    }
  },
  mounted() {
    // this.flag=global_variable.roleJs;
    var shaixuan = this.$parent.$root.$children[0].$refs.shaixuanImgId;
    var search_allref = this.$parent.$root.$children[0].seach_value;
    var self = this;

    if (global_variable.singleApp != 1) {
      if (shaixuan != undefined) {
        shaixuan.removeEventListener("click", function() {
          // console.log("openPop");
        });
        shaixuan.addEventListener("click", function() {
          var path = self.$route.path;
          console.log(self.$route.path);
          if (path == "/pjlz/pjlz") {
            // console.log(self.$route.path);
            console.log("openPop");
            self.Popshow = true;
          }
        });
      }
    }

    console.log("global_variable====" + JSON.stringify(global_variable.roleJs));
    if (global_variable.roleJs != null) {
      self.flag = global_variable.roleJs;
      console.log("global_variable====" + JSON.stringify(self.flag));
    }
    console.log(self.flag);
    // self.flag.role="cbr";
    if (self.flag.role != "ld") {
      self.createListTop();
    }
    self.pdSingleApp();

    //  self.$router.push({
    //           path: "/pjlz/pjfkMessage/pjfkMessage"
    //         });
  },
  methods: {
    scrollTopZero: function() {
      $("#mescroll").scrollTop(0);
    },
    //根据id获取批件详情，修改批件列表刷新某一个值
    getPjlzDeali: function(approvalInfoId) {
      var self = this;
      var params = {
        method: "getApprovalInfo",
        dingUserId: global_variable.roleJs.dingUserId,
        approvalInfoId: approvalInfoId //批件id
      };
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(res);
          if (res.success == 1) {
            var data = res.data;
            if (self.list.length > 0) {
              let arr = self.list.slice(0); //深拷贝，（等价一个新的数组）
              arr.forEach(item => {
                var id = item.id;
                if (id === data.id) {
                  var entityName = data.approval_manage_person;
                  if (entityName.indexOf(",") != -1) {
                    var namelist = entityName.split(",");
                    var nameStr2 = "";
                    if (namelist.length > 0) {
                      data.cbr1 = namelist[0];
                      for (var j = 0; j < namelist.length; j++) {
                        if (j > 0) {
                          if (nameStr2 == "") {
                            nameStr2 += namelist[j];
                          } else {
                            nameStr2 += "," + namelist[j];
                          }
                        }
                      }
                      data.cbr2 = nameStr2;
                    }
                  } else {
                    data.cbr1 = entityName;
                    data.cbr2 = "";
                  }
                  item.approval_status = data.approval_status;
                  item.approval_check_flag = data.approval_check_flag;
                }
              });
              console.log(arr);
              self.list = arr;
              console.log(self.list);
            }
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    },
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
        $("#mescroll").css("top", "143px");
        $("#count_id").css("top", "108px");
        this.getUserInfo();
        var intent = localStorage.getItem("intent");
        console.log(intent);
        if (intent != "") {
          this.status = intent;
        } else {
          this.status = 0;
        }
        var shaixuanApp = this.$parent.$refs.PjlzshaixuanImgId;
        console.log(shaixuanApp);
        var self = this;
        shaixuanApp.removeEventListener("click", function() {
          console.log("openPop");
          self.Popshow = true;
        });
        shaixuanApp.addEventListener("click", function() {
          console.log("openPop");
          self.Popshow = true;
        });
      } else {
        var intent = localStorage.getItem("intent");
        console.log(intent);
        if (intent != "") {
          this.status = intent;
        } else {
          this.status = 0;
        }
        var isSingleApp = this.$parent.$root.$children[0].isSingleApp;
        console.log("isSingleApp===" + isSingleApp);
        console.log("isSingleApp===" + global_variable.roleJs.role);
        if (isSingleApp == false) {
          if (global_variable.roleJs.role != "ld") {
            $("#mescroll").css("top", "241px");
            $("#count_id").css("top", "207px");
          }
        }
      }
      this.mescroll.resetUpScroll();
    },
    //添加标题右上方按钮
    showRightMenu1: function() {
      var self = this;
      dd.ready(function() {
        dd.biz.navigation.setMenu({
          items: [
            {
              id: "1",
              iconId: "file",
              text: "消息",
              url: httpMethod.returnBaseUrlFun() + global_variable.messageUrl
            }
          ],
          onSuccess: function(data) {
            self.$router.push({
              path: "/pjlz/pjfkMessage/pjfkMessage"
            });
          },
          onFail: function(err) {}
        });
      });
    },
    createListTop: function(top) {
      // $("#mescroll").css("top", "210px");
    },
    //切换办理中和已办结，重置查询条件
    changetabState: function(state) {
      $("#mescroll").scrollTop(0);
      this.clearCreateData();
      console.log(state);
      if (state == "0") {
        this.oneStyle = { height: "60%" };
      } else {
        this.oneStyle = { height: "30%" };
      }
      this.status = state;
      this.approval_status = "0"; //批件状态
      this.isOvertime = "0"; //是否超期
      this.isChecked = ""; //是否签收
      //循环重置查询条件
      $("#sfbjDialogId li").each(function() {
        // console.log($(this).html());
        var text = $(this).html();
        if (text == "全部") {
          $(this).removeClass("dialogNoSelect");
          $(this).addClass("dialogSelect");
        } else {
          $(this).removeClass("dialogSelect");
          $(this).addClass("dialogNoSelect");
        }
      });
      //循环重置查询条件
      $("#sfcqDialogId li").each(function() {
        var text = $(this).html();
        if (text == "全部") {
          $(this).removeClass("dialogNoSelect");
          $(this).addClass("dialogSelect");
        } else {
          $(this).removeClass("dialogSelect");
          $(this).addClass("dialogNoSelect");
        }
      });

      //循环重置查询条件
      $("#pjztDialogId li").each(function() {
        var text = $(this).html();
        if (text == "全部") {
          $(this).removeClass("dialogNoSelect");
          $(this).addClass("dialogSelect");
        } else {
          $(this).removeClass("dialogSelect");
          $(this).addClass("dialogNoSelect");
        }
      });

      this.mescroll.resetUpScroll();
    },
    //切换办理中和已办结
    resetUpScroll: function(name) {
      // console.log(name);
      this.seach_value = name;
      this.seach_value = this.seach_value.replace(/\s*/g, "");
      console.log(this.seach_value);
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
      // console.log("openPop");
      $("#openPopId").css("z-index", "10003");
      //批件状态
      $("#pjztDialogId li").off("click");
      $("#pjztDialogId li").click(function(e) {
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
              console.log("getUserInfo====" + JSON.stringify(res));
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
                console.log(global_variable.roleJs);
                console.log(self.flag);
                if (self.flag.role == "ld" || self.flag.role == "qt") {
                  console.log("关闭应用");
                  Dialog.alert({
                    message: "没有该应用权限"
                  }).then(() => {
                    dd.ready(function() {
                      dd.biz.navigation.close();
                    });
                  });
                } else {
                  self.mescroll.resetUpScroll();
                }
                if (self.flag.role == "cbr") {
                  self.showRightMenu1();
                } else if (self.flag.role == "wdk") {
                  setTimeout(() => {
                    dd.ready(function() {
                      //隐藏右侧分享按钮
                      dd.biz.navigation.setRight({
                        show: false
                      });
                    });
                  }, 300);
                }

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
          context.isChecked = $(this).attr("id");
        }
      });

      //循环获取选中的是否超期
      $("#sfcqDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        if (isSelect) {
          context.isOvertime = $(this).attr("id");
        }
      });

      //循环获取选中的批件状态
      $("#pjztDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        if (isSelect) {
          context.approval_status = $(this).attr("id");
        }
      });
      context.mescroll.resetUpScroll();
      context.Popshow = false;
    },
    clearType: function() {
      var context = this;
      //循环重置查询条件
      $("#sfbjDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
        console.log($(this).text());
      });
      //循环重置查询条件
      $("#sfcqDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
      });

      //循环重置查询条件
      $("#pjztDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
      });
      context.approval_status = "0";
      context.isOvertime = "";
      context.isChecked = "";
      // context.projectNature = "";
      this.mescroll.resetUpScroll();
      this.Popshow = false;
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    //项目列表
    upCallback: function(page, mescroll) {
      // console.log(page);
      this.indexPage = page;
      var params = {
        method: "getApprovalInfoList",
        pageNo: page.num,
        pageSize: page.size,
        // corpId:global_variable.corpId,
        // dingUserId: "086404191926187734",
        dingUserId: global_variable.roleJs.dingUserId,
        approval_status: this.approval_status, //批件状态
        approvalKeywords: this.seach_value, //关键词
        isOvertime: this.isOvertime, //是否超期：0-全部，1-超期，2-未超期
        isChecked: this.isChecked, //是否签收：0-未签收，1-已签收
        status: this.status,
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
              for (var i = 0; i < data.length; i++) {
                var entityName = data[i].approval_manage_person;
                if (entityName.indexOf(",") != -1) {
                  var namelist = entityName.split(",");
                  var nameStr2 = "";
                  if (namelist.length > 0) {
                    data[i].cbr1 = namelist[0];
                    for (var j = 0; j < namelist.length; j++) {
                      if (j > 0) {
                        if (nameStr2 == "") {
                          nameStr2 += namelist[j];
                        } else {
                          nameStr2 += "," + namelist[j];
                        }
                      }
                    }

                    data[i].cbr2 = nameStr2;
                  }
                } else {
                  data[i].cbr1 = entityName;
                  data[i].cbr2 = "";
                }
              }
              console.log(data);
              this.list = this.list.concat(data);
              //  this.list = this.list.concat(data);
              //   this.list = this.list.concat(data);
              $("#totalCountId").html(res.data.total);
            } else {
              data = [];
              // this.list = [];
              res.data.total = 0;
              $("#totalCountId").html("0");
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
      this.createTopAndIdAndCount(item);
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
      this.createTopAndIdAndCount(item);
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
      this.createTopAndIdAndCount(item);
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
      this.createTopAndIdAndCount(item);
      this.$router.push({
        path: "/pjlz/pjlzDetail_all",
        name: "pjlzDetail_all",
        params: {
          obj: item
        }
      });
      localStorage.setItem("intent", this.status);
      e.stopPropagation();
    },
    //记录点击数据，用于返回列表滑动等
    createTopAndIdAndCount: function(item) {
      var top = $("#mescroll").scrollTop();
      localStorage.setItem("newsListPjlzList", top);
      localStorage.setItem("pjlzDealiId", item.id);
      localStorage.setItem("pjlzListcount", $("#totalCountId").html());
    },
    //清除数据
    clearCreateData: function() {
      localStorage.setItem("newsListPjlzList", "");
      localStorage.setItem("pjlzListcount", "");
      localStorage.setItem("pjlzDealiId", "");
    }
  }
};
</script>

<style scoped>
@import "../../../page/pjlz/pjlzList/pjlzList.css";
.van-popup--top {
  z-index: 100000;
}
</style>
