<template>
  <div>
    <div id="menu1" style="display: flex; margin-top: 15px;">
      <div id="menuid3" class="hjselect" style="margin-left: 15%;border-radius:16px 0 0 16px;">
        <img :src="img1" style="height:14px;margin-top: 9px;margin-left: 30%;" />
        最新动态
      </div>
      <div id="menuid4" class="hjnoselect" style="border-radius:0 16px 16px 0 ;">
        <img :src="img2" style="height:14px;margin-top: 9px;margin-left: 30%;" />
        公示公告
      </div>
    </div>
    <div id="zxdtlist" style="margin-top: 10px;">
      <van-list id="zwgkzxdt" v-model="loading" :finished="finished" @load="onLoad" :offset="60" :error.sync="error" :immediate-check="false"
      finished-text="暂无更多数据" error-text="查询失败" style="background: #ffffff;overflow-y: auto;">
        <div
          style="position: relative;padding: 10px;border-bottom: 1px solid #EFEFEF; background: #ffffff;height: 95px;"
          v-for="(item,index) of list" :key="index" @click="goDetile(item)">
          <div style="color: #333333;font-size: 16px;width: 100%; overflow: hidden; text-overflow:ellipsis;white-space: nowrap;">
            {{item.title}}
          </div>
          <div style="color: #999999;font-size: 14px;overflow: hidden;height: 60px;line-height: 20px;">
            {{item.summary}}
          </div>
          <div style="color: #cccccc;font-size: 13px;display: flex;position: absolute;right: 5px;line-height: 13px;vertical-align: middle;margin-top: 5px;">
            <img src="../../assets/img/icon_time.png" style="height: 13px;"/>
            {{item.showTime}}
          </div>
        </div>
      </van-list>
    </div>

    <div id="gsgglist" style="margin-top: 10px;display: none;">
      <van-list id="zwgkgsgg" v-model="loading" :finished="finished" @load="onLoad1" :offset="60" :error.sync="error" :immediate-check="false"
      finished-text="暂无更多数据" error-text="查询失败" style="background: #ffffff;overflow-y: auto;">
        <div
          style="position: relative;padding: 10px;border-bottom: 1px solid #EFEFEF; background: #ffffff;height: 95px;"
          v-for="(item1,index1) of list1" :key="index1" @click="goDetile(item1)">
          <div style="color: #333333;font-size: 16px;width: 100%; overflow: hidden; text-overflow:ellipsis;white-space: nowrap;">
            {{item1.title}}
          </div>
          <div style="color: #999999;font-size: 14px;overflow: hidden;height: 60px;line-height: 20px;">
            {{item1.summary}}
          </div>
          <div style="color: #cccccc;font-size: 13px;display: flex;position: absolute;right: 5px;line-height: 13px;vertical-align: middle;margin-top: 5px;">
            <img src="../../assets/img/icon_time.png" style="height: 13px;"/>
            {{item1.showTime}}
          </div>
        </div>
      </van-list>
    </div>
  </div>


