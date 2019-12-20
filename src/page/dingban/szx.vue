<template>

  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <van-list id="newslist" v-model="loading" :finished="finished" @load="onLoad" :offset="60" :error.sync="error" error-text="查询失败"
      style="background: #F7F7F7;padding: 0 13px 13px 13px;overflow-y: auto;">
      <div style="display: flex; position: relative; margin-top: 15px; border-radius:12px;border: 1px solid #EFEFEF; background: #ffffff;height: 87px;" v-for="item of list" :key="item.id">
     <img :src=item.img style="margin: 15px 10px 15px 10px; width: 60px;height:60px;"/>
     <div style="color: #333333;font-size: 15px;margin-top: 20px;">
      <div>
       {{item.realname}}
      </div>
      <div style="margin-top: 13px;">
        {{item.dutyName}}
      </div>
     </div>
     <div style="display: flex; position: absolute; right: 10px;top: 18px;">
      <img src="../../assets/img/phonecall.png" style="width: 50px;height:50px;"  @click="goDetile(item)"/>
      <img src="../../assets/img/sms.png" style="width: 50px;height:50px;margin-left: 5px;"/>
      <img src="../../assets/img/ding.png" style="width: 50px;height:50px;margin-left: 5px;"/>
    </div>
      </div>
    </van-list>
  </van-pull-refresh>

</template>
<script>
  import Vue from "vue";
  import { PullRefresh } from "vant";
  import { httpMethod } from "../../api/getData.js";
  import dd from 'dingtalk-jsapi';
  Vue.use(PullRefresh);
  export default {
    name: "picsnews",
    data() {
      return {
        userId:"8ae4804f6d39da6a016d4c928ede0119",//暂时默认
        error: false,
        list: [],
        loading: false, //是否处于加载状态
        finished: false, //是否已加载完所有数据
        isLoading: false, //是否处于下拉刷新状态
        page: 1,
        pageSize: 4
      };
    },
    mounted() {
      var orderHight1 =document.documentElement.clientHeight;
        var heightlist=orderHight1-175;
        document.getElementById("newslist").style.height=heightlist+"px"
    },
    methods: {
      getUserOrDepart: function () {
        var params = {
          departId:"8ae4804f6d39da6a016d4c928ede0119"
        };
        httpMethod
          .getUserOrDepart(params)
          .then(res => {
            if (res.success == "1") {
              this.list = this.list.concat(res.userList);
              for(var i=0;i<this.list.length;i++){
                this.list[i].img= httpMethod. returnBaseUrlFun()+this.list[i].img
              }
              this.finished = true;
            } else if (res.success == "0") {
              this.error = true;
            }
            this.loading=false;
            this.isLoading=false;
          })
          .catch(err => {
            this.$toast(err);
            this.finished = true;
          });
      },
      onRefresh() {
        this.isLoading=false;
        this.finished = true;
      },
      onLoad() {
        //上拉加载
        this.error = false;
        console.log("onLoad");
        this.getUserOrDepart();
      },
      goDetile(item) {
        var currentUrl = window.location.href;//当前页面地址 
        if (window.location.hash == "#/") {
          currentUrl = currentUrl.substring(0, currentUrl.indexOf(window.location.hash));
        }
        var params = {
          currentUrl: currentUrl
        };

        httpMethod
          .getConfig(params)
          .then(res => {
            if (res.success == "1") {
              var data = JSON.parse(res.config);
              dd.ready(function () {
                dd.config({
                  agentId: data.agentId,
                  corpId: data.corpId,
                  timeStamp: data.timeStamp,
                  nonceStr: data.nonceStr,
                  signature: data.signature,
                  jsApiList: ['runtime.info', 'biz.contact.choose',
                    'device.notification.confirm', 'device.notification.alert',
                    'device.notification.prompt', 'biz.ding.post',
                    'biz.util.openLink', 'device.audio', 'device.audio.startRecord',
                    'device.audio.stopRecord', 'device.audio.translateVoice', 'biz.ding.create', 'biz.telephone.call', "biz.contact.complexPicker"
                  ]
                });
                dd.error(function (error) {
                  alert('dd error: ' + JSON.stringify(error));
                });
              });

              dd.ready(function () {
                dd.biz.telephone.call({
                  users: [item.dingid], //用户列表，工号
                  corpId: data.corpId, //企业id
                  onSuccess: function () {
                  },
                  onFail: function (e) {
                    alert("打电话错误" + JSON.stringify(e));
                  }
                });
              });



            } else if (res.success == "0") {
              this.error = true;
            }

          })
          .catch(err => {
            this.$toast(err);

          });
      }
    },

  };
</script>

<style socped>

</style>