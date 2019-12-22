
<template>
  <ul style="margin-top: 75px;">
    <li class="li_class">
      <div style="position:relative;" @click="intentTwoLevel(1)">
        <div class="li_div_title1">全市生产总值</div>
        
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">完成情况</div>
         <div class="block_div_style">
            <div class="li_div_title3_red">{{dataArrList[0]}}</div>
            <div class="li_div_title2_red">亿元</div>
          </div>
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">同比增长</div>
           <div class="block_div_style">
            <div class="li_div_title3_red">{{dataArrList[1]}}</div>
            <div class="li_div_title2_red">%</div>
          </div>
      </div>

      <div style="position:relative;height:27px;margin-top:8px;">
        <div class="zdgc_lk_bg">晋城市统计局</div>
        <div class="zdgc_lk_bg_right">{{dataTime[0]}}</div>
      </div>

      <div class="hor_line_div"></div>
      <div class="block_div_style">
        <div style="width:50%;display:flex;" @click="toast()">
          <img src="../../assets/img/icon_attention.png" class="bottom_img_style" />
          <div class="bottom_div_font1">关注</div>
        </div>
        <div class="ver_line_div"></div>
        <div style="width:50%;display:flex;" @click="toast()">
          <img src="../../assets/img/icon_duban.png" class="bottom_img_style" />
          <div class="bottom_div_font2">督办</div>
        </div>
      </div>
    </li>

    <li class="li_class">
      <div style="position:relative;" @click="intentTwoLevel(2)">
        <div class="li_div_title1">规模以上工业增加值</div>
        
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">同比增长</div>
         <div class="block_div_style">
            <div class="li_div_title3_red">{{dataArrList[2]}}</div>
            <div class="li_div_title2_red">%</div>
          </div>
      </div>

      <div style="position:relative;height:27px;margin-top:8px;">
        <div class="zdgc_lk_bg">晋城市统计局</div>
        <div class="zdgc_lk_bg_right">{{dataTime[1]}}</div>
      </div>

      <div class="hor_line_div"></div>
      <div class="block_div_style">
        <div style="width:50%;display:flex;" @click="toast()">
          <img src="../../assets/img/icon_attention.png" class="bottom_img_style" />
          <div class="bottom_div_font1">关注</div>
        </div>
        <div class="ver_line_div"></div>
        <div style="width:50%;display:flex;" @click="toast()">
          <img src="../../assets/img/icon_duban.png" class="bottom_img_style" />
          <div class="bottom_div_font2">督办</div>
        </div>
      </div>
    </li>

    <li class="li_class">
      <div style="position:relative;" @click="intentTwoLevel(3)">
        <div class="li_div_title1">一般公共预算收入</div>
        
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">完成情况</div>
        <div class="block_div_style">
            <div class="li_div_title3_red">{{dataArrList[3]}}</div>
            <div class="li_div_title2_red">万元</div>
          </div>
      </div>

      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">同比增长</div>
          <div class="block_div_style">
            <div class="li_div_title3_red">{{dataArrList[4]}}</div>
            <div class="li_div_title2_red">%</div>
          </div>
      </div>

      <div style="position:relative;height:27px;margin-top:8px;">
        <div class="zdgc_lk_bg">晋城市统计局</div>
        <div class="zdgc_lk_bg_right">{{dataTime[2]}}</div>
      </div>

      <div class="hor_line_div"></div>
      <div class="block_div_style">
        <div style="width:50%;display:flex;" @click="toast()">
          <img src="../../assets/img/icon_attention.png" class="bottom_img_style" />
          <div class="bottom_div_font1">关注</div>
        </div>
        <div class="ver_line_div"></div>
        <div style="width:50%;display:flex;" @click="toast()">
          <img src="../../assets/img/icon_duban.png" class="bottom_img_style" />
          <div class="bottom_div_font2">督办</div>
        </div>
      </div>
    </li>

    <li class="li_class">
      <div style="position:relative;" @click="intentTwoLevel(4)">
        <div class="li_div_title1">固定资产投资</div>
        
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">完成情况</div>
         <div class="block_div_style">
            <div class="li_div_title3_red">{{dataArrList[5]}}</div>
            <div class="li_div_title2_red">万元</div>
          </div>
      </div>

      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">同比增长</div>
         <div class="block_div_style">
            <div class="li_div_title3_red">{{dataArrList[6]}}</div>
            <div class="li_div_title2_red">%</div>
          </div>
      </div>

      <div style="position:relative;height:27px;margin-top:8px;">
        <div class="zdgc_lk_bg">晋城市统计局</div>
        <div class="zdgc_lk_bg_right">{{dataTime[3]}}</div>
      </div>

      <div class="hor_line_div"></div>
      <div class="block_div_style">
        <div style="width:50%;display:flex;" @click="toast()">
          <img src="../../assets/img/icon_attention.png" class="bottom_img_style" />
          <div class="bottom_div_font1">关注</div>
        </div>
        <div class="ver_line_div"></div>
        <div style="width:50%;display:flex;" @click="toast()">
          <img src="../../assets/img/icon_duban.png" class="bottom_img_style" />
          <div class="bottom_div_font2">督办</div>
        </div>
      </div>
    </li>

    <li class="li_class">
      <div style="position:relative;" @click="intentTwoLevel(5)">
        <div class="li_div_title1">社会消费品零售总额</div>
        
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">完成情况</div>
           <div class="block_div_style">
            <div class="li_div_title3_red">{{dataArrList[7]}}</div>
            <div class="li_div_title2_red">万元</div>
          </div>
      </div>

      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">同比增长</div>
        <div class="block_div_style">
            <div class="li_div_title3_red">{{dataArrList[8]}}</div>
            <div class="li_div_title2_red">%</div>
          </div>
      </div>

      <div style="position:relative;height:27px;margin-top:8px;">
        <div class="zdgc_lk_bg">晋城市统计局</div>
        <div class="zdgc_lk_bg_right">{{dataTime[4]}}</div>
      </div>

      <div class="hor_line_div"></div>
      <div class="block_div_style">
        <div style="width:50%;display:flex;" @click="toast()">
          <img src="../../assets/img/icon_attention.png" class="bottom_img_style" />
          <div class="bottom_div_font1">关注</div>
        </div>
        <div class="ver_line_div"></div>
        <div style="width:50%;display:flex;" @click="toast()">
          <img src="../../assets/img/icon_duban.png" class="bottom_img_style" />
          <div class="bottom_div_font2">督办</div>
        </div>
      </div>
    </li>

    <li class="li_class">
      <div style="position:relative;" @click="intentTwoLevel(6)">
        <div class="li_div_title1">海关进出口总额</div>
        
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">完成情况</div>
       <div class="block_div_style">
            <div class="li_div_title3_red">{{dataArrList[9]}}</div>
            <div class="li_div_title2_red">万元</div>
          </div>
      </div>

      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">同比增长</div>
         <div class="block_div_style">
            <div class="li_div_title3_red">{{dataArrList[10]}}</div>
            <div class="li_div_title2_red">%</div>
          </div>
      </div>

      <div style="position:relative;height:27px;margin-top:8px;">
        <div class="zdgc_lk_bg">晋城市统计局</div>
        <div class="zdgc_lk_bg_right">{{dataTime[5]}}</div>
      </div>

      <div class="hor_line_div"></div>
      <div class="block_div_style">
        <div style="width:50%;display:flex;" @click="toast()">
          <img src="../../assets/img/icon_attention.png" class="bottom_img_style" />
          <div class="bottom_div_font1">关注</div>
        </div>
        <div class="ver_line_div"></div>
        <div style="width:50%;display:flex;" @click="toast()">
          <img src="../../assets/img/icon_duban.png" class="bottom_img_style" />
          <div class="bottom_div_font2">督办</div>
        </div>
      </div>
    </li>

    <li class="li_class">
      <div style="position:relative;" @click="intentTwoLevel(7)">
        <div class="li_div_title1">居民人均可支配收入</div>
        
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">居民人均可支配收入</div>
      </div>
      <div class="block_div_style" style="margin-top:8px;">
        <div class="li_div_title2">完成情况</div>
        <div class="block_div_style"> <div class="li_div_title3_red">{{dataArrList[11]}}</div>  <div class="li_div_title2_red">元</div></div>
      </div>
      <div class="block_div_style" style="margin-top:8px;">
        <div class="li_div_title2" >同比增长</div>
        <div class="block_div_style"> <div class="li_div_title3_red">{{dataArrList[12]}}</div>  <div class="li_div_title2_red">%</div></div>
      </div>

      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">城镇居民人均可支配收入</div>
      </div>
      <div class="block_div_style" style="margin-top:8px;">
        <div class="li_div_title2" >完成情况</div>
        <div class="block_div_style"> <div class="li_div_title3_red">{{dataArrList[13]}}</div>  <div class="li_div_title2_red">元</div></div>
      </div>
      <div class="block_div_style" style="margin-top:8px;">
        <div class="li_div_title2" >同比增长</div>
           <div class="block_div_style"> <div class="li_div_title3_red">{{dataArrList[14]}}</div>  <div class="li_div_title2_red">%</div></div>
      </div>

      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">乡村居民人均可支配收入</div>
      </div>
      <div class="block_div_style" style="margin-top:8px;">
        <div class="li_div_title2" >完成情况</div>
       <div class="block_div_style"> <div class="li_div_title3_red">{{dataArrList[15]}}</div>  <div class="li_div_title2_red">元</div></div>
      </div>
      <div class="block_div_style" style="margin-top:8px;">
        <div class="li_div_title2" >同比增长</div>
        <div class="block_div_style"> <div class="li_div_title3_red">{{dataArrList[16]}}</div>  <div class="li_div_title2_red">%</div></div>
      </div>

      <div style="position:relative;height:27px;margin-top:8px;">
        <div class="zdgc_lk_bg">晋城市统计局</div>
        <div class="zdgc_lk_bg_right">{{dataTime[6]}}</div>
      </div>

      <div class="hor_line_div"></div>
      <div class="block_div_style">
        <div style="width:50%;display:flex;" @click="toast()">
          <img src="../../assets/img/icon_attention.png" class="bottom_img_style" />
          <div class="bottom_div_font1">关注</div>
        </div>
        <div class="ver_line_div"></div>
        <div style="width:50%;display:flex;" @click="toast()">
          <img src="../../assets/img/icon_duban.png" class="bottom_img_style" />
          <div class="bottom_div_font2">督办</div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
