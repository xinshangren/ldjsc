
<template>
  <div>
    <img id="imgSplashId" style="width:100%;" src="../assets/img/slpsh_bg.png" />
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
import { Dialog } from "vant";
import dd from "dingtalk-jsapi";
Vue.use(Dialog);
import { httpMethod } from "../api/getData.js";
import global_variable from "../api/global_variable.js";
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "splashVue",
  data() {
    return {
      seach_value: "",
      screenHeight: document.body.clientHeight,
      permissTipTimeOut: 3
    };
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
  mounted() {
    const that = this;
    console.log(that.screenHeight);
    $("#imgSplashId").css("height", that.screenHeight + "px");

    var env = dd.env.platform;
    console.log(env);
    if (!global_variable.isDebugging&&env == "notInDingTalk") {
      Dialog.alert({
        title: "非法操作",
        showConfirmButton: true,
        message:"请从钉钉浏览器打开"
      }).then(() => {
        // window.location.href="www.baidu.com";
      });
      return;
    }
    that.getCuruserid();
    // console.log("111");
    if (global_variable.isDebugging) {
      this.$parent.isSingleApp = false;
      this.$router.push("/main");
    }
  },
  methods: {
    getCuruserid: function() {
      var self = this;

      if (global_variable.isDebugging){//调试获取权限以及关注列表
            var params = {
              code: ""
            };
            httpMethod
              .getUser(params)
              .then(res => {
                console.log(res);
                if (res.success == "1") {
                  if (res.functions != null) {
                    global_variable.permissionList = res.functions;
                    global_variable.followList = res.listMap;
                    global_variable.allList = res.listdy;
                    global_variable.userId = res.userId; //将全局变量模块挂载到Vue.prototype中
                    self.$parent.isSingleApp = false;
                    self.$router.push("/main");
                  } else {
                    console.log("关闭应用");
                    setTimeout(() => {
                      var interval = setInterval(() => {
                        self.permissTipTimeOut = self.permissTipTimeOut - 1;
                        console.log(self.permissTipTimeOut);
                        // console.log($(".van-dialog"));
                        if (self.permissTipTimeOut > 0) {
                          $(".van-dialog")
                            .find(".van-dialog__message")
                            .html(self.permissTipTimeOut + "秒后退出应用");
                        }
                        if (self.permissTipTimeOut < 1) {
                          //clearInterval(interval);
                          dd.ready(function() {
                            dd.biz.navigation.close();
                          });
                        }
                      }, 1000);
                    }, 100);
                    Dialog.alert({
                      title: global_variable.permissTip,
                      showConfirmButton: false,
                      message: self.permissTipTimeOut + "秒后退出应用"
                    }).then(() => {});
                  }
                } else if (res.success == "0") {
                }
              })
              .catch(err => {
                //self.$toast(err);
              });
          
      }

      dd.ready(function() {
        dd.ui.webViewBounce.disable();
        dd.runtime.permission.requestAuthCode({
          corpId: global_variable.corpId, // 企业id
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
                    global_variable.permissionList = res.functions;
                    global_variable.followList = res.listMap;
                    global_variable.allList = res.listdy;
                    console.log("main权限" + global_variable.permissionList);
                    global_variable.userId = res.userId; //将全局变量模块挂载到Vue.prototype中
                    self.$parent.isSingleApp = false;
                    self.$router.push("/main");
                  } else {
                    console.log("关闭应用");
                    setTimeout(() => {
                      var interval = setInterval(() => {
                        self.permissTipTimeOut = self.permissTipTimeOut - 1;
                        console.log(self.permissTipTimeOut);
                        // console.log($(".van-dialog"));
                        if (self.permissTipTimeOut > 0) {
                          $(".van-dialog")
                            .find(".van-dialog__message")
                            .html(self.permissTipTimeOut + "秒后退出应用");
                        }
                        if (self.permissTipTimeOut < 1) {
                          //clearInterval(interval);
                          dd.ready(function() {
                            dd.biz.navigation.close();
                          });
                        }
                      }, 1000);
                    }, 100);
                    Dialog.alert({
                      title: global_variable.permissTip,
                      showConfirmButton: false,
                      message: self.permissTipTimeOut + "秒后退出应用"
                    }).then(() => {});
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
      dd.error(function(error) {
        alert("dd error: " + JSON.stringify(error));
      });
    }
  }
};
</script>

<style >
</style>
