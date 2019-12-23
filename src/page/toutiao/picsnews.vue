<template>

  <div>
    <van-list id="newslist" v-model="loading" :finished="finished" @load="onLoad" :offset="60" :error.sync="error"
      error-text="查询失败" :immediate-check="false"
      style="background: #F7F7F7;padding: 0 13px 13px 13px;overflow-y: auto;">
      <div
        style="position: relative; margin-top: 15px; border-radius:12px;border: 1px solid #EFEFEF; background: #ffffff;height: 220px;"
        v-for="item of list" :key="item.id" @click="goDetile(item)">
        <div v-if='item.ifRead=="1"'
          style="font-size: 12px;line-height: 25px;vertical-align: middle;text-align: center; color:#ffffff;border-radius:0 12px 0 12px;background-color: #e43b21;width: 60px;height: 25px;position: absolute;right: 0;top: 0;">
          已读
        </div>
        <div v-if='item.ifRead=="0"'
          style="font-size: 12px;line-height: 25px;vertical-align: middle; text-align: center; color:#ffffff;border-radius:0 12px 0 12px;background-color: #a7a7a7;width: 60px;height: 25px;position: absolute;right: 0;top: 0;">
          未读
        </div>
        <img :src="item.imgUrl" style="width: 100%;height:190px;border-radius:12px 12px 0 0;" />
        <div style="display: flex;">
          <div style="margin-left: 15px; width: 70%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
            {{item.title}}</div>
          <div style="position: absolute;right: 10px;margin-top:2px;">{{item.showTime}}</div>
        </div>
      </div>
    </van-list>
  </div>

</template>
<script>
  import Vue from "vue";
  import { PullRefresh } from "vant";
  import { httpMethod } from "../../api/getData.js";
  import global_variable from '../../api/global_variable.js';
  Vue.use(PullRefresh);
  export default {
    name: "picsnews",
    data() {
      return {
        userId: "",//暂时默认
        error: false,
        list: [],
        loading: false, //是否处于加载状态
        finished: false, //是否已加载完所有数据
        isLoading: false, //是否处于下拉刷新状态
        page: 1,
        pageSize: 10
      };
    },
    mounted() {
      var orderHight1 = document.documentElement.clientHeight;
      var heightlist = orderHight1 - 160;
      document.getElementById("newslist").style.height = heightlist + "px"
      this.userId=global_variable.userId;
      this.getPictureclass();
    },
    methods: {
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
              for (var i = 0; i < this.list.length; i++) {
                var url1 = httpMethod.returnBaseUrlFun();
                if (this.list[i].imgUrl == null) {
                  this.list[i].imgUrl = url1 + "upload/error/error.jpg"
                }
              }
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

</style>