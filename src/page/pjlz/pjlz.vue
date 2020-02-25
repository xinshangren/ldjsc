
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
        style="width: 100%;height:47px;"
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
          <div @click="selectTab(1)" id="tabdiv1" class="pop_tab_select_div1">
            <div style="margin:0 auto;">办理中</div>
          </div>
        </div>
        <div style="width:50%;position:relative;">
          <div @click="selectTab(2)" id="tabdiv2" class="pop_tab_noselect_div2">
            <div style="margin:0 auto;">已办结</div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="flag.role!='ld'">
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
        <van-tab title="办理中"></van-tab>
        <van-tab title="已办结"></van-tab>
      </van-tabs>
      <div style="position:relative;">
        <van-search v-model="seach_value" placeholder="请输入事项名称" @search="onSearch" />
        <img
          ref="PjlzshaixuanImgId"
          class="shaixuanImg"
          style=" position: absolute;right: 23px;top: 17px;height: 20px;"
          src="@/assets/img/icon_filtrate.png"
        />
      </div>
    </div>
    <!-- <div id="child_page" style="overflow: auto;width: 100%;position:relative;">
      <div @touchmove.prevent :is="currentView" style="font-size:15px;"></div>
    </div>-->
    <child1 style="position:relative;" v-if="currentView===0"></child1>
    <child2 style="position:relative;" v-if="flag.role=='ld'&&currentView===1"></child2>
    <van-overlay :show="sqjxshow" @click="sqjxshow=false" :z-index="100">
      <div class="wrapper">
        <div class="block" @click.stop>
          <img @click="sqjxshow=false" class="pjlzSqjxClose" src="../../assets/img/pop_close.png" />
          <div class="pjlzSqjx">申请结项</div>

          <van-field
            v-model="sqjxmessage"
            rows="4"
            autosize
            type="textarea"
            maxlength="150"
            placeholder="请输入结项说明"
            show-word-limit
            class="pjlzSqjxContent"
          />
          <div style="display:flex;margin-top:24px;">
            <div style="width:50%;text-align: center;" @click="sqjxshow=false">
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
      nowItem: null
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log(from);
    console.log(to);
    next();
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
  mounted() {
    this.flag = global_variable.roleJs;
    console.log(global_variable.roleJs);
    console.log(this.flag);
    this.pdSingleApp();
  },
  components: {
    child1,
    child2
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
        this.top = 0;
        this.$route.meta.title = "批件管理";
        this.showRightMenu();
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
              url:
                httpMethod.returnBaseUrlFun() +
                "jcsldjscApp/static/icon_info.png"
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
    },
    closePop: function() {
      this.sqjxshow = false;
    },
    onSearch(val) {
      for (var i = 0; i < this.$children.length; i++) {
        var entity = this.$children[i];
        if (entity.$options._componentTag == "child1") {
          // console.log(entity);
          entity.resetUpScroll(val);
        }
      }
      // console.log(val);
    },
    selectTab: function(flag) {
      // console.log(flag);
      for (var i = 0; i < this.$children.length; i++) {
        var entity = this.$children[i];

        if (entity.$options._componentTag == "child1") {
          console.log(entity);
          entity.changetabState(flag);
        }
      }

      switch (flag) {
        case 1: //办理中
          $("#tabdiv1").removeClass("pop_tab_noselect_div1");
          $("#tabdiv1").addClass("pop_tab_select_div1");
          $("#tabdiv2").addClass("pop_tab_noselect_div2");
          $("#tabdiv2").removeClass("pop_tab_select_div2");
          break;
        case 2: //已办结
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
          for (var i = 0; i < this.$children.length; i++) {
          var entity = this.$children[i];

          if (entity.$options._componentTag == "child1") {
            console.log(entity);
            entity.changetabState(index+1);
          }
        }
      } else if (index == 1) {
        this.currentView = 0;
         for (var i = 0; i < this.$children.length; i++) {
          var entity = this.$children[i];

          if (entity.$options._componentTag == "child1") {
            console.log(entity);
            entity.changetabState(index+1);
          }
        }
      } else {
        this.currentView = 1;
      }
      console.log(this.currentView);
    },
    //承办人和文电科tab切换
    tabsclick1: function(name, title) {
      var flag = parseInt(name) + 1;
      console.log(flag);
      for (var i = 0; i < this.$children.length; i++) {
        var entity = this.$children[i];

        if (entity.$options._componentTag == "child1") {
          console.log(entity);
          entity.changetabState(flag);
        }
      }
    },
    restPjListFun: function() {
      for (var i = 0; i < this.$children.length; i++) {
        var entity = this.$children[i];
        if (entity.$options._componentTag == "child1") {
          entity.resetList();
        }
      }
    },
    jxsqFun: function() {
      var self = this;
      if (self.sqjxmessage == "") {
        self.$toast("请输入结项说明");
        return;
      }
      var params = {
        method: "approvalApply",
        dingUserId: global_variable.roleJs.dingUserId,
        approvalInfoId: self.nowItem.id,
        applyReason: self.sqjxmessage
      };
      httpMethod.getApprovalInfo(params).then(res => {
        console.log(JSON.stringify(res));
        var msg = res.msg;
        if (res.success == "1") {
          var result = res.data;
          if (result == "1") {
            //成功
            self.$toast("申请成功");
            self.sqjxshow = false;
            self.restPjListFun(); //刷新列表
          }
        } else {
          self.$toast(msg);
        }
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
