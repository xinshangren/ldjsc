<template>
  <div style="margin-top:0px;overflow:hidden;background: #ffffff;">
    <div style="background:#ffffff;height:45px;display: flex;">
      <van-search
        placeholder="请输入景点名称"
        @search="onSearch"
        v-model="seach_value"
        style="width:85%;margin-left:13px;"
      />
      <img src="../../../assets/img/project_filtrate.png"
        style="height: 27px;margin-top: 10px;margin-left:5px;"
        @click="queryList"
      />
    </div>
    <div id="count_id" style="display:flex;margin-top: -10px;">
      <div style="width:48%;text-align:right;color:#1976d2;margin-top:6px;">共</div>
      <div ref="totalCountId" style="color:#1976d2;font-size:24px;">0</div>
      <div style="width:48%;color:#1976d2;margin-top:6px;">个</div>
    </div>
    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit" style="margin-top: 40px;background-color: #ffffff;">
      <div id="newsList" style="padding-left:10px;padding-right:10px;">
        <div
          v-for="(item,index) in list"
          :key="index"
          :class="item.hasCamera=='0'?'backgroundDivPhotonohave':'backgroundDivPhotohave' "
          style="height:80px;padding-top:7px;padding-bottom:7px;border-bottom:1px #e4e4e4 solid ; position:relative;display: flex;"
          @click="goDetile(item)"
        >
        <div>
          <div style="display:flex;">
            <div v-if="index<5" :style="backgroundDiv" style="color: #ffffff; margin-left: 10px; font-size: 9px;line-height: 58px; text-align:center;width:25px; height:37px; background: no-repeat center top;background-size: contain;">
            {{index+1}}
            </div>
            <!-- <img src="../../../assets/img/hot.png" style="width: 20px;height:30px;margin-left: 15px;"> -->
          <div style="color: #333333;font-size: 14px;margin-top: 8px;margin-left: 10px;">{{item.NAME}}</div>
            <div style="color: #ff290d;font-size: 14px;margin-top: 8px;position: absolute;right: 110px;">{{item.LEVEL}}</div>
          </div>
          <div style="display:flex;margin-top: 10px;">
            <img src="../../../assets/img/dw.png" style="width: 18px;height: 20px;margin-left: 10px;">
            <div style="color: #666666;font-size: 12px;">{{item.address}}</div>
          </div>
        </div>
        <img :src=item.path style="width: 100px;height: 70px;position: absolute;right: 0;">
        </div>
      </div>
    </mescroll-vue>

    <!-- 挂载到 #app 节点下 -->
    <!-- 自定义图标 -->
    <van-popup
      v-model="show"
      position="top"
      get-container="#count_id"
      :style="{height: '20%' }"
      @opened="openPop"
      style="overflow:hidden;background:rgb(243, 243, 243);"
    >
      <div style="background:#ffffff;">
        <div style="padding-top:9px;font-size: 14px;margin-left:17px;">A级类型</div>
        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <ul class="ui-row" id="ajlxDialogId" style="margin-top: 11px;margin-right: 15px;">
          <li
            v-for="(item,index) in listJqType"
            :key="index"
            :id=item.id
            class="ui-col ui-col-50 dialogNoSelect"
            style="width:43%;float: left;"
          >{{item.name}}</li>
        </ul>
       
        <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
        <div style="display: flex;background: #f3f3f3;height:110px;">
          <div
            @click="clearType"
            style="width: 50%;height: 36px;background: #ffffff;line-height: 36px;text-align: center;"
          >重置</div>
          <div
            @click="clickUlDy"
            style="background:#3ca1ec;width: 50%;height: 36px;color:#ffffff;line-height: 36px;text-align: center;"
          >确定</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import $ from "jquery";
import MescrollVue from "mescroll.js/mescroll.vue";
import echarts from "echarts";
import { httpMethod } from "../../../api/getData.js";
import Vue from "vue";
import { Search, PullRefresh, Popup,Dialog } from "vant";
Vue.use(Search)
  .use(PullRefresh)
  .use(Popup).use(Dialog);
export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  name: "zdgc_xmlb_vue",
  data() {
    return {
      backgroundDiv:{
        backgroundImage: 'url(' + require('../../../assets/img/hot.png') + ')',
      },
      listJqType: [
        {
          id:'AAAAA',
          name:'5A'
        },
        {
          id:'AAAA',
          name:'4A'
        },
        {
          id:'AAA',
          name:'3A'
        },
        {
          id:'empty',
          name:'无星'
        },
        ],
      show: false,
      seach_value: "",
      active: 0,
      list: [],
      zdProType: "",
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
    queryList: function() {
      this.show = true;
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    onSearch() {

      this.mescroll.resetUpScroll();
    },
    //景区列表
    upCallback: function(page, mescroll) {
      var params = {
        name:this.seach_value,
        starLevel:this.zdProType,
        page: page.num,
        pageSize: page.size
      };
      httpMethod
        .getQylyScenicBasicList(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            if (page.num == 1) {
              this.list = [];
              this.$refs.totalCountId.innerHTML = res.total;
            }
            var data = res.qylyScenicBasicList;
            if (data && data.length > 0) {
              for(var i=0;i<data.length;i++){
                data[i].path=httpMethod.returnBaseUrlFun()+ data[i].path;
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
    openPop: function() {
      //选择项目类型
      $("#ajlxDialogId li").click(function(e) {
        if ($(this).hasClass("dialogSelect")) {
          $(this).removeClass("dialogSelect");
          $(this).addClass("dialogNoSelect");
        } else {
          $(this).addClass("dialogSelect");
          $(this).removeClass("dialogNoSelect");
        }
      });
    },
    clickUlDy: function() {
      var context = this;
      //循环获取选中的项目类型
      $("#ajlxDialogId li").each(function() {
        var isSelect = $(this).hasClass("dialogSelect");
        var id = $(this).attr("id");
        if (isSelect) {
          if (context.zdProType != "") {
            context.zdProType += "，" + id;
          } else {
            context.zdProType += id;
          }
        }
      });
      this.mescroll.resetUpScroll();
      this.show = false;
    },
    clearType: function() {
      var context = this;
     
      //循环重置查询条件
      $("#ajlxDialogId li").each(function() {
        $(this).removeClass("dialogSelect");
        $(this).addClass("dialogNoSelect");
      });
  
      context.zdProType = "";
      context.seach_value = "";
      this.mescroll.resetUpScroll();
      this.show = false;
    },
    goDetile(item) {
      //console.log(item);
      this.$router.push({
        path: "/qyly/jq/jqdetile",
        name: "jqdetile",
        params: {
          entity: item.id
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
    top: 189px;
    bottom: 0px;
    height: auto;
  }
  .dialogNoSelect {
	border: 1px solid #cccccc;
	padding: 1px 15px 1px 15px;
	border-radius: 33px;
	font-size: 13px;
	margin-left: 10px;
	text-align: center;
	margin-top: 4px;
	background: #ffffff;
}

.dialogSelect {
	border: 1px solid #1976D2;
	padding: 1px 15px 1px 15px;
	border-radius: 33px;
	font-size: 13px;
	margin-left: 10px;
	text-align: center;
	margin-top: 4px;
	background: #f6fbff;
	color: #1976D2;
}

</style>
