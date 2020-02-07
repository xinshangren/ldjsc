<template>
  <div @click="closeState">
    <div id="qcbutton" style="display: flex;margin-top: 60px;width: 90%;margin-left: 5%;">
      <img :src="img1" style="width:150px;height:56px;margin:auto auto;" @click="changeState(1)" />
      <img :src="img2" style="width: 150px;height:56px;margin:auto auto;" @click="changeState(2)" />
    </div>
    <van-sticky :offset-top="111">
      <div v-if="state==1" style="position: relative;">
        <van-tabs
          v-model="active"
          :ellipsis="false"
          line-width="25%"
          @click="jqTab_select"
          style="font-size: 14px;"
          color="#2796e7"
          title-inactive-color="#999999"
          title-active-color="#2796e7"
        >
          <van-tab title="站位标识"></van-tab>

          <van-tab title="站位标识"></van-tab>
          <van-tab title="景区概况"></van-tab>
          <van-tab title="景区列表"></van-tab>
          <van-tab title="景区介绍"></van-tab>
        </van-tabs>
        <div id="topselect"
          @click="showState()"
          style="position:absolute; top: 0;left: 0; width: 38%;display: flex;height: 44px;background: #ffffff;border-right: 1px solid #f3f3f3;margin-top: 1px;"
        >
          <img
            style="height: 25px; margin-top: 6px;margin-left: 15px;"
            src="../../assets/img/icon-jq2.png"
          />
          <div style="font-size: 14px;line-height: 40px;">景 区</div>
          <img
            style="height: 14px;margin-top: 14px;margin-left: 20px"
            src="../../assets/img/air_home_tab_arrow.png"
          />
        </div>
      </div>
    </van-sticky>
    <van-sticky :offset-top="111">
      <div v-if="state==2" style="position: relative;">
        <van-tabs
          v-model="active"
          :ellipsis="false"
          line-width="25%"
          style="font-size: 14px;"
          color="#2796e7"
          @click="jqTab_select"
          title-inactive-color="#999999"
          title-active-color="#2796e7"
        >
          <van-tab title="站位标识"></van-tab>

          <van-tab title="示范村概况"></van-tab>

          <van-tab title="示范村列表"></van-tab>
        </van-tabs>

        <div id="topselect"
          @click="showState()"
          style="position: absolute;top:0;left: 0; width: 33%;display: flex;height: 44px;background: #ffffff;border-right: 1px solid #f3f3f3;margin-top: 1px;"
        >
          <img
            style="height: 25px; margin-top: 6px;margin-left: 15px;"
            src="../../assets/img/icon-sfc2.png"
          />
          <div style="font-size: 14px;line-height: 40px;">示范村</div>
          <img
            style="height: 14px;margin-top: 14px;margin-left: 20px"
            src="../../assets/img/air_home_tab_arrow.png"
          />
        </div>
      </div>
    </van-sticky>

    <div :is="currentView"></div>
    <div 
      v-show="show"
      style=" position: absolute;top:155px;left:10px;width: 30%;box-shadow: 2px 2px #f3f3f3;border: 1px #f3f3f3 solid;"
    >
      <div
        @click="changeState(1)"
        style="display: flex;height: 44px;background: #ffffff;border-bottom: 1px #f3f3f3 solid;"
      >
        <img
          style="height: 25px; margin-top: 6px;margin-left: 15px;"
          src="../../assets/img/icon-jq2.png"
        />
        <div style="font-size: 14px;line-height: 40px;margin-left: 5px;">景 区</div>
      </div>
      <div @click="changeState(2)" style="display: flex;height: 44px;background: #ffffff;">
        <img
          style="height: 25px; margin-top: 6px;margin-left: 15px;"
          src="../../assets/img/icon-sfc2.png"
        />
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
import child5 from "@/page/qyly/sfc/sfclist.vue";
import { httpMethod } from "../../api/getData.js";
import global_variable from "../../api/global_variable.js";
export default {
  name: "zdgz",
  components: {
    child1,
    child2,
    child3,
    child4,
    child5
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F7F7F7");
//     document.addEventListener('click',function(e){
//               if(e.target.className != 'topselect'){
//                     document.getElementById("topselectlist").style.display="none"
//               }else{
//                     document.getElementById("topselectlist").style.display="block"
//               }
//             })
  },
  activated() {
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#F7F7F7");
  },
  beforeRouteEnter(to, from, next) {
    console.log(from);
    if (from.path != "/") {
      if (to.path == "/qyly/qyly") {
        to.meta.keepAlive = true;
      } else {
        to.meta.keepAlive = false;
      }
    } else {
      to.meta.keepAlive = false;
    }
    next();
  },
  data() {
    return {
      currentView: "child1",
      img1: require("../../assets/img/teb-jq2.png"),
      img2: require("../../assets/img/teb-sfc1.png"),
      show: false,
      state: 1,
      active: 2,
      dataArrList: ["0", "0", "0", "0", "0", "0"],
      dataTime: []
    };
  },
  mounted() {
    this.doAddAppLogList(
      global_variable.logId,
      global_variable.ddPhone,
      "23",
      "景区"
    );
  },
  methods: {
    //获取记录日志的logid
    doAddAppLogList: function(logId, ddPhone, grouping_id, grouping_name) {
      var params = {
        logId: logId,
        ddPhone: ddPhone,
        grouping_id: grouping_id,
        grouping_name: grouping_name
      };
      httpMethod
        .doAddAppLogList(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
          }
        })
        .catch(err => {
          // this.$toast(err);
        });
    },
    jqTab_select: function(name, title) {
      if (title == "景区概况") {
        this.doAddAppLogList(
          global_variable.logId,
          global_variable.ddPhone,
          "25",
          "景区概况"
        );
        this.currentView = "child1";
      } else if (title == "景区列表") {
        this.doAddAppLogList(
          global_variable.logId,
          global_variable.ddPhone,
          "26",
          "景区列表"
        );
        this.currentView = "child2";
      } else if (title == "景区介绍") {
        this.doAddAppLogList(
          global_variable.logId,
          global_variable.ddPhone,
          "27",
          "景区介绍"
        );
        this.currentView = "child3";
      } else if (title == "示范村概况") {
        this.doAddAppLogList(
          global_variable.logId,
          global_variable.ddPhone,
          "28",
          "示范村概况"
        );
        this.currentView = "child4";
      } else if (title == "示范村列表") {
        this.doAddAppLogList(
          global_variable.logId,
          global_variable.ddPhone,
          "29",
          "示范村列表"
        );
        this.currentView = "child5";
      }
    },
    toast: function() {
      this.$toast("功能开发中");
    },
    showState: function() {
      this.show = true;
    },
    // closeState:function(){
    //   this.show = false;
    // },
    closeState(event) {
      var myPanel = document.getElementById('topselect')// 得到点击出现的节点
      console.log(myPanel);
      if (myPanel) {
        if (!(myPanel.contains(event.target))) { // 这句是说如果我们点击到了id为myPanel以外的区域，为false
          this.show = false// 消失
        }
      }
    },
    changeState: function(state) {
      this.state = state;
      this.show = false;
      if (state == 2) {
        this.doAddAppLogList(
          global_variable.logId,
          global_variable.ddPhone,
          "24",
          "示范村"
        );
        this.active = 1;
        this.currentView = "child4";
        this.img1 = require("../../assets/img/teb-jq1.png");
        this.img2 = require("../../assets/img/teb-sfc2.png");
      } else {
        this.doAddAppLogList(
          global_variable.logId,
          global_variable.ddPhone,
          "23",
          "景区"
        );
        this.active = 2;
        this.currentView = "child1";
        this.img1 = require("../../assets/img/teb-jq2.png");
        this.img2 = require("../../assets/img/teb-sfc1.png");
      }
    },
    getListData: function() {
      var params = {
        targetIds: "86，87，88，89，90，92"
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
    intentTwoLevel: function(flag) {
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
  }
};
</script>

<style>
</style>