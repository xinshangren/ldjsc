<template>
  <div>
    <div style="display: flex;margin-top: 60px;">
      <img src="../../assets/img/teb-jq1.png" style="width:40% ;margin-left: 7%;" />
      <img src="../../assets/img/teb-sfc2.png" style="width: 40%;margin-left: 6%;" />
    </div>

    <div v-if="state==1" style="position: relative;">
      <van-tabs v-model="active" :ellipsis=false line-width="25%" style="font-size: 14px;" color="#2796e7"
        title-inactive-color="#999999" title-active-color="#2796e7">

        <van-tab title="站位标识">

        </van-tab>
        <van-tab title="站位标识">

        </van-tab>
        <van-tab title="景区概况">
          <child1 v-bind:active="active"></child1>
        </van-tab>
        <van-tab title="景区列表">
          <child2 style=""></child2>
        </van-tab>
        <van-tab title="景区介绍">
          <child3 style=""></child3>
        </van-tab>
      </van-tabs>
      
      <div @click="showState()"
        style="position: absolute;top:0;left: 0; width: 38%;display: flex;height: 44px;background: #ffffff;border-right: 1px solid #f3f3f3;margin-top: 1px;">
        <img style="height: 25px; margin-top: 6px;margin-left: 15px;" src="../../assets/img/icon-jq2.png" />
        <div style="font-size: 14px;line-height: 40px;">风景区</div>
        <img style="height: 14px;margin-top: 14px;margin-left: 20px" src="../../assets/img/air_home_tab_arrow.png" />
      </div>
    </div>

    <div v-if="state==2" style="position: relative;">
      <van-tabs v-model="active" :ellipsis=false line-width="25%" style="font-size: 14px;" color="#2796e7"
        title-inactive-color="#999999" title-active-color="#2796e7">

        <van-tab title="站位标识">
        </van-tab>
        <van-tab title="示范村概况">
          <child4 v-bind:active="active"></child4>
        </van-tab>
        <van-tab title="示范村列表">
          <child2 style=""></child2>
        </van-tab>
      </van-tabs>
      
      <div @click="showState()"
        style="position: absolute;top:0;left: 0; width: 33%;display: flex;height: 44px;background: #ffffff;border-right: 1px solid #f3f3f3;margin-top: 1px;">
        <img style="height: 25px; margin-top: 6px;margin-left: 15px;" src="../../assets/img/icon-sfc2.png" />
        <div style="font-size: 14px;line-height: 40px;">示范村</div>
        <img style="height: 14px;margin-top: 14px;margin-left: 20px" src="../../assets/img/air_home_tab_arrow.png" />
      </div>
    </div>

    <div v-show='show' style="position: absolute;top:155px;left:10px;width: 30%;box-shadow: 2px 2px #f3f3f3;border: 1px #f3f3f3 solid;">
      <div @click='changeState(1)' style="display: flex;height: 44px;background: #ffffff;border-bottom: 1px #f3f3f3 solid;">
        <img style="height: 25px; margin-top: 6px;margin-left: 15px;" src="../../assets/img/icon-jq2.png" />
        <div style="font-size: 14px;line-height: 40px;margin-left: 5px;">风景区</div>
      </div>
      <div @click='changeState(2)' style="display: flex;height: 44px;background: #ffffff;">
        <img style="height: 25px; margin-top: 6px;margin-left: 15px;" src="../../assets/img/icon-sfc2.png" />
        <div style="font-size: 14px;line-height: 40px;margin-left: 5px;">示范村</div>
      </div>
    </div>
  </div>
</template>
<script>

  import child1 from "@/page/qyly/jq/jqgk.vue";
  import child2 from "@/page/qyly/jq/jqlist.vue";
  import child3 from "@/page/qyly/jq/jqvideos.vue";
  import child4 from "@/page/qyly/sfc/sfcgk.vue";
  import { httpMethod } from "../../api/getData.js";
  export default {
    name: "zdgz",
    beforeCreate() {
      document.querySelector("body").setAttribute("style", "background:#F7F7F7");
    },
    activated() {//返回保留页面记录
      document.querySelector("body").setAttribute("style", "background:#F7F7F7");
    },
    data() {
      return {
        show:false,
        state:1,
        active: 2,
        dataArrList: ["0", "0", "0", "0", "0", "0"],
        dataTime: []
      };
    },
    mounted() {
      var cur = window.sessionStorage.getItem('jqactivated');
      if (cur != null) {
        this.active = parseInt(cur);;
      }

    },
    methods: {
      toast: function () {
        this.$toast('功能开发中');
      },
      showState:function(){
        this.show=true;
      },
      changeState:function(state){
        this.state=state;
        this.show=false;
      },
      getListData: function () {
        var params = {
          targetIds:
            "86，87，88，89，90，92"
        };

        //获取数据
        httpMethod
          .findByTargetIds(params)
          .then(res => {
            console.log(res);
            var code = res.success;
            if (code == "1") {
              var dataList = res.data;
              this.dataArrList = [];
              for (var ent in dataList) {
                var targetId = dataList[ent].targetId;
                var valuen = dataList[ent].valuen;
                this.dataArrList.push(valuen);
                var updateTime = dataList[ent].updateTime;
                updateTime = updateTime.substring(0, 11);
                this.dataTime.push(updateTime);
              }
              console.log(this.dataArrList);
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      //跳转二级页面
      intentTwoLevel: function (flag) {
        //  if (flag == 1) {
        //   this.$router.push({
        //     path: "/qyly/qylyjq/qylyjq"
        //   });
        // } else if (flag == 2) {
        //   this.$router.push({
        //     path: "/qyly/qylysfc/qylysfc"
        //   });
        // } 
      }
    },
    components: {
      child1,
      child2,
      child3,
      child4,
    }
  };
</script>

<style scoped>
  @import "../../assets/css/zhibiao.css";
</style>