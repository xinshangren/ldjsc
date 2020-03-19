<template>
  <div style>
    <mescroll-vue
      id="mescroll"
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
    >
      <div id="newsList" style="padding-left:10px;padding-right:10px;margin-top:10px;">
        <div
          style="position: relative;padding: 10px;background: rgb(255, 255, 255);height: 80px;border-radius: 10px;margin-bottom: 6px;box-shadow: 1px 1px 1px #cccccc;"
          v-for="(item,index) of list"
          :key="index"
          @click="goDetile(item)"
        >
          <div
            v-if="item.yd_hits=='1'"
            style="position: absolute;right: 0px;background: red;width: 43px;height: 19px;border-radius: 0px 10px 0px 10px;top: 0px;color: #ffffff;font-size: 13px;text-align: center;"
          >未读</div>
          <div
            class="van-multi-ellipsis--l2"
            style="color: #333333;font-size: 16px;width: 93%; overflow: hidden;"
          >{{item.title}}</div>

          <div style="display:flex;margin-top:5px;">
            <div style="font-size:15px;color:#999999;">发布人: {{item.add_user_name}}</div>
          </div>
          <div style="display:flex;margin-top:4px;">
            <div
              style="color: #cccccc;font-size: 13px;display: flex;position: absolute;right: 14px;line-height: 13px;vertical-align: middle; margin-top: 0px;"
            >
              <img src="../../../assets/img/icon_time.png" style="height: 13px;" />
              <div style="margin-left:4px;">{{item.createDate}}</div>
            </div>
          </div>
        </div>
      </div>
    </mescroll-vue>
  </div>
</template>

<script>
import $ from "jquery";
import MescrollVue from "mescroll.js/mescroll.vue";
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
import { httpMethod } from "../../../api/getData.js";
import global_variable from "../../../api/global_variable.js";
export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "zdgz_mryqVue",
  data() {
    return {
      list: [],
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
          tip: "暂无相关数据~" //提示
        }
      }
    };
  },
  activated() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
    var top = localStorage.getItem("mryqList");
    console.log(top);
    if (top != null && top != "" && top != undefined) {
      $("#mescroll").scrollTop(top);
      var items = localStorage.getItem("mryqDealiId");
      console.log(items);
      var itemv = JSON.parse(items);
      var self = this;
      if (self.list.length > 0) {
        let arr = self.list.slice(0); //深拷贝，（等价一个新的数组）
        arr.forEach(item => {
          var id = item.id;
          if (id === itemv.id) {
            item.yd_hits = "0";
          }
        });
        console.log(arr);
        self.list = arr;
      }
    } else {
      this.mescroll.resetUpScroll();
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log(from);
    console.log(to);
    if (from.name == "main") {
      to.meta.keepAlive = false;
      localStorage.setItem("mryqList", "");
      localStorage.setItem("mryqDealiId", "");
    } else {
      if (from.name == "zdgz_mryqVue") {
        if (to.name == "mryqDealiVue") {
          to.meta.keepAlive = false;
        }
      }
    }
    next();
  },
  mounted() {},
  methods: {
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    //今日要闻列表
    upCallback: function(page, mescroll) {
      var params = {
        page: page.num,
        pageSize: page.size,
        userId: global_variable.roleJs.dingUserId
      };
      httpMethod
        .getCmsMyrqList(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            if (page.num == 1) {
              this.list = [];
              // this.$refs.totalCountId.innerHTML = res.total;
            }
            var data = res.dataList;
            if (data && data.length > 0) {
              var dataNew = [];
              dataNew = data;
              for (var i = 0; i < data.length; i++) {
                var createDate = this.dateFormat(data[i].create_date);
                data[i].createDate = createDate;
              }
              this.list = this.list.concat(data);
            }

            this.$nextTick(() => {
              this.mescroll.endBySize(data.length, res.total);
            });
          }
        })
        .catch(err => {
          // this.$toast(err);
          mescroll.endErr();
        });
    },
    dateFormat: function(longTypeDate) {
      var dateType = "";
      var date = new Date();
      date.setTime(longTypeDate);
      dateType += date.getFullYear(); //年
      dateType += "-" + this.getMonth(date); //月
      dateType += "-" + this.getDay(date); //日
      return dateType;
    },
    getMonth: function(date) {
      var month = "";
      month = date.getMonth() + 1; //getMonth()得到的月份是0-11
      if (month < 10) {
        month = "0" + month;
      }
      return month;
    },
    //返回01-30的日期
    getDay: function(date) {
      var day = "";
      day = date.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      return day;
    },
    //获取记录日志的logid
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
    },
    goDetile(item) {
      var top = $("#mescroll").scrollTop();
      localStorage.setItem("mryqList", top);
      localStorage.setItem("mryqDealiId", JSON.stringify(item));
      //  this.$router.push({
      //     path: "/zdgz/mryq/mryq/mryqDeali",
      //     name: "mryqDealiVue",
      //     params: {
      //       entity: item
      //     }
      //   });
      var addPattern = item.add_pattern; //1=每日要情2=期刊
      if (addPattern === "1") {
        this.$router.push({
          path: "/zdgz/mryq/mryq/mryqDeali",
          name: "mryqDealiVue",
          params: {
            entity: item
          }
        });
      } else {
          localStorage.setItem("qklistitemEnti","");
        this.$router.push({
          path: "/zdgz/mryq/qklist",
          name:"qklistVue",
          params: {
            entity: item
          }
        });
      }
    }
  }
};
</script>

<style >
@import "../../../page/zdgz/mryq/mryq.css";
</style>
