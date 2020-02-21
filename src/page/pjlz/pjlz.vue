
<template>
  <div>
    <div
      v-show="flag==0"
      style="z-index: 2000;position: fixed;width: 100%;top: 101px;background: #f1f1f1;"
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
      <div style="display: flex;height: 40px;margin-top: 7px;margin-left: 10px;margin-right: 10px;">
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

    <div v-show="flag==1">
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
    <div id="child_page" style="overflow: auto;width: 100%;position:relative;">
      <div @touchmove.prevent :is="currentView" style="font-size:15px;"></div>
    </div>

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
import dd from "dingtalk-jsapi";
Vue.use(Tab)
  .use(Tabs)
  .use(Search)
  .use(Overlay)
  .use(Field);
import global_variable from "../../api/global_variable.js";
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
      flag: 0, //判断角色
      currentView: "child1",
      sqjxshow: false,
      sqjxmessage: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log(from);
    console.log(to);
    // if (from.path == "/zdgz/zdgc/zdgc_xmlb/zdgc_xmdeali/zdgc_xmdeali") {
    //   if (to.path == "/zdgz/zdgc/zdgc") {
    //     to.meta.keepAlive = true;
    //   } else {
    //     to.meta.keepAlive = false;
    //   }
    // } else {
    //   to.meta.keepAlive = false;
    // }
    next();
  },
  mounted() {
    this.getCuruserid(); //免登获取当前用户的角色
    //  console.log(this.$children, '子')

     this.$router.push({
              path: "/pjlz/pjfkMessage/pjfkMessage"
            });
  },
  components: {
    child1
  },
  methods: {
    //添加标题右上方按钮
    showRightMenu: function() {
      var self =this;
      dd.ready(function() {
        dd.biz.navigation.setMenu({
          items: [
            {
              id: "1",
              iconId: "file",
              text: "消息",
              url:
                "../../assets/img/hicon_info.png"
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
      console.log(val);
    },
    selectTab: function(flag) {
      // console.log(flag);
      this.$children[3].changeListState(flag);
      switch (flag) {
        case 1: //形象进度
          $("#tabdiv1").removeClass("pop_tab_noselect_div1");
          $("#tabdiv1").addClass("pop_tab_select_div1");
          $("#tabdiv2").addClass("pop_tab_noselect_div2");
          $("#tabdiv2").removeClass("pop_tab_select_div2");
          break;
        case 2: //存在问题
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
    },
    //承办人和文电科tab切换
    tabsclick1: function(name, title) {
      console.log(name + "--" + title);
    },
    getCuruserid: function() {
      var self = this;
      dd.ready(function() {
        dd.ui.webViewBounce.disable();
        dd.runtime.permission.requestAuthCode({
          corpId: "dingf1c7cc28f05dbd2335c2f4657eb6378f", // 企业id
          onSuccess: function(info) {
            var code = info.code; // 通过该免登授权码可以获取用户身份
            var params = {
              code: code
            };
            httpMethod
              .getUser(params)
              .then(res => {
                console.log(res);
                if (res.success == "1") {
                  if (res.functions != null) {
                    self.permissionList = res.functions;
                    console.log("main权限" + res.functions);
                    global_variable.userId = res.userId; //将全局变量模块挂载到Vue.prototype中
                    self.doAddAppLog(global_variable.userId);
                  } else {
                    console.log("关闭应用");
                    Dialog.alert({
                      message: "权限不足，请联系管理员！"
                    }).then(() => {
                      dd.ready(function() {
                        dd.biz.navigation.close();
                      });
                    });
                  }
                } else if (res.success == "0") {
                }
              })
              .catch(err => {
                //self.$toast(err);
              });
          },
          onFail: function(err) {
            alert("dd error: " + JSON.stringify(err));
          }
        });
      });
    },
    doAddAppLogList: function(logId, ddPhone, grouping_id, grouping_name) {
      var params = {
        logId: logId,
        ddPhone: ddPhone,
        grouping_id: grouping_id,
        grouping_name: grouping_name
      };
      httpMethod
        .doAddAppLogList(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
          }
        })
        .catch(err => {
          // this.$toast(err);
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
