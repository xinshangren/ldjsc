<style scoped>
</style>
<template>
    <div style="margin-top:54px;background:#f7f7f7">
        <div style="padding-top: 15px;">
        <div style="padding:0px 15px 0px 15px;position: relative;">
            <div style="display: flex;font-size: 15px;margin-top: 0px;">
                <div style="width: 80%;">我局领导已经安排相关科室办理中</div>
            </div>
            <div style="display: flex;font-size: 14px;margin-top: 13px;color:#666666 ;">
                <div style="display: flex;">
                    <img style="height: 18px;" src="../../../../assets/img/icon_people.png" />
                    <div style="margin-left: 2px;">反馈人:</div>
                    <div style="margin-left: 2px;">张三</div>
                </div>
                <div style="display: flex;padding-left:10px;">
                    <img style="height: 18px;" src="../../../../assets/img/icon_time.png" />
                    <div style="margin-left: 2px;">反馈时间:</div>
                    <div style="margin-left: 2px;">2020-01-01 22:22</div>
                </div>
            </div>
            <img style="right: 8px; top: 10px;width: 30px;position: absolute;"
                src="../../../../assets/img/icon_more.png" @click="goDetail" />
            <van-divider />
        </div>
        <div style="padding:0px 15px 0px 15px;position: relative;">
            <div style="display: flex;font-size: 15px;margin-top: 0px;">
                <div style="width: 80%;">我局领导已经安排相关科室办理中</div>
            </div>
            <div style="display: flex;font-size: 14px;margin-top: 13px;color:#666666 ;">
                <div style="display: flex;">
                    <img style="height: 18px;" src="../../../../assets/img/icon_people.png" />
                    <div style="margin-left: 2px;">反馈人:</div>
                    <div style="margin-left: 2px;">张三</div>
                </div>
                <div style="display: flex;padding-left:10px;">
                    <img style="height: 18px;" src="../../../../assets/img/icon_time.png" />
                    <div style="margin-left: 2px;">反馈时间:</div>
                    <div style="margin-left: 2px;">2020-01-01 22:22</div>
                </div>
            </div>
            <img style="right: 8px; top: 10px;width: 30px;position: absolute;"
                src="../../../../assets/img/icon_more.png" />
            <van-divider />
        </div>
        <div style="padding:0px 15px 0px 15px;position: relative;">
            <div style="display: flex;font-size: 15px;margin-top: 0px;">
                <div style="width: 80%;">我局领导已经安排相关科室办理中</div>
            </div>
            <div style="display: flex;font-size: 14px;margin-top: 13px;color:#666666 ;">
                <div style="display: flex;">
                    <img style="height: 18px;" src="../../../../assets/img/icon_people.png" />
                    <div style="margin-left: 2px;">反馈人:</div>
                    <div style="margin-left: 2px;">张三</div>
                </div>
                <div style="display: flex;padding-left:10px;">
                    <img style="height: 18px;" src="../../../../assets/img/icon_time.png" />
                    <div style="margin-left: 2px;">反馈时间:</div>
                    <div style="margin-left: 2px;">2020-01-01 22:22</div>
                </div>
            </div>
            <img style="right: 8px; top: 10px;width: 30px;position: absolute;"
                src="../../../../assets/img/icon_more.png" />
            <van-divider />
        </div>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";
    import Vue from "vue";
    import { Tab, Tabs, Search } from "vant";
    import dd from "dingtalk-jsapi";
    import { Divider } from "vant";
    import { Uploader } from "vant";
    Vue.use(Uploader);
    Vue.use(Divider);
    Vue.use(Tab)
        .use(Tabs)
        .use(Search);
    import global_variable from "../../../../api/global_variable.js";
    import pjlz_fkjl_detail_Vue from '@/page/pjlz/pjlzDetail_fk/pjlz_fkjl/pjlz_fkjl_detail.vue'
    export default {
        beforeCreate() {
            document.querySelector("body").setAttribute("style", "background:#F1F4F6");
        },
        name: "pjlz_fkjl",
        data() {
            return {};
        },
        mounted() { },
        methods: {
            goDetail:function(){
                this.$router.push({
                    path: "/pjlz/pjlzDetail_fk/pjlz_fkjl/pjlz_fkjl_detail",
                    name: "pjlz_fkjl_detail",
                });     
            }
        }
    };
</script>

<style>
</style>