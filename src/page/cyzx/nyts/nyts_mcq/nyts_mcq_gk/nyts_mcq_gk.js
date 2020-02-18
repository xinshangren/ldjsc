
//定义js全局变量 名称
export const nytsMcqGkJs = {
	checkStrOfZero:function (str) {
		if (str == '' || str == null || str == undefined) {
			str = 0;
		}
		return str;
	},
    //煤炭概况第一个统计图
    showjmrjsrEchars1: function (echarts,value,dataList){
  const myCharts = echarts.init(value);
    var xLabel = [];
	var searList = [];
	var dataListValue1 = [];
	var dataListValue2 = [];
	var dataListValue5 = [];
	var lengdList = ['产量', '利用量', '利用率'];
	for(let i = 0; i < dataList.length; i++) {
		var year = dataList[i].year; //分段标题
		var date_month = dataList[i].date_month;
		var month = date_month.split("-")[1]; //月
		xLabel.push(month);
		var production_month = this.checkStrOfZero(dataList[i].production_month); //本月产量
		var utilization_amount_month = this.checkStrOfZero(dataList[i].utilization_amount_month); //利用量
		var use_ratio_month = this.checkStrOfZero(dataList[i].use_ratio_month); //煤层气利用率
		dataListValue1.push(production_month);
		dataListValue2.push(utilization_amount_month);
		dataListValue5.push(use_ratio_month);
	}
	var map0 = { // For shadow
		name: lengdList[0],
		type: 'bar',
		barWidth: 13, //柱子宽度
		itemStyle: {
			normal: {
				color: function(params) {
				  return "#ffcc33"
					/*var colorList = ['#EEEEEE'];
					return colorList[params.dataIndex]*/
				}
			}
		},
		barGap: '-80%',
		barCategoryGap: '40%',
		data: dataListValue1,
		animation: false
	}

	var map1 = {
		name: lengdList[1],
		type: 'bar',
		barWidth: 10, //柱子宽度
		color: '#3399ff',
		data: dataListValue2
	}
	var map5 = {
		name: lengdList[2],
		type: 'line',
		symbolSize: 8, //折线点的大小
		yAxisIndex: 1,
		itemStyle: {
			normal: {
				color: '#00DB7B',
				borderColor: '#00DB7B',
				borderWidth: 1,
				lineStyle: {
					color: "#00DB7B" //折线的颜色
				},
			}
		},
		data: dataListValue5,
	}
	searList.push(map0);
	searList.push(map1);
	searList.push(map5);

	var option = {
    color:['#ffcc33','#3399ff','#00DB7B'],
		legend: {
			orient: 'horizontal',
			show: true,
			itemHeight: 7,
			itemWidth: 5,
			x: '29%',
			data: lengdList,
			textStyle: {
				rich: {
					a: {
						width: 80,
					}
				},
				textFont: '11px verdana'
			}
		},
		grid: {
			right: '2%',
			top: '15%',
			left: '2%',
			bottom: '8%',
			containLabel: true
		},
		tooltip: {
			trigger: 'item',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'line' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		xAxis: [{
			type: 'category',
			axisTick: {
				show: false,
				alignWithLabel: false
			},
			axisLabel: {
				"interval": 0,
				"show": true,
				"splitNumber": 15,
				"textStyle": {
					"fontFamily": "微软雅黑",
					"fontSize": 12,
					"color": '#000'
				}
			},
			data: xLabel,
			splitArea: {
				show: false
			}
		}],
		yAxis: [{
				name:'（万立方米）',
				type: 'value',
				axisLabel: {
					textStyle: {
						color: '#000'
					}
				},
				axisLine: {
					lineStyle: {
						color: '#000000',
					}
				},
				splitArea: {
					show: false
				},
				splitLine: {
					show: false
				}
			},
			{
				type: 'value',
				axisLabel: {
					formatter: '{value}%',
					show: true,
					textStyle: {
						color: '#000'
					}
				},
				axisLine: {
					lineStyle: {
						color: '#000000',
					}
				},
				splitArea: {
					show: false
				},
				splitLine: {
					show: false
				}
			}
		],
		series: searList
	};
		myCharts.setOption(option);
    }




}
