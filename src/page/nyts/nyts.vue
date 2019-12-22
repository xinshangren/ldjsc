
<template>
  <ul style="margin-top: 75px;">
    <li class="li_class">
      <div style="position:relative;" @click="intentTwoLevel(1)">
        <div class="li_div_title1">煤炭</div>
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">企业数量总数</div>
        <div class="block_div_style">
          <div class="li_div_title3_red">{{dataArrList[0]}}</div>
          <div class="li_div_title2_red">家</div>
        </div>
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">工业产值总产值</div>
        <div class="block_div_style">
          <div class="li_div_title3_red">{{dataArrList[1]}}</div>
          <div class="li_div_title2_red">亿元</div>
        </div>
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">原煤产量总产量</div>
        <div class="block_div_style">
          <div class="li_div_title3_red">{{dataArrList[2]}}</div>
          <div class="li_div_title2_red">万吨</div>
        </div>
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">块碳</div>
        <div class="block_div_style">
          <div class="li_div_title3_red">{{dataArrList[3]}}</div>
          <div class="li_div_title2_red">万吨</div>
        </div>
      </div>

      <div style="position:relative;height:27px;margin-top:8px;">
        <div class="zdgc_lk_bg">晋城市能源局</div>
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
          <img src="../../assets/img/icon_duban.png" class="bottom_img_style" />
          <div class="bottom_div_font2">督办</div>
        </div>
      </div>
    </li>

    <li class="li_class">
      <div style="position:relative;" @click="intentTwoLevel(2)">
        <div class="li_div_title1">煤层气</div>
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">企业数量总数</div>

        <div class="block_div_style">
          <div class="li_div_title3_red">{{dataArrList[4]}}</div>
          <div class="li_div_title2_red">家</div>
        </div>
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">煤层气产量总产量</div>
        <div class="block_div_style">
          <div class="li_div_title3_red">{{dataArrList[5]}}</div>
          <div class="li_div_title2_red">亿立方米</div>
        </div>
      </div>
      <div style="position:relative;height:27px;margin-top:8px;">
        <div class="zdgc_lk_bg">晋城市能源局</div>
        <div class="zdgc_lk_bg_right">{{dataTime[4]}}</div>
      </div>

      <div class="hor_line_div"></div>
      <div class="block_div_style">
        <div style="width:50%;display:flex;">
          <img src="../../assets/img/icon_attention.png" class="bottom_img_style" />
          <div class="bottom_div_font1">关注</div>
        </div>
        <div class="ver_line_div"></div>
        <div style="width:50%;display:flex;">
          <img src="../../assets/img/icon_duban.png" class="bottom_img_style" />
          <div class="bottom_div_font2">督办</div>
        </div>
      </div>
    </li>

    <li class="li_class">
      <div style="position:relative;" @click="intentTwoLevel(3)">
        <div class="li_div_title1">新能源</div>
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">企业数量总数</div>
        <div class="block_div_style">
          <div class="li_div_title3_red">{{dataArrList[6]}}</div>
          <div class="li_div_title2_red">家</div>
        </div>
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">项目数量总数</div>
        <div class="block_div_style">
          <div class="li_div_title3_red">{{dataArrList[7]}}</div>
          <div class="li_div_title2_red">个</div>
        </div>
      </div>
      <div class="block_div_style" style="margin-top:5px;">
        <div class="li_div_title2">年度发电量总发电量</div>
        <div class="block_div_style">
          <div class="li_div_title3_red">{{dataArrList[8]}}</div>
          <div class="li_div_title2_red">万千瓦时</div>
        </div>
      </div>
      <div style="position:relative;height:27px;margin-top:8px;">
        <div class="zdgc_lk_bg">晋城市能源局</div>
        <div class="zdgc_lk_bg_right">{{dataTime[6]}}</div>
      </div>

      <div class="hor_line_div"></div>
      <div class="block_div_style">
        <div style="width:50%;display:flex;">
          <img src="../../assets/img/icon_attention.png" class="bottom_img_style" />
          <div class="bottom_div_font1">关注</div>
        </div>
        <div class="ver_line_div"></div>
        <div style="width:50%;display:flex;">
          <img src="../../assets/img/icon_duban.png" class="bottom_img_style" />
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
  activated() {
    //返回保留页面记录
    document.querySelector("body").setAttribute("style", "background:#F7F7F7");
  },
  data() {
    return {
      dataArrList: ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
      dataTime: []
    };
  },
  mounted() {
    this.getListData();
  },
  methods: {
    getListData: function() {
      var params = {
        targetIds: "68，69，71，73，75，76，78，79，81"
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
              if (targetId == "69") {
                if (valuen != null) {
                  valuen = parseFloat(valuen / 10000).toFixed(2);
                }
              }
              if (targetId == "76") {
                if (valuen != null) {
                  valuen = parseFloat(valuen / 10000).toFixed(2);
                }
              }
              this.dataArrList.push(valuen);
              var updateTime = dataList[ent].updateTime;
              updateTime = updateTime.substring(0, 11);
              this.dataTime.push(updateTime);
            }
            // console.log(this.dataArrList);
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
      //     path: "/nygm/nygmmt/nygmmt"
      //   });
      // } else if (flag == 2) {
      //   this.$router.push({
      //     path: "/nygm/nygmmcq/nygmmcq"
      //   });
      // } else if (flag == 3) {
      //   this.$router.push({
      //     path: "/nygm/nygmxny/nygmxny"
      //   });
      // }
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/zhibiao.css";
</style>
