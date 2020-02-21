<style scoped>
    #content {
        background: url('../../../../assets/img/detail_bg.png') no-repeat;
        background-size: 100% 190px;
        position: relative;
        overflow: auto;
    }

    #content_box {
        background: url('../../../../assets/img/detail_content_bg.png') no-repeat;
        background-size: 100% 100%;
        min-height: 330px;
        width: 330px;
        margin: auto;
        margin-top: 65px;
    }
</style>
<template>
    <div style="margin-top:54px;background:#f7f7f7;">
        <div id="content">
            <img width="250px" style='position: absolute; top: 37px;left: 69px;'
                src="../../../../assets/img/detail_title.png" />
            <div style='font-weight: 600;
            font-size: 17px;
            color: #ffffff;
            position: absolute;
            top: 26px;
            left: 145px;'>工作反馈</div>
            <div id="content_box">
                <div style="font-size: 15px;margin: 0px 0px 0px 30px;padding-top: 30px;color:#666666 ;">
                    <div style="display: flex;">
                        <img style="height: 18px;" src="../../../../assets/img/icon_people.png" />
                        <div style="margin-left: 2px;">反馈人:</div>
                        <div style="margin-left: 2px;">张三</div>
                    </div>
                    <div style="display: flex;margin-top: 7px;">
                        <img style="height: 18px;" src="../../../../assets/img/icon_time.png" />
                        <div style="margin-left: 2px;">反馈时间:</div>
                        <div style="margin-left: 2px;">2020-01-01 22:22</div>
                    </div>
                    <div style="display: flex;margin-top: 7px;">
                        <img style="height: 18px;" src="../../../../assets/img/icon_content.png" />
                        <div style="margin-left: 2px;">反馈内容:</div>
                        <div
                            style="margin-left: 2px;border: 1px solid #9f9f9f;border-radius: 4px;width: 60%;font-size: 14px;min-height: 100px;">
                            <div style="margin:5px ;">
                                被催办内容被催办内容被催办内容被催办内容被催办内容被催办内容被催办内
                                被催办内容被催办内容被催办内容被催办内容被催办内容被催办内容被催办内
                                被催办内容被催办内容被催办内容被催办内容被催办内容被催办内容被催办内

                            </div>
                        </div>
                    </div>
                    <div style="display: flex;margin-top: 10px;padding-bottom: 25px;">
                        <img style="height: 18px;" src="../../../../assets/img/wjj_gzfk.png" />
                        <div style="margin-left: 2px;">附件:</div>
                        <div style="margin-left: 2px;color:#2599e6">
                            <div style="display: flex;margin-left: 5px;height:30px">
                                <div>附件一.jpg</div>
                                <img src='../../../../assets/img/icon_delete.png'
                                    style="height: 20px;margin-left: 5px;margin-top: 2px;" />
                                <img src='../../../../assets/img/icon_download.png'
                                    style="height: 24px;margin-left: 10px;" />
                            </div>
                            <div style="display: flex;margin-left: 5px;height:30px">
                                <div>附件一.jpg</div>
                                <img src='../../../../assets/img/icon_delete.png'
                                    style="height: 20px;margin-left: 5px;margin-top: 2px;" />
                                <img src='../../../../assets/img/icon_download.png'
                                    style="height: 24px;margin-left: 10px;" />
                            </div>
                            <div style="display: flex;font-size: 15px;margin-top: 6px;color:#2599e6">
                                <img style="height: 18px;" src="../../../../assets/img/icon_accessory.png" />
                                <div style="margin-left: 5px;">添加附件</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="display: flex;background: #28bcfe;border-radius:20px;width: 64%;
                margin: auto;
                margin-top: 15px;
                height: 40px;
                margin-bottom: 15px;">
                <div style="margin: auto;margin-top: 6px; color: #ffffff;font-size: 18px;">修改
                </div>
            </div>

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
    export default {
        beforeCreate() {
            document.querySelector("body").setAttribute("style", "background:#F1F4F6");
        },
        name: "pjlz_fkjl_detail",
        data() {
            return {
            };
        },
        mounted() {
            var s = window.innerHeight - $("#content").offset().top;
            $("#content").css("min-height", s);
        },
        methods: {

        }
    };
</script>

<style>
</style>