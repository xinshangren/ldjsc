import { returnBaseUrl, get, post, checkStrOfZero } from "@/api/ajax";


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
    // 领导资料
    getUserCms: function (params) {
        return get("cmsAppInsideController.action?getUserCms", params);
    },
    // 栏目下文章列表
    getCmsArticleContentList: function (params) {
        return get("cmsAppInsideController.action?getCmsArticleContentList", params);
    },
    // 美丽晋城文化晋城
    getlmjcZL: function (params) {
        return get("cmsAppInsideController.action?getlmjcZL", params);
    },
    //钉办
    //鉴权
    getConfig: function (params) {
        return get("dingTalkController.action?getConfig", params);
    },
    //获取当前用户
    getUser: function (params) {
        return get("dingTalkController.action?getUser", params);
    },
    //获取某部门下的用户
    getUserOrDepart: function (params) {
        return get("dingAppInsideController.action?getUserOrDepart", params);
    },
    //获取通讯录部门信息
    goUserLogin: function (params) {
        return get("dingAppInsideController.action?goUserLogin", params);
    },


    //指标接口
    findByTargetIds: function (params) {
        return get("jscAppInsideController.action?findByTargetIds", params);
    },
    //过滤数据为0
    checkStrOfZeroFun: function (str) {
        return checkStrOfZero(str);
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
    },
    //全域旅游
    // 景区概况
    getScenicBasicStatistic: function (params) {
        return get("qylyAppInsideController.action?getScenicBasicStatistics", params);
    },
    // 景区列表
    getQylyScenicBasicList: function (params) {
        return get("qylyAppInsideController.action?getQylyScenicBasicList", params);
    },
    // 景区详情
    getQylyScenicBasic: function (params) {
        return get("qylyAppInsideController.action?getQylyScenicBasic", params);
    },
    // 景区视频介绍列表
    getScenicVideoList: function (params) {
        return get("qylyAppInsideController.action?getScenicVideoList", params);
    },
    // 示范村概况
    getVillageBasicStatistics: function (params) {
        return get("qylyAppInsideController.action?getVillageBasicStatistics", params);
    },
    // 示范村列表
    getQylyVillageBasicList: function (params) {
        return get("qylyAppInsideController.action?getQylyVillageBasicList", params);
    },
    // 示范村详情
    getQylyVillageBasic: function (params) {
        return get("qylyAppInsideController.action?getQylyVillageBasic", params);
    },
    //实时概况
    getAirRealtimeData: function (params) {
        return get("sthjAppInsideController.action?getAirRealtimeData", params);
    },
    //实时概况污染物等级
    getAirPollutantsLevel: function (params) {
        return get("sthjAppInsideController.action?getAirPollutantsLevel", params);
    },
    //省内空气质量排名
    provincialAirRanking: function (params) {
        return get("sthjAppInsideController.action?provincialAirRanking", params);
    },

    //省内空气质量排名新方法
    provincialAir: function (params) {
        return get("sthjAppInsideController.action?provincialAir", params);
    },

    //市内城市空气质量排名
    cityAirRanking: function (params) {
        return get("sthjAppInsideController.action?cityAirRanking", params);
    },
    //优良天数占比
    percentageOfGoodDays: function (params) {
        return get("sthjAppInsideController.action?percentageOfGoodDays", params);
    },
    //空气质量变化趋势
    trendsInAirQuality: function (params) {
        return get("sthjAppInsideController.action?trendsInAirQuality", params);
    },
    //获取站点数据及信息list
    getStationRealtimeData: function (params) {
        return get("sthjAppInsideController.action?getStationRealtimeData", params);
    },
    //获取宏观经济首页数据
    getHomeData: function (params) {
        return get("hgjjAppInsideController.action?getHomeData", params);
    },
    //获取全市生产总值数据
    getCityGDP: function (params) {
        return get("hgjjAppInsideController.action?getCityGDP", params);
    },
    //获取固定资产投资
    getFixedAssetsInvestment: function (params) {
        return get("hgjjAppInsideController.action?getFixedAssetsInvestment", params);
    },
    //获取一般公共预算收入
    getCommonalityIncome: function (params) {
        return get("hgjjAppInsideController.action?getCommonalityIncome", params);
    },
    //能源煤炭统计产值
    getMtTjProduction: function (params) {
        return get("nytsAppGbInsideController.action?getMtTjProduction", params);
    },

    //获取社会消费品零售总额
    getSocialConsumerGoods: function (params) {
        return get("hgjjAppInsideController.action?getSocialConsumerGoods", params);
    },
    //获取居民人均可支配收入
    getDisposableIncome: function (params) {
        return get("hgjjAppInsideController.action?getDisposableIncome", params);
    },

    //获取区县情况接口
    getCounty: function (params) {
        return get("hgjjAppInsideController.action?getCounty", params);
    },
    //获取工业增加值
    getIndustrialValueAdded: function (params) {
        return get("hgjjAppInsideController.action?getIndustrialValueAdded", params);
    },
    //获取海关进出口总额
    getCustomsTrading: function (params) {
        return get("hgjjAppInsideController.action?getCustomsTrading", params);
    },
    //获取煤层气概况数据
    getMcqGeneralSituation: function (params) {
        return get("nytsAppGbInsideController.action?getMcqGeneralSituation", params);
    },
    //获取煤层气企业列表数据
    getMcqEnterpriseList: function (params) {
        return get("nytsAppGbInsideController.action?getMcqEnterpriseList", params);
    },
    //获取煤层气企业抽采利用情况
    getMcqStatistical: function (params) {
        return get("nytsAppGbInsideController.action?getMcqStatistical", params);
    },
    //获取监管概况
    getbasicList: function (params) {
        return get("gridSupervisionController.action?basicList", params);
    },

    getMtTjQuantity: function (params) {
        return get("nytsAppGbInsideController.action?getMtTjQuantity", params);
    },
    //获取监管概况巡查图表
    getBasicRecordList: function (params) {
        return get("gridSupervisionController.action?basicRecordList", params);
    },
    //获取污染源列表
    getGridSourceList: function (params) {
        return get("gridSupervisionController.action?getGridSourceList", params);
    },
    //获取污染源类型
    getCompanyType: function (params) {
        return get("gridSupervisionController.action?getCompanyType", params);
    },
    //获取新能源企业列表
    getXnyEnterpriseList: function (params) {
        return get("nytsAppGbInsideController.action?getXnyEnterpriseList", params);
    },
    //获取新能源企业列表
    getXnyProjectList: function (params) {
        return get("nytsAppGbInsideController.action?getXnyProjectList", params);
    },
    //重点污染源覆盖物详情-污染物情况图表
    lineGridRecord: function (params) {
        return get("gridSupervisionController.action?lineGridRecord", params);
    },
    //获取网格列表
    getGridInfoList: function (params) {
        return get("gridSupervisionController.action?getGridInfoList", params);
    },
    //获取网格信息
    getGridSpecificList: function (params) {
        return get("gridSupervisionController.action?getGridSpecificList", params);
    },
    //获取监管概况排名图表
    getGridRecordParam: function (params) {
        return get("gridSupervisionController.action?getGridRecordParam", params);
    },
    //统计分析巡查情况饼状图
    barGridRecord: function (params) {
        return get("gridSupervisionController.action?barGridRecord", params);
    },
    //统计分析任务监管统计图
    lineTask: function (params) {
        return get("gridSupervisionController.action?lineTask", params);
    },
    //统计分析任务监管饼状图
    barTask: function (params) {
        return get("gridSupervisionController.action?barTask", params);
    },
    //根据地域统计污染物
    getRegionCount: function (params) {
        return get("pollutionSourcesController.action?getRegionCount", params);
    },
    //首页关注程度
    getFollowCount: function (params) {
        return get("pollutionSourcesController.action?getFollowCount", params);
    },
    //首页所属流域
    getLvCount: function (params) {
        return get("pollutionSourcesController.action?getLvCount", params);
    },
    //首页污染源数量等
    getPollutionCount: function (params) {
        return get("pollutionSourcesController.action?getPollutionCount", params);
    },
    //污染源企业列表
    getBaseinfoCompany: function (params) {
        return get("pollutionSourcesController.action?getBaseinfoCompany", params);
    },
    //污染源企业列表筛选字典
    getQueryForFound: function (params) {
        return get("pollutionSourcesController.action?getQueryForFound", params);
    },
    //污染源企业列表详情
    getBaseinfo: function (params) {
        return get("pollutionSourcesController.action?getBaseinfo", params);
    },
    //重点污染源覆盖物详情-污染物报警
    getPollutantalarm: function (params) {
        return get("pollutionSourcesController.action?getPollutantalarm", params);
    },
    //新能源项目发电量
    getXnyReport: function (params) {
        return get("nytsAppGbInsideController.action?getXnyReport", params);
    },
    //文明共创
    // 总数及比例统计
    getDwSummary: function (params) {
        return get("wmgcAppInsideController.action?getDwSummary", params);
    },
    // 各月各数据星级数量
    getMonthLevelNum: function (params) {
        return get("wmgcAppInsideController.action?getMonthLevelNum", params);
    },
    // 各星级地图点位
    getLevelBasicList: function (params) {
        return get("wmgcAppInsideController.action?getLevelBasicList", params);
    },
    // 获取点位类型列表
    getDwlxList: function (params) {
        return get("wmgcAppInsideController.action?getDwlxList", params);
    },
    // 类型得分统计 ： 
    typeScoreStatistics: function (params) {
        return get("wmgcAppInsideController.action?typeScoreStatistics", params);
    },
    // 创城动态 ： 
    getCmsCcdtList: function (params) {
        return get("wmgcAppInsideController.action?getCmsCcdtList", params);
    },
    
    //新能源概况图
    getXnyTjPhase: function (params) {
        return get("nytsAppGbInsideController.action?getXnyTjPhase", params);
    },
    //新能源概况
    entStatistics: function (params) {
        return get("nytsAppGbInsideController.action?entStatistics", params);
    },
    //煤炭统计产值
    getMtTjOutput: function (params) {
        return get("nytsAppGbInsideController.action?getMtTjOutput", params);
    },
    //煤炭销售统计图
    getMtTjMarket: function (params) {
        return get("nytsAppGbInsideController.action?getMtTjMarket", params);
    },
    //能源煤炭企业列表
    getMtEnterpriseList: function (params) {
        return get("nytsAppGbInsideController.action?getMtEnterpriseList", params);
    },
    //煤炭产值产量
    getMtEntIdOutputTj: function (params) {
        return get("nytsAppGbInsideController.action?getMtEntIdOutputTj", params);
    },
    //煤炭项目详情
    getMtProjectList: function (params) {
        return get("nytsAppGbInsideController.action?getMtProjectList", params);
    },
    //煤炭项目详情
    getMtReportList: function (params) {
        return get("nytsAppGbInsideController.action?getMtReportList", params);
    },

    //能源相册
    getNyxcImgList: function (params) {
        return get("nytsAppGbInsideController.action?getImgList", params);
    },
    //记录日志所需参数获取
    doAddAppLog: function (params) {
        return get("homeController.action?doAddAppLog", params);
    },
    //记录日志
    doAddAppLogList: function (params) {
        return get("homeController.action?doAddAppLogList", params);
    },
    //获取当前用户常用应用
    getFrequentlyApp: function (params) {
        return get("homeController.action?getFrequentlyApp", params);
    },
    //今日要闻
    getCmsMyrq: function (params) {
        return get("cmsAppInsideController.action?getCmsMyrq", params);
    },
    //工作群列表和详情
    getGroupInfo: function (params) {
        return get("dingTalkController.action?getGroupInfo", params);
    },
    //获取公告信息
    getCmsGG: function (params) {
        return get("cmsAppInsideController.action?getCmsGG", params);
    },
    //获取一键直连部门信息
    getDirectCon: function (params) {
        return get("dingAppInsideController.action?getDirectCon", params);
    },
    //批件流转接口通用
    getApprovalInfo: function (params) {
        return get("dingTalkController.action?getApprovalInfo", params);
    },
    //批件流转接口 上传通用
    fileUpload: function (params) {
        return get("dingTalkController.action?fileUpload", params);
    },
    //通用接口
    fileShow: function (params) {
        return get("dingTalkController.action?fileShow", params);
    },
    //每日要情新接口
    getCmsMyrqList: function (params) {
        return get("cmsAppInsideController.action?getCmsMyrqList", params);
    },
    //通过id获取每日要情的全部内容
    findIdByMyrq: function (params) {
        return get("cmsAppInsideController.action?findIdByMyrq", params);
    },
    //通过id该人的未读
    getCmsMyrqIfHits: function (params) {
        return get("cmsAppInsideController.action?getCmsMyrqIfHits", params);
    },

    

    


















}
