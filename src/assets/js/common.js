function common() {

};

var ipHost="http://203.207.104.184/";
common.connectionUtlWlw ='http://203.207.104.209:7081/zdxmglhlw/';//公网 --融云
common.inconnectionUtlWlw ='http://10.1.0.23:7081/zdxmglhlw/';//内网 -- 融云
//var ipHost="http://172.27.125.38:8071/";//张锐
//var ipHost="http://10.7.1.170:8080/";//段浩文
//var ipHost="http://172.27.125.215:8080/";//段建斌
//var ipHost="http://10.7.2.103:8081/";//张云仙
// var ipHost="http://10.7.1.208:8080/";//张凯凯
common.connectionUtl =ipHost;
common.connectionSpace = "jcldjsc/";
common.pageMaxNumber = 6;
common.localIp="172.27.124";//政务外网ip
common.update = "zdgcAppInsideController.action?checkUpdate";//版本更新
common.login = "zdgcAppInsideController.action?getUser";//登录
common.getTypeListFun = "zdgcAppInsideController.action?getTypeList";//重点工程类型接口   
common.getProReportInfoByzdProTypeFun = "zdgcAppInsideController.action?getProReportInfoByzdProType";//地图上所有工程数据
common.getZdgcProProgressListFun = "zdgcAppInsideController.action?getZdgcProProgressList";//单个工程进度列表数据
common.statisticsProgressFun = "zdgcAppInsideController.action?statisticsProgress";//重点工程进度统计
common.statisticsFund = "zdgcAppInsideController.action?statisticsFund";//重点工程资金占比
common.statisticsPutFund = "zdgcAppInsideController.action?statisticsPutFund";//重点工程近七年资金
common.statisticsRegionStage = "zdgcAppInsideController.action?statisticsRegionStage";//按区县统计各个阶段项目个数（柱状图）
common.statisticsNdProportion = "zdgcAppInsideController.action?statisticsNdProportion";//按区县统计工程年度完成投资额占比（饼图）
common.statisticsNdPercentage = "zdgcAppInsideController.action?statisticsNdPercentage";//区县统计工程年度投资额完成率（柱状图）
common.statisticsLbNdProportion = "zdgcAppInsideController.action?statisticsLbNdProportion";//按重点工程类别统计年度完成投资额占比（饼图）
common.statisticsLbNdPercentage = "zdgcAppInsideController.action?statisticsLbNdPercentage";//按重点工程类别统计年度投资额完成率（柱状图）
common.getZdgcProOverallList = "zdgcAppInsideController.action?getZdgcProOverallList";//总项目进度
common.getArticleClass = "zdgcAppInsideController.action?getArticleClass";//获取栏目
common.getCmsArticleContentList = "zdgcAppInsideController.action?getCmsArticleContentList";//获取栏目下文章
common.getPictureclass = "zdgcAppInsideController.action?getPictureclass";//获取图片新闻
common.getZdgcProOverall = "zdgcAppInsideController.action?getZdgcProOverall";//总项目进度查看详情
common.getZdgcProProgress = "zdgcAppInsideController.action?getZdgcProProgress";//单个项目进度查看详情
common.getPictureDetails = "zdgcAppInsideController.action?getPictureDetails";//获取图片新闻详情
common.getCmsArticleContent = "zdgcAppInsideController.action?getCmsArticleContent";//获取文字新闻详情
common.getzdgcProReportInfoAtt = "zdgcAppInsideController.action?getzdgcProReportInfoAtt";//获取规划图
common.geZdgcSxqStatistics = "zdgcAppInsideController.action?geZdgcSxqStatistics";//获取重点工程完成投资分县市区统计表
common.getZdgcTzflStatistics = "zdgcAppInsideController.action?getZdgcTzflStatistics";//完成投资分类统计表
common.getZdgcXmmxStatistics = "zdgcAppInsideController.action?getZdgcXmmxStatistics";//工程项目明细统计表
common.getzdxmzj = "zdgcAppInsideController.action?getzdxmzj";//获取年度计划
common.getzdgcProReportInfoAttJJAjax= "zdgcAppInsideController.action?getzdgcProReportInfoAttJJ";//获取项目简介
common.getExistingProblemList= "zdgcAppInsideController.action?getExistingProblemList";//获取项目存在问题与建议
common.getVoExistiongProFun= "zdgcAppInsideController.action?getVoExistiongPro";//存在问题列表
common.statisticsExistiongFun= "zdgcAppInsideController.action?statisticsExistiong";//存在问题统计
common.getDutyByUserListFun= "zdgcAppInsideController.action?getDutyByUserList";//获取领导姓名
common.getUserCmsFun= "zdgcAppInsideController.action?getUserCms";//获取领导之窗的栏目
common.getCmsClassSubordinateFun= "zdgcAppInsideController.action?getCmsClassSubordinate";//获取文化晋城二级菜单
common.getlmjcZLFun= "zdgcAppInsideController.action?getlmjcZL";//获取文化晋城数据
common.pageMaxNumber=10;//分页条数

