<template>
  <div style="margin-top:55px">
    <div
      style="
    color: #3ca1ec;font-size: 16px;margin-left: 17px;padding-top: 9px;font-weight:600;"
    >{{entity.projectName}}</div>

    <div style="margin: 20px;text-align: left;font-size:16px;">
      <div style="display:flex;">
        <div style="width: 48%;">
          <div style=" display:flex;">
            <img src="../../../../../assets/img/1icon-jhkgnx.png" style="height: 22px;" />
            <div style="color: #999999;">计划开工年限</div>
          </div>
          <div style="color: #333333;margin-top: 8px;">{{entity.planWorkDate}}</div>
        </div>
        <div style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"></div>
        <div style="width: 48%;">
          <div style="display:flex;">
            <img src="../../../../../assets/img/1icon-jhwgnx.png" style="height: 22px;" />
            <div style="color: #999999;">计划完工年限</div>
          </div>
          <div style="color: #333333;margin-top: 8px;">{{entity.planEndDate}}</div>
        </div>
      </div>
      <div style="display:flex;margin-top:10px;">
        <div style="width: 48%;">
          <div style=" display:flex;">
            <img src="../../../../../assets/img/1icon-xmgsztz.png" style="height: 20px;" />
            <div style="color: #999999;">项目估算总投资</div>
          </div>
          <div style="color: #333333;margin-top: 8px;">{{entity.projectEstimatedTotal}}亿元</div>
        </div>
        <div style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"></div>
        <div style="width: 48%;">
          <div style="display:flex;">
            <img src="../../../../../assets/img/1icon-tzwce.png" style="height: 20px;" />
            <div style="color: #999999;">投资完成额</div>
          </div>
          <div style="color: #333333;margin-top: 8px;">{{entity.completionRate}}亿元</div>
        </div>
      </div>
    </div>

    <van-tabs
      @touchmove.prevent
      v-model="active"
      title-active-color="#2599e6"
      :offset-top="54"
      title-inactive-color="#333333"
      :sticky="true"
      line-width="75px"
      @click="onClick"
    >
      <van-tab>
        <div slot="title">
          <img id="img1" class="vantabicon" :src="img1" />存在问题
        </div>
        <div v-for="(item,index) in dataList" :key="index">
          <div style="display:flex;margin-top:14px;">
            <div class="vantlist_block">
              <div style="margin-top:9px;font-size:17px;">{{index+1}}</div>
            </div>

            <div>
              <div style="margin-left:11px;color:#b6b6b6;font-size: 14px;">存在问题</div>
              <div
                class="van-multi-ellipsis--l2"
                style="font-size: 12px;margin-left: 11px;width: 243px;"
              >{{item.existingProblem}}</div>
            </div>
          </div>
          <div style="display:flex;margin-top:10px;">
            <img
              style="height: 14px;margin-left: 21px;margin-top:3px;"
              src="../../../../../assets/img/zdgc-responsible.png"
            />
            <div style="color:#999999;font-size:14px;margin-left: 6px;">问题解决责任单位</div>
          </div>
          <div
            style="margin-left: 21px;color:#333333;font-size:12px;margin-top:5px;"
          >{{item.solutionsAndDept}}</div>
          <!-- <div class="van-hairline--bottom"></div> -->
          <div
            style="margin-top: 4px;color: rgb(229, 229, 229);height: 1px;background: rgb(229, 229, 229);width: 94%;margin-left: 10px;margin-right: 10px;"
          ></div>
        </div>
      </van-tab>
      <van-tab>
        <div slot="title">
          <img id="img2" class="vantabicon" :src="img2" />历史问题
        </div>
        <div v-for="(item,index) in newList" :key="index">
          <div style="display: flex;padding-left: 10px;margin-top:4px;">
            <img
              style="height: 14px; margin-top: 3px;margin-right: 10px;"
              src="../../../../../assets/img/problem_icontime.png"
            />
            <div style="font-size:13px;color:#3ca1ec;">时间：{{item.time}}</div>
          </div>
          <van-steps direction="vertical" :active="-1">
            <van-step v-for="(itemchild,index1) in item.data" :key="index1">
              <div style="color:#333333;" class>{{itemchild.value}}</div>
              <!-- <h3>{{itemchild.value}}</h3> -->
              <!-- <p>2016-07-11 10:00</p> -->
            </van-step>
          </van-steps>
          <div style="background:#cccccc;height:1px;width:90%;margin-left:10px;margin-right:10px;"></div>
          <!-- <timeline>
            <timeline-item
              v-for="(itemchild,index1) in item.data"
              :key="index1"
              icon-size="small"
              line-color="#3ca1ec"
              bg-color="#3ca1ec"
              style
            >{{itemchild.value}}</timeline-item>
          </timeline>-->
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import $ from "jquery";
import { Timeline, TimelineItem, TimelineTitle } from "vue-cute-timeline";
import LightTimeline from "vue-light-timeline";
Vue.use(LightTimeline);
import { httpMethod } from "../../../../../api/getData.js";
import Vue from "vue";
import { Tab, Tabs, Step, Steps } from "vant";
Vue.use(Step).use(Steps);
export default {
  name: "zdgc_czwt_deali",
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#FFFFFF");
  },
  mounted() {
    this.entity = this.$route.params.entity;
    //console.log(JSON.stringify(this.$route.params.entity));
    this.getVoExistiongPro(this.entity.proId);
  },
  data() {
    return {
      active: 0,
      entity: [{ projectName: "" }],
      loading: false, //是否处于加载状态
      finished: false, //是否已加载完所有数据
      isLoading: false, //是否处于下拉刷新状态
      currentDate: new Date(),
      show: false,
      isProblemType: 0, //0=存在问题1=历史问题
      img1: require("../../../../../assets/img/problem_tabicon1_selected.png"),
      img2: require("../../../../../assets/img/problem_tabicon1.png"),
      imageBaseUrl: httpMethod.returnBaseUrlFun(),
      dataList: [],
      HistorydataList: [],
      newList: []
    };
  },
  updated() {},
  methods: {
    onClick(name, title) {
      console.log(name);
      if (name == "0") {
        this.img1 = require("../../../../../assets/img/problem_tabicon1_selected.png");
        this.img2 = require("../../../../../assets/img/problem_tabicon1.png");
      } else {
        this.img2 = require("../../../../../assets/img/problem_tabicon1_selected.png");
        this.img1 = require("../../../../../assets/img/problem_tabicon1.png");
      }
    },
    getVoExistiongPro: function(id) {
      var params = {
        proId: id
      };

      httpMethod
        .getVoExistiongPro(params)
        .then(res => {
          if (res.success == "1") {
            var HistorydataListAll = res.HistorydataList;
            var dateList = [];
            var dateListNew = [];
            this.newList = [];
            for (var i = 0; i < HistorydataListAll.length; i++) {
              var reportDate = HistorydataListAll[i].reportDate; //发布时间
              dateList.push(reportDate);
            }
            dateList.forEach(item => {
              if (dateListNew.indexOf(item) == "-1") {
                dateListNew.push(item);
              }
            });
            //dateListNew = distinct(dateList);
            console.log(dateListNew);
            for (var j = 0; j < dateListNew.length; j++) {
              var list = [];
              for (var i = 0; i < HistorydataListAll.length; i++) {
                var reportDate = HistorydataListAll[i].reportDate; //发布时间
                var existingProblem = HistorydataListAll[i].existingProblem; //存在问题
                if (reportDate == dateListNew[j]) {
                  var map = {
                    value: existingProblem
                  };
                  list.push(map);
                }
              }
              var map1 = {
                time: dateListNew[j],
                data: list
              };
              this.newList.push(map1);
            }
            console.log(this.newList);
            this.dataList = res.dataList;
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    },
    distinct: function(arr) {
      let obj = {};
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
          obj[arr[i]] = 1;
          newArr.push(arr[i]);
        }
      }
      return newArr;
    }
  }
};
</script>

<style>
@import "../../../../../page/zdgz/zdgc/zdgc_czwt/zdgc_czwt_deali/zdgc_czwt_deali.css";

.b2 {
  margin: 1in 1.25in 1in 1.25in;
}

.s1 {
  font-weight: bold;
}

.p1 {
  text-align: center;
  font-family: 宋体;
  font-size: 22pt;
}

.p2 {
  text-indent: 0.44652778in;
  text-align: justify;
  font-family: 仿宋;
  font-size: 16pt;
}

.p3 {
  text-indent: 0.44444445in;
  text-align: justify;
  font-family: 仿宋;
  font-size: 16pt;
}

.p4 {
  text-align: justify;
  font-family: Calibri;
  font-size: 10pt;
}
</style>