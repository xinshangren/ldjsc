<template style="background: #ffffff;">
  <div>
    <div
      style="display: flex;line-height: 16px;vertical-align: bottom;margin-left: 5%;height: 50px;white-space: nowrap;margin-right: 10px;width: 95%; overflow:scroll;"
    >
      <div
        style="height:16px;margin-top: 14px; color: #333333;font-size: 14px;border-left: 2px #3ca1ec solid;padding-left: 20px;"
      >评级点位类型得分明细</div>
      <div
        style="color:#3ca1ec;font-size: 15px;height: 16px;margin-top: 14px; display: flex;margin-left: 5%;"
        @click="showpopu(1)"
      >
        {{ctype}}
        <img src="../../assets/img/bad.png" style="height: 8px;margin-top: 7px;" />
      </div>
    </div>
    <!-- <div style="width: 100%;height:30px;color: #ffffff; line-height:30px;vertical-align: middle;background: rgb(153, 153, 153,0.8); text-align: right;">
     <-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 左右滑动查看更多月份&nbsp;&nbsp;          
    </div>-->
    <van-popup
      v-model="show"
      position="bottom"
      style="overflow:hidden;background:rgb(243, 243, 243);"
    >
      <van-picker
        :columns="columnsname"
        :values="1"
        show-toolbar
        @cancel="show = false"
        @confirm="onConfirm"
      />
    </van-popup>

    <div class="pages-tables" id="pages-tables">
      <div class="waterMask" id="watermark"></div>
      <div class="rolling-table meal-table" ref="tableBox" :style="{height: maxHeight + 'px'}">
        <table class="table" id="table" cellpadding="0" cellspacing="0" ref="rollingTable">
          <tr v-for="(x,i) in xList" :key="i">
            <th
              class="rows"
              :class="(index == 0 && i == 0)?'cross':'cross1'"
              v-for="(l,index) in x"
              :key="index"
              :colspan="l.colspan"
              :rowspan="l.rowspan"
            >{{l.name}}</th>
          </tr>
          <tr v-for="(l,i) in yList" :key="i + 'a'">
            <template v-for="(x, xKey) in xField">
              <td
                v-for="(ll,yKey) in l"
                :key="yKey"
                v-if="x === yKey"
                :class="[{'cols': yKey == xField[0]},{'cols1': yKey == xField[1]}]"
              >
                <!-- {{ yList[i][yKey]}} -->
                <div v-if="yKey==='statis_date'">{{ yList[i][yKey]}}</div>
                <img
                  v-if="yKey!='statis_date'&&yList[i][yKey]==10"
                  src="../../assets/img/xx-r.png"
                  style="height: 12px;"
                />
                <img v-if="yList[i][yKey]==9" src="../../assets/img/xx-p.png" style="height: 12px;" />
                <img v-if="yList[i][yKey]==8" src="../../assets/img/xx-y.png" style="height: 12px;" />
                <img v-if="yList[i][yKey]==7" src="../../assets/img/xx-g.png" style="height: 12px;" />
                <img v-if="yList[i][yKey]<7" src="../../assets/img/xx-b.png" style="height: 12px;" />
                <div v-if="yList[i][yKey]=='-'">{{ yList[i][yKey]}}</div>
                <div v-if="yList[i][yKey]>10">{{ yList[i][yKey]}}</div>
              </td>
            </template>
          </tr>
          <tr></tr>
        </table>
      </div>
    </div>

    <!-- <div style="display: flex;width: 460px;overflow: scroll;">
      <div style="width: 140px;border-right: 2px #FFD59F solid;background: #F3F4F7;">
        <div
          style="height: 60px;line-height: 60px;vertical-align: middle;text-align: center;border-bottom: 1px #ECECEC solid ;"
        >评级点位</div>
        <div v-for="(value,index) in names" :key="index" class="gridtitleName" style>{{value}}</div>
      </div>

      <div style="width: 280px;overflow: scroll;">
        <div style="width: 650px;display:flex;">
          <div style="width: 140px;margin-left: -140px;" class="gridtitleName">评级点位</div>
          <div
            style="width: 100px;margin: auto 0;"
            class="griddate"
            v-for="(valued,indexd) in mdatelist"
            :key="indexd"
          >{{valued}}</div>
        </div>
        <div style="width: 650px;display:flex;">
          <div style="width: 140px;margin-left: -140px;" class="gridtitleName">-</div>
          <div
            style="width: 100px;display: flex;"
            v-for="(valued,indexd) in mdatelist"
            :key="indexd"
          >
            <div style="width: 50px;margin: auto 0;" class="griddate">得分</div>
            <div style="width: 50px;margin: auto 0;" class="griddate">星级</div>
          </div>
        </div>
        <div
          id="mygrid"
          ref="mygrid"
          style="width: 650px;display:flex;"
          v-for="(value1,index1) in names1"
          :key="index1"
        >
          <div style="width: 140px;margin-left: -140px;" class="gridtitleName">{{value1}}</div>
          <div
            style="width: 50px;"
            class="value1"
            v-for="(value2,index2) in mdatalist"
            v-if="index2>=index1*10&&index2<(index1+1)*10"
            :key="index2"
          >
            <img v-if="value2==10" src="../../assets/img/xx-r.png" style="height: 12px;" />
            <img v-if="value2==9" src="../../assets/img/xx-p.png" style="height: 12px;" />
            <img v-if="value2==8" src="../../assets/img/xx-y.png" style="height: 12px;" />
            <img v-if="value2==7" src="../../assets/img/xx-g.png" style="height: 12px;" />
            <img v-if="value2<7" src="../../assets/img/xx-b.png" style="height: 12px;" />
            <div v-if="value2>11||value2=='-'">{{value2}}</div>
          </div>
        </div>
    </div>-->
    <img id="gide" src="../../assets/img/hdckgd-2.png" style="position: absolute;right: 0;" />
    <!-- </div> -->
  </div>
