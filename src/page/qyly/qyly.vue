<template>
  <ul style="margin-top: 75px; ">
    <li class="li_class">
      <div style="position:relative;" @click="intentTwoLevel(1)">
        <div class="li_div_title1">旅游景区</div>
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">景区数量总数</div>
        <div class="block_div_style">
            <div class="li_div_title3_red">{{dataArrList[0]}}</div>
            <div class="li_div_title2_red">个</div>
          </div>
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">A级景区数量总数</div>
           <div class="block_div_style">
            <div class="li_div_title3_red">{{dataArrList[1]}}</div>
            <div class="li_div_title2_red">个</div>
          </div>
      </div>
      <div class="block_div_style" style="margin-top:8px;">
        <div class="li_div_title2" >5A景区数量</div>
          <div class="block_div_style">
            <div class="li_div_title3_red">{{dataArrList[2]}}</div>
            <div class="li_div_title2_red">个</div>
          </div>
      </div>
      <div class="block_div_style" style="margin-top:8px;">
        <div class="li_div_title2" >4A景区数量</div>
          <div class="block_div_style">
            <div class="li_div_title3_red">{{dataArrList[3]}}</div>
            <div class="li_div_title2_red">个</div>
          </div>
      </div>
       <div class="block_div_style" style="margin-top:8px;">
        <div class="li_div_title2" >3A景区数量</div>
         <div class="block_div_style">
            <div class="li_div_title3_red">{{dataArrList[4]}}</div>
            <div class="li_div_title2_red">个</div>
          </div>
      </div>

      <div style="position:relative;height:27px;margin-top:8px;">
        <div class="zdgc_lk_bg">晋城市文旅局</div>
        <div class="zdgc_lk_bg_right">{{dataTime[0]}}</div>
      </div>

      <div class="hor_line_div"></div>
    <div class="block_div_style">
        <div style="width:50%;display:flex;">
          <img src="../../assets/img/icon_attention.png" class="bottom_img_style" />
          <div class="bottom_div_font1">关注</div>
        </div>
        <div class="ver_line_div"></div>
        <div style="width:50%;display:flex;">
          <img
            src="../../assets/img/icon_duban.png"
            class="bottom_img_style"
          />
          <div class="bottom_div_font2">督办</div>
        </div>
      </div>
    </li>

    <li class="li_class">
      <div style="position:relative;" @click="intentTwoLevel(2)">
        <div class="li_div_title1">旅游示范村</div>
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">示范村数量总数</div>
       <div class="block_div_style">
            <div class="li_div_title3_red">{{dataArrList[5]}}</div>
            <div class="li_div_title2_red">个</div>
          </div>
      </div>
      <div style="position:relative;height:27px;margin-top:8px;">
        <div class="zdgc_lk_bg">晋城市文旅局</div>
        <div class="zdgc_lk_bg_right">{{dataTime[5]}}</div>
      </div>

      <div class="hor_line_div"></div>
     <div class="block_div_style">
        <div style="width:50%;display:flex;">
          <img src="../../assets/img/icon_attention.png" class="bottom_img_style" />
          <div class="bottom_div_font1">关注</div>
        </div>
        <div class="ver_line_div"></div>
        <div style="width:50%;display:flex;">
          <img
            src="../../assets/img/icon_duban.png"
            class="bottom_img_style"
          />
          <div class="bottom_div_font2">督办</div>
        </div>
      </div>
    </li>

  </ul>
</template>
<script>
import { httpMethod } from "../../api/getData.js";
export default {
  name: "zdgz",
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#F7F7F7");
  },
  activated(){//返回保留页面记录
   document.querySelector("body").setAttribute("style", "background:#F7F7F7");
  },
  data() {
    return {
       dataArrList:["0","0","0","0","0","0"],
       dataTime:[]
    };
  },
  mounted() {
    this.getListData();
  },
  methods: {
    getListData: function() {
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
            this.dataArrList=[];
            for (var ent in dataList) {
              var targetId = dataList[ent].targetId;
              var valuen = dataList[ent].valuen;
               this.dataArrList.push(valuen);
                var updateTime=dataList[ent].updateTime;
              updateTime=updateTime.substring(0,11);
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

<style scoped>
@import "../../assets/css/zhibiao.css";
</style>