//生态环境
common.getAirPollutantsLevel = "sthjAppInsideController.action?getAirPollutantsLevel";//获取污染物污染分级程度范围
common.getStationRealtimeData = "sthjAppInsideController.action?getStationRealtimeData";//获取站点数据及信息list
common.getAirRealtimeData = "sthjAppInsideController.action?getAirRealtimeData";//实时概况
common.getAirEnvironmentSurvey = "sthjAppInsideController.action?getAirEnvironmentSurvey";//环境状况
common.provincialAirRanking = "sthjAppInsideController.action?provincialAirRanking";//省内城市空气质量排名
common.cityAirRanking = "sthjAppInsideController.action?cityAirRanking";//市内城市空气质量排名
common.trendsInAirQuality = "sthjAppInsideController.action?trendsInAirQuality";//空气质量变化趋势
common.percentageOfGoodDays = "sthjAppInsideController.action?percentageOfGoodDays";//优良天数占比

//生态环境重点污染源 污染源概况
common.getPollutionCount = "pollutionSourcesController.action?getPollutionCount";//重点污染 总数
common.getRegionCount = "pollutionSourcesController.action?getRegionCount";//根据地域统计污染物
common.getFollowCount = "pollutionSourcesController.action?getFollowCount";//首页关注数据
common.getLvCount = "pollutionSourcesController.action?getLvCount";//获取流域的数据
common.getPkCount = "pollutionSourcesController.action?getPkCount";//排口点信息
common.getlySlCount = "pollutionSourcesController.action?getlySlCount";//流域数量 

//生态环境重点污染源列表
common.getBaseinfoCompany='pollutionSourcesController.action?getBaseinfoCompany';//污染源列表
common.getQueryForFound='pollutionSourcesController.action?getQueryForFound';//污染源列表筛选字典
common.getBaseinfo='pollutionSourcesController.action?getBaseinfo';//重点污染源覆盖物详情
common.getPollutantalarm='pollutionSourcesController.action?getPollutantalarm';//重点污染源覆盖物详情-污染物报警
common.getWateroutputfacday='pollutionSourcesController.action?getWateroutputfacday';//重点污染源覆盖物详情-废水
common.getGasoutputfachourdata='pollutionSourcesController.action?getGasoutputfachourdata';//重点污染源覆盖物详情-废气
common.lineGridRecord='gridSupervisionController.action?lineGridRecord';//重点污染源覆盖物详情-污染物情况图表
common.getSourceInfo='gridSupervisionController.action?getSourceInfo';//重点污染源覆盖物详情-污染物情况图表描述

common.getQueryForFound = "pollutionSourcesController.action?getQueryForFound";//获取检测数据污染源列表查询条件接口
common.getBaseinfoCompanyFun="pollutionSourcesController.action?getBaseinfoCompany";//获取监测数据污染源筛选列表接口
common.getMoninfoBycodeFun="pollutionSourcesController.action?getMoninfoBycode";//排水口列表
common.getPollutantsetFun="pollutionSourcesController.action?getPollutantset";//污染物列表
common.getFlowDateFun="pollutionSourcesController.action?getFlowDate";//排放量流量趋势
common.getConcentrationDateFun="pollutionSourcesController.action?getConcentrationDate";//浓度变化趋势
common.getExceptionDateFun="pollutionSourcesController.action?getExceptionDate";//异常情况占比
common.getTableDateFun="pollutionSourcesController.action?getTableDate";//监测表格数据