//import echarts from "echarts";
import { httpMethod } from "../../api/getData.js";
export default {
  name: "jjyx",
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  activated() {
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#F1F4F6");
  },
  data() {
    return {
      dataArrList:["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
      dataTime:[]
    };
  },
  mounted() {
    this.getListData();
  },
  methods: {
    toast: function () {
        this.$toast('功能开发中');
      },
    //市生产总值：24完成情况，26同比增长//规模以上工业增加值：同比增长29//一般公共预算收入：完成情况33，同比35//固定资产投资：完成37，同比39
    //社会消费品零售总额：完成40，同比42//海关进出口：完成44同比46//居民人均可支配收入48，49，50，51，52，53
    getListData: function() {
      var params = {
        targetIds:
          "24，26，29，33，35，37，39，40，42，44，46，48，49，50，51，52，53"
      };

      //获取数据
      httpMethod
        .findByTargetIds(params)
        .then(res => {
          console.log(res);
          var code = res.success;
          if (code == "1") {
            var dataList = res.data;
            this.dataArrList=[];
            for (var ent in dataList) {
              var targetId = dataList[ent].targetId;
              var valuen = dataList[ent].valuen;
              var updateTime=dataList[ent].updateTime;

              updateTime=updateTime.substring(0,11)
               this.dataArrList.push(valuen);
               this.dataTime.push(updateTime);
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //跳转二级页面
    intentTwoLevel: function(flag) {
      // if (flag == 1) {
      //   this.$router.push({
      //     path: "/jjyx/jjyxqssczz/jjyxqssczz"
      //   });
      // } else if (flag == 2) {
      //   this.$router.push({
      //     path: "/jjyx/jjyxgmysgyzjz/jjyxgmysgyzjz"
      //   });
      // } else if (flag == 3) {
      //   this.$router.push({
      //     path: "/jjyx/jjyxybggyssr/jjyxybggyssr"
      //   });
      // } else if (flag == 4) {
      //   this.$router.push({
      //     path: "/jjyx/jjyxgdzctz/jjyxgdzctz"
      //   });
      // } else if (flag == 5) {
      //   this.$router.push({
      //     path: "/jjyx/jjyxshxfplsze/jjyxshxfplsze"
      //   });
      // } else if (flag == 6) {
      //   this.$router.push({
      //     path: "/jjyx/jjyxhgjckze/jjyxhgjckze"
      //   });
      // } else if (flag == 7) {
      //   this.$router.push({
      //     path: "/jjyx/jjyxjmrjkzpsr/jjyxjmrjkzpsr"
      //   });
      // }
    }
  }
};
</script>
<style scoped>
@import "../../assets/css/zhibiao.css";
</style>
