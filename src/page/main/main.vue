<template>
  <div>
    <headlineVue v-if="tabid==0" style="overflow-y:auto;overflow-x:hidden;margin-top:55px;"></headlineVue>
    <dingbanVue v-if="tabid==2" style="overflow-y:auto;overflow-x:hidden;margin-top:55px;"></dingbanVue>
    <homeVue
      v-if="tabid==4"
      style="overflow-y:auto;overflow-x:hidden;margin-top:55px;padding-bottom:55px;" ref ='home'
    ></homeVue>

    <div
      style="z-index: 2; display: flex;position: fixed;bottom: 0px;background: #ffffff;width: 100%;height: 55px;font-size:15px;"
    >
      <div class="main_item" id="0">
        <img class="main_item_img" v-bind:src="tabImage[0]" />
        <div class="main_item_noSelect">综合信息</div>
      </div>
      <div class="main_item" id="1">
        <img class="main_item_img" v-bind:src="tabImage[1]" />
        <div class="main_item_noSelect">13710督办</div>
      </div>
      <div class="main_item" id="4" style="position: relative;width: 25%;">
        <img src="@/assets/img/tab_logo.png" style="height: 54px;" />
      </div>
      <div class="main_item" id="2">
        <img class="main_item_img" v-bind:src="tabImage[2]" />
        <div class="main_item_noSelect">一键直连</div>
      </div>
      <div class="main_item" id="3">
        <img class="main_item_img" v-bind:src="tabImage[3]" />
        <div class="main_item_noSelect">市长热线</div>
      </div>
    </div>
  </div>
</template>

<script>
import headlineVue from "@/page/main/headline.vue";
import homeVue from "@/page/main/home.vue";
import dingbanVue from "@/page/main/dingban.vue";
import { Search } from "vant";
import $ from "jquery";
import { mainJs } from "../main/main.js";
import global_variable from "../../api/global_variable.js";
export default {
  name: "mainVue",
  data() {
    return {
      tabid: 4,
      isCreate: false,
      isDeali: false,
      seach_value: "",
      tabImage: [
        require("@/assets/img/icon_news.png"),
        require("@/assets/img/icon_supervise.png"),
        require("@/assets/img/icon_ding.png"),
        require("@/assets/img/icon_hotline.png")
      ],
      permissionList: []
    };
  },
  beforeRouteEnter(to, from, next) {
    global_variable.indexTabId = 0;
    console.log(from);
    console.log(to);
    next(vm => {
      vm.isCreate = false;
      vm.isDeali = false;
    });
    var context = this;
    if (to.path == "/") {
      if (
        from.path != "/toutiao/newsdetile" &&
        from.path != "/" &&
        from.name != null
      ) {
        next(vm => {
          vm.isCreate = true;
          window.addEventListener("popstate", vm.funback, false); //false阻止默认事件
        });
      } else {
        next(vm => {
          vm.isDeali = true;
        });
      }
    } else {
      next(vm => {
        vm.isCreate = false;
      });
    }
    next();
  },
  mounted() {
    var context = this;
    context.permissionList = context.$refs.home.permissionList
    console.log('main页面')
    console.log(context.permissionList)
    $(".main_item").click(function() {
      var id = $(this).attr("id");
      context.changeTabStyle(id);
    });
    this.$root.$on("test11", function(msg) {
      // console.log("111");
      context.changeTabStyle("4");
    });
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL);

      window.addEventListener("popstate", context.funback, false); //false阻止默认事件
    }
    // document.addEventListener("backbutton", function(e) {
    //   alert(this.$route.name);
    //   // 在这里处理你的业务逻辑
    //   e.preventDefault(); //backbutton事件的默认行为是回退历史记录，如果你想阻止默认的回退行为，那么可以通过preventDefault()实现
    // });
  },
  destroyed() {
    window.removeEventListener("popstate", context.funback, false); //false阻止默认事件
  },
  methods: {
    exit:function(){
      this.$router.go(-3);
    },
    removeEvent: function() {
      window.removeEventListener("popstate", this.funback, false); //false阻止默认事件
    },
    addEvent: function() {
      window.addEventListener("popstate", this.funback, false); //false阻止默认事件
    },
    funback: function() {
      console.log("this.isCreate===" + this.isCreate);
      console.log("this.isDeali===" + this.isDeali);
      console.log(this.tabid);
      // console.log(this.$route.query);
      var name = this.$route.name;
      if (name == "main") {
        if (global_variable.indexTabId == 0) {
          if (this.tabid != "4") {
            if (!this.isDeali) {
              this.changeTabStyle("4");
              history.pushState(null, null, document.URL);
              this.isCreate = false;
              this.isDeali = false;
            }
          } else {
            if (this.isCreate) {
              console.log(window.history.length);
              if (window.history.length <= 1) {
                this.$router.push({ path: "/" });
                return;
              } else {
                this.$router.go(-1);
              }
              //上面都没执行就说明卡在当前页不是最后一条， histroy记录数量大于1，又没有回退记录，只能返回首页，
              //如果上面都执行了 页面都跳走了，这个也就不用管了
              setTimeout(() => {
                this.$router.push({ path: "/" });
              }, 500);
              // console.log(this.$router);
              // this.$router.back(-100);
            }
          }
          this.isDeali = false;
        }
        this.isDeali = false;
      }
    },
    backGoHome: function() {},
    //改变tab的状态和图片
    changeTabStyle: function(tabid) {
      console.log("改变tab==" + tabid);
      if (tabid == 0) {
        if ((this.permissionList.indexOf("综合信息") > -1)) {
          this.tabid = tabid;
          mainJs.changeTabStyle(tabid);
        } else {
          this.$toast("权限不足");
        }
      }
      if (tabid == 1) {
        if ((this.permissionList.indexOf("13710督办") > -1)) {
         this.$toast("功能开发中");
        } else {
          this.$toast("权限不足");
        }
      }
      if (tabid == 2) {
        if ((this.permissionList.indexOf("一键直连") > -1)) {
          this.tabid = tabid;
          mainJs.changeTabStyle(tabid);
        } else {
          this.$toast("权限不足");
        }
        //  this.tabid = tabid;
        //   mainJs.changeTabStyle(tabid);
      }
      if (tabid == 3) {
        if ((this.permissionList.indexOf("市长热线") > -1)) {
         this.$toast("功能开发中");
        } else {
          this.$toast("权限不足");
        }
      }
      if(tabid == 4){
         this.tabid = tabid;
          mainJs.changeTabStyle(tabid);
      }
    }
  },
  components: {
    homeVue,
    headlineVue,
    dingbanVue
  }
};
</script>

<style scoped>
</style>