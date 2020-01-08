<template style="background: #ffffff;">
  <div>
    <div
      style="display: flex;line-height: 16px;vertical-align: bottom;margin-left: 5%;height: 50px;white-space: nowrap;margin-right: 10px;width: 95%; overflow:scroll;">
      <div
        style="height:16px;margin-top: 14px; color: #333333;font-size: 14px;border-left: 2px #3ca1ec solid;padding-left: 20px;">
        评级点位类型得分明细
      </div>
      <div style="color:#3ca1ec;font-size: 15px;height: 16px;margin-top: 14px; display: flex;margin-left: 5%;"
        @click="showpopu(1)">
        {{ctype}}
        <img src="../../assets/img/bad.png" style="height: 8px;margin-top: 7px;">
      </div>
    </div>
    <!-- <div style="width: 100%;height:30px;color: #ffffff; line-height:30px;vertical-align: middle;background: rgb(153, 153, 153,0.8); text-align: right;">
     <-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 左右滑动查看更多月份&nbsp;&nbsp;          
    </div> -->
    <van-popup v-model="show" position="bottom" style="overflow:hidden;background:rgb(243, 243, 243);">
      <van-picker :columns="columnsname" :values="1" show-toolbar @cancel="show = false" @confirm="onConfirm" />
    </van-popup>

    <div  style="display: flex;width: 460px;overflow: scroll;">

      <div style="width: 140px;border-right: 2px #FFD59F solid;background: #F3F4F7;">
        <div style="height: 60px;line-height: 60px;vertical-align: middle;text-align: center;border-bottom: 1px #ECECEC solid ;">
          评级点位
        </div>
        <div v-for="(value,index) in names" :key="index" class="gridtitleName" style="">{{value}}</div>

      </div>

      <div style="width: 280px;overflow: scroll;">
        <div style="width: 650px;display:flex;">
          <div style="width: 140px;margin-left: -140px;" class="gridtitleName">评级点位</div>
          <div style="width: 100px;margin: auto 0;" class="griddate" v-for="(valued,indexd) in mdatelist" :key="indexd">
            {{valued}}</div>
        </div>
        <div style="width: 650px;display:flex;">
          <div style="width: 140px;margin-left: -140px;" class="gridtitleName">-</div>
          <div style="width: 100px;display: flex;" v-for="(valued,indexd) in mdatelist" :key="indexd">
            <div style="width: 50px;margin: auto 0;" class="griddate">得分</div>
            <div style="width: 50px;margin: auto 0;" class="griddate">星级</div>
          </div>
        </div>
        <div id="mygrid" ref="mygrid" style="width: 650px;display:flex;" v-for="(value1,index1) in names1" :key="index1">
          <div style="width: 140px;margin-left: -140px;" class="gridtitleName">{{value1}}</div>
          <div style="width: 50px;" class="value1" v-for="(value2,index2) in mdatalist"
            v-if="index2>=index1*10&&index2<(index1+1)*10" :key="index2">
            <img v-if="value2==10" src="../../assets/img/xx-r.png" style="height: 12px;">
            <img v-if="value2==9" src="../../assets/img/xx-p.png" style="height: 12px;">
            <img v-if="value2==8" src="../../assets/img/xx-y.png" style="height: 12px;">
            <img v-if="value2==7" src="../../assets/img/xx-g.png" style="height: 12px;">
            <img v-if="value2<7" src="../../assets/img/xx-b.png" style="height: 12px;">
            <div v-if="value2>11||value2=='-'"> {{value2}}</div>

          </div>
        </div>
      </div>
      <img id="gide" src="../../assets/img/hdckgd-2.png" style="position: absolute;right: 0;">
    </div>
  </div>
