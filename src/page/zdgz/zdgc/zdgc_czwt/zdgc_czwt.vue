<template>
  <div style="margin-top:0px;overflow:hidden;">
    <div class="div_flex" style="background:#ffffff;height:49px;">
      <van-search
        placeholder="请输入重点工程项目名称"
        @search="onSearch"
        v-model="seach_value"
        style="width:85%;margin-left:13px;"
      />
      <img src="../../../../assets/img/project_voice.png" style="height: 27px;margin-top: 10px;" />
    </div>
    <div style="display: flex;background: #ffffff;height: 36px;">
      <van-popup v-model="showPop" position="bottom" :style="{ height: '200px' }">
        <van-datetime-picker
          v-model="currentDate"
          type="year-month"
          style="height: 200px;"
          @confirm="onconfirm"
        />
      </van-popup>
      <div
        @click="showDatePicker(1)"
        style="width:98px;display: flex;background: #f3f3f3;border-radius: 4px;height: 30px;line-height: 31px;font-size: 14px;margin-left: 20px;padding-right: 15px;"
      >
        <img
          src="../../../../assets/img/project_calendar.png"
          style="height: 17px;margin-top: 6px;margin-right: 10px;margin-left: 10px;"
        />
        <div>{{date1}}</div>
      </div>
      <div style="background: #b7b7b7;height: 1px;width: 20px;margin-left: 10px;margin-top: 14px;"></div>
      <div
        @click="showDatePicker(2)"
        style="width:98px;display: flex;background: #f3f3f3;border-radius: 4px;height: 30px;line-height: 31px;font-size: 14px;margin-left: 10px;padding-right: 15px;"
      >
        <img
          src="../../../../assets/img/project_calendar.png"
          style="height: 17px;margin-top: 6px;margin-right: 10px;margin-left: 10px;"
        />
        <div>{{date2}}</div>
      </div>
      <div
        @click="query_button"
        style="background: rgb(39, 150, 231);height: 26px;color: #ffffff;padding: 1px 10px;font-size: 14px;line-height: 26px;border-radius: 4px;margin-left: 20px;"
      >查询</div>
    </div>

    <div id="count_id" style="display:flex;">
      <div style="width:35%;text-align:right;color:#1976d2;margin-top:6px;font-size:14px;">共</div>
      <div ref="totalCountId" style="color:#1976d2;font-size:24px;">0</div>
      <div style="width:48%;color:#1976d2;margin-top:6px;font-size:14px;">个项目存在问题</div>
    </div>
    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit" style="top: 264px;">
      <div id="newsList" style="padding-left:10px;padding-right:10px;">
        <div
          v-for="(item,index) in list"
          :key="index"
          :class="item.hasCamera=='0'?'backgroundDivPhotonohave':'backgroundDivPhotonohave' "
          style="padding-top:7px;padding-bottom:7px;box-shadow:0px 0px 2px #cccccc;"
          @click="goDetile(item)"
        >
          <div>
            <div style="display:flex;">
              <div class="li_div_title">{{item.projectName}}</div>
              <img
                v-if="item.zdProLevel=='2'"
                style="height:20px;margin-left:5px;margin-top:2px;"
                src="../../../../assets/img/project_city.png"
              />
              <img
                v-if="item.zdProLevel=='1'"
                style="height:20px;margin-left:5px;margin-top:2px;"
                src="../../../../assets/img/project_province.png"
              />
              <img
                v-if="item.projectNature=='1'"
                style="height:18px;margin-left:5px;margin-top:2px;"
                src="../../../../assets/img/zdgc_ctcysj.png"
              />
              <img
                v-if="item.projectNature=='0'"
                style="height:18px;margin-left:5px;margin-top:2px;"
                src="../../../../assets/img/zdgc_jcss.png"
              />
              <img
                v-if="item.projectNature=='2'"
                style="height:18px;margin-left:5px;margin-top:2px;"
                src="../../../../assets/img/zdgc_cyzx.png"
              />
            </div>
            <div style="display:flex;margin-top:6px;">
              <img
                style="height:14px;margin-left:16px;margin-top:3px;"
                src="../../../../assets/img/project_list_problem.png"
              />
              <div
                class="van-multi-ellipsis--l2"
                style="font-size:13px;margin-left:6px;"
              >{{item.existingProblem}}</div>
            </div>

            <div style="display:flex;margin-top:6px;position:relative;">
              <img
                style="height:14px;margin-left:16px;margin-top:2px;"
                src="../../../../assets/img/project_list_icon4.png"
              />
              <div style="font-size:13px;margin-left:6px;color:#00cc00;">{{item.completionRate}}%</div>
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
import { httpMethod } from "../../../../api/getData.js";
import Vue from "vue";
import { Search, PullRefresh, Popup } from "vant";
Vue.use(Search)
  .use(PullRefresh)
  .use(Popup);
export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  name: "zdgc_czwt",
  data() {
    return {
      date1: "开始时间",
      date2: "结束时间",
      flage: 1,
      showPop: false,
      currentDate: new Date(),
      activeClassUldy: -1,
      listZdgcType: [],
      listZdgcDyType: [],
      show: false,
      seach_value: "",
      active: 0,
      list: [],
      starttime: "",
      projectName: "",
      endtime: "",
      projectNature: "",
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
  mounted() {},
  methods: {
    query_button: function() {
      this.mescroll.resetUpScroll();
    },
    showDatePicker(index) {
      this.showPop = true;
      this.flage = index;
    },
    timeFormat(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return year + "-" + month;
    },
    onconfirm() {
      if (this.flage == 1) {
        this.date1 = this.timeFormat(this.currentDate);
        this.starttime = this.date1;
      } else {
        this.date2 = this.timeFormat(this.currentDate);
        this.endtime = this.date2;
      }
      this.showPop = false;
    },
    queryList: function() {
      this.show = true;
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    onSearch() {
      //alert(this.searchkey);
      this.mescroll.resetUpScroll();
      //this.upCallback()
    },
    //项目列表
    upCallback: function(page, mescroll) {
      var params = {
        starttime: this.starttime,
        projectName: this.seach_value,
        endtime: this.endtime,
        page: page.num,
        pageSize: page.size
      };
      httpMethod
        .getVoExistiongPro(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            if (page.num == 1) {
              this.list = [];
              this.$refs.totalCountId.innerHTML = res.total;
              this.date1 = res.reportDate;
              this.date2 = res.reportDate;
            }
            var data = res.dataList;
            if (data && data.length > 0) {
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
    goDetile(item) {
      //console.log(item);
      this.$router.push({
        path: "/zdgz/zdgc/zdgc_czwt/zdgc_czwt_dali/zdgc_czwt_deali",
        name: "zdgc_czwt_deali",
        params: {
          entity: item
        }
      });
    }
  }
};
</script>
<style scoped>
@import "../../../../page/zdgz/zdgc/zdgc_czwt/zdgc_czwt.css";
@import "../../../../assets/css/frozenui.css";
</style>
