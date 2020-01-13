<style scoped>
    .mt_qyxzImg {
        height: 20px;
    }

    .mt_wsdjImg {
        height: 20px;
    }
</style>
<template>
    <div style="margin-top:0px;overflow:hidden;">
        <div class="div_flex" style="background:#ffffff;height:49px;display:flex;">
            <form action="/" style="width: 84%;margin-left:13px;margin-top:8px;">
                <van-search placeholder="请输入企业或集团名称" @search="onSearch" v-model="seach_value" />
            </form>
            <img id="query_show" src="../../../../../assets/img/project_filtrate.png"
                style="height: 27px;margin-top: 10px;margin-left:5px;" @click="queryList" />
        </div>
        <van-tabs color="#2796e7" id="tabId" title-active-color="#ffffff" title-inactive-color="#333333" type="card"
            v-model="airactive" style="width:100%;" @click="changeFoneColor()">
            <van-tab>
                <div slot="title" style="display: flex;">
                    <div style="width:48%;text-align:right;">企业总数</div>
                    <div id="font_color1" ref="totalCountId" style="font-size:24px;">{{compCount}}</div>
                    <div>家</div>
                </div>
                <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
                    <div id="newsList"
                        style="margin-top:3px;margin-left:10px;margin-right:10px;box-shadow:1px 1px 2px 3px  #f3f3f3;">
                        <div v-for="(item,index) in comp_dataList" :key="index" @click="goDetail(item)"
                            style="position:relative;">
                            <div style="padding:7px;">
                                <div style="display:flex;position:relative;">
                                    <p
                                        style="font-size: 15px;display: block;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
                                        {{item.ent_name}}</p>
                                </div>
                                <div style="display:flex;position:relative;">
                                    <div style="float: left;margin-top: 6px;">
                                        <img class="mt_qyxzImg" v-if="item.ent_type == 2"
                                            src="../../../../../assets/img/mt-js.png" />
                                        <img class="mt_qyxzImg" v-if="item.ent_type == 1"
                                            src="../../../../../assets/img/mt-sc.png" />

                                    </div>
                                    <div style="margin-left: 10px;margin-top: 6px;">
                                        <img class="mt_wsdjImg" v-if="item.gas_level == 1"
                                            src="../../../../../assets/img/mt-tc.png" />
                                        <img class="mt_wsdjImg" v-if="item.gas_level == 2"
                                            src="../../../../../assets/img/mt-gws.png" />
                                        <img class="mt_wsdjImg" v-if="item.gas_level == 3"
                                            src="../../../../../assets/img/mt-dws.png" />
                                    </div>
                                </div>
                                <div style="display:flex;position:relative;">
                                    <div>
                                        <img style="float: left;height: 12px;margin-top:6px;"
                                            src="../../../../../assets/img/details_icon17.png" />
                                        <span
                                            style="margin-left: 5px;font-size: 14px;color: gray;width: 330px;">地址：{{item.ent_address}}</span>
                                    </div>
                                </div>
                                <div style="display:flex;position:relative;margin-top: 3px;">
                                    <div>
                                        <img style="float: left;height: 12px;margin-top:6px;"
                                            src="../../../../../assets/img/iconmt-lszt.png" />
                                        <span
                                            style="margin-left: 5px;font-size: 14px;color: gray;width: 330px;">隶属集团：{{item.ent_nature}}</span>
                                    </div>
                                </div>
                                <div style="display:flex;position:relative;margin-top: 3px;">
                                    <div>
                                        <img style="float: left;height: 12px;margin-top:6px;"
                                            src="../../../../../assets/img/iconmt-qygm.png" />
                                        <span
                                            style="margin-left: 5px;font-size: 14px;color: gray;width: 330px;">企业规模：{{item.ent_scale}}万吨/年</span>
                                    </div>
                                </div>
                            </div>
                            <div class="van-hairline--bottom"></div>
                        </div>
                    </div>
                </mescroll-vue>
            </van-tab>
            <van-tab>
                <div slot="title" style="display: flex;">
                    <div style="width:48%;text-align:right;">集团总数</div>
                    <div id="font_color2" ref="totalCountId" style="font-size:24px;color:#2796e7;">{{bloc_count}}</div>
                    <div>家</div>
                </div>

                <div id="newsList"
                    style="margin-top:3px;margin-left:10px;margin-right:10px;box-shadow:1px 1px 2px 3px  #f3f3f3;">
                    <div v-for="(item,index) in bloc_dataList" :key="index" @click="goDetail(item)"
                        style="position:relative;">
                        <div style="padding:7px;">
                            <div style="display:flex;position:relative;">
                                <p
                                    style="font-size: 15px;display: block;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
                                    {{item.ent_nature}}</p>
                            </div>

                            <div style="display:flex;position:relative;">
                                <div>
                                    <img style="float: left;height: 12px;margin-top:6px;"
                                        src="../../../../../assets/img/iconmt-lszt.png" />
                                    <span
                                        style="margin-left: 5px;font-size: 14px;color: gray;width: 330px;">下属企业{{item.num}}家</span>
                                </div>
                            </div>
                        </div>
                        <div style="width: 100%;height: 4px;background: #f3f3f3;"></div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
        <van-popup v-model="show" position="top" get-container="#count_id" :style="{ height: '42%' }" @opened="openPop"
            style="overflow:hidden;background:rgb(243, 243, 243);">
            <div style="background:#ffffff;">
                <div style="padding-top:9px;font-size: 16px;margin-left:17px;">企业性质</div>
                <ul class="ui-row" id="qyxzListDialogId" style="margin-top: 11px;margin-right: 0px;">
                    <li v-for="(item,index) in qyxz_dataList" style="width: 26%;" :key="index" :id="(item.typecode)"
                        class="ui-col ui-col-25 dialogNoSelect">{{item.typename}}</li>
                </ul>

                <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
                <div style="padding-top:9px;font-size: 16px;margin-left:17px;">所属区域</div>
                <ul class="ui-row" id="ssqyListDialogId" style="margin-top: 11px;margin-right: 0px;">
                    <li v-for="(item,index) in ssqy_dataList" style="width: 26%;" :key="index" :id="(item.typecode)"
                        class="ui-col ui-col-25 dialogNoSelect">{{item.typename}}</li>
                </ul>

                <div style="width: 100%;height: 8px;background: #f3f3f3;margin-top: 10px;"></div>
                <div style="display: flex;background: #f3f3f3;height:110px;">
                    <div @click="clearType"
                        style="width: 50%;height: 36px;background: #ffffff;line-height: 36px;text-align: center;">重置
                    </div>
                    <div @click="clickUlDy"
                        style="background:#3ca1ec;width: 50%;height: 36px;color:#ffffff;line-height: 36px;text-align: center;">
                        确定</div>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script>
    import echarts from "echarts";
    import $ from "jquery";
    import MescrollVue from "mescroll.js/mescroll.vue";
    import { httpMethod } from "../../../../../api/getData.js";
    import Vue from "vue";
    import { Tab, Tabs, Sticky } from "vant";
    Vue.use(Tab).use(Tabs).use(Sticky);
    export default {
        components: {
            MescrollVue ,// 注册mescroll组件
        },
        data() {
            return {
                qyxz_dataList: [],
                ssqy_dataList: [],
                comp_dataList: [],
                bloc_dataList: [],
                bloc_count: 0,
                compCount: 0,
                query_params: {
                    ent_scale: "",
                    counties: "",
                    ent_nature: "",
                    ent_type: "",
                    gas_level: "",
                },
                ent_type: "",
                ent_scale: "",
                counties: "",
                ent_nature: "",
                seach_value: "",
                gas_level: "",
                airactive: 0,
                show: false,
                mescroll: null, // mescroll实例对象
                selectWrwNamePage: 0,
                mescrollDown: {
                    callback: this.downCallback,
                    auto: false
                }, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
                mescrollUp: {
                    // 上拉加载的配置.
                    auto: false,
                    callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
                    //以下是一些常用的配置,当然不写也可以的.
                    page: {
                        num: 1, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
                        size: 10 //每页数据条数,默认10
                    },
                    htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
                    noMoreSize: 5,
                    empty: {
                        //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
                        warpId: "newsList", //父布局的id (1.3.5版本支持传入dom元素)
                        //icon: "../../../../assets/img/nodata.png", //图标,默认null,支持网络图
                        tip: "暂无相关数据~" //提示
                    }
                }
            };
        },
        beforeCreate() {
            document.querySelector("body").setAttribute("style", "background:#ffffff");
        },
        activated() {
            //返回保留页面记录
            document.querySelector("body").setAttribute("style", "background:#ffffff");
        },
        mounted() {
            this.changeFoneColor();
        },
        methods: {
            changeFoneColor: function () {
                if (this.airactive == 0) {
                    $('#font_color2').css('color', '#2796e7');
                    $('#font_color1').css('color', '#ffffff');
                    $('#query_show').css('display','')
                } else {
                    $('#font_color1').css('color', '#2796e7');
                    $('#font_color2').css('color', '#ffffff');
                    $('#query_show').css('display','none')
                }
            },
            //企业列表
            upCallback: function (page, mescroll) {
                if (this.airactive == 0) {
                    var params = {
                        bloc_name: "",//集团名称
                        ent_name: this.seach_value, //企业名称
                        ent_type: this.query_params.ent_type, //性质
                        ent_scale: this.query_params.ent_scale, //规模
                        counties: this.query_params.counties, //区县
                        gas_level: this.query_params.gas_level,
                        ent_nature: this.query_params.ent_nature, //隶属主体
                        page: page.num,
                        pageSize: page.size
                    };
                } else {
                    var params = {
                        bloc_name: this.seach_value,//集团名称
                        ent_name: "", //企业名称
                        ent_type: this.query_params.ent_type, //性质
                        ent_scale: this.query_params.ent_scale, //规模
                        counties: this.query_params.counties, //区县
                        gas_level: this.query_params.gas_level,
                        ent_nature: this.query_params.ent_nature, //隶属主体
                        page: page.num,
                        pageSize: page.size
                    };
                }
                httpMethod
                    .getMtEnterpriseList(params)
                    .then(res => {
                        console.log(res);
                        if (res.success == "1") {
                            this.comp_dataList = res.dataList;
                            this.bloc_dataList = res.ent_nature;
                            this.bloc_count = res.ent_nature.length;
                            this.qyxz_dataList = res.mtQyxz.dataList;
                            this.ssqy_dataList = res.mtSsqx.dataList;
                            this.compCount = res.total;
                        }
                        this.$nextTick(() => {
                            this.mescroll.endBySize(res.dataList.length, res.total);
                        });
                    })
                    .catch(err => {
                        // this.$toast(err);
                        mescroll.endErr();
                    });
            },

            mescrollInit(mescroll) {
                this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
                this.mescroll.resetUpScroll();
            },
            queryList: function () {
                this.show = true;
            },
            onSearch() {
                this.comp_dataList = [];
                this.mescroll.resetUpScroll();
            },
            downCallback: function () {
                this.comp_dataList = [];
                this.mescroll.resetUpScroll();
            },
            openPop: function () {
                var airList = this.alllevelist;
                var context = this;
                $("#qygmListDialogId li").off('click');
                $("#qyxzListDialogId li").off('click');
                $("#qylxListDialogId li").off('click');
                $("#ssqyListDialogId li").off('click');
                //企业规模选择列表
                $("#qygmListDialogId li").click(function () {
                    if ($(this).hasClass("dialogSelect")) {
                        $(this).removeClass("dialogSelect");
                        $(this).addClass("dialogNoSelect");
                    } else {
                        $(this).addClass("dialogSelect");
                        $(this).removeClass("dialogNoSelect");
                    }
                });
                //企业性质选择列表
                $("#qyxzListDialogId li").click(function () {
                    if ($(this).hasClass("dialogSelect")) {
                        $(this).removeClass("dialogSelect");
                        $(this).addClass("dialogNoSelect");
                    } else {
                        $(this).addClass("dialogSelect");
                        $(this).removeClass("dialogNoSelect");
                    }
                });
                //企业性质选择列表
                $("#qylxListDialogId li").click(function () {
                    if ($(this).hasClass("dialogSelect")) {
                        $(this).removeClass("dialogSelect");
                        $(this).addClass("dialogNoSelect");
                    } else {
                        $(this).addClass("dialogSelect");
                        $(this).removeClass("dialogNoSelect");
                    }
                });
                //区域选择列表
                $("#ssqyListDialogId li").click(function (e) {
                    if ($(this).hasClass("dialogSelect")) {
                        $(this).removeClass("dialogSelect");
                        $(this).addClass("dialogNoSelect");
                    } else {
                        $(this).addClass("dialogSelect");
                        $(this).removeClass("dialogNoSelect");
                        $(this)
                            .siblings("li")
                            .addClass("dialogNoSelect");
                        $(this)
                            .siblings("li")
                            .removeClass("dialogSelect");
                    }
                });
            },
            clearType: function () {
                var self = this;
                //初始化 aqi
                $("#qygmListDialogId li").each(function () {
                    $(this).removeClass("dialogSelect");
                    $(this).addClass("dialogNoSelect");
                });
                $("#qyxzListDialogId li").each(function () {
                    $(this).removeClass("dialogSelect");
                    $(this).addClass("dialogNoSelect");
                });
                $("#ssqyListDialogId li").each(function () {
                    $(this).removeClass("dialogSelect");
                    $(this).addClass("dialogNoSelect");
                });
                $("#qylxListDialogId li").each(function () {
                    $(this).removeClass("dialogSelect");
                    $(this).addClass("dialogNoSelect");
                });
                (self.query_params = {
                    ent_scale: "",
                    counties: "",
                    ent_nature: "",
                    ent_type: ""
                }),
                    self.mescroll.resetUpScroll();
                self.show = false;
            },
            //确定
            clickUlDy: function () {
                var self = this;
                self.ent_scale = "";
                self.counties = "";
                self.ent_nature = "";
                self.ent_type = "";
                //企业规模选择
                $("#qyxzListDialogId li").each(function () {
                    if ($(this).hasClass("dialogSelect")) {
                        self.ent_type += $(this).attr("id");
                        self.ent_type += "，";
                    }
                });
                //企业规模选择
                $("#ssqyListDialogId li").each(function () {
                    if ($(this).hasClass("dialogSelect")) {
                        self.counties = $(this).attr("id");
                    }
                });
                self.query_params.counties = self.counties;
                self.query_params.ent_type = self.ent_type;
                self.show = false;
                console.log(self.query_params);
                this.mescroll.resetUpScroll();
            },
            goDetail(item) {
                this.$router.push({
                    path:
                        "/cyzx/nyts/nyts_mt/nyts_mt_qylb/nyts_mt_qylb_detail/",
                    name: "nyts_mt_qylb_detail",
                    params: {
                        entity: item
                    }
                });
            },
        }
    };
</script>
<style scoped>
    @import "../../../../../assets/css/frozenui.css";
     @import "../../../../../page/cyzx/nyts/nyts_mt/nyts_mt_qylb/nyts_mt_qylb.css";
</style>