//生态环境网格监管
common.getCompanyType='gridSupervisionController.action?getCompanyType';//动态获取重点污染源类型接口
common.getGridSourceList='gridSupervisionController.action?getGridSourceList';//网格监管筛选列表
common.getGridInfoListFun="gridSupervisionController.action?getGridInfoList";//网格列表
common.getGridSpecificListFun="gridSupervisionController.action?getGridSpecificList";//网格详细数据

common.getGridSpecificListFun="gridSupervisionController.action?getGridSpecificList";//网格详细数据
common.gridPersonOnlineFun="gridSupervisionController.action?gridPersonOnline";//统计分析人员在线率趋势变化
common.lineGridRecordFun="gridSupervisionController.action?lineGridRecord";//统计分析巡查情况柱状统计图
common.barGridRecordFun="gridSupervisionController.action?barGridRecord";//统计分析巡查情况饼状图
common.lineTaskFun="gridSupervisionController.action?lineTask";//统计分析任务监管统计图
common.barTaskFun="gridSupervisionController.action?barTask";//统计分析任务监管饼状图
common.getLoginInfoListFun="gridTableController.action?getLoginInfoList";//统计分析登陆情况统计表
common.getGridInfoListFuns="gridTableController.action?getGridInfoList";//统计分析网格化环境监管平台巡查情况表
common.getGridwtclInfoListFun="gridTableController.action?getGridwtclInfoList";//统计分析问题处理接口
common.getTaskInfoListFun="gridTableController.action?getTaskInfoList";//统计分析任务情况统计 
common.getAggregateStatisticsFun="gridTableController.action?getAggregateStatistics";//统计分析网格化环境监管平台综合统计汇总表

common.basicList="gridSupervisionController.action?basicList";//监管概况
common.basicTaskList="gridSupervisionController.action?basicTaskList";//监管概况
common.basicRecordList="gridSupervisionController.action?basicRecordList";//监管概况巡查图表
common.getGridRecordParam="gridSupervisionController.action?getGridRecordParam";//监管概况排名图表

common.getGridSourceListbyGridcodeFun="gridSupervisionController.action?getGridSourceListbyGridcode";//生态环境网格选择网格查询地图上的点
common.getPollutantalarmListFun="pollutionSourcesController.action?getPollutantalarmListbf";//报警数据统计

common.getRegionsProblemData="gridSupervisionController.action?getRegionsProblemData";//生态环境热力分布问题上报数
common.getProblemTypeTop5="gridSupervisionController.action?getProblemTypeTop5";//生态环境热力分布问题数排名
common.getProblemGridSourceList="gridSupervisionController.action?getProblemGridSourceList";//生态环境热力分布地图数据

//通讯录
common.goUserLogin="zdgcAppUserController.action?goUserLogin";//获取最上级部门列表
common.getUserOrDepart="zdgcAppUserController.action?getUserOrDepart";//根据部门id获取部门下级
common.findDepartbyUserList="zdgcAppUserController.action?findDepartbyUserList";//根据部门获取所有人员
common.getRealname="zdgcAppUserController.action?getRealname";//获取所有的人员信息

common.doJoinGroup="maessageController.action?doCreateGroup";//加群

//城市规划
common.getProjectInfoList="csghAppInsideController.action?getProjectInfoList";//获取规划概况中项目列表
common.findProjectIdByproject="csghAppInsideController.action?findProjectIdByproject";//根据id获取项目数据
common.getAttaInfoList="csghAppInsideController.action?getAttaInfoList";//根据id获效果图纸、工程图纸、项目简介
common.projectStatistics="csghAppInsideController.action?projectStatistics";//规划概况统统计分析接口
common.householdsStatistics="csghAppInsideController.action?householdsStatistics";//规划概况改造户数统计

