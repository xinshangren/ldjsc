<template>
  <div style="margin-top:54px;">
    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
      <div id="newsList" style="padding-left:10px;padding-right:10px;">
        <div
          style="position: relative;padding: 10px;border-bottom: 1px solid #EFEFEF; background: #ffffff;height: 95px;"
          v-for="(item,index) of list"
          :key="index"
          @click="goDetile(item)"
        >
          <div style="color: #333333;font-size: 16px;width: 100%; overflow: hidden;">{{item.headline}}</div>
        <div v-if="item.if_read=='2'" style="position: absolute; right: 0px; background: red; width: 43px; height: 19px; border-radius: 0px 10px; top: 0px; color: rgb(255, 255, 255); font-size: 13px; text-align: center;">未读</div>
          <div style="display:flex;margin-top:13px;position: absolute; width: 95%;">
            <div style="font-size:15px;height:65px">详情: {{item.describe_text}}</div>
            <div
              style="color: #cccccc;font-size: 13px;display: flex;position: absolute;right: 5px;line-height: 13px;vertical-align: middle;bottom:1px;"
            >
              <img src="../../assets/img/icon_time.png" style="height: 13px;" />
              {{item.creation_time}}
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
import { httpMethod } from "../../api/getData.js";
import global_variable from "../../api/global_variable.js";
export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  beforeCreate() {//加载之前的方法
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  name: "zdgz_mryqVue",
  inject:['getmsgnum'],
  data() {//定义变量
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
          size: 10, //每页数据条数,默认10
          userId: global_variable.roleJs.dingUserId
        },
        htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
        noMoreSize: 5,
        empty: {//空的时候显示东西
          //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
          warpId: "newsList", //父布局的id (1.3.5版本支持传入dom元素)
          //icon: "../../../../assets/img/nodata.png", //图标,默认null,支持网络图
          tip: "暂无相关数据~" //提示
        }
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log(from);
    if (from.path != "/") {
      if (to.path == "/zdgz/mryq/mryq") {
        to.meta.keepAlive = true;
      } else {
        to.meta.keepAlive = false;
      }
    } else {
      to.meta.keepAlive = false;
    }
    next();
  },
  mounted() {
  },//启动方法
  methods: {//定义方法
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
        .getTzList(params)
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
                var creation_time = this.dateFormat(data[i].creation_time);
                data[i].creation_time = creation_time;
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
      var params = {id: item.id };
      httpMethod.readTz(params).then(res => {
         this.getmsgnum();
      });
      var routesUrl='';
      var routesName='';
      var routes =this.$router.options.routes;
      for (var index = 0; index < routes.length; index++) {
        if(routes[index].bmid !=undefined&& routes[index].bmid!='undefined' &&routes[index].bmid!=null && item.module_id==routes[index].bmid){
          routesUrl=routes[index].path;
          routesName=routes[index].name;
          break;
        }
      }
     
      this.$router.push({
        path: routesUrl,
        name: routesName,
        params: {
            typebt: item.headline_num
          }
      });
      
    }
  }
};
</script>

<style >
.mescroll {
    position: fixed;
    top: 110px;
    bottom: 0px;
    height: auto;
  }
</style>
