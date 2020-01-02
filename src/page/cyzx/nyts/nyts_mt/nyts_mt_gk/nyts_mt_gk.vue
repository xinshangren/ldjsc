<template>
<div>
<div class="threeTab" >
    <div class="oneTab">
        <div class="fontStyle">集团</div>
        <div style="display: flex;margin-left: 50%;">
            <div id="nyts_mt_gk_jts_count_id" style="font-size: 20px;color: #2796e7;">5</div>
            <div style="font-size: 14px;color: #333333;line-height: 35px;">个</div>
        </div>
    </div>
    <div class="twoTab">
        <div class="fontStyle">企业</div>
        <div style="display: flex;margin-left: 50%;">
            <div id="nyts_mt_gk_qys_count_id" style="font-size: 20px;color: #46e1c5;">130</div>
            <div style="font-size: 14px;color: #333333;line-height: 35px;">个</div>
        </div>
    </div>
    <div class="thirdTab">
        <div class="fontStyle">项目</div>
        <div style="display: flex;margin-left: 50%;">
            <div  id="nyts_mt_gk_pm_count_id" style="font-size: 20px;color: #33d1f8;">32</div>
            <div style="font-size: 14px;color: #333333;line-height: 35px;">个</div>
        </div>
    </div>
</div>
    <div class="dateSelect">
        <div class="sx"></div>
        <div class="tj_z">煤炭行业产销情况统计</div>
        <div class="timeYear" >2019</div>
        <div class="timeYear">年</div>
        <img class="xl" src="../../../../../assets/img/air_data_arrow.png"/>
    </div>
    <div style="display:flex;width:100%;height: 70px;padding:10px;">
        <div style="width:46%;background-color: #e9f8ff;">
            <div style="display:flex;margin-left: 30px;margin-top: 12px;">
                <div id="nyts_mt_gk_gyzcz_count_id" style="color: #3ca1ec;font-size: 16px;">4525414</div>
                <div style="margin-top: 5px;font-size: 12px;">亿元</div>
            </div>
            <div style="margin-left: 30px;font-size: 12px;">工业总产值</div>
        </div>
        <div style="width:46%;background-color: #e9f8ff;">
            <div style="display:flex;margin-left: 30px;margin-top: 12px;">
                <div id="nyts_mt_gk_xjxscz_count_id" style="color: #46e1c5;font-size: 16px;">4525414</div>
                <div style="margin-top: 5px;font-size: 12px;">亿元</div>
            </div>
            <div style="margin-left: 30px;font-size: 12px;">现价销售产值</div>
        </div>
    </div>
    <!--产值图表-->
	<div ref="nyts_nymtgk_echars_id" style="width: 100%;height: 270px;">
	</div>
</div>
</template>

<style>
@import "../../../../../page/cyzx/nyts/nyts_mt/nyts_mt_gk/nyts_mt_gk.css";
@import "../../../../../page/zdgz/hbgj/hbgj_air/hbgj_air_ssgk/hbgj_air_ssgk.css";
@import "../../../../../assets/css/frozenui.css";
</style>
<script>
import echarts from "echarts";
import $ from "jquery";
import { httpMethod } from "../../../../../api/getData.js";
import { nytsMtGkJs } from "../../../../../page/cyzx/nyts/nyts_mt/nyts_mt_gk/nyts_mt_gk.js";

export default {
    data(){
    return {
        
        
     };
    },
    mounted() {
        this.getMtTjProduction();

        this.getMtTjQuantity();
    },
    methods:{
       
      
        //能源煤炭统计产值
        getMtTjProduction: function() {
            var params = {
            //dateType: "年",
            year: "2019"
            };

            //获取数据
            httpMethod.getMtTjProduction(params).then(ret => {
                console.log(ret+"aaaa");
                if(ret != null) {
				var isSuccess = ret.success;
				var message = ret.msg;
				var total = ret.total;
				if(isSuccess != null && isSuccess == '1') {
					var tjs = ret.tjs;
					if(tjs.length > 0) {
						var gyzcz = tjs[0].gyzcz; //工业总产值
						var xscz = tjs[0].xscz; //现价销售产值
						if(gyzcz != '-') {
							$('#nyts_mt_gk_gyzcz_count_id').html(parseFloat(gyzcz / 10000).toFixed(2));
						} else {
							$('#nyts_mt_gk_gyzcz_count_id').html("-");
						}
						if(xscz != '-') {
							$('#nyts_mt_gk_xjxscz_count_id').html(parseFloat(xscz / 10000).toFixed(2));
						} else {
							$('#nyts_mt_gk_xjxscz_count_id').html("-");
						}
					}
					var tjt = ret.tjt;
                    //调用统计图
					this.showMtgk_echar1(echarts,this.$refs.nyts_nymtgk_echars_id,tjt);
				} else {
                    console.log(message);
				}
			} else {
                console.log("请求超时");
			}

            }).catch(err => {
                console.log("getMtTjProduction出错");
            });
        },
        //显示统计图
        showMtgk_echar1: function(echarts,id,data){
            nytsMtGkJs.showMtgk_echar1(echarts,id,data);
        },
       //能源煤炭统计数量
       getMtTjQuantity: function(){
            var params = {
            //dateType: "年",
            year: "2019"
            };

            //获取数据
            httpMethod.getMtTjQuantity(params).then(ret => {
                console.log('能源煤炭统计数量------------');
			    console.log(ret);
			if(ret != null) {
				var isSuccess = ret.success;
				var message = ret.msg;
				var total = ret.total;
				if(isSuccess != null && isSuccess == '1') {
					var jts = ret.jts;
					var jts1 = jts.jts; //集团数
					var qys = jts.qys; //企业数
					var xms = jts.xms; //项目数
					$('#nyts_mt_gk_jts_count_id').html(jts1);
					$('#nyts_mt_gk_qys_count_id').html(qys);
					$('#nyts_mt_gk_pm_count_id').html(xms);
				} else {
					console.log(message);
				}
			} else {
				console.log("请求超时");
			}

            }).catch(err => {
                console.log("getMtTjQuantity出错");
            });
       },
    
    }
}

</script>