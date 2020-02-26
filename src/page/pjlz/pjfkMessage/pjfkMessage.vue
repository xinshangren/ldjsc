
<template>
  <div style="margin-top:0px;">
    <div v-if="list.length<1" style="text-align: center;">
      <img style="height: 200px;margin-top: 146px;" src="../../../assets/img/no_data.png" />
    </div>
    <mescroll-vue
      id="mescroll"
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
      style=" top: 10px;"
    >
      <div id="newsList" style="padding-left:10px;padding-right:10px;">
        <div v-for="(item,index) in list" :key="index" class="pjkMessageListDiv">
          <div class="pjkMessageRedPoint"></div>
          <div v-if="item.msg_type==0" style="display:flex;">
            <img class="pjkMessagetitileImg" src="../../../assets/img/icon_source1.png" />
            <div class="pjkMessagetitileDiv">系统提示</div>
          </div>
          <div v-if="item.msg_type==1" style="display:flex;">
            <img class="pjkMessagetitileImg" src="../../../assets/img/icon_source2.png" />
            <div class="pjkMessagetitileDiv">领导催办</div>
          </div>
          <div v-if="item.msg_type==2" style="display:flex;">
            <img class="pjkMessagetitileImg" src="../../../assets/img/icon_source3.png" />
            <div class="pjkMessagetitileDiv">安排人催办</div>
          </div>

          <div class="van-multi-ellipsis--l2 pjkMessageContentDiv">{{item.msg_content}}</div>

          <div style="height: 24px;position: relative;" @click="pjlz_fk(item.approval_id)">
            <div class="pjkMessageFkDiv">
              <img class="pjkMessageFkDivimg" src="../../../assets/img/icon_feedback.png" />
              <div class="pjkMessageFkDivtext">反馈</div>
            </div>
          </div>
          <div
            style="margin-left: 13px;margin-right: 13px;margin-top: 8px;"
            class="van-hairline--top"
          ></div>

          <div style="display:flex;margin-top:14px;">
            <img class="pjkMessageBottomImg" src="../../../assets/img/icon_time_pjlz.png" />
            <div class="pjkMessageBottomDiv">推送时间：{{item.msg_time}}</div>
          </div>
        </div>
      </div>
    </mescroll-vue>
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
      flag: 0, //判断角色
      currentView: "child1",
      list: [],
      Popshow: false,
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
  mounted() {
    this.pdSingleApp();
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
      if (detail == 1) {
        $("#mescroll").css("top", "10px");
      }
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    //项目列表
    upCallback: function(page, mescroll) {
      var params = {
        method: "messageList",
        dingUserId: global_variable.roleJs.dingUserId,
        // corpId:global_variable.corpId,
        pageNo: page.num,
        pageSize: page.size
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
            var data = res.data.msglist;
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
    pjlz_fk:function(id){
      this.$router.push({
        path: "/pjlz/pjlzDetail_fk/pjlzDetail_fk",
        name: "pjlzDetail_fk",
        params: {
          obj: {id:id}
        }
      });
    }
  }
};
</script>

<style >
@import "../../../page/pjlz/pjfkMessage/pjfkMessage.css";
.van-popup--top {
  z-index: 100000;
}
</style>
