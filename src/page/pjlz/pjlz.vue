
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
        <van-tab title="工作项"></van-tab>
        <van-tab title="数据统计"></van-tab>
      </van-tabs>
      <div
        v-if="gzxOrStatic==0"
        style="display: flex;height: 40px;margin-top: 7px;margin-left: 10px;margin-right: 10px;"
      >
        <div style="width:50%;position:relative;">
          <div @click="selectTab(1)" id="tabdiv1" class="pop_tab_noselect_div1">
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
        :offset-top="101"
        title-inactive-color="#333333"
        :sticky="true"
        line-width="75px"
        style="width: 100%;"
        @change="tabsclick1"
      >
        <van-tab title="办理中"></van-tab>
        <van-tab title="已办结"></van-tab>
      </van-tabs>

      <van-search v-model="seach_value" placeholder="请输入事项名称" @search="onSearch" />
    </div>
    <!-- <div id="child_page" style="overflow: auto;width: 100%;position:relative;">
      <div @touchmove.prevent :is="currentView" style="font-size:15px;"></div>
    </div>-->
    <child1 style="position:relative;" v-if="currentView===0"></child1>
    <child2 style="position:relative;" v-if="flag.role=='ld'&&currentView===1"></child2>
    <van-overlay :show="sqjxshow" @click="sqjxshow=false" :z-index="10000">
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
          <div style="display:flex;margin-top:24px;" @click="sqjxshow=false">
            <div style="width:50%;text-align: center;">
              <div class="pjlzSqjxCancelButton1">取消</div>
            </div>
            <div style="width:50%;text-align: center;" @click="queryJxFun">
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
        role: "cbr",
        department: "",
        username: ""
      }, //判断角色
      currentView: 0,
      sqjxshow: false, //申请结伴标记
      sqjxmessage: "", //申请结伴内容
      gzxOrStatic: 0 //0=工作项1=数据统计
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log(from);
    console.log(to);
    next();
  },
  beforeRouteLeave(to, from, next) {
    // dd.ready(function() {
    //   dd.biz.navigation.setRight({
    //     show: false, //控制按钮显示， true 显示， false 隐藏， 默认true
    //     control: true, //是否控制点击事件，true 控制，false 不控制， 默认false
    //     text: "", //控制显示文本，空字符串表示显示默认文本
    //     onSuccess: function(result) {
    //       //如果control为true，则onSuccess将在发生按钮点击事件被回调
    //       /*
    //     {}
    //     */
    //     },
    //     onFail: function(err) {}
    //   });
    // });
    next();
  },
  mounted() {
    this.getUserInfo(); //免登获取当前用户的角色
  },
  components: {
    child1,
    child2
  },
  methods: {
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
                // global_variable.roleJs = res.data;
                self.flag = Object.assign({}, self.flag, {
                  dingUserId: res.data.dingUserId,
                  username: res.data.username,
                  // role: res.data.role,
                  role: "ld",
                  department: res.data.department
                });
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
                if (res.data.role != "ld") {
                  self.showRightMenu();
                }
                console.log(global_variable.roleJs);
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
    queryJxFun: function() {
      console.log(this.sqjxmessage);
      this.sqjxshow = false;
    },
    //显示申请结项
    showSqjxPop: function(item) {
      console.log(item);
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
      if (index === 0) {
        this.currentView = 0;
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