common.getcgbDepart="csghAppInsideController.action?getcgbDepart";//获取区县
common.getCsghReportInfoList="csghAppInsideController.action?getCsghReportInfoList";//获取项目汇报list
common.getCsghReportInfo="csghAppInsideController.action?getCsghReportInfo";//获取项目汇报详情
common.getcsghprogressInfoList="csghAppInsideController.action?getcsghprogressInfoList";//表格数据的项目进度
common.getcsghScaleInfoList ="csghAppInsideController.action?getcsghScaleInfoList";//表格数据的规模统计
common.getcsghprocedureHandleList ="csghAppInsideController.action?getcsghprocedureHandleList";//

common.getNumberProjects ="csghAppInsideController.action?getNumberProjects";//
common.getProjectsProcedure="csghAppInsideController.action?getProjectsProcedure";//
common.getProjectsScale ="csghAppInsideController.action?getProjectsScale";//
common.getProjectsScaleDetails ="csghAppInsideController.action?getProjectsScaleDetails";//
common.getProjectsStage ="csghAppInsideController.action?getProjectsStage";//
common.getProjectsRemove ="csghAppInsideController.action?getProjectsRemove";//
common.getProjectsAdd ="csghAppInsideController.action?getProjectsAdd";//

common.getcsghProblemInfo ="csghAppInsideController.action?getcsghProblemInfo";//城市规划存在问题

common.getRegionList="csghAppInsideController.action?getRegionList";//城市规划监控列表
common.getCountyList="csghAppInsideController.action?getCountyList";//城市规划监控区域

//全域旅游
common.getQylyScenicBasicList ="qylyAppUserController.action?getQylyScenicBasicList";//全部景点
common.getQylyScenicBasic ="qylyAppUserController.action?getQylyScenicBasic";//获取景点详情

//宏观经济
common.getecoTypeIds ="ecoAppInsideController.action?getecoTypeIds";//获取顶部各指标id
common.getTypeData ="ecoAppInsideController.action?getTypeData";//获取顶部各指标总值
common.findEcoIdByTable ="ecoAppInsideController.action?findEcoIdByTable";//获取顶部左侧表格哦图标数据
common.findTypeUpperleftJmrjsr ="ecoAppInsideController.action?findTypeUpperleftJmrjsr";//获取顶部左侧表格哦图标数据
common.findTypeRightUp ="ecoAppInsideController.action?findTypeRightUp";//获取顶部右侧图表数据1.6.7
common.findTypeRightUpGyzjz ="ecoAppInsideController.action?findTypeRightUpGyzjz";//工业增加值获取顶部右侧第一图表数据[2][1]
common.findTypeRightUpGyzjzBt ="ecoAppInsideController.action?findTypeRightUpGyzjzBt";//工业增加值获取顶部右侧第二图表数据[2][2]
common.findTypeRightUpGdzctz ="ecoAppInsideController.action?findTypeRightUpGdzctz";//固定投资获取顶部右侧图表数据
common.findTypeRightUpYbggyssr ="ecoAppInsideController.action?findTypeRightUpYbggyssr";//一般公共预算获取顶部右侧第一图表数据
common.findTypeRightUpYbggyssrBt ="ecoAppInsideController.action?findTypeRightUpYbggyssrBt";//一般公共预算获取顶部右侧第二饼图图表数据
common.getPerformance ="ecoAppInsideController.action?getPerformance";//数据表格经济指标完成情况
common.getProductOutput ="ecoAppInsideController.action?getProductOutput";//数据表格产品产量
common.getPerformance1 ="hgjjAppInsideController.action?getPerformance";//数据表格经济指标完成情况
common.getProductOutput1 ="hgjjAppInsideController.action?getProductOutput";//数据表格产品产量

common.ids=[
'f96aedce94bc11e9be5c00ff4f632a2f',
'f96b007894bc11e9be5c00ff4f632a2f',
'f96af69394bc11e9be5c00ff4f632a2f',
'f96b3ddb94bc11e9be5c00ff4f632a2f',
'f96b5a9794bc11e9be5c00ff4f632a2f',
'f96af85794bc11e9be5c00ff4f632a2f',
'f96af8c694bc11e9be5c00ff4f632a2f'];
common.getBulletinList ="ecoAppInsideController.action?getBulletinList";//获取公报列表
common.getBulletinTypes ="ecoAppInsideController.action?getBulletinTypes";//获取公报类型
common.showBulletinItems ="ecoAppInsideController.action?showBulletinItems";//获取公报数据展示