</template>
<script>
  import $ from "jquery";
  import Vue from "vue";
  import { PullRefresh } from "vant";
  import { httpMethod } from "../../api/getData.js";
  Vue.use(PullRefresh);
  export default {
    name: "newsdetile",
    mounted() {
      var orderHight1 = document.documentElement.clientHeight;
      var heightlist = orderHight1 -215;
      $("#zwgkzxdt").css('height',heightlist + "px");
      $("#zwgkgsgg").css('height',heightlist + "px");

      var _this = this;
      _this.getCmsArticleContentList();
      $("#menu1 div").click(function () {
        $("#menu1 div").each(function () {
          if ($(this).hasClass("hjnoselect")) {
            $(this).removeClass("hjnoselect");
            $(this).addClass("hjselect");
            if ($(this).attr('id') == 'menuid1') {
              _this.img1 = require("../../assets/img/head_icon3_selected.png");
              _this.img2 = require("../../assets/img/head_icon4.png");
              $('#zxdtlist').css('display','');
              $('#gsgglist').css('display','none');
            } else {
              _this.img1 = require("../../assets/img/head_icon3.png");
              _this.img2 = require("../../assets/img/head_icon4_selected.png");
              $('#zxdtlist').css('display','none');
              $('#gsgglist').css('display','');
              if(_this.list1.length==0){
                _this.getCmsArticleContentList1();
              }
            }
          } else {
            $(this).removeClass("hjselect");
            $(this).addClass("hjnoselect");
            if ($(this).attr('id') == 'menuid1') {
              _this.img1 = require("../../assets/img/head_icon3.png");
              _this.img2 = require("../../assets/img/head_icon4_selected.png");
              $('#zxdtlist').css('display','none');
              $('#gsgglist').css('display','');
              if(_this.list1.length==0){
                _this.getCmsArticleContentList1();
              }
            } else {
              _this.img1 = require("../../assets/img/head_icon3_selected.png");
              _this.img2 = require("../../assets/img/head_icon4.png");
              $('#zxdtlist').css('display','');
              $('#gsgglist').css('display','none');
            }
          }
        });

      });

    },
    data() {
      return {
        img1: require("../../assets/img/head_icon3_selected.png"),
        img2: require("../../assets/img/head_icon4.png"),
        error: false,
        list: [],
        loading: false, //是否处于加载状态
        finished: false, //是否已加载完所有数据
        isLoading: false, //是否处于下拉刷新状态
        page: 1,
        pageSize: 5,
        error1: false,
        list1: [],
        loading1: false, //是否处于加载状态
        finished1: false, //是否已加载完所有数据
        isLoading1: false, //是否处于下拉刷新状态
        page1: 1,
        pageSize1: 5
      };
    },
    methods: {
      onClick:function(){
        $("#ldzc_ldcx_content_Id").show();
      },
      hidepopu:function(){
        $("#ldzc_ldcx_content_Id").hide();
      },
      getCmsArticleContentList:function(){
        var params = {
          classId: "2c9bfc706b0792a8016b0808a5940053",
          page: this.page,
          pageSize:this.pageSize

        };
        httpMethod
          .getCmsArticleContentList(params)
          .then(res => {
            if (res.success == "1") {
              this.list = this.list.concat(res.dataList);
              if (res.dataList < 4) {
                this.finished = true;
              }
            } else if (res.success == "0") {
              this.error = true;
            }
            this.loading = false;
            this.isLoading = false;
          })
          .catch(err => {
            this.$toast(err);
          });
      },
      getCmsArticleContentList1:function(){
        var params = {
          classId: "2c9bfc706b0792a8016b0811d53b005b",
          page: this.page1,
          pageSize:this.pageSize1

        };
        httpMethod
          .getCmsArticleContentList(params)
          .then(res => {
            if (res.success == "1") {
              this.list1 = this.list1.concat(res.dataList);
              if (res.dataList < 4) {
                this.finished1 = true;
              }
            } else if (res.success == "0") {
              this.error1 = true;
            }
            this.loading1 = false;
            this.isLoading1 = false;
          })
          .catch(err => {
            this.$toast(err);
          });
      },
      getUserDatas(){},
      onRefresh() {
        this.page = 1;
        this.finished = false;
        this.list = [];
        console.log("onrefresh");
        this.getCmsArticleContentList();
      },
      onLoad() {
        //上拉加载
        this.error = false;
        console.log("onLoad");
        this.getCmsArticleContentList();
      },
      onRefresh1() {
        this.page1 = 1;
        this.finished1 = false;
        this.list1 = [];
        console.log("onrefresh");
        this.getCmsArticleContentList1();
      },
      onLoad1() {
        //上拉加载
        this.error1 = false;
        console.log("onLoad");
        this.getCmsArticleContentList1();
      },
      goDetile(item) {
        item.ifRead = "1"
        var id = item.id
        this.$router.push({
          path: "/toutiao/newsdetile",
          name: "newsdetile",
          params: {
            articleId: id
          }
        });
      }
    },

  };
</script>

<style socped>
  .hjselect {
    display: flex;
    border-radius: 16px;
    width: 35%;
    height: 32px;
    background: #3ea2ed;
    color: #ffffff;
    font-size: 13px;
    text-align: center;
    line-height: 32px;
    vertical-align: middle;
  }

  .hjnoselect {
    display: flex;
    border-radius: 16px;
    width: 35%;
    height: 32px;
    color: #3ca1ec;
    background: #ffffff;
    font-size: 13px;
    text-align: center;
    line-height: 32px;
    vertical-align: middle;
  }

  .dialogNoSelect1 {
	border: 1px solid #cccccc;
	padding: 2px;
	border-radius: 33px;
	font-size: 12px;
	margin-left: 10px;
	text-align: center;
	margin-top: 6px;
	background: #cccccc;
}

.dialogSelect1 {
	border: 1px solid #1976D2;
	padding: 2px;
	border-radius: 33px;
	font-size: 12px;
	margin-left: 10px;
	text-align: center;
	margin-top: 6px;
	background: #1976D3;
	color: #ffffff;
}
</style>