</template>
<script>
  import echarts from "echarts";
  import { echarsEnti } from "./wmgc.js";
  import { httpMethod } from "../../api/getData.js";
  import Vue from 'vue';
  import { Picker, Popup, DatetimePicker } from 'vant';
  Vue.use(Picker).use(Popup).use(DatetimePicker);
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
        ctype: '点位类型',
        ccode: '全部',
        date: '',
        mdatelist: [],
        mdatalist: [],
        names: [],
        names1: [''],
        columnsname: [],
        columnscode: []
      };
    },
    mounted() {
      // 高度
      var orderHight1 = document.documentElement.clientHeight;
      var orderWidth = document.documentElement.clientWidth;
      // var heightlist = orderHight1 - 50;
      // $("#all").css('height', heightlist + "px");
      $("#gide").css('height', orderHight1 + "px");
      var _this = this;
      setTimeout(() => {
        $("#gide").css('display', 'none');
      }, 3000);
      _this.getDwlxList();
    },
    methods: {
      showpopu() {
        this.show = true;

      },
      onConfirm(value, index) {
        this.ctype = value;
        this.ccode = this.columnscode[index];
        this.show = false;
        if (this.ccode == '全部') {
          this.getDwlxList();
        } else {
          //获取统计数据
          this.typeScoreStatistics();
        }

      },
      // 
      getDwlxList: function () {
        var _this = this;
        var params = {
        };
        httpMethod
          .getDwlxList(params)
          .then(res => {
            console.log(res);
            if (res.success == "1") {
              _this.names = [];
              _this.names1 = [];
              _this.columnscode = ['全部']
              _this.columnsname = ['全部']
              for (var i = 1; i < res.dataList.length; i++) {
                _this.names.push(res.dataList[i].typename)
                _this.names1.push(res.dataList[i].typename)
                _this.columnscode.push(res.dataList[i].typecode)
                _this.columnsname.push(res.dataList[i].typename)
              }
              //获取统计数据
              _this.typeScoreStatistics();
            }
          })
          .catch(err => {

          });
      },
      // 
      typeScoreStatistics: function () {
        var _this = this;
        var params = {
          type: _this.ccode,
          reportDate: _this.date
        };
        if (_this.ccode != '全部') {
          _this.names = [ _this.ctype];
          _this.names1 = [_this.ctype];
        }
        httpMethod
          .typeScoreStatistics(params)
          .then(res => {
            console.log(res);
            if (res.success == "1") {
              _this.mdatalist = [];
              for (var k = 0; k < _this.names1.length; k++) {
                var cname = _this.names1[k];

                for (var i = 0; i < res.dataList.length; i++) {
                  if (_this.mdatelist.indexOf(res.dataList[i].name) == -1) {
                    _this.mdatelist.push(res.dataList[i].name);
                  }

                  var datal = res.dataList[i].val

                  for (var j = 0; j < datal.length; j++) {
                    if (cname == datal[j].name) {
                      _this.mdatalist.push(datal[j].type_avg_score);
                      _this.mdatalist.push(datal[j].dw_level);
                    }
                  }
                }
              }
              var ss = _this.mdatalist;
              var pp = '';
            }
          })
          .catch(err => {

          });
      },
    },
    components: {

    }
  };
</script>

<style socped>
  .gridtitleName {
    background: #F3F4F7;
    text-align: center;
    padding: 7px;
    font-size: 15px;
    color: #333333;
    width: 100%;
    line-height: 15px;
    box-sizing: border-box;
    border-bottom: 1px #ECECEC solid;
  }

  .griddate {
    background: #FFFDCF;
    text-align: center;
    padding: 7px;
    font-size: 14px;
    color: #333333;
    width: 100%;
    line-height: 15px;
    box-sizing: border-box;
    border-right: 1px #ECECEC solid;
  }

  .value1 {
    text-align: center;
    font-size: 15px;
    color: #333333;
    width: 100%;
    line-height: 15px;
    padding: 7px;
    box-sizing: border-box;
    border-right: 1px #ECECEC solid;
    border-bottom: 1px #ECECEC solid;
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
</style>