common.findIdByleftLower ="ecoAppInsideController.action?findIdByleftLower";//获取区县总数居
common.findIdByleftLowerPopup ="ecoAppInsideController.action?findIdByleftLowerPopup";//区县详情数据

//主导产业
common.getQueryList="zdcyAppInsideController.action?getQueryList";//获取主导产业类型字典
common.getEnterpriseList="zdcyAppInsideController.action?getEnterpriseList";//获取主导产业列表
common.getIndustryOutputInfo  ="zdcyAppInsideController.action?getIndustryOutputInfo";//各产业产值
common.getProportionOfEnterprises  ="zdcyAppInsideController.action?getProportionOfEnterprises";//各企业数量占比
common.getTypeOfEnterprises  ="zdcyAppInsideController.action?getTypeOfEnterprises";//各类型企业数量

common.getProportionOfOutput  ="zdcyAppInsideController.action?getProportionOfOutput";//各类主导产业产值占比
common.getIndustryOutput  ="zdcyAppInsideController.action?getIndustryOutput";//各产业产值详情
common.getOutputTrends  ="zdcyAppInsideController.action?getOutputTrends";//近5年/月各类型主导产业产值变化趋势

common.getQueryList  ="zdcyAppInsideController.action?getQueryList";//各产业类型
common.getEntDeatil  ="zdcyAppInsideController.action?getEntDeatil";//企业详情
common.getIndustryOutputDetails="zdcyAppInsideController.action?getIndustryOutputDetails";//企业详情工业值
common.getIndustryOutputStatistic ="zdcyAppInsideController.action?getIndustryOutputStatistic";//企业详情工业图表
common.getIndustrySaleStatistic="zdcyAppInsideController.action?getIndustrySaleStatistic";//企业详情工业销售图表
common.getProductionDetails="zdcyAppInsideController.action?getProductionDetails";//获取产品产量详情表格
common.getProductionStatistic="zdcyAppInsideController.action?getProductionStatistic";//获取产品产量图表
common.getBenefitDetails="zdcyAppInsideController.action?getBenefitDetails";//获取产品详情效益数值
common.getIncomeAndCostStatistic="zdcyAppInsideController.action?getIncomeAndCostStatistic";//获取产品详情效益收入与成本变化趋势图表
common.getAssetsAndLiabilitiesStatistic ="zdcyAppInsideController.action?getAssetsAndLiabilitiesStatistic ";//获取产品详情效益资产与负债变化趋势图表
common.getValueAddedTaxStatistic="zdcyAppInsideController.action?getValueAddedTaxStatistic";//获取产品详情效益应交增值税变化趋势图表
common.getEmployedWorkersStatistic="zdcyAppInsideController.action?getEmployedWorkersStatistic";//获取产品详情效益平均用工人数变化趋势图表

//能源态势
common.getEnterpriseList1="nytsAppInsideController.action?getEnterpriseList";//获取企業列表
common.getEnterpriseStatistics="nytsAppInsideController.action?getEnterpriseStatistics";//获取企业结构图表
common.getProjectList="nytsAppInsideController.action?getProjectList";//获取项目列表
common.getProjectSum="nytsAppInsideController.action?getProjectSum";//获取各类项目数占比图表
  

//能源态势
common.mcqHeaderData="nytsAppInsideController.action?mcqHeaderData";//煤层气表头接口
common.mcqReserves="nytsAppInsideController.action?mcqReserves";//煤层气进五年（月）探明储量值
common.mcqReservesTb="nytsAppInsideController.action?mcqReservesTb";//煤层气进五年（月）探明储量值同比
common.mcqTheAmountOf="nytsAppInsideController.action?mcqTheAmountOf";//煤层气各用量
common.mcqTheAmountOfTb="nytsAppInsideController.action?mcqTheAmountOfTb";//煤层气各用量同比
common.mcqUseRatio="nytsAppInsideController.action?mcqUseRatio";//煤层气利用率
common.mcqFactoryPrice="nytsAppInsideController.action?mcqFactoryPrice";//煤层气平均出厂价格

