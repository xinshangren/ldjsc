<template>
  <div class="amap-page-container">
    <div class="top_menu_div">
      <div id="mapqhId" class="top_menu_div_dg"><img class="bottom_menu_div_dg_img" src="../../assets/img/zdgc-dtqh.png" />
        <div id="mapNameId" style="margin-top: 10px;">卫星地图</div>
      </div>
      <div class="top_menu_div_line"></div>
      <div id="mapTcId" class="top_menu_div_dg"><img class="bottom_menu_div_dg_img" src="../../assets/img/zdgc-tc.png" />
        <div id="openTcDivId" style="margin-top: 10px;">打开图层</div>
      </div>
      <div class="top_menu_div_line"></div>
      <div id="mapAddZoomId" class="top_menu_div_dg"><img class="bottom_menu_div_dg_img" style="margin-top: 11px;height: 27px;" src="../../assets/img/jiahao.png" /></div>
      <div class="top_menu_div_line"></div>
      <div id="mapMinusZoomId" class="top_menu_div_dg"><img class="bottom_menu_div_dg_img" style="margin-top: 11px;height: 23px;" src="../../assets/img/jianhao.png" /></div>
      <div class="top_menu_div_line"></div>
      <div id="mapLocationId" class="top_menu_div_dg"><img class="bottom_menu_div_dg_img" style="margin-top: 11px;height: 23px;" src="../../assets/img/location_bg.png" /></div>
    </div>
    <div id="tcDialogId" class="top_menu_div" style="display:none;width: 137px;position: absolute;z-index: 999; left: 101px;">
      <form class="mui-input-group" style="width: 137px;background: none;">
        <div class="mui-input-row mui-checkbox" style="background: none;">
          <label>区域面</label>
          <input name="checkbox1" value="bg" type="checkbox">
        </div>
        <div class="mui-input-row mui-checkbox" style="background: none;">
          <label>道路</label>
          <input name="checkbox1" value="road" type="checkbox">
        </div>
        <div class="mui-input-row mui-checkbox" style="background: none;">
          <label>建筑物</label>
          <input name="checkbox1" value="building" type="checkbox">
        </div>
        <div class="mui-input-row mui-checkbox" style="background: none;">
          <label>标注</label>
          <input name="checkbox1" value="point" type="checkbox" checked>
        </div>
      </form>
    </div>


    <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" 
      :features='features' :events="events" style="height: 500px;">
    </el-amap>

    <div class="toolbar">
      <button @click="getMap()">get map</button>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import $ from "jquery";
  import VueAMap from 'vue-amap';
  Vue.use(VueAMap);
  VueAMap.initAMapApiLoader({
    key: '4f77ad005164acbf55e904ed14bf8660',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    v: '1.4.4'
  });
  let amapManager = new VueAMap.AMapManager();
  export default {
    name: "homevue",
    data() {
      return {
        amapManager,
        iswxshow: false,
        features: ['point'],
        zoom: 12,
        center: [112.851581, 35.49111],
        zoom: 9,
        resizeEnable: true,
        events: {
          'moveend': () => {
          },
          'zoomchange': () => {
          },
          'click': (e) => {

          }
        },
        defaultLayer:{}

      };
    },
    mounted() {
      this.defaultLayer = new AMap.TileLayer.Satellite();
    },
    methods: {
      getMap() {
        let o = amapManager.getMap();
        // o.setFeatures(['bg', 'road', 'building', 'point']);//图层
        if (this.iswxshow) {
          this.defaultLayer.setMap(o);
          this. defaultLayer.hide();
          this.iswxshow=false;
        } else {
          this.defaultLayer.setMap(o);
          this. defaultLayer.show();
          this.iswxshow=true;
        }


      }
    }
  };
</script>
<style>
  .top_menu_div {
	position: absolute;
	z-index: 999;
	top: 20px;
	left: 34px;
	background: #ffffff;
	border-radius: 6px;
	-moz-box-shadow: 2px 2px 12px #333333;
	-webkit-box-shadow: 2px 2px 12px #333333;
	box-shadow: 2px 2px 12px #333333;
}
.top_menu_div_dg {
	text-align: center;
	color: #1976d2;
	height: 62px;
	font-size: 11px;
	padding: 7px;
}
.bottom_menu_div_dg_img {
	height: 20px;
	vertical-align: text-bottom;
}
</style>