<style>
    .xny_qyxq_qyxzImg {
        height: 20px;
    }

    .xny_qyxq_qygmImg {
        height: 20px;
    }

    .xny_qyxq_qylxImg {
        height: 20px;
    }

    .mcq_qyxq_icon {
        height: 20px;
    }

    .wry_tj_table_title_p {
        font-size: 16px;
        text-align: center;
        color: #ffffff;
        padding: 11px 0px 11px 0px;
        margin: 0 auto;
        writing-mode: tb-rl;
    }

    .trigger {
        text-align: center;
    }

    tr {
        height: 40px;
    }
</style>
<template>
    <div style="margin-top:45px;overflow:hidden;background: rgb(247, 247, 247);">
        <div style="background:#ffffff;height:440px;width:100%;margin-top:5px;">
            <div style="margin: 10px 20px 10px 20px; padding-top:10px;">
                <div style="font-weight: 600; font-size: 17px;  color: #2796e7;">{{proDetail.pro_name}}</div>
                <div style="margin-top: 15px;">
                    <div style="min-height: 60px;margin-top: 15px;">
                        <div style="width: 50%;float: left;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon28.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">设计工程量</div>
                            </div>
                            <div>
                                <span v-if="proDetail.design_quantity != null && proDetail.design_quantity !== '' "
                                    style="font-size: 16px;">{{proDetail.design_quantity}}M</span>
                                <span v-else style="font-size: 16px;">0M</span>
                            </div>
                        </div>
                        <div style="width: 50%;float: right;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon29.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">本年计划工程量</div>
                            </div>
                            <div>
                                <span v-if="proDetail.gcl_year_plan != null && proDetail.gcl_year_plan !== '' "
                                    style="font-size: 16px;">{{proDetail.gcl_year_plan}}M</span>
                                <span v-else style="font-size: 16px;">0M</span>
                            </div>
                        </div>
                    </div>
                    <div style="min-height: 60px;">
                        <div style="width: 50%;float: left;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon30.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">设计能力</div>
                            </div>
                            <div>
                                <span v-if="proDetail.design_capability != null && proDetail.design_capability !== '' "
                                    style="font-size: 16px;">{{proDetail.design_capability}}万吨</span>
                                <span v-else style="font-size: 16px;">0万吨</span>
                            </div>
                        </div>
                        <div style="width: 50%;float: right;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon31.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">建设性质</div>
                            </div>
                            <div>
                                <span style="font-size: 16px;">{{proDetail.pro_nature}}</span>
                            </div>
                        </div>
                    </div>
                    <div style="min-height: 60px;">
                        <div style="width: 50%;float: left;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon32.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">开拓方式</div>
                            </div>
                            <div>
                                <span style="font-size: 16px;">{{proDetail.pioneering_way}}</span>
                            </div>
                        </div>
                        <div style="width: 50%;float: right;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon33.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">煤种牌号</div>
                            </div>
                            <div>
                                <span style="font-size: 16px;">{{proDetail.kind}}</span>
                            </div>
                        </div>
                    </div>
                    <div style="min-height: 60px;">
                        <div style="width: 50%;float: left;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon34.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">开工年月</div>
                            </div>
                            <div>
                                <span style="font-size: 16px;">{{proDetail.start_work_date}}</span>
                            </div>
                        </div>
                        <div style="width: 50%;float: right;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon34.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">投产年月</div>
                            </div>
                            <div>
                                <span style="font-size: 16px;">{{proDetail.production_date}}</span>
                            </div>
                        </div>
                    </div>
                    <div style="min-height: 60px;">
                        <div style="width: 50%;float: left;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon35.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">总投资额</div>
                            </div>
                            <div>
                                <span v-if="proDetail.general_estimate != null && proDetail.general_estimate !== '' "
                                    style="font-size: 16px;">{{proDetail.general_estimate}}亿</span>
                                <span v-else style="font-size: 16px;">0亿</span>
                            </div>
                        </div>
                        <div style="width: 50%;float: right;">
                            <div>
                                <img style="float: left;" class="mcq_qyxq_icon"
                                    src="../../../../../../assets/img/details_icon36.png" />
                                <div style=" margin-left: 25px;font-size: 14px;color: gray;">至上年未完成投资额</div>
                            </div>
                            <div>
                                <span v-if="proDetail.invest != null && proDetail.invest !== '' "
                                    style="font-size: 16px;">{{proDetail.invest}}亿</span>
                                <span v-else style="font-size: 16px;">0亿</span>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 10px;clear: both;">
                        <div>
                            <img style="float: left;" class="mcq_qyxq_icon"
                                src="../../../../../../assets/img/details_icon37.png" />
                            <div style=" margin-left: 25px;font-size: 14px;color: gray;width: 50%;">本年计划投资额</div>
                            
                        </div>
                        <div>
                            <span v-if="proDetail.tze_year_plan != null && proDetail.tze_year_plan !== '' "
                                style="font-size: 16px;">{{proDetail.tze_year_plan}}亿</span>
                            <span v-else style="font-size: 16px;">0亿</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="background:#ffffff;height:310px;width:100%;margin-top:5px;">
            <div style="margin: 10px 20px 10px 20px; padding-top:10px;">
                <div class="dateSelect" style="height: 50px;">
                    <div class="sx"></div>
                    <div class="tj_z">全年项目投资额变化趋势图</div>
                </div>
                <div class="van-hairline--bottom" style="margin-left: 10px;margin-right: 5px;"></div>
                <div style="width: 100%;margin: auto;margin-top: 12px;">
                    <div style="display:flex;">
                        <div id="myCharts1" ref="myCharts1" style="height:220px;width:93%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div style="background:#ffffff;height:313px;width:100%;margin-top:5px;">
            <div style="margin: 10px 20px 10px 20px; padding-top:10px;">
                <div class="dateSelect" style="height: 50px;">
                    <div class="sx"></div>
                    <div class="tj_z">主工程量与房屋面积变化趋势图</div>
                </div>
                <div class="van-hairline--bottom" style="margin-left: 10px;margin-right: 5px;"></div>
                <div style="width: 100%;margin: auto;margin-top: 12px;">
                    <div style="display:flex;">
                        <div id="myCharts2" ref="myCharts2" style="height:220px;width:93%;"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";
    import echarts from "echarts";
    import { httpMethod } from "../../../../../../api/getData.js";
    import { nytsMtXmlbDetailJs } from "./nyts_mt_xmlb_detail.js";
    export default {
        data() {
            return {
                proDetail: {},
                nowYear:"",
            };
        },
        mounted() {
            let data = this.$route.params.entity;
            var a = data.general_estimate/10000;
            var b = data.invest/10000;
            var c = data.tze_year_plan/10000;
            data.general_estimate = Math.round(a*100)/100;
            data.invest = Math.round(b*100)/100;
            data.tze_year_plan = Math.round(c*100)/100;
            this.proDetail = data;
            this.getHomeData(this.proDetail.id,this.nowYear);
        },
        methods: {
            getHomeData: function (id,year) {
                var self = this;
                var params = {
                    pro_id: id,
                    year: year,
                };
                //获取数据
                httpMethod
                    .getMtReportList(params)
                    .then(res => {
                        var code = res.success;
                        if (code == "1") {
                            console.log(res)
                            this.getOneEchars(echarts, this.$refs.myCharts1,res.tjList);
                            this.getTwoEchars(echarts, this.$refs. myCharts2,res.tjList);
                            this.nowYear = res.year;
                        }
                    })
                    .catch(err => { });
            },
            //初始化第一个图表
            getOneEchars: function (echarts, value, data) {
                nytsMtXmlbDetailJs.showjmrjsrEchars1(echarts, value, data);
            },
            //初始化第一个图表
            getTwoEchars: function (echarts, value, data) {
                nytsMtXmlbDetailJs.showjmrjsrEchars2(echarts, value, data);
            }
        }
    };
</script>