</template>
<script>
import { createIScroller, refreshScroller } from "../../assets/js/iscrollTable";
import echarts from "echarts";
import { echarsEnti } from "./wmgc.js";
import { httpMethod } from "../../api/getData.js";
import Vue from "vue";
import { Picker, Popup, DatetimePicker } from "vant";
Vue.use(Picker)
  .use(Popup)
  .use(DatetimePicker);
export default {
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#FFFFFF");
  },
  name: "wmgclxdf",
  data() {
    return {
      currentDate: new Date(2019, 5, 6),
      minDate: new Date(2019, 5, 6),
      show: false,
      ctype: "点位类型",
      ccode: "全部",
      date: "",
      mdatelist: [],
      mdatalist: [],
      names: [],
      names1: [""],
      columnsname: [],
      columnscode: [],
      maxHeight: "100%",
      scroll: {
        scroller: null
      },
      xList: [],
      xField: [],
      yList: []
    };
  },
  mounted() {
    // 高度
    var orderHight1 = document.documentElement.clientHeight;
    var orderWidth = document.documentElement.clientWidth;
    // var heightlist = orderHight1 - 50;
    // $("#all").css('height', heightlist + "px");
    $("#gide").css("height", orderHight1 + "px");
    var _this = this;
    setTimeout(() => {
      $("#gide").css("display", "none");
    }, 3000);
    _this.getDwlxList();

    this.maxHeight = orderHight1 - 200;
    this.scroll.scroller = createIScroller(".meal-table");
  },
  methods: {
    isChinese: function(str) {
      var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
      if (reg.test(str)) {
        return true;
      }
      return false;
    },
    showpopu() {
      this.show = true;
    },
    onConfirm(value, index) {
      this.ctype = value;
      this.ccode = this.columnscode[index];
      this.show = false;
      if (this.ccode == "全部") {
        this.getDwlxList();
      } else {
        //获取统计数据
        this.typeScoreStatistics();
      }
    },
    //点位名称
    getDwlxList: function() {
      var _this = this;
      var params = {};
      httpMethod
        .getDwlxList(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            _this.names = [];
            _this.names1 = [];
            _this.columnscode = ["全部"];
            _this.columnsname = ["全部"];
            for (var i = 1; i < res.dataList.length; i++) {
              _this.names.push(res.dataList[i].typename);
              _this.names1.push(res.dataList[i].typename);
              _this.columnscode.push(res.dataList[i].typecode);
              _this.columnsname.push(res.dataList[i].typename);
            }
            //获取统计数据
            _this.typeScoreStatistics();
          }
        })
        .catch(err => {});
    },
    //日期列表
    typeScoreStatistics: function() {
      var _this = this;
      var params = {
        type: _this.ccode,
        reportDate: _this.date
      };
      if (_this.ccode != "全部") {
        _this.names = [_this.ctype];
        _this.names1 = [_this.ctype];
      }
      httpMethod
        .typeScoreStatistics(params)
        .then(res => {
          console.log(res);
          if (res.success == "1") {
            _this.mdatalist = [];
            _this.xList = [];
            // for (var k = 0; k < _this.names1.length; k++) {
            //   var cname = _this.names1[k];

            //   for (var i = 0; i < res.dataList.length; i++) {
            //     if (_this.mdatelist.indexOf(res.dataList[i].name) == -1) {
            //       _this.mdatelist.push(res.dataList[i].name);
            //     }

            //     var datal = res.dataList[i].val;

            //     for (var j = 0; j < datal.length; j++) {
            //       if (cname == datal[j].name) {
            //         _this.mdatalist.push(datal[j].type_avg_score);
            //         _this.mdatalist.push(datal[j].dw_level);
            //       }
            //     }
            //   }
            // }
            //  console.log(_this.names1);
            var datalList = res.dataList;
            var oneArray = [];
            var twoArray = [];
            var map = {
              field_name: "statis_date",
              name: "评级点位",
              colspan: 1, //指定单元格 横向 跨越的 列数
              rowspan: 2 //指定单元格 纵向 跨越的 行数
            };
            oneArray.push(map);
            for (var l = 0; l < datalList.length; l++) {
              var sdate = datalList[l].name;
              var map1 = {
                field_name: "custom_field",
                name: sdate,
                colspan: 2, //指定单元格 横向 跨越的 列数
                rowspan: 1 //指定单元格 纵向 跨越的 行数
              };
              var map2 = {
                field_name: "custom_field",
                name: "得分",
                colspan: 1, //指定单元格 横向 跨越的 列数
                rowspan: 1 //指定单元格 纵向 跨越的 行数
              };
              var map3 = {
                field_name: "custom_field",
                name: "星级",
                colspan: 1,
                rowspan: 1
              };
              oneArray.push(map1);
              twoArray.push(map2);
              twoArray.push(map3);
            }
            _this.xList.push(oneArray);
            _this.xList.push(twoArray);
            _this.xField = [];
            _this.xField.push("statis_date");
            for (var q = 0; q < twoArray.length; q++) {
              _this.xField.push("area_name" + q);
            }
            console.log(_this.xField);
            _this.yList = [];
            var indexList = [];
            for (var k = 0; k < _this.names.length; k++) {
              var indexname = _this.names[k];
              var map = {};
              var keyindex = 0;
              for (var l = 0; l < datalList.length; l++) {
                var valList = datalList[l].val;
                var datename = datalList[l].name;
                var mapkey = _this.yList[l];

                for (var j = 0; j < valList.length; j++) {
                  var smallName = valList[j].name;
                  var type_avg_score = valList[j].type_avg_score; //得分
                  var dw_level = valList[j].dw_level; //星级
                  if (indexname == smallName) {
                    // console.log(keyindex);
                    var keyName = "area_name" + keyindex;
                    map[keyName] = type_avg_score;
                    keyindex++;
                    var keyName1 = "area_name" + keyindex;
                    map[keyName1] = dw_level;
                    keyindex++;
                    // map.statis_date = indexname;
                  }
                }
              }
              var mapkey = _this.xField[_this.xField.length - 1];
              // console.log(mapkey);
              map.statis_date = indexname;
              indexList.push(map);
            }
            this.yList = indexList;
            // console.log(indexList);
            // var ss = _this.mdatalist;

            // // console.log(_this.mdatalist);
            // // names1;
            // var pp = "";
          }
        })
        .catch(err => {});
    }
  },
  components: {}
};
</script>

