
<template>
  <div>
    <div
      v-show="flag.role=='ld'"
      style="z-index: 2000;width: 100%;background: #f1f1f1;position:fixed;"
    >
      <van-tabs
        id="tabs"
        @touchmove.prevent
        v-model="active"
        title-active-color="#2599e6"
        :offset-top="101"
        title-inactive-color="#333333"
        :sticky="true"
        line-width="75px"
        style="width: 100%;"
        @change="tabsclick"
      >
        <van-tab title="办理中"></van-tab>
        <van-tab title="已办结"></van-tab>
        <van-tab title="数据统计"></van-tab>
      </van-tabs>
      <div
        v-if="gzxOrStatic==0&&flag.role=='ld'"
        style="display:none;height: 40px;margin-top: 9px;margin-left: 10px;margin-right: 10px;"
      >
        <div style="width:50%;position:relative;">
          <div @click="selectTab(0)" id="tabdiv1" class="pop_tab_select_div1">
            <div style="margin:0 auto;">办理中</div>
          </div>
        </div>
        <div style="width:50%;position:relative;">
          <div @click="selectTab(1)" id="tabdiv2" class="pop_tab_noselect_div2">
            <div style="margin:0 auto;">已办结</div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-show="flag.role!='ld'"
      style="z-index: 2000;width: 100%;background: #f1f1f1;position:fixed;"
    >
      <van-tabs
        id="tabs1"
        @touchmove.prevent
        v-model="active1"
        title-active-color="#2599e6"
        :offset-top="top"
        title-inactive-color="#333333"
        :sticky="true"
        line-width="75px"
        style="width: 100%;"
        @change="tabsclick1"
      >
        <van-tab v-if="flag.role!=''" title="办理中"></van-tab>
        <van-tab v-if="flag.role!=''" title="已办结"></van-tab>
        <van-tab v-if="flag.role=='wdk'" title="数据统计"></van-tab>
      </van-tabs>
      <div id="plistSearchId" style="position:relative;" v-if="currentView!=1">
        <van-search
          v-model="seach_value"
          placeholder="请输入关键字查询"
          @search="onSearch"
          @input="oninput"
          style
          right-icon="null"
        />
        <img
          ref="PjlzshaixuanImgId"
          class="shaixuanImg1"
          style=" position: absolute;right: 23px;top: 17px;height: 20px;"
          src="@/assets/img/icon_filtrate.png"
        />
      </div>
    </div>
    <!-- <div id="child_page" style="overflow: auto;width: 100%;position:relative;">
      <div @touchmove.prevent :is="currentView" style="font-size:15px;"></div>
    </div>-->
    <child1 ref="child1" style="position:relative;" v-if="currentView===0"></child1>
    <child2
      id="child2"
      style="position:relative;"
      v-if="(flag.role=='ld'||flag.role=='wdk')&&currentView===1"
    ></child2>
    <van-overlay :show="sqjxshow" @click="sqjxshow=false;sqjxmessage=''" :z-index="2001">
      <div class="wrapper">
        <div id="popSqjxId" class="block" @click.stop>
          <img @click="sqjxshow=false;sqjxmessage=''" class="pjlzSqjxClose" src="../../assets/img/pop_close.png" />
          <div class="pjlzSqjx">申请结项</div>

          <van-field
            v-model="sqjxmessage"
            rows="4"
            autosize
            type="textarea"
            maxlength="150"
            placeholder="请输入结项说明"
            show-word-limit
            :formatter="formatter(sqjxmessage)"
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
import { Tab, Tabs, Search, Overlay, Field } from "vant";
import child1 from "@/page/pjlz/pjlzList/pjlzList.vue";
import child2 from "@/page/pjlz/pjlzStatic/pjlzStatic.vue";
import dd from "dingtalk-jsapi";
Vue.use(Tab)
  .use(Tabs)
  .use(Search)
  .use(Overlay)
  .use(Field);
