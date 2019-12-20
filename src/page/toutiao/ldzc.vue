<template>
  <div>
    <div style="display: flex;margin: 15px;height:120px;padding: 10px;border: 1px solid #EAEAEA;background: #ffffff;">
      <img id="ldzc_head_img_id" src="../../assets/img/zzc.jpg" style="width: 69px;height:95px;margin-top: 10px;">
      <div style="margin-left: 4px;height: 100px;">
        <div style="display: flex;margin-top: 13px;">
          <div id="news1positionId" style="font-size: 13px;">书记:</div>
          <div id="news1nameId" style="font-size: 13px;margin-left: 3px;">张志川</div>
          <img id="showLdsxId" style="height:15px;margin-left: 5px;" src="../../assets/img/icon_filtrate.png" @click="onClick()">
        </div>
        <div style="font-size: 11px;color: #666666;margin-top: 3px;line-height: 15px;">
          <span class="mui-ellipsis-2 " style="-webkit-line-clamp:3;" id="ldjj_summary_id">
            　　张志川，男，汉族，一九六四年九月出生，河南荥阳人，博士研究生学历，一九九七年六月加入中国共产党，一九八二年七月参加工作，
            现任晋城市委书记。
          </span>
          <span id="ldjj_summary_xx_id" style="display: none; color: #1976D3;font-size: 13px;">
            【详细】
          </span>
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
        <ul class="ui-row" style="width: 100%;margin-right: 15px;display: block;overflow: hidden;" @click="hidepopu()">
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
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="margin-top: 10px;">
        <van-list id="newslist1" v-model="loading" :finished="finished" @load="onLoad" :offset="60" :error.sync="error"
          error-text="查询失败" style="background: #ffffff;padding: 0 13px 13px 13px;overflow-y: auto;">
          <div
            style="position: relative;padding: 10px;border-bottom: 1px solid #EFEFEF; background: #ffffff;height: 87px;"
            v-for="item of list" :key="item.id" @click="goDetile(item)">
            <div style="color: #333333;font-size: 14px;">
              title
            </div>
            <div style="color: #999999;font-size: 12px;">
              content
            </div>
            <div style="color: #cccccc;font-size: 1px;display: flex;">
              <img src="../../assets/img/icon_time.png" style="height: 13px;"/>time
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
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
      var heightlist = orderHight1 -530;
      $("#newslist1").css('height',heightlist + "px");

      var _this = this;
      $("#menu div").click(function () {
        $("#menu div").each(function () {
          if ($(this).hasClass("hjnoselect")) {
            $(this).removeClass("hjnoselect");
            $(this).addClass("hjselect");
            if ($(this).attr('id') == 'menuid1') {
              _this.img1 = require("../../assets/img/head_icon1_selected.png");
              _this.img2 = require("../../assets/img/head_icon2.png");

            } else {
              _this.img1 = require("../../assets/img/head_icon1.png");
              _this.img2 = require("../../assets/img/head_icon2_selected.png");

            }
          } else {
            $(this).removeClass("hjselect");
            $(this).addClass("hjnoselect");
            if ($(this).attr('id') == 'menuid1') {
              _this.img1 = require("../../assets/img/head_icon1.png");
              _this.img2 = require("../../assets/img/head_icon2_selected.png");

            } else {
              _this.img1 = require("../../assets/img/head_icon1_selected.png");
              _this.img2 = require("../../assets/img/head_icon2.png");
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
        list: [],
        loading: false, //是否处于加载状态
        finished: false, //是否已加载完所有数据
        isLoading: false, //是否处于下拉刷新状态
        page: 1,
        pageSize: 4
      };
    },
    methods: {
      onClick:function(){
        $("#ldzc_ldcx_content_Id").show();
      },
      hidepopu:function(){
        $("#ldzc_ldcx_content_Id").hide();
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
        this.getPictureclass();
      },
      onLoad() {
        //上拉加载
        this.error = false;
        console.log("onLoad");
        this.getPictureclass();
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
    z-index: 2;
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
    z-index: 1;
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