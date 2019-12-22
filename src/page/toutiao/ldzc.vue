<template>
  <div>
    <div style="display: flex;margin: 15px;height:120px;padding: 10px;border: 1px solid #EAEAEA;background: #ffffff;">
      <img id="ldzc_head_img_id" :src="data.imgUrl" style="width: 69px;height:95px;margin-top: 10px;">
      <div style="margin-left: 4px;height: 100px;width: 80%;">
        <div style="display: flex;margin-top: 13px;">
          <div id="news1positionId" style="font-size: 13px;">{{data.dutyName}}:</div>
          <div id="news1nameId" style="font-size: 13px;margin-left: 3px;">{{data.userName}}</div>
          <img id="showLdsxId" style="height:15px;margin-left: 5px;" src="../../assets/img/icon_filtrate.png" @click="onClick()">
        </div>
        <div style="font-size: 11px;color: #666666;font-size: 13px;margin-top: 3px;line-height: 15px;overflow:hidden;height: 72px;"  v-html="data.summary">
        </div>
        <div id="ldjj_summary_xx_id" style="text-align: right; color: #1976D3;font-size: 13px;" @click="goxiangxi()">
          【详细】
        </div>
      </div>
    </div>
    <div id="ldzc_ldcx_content_Id" style="display: none; position: absolute; top:45px;z-index: 3;background: #ffffff;margin: 15px;">
      <div style="background: #ffffff;padding: 4px;display: flex;">
        <div style="font-size: 12px;line-height:29px;width: 56px;margin-left:6px;">书记</div>
        <ul class="ui-row" style="width: 100%;margin-right: 15px;">
          <li id="8a87821a6b1c0bb4016b1c113e2f0001" class="ui-col ui-col-30 dialogSelect1" style="width:27%;">张志川</li>
        </ul>
      </div>
      <div style="background: #ffffff;padding: 4px;display: flex;">
        <div style="font-size: 12px;line-height:29px;width: 56px;margin-left:6px;">副书记</div>
        <ul class="ui-row" style="width: 100%;margin-right: 15px;">
          <li id="8a87821a6b1c6361016b1c8128070001" class="ui-col ui-col-30 dialogNoSelect1" style="width:27%;">李根田</li>
        </ul>
      </div>
      <div style="background: #ffffff;padding: 4px;display: flex;">
        <div style="font-size: 12px;line-height:29px;width: 56px;margin-left:6px;">常委</div>
        <ul class="ui-row" style="width: 100%;margin-right: 15px;display: block;overflow: hidden;">
          <li id="8a87821a6b1c6361016b1c837d220004" class="dialogNoSelect1" style="width:27%;float: left;">赵沂旸</li>
          <li id="8a87821a6b1c6361016b1c84ed36000a" class="dialogNoSelect1" style="width:27%;float: left;">那志茂</li>
          <li id="8a87821a6b1c6361016b1c85c04b000d" class="dialogNoSelect1" style="width:27%;float: left;">卫明喜</li>
          <li id="8a87821a6b1c6361016b1c88da620010" class="dialogNoSelect1" style="width:27%;float: left;">石云峰</li>
          <li id="8a87821a6b1c6361016b1c8c5c180015" class="dialogNoSelect1" style="width:27%;float: left;">荆俊明</li>
          <li id="8a87821a6b1c6361016b1c8d38840018" class="dialogNoSelect1" style="width:27%;float: left;">范兆森</li>
        </ul>
      </div>
      <div style="background: #ffffff;padding: 4px;display: flex;">
        <div style="font-size: 12px;line-height:29px;width: 56px;margin-left:6px;">秘书长</div>
        <ul class="ui-row" style="width: 100%;margin-right: 15px;">
          <li id="8a87821a6b1c6361016b1c842d070007" class="ui-col ui-col-30 dialogNoSelect1" style="width:27%;">孙世新</li>
        </ul>
      </div>
      <div style="background: #ffffff;padding: 4px;display: flex;height: 8px;">
        
      </div>
    </div>


    <div id="menu" style="display: flex;">
      <div id="menuid1" class="hjselect" style="margin-left: 17%;">
        <img id="imgid1" :src="img1" style="height:14px;margin-top: 9px;margin-left: 30%;" />
        最新活动
      </div>
      <div id="menuid2" class="hjnoselect" style=" margin-left: -6%;">
        <img id="imgid2" :src="img2" style="height:14px;margin-top: 9px;margin-left: 30%;" />
        领导讲话
      </div>
    </div>
      <div id="zxhdlistid" style="margin-top: 10px;">
        <van-list id="newslist1" v-model="loading" :finished="finished" @load="onLoad" :offset="60" :error.sync="error" :immediate-check="false"
        finished-text="暂无更多数据" error-text="查询失败" style="background: #ffffff;padding: 0 13px 13px 13px;overflow-y: auto;">
          <div
            style="position: relative;padding: 10px;border-bottom: 1px solid #EFEFEF; background: #ffffff;height: 87px;"
            v-for="(item,index) of list" :key="index" @click="goDetile(item)">
            <div style="color: #333333;font-size: 14px;width: 100%; overflow: hidden; text-overflow:ellipsis;white-space: nowrap;">
              {{item.title}}
            </div>
            <div style="color: #999999;font-size: 12px;overflow: hidden;height: 60px;line-height: 15px;">
              {{item.summary}}
            </div>
            <div style="color: #cccccc;font-size: 13px;display: flex;position: absolute;right: 0;line-height: 13px;vertical-align: middle;">
              <img src="../../assets/img/icon_time.png" style="height: 13px;"/>
              {{item.showTime}}
            </div>
          </div>
        </van-list>
      </div>

      <div id="ldjhlistid" style="margin-top: 10px;display: none;">
        <van-list id="newslist11" v-model="loading" :finished="finished" @load="onLoad1" :offset="60" :error.sync="error" :immediate-check="false"
        finished-text="暂无更多数据" error-text="查询失败" style="background: #ffffff;padding: 0 13px 13px 13px;overflow-y: auto;">
          <div
            style="position: relative;padding: 10px;border-bottom: 1px solid #EFEFEF; background: #ffffff;height: 87px;"
            v-for="(item1,index1) of list1" :key="index1" @click="goDetile(item1)">
            <div style="color: #333333;font-size: 14px;width: 100%; overflow: hidden; text-overflow:ellipsis;white-space: nowrap;">
              {{item1.title}}
            </div>
            <div style="color: #999999;font-size: 12px;overflow: hidden;height: 60px;line-height: 15px;">
              {{item1.summary}}
            </div>
            <div style="color: #cccccc;font-size: 13px;display: flex;position: absolute;right: 0;line-height: 13px;vertical-align: middle;">
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
      var _this = this;

      var orderHight1 = document.documentElement.clientHeight;
      var heightlist = orderHight1 -400;
      $("#newslist1").css('height',heightlist + "px");
      $("#newslist11").css('height',heightlist + "px");

      _this.getUserCms("8a87821a6b1c0bb4016b1c113e2f0001");
      $(".ui-row li").click(function(){
        var userid=$(this).attr('id');
        _this.getUserCms(userid);
        _this.hidepopu();
      });

      
      $("#menu div").click(function () {
        $("#menu div").each(function () {
          if ($(this).hasClass("hjnoselect")) {
            $(this).removeClass("hjnoselect");
            $(this).addClass("hjselect");
            if ($(this).attr('id') == 'menuid1') {
              _this.img1 = require("../../assets/img/head_icon1_selected.png");
              _this.img2 = require("../../assets/img/head_icon2.png");
              $('#zxhdlistid').css('display','');
              $('#ldjhlistid').css('display','none');
            } else {
              _this.img1 = require("../../assets/img/head_icon1.png");
              _this.img2 = require("../../assets/img/head_icon2_selected.png");
              $('#zxhdlistid').css('display','none');
              $('#ldjhlistid').css('display','');
              if(_this.list1.length==0){
                _this.getCmsArticleContentList1();
              }
            }
          } else {
            $(this).removeClass("hjselect");
            $(this).addClass("hjnoselect");
            if ($(this).attr('id') == 'menuid1') {
              _this.img1 = require("../../assets/img/head_icon1.png");
              _this.img2 = require("../../assets/img/head_icon2_selected.png");
              $('#zxhdlistid').css('display','none');
              $('#ldjhlistid').css('display','');
              if(_this.list1.length==0){
                _this.getCmsArticleContentList1();
              }
            } else {
              _this.img1 = require("../../assets/img/head_icon1_selected.png");
              _this.img2 = require("../../assets/img/head_icon2.png");
              $('#zxhdlistid').css('display','');
              $('#ldjhlistid').css('display','none');
            }
          }
        });

      });

    },
    data() {
      return {
        img1: require("../../assets/img/head_icon1_selected.png"),
        img2: require("../../assets/img/head_icon2.png"),
        error: false,
        error1: false,
        list: [],
        loading: false, //是否处于加载状态
        finished: false, //是否已加载完所有数据
        isLoading: false, //是否处于下拉刷新状态
        page: 1,
        pageSize: 4,
        list1: [],
        loading1: false, //是否处于加载状态
        finished1: false, //是否已加载完所有数据
        isLoading1: false, //是否处于下拉刷新状态
        page1: 1,
        pageSize1: 4,
        data:{}
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
          classId: this.data.dataList[0].id,
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
          classId: this.data.dataList[1].id,
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
      getUserCms:function(userId){
        var params = {
          userId: userId,
        };
        httpMethod
          .getUserCms(params)
          .then(res => {
            if (res.success == "1") {
              this.data = res;
              this.getCmsArticleContentList();
             
            } else if (res.success == "0") {
              this.error = true;
            }
            
          })
          .catch(err => {
            this.$toast(err);
          });
      },
      getPictureclass: function () {
        var params = {
          page: this.page,
          pageSize: this.pageSize,
          userId: this.userId
        };
        this.page = this.page + 1;
        httpMethod
          .getPictureclass(params)
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
            this.finished = true;
          });
      },
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
      goxiangxi(){
        var id = this.data.articleid
        this.$router.push({
          path: "/toutiao/newsdetile",
          name: "newsdetile",
          params: {
            articleId: id
          }
        });
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
    z-index: 1;
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
    z-index: 0;
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