<style lang="less" socped>
.gridtitleName {
  background: #f3f4f7;
  text-align: center;
  padding: 7px;
  font-size: 15px;
  color: #333333;
  width: 100%;
  line-height: 15px;
  box-sizing: border-box;
  border-bottom: 1px #ececec solid;
}

.griddate {
  background: #fffdcf;
  text-align: center;
  padding: 7px;
  font-size: 14px;
  color: #333333;
  width: 100%;
  line-height: 15px;
  box-sizing: border-box;
  border-right: 1px #ececec solid;
}

.value1 {
  text-align: center;
  font-size: 15px;
  color: #333333;
  width: 100%;
  line-height: 15px;
  padding: 7px;
  box-sizing: border-box;
  border-right: 1px #ececec solid;
  border-bottom: 1px #ececec solid;
}

.value2 {
  text-align: center;
  font-size: 15px;
  color: #333333;
  width: 100%;
  line-height: 15px;
  padding: 7px;
  box-sizing: border-box;
}
.pages-tables {
  -webkit-overflow-scrolling: touch;
  position: relative;
}
.rolling-table {
  height: 100%;
  font-size: 0.28rem;
  color: #86939a;
  background-color: #fff;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  position: relative;
  top: -1px;
  overflow: hidden;
}
.rows {
  position: relative;
  z-index: 3;
}
.cross {
  position: relative;
  z-index: 5;
  border-right: 2px solid #f3d6b4;
  background: #f3f4f8;
  div {
    word-break: break-all;
  }
}
.cross1 {
  background: #fefbce;
}

table td {
  border: 1px solid #f1f1f1;
  font-size: 0.32rem;
  background: #fff;
}
::-webkit-scrollbar {
  display: none;
}
.table {
  border-collapse: collapse;
  color: #666666;
  font-size: 0.32rem;
  border: 0px solid #000;
  min-height: 100%;
  text-align: center;
  td {
    //  border-bottom: 0.02rem solid #f1f1f1;
    // white-space:normal;
    // height: 0.66rem;
    // // line-height: 0.66rem;
    // padding: 0 0.2rem;
    // // width:50px;

    border-bottom: 0.02rem solid #eee;
    white-space: normal;
    word-break: keep-all;
    height: 0.86rem;
    line-height: 0.86rem;
    padding: 0 0.2rem;
  }
  th {
    text-align: center;
    color: #43484d;
    white-space: nowrap;
    height: 0.74rem;
    line-height: 0.74rem;
    padding: 0rem 0.3rem;
    // background-color: #f3f4f6;
    font-weight: normal;
    padding-bottom: 0;
    padding-top: 0;
    // border: 1px solid #f1f1f1;
  }
}
tr {
  position: relative;
  background-color: #fff;
}
.cols {
  max-width: 150px;
  background: #f3f4f8;
  border-right: 2px solid #f3d6b4;
}
</style>