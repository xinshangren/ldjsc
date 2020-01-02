<template>
<div>
<div class="threeTab" >
    <div class="oneTab">
        <div class="fontStyle">集团</div>
        <div style="display: flex;margin-left: 50%;">
            <div style="font-size: 24px;color: #2796e7;">5</div>
            <div style="font-size: 14px;color: #333333;line-height: 39px;">个</div>
        </div>
    </div>
    <div class="twoTab">
        <div class="fontStyle">企业</div>
        <div style="display: flex;margin-left: 50%;">
            <div style="font-size: 24px;color: #46e1c5;">130</div>
            <div style="font-size: 14px;color: #333333;line-height: 39px;">个</div>
        </div>
    </div>
    <div class="thirdTab">
        <div class="fontStyle">项目</div>
        <div style="display: flex;margin-left: 50%;">
            <div style="font-size: 24px;color: #33d1f8;">32</div>
            <div style="font-size: 14px;color: #333333;line-height: 39px;">个</div>
        </div>
    </div>
</div>
    <div class="dateSelect">
        <div class="sx"></div>
        <div class="tj_z">煤炭行业产销情况统计</div>
        <div class="timeYear">2019</div>
        <div class="timeYear">年</div>
        <img class="xl" src="../../../../../assets/img/air_data_arrow.png"/>
    </div>
    <div style="display:flex;width:100%;height: 70px;padding:20px;">
        <div style="width:46%;background-color: #e9f8ff;">
            <div style="display:flex;margin-left: 20px;margin-top: 3px;">
                <div style="color: #3ca1ec;font-size: 25px;">4525414</div>
                <div style="margin-top: 10px;">万元</div>
            </div>
            <div style="margin-left: 20px;">工业总产值</div>
        </div>
        <div style="width:46%;background-color: #e9f8ff;">
            <div style="display:flex;margin-left: 20px;margin-top: 3px;">
                <div style="color: #46e1c5;font-size: 25px;">4525414</div>
                <div style="margin-top: 10px;">万元</div>
            </div>
            <div style="margin-left: 20px;">现价销售产值</div>
        </div>
    </div>
    <!--产值图表-->
	<div id="nyts_nymtgk_echars_id" style="width: 100%;height: 270px;">
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

methods:{
    

    
}
}

</script>