<template>
  <div style="margin-top:55px">
    <van-tabs
      title-active-color="#2599e6"
      line-width="90px"
      :sticky="true"
      :ellipsis="false"
      @click="onClick"
      :offset-top="54"
      title-inactive-color="#333333"
    >
      <van-tab name="1">
        <div slot="title" style="font-size:17px;display:flex;">
          <img id="tab1" :src="img1" class="tabimg" />
          <div id="tab1_div" style="margin-left:4px;">项目详情</div>
        </div>

        <div style="height:60px;background:#F1F4F6;">
          <div
            :style="backgroundDiv"
            style="height:60px;padding-left: 18px;background: no-repeat center right; background-size: contain;"
          >
            <div style="height: 17px;"></div>
            <div
              style="border-left:2px solid #3097FB;color: #3097FB;font-size:20px;text-align: left;padding-left: 20px;height: 20px;"
            >项目基本详情</div>
          </div>
        </div>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <img src="../../../../../assets/img/1icon-xmbh.png" style="height: 22px;" />
            <div style="color: #999999;">项目编号</div>
          </div>
          <div style="color: #333333;margin-top: 10px;">{{itemEnti.projectCode}}</div>
        </div>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <img src="../../../../../assets/img/1icon-xmmc.png" style="height: 22px;" />
            <div style="color: #999999;">项目名称</div>
          </div>
          <div style="color: #333333;margin-top: 10px;">{{itemEnti.projectName}}</div>
        </div>
        <van-divider :style="{ padding: '0 20px' }"></van-divider>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <div style="width: 48%;">
              <div style=" display:flex;">
                <img src="../../../../../assets/img/1icon-ry.png" style="height: 22px;" />
                <div style="color: #999999;">包联领导</div>
              </div>
              <div style="color: #333333;margin-top: 8px;">{{itemEnti.contractPerson}}</div>
            </div>
            <div
              style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
            ></div>
            <div style="width: 48%;">
              <div style="display:flex;">
                <img src="../../../../../assets/img/1icon-xmjsxz.png" style="height: 22px;" />
                <div style="color: #999999;">项目建设性质</div>
              </div>
              <div style="color: #333333;margin-top: 8px;">{{itemEnti.projectNatureName}}</div>
            </div>
          </div>
          <div style="display:flex;margin-top: 20px;">
            <div style="width: 48%;">
              <div style=" display:flex;">
                <img src="../../../../../assets/img/1icon-zdxmlx.png" style="height: 22px;" />
                <div style="color: #999999;">重点项目类型</div>
              </div>
              <div style="color: #333333;margin-top: 8px;">{{itemEnti.zdProTypeName}}</div>
            </div>
            <div
              style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
            ></div>
            <div style="width: 48%;">
              <div style="display:flex;">
                <img src="../../../../../assets/img/1icon-zdxmdj.png" style="height: 22px;" />
                <div style="color: #999999;">重点项目等级</div>
              </div>
              <div style="color: #333333;margin-top: 8px;">{{itemEnti.zdProLevelName}}</div>
            </div>
          </div>
        </div>
        <div style="display:flex;margin: 20px;text-align: left;font-size:18px;">
          <div style="width: 48%;">
            <div style=" display:flex;">
              <img src="../../../../../assets/img/1icon-xmsuhy.png" style="height: 22px;" />
              <div style="color: #999999;">项目所属行业</div>
            </div>
            <div style="color: #333333;margin-top: 8px;">{{itemEnti.projectIndustryName}}</div>
          </div>
          <div
            style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
          ></div>
          <div style="width: 48%;">
            <div style="display:flex;">
              <img src="../../../../../assets/img/1icon-cylxdl.png" style="height: 22px;" />
              <div style="color: #999999;">产业类型大类</div>
            </div>
            <div style="color: #333333;margin-top: 8px;">{{itemEnti.industryFirstType}}</div>
          </div>
        </div>

        <div style="margin: 20px;text-align: left;">
          <div style="display:flex;">
            <img src="../../../../../assets/img/1icon-cylx.png" style="height: 22px;" />
            <div style="color: #999999;">产业类型</div>
          </div>
          <div style="color: #333333;margin-top: 10px;">{{itemEnti.industryType}}</div>
        </div>
        <van-divider :style="{ padding: '0 20px' }"></van-divider>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <div style="width: 48%;">
              <div style=" display:flex;">
                <img src="../../../../../assets/img/1icon-jhkgnx.png" style="height: 22px;" />
                <div style="color: #999999;">计划开工年限</div>
              </div>
              <div style="color: #333333;margin-top: 8px;">{{itemEnti.planWorkDate}}</div>
            </div>
            <div
              style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
            ></div>
            <div style="width: 48%;">
              <div style="display:flex;">
                <img src="../../../../../assets/img/1icon-jhwgnx.png" style="height: 22px;" />
                <div style="color: #999999;">计划完工年限</div>
              </div>
              <div style="color: #333333;margin-top: 8px;">{{itemEnti.planEndDate}}</div>
            </div>
          </div>
        </div>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <div style="width: 48%;">
              <div style=" display:flex;">
                <img src="../../../../../assets/img/1icon-xmgsztz.png" style="height: 22px;" />
                <div style="color: #999999;">项目估算总投资</div>
              </div>
              <div style="color: #333333;margin-top: 8px;">{{itemEnti.projectEstimatedTotal}}亿</div>
            </div>
            <div
              style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
            ></div>
            <div style="width: 48%;">
              <div style="display:flex;">
                <img src="../../../../../assets/img/1icon-bnjhtz.png" style="height: 22px;" />
                <div style="color: #999999;">本年计划投资</div>
              </div>
              <div style="color: #333333;margin-top: 8px;">{{itemEnti.yearPlanInvest}}亿</div>
            </div>
          </div>
        </div>
        <div style="margin: 20px;text-align: left;">
          <div style="display:flex;">
            <img src="../../../../../assets/img/1icon-tzwce.png" style="height: 22px;" />
            <div style="color: #999999;">投资完成额</div>
          </div>
          <div style="color: #333333;margin-top: 10px;">{{itemEnti.investment}}亿</div>
        </div>
        <van-divider :style="{ padding: '0 20px' }"></van-divider>
        <div style="margin:20px;display:flex;">
          <img src="../../../../../assets/img/1icon-xpxx.png" style="height: 22px;" />
          <div style="color: #3ca1ec;">审批信息</div>
        </div>
        <div style="display: flex;margin-left: 20px;text-align: left;font-size: 18px;">
          <img src="../../../../../assets/img/sp.png" style="width: 7px;height:277px" />
          <div style="margin-left:20px;">
            <div style="color: #999999;">国土审批文号</div>
            <div style="margin-top:10px;color: #333333;font-size:15px;">{{itemEnti.land}}</div>
            <div style="margin-top:15px;color: #999999;">环保审批文号</div>
            <div style="margin-top:10px;color: #333333;font-size:15px;">{{itemEnti.eia}}</div>
            <div style="margin-top:15px;color: #999999;">立项审批文号</div>
            <div style="margin-top:10px;color: #333333;font-size:15px;">{{itemEnti.approval}}</div>
            <div style="margin-top:15px;color: #999999;">规划审批文号</div>
            <div style="margin-top:10px;color: #333333;font-size:15px;">{{itemEnti.plan}}</div>
          </div>
        </div>
        <van-divider :style="{ padding: '0 20px' }"></van-divider>
        <div style="margin: 20px;text-align: left;">
          <div style="display:flex;">
            <img src="../../../../../assets/img/1icon-jsgmjnr.png" style="height: 22px;" />
            <div style="color: #999999;">建设规模及内容</div>
          </div>
          <div style="color: #333333;margin-top: 10px;">{{itemEnti.scaleAndContent}}</div>
        </div>
        <div style="margin: 20px;text-align: left;">
          <div style="display:flex;">
            <img src="../../../../../assets/img/1icon-bnjsnr.png" style="height: 22px;" />
            <div style="color: #999999;">本年建设内容</div>
          </div>
          <div style="color: #333333;margin-top: 10px;">{{itemEnti.mainContent}}</div>
        </div>
        <div style="height:60px;background:#F1F4F6;">
          <div
            :style="backgroundDiv"
            style="height:60px;padding-left: 18px;background: no-repeat center right; background-size: contain;"
          >
            <div style="height: 17px;"></div>
            <div
              style="border-left:2px solid #3097FB;color: #3097FB;font-size:20px;text-align: left;padding-left: 20px;height: 20px;"
            >项目单位信息</div>
          </div>
        </div>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <div style="width: 48%;">
              <div style=" display:flex;">
                <img src="../../../../../assets/img/1icon-dw.png" style="height: 22px;" />
                <div style="color: #999999;">建设单位</div>
              </div>
              <div style="color: #333333;margin-top: 8px;">{{itemEnti.comName}}</div>
            </div>
            <div
              style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
            ></div>
            <div style="width: 48%;">
              <div style="display:flex;">
                <img src="../../../../../assets/img/1icon-dw.png" style="height: 22px;" />
                <div style="color: #999999;">负责单位</div>
              </div>
              <div style="color: #333333;margin-top: 8px;">{{itemEnti.comName}}</div>
            </div>
          </div>
        </div>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <img src="../../../../../assets/img/1icon-zjdm.png" style="height: 22px;" />
            <div style="color: #999999;">证照代码</div>
          </div>
          <div style="color: #333333;margin-top: 10px;">{{itemEnti.licenceCode}}</div>
        </div>
        <van-divider :style="{ padding: '0 20px' }"></van-divider>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <div style="width: 48%;">
              <div style=" display:flex;">
                <img src="../../../../../assets/img/1icon-dw.png" style="height: 22px;" />
                <div style="color: #999999;">法人代表姓名</div>
              </div>
              <div style="color: #333333;margin-top: 8px;">{{itemEnti.zdgcProComInfoId.legalPerson}}</div>
            </div>
            <div
              style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
            ></div>
            <div style="width: 48%;">
              <div style="display:flex;">
                <img src="../../../../../assets/img/1icon-dw.png" style="height: 22px;" />
                <div style="color: #999999;">法人联系方式</div>
              </div>
              <div style="color: #333333;margin-top: 8px;">{{itemEnti.zdgcProComInfoId.legalPhone}}</div>
            </div>
          </div>
        </div>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <div style="width: 48%;">
              <div style=" display:flex;">
                <img src="../../../../../assets/img/1icon-dw.png" style="height: 22px;" />
                <div style="color: #999999;">负责人姓名</div>
              </div>
              <div style="color: #333333;margin-top: 8px;">{{itemEnti.zdgcProComInfoId.chargeName}}</div>
            </div>
            <div
              style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
            ></div>
            <div style="width: 48%;">
              <div style="display:flex;">
                <img src="../../../../../assets/img/1icon-dw.png" style="height: 22px;" />
                <div style="color: #999999;">负责人联系方式</div>
              </div>
              <div style="color: #333333;margin-top: 8px;">{{itemEnti.zdgcProComInfoId.chargePhone}}</div>
            </div>
          </div>
        </div>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <div style="width: 48%;">
              <div style=" display:flex;">
                <img src="../../../../../assets/img/1icon-dw.png" style="height: 22px;" />
                <div style="color: #999999;">报表人姓名</div>
              </div>
              <div style="color: #333333;margin-top: 8px;">{{itemEnti.zdgcProComInfoId.reportName}}</div>
            </div>
            <div
              style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
            ></div>
            <div style="width: 48%;">
              <div style="display:flex;">
                <img src="../../../../../assets/img/1icon-dw.png" style="height: 22px;" />
                <div style="color: #999999;">报表人联系方式</div>
              </div>
              <div style="color: #333333;margin-top: 8px;">{{itemEnti.zdgcProComInfoId.reportPhone}}</div>
            </div>
          </div>
        </div>
        <van-divider :style="{ padding: '0 20px' }"></van-divider>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="color: #333333;">项目规划图</div>
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" style="width: 100%;" @click="imgPreview(index)" />
            </van-swipe-item>
          </van-swipe>
        </div>
      </van-tab>
      <van-tab name="2" :click="reshye()">
        <div slot="title" style="font-size:17px;display:flex;">
          <img id="tab2" :src="img2" class="tabimg" />
          <div id="tab2_div" style="margin-left:4px;color:#666666;">项目简介</div>
        </div>
        <div style="width: 92%;padding: 2% 4% 2% 4%;">
          <div id="pmJjdivid" style="width:100%;" v-html="jjEntity.content"></div>
        </div>
      </van-tab>
      <van-tab name="3">
        <div slot="title" style="font-size:17px;display:flex;">
          <img id="tab3" :src="img3" class="tabimg" />
          <div id="tab3_div" style="margin-left:4px;color:#666666;">阶段汇报</div>
        </div>

        <div style="margin-top: 10px;">
          <van-popup v-model="show" position="bottom" :style="{ height: '200px' }">
            <van-datetime-picker
              v-model="currentDate"
              type="date"
              style="height: 200px;"
              @confirm="onconfirm"
            />
          </van-popup>
          <div style="display: none;height:1px;">
            <input
              @click="showDatePicker(1)"
              v-model="date1"
              type="text"
              placeholder="请输入开始时间"
              style="width: 40%;height:30px;margin-left: 5%;border-radius:5px;background: #F1F4F6;border: none;text-align: center;"
            />
            <div style="width: 10%;line-height: 30px;vertical-align: middle;text-align: center;">-</div>
            <input
              @click="showDatePicker(2)"
              v-model="date2"
              type="text"
              placeholder="请输入结束时间"
              style="width: 40%;height:30px;border-radius:5px;background: #F1F4F6;border: none;text-align: center;"
            />
          </div>
          <van-divider style="margin-top: 10px;margin-bottom: 0px;"></van-divider>
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="10">
              <div
                style="display: flex;height:100px;padding: 10px 10px;border-bottom: 2px solid #F1F4F6; background: #ffffff;"
                v-for="item of list"
                :key="item.id"
                @click="goDetile"
              >
                <img src="../../../../../assets/img/deimg.jpg" style="width: 35%;" />
                <div style="margin-left:10px;text-align: left;width: 65%;font-size: 15px">
                  <div style="color:#333333;">{{item.reportDate}}</div>
                  <textarea
                    style="color:#999999;height: 80px;width: 100%;border:none;resize: none;overflow:hidden"
                    v-model="item.imageProgress"
                    readonly
                  ></textarea>
                </div>
              </div>
            </van-list>
          </van-pull-refresh>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import $ from "jquery";