import global_variable from "../../api/global_variable.js";
import { httpMethod } from "../../api/getData.js";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "pjlzvue",
  data() {
    return {
      seach_value: "",
      active: 0,
      active1: 0,
      flag: {
        dingUserId: "",
        role: "",
        department: "",
        username: ""
      }, //判断角色
      currentView: 0,
      sqjxshow: false, //申请结伴标记
      sqjxmessage: "", //申请结伴内容
      gzxOrStatic: 0, //0=工作项1=数据统计
      top: 10,
      nowItem: null,
      screenHeight: document.documentElement.clientHeight, //屏幕高度
      screenHeightNow: 0
    };
  },
  beforeRouteEnter(to, from, next) {
    // console.log(from);
    // console.log(to);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(from);
    console.log(to);
    if (from.name == "pjlzListvue") {
      if (to.name != "main") {
        from.meta.keepAlive = true;
      } else {
        localStorage.setItem("intent", "");
        from.meta.keepAlive = false;
      }
    } else {
      from.meta.keepAlive = false;
    }
    next();
  },
  mounted() {
    var typebt= this.$route.params.typebt;
    if(typebt !=undefined&& typebt!='undefined' &&typebt!=null){
      this.active1=parseInt(typebt);
    }
    localStorage.setItem("intent", "");
    localStorage.setItem("newsListPjlzList", "");
    localStorage.setItem("newsListPjlzListSearch", "");
    localStorage.setItem("pjlzListcountSearch", "");
    localStorage.setItem("pjlzSearchDealiId", "");
    this.flag = global_variable.roleJs;
    console.log(global_variable.roleJs);
    console.log(this.flag);
    this.pdSingleApp();
    //  this.$router.push({
    //           path: "/pjlz/pjfkMessage/pjfkMessage"
    //         });
    var _this = this;
    window.addEventListener('resize',() => _this.measure1(), false);
  },
  components: {
    child1,
    child2
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.measure1(), false);
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
    measure1:function(){
       window.fullHeight = document.documentElement.clientHeight;
        this.screenHeightNow = window.fullHeight;
        console.log(this.screenHeightNow);
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
                console.log(global_variable.roleJs);
                console.log(self.flag);
                if (self.flag.role == "cbr") {
                  self.showRightMenu();
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
    showHeightFun: function() {
      if (this.docmHeight >= this.showHeight) {
        $("#popSqjxId").css("height", "80%");
        $("#popSqjxId").css("max-height", "85%");
      } else {
        $("#popSqjxId").css("height", "45%");
        $("#popSqjxId").css("max-height", "50%");
      }
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
        this.top = 0;
        document.title = "领导批示办理";
        // this.$route.meta.title = "领导批示办理";
        this.getUserInfo();
      }
    },
    //添加标题右上方按钮
    showRightMenu: function() {
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
    //显示申请结项
    showSqjxPop: function(item) {
      console.log(item);
      this.nowItem = item;
      this.sqjxshow = true;
      console.log(this.$store.getters.get_showText);
    },
    closePop: function() {
      this.sqjxshow = false;
    },
    onSearch(val) {
      setTimeout(() => {
        this.$refs.child1.resetUpScroll(val);
      }, 100);
      // console.log(val);
    },
    oninput(val) {
      setTimeout(() => {
        this.$refs.child1.resetUpScroll(val);
      }, 100);
    },
    selectTab: function(flag) {
      // console.log(flag);

      this.$refs.child1.changetabState(flag);
      // for (var i = 0; i < this.$children.length; i++) {
      //   var entity = this.$children[i];

      //   if (entity.$options._componentTag == "child1") {
      //     console.log(entity);
      //     entity.changetabState(flag);
      //   }
      // }

      switch (flag) {
        case 0: //办理中
          $("#tabdiv1").removeClass("pop_tab_noselect_div1");
          $("#tabdiv1").addClass("pop_tab_select_div1");
          $("#tabdiv2").addClass("pop_tab_noselect_div2");
          $("#tabdiv2").removeClass("pop_tab_select_div2");
          break;
        case 1: //已办结
          $("#tabdiv1").removeClass("pop_tab_select_div1");
          $("#tabdiv1").addClass("pop_tab_noselect_div1");
          $("#tabdiv2").addClass("pop_tab_select_div2");
          $("#tabdiv2").removeClass("pop_tab_noselect_div2");
          break;
        default:
          break;
      }
    },
    //领导的tab切换
    tabsclick: function(name, title) {
      console.log(name + "--" + title);
      var index = parseInt(name);
      this.gzxOrStatic = index;
      // console.log(flag);
      if (index === 0) {
        this.currentView = 0;
        setTimeout(() => {
          this.$refs.child1.changetabState(index);
        }, 100);
      } else if (index == 1) {
        this.currentView = 0;
        setTimeout(() => {
          this.$refs.child1.changetabState(index);
        }, 100);
      } else {
        this.currentView = 1;
      }
      console.log(this.currentView);
    },
    //承办人和文电科tab切换
    tabsclick1: function(name, title) {
      var flag = parseInt(name);
      console.log(flag);
      if (flag === 0) {
        this.currentView = 0;
        setTimeout(() => {
          this.$refs.child1.changetabState(flag);
        }, 100);
      } else if (flag == 1) {
        this.currentView = 0;
        setTimeout(() => {
          this.$refs.child1.changetabState(flag);
        }, 100);
      } else {
        this.currentView = 1;
        setTimeout(() => {
          if (this.flag.role == "wdk") {
            $("#child2").css("padding-top", "10px");
          }
        }, 100);
      }
      console.log(this.currentView);
    },
    restPjListFun: function() {
      for (var i = 0; i < this.$children.length; i++) {
        var entity = this.$children[i];
        if (entity.$options._componentTag == "child1") {
          entity.resetList();
        }
      }
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
              self.restPjListFun(); //刷新列表
              self.sqjxmessage = "";
              self.$refs.child1.scrollTopZero();
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
@import "../../page/pjlz/pjlz.css";
.van-tabs__line {
  background-color: #3097fb;
  width: 61px;
  margin-bottom: 2px;
}
</style>
