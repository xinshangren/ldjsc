
<template>
  <div style="margin-top:0px;overflow:hidden;">
    <div style="position:relative;" v-if="flag.role=='wdk'">
      <van-search
        v-model="seach_value"
        placeholder="请输入关键字查询 "
        @input="oninput"
        @search="onSearch"
      />
      <img
        id="PjlzSearchImgId"
        class="shaixuanImg1"
        style=" position: absolute;right: 23px;top: 17px;height: 20px;display:none;"
        src="@/assets/img/icon_filtrate.png"
      />
    </div>
    <div v-if="list.length<1" style="text-align: center;">
      <img style="height: 200px;margin-top: 146px;" src="../../../assets/img/no_data.png" />
    </div>
    <div id="count_id" style="display:flex;top:106px;position:fixed;width:100%;">
      <div
        style="width:48%;text-align:right;color:#1976d2;font-size:16px;height:32px;line-height: 36px;"
      >共</div>
      <div
        id="totalCountId"
        ref="totalCountId"
        style="color: rgb(25, 118, 210);font-size: 24px;height: 32px;line-height: 33px;"
      >0</div>
      <div style="width:48%;color:#1976d2;font-size:16px;height:32px;line-height: 36px;">条</div>
    </div>
    <mescroll-vue
      id="mescroll"
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
      style="top:138px;"
    >
      <div id="newsList" style="padding-left:10px;padding-right:10px;">
        <div
          v-for="(item,index) in list"
          :key="index"
          style=" padding-top:7px;padding-bottom:7px;box-shadow:0px 0px 2px #cccccc;position:relative;font-size:15px;background:#ffffff;"
        >
          <div
            :class="item.supervision_status=='0'?'backgroundListSearchZero':'backgroundListSearchOne' "
          ></div>

          <div style="position:relative;" @click="openIndexFun(item,$event)">
            <div style="display:flex;">
              <img
                v-if="item.approval_warn_flag==0"
                style="height:30px;margin-top:-4px;"
                src="../../../assets/img/no_overdue.png"
              />
              <img
                v-if="item.approval_warn_flag==1"
                style="height:30px;margin-top:-4px;"
                src="../../../assets/img/noverdue.png"
              />
              <div class="van-ellipsis-2 pjlzListTitle">{{item.approval_name}}</div>
              <!-- <div v-if="item.approval_status==0" class="pjlzListblz">办理中</div>
              <div v-if="item.approval_status==1" class="pjlzListyfk">已反馈</div>
              <div v-if="item.approval_status==2" class="pjlzListwfk">未反馈</div>
              <div v-if="item.approval_status==3" class="pjlzListsqjx">申请结项</div>
              <div v-if="item.approval_status==4" class="pjlzListybj">已办结</div>-->
              <!-- <div v-if="item.approval_status==5" class="pjlzListjjjx">拒绝结项</div> -->
            </div>
            <div style="display:flex;">
              <div class="pjlzListSmallDiv" style="display:flex;">
                <img class="pjlzListSmallIcon" src="../../../assets/img/pjbh_list_bg.png" />
                <div class="pjlzListSmallDivFont">批件文号：</div>
                <div
                  v-if="item.approval_number!=''"
                  class="pjlzListSearchSmallDivFontNew2"
                >{{item.approval_number}}</div>
                <div v-if="item.approval_number==''" class="pjlzListSearchSmallDivFontNew2">暂无</div>
              </div>
            </div>
            <div v-if="item.cbr1!=''" class="pjlzListSmallDiv">
              <img class="pjlzListSmallIcon" src="../../../assets/img/icon_people.png" />
              <div class="pjlzListSmallDivFont">承办人：</div>
              <div class="pjlzListSmallDivFont pjlzListSearchSmallDivFontNew1">{{item.cbr1}}</div>
            </div>
            <div v-if="item.cbr2!=''" class="pjlzListSmallDiv">
              <!-- <img class="pjlzListSmallIcon" src="../../../assets/img/icon_people.png" />
              <div class="pjlzListSmallDivFont">承办人：</div>-->
              <div class="pjlzListSmallDivFont pjlzListSearchSmallDivFontNew">{{item.cbr2}}</div>
            </div>
            <div class="pjlzListSmallDiv" style="margin-bottom:15px;">
              <img class="pjlzListSmallIcon" src="../../../assets/img/icon_deadline.png" />
              <div class="pjlzListSmallDivFont">反馈时限：</div>
              <div class="pjlzListSearchSmallDivFontTime">{{item.approval_end_date}}</div>
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
              v-if="(flag.role=='ld'||flag.role=='wdk')&&(item.approval_status!=4&&item.approval_status!=3)&&flag.dingUserId!=item.approval_main_person_dingid"
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
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">是否签收</div>

        <ul class="ui-row" id="sfbjDialogId" style="margin-top: 11px;">
          <li id class="ui-col ui-col-25 dialogSelect" style="width:30%;">全部</li>
          <li id="0" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">未签收</li>
          <li id="1" class="ui-col ui-col-25 dialogNoSelect" style="width:30%;">已签收</li>
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
    <van-overlay :show="sqjxshow" @click="sqjxshow=false;sqjxmessage=''" :z-index="100">
      <div class="wrapper">
        <div id="popSqjxId" class="block" @click.stop>
          <img
            @click="sqjxshow=false;sqjxmessage=''"
            class="pjlzSqjxClose"
            src="../../../assets/img/pop_close.png"
          />
          <div class="pjlzSqjx">申请结项</div>

          <van-field
            v-model="sqjxmessage"
            rows="4"
            autosize
            type="textarea"
            maxlength="150"
            placeholder="请输入结项说明"
            :formatter="formatter(sqjxmessage)"
            show-word-limit
            class="pjlzSqjxContent"
          />
          <div style="display:flex;margin-top:24px;">
            <div style="width:50%;text-align: center;" @click="sqjxshow=false;sqjxmessage=''">
              <div class="pjlzSqjxCancelButton1">取消</div>
            </div>
            <div style="width:50%;text-align: center;" @click="jxsqFun()">
              <div class="pjlzSqjxCancelButton2">确定</div>
            </div>
          </div>
        </div>
      </div>
    </van-overlay>
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
  name: "pjlzListSearchVue",
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
      status: "1", //办理状态:0-全部，1-办理中，2-已结办，3-申请结办
      isChecked: "", //是否签收：0-未签收，1-已签收
      approval_status: "0",
      supervision: "", //督办状态
      isFeedback: "", //是否有反馈
      sqjxshow: false, //申请结伴标记
      sqjxmessage: "", //申请结伴内容
      nowItem: null,
      list: [],
      Popshow: false,
      periodType: "",
      periodData: "",
      mescroll: null, // mescroll实例对象
      shaixuan: null,
      screenHeight: document.documentElement.clientHeight, //屏幕高度
      screenHeightNow: 0,
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
    if (from.name == "pjlzListvue") {
      if (to.name == "pjlzListSearchVue") {
        to.meta.keepAlive = true;
      }
    }
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(from);
    console.log(to);
    if (from.name == "pjlzListSearchVue") {
      if (to.name == "pjlzListvue") {
        from.meta.keepAlive = false;
        this.clearCreateData();
        $("#PjlzSearchImgId").off("click");
      }
    }
    console.log(from);
    console.log(to);
    next();
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
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
  activated() {
    console.log("activated");
    setTimeout(() => {
      dd.biz.navigation.setRight({
        show: false //控制按钮显示， true 显示， false 隐藏， 默认true
      });
    }, 200);
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
    var statusGet = this.$route.params.entity;
    var time = this.$route.params.time;
    var periodTypes = this.$route.params.periodType;

    console.log(statusGet);
    console.log(time);
    this.periodType = periodTypes;
    this.periodData = time;
    switch (parseInt(statusGet)) {
       case 1:
        this.status = "";
        this.isOvertime = 0;
        this.supervision = "";
        this.isFeedback = "";
        break;
      case 2:
        this.status = 1;
        this.isOvertime = 0;
        this.supervision = "0";
        this.isFeedback = "";
        break;
      case 3:
        this.status = 0;
        this.isOvertime = "";
        this.supervision = "";
        this.isFeedback = "1";
        break;
      case 4:
        this.status = 0;
        this.isOvertime = 1;
        this.supervision = "";
        break;
      case 5:
        this.status = 0;
        this.isOvertime = 2;
        this.supervision = "";
        this.isFeedback = "0";
        break;
      case 6:
        this.status = 0;
        this.isOvertime = 1;
        this.supervision = "";
        this.isFeedback = "0";
        break;
      case 7:
        this.status = 1;
        this.isOvertime = 0;
        this.supervision = 1;
        this.isFeedback = "";
        break;
      default:
        break;
    }

    var pjlzId = localStorage.getItem("pjlzSearchDealiId");
    if (pjlzId != null && pjlzId != "") {
      this.getPjlzDeali(pjlzId);
      setTimeout(() => {
        var top = localStorage.getItem("newsListPjlzListSearch");

        console.log("滑动距离" + top);
        $("#mescroll").scrollTop(top);
        $("#totalCountId").html(localStorage.getItem("pjlzListcountSearch"));
      }, 100);
    } else {
      this.pdSingleApp();
    }
  },
  mounted() {
    // this.flag=global_variable.roleJs;
    var shaixuan = this.$parent.$root.$children[0].$refs.shaixuanImgId;
    var search_allref = this.$parent.$root.$children[0].seach_value;

    console.log(search_allref);
    var self = this;
    if (global_variable.singleApp != 1) {
      shaixuan.removeEventListener("click", function() {
        // console.log("openPop");
      });
      shaixuan.addEventListener("click", function(e) {
        var path = self.$route.path;
        if (path == "/pjlz/pjlzListSearch/pjlzListSearch") {
          console.log(self.$route.path);
          console.log("openPop");
          self.Popshow = true;
        }
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
    var statusGet = self.$route.params.entity;
    var time = self.$route.params.time;
    var periodTypes = self.$route.params.periodType;

    console.log(statusGet);
    console.log(time);
    this.periodType = periodTypes;
    this.periodData = time;
    switch (parseInt(statusGet)) {
      case 1:
        this.status = "";
        this.isOvertime = 0;
        this.supervision = "";
        this.isFeedback = "";
        break;
      case 2:
        this.status = 1;
        this.isOvertime = 0;
        this.supervision = "0";
        this.isFeedback = "";
        break;
      case 3:
        this.status = 0;
        this.isOvertime = "";
        this.supervision = "";
        this.isFeedback = "1";
        break;
      case 4:
        this.status = 0;
        this.isOvertime = 1;
        this.supervision = "";
        break;
      case 5:
        this.status = 0;
        this.isOvertime = 2;
        this.supervision = "";
        this.isFeedback = "0";
        break;
      case 6:
        this.status = 0;
        this.isOvertime = 1;
        this.supervision = "";
        this.isFeedback = "0";
        break;
      case 7:
        this.status = 1;
        this.isOvertime = 0;
        this.supervision = 1;
        this.isFeedback = "";
        break;
      default:
        break;
    }
    self.pdSingleApp();
    var _this = this;
    window.addEventListener("resize", () => _this.measure1(), false);
  },
  watch: {
    screenHeightNow: function(newName, oldName) {
      console.log(this.screenHeight + "===" + this.screenHeightNow);
      //监听屏幕宽度变化
      if (this.screenHeight > this.screenHeightNow) {
        $("#popSqjxId").css("height", "85%");
        $("#popSqjxId").css("max-height", "85%");
      } else {
        $("#popSqjxId").css("height", "55%");
        $("#popSqjxId").css("max-height", "55%");
      }
    }
  },
  methods: {
    measure1: function() {
      window.fullHeight = document.documentElement.clientHeight;
      this.screenHeightNow = window.fullHeight;
      console.log(this.screenHeightNow);
    },
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
    onSearch(val) {
      this.seach_value = val;
      this.seach_value = this.seach_value.replace(/\s*/g, "");
      this.mescroll.resetUpScroll();
      // console.log(val);
    },
    oninput(val) {
      this.seach_value = val;
      this.seach_value = this.seach_value.replace(/\s*/g, "");
      this.mescroll.resetUpScroll();
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
        $("#mescroll").css("top", "100px");
        $("#count_id").css("top", "65px");
        // var shaixuanApp = this.$refs.PjlzshaixuanImgId;
        // console.log(shaixuanApp);
        var self = this;
        setTimeout(() => {
          $("#PjlzSearchImgId").click(function() {
            console.log("openPop");
            self.Popshow = true;
          });
        }, 100);
      } else {
        var isSingleApp = this.$parent.$root.$children[0].isSingleApp;
        console.log("isSingleApp===" + isSingleApp);
        if (isSingleApp == false) {
          $("#mescroll").css("top", "140px");
          $("#count_id").css("top", "109px");
        }
      }
      var intent = localStorage.getItem("intentSearch");
      console.log(intent);
      if (intent != "") {
        this.status = intent;
      }
      this.mescroll.resetUpScroll();
    },
    createListTop: function(top) {
      $("#mescroll").css("top", "240px");
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
          corpId: global_variable.corpId, // 企业id
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
      var params = {
        method: "getApprovalInfoList",
        pageNo: page.num,
        pageSize: page.size,
        // corpId:global_variable.corpId,
        // dingUserId: "086404191926187734",
        dingUserId: global_variable.roleJs.dingUserId,
        approvalKeywords: this.seach_value, //关键词
        isOvertime: this.isOvertime, //是否超期：0-全部，1-超期，2-未超期
        isChecked: this.isChecked, //是否签收：0-未签收，1-已签收
        status: this.status,
        approval_status: this.approval_status,
        supervision: this.supervision, //转督办
        isFeedback: this.isFeedback, //反馈
        createDateBegin: "",
        createDateEnd: "",
        periodType: this.periodType,
        periodData: this.periodData
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
      console.log(item);
      this.nowItem = item;
      this.sqjxshow = true;
      console.log(this.$store.getters.get_showText);
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
      localStorage.setItem("intentSearch", this.status);
      e.stopPropagation();
    }, //记录点击数据，用于返回列表滑动等
    createTopAndIdAndCount: function(item) {
      var top = $("#mescroll").scrollTop();
      localStorage.setItem("newsListPjlzListSearch", top);
      localStorage.setItem("pjlzSearchDealiId", item.id);
      localStorage.setItem("pjlzListcountSearch", $("#totalCountId").html());
    },
    //清除数据
    clearCreateData: function() {
      localStorage.setItem("newsListPjlzListSearch", "");
      localStorage.setItem("pjlzListcountSearch", "");
      localStorage.setItem("pjlzSearchDealiId", "");
    },

    formatter(sqjxmessage) {
      //去空格   特殊字符
      let str = sqjxmessage.replace(/\s*/g, "");
      var pattern = new RegExp(
        "[`~@#$^&*=|{}''\\[\\]<>/~@%#￥……&*——|{}【】\"‘”“']"
      );
      var rs = "";
      for (var i = 0; i < str.length; i++) {
        rs = rs + str.substr(i, 1).replace(pattern, "");
      }
      var rs = rs.replace(
        /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi,
        ""
      );
      this.sqjxmessage = rs;
      return str;
    },
    jxsqFun: function() {
      var self = this;
      if (self.sqjxmessage == "") {
        self.$toast("请输入结项说明");
        return;
      }
      self.$store.commit("showLoadingBigText", "申请结项中");
      var params = {
        method: "approvalApply",
        dingUserId: global_variable.roleJs.dingUserId,
        approvalInfoId: self.nowItem.id,
        applyReason: self.sqjxmessage
      };
      httpMethod
        .getApprovalInfo(params)
        .then(res => {
          console.log(JSON.stringify(res));
          var msg = res.msg;
          self.$store.commit("hideLoadingBig");
          if (res.success == "1") {
            var result = res.data;
            if (result == "1") {
              //成功
              self.$toast("申请成功");
              self.sqjxshow = false;
              self.mescroll.resetUpScroll();
              self.sqjxmessage = "";
              $("#mescroll").scrollTop(0);
            }
          } else {
            self.$toast(msg);
          }
        })
        .catch(function(error) {
          self.$store.commit("hideLoadingBig");
          console.log(error);
        });
    }
  }
};
</script>

<style >
@import "../../../page/pjlz/pjlzListSearch/pjlzListSearch.css";
.van-popup--top {
  z-index: 100000;
}
.van-search__content {
  padding-right: 0px;
}
</style>