common.getMtczGyzscTable="nytsAppInsideController.action?getMtczGyzscTable";//工业总产值表格
common.getMtczGyzscStatistics="nytsAppInsideController.action?getMtczGyzscStatistics";//工业总产值图表

common.getMtczGyxsTable="nytsAppInsideController.action?getMtczGyxsTable";//工业销售产值表格
common.getMtczGyxsStatistics="nytsAppInsideController.action?getMtczGyxsStatistics";//工业销售产值图表

common.getMtczCqzscTable="nytsAppInsideController.action?getMtczCqzscTable";//产品总产值表格
common.getMtczCqzscStatistics="nytsAppInsideController.action?getMtczCqzscStatistics";//产品总产值图表

common.getMtczCqxsTable="nytsAppInsideController.action?getMtczCqxsTable";//产品销售产值表格
common.getMtczCqxsStatistics="nytsAppInsideController.action?getMtczCqxsStatistics";//产品销售产值图表

common.getCtdlStatistics="nytsAppInsideController.action?getCtdlStatistics";//传统电力

common.getXnyfdZb="nytsAppInsideController.action?getXnyfdZb";//新能源饼图
common.getProjectTypeStatistics="nytsAppInsideController.action?getProjectTypeStatistics";//投资额比较柱状图
common.getProjectXq="nytsAppInsideController.action?getProjectXq";//项目问题详情||||||| .r67661
common.getXnyfdZb="nytsAppInsideController.action?getXnyfdZb";//新能源饼图=======
common.getXnyfdZb="nytsAppInsideController.action?getXnyfdZb";//新能源饼图
common.getFdxsStatistics="nytsAppInsideController.action?getFdxsStatistics";//新能源折线图
common.getxwdStr="nytsAppInsideController.action?getxwdStr";//销往地分析

common.typeScoreStatistics="wmgcAppInsideController.action?typeScoreStatistics";//
common.typeShowDwScoreDetailTy="wmgcAppInsideController.action?typeShowDwScoreDetailTy";//选择类型后按类型展示点位得分明细---通用
common.typeShowDwScoreDetailJdb="wmgcAppInsideController.action?typeShowDwScoreDetailJdb";//选择类型后按类型展示点位得分明细---街道办
common.monthNumStatistics="wmgcAppInsideController.action?monthNumStatistics";//星级评定
common.monthNumStatisticsZb="wmgcAppInsideController.action?monthNumStatisticsZb";//月份星级占比
//文明共创
common.getLevelBasicList="wmgcAppInsideController.action?getLevelBasicList";//
common.getDwSum="wmgcAppInsideController.action?getDwSum";//获取点位本月总数和比上月增加数+
common.getLevelStatistics="wmgcAppInsideController.action?getLevelStatistics";//星级展示统计
common.getLevelStatisticsList="wmgcAppInsideController.action?getLevelStatisticsList";//星级展示统计表格
common.getCmsCcdtList="wmgcAppInsideController.action?getCmsCcdtList";//创城动态

//全域旅游
common.getQylyToiletList="qylyAppUserController.action?getQylyToiletList";//全域旅游厕所
common.getQylyToilet="qylyAppUserController.action?getQylyToilet";//全域旅游厕所详情
common.getQylyScenicBasicList="qylyAppUserController.action?getQylyScenicBasicList";//获取景区列表
common.getToiletStatistics="qylyAppUserController.action?getToiletStatistics";//厕所概况
common.getScenicBasicStatistics="qylyAppUserController.action?getScenicBasicStatistics";//景区概况
common.getScenicVideoList="qylyAppUserController.action?getScenicVideoList";//景点介绍
common.getScenicEntity="qylyAppUserController.action?getScenicEntity";//获取单个景点视频

common.getQylyVillageBasicList="qylyAppUserController.action?getQylyVillageBasicList";//获取示范村列表
common.getQylyVillageBasic="qylyAppUserController.action?getQylyVillageBasic";//获取示范村详情
common.getVillageBasicStatistics="qylyAppUserController.action?getVillageBasicStatistics";//示范村概况信息

