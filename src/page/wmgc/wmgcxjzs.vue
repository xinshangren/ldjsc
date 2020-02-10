<template>
  <div class="amap-page-container">
    <div id="maintitleId" class="maintitle" @touchmove.prevent>
      <div style="display: flex;">
        <div
          id="xjzstime"
          style="width: 57px;height:23px;display: flex;margin-left: 73px;margin-top: 10px;background: #eeeeee;border-radius: 3px;"
        >
          <div id="timeshow" style="height:23px;font-size: 15px;">10月份</div>
          <img src="../../assets/img/jb.png" style="margin-top:10px;width: 10px;" height="10px" />
        </div>
      </div>
    </div>
    <div
      id="dateselect"
      style="display: none;background:#ffffff;position: absolute;width:60px;z-index: 998;left:91px;top:98px;border:0.5px #e03e3c solid;"
    >
      <ul id="dateul">
        <li
          show="6月份"
          code="2019-06"
          style="border-top:0.5px #e03e3c solid;font-size:15px;color: #e03e3c;height: 25px;text-align: center;"
        >6</li>
        <li
          show="7月份"
          code="2019-07"
          style="border-top:0.5px #e03e3c solid;font-size:15px;color: #e03e3c;height: 25px;text-align: center;"
        >7</li>
        <li
          show="8月份"
          code="2019-08"
          style="border-top:0.5px #e03e3c solid;font-size:15px;color: #e03e3c;height: 25px;text-align: center;"
        >8</li>
        <li
          show="9月份"
          code="2019-09"
          style="border-top:0.5px #e03e3c solid;font-size:15px;color: #e03e3c;height: 25px;text-align: center;"
        >9</li>
        <li
          show="10月份"
          code="2019-10"
          style="border-top:0.5px #e03e3c solid;font-size:15px;color: #e03e3c;height: 25px;text-align: center;"
        >10</li>
      </ul>
    </div>
    <!-- 地图控件 -->
    <!-- <div class="top_menu_div">
      <div id="mapqhId" class="top_menu_div_dg"><img class="bottom_menu_div_dg_img"
          src="../../assets/img/zdgc-dtqh.png" />
        <div id="mapNameId" style="margin-top: 0px;">卫星地图</div>
      </div>
      <div class="top_menu_div_line"></div>
      <div id="mapTcId" class="top_menu_div_dg"><img class="bottom_menu_div_dg_img"
          src="../../assets/img/zdgc-tc.png" />
        <div id="openTcDivId" style="margin-top: 0px;">打开图层</div>
      </div>
      <div class="top_menu_div_line"></div>
      <div id="mapAddZoomId" class="top_menu_div_dg"><img class="bottom_menu_div_dg_img"
          style="margin-top: 5px;height: 27px;" src="../../assets/img/jiahao.png" /></div>
      <div class="top_menu_div_line"></div>
      <div id="mapMinusZoomId" class="top_menu_div_dg"><img class="bottom_menu_div_dg_img"
          style="margin-top: 5px;height: 23px;" src="../../assets/img/jianhao.png" /></div>
      <div class="top_menu_div_line"></div>
      <div id="mapLocationId" class="top_menu_div_dg"><img class="bottom_menu_div_dg_img"
          style="margin-top: 5px;height: 23px;" src="../../assets/img/location_bg.png" /></div>
    </div>
    <div id="tcDialogId" class="top_menu_div"
      style="display:none;width: 137px;position: absolute;z-index: 999; left: 101px;padding-left: 5px;">
      <form class="mui-input-group" style="width: 137px;background: none;">
        <div style="background: none;line-height: 30px;vertical-align: middle;padding-left: 5px;">
          <label>区域面</label>
          <input class="tc" @click="setMapFeatures()" name="checkbox1" value="bg" type="checkbox">
        </div>
        <div class="top_menu_div_line"></div>
        <div style="background: none;line-height: 30px;vertical-align: middle;padding-left: 5px;">
          <label>道路</label>
          <input class="tc" @click="setMapFeatures()" name="checkbox1" value="road" type="checkbox">
        </div>
        <div class="top_menu_div_line"></div>
        <div style="background: none;line-height: 30px;vertical-align: middle;padding-left: 5px;">
          <label>建筑物</label>
          <input class="tc" @click="setMapFeatures()" name="checkbox1" value="building" type="checkbox">
        </div>
        <div class="top_menu_div_line"></div>
        <div style="background: none;line-height: 30px;vertical-align: middle;padding-left: 5px;">
          <label>标注</label>
          <input class="tc" @click="setMapFeatures()" name="checkbox1" value="point" type="checkbox" checked>
        </div>
      </form>
    </div>-->

    <div
      id="tulibottom"
      style="height: 80px;width: 90%;padding-right:10px;text-align: center; margin-left:5%; position: absolute;
					background-color:rgba(255, 255, 255, 0.8);border: 1px solid rgb(186, 186, 182);border-radius: 10px;z-index: 998; bottom: 70px;"
    >
      <ul style="display: block;overflow: hidden;" id="tuliulId">
        <li code="1" class="tuli_noselect">
          <img src="../../assets/img/xx-r.png" class="tuli_img" /> 95-100分(包含95分)
        </li>
        <li code="2" class="tuli_noselect">
          <img src="../../assets/img/xx-p.png" class="tuli_img" /> 90-95分(包含90分)
        </li>
        <li id="mei3" code="3" class="tuli_noselect">
          <img src="../../assets/img/xx-y.png" class="tuli_img" /> 80-90分(包含80分)
        </li>
        <li id="new4" code="4" class="tuli_noselect">
          <img src="../../assets/img/xx-g.png" class="tuli_img" /> 75-80分(包含75分)
        </li>
        <li id="new4" code="5" class="tuli_noselect">
          <img src="../../assets/img/xx-b.png" class="tuli_img" /> 75分以下
        </li>
      </ul>
    </div>

    <el-amap
      ref="map"
      id="mapid"
      vid="amapDemo"
      :amap-manager="amapManager"
      :center="center"
      :zoom="zoom"
      :features="features"
      :events="events"
      style="margin-top: -40px;"
    >
      <el-amap-marker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        :template="marker.template"
        :vid="index"
        :content="marker.content"
      ></el-amap-marker>
    </el-amap>
  </div>
