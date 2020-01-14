<style scoped>
    .xny_qyxq_qyxzImg{
        height: 20px;
    }
    .xny_qyxq_qygmImg{
        height: 20px;
    }
    .xny_qyxq_qylxImg{
        height: 20px;
    }
    .mcq_qyxq_icon {
        height: 20px;
    }
    #compDetail span{
        margin-left: -18px;
    }
</style>
<template>
    <div style="margin-top:45px;overflow:hidden;background: rgb(247, 247, 247);">
        <div style="background:#ffffff;height:auto;width:100%;margin-top:5px;">
            <div style="margin: 10px 20px 10px 20px; padding-top:10px;" id="compDetail">
                <div style="font-weight: 600; font-size: 17px;  color: #2796e7;">{{compDetail.ent_name}}</div>
                <div style="margin-top: 10px;">
                    <img class="xny_qyxq_qyxzImg" v-if="compDetail.ent_nature == 1"
                        src="../../../../../../assets/img/xny-qy-gyqy.png" />
                    <img class="xny_qyxq_qyxzImg" v-if="compDetail.ent_nature == 2"
                        src="../../../../../../assets/img/xny-qy-jtsyzqy.png" />
                    <img class="xny_qyxq_qyxzImg" v-if="compDetail.ent_nature == 3"
                        src="../../../../../../assets/img/xny-qy-lyqy.png" />
                    <img class="xny_qyxq_qyxzImg" v-if="compDetail.ent_nature == 4"
                        src="../../../../../../assets/img/xny-qy-szqy.png" />
                    <img class="xny_qyxq_qyxzImg" v-if="compDetail.ent_nature == 5"
                        src="../../../../../../assets/img/xny-qy-syqy.png" />
                    <img class="xny_qyxq_qyxzImg" v-if="compDetail.ent_nature == 6"
                        src="../../../../../../assets/img/xny-qy-qtqy.png" />

                    <img class="xny_qyxq_qygmImg" v-if="compDetail.ent_scale == 1"
                        src="../../../../../../assets/img/xny-qy-dx.png" />
                    <img class="xny_qyxq_qygmImg" v-if="compDetail.ent_scale == 2"
                        src="../../../../../../assets/img/xny-qy-zx.png" />
                    <img class="xny_qyxq_qygmImg" v-if="compDetail.ent_scale == 3"
                        src="../../../../../../assets/img/xny-qy-xx.png" />


                    <img class="xny_qyxq_qylxImg" v-if="compDetail.ent_type == 1" src="../../../../../../assets/img/xny-qy-gd.png" />
                    <img class="xny_qyxq_qylxImg" v-if="compDetail.ent_type == 2" src="../../../../../../assets/img/xny-qy-fd.png" />
                    <img class="xny_qyxq_qylxImg" v-if="compDetail.ent_type == 3" src="../../../../../../assets/img/xny-qy-swzfd.png" />
                    <img class="xny_qyxq_qylxImg" v-if="compDetail.ent_type == 4" src="../../../../../../assets/img/xny-qy-sd.png" />
                    <img class="xny_qyxq_qylxImg" v-if="compDetail.ent_type == 5" src="../../../../../../assets/img/xny-qy-qt.png" />

                </div>
                <div style="margin-top: 10px;">
                    <div>
                        <div>
                            <img style="float: left;" class="mcq_qyxq_icon"
                                src="../../../../../../assets/img/details_icon17.png" />
                            <div style=" margin-left: 25px;font-size: 14px;color: gray;width: 50%;">地址</div>
                        </div>
                        <div>
                            <span style="font-size: 16px;width: 50%;">{{compDetail.ent_address}}</span>
                        </div>
                    </div>
                    <div style="width: 50%;float: left;margin-top: 15px;">
                        <div>
                            <img style="float: left;" class="mcq_qyxq_icon"
                                src="../../../../../../assets/img/details_icon25.png" />
                            <div style=" margin-left: 25px;font-size: 14px;color: gray;">所属区县</div>
                        </div>
                        <div>
                            <span style="font-size: 16px;">{{compDetail.counties}}</span>
                        </div>
                    </div>
                    <div style="width: 50%;float: right;margin-top: 15px;">
                        <div>
                            <img style="float: left;" class="mcq_qyxq_icon"
                                src="../../../../../../assets/img/details_icon3.png" />
                            <div style=" margin-left: 25px;font-size: 14px;color: gray;">法人代表</div>
                        </div>
                        <div>
                            <span style="font-size: 16px;">{{compDetail.legal_behalf}}</span>
                        </div>
                    </div>
                    <div style="width: 50%;float: left;margin-top: 15px;">
                        <div>
                            <img style="float: left;" class="mcq_qyxq_icon"
                                src="../../../../../../assets/img/details_icon19.png" />
                            <div style=" margin-left: 25px;font-size: 14px;color: gray;">联系方式</div>
                        </div>
                        <div>
                            <span style="font-size: 16px;">{{compDetail.phone_contacts}}</span>
                        </div>
                    </div>
                    <div style="width: 50%;float: right;margin-top: 15px;">
                        <div>
                            <img style="float: left;" class="mcq_qyxq_icon"
                                src="../../../../../../assets/img/details_icon20.png" />
                            <div style=" margin-left: 25px;font-size: 14px;color: gray;">组织机构代码</div>
                        </div>
                        <div>
                            <span style="font-size: 16px;">{{compDetail.institution_code}}</span>
                        </div>
                    </div>
                    <div style="margin-top: 135px;clear: both;">
                        <div>
                            <img style="float: left;" class="mcq_qyxq_icon"
                                src="../../../../../../assets/img/details_icon18.png" />
                            <div style=" margin-left: 25px;font-size: 14px;color: gray;width: 50%;">统一社会信用代码</div>
                        </div>
                        <div>
                            <span style="font-size: 16px;width: 50%;">{{compDetail.credit_code}}</span>
                        </div>
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
    export default {
        data() {
            return {
                compDetail: {},
            };
        },
        mounted() {
            let data = this.$route.params.entity;
            console.log(data)
            switch (data.counties) {
                case "1":
                    data.counties = "市直";
                    break;
                case "2":
                    data.counties = "城区";
                    break;
                case "3":
                    data.counties = "泽州县";
                    break;
                case "4":
                    data.counties = "沁水县";
                    break;
                case "5":
                    data.counties = "高平市";
                    break;
                case "6":
                    data.counties = "阳城县";
                    break;
                case "7":
                    data.counties = "陵川县";
                    break;
                default:
                    break;
            };
            this.compDetail = data;
        },
        methods: {
            getHomeData: function (id, date) {
                var self = this;
                var params = {
                    ent_id: id,
                    dateMonth: date
                };
                //获取数据
                httpMethod
                    .getMcqStatistical(params)
                    .then(res => {
                        var code = res.success;
                        if (code == "1") {
                            this.getOneEchars(echarts, myCharts1, res.dataTj);
                        }
                    })
                    .catch(err => { });
            },
        }
    }

</script>