common.getImgList="nytsAppInsideController.action?getImgList";//获取图册
common.getHomeData="hgjjAppInsideController.action?getHomeData";//获取宏观经济首页数据
common.getCityGDP="hgjjAppInsideController.action?getCityGDP";//宏观经济GDP
common.getIndustrialValueAdded="hgjjAppInsideController.action?getIndustrialValueAdded";//宏观经济工业增加值
common.getFixedAssetsInvestment="hgjjAppInsideController.action?getFixedAssetsInvestment";//宏观经济固定资产投资
common.getCustomsTrading="hgjjAppInsideController.action?getCustomsTrading";//宏观经济海关出口
common.getCountyData="hgjjAppInsideController.action?getCounty";//宏观经济各区县经济指标
common.getDisposableIncome="hgjjAppInsideController.action?getDisposableIncome";//宏观经济居民人均收入
common.getSocialConsumerGoods="hgjjAppInsideController.action?getSocialConsumerGoods";//宏观经济社会消费品
common.getCommonalityIncome="hgjjAppInsideController.action?getCommonalityIncome";//宏观经济一般公共预算收入
//能源改版
common.getJcghTitles="nytsAppGbInsideController.action?getJcghTitles";//能源首页获取标题 
common.getJcghContents="nytsAppGbInsideController.action?getJcghContents";//能源首页 获取内容 
common.getMtEnterpriseList="nytsAppGbInsideController.action?getMtEnterpriseList";//能源煤炭企业列表
common.getMtProjectList="nytsAppGbInsideController.action?getMtProjectList";//能源煤炭项目列表
common.getMtReportList="nytsAppGbInsideController.action?getMtReportList";//能源煤炭项目详情图表
common.getMtTjQuantity="nytsAppGbInsideController.action?getMtTjQuantity";//能源煤炭统计数量
common.getMtTjProduction="nytsAppGbInsideController.action?getMtTjProduction";//能源煤炭统计产值
common.getMtTjOutput="nytsAppGbInsideController.action?getMtTjOutput";//能源煤炭统计产量 
common.getMtTjMarket="nytsAppGbInsideController.action?getMtTjMarket";//能源煤炭统计销量
common.getMtEnterpriseOutputList="nytsAppGbInsideController.action?getMtEnterpriseOutputList";//能源煤炭产能产量列表
common.getMtEnterpriseOutputTj="nytsAppGbInsideController.action?getMtEnterpriseOutputTj";//能源煤炭产能产量头统计
common.getMtEntIdOutputTj="nytsAppGbInsideController.action?getMtEntIdOutputTj";//能源煤炭产能产量详情统计
common.getMtTjMap="nytsAppGbInsideController.action?getMtTjMap";//能源煤炭统计分析数据
common.getMtTjMarketForm="nytsAppGbInsideController.action?getMtTjMarketForm";//能源煤炭统计分析表格数据

common.getMcqGeneralSituation="nytsAppGbInsideController.action?getMcqGeneralSituation";//能源煤层气概况
common.getMcqEnterpriseList="nytsAppGbInsideController.action?getMcqEnterpriseList";//能源煤层气企业列表
common.getMcqProjectList="nytsAppGbInsideController.action?getMcqProjectList";//能源煤层气项目列表
common.getMcqReport="nytsAppGbInsideController.action?getMcqReport";//能源煤层气项目详情列表
common.getMcqStatistical="nytsAppGbInsideController.action?getMcqStatistical";//能源煤层气统计分析
common.getXnyEnterpriseList="nytsAppGbInsideController.action?getXnyEnterpriseList";//能源新能源企业
common.getXnyProjectList="nytsAppGbInsideController.action?getXnyProjectList";//能源新能源项目
common.getXnyReport="nytsAppGbInsideController.action?getXnyReport";//能源新能源项目详情
common.getXnyTjPhase="nytsAppGbInsideController.action?getXnyTjPhase";//能源新能源统计分析

common.setBrowseMark = "zdgcAppUserController.action?setBrowseMark";//获取用户登录行为痕迹