import { httpMethod } from "../../../../../api/getData.js";
import Vue from "vue";
import { Tab, Tabs } from "vant";
import { Divider } from "vant";
import { Swipe, SwipeItem } from "vant";
import Vant, { Lazyload } from "vant";
import { ImagePreview } from "vant";
import { PullRefresh } from "vant";
import { Field } from "vant";
import { Popup } from "vant";

Vue.use(Popup);
Vue.use(PullRefresh);
Vue.use(Field);
Vue.use(ImagePreview);
Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Divider);
Vue.use(Tab).use(Tabs);
export default {
  name: "zdgcdetile",
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#FFFFFF");
  },
  mounted() {
    this.itemEnti = this.$route.params.entity;
    console.log(this.$route.params.entity);
    this.getzdgcProReportInfoAtt(this.itemEnti.id);
    this.getZdgcProProgressList(this.itemEnti.id);
    this.getzdgcProReportInfoAttJJ(this.itemEnti.id);
    // for (let i = 0; i < this.itemEnti.pathList.length; i++) {
    //   this.images.push(
    //     httpMethod.returnBaseUrlFun() + this.itemEnti.pathList[i]
    //   );
    // }
    //this.getZdgcProProgressList(this.itemEnti.id);
    $("#pmJjdivid p").each(function() {
      $(this).attr("style", "font-size:17px;");
    });
  },
  data() {
    return {
      images: [],
      jjEntity:[{content:""}],
      list: [],
      loading: false, //是否处于加载状态
      finished: false, //是否已加载完所有数据
      isLoading: false, //是否处于下拉刷新状态
      currentDate: new Date(),
      show: false,
      date1: "2019-01-01",
      date2: "2019-12-31",
      flage: 1,
      backgroundDiv: {
        backgroundImage:
          "url(" + require("../../../../../assets/img/bg-bt.png") + ")"
      },
      img1: require("../../../../../assets/img/icon-xmxq.png"),
      img2: require("../../../../../assets/img/icon-xmjj2.png"),
      img3: require("../../../../../assets/img/icon-jdhb2.png"),
      itemEnti: { zdgcProComInfoId: { legalPerson: "" } },
      imageBaseUrl: httpMethod.returnBaseUrlFun()
    };
  },
  updated() {},
  methods: {
    reshye: function() {
      //console.log("刷新");
      setTimeout(() => {
        $("#pmJjdivid p").each(function() {
          $(this).attr("style", "font-size:17px;");
        });
      }, 100);
    },
    imgPreview: function(index) {
      ImagePreview({
        images: this.images,
        startPosition: index,
        onClose() {
          // do something
        }
      });
    },
    //获取图片
    getzdgcProReportInfoAtt: function(id) {
      var params = {
        zdgcProReportInfoId: id
      };

      httpMethod
        .getzdgcProReportInfoAtt(params)
        .then(res => {
            console.log("获取图片");
            
          if (res.success == "1") {
            var dataList = res.dataList;
            for (var i = 0; i < dataList.length; i++) {
              this.images.push(
                httpMethod.returnBaseUrlFun() + dataList[i].realpath
              );
            }
            console.log("获取图片");
            console.log(this.images);
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    },
    //项目阶段汇报
    getZdgcProProgressList: function(id) {
      var params = {
        proReportInfoId: id
      };

      httpMethod
        .getZdgcProProgressList(params)
        .then(res => {
          //console.log("项目阶段汇报==="+JSON.stringify(res));
          if (res.success == "1") {
            var dataList = res.dataList;
            this.list=dataList;
            
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    },
    //项目简介
    getzdgcProReportInfoAttJJ: function(id) {
      var params = {
        zdgcProReportInfoId: id
      };

      httpMethod
        .getzdgcProReportInfoAttJJ(params)
        .then(res => {
          //console.log("项目简介==="+JSON.stringify(res));
          if (res.success == "1") {
            var data=res.data;
           this.jjEntity= data;
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
    onLoad() {
      //上拉加载
      this.finished = true;
    },
    goDetile() {},
    showDatePicker(index) {
      this.show = true;
      this.flage = index;
    },
    timeFormat(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return year + "-" + month + "-" + day;
    },
    onconfirm() {
      if (this.flage == 1) {
        this.date1 = this.timeFormat(this.currentDate);
      } else {
        this.date2 = this.timeFormat(this.currentDate);
      }

      this.show = false;
    },
    onClick(name, title) {
      if (name == "1") {
        this.img1 = require("../../../../../assets/img/icon-xmxq.png");
        this.img2 = require("../../../../../assets/img/icon-xmjj2.png");
        this.img3 = require("../../../../../assets/img/icon-jdhb2.png");
        $("#tab1_div").css("color", "#3097FB");
        $("#tab2_div").css("color", "#666666");
        $("#tab3_div").css("color", "#666666");
      } else if (name == "2") {
        this.img1 = require("../../../../../assets/img/icon-xmxq2.png");
        this.img2 = require("../../../../../assets/img/icon-xmjj.png");
        this.img3 = require("../../../../../assets/img/icon-jdhb2.png");
        $("#tab1_div").css("color", "#666666");
        $("#tab2_div").css("color", "#3097FB");

        $("#tab3_div").css("color", "#666666");
      } else {
        this.img1 = require("../../../../../assets/img/icon-xmxq2.png");
        this.img2 = require("../../../../../assets/img/icon-xmjj2.png");
        this.img3 = require("../../../../../assets/img/icon-jdhb.png");
        $("#tab1_div").css("color", "#666666");
        $("#tab2_div").css("color", "#666666");
        $("#tab3_div").css("color", "#3097FB");
      }
    }
  }
};
</script>

<style>
@import "../../../../../page/zdgz/zdgc/zdgc_xmlb/zdgc_xmdeali/zdgc_xmdeali.css";

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