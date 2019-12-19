<template>

  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="10" :error.sync="error" error-text="查询失败"
      style="background: #F1F4F6;padding: 10px 10px;">
      <div style="border-bottom: 1px solid #F1F4F6; background: #ffffff;" v-for="item of list"
        :key="item.id" @click="goDetile(item)">
        <div style="border-radius:7px;margin-left: 5%;">
          <img :src="item.imgUrl" style="width: 95%;"/>
          {{item.title}}
        </div>
      </div>
    </van-list>
  </van-pull-refresh>

</template>
<script>
  import { PullRefresh } from "vant";
  import { httpMethod } from "../../api/getData.js";
  export default {
    name: "picsnews",
    data() {
      return {
        error: false,
        list: [],
        loading: false, //是否处于加载状态
        finished: false, //是否已加载完所有数据
        isLoading: false, //是否处于下拉刷新状态
        page:1,
        pageSize:4
      };
    },
    methods: {
      getPictureclass: function () {
      var params = {
        page: this.page,
        pageSize: this.pageSize
      };
      this.pageIndex = this.pageIndex + 1;
      httpMethod
        .getPictureclass(params)
        .then(res => {
          this.isLoading = false;
          this.finished = true;
          if (res.success == "1") {
            this.list = [];
            this.list = this.list.concat(res.dataList);
            this.isLoading = false;
          } else if (res.success == "0") {
            this.list = [];
            this.error = true;
          }
        })
        .catch(err => {
          this.$toast(err);
          this.finished = true;
          this.isLoading = false;
        });


      },
      onRefresh() {
        this.pageIndex = 1;
        console.log("onrefresh");
        this.getPictureclass();
      },
      onLoad() {
        //上拉加载
        this.error = false;
        console.log("onLoad");
        this.getPictureclass();
      },
      onSearch() {
        //alert(this.searchkey);
        this.error = false;
        this.getPictureclass();
      },
      goDetile(item) {
        //console.log(item);
        this.$router.push({
          path: "/zdgz/zdgcdetile",
          name: "zdgcdetile",
          params: {
            entity: item
          }
        });
      }
    },

  };
</script>

<style socped>

</style>