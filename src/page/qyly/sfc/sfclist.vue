<template>
  <div style="overflow:hidden;background: #ffffff;">
    <div id="count_id" style="display:flex;">
      <div style="width:48%;text-align:right;color:#1976d2;margin-top:6px;font-size:14px;">共</div>
      <div ref="totalCountId" style="color:#1976d2;font-size:24px;">0</div>
      <div style="width:48%;color:#1976d2;margin-top:6px;font-size:14px;">个</div>
    </div>
    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit"
      style="background-color: #ffffff;margin-top: 5px;">
      <div id="newsList" style="padding-left:10px;padding-right:10px;">
        <div v-for="(item,index) in list" :key="index"
        :style="backgroundDiv"
          style="background-size: 100% 100%; height:80px;padding-top:7px;padding-bottom:7px;border-bottom:1px #e4e4e4 solid ; position:relative;"
          @click="goDetile(item)">
          <div style="background: rgb(255, 255, 255,0.3);">
          <div style="color: #333333;font-size: 14px;margin-top: 8px;margin-left: 10px;">{{item.name}}</div>
          <div style="display:flex;margin-top: 10px;">
            <img src="../../../assets/img/mj.png" style="width: 14px;height: 14px;margin-left: 10px;">
            <div style="color: #666666;font-size: 12px;">{{item.area}}万平米</div>
            <img src="../../../assets/img/hs.png" style="width: 14px;height: 14px;margin-left: 10px;">
            <div style="color: #666666;font-size: 12px;">{{item.households}}户</div>
          </div>
          <div style="display:flex;margin-top: 10px;">
            <img src="../../../assets/img/rs.png" style="width: 14px;height: 14px;margin-left: 10px;">
            <div style="color: #666666;font-size: 12px;">{{item.people}}人</div>
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
  import echarts from "echarts";
  import { httpMethod } from "../../../api/getData.js";
  import Vue from "vue";
  import { PullRefresh } from "vant";
  Vue.use(PullRefresh);;
  export default {
    components: {
      MescrollVue // 注册mescroll组件
    },
    name: "sfclist",
    data() {
      return {
        backgroundDiv:{
        backgroundImage: 'url(' + require('../../../assets/img/sfcbg.png') + ')',
      },
        active: 0,
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
    mounted() {
      // this.getTypeList();
      // this.getDyTypeList();
    },
    methods: {
      mescrollInit(mescroll) {
        this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
      },
      //景区列表
      upCallback: function (page, mescroll) {
        var params = {
         
        };
        httpMethod
          .getQylyVillageBasicList(params)
          .then(res => {
            console.log(res);
            if (res.success == "1") {
              this.$refs.totalCountId.innerHTML = res.total;
              var data = res.villageList;
              this.list = this.list.concat(data);
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
          path: "/qyly/sfc/sfcdetile",
          name: "sfcdetile",
          params: {
            entity: item.id,
            villagename:item.name
          }
        });
      }
    }
  };
</script>
<style scoped>
  @import "../../../assets/css/frozenui.css";

  .mescroll {
    position: fixed;
    top: 240px;
    bottom: 0px;
    height: auto;
  }
</style>