</template>

<script>
import Vue from "vue";
import { httpMethod } from "../../api/getData.js";
import VueAMap from "vue-amap";
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "4f77ad005164acbf55e904ed14bf8660",
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor"
  ],
  v: "1.4.4"
});
let amapManager = new VueAMap.AMapManager();
export default {
  name: "homevue",
  data() {
    return {
      date: "2019-10",
      amapManager,
      iswxshow: false,
      features: ["point"],
      center: [112.851581, 35.49111],
      zoom: 12,
      resizeEnable: true,
      events: {
        moveend: () => {},
        zoomchange: () => {},
        click: e => {}
      },
      defaultLayer: null,
      map: null,
      markers: []
    };
  },
  mounted() {
    // myChart.on("click", function(params) {
    //   console.log(params);
    // });
    // 设置地图高度
    var orderHight1 = document.documentElement.clientHeight;
    var heightlist = orderHight1 - 60;
    $("#mapid").css("height", heightlist + "px");
    $("#mapid").click(function(){
        $("#dateselect").css("display", "none");
    });
    var _this = this;
    //图层切换
    $("#mapqhId").click(function(e) {
      if (_this.map == null || _this.defaultLayer == null) {
        _this.defaultLayer = new AMap.TileLayer.Satellite();
        _this.map = amapManager.getMap();
      }

      if (!_this.iswxshow) {
        _this.defaultLayer.setMap(_this.map);
        _this.defaultLayer.show();
        _this.iswxshow = true;
        $("#mapNameId").html("普通地图");
      } else {
        _this.defaultLayer.hide();
        _this.iswxshow = false;
        $("#mapNameId").html("卫星地图");
      }
    });
    //地图放大
    $("#mapAddZoomId").click(function(e) {
      if (_this.zoom == 19) {
        return;
      }
      _this.zoom = _this.zoom + 1;
    });
    //地图缩小
    $("#mapMinusZoomId").click(function(e) {
      if (_this.zoom == 3) {
        return;
      }
      _this.zoom = _this.zoom - 1;
    });
    // 定位
    $("#mapLocationId").click(function(e) {
      _this.center = [112.851581, 35.49111];
    });

    var isTcShow = false; //判断图层控件开启
    //图层切换
    $("#mapTcId").click(function(e) {
      var openTcDivIdhtml = $("#openTcDivId").html();
      if (openTcDivIdhtml == "打开图层") {
        $("#openTcDivId").html("关闭图层");
      } else {
        $("#openTcDivId").html("打开图层");
      }
      $("#tcDialogId").toggle();
    });
    //月份选择
    $("#xjzstime").off("click");
    $("#xjzstime").on("click", function() {
      $("#dateselect").css("display", "");
    });
    $("#dateul li").click(function() {
      var show = $(this).attr("show");
      var code = $(this).attr("code");
      $("#timeshow").html(show);
      $("#dateselect").css("display", "none");
      _this.date = code;
      _this.getLevelBasicList();
    });

    _this.getLevelBasicList();
  },
  methods: {
    //
    getLevelBasicList: function() {
      var _this = this;
      var params = {
        date: _this.date
      };
      httpMethod
        .getLevelBasicList(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            let markers = [];
            var path = require("../../assets/img/xx-r.png");
            for (let i = 0; i < res.dataList.length; i++) {
              if (res.dataList[i].dw_level == "10") {
                path = require("../../assets/img/xx-r.png");
              } else if (res.dataList[i].dw_level == "9") {
                path = require("../../assets/img/xx-p.png");
              } else if (res.dataList[i].dw_level == "8") {
                path = require("../../assets/img/xx-y.png");
              } else if (res.dataList[i].dw_level == "7") {
                path = require("../../assets/img/xx-g.png");
              } else {
                path = require("../../assets/img/xx-b.png");
              }
              if (
                res.dataList[i].longitude != null &&
                res.dataList[i].latitude != null &&
                res.dataList[i].longitude != "" &&
                res.dataList[i].latitude != ""
              ) {
                markers.push({
                  position: [
                    res.dataList[i].longitude,
                    res.dataList[i].latitude
                  ],
                  template:
                    "<div  style='height:20px'><img src='" +
                    path +
                    "' style='height:15px'></div>"
                });
              }
            }
            _this.markers = markers;
          }
        })
        .catch(err => {});
    },
    setMapFeatures() {
      if (this.map == null) {
        this.map = amapManager.getMap();
      }
      var features = [];
      var inputs = document.querySelectorAll(".tc");
      inputs.forEach(function(input) {
        if (input.checked) {
          features.push(input.value);
        }
      });
      console.log(features);
      this.map.setFeatures(features);
    }
  }
};
</script>
<style socped>
.top_menu_div {
  position: absolute;
  z-index: 999;
  top: 140px;
  left: 20px;
  background: rgb(255, 255, 255, 0.8);
  border-radius: 6px;
  -moz-box-shadow: 2px 2px 12px #333333;
  -webkit-box-shadow: 2px 2px 12px #333333;
  box-shadow: 2px 2px 12px #333333;
}

.top_menu_div_dg {
  text-align: center;
  color: #1976d2;
  height: 35px;
  font-size: 11px;
  padding: 7px;
}

.bottom_menu_div_dg_img {
  height: 20px;
  vertical-align: text-bottom;
}

.top_menu_div_line {
  height: 1px;
  background: #cccccc;
  margin: auto 6px;
}

.maintitle {
  position: relative;
  width: 80%;
  height: 40px;
  text-align: center;
  left: 5%;
  z-index: 999;
  top: 15px;
  background: url(../../assets/img/dwbt.png) no-repeat;
  background-size: 100% 100%;
  font-size: 20px;
  color: #e03e3c;
  font-family: "楷体";
}

.tuli_noselect {
  color: #333333;
  font-size: 15px;
  height: 25px;
  float: left;
  margin-left: 10px;
}

.tuli_img {
  margin-top: 5px;
  width: 19px;
  height: 16px;
}
</style>