import { returnBaseUrl, get, post } from "@/api/ajax";


export const httpMethod = {
    //获取程序配置
    getConfig: function () {
        return get("static/config.json", null, { baseURL: "./" });
    },
    // get示例
    queryGoodsLabel: function (params) {
        return get("/goods/queryGoodsLabel", params);
    },
    // post示例
    findByTargetId: function (params) {
        return get("/api-qz/qz/zhibiao/findByTargetId", params);
    },
    // 头条
    // 图片列表新闻
    getPictureclass: function (params) {
        return get("cmsAppInsideController.action?getPictureclass", params);
    },
    // 新闻详情
    getCmsArticleContent: function (params) {
        return get("cmsAppInsideController.action?getCmsArticleContent", params);
    },
    //钉办
    //鉴权
    getConfig: function (params) {
        return get("dingTalkController.action?getConfig", params);
    },
    //获取部门
    getUserOrDepart: function (params) {
        return get("dingAppInsideController.action?getUserOrDepart", params);
    },
    //返回根目录
    returnBaseUrlFun: function () {
        return returnBaseUrl();
    },
    // 总体情况重点项目总计统计
    getzdxmzj: function (params) {
        return get("zdgcAppInsideController.action?getzdxmzj", params);
    },
    // 总体情况统计存在问题
    statisticsExistiong: function (params) {
        return get("zdgcAppInsideController.action?statisticsExistiong", params);
    },
    // 总体情况进度排名前三的项目
    getProjectPlanTopThree: function (params) {
        return get("zdgcAppInsideController.action?getProjectPlanTopThree", params);
    },
    // 项目列表
    getProReportInfoByzdProType: function (params) {
        return get("zdgcAppInsideController.action?getProReportInfoByzdProType", params);
    },
    // 项目重点工程类型
    getTypeList: function (params) {
        return get("zdgcAppInsideController.action?getTypeList", params);
    },
    // 项目规划图
    getzdgcProReportInfoAtt: function (params) {
        return get("zdgcAppInsideController.action?getzdgcProReportInfoAtt", params);
    },
    // 项目阶段汇报
    getZdgcProProgressList: function (params) {
        return get("zdgcAppInsideController.action?getZdgcProProgressList", params);
    },
    // 项目简介
    getzdgcProReportInfoAttJJ: function (params) {
        return get("zdgcAppInsideController.action?getzdgcProReportInfoAttJJ", params);
    },
    // 存在问题列表
    getVoExistiongPro: function (params) {
        return get("zdgcAppInsideController.action?getVoExistiongPro", params);
    },
    //重点工程进度统计
    statisticsProgress: function (params) {
        return get("zdgcAppInsideController.action?statisticsProgress", params);
    },
    //按区县统计各个阶段项目个数（柱状图）
    statisticsRegionStage: function (params) {
        return get("zdgcAppInsideController.action?statisticsRegionStage", params);
    },
    //按区县统计工程年度完成投资额占比（饼图）
    statisticsNdProportion: function (params) {
        return get("zdgcAppInsideController.action?statisticsNdProportion", params);
    },
    //区县统计工程年度投资额完成率（柱状图）
    statisticsNdPercentage: function (params) {
        return get("zdgcAppInsideController.action?statisticsNdPercentage", params);
    },
    //按重点工程类别统计年度完成投资额占比（饼图）
    statisticsLbNdProportion: function (params) {
        return get("zdgcAppInsideController.action?statisticsLbNdProportion", params);
    },
    //按重点工程类别统计年度投资额完成率（柱状图）
    statisticsLbNdPercentage: function (params) {
        return get("zdgcAppInsideController.action?statisticsLbNdPercentage", params);
    },
    //项目进度
    getZdgcProProgress: function (params) {
        return get("zdgcAppInsideController.action?getZdgcProProgress", params);
    }


    
    
    




}
