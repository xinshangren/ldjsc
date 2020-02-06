//获取第1个图表
export const echarsEnti = {
  appendBaseColor: function (dataList, colorList, opacity) {
    const temp = [];
    for (let i in dataList) {
      const tempObj = {
        ...dataList[i],
        itemStyle: {
          color: colorList[i],
          opacity: opacity
        }
      };
      temp.push(tempObj)
    }
    return temp;
  },
  qyzjzEchars1: function (echarts, value,ret) {
    const myCharts = echarts.init(value);
	var valueList = [];
	var xLabel = [];
	var allYear = [];
	var totalData1 = ret.totalRateData; //生产总值增长速度
	var totalData = totalData1.reverse();
	for(let i = 0; i < totalData.length; i++) {
		var year = totalData[i].year;
		allYear.push(year);
		var monthRateData = totalData[i].monthRateData; //年份数组
		for(let j = 0; j < monthRateData.length; j++) {
			var month = monthRateData[j].month;
			var rate = monthRateData[j].rate;
			valueList.push(rate);
			xLabel.push(month);
		}
	}
	var areaname = ['数量'];
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		
		dataZoom: [
			{
			  type: 'slider',
			  throttle: '50',
			  minValueSpan: 4,
			  start: 0,
			  end: 15,
			  show:true,        
			}
		  ],
		grid: {
			top: '10%',
			left: '2%',
			right: '4%',
			bottom: '10%',
			containLabel: true
		},
		xAxis: [{
			axisLine: {
				lineStyle: {
					color: '#000',
				}
			},
			type: 'category',
			boundaryGap: false,
			data: xLabel,
			splitLine: {
				show: false,

			},
			"axisLabel": {
				"interval": 0,
				"show": true,
				"splitNumber": 15,
				"textStyle": {
					"fontFamily": "微软雅黑",
					"fontSize": 12,
					"color": '#000'
				}
			},
			splitArea: {
				show: false
			}
		}, {
			position: 'bottom',
			offset: 50,
			axisLine: {
				onZero: false,
				show: false
			},
			axisTick: {
				length: 0,
				inside: true,
				interval: 5,
				lineStyle: {
					color: '#000',
					fontSize: '14px'
				}
			},
			"axisLabel": {
				"interval": 0,
				"inside": true,
				"show": true,
				"splitNumber": 15,
				"textStyle": {
					"fontFamily": "微软雅黑",
					"fontSize": 12,
					"color": '#000'
				}
			},
			data: allYear
		}],
		yAxis: {
			type: 'value',
			axisLine: {
				lineStyle: {
					color: '#000',
				}
			},
			axisLabel: {
				formatter: '{value}%',
				show: true,
				textStyle: {
					color: '#000'
				}
			},
			splitLine: { //网格线
				show: false
			},
			splitArea: {
				show: false
			},

		},
		series: [{
			name: areaname[0],
			smooth: false,
			type: 'line',
			symbol: 'circle', //折线点设置为实心点
			symbolSize: 8, //折线点的大小
			smooth: true,
			data: valueList,
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#C9FFFD'
					}, {
						offset: 1,
						color: '#ffffff'
					}], false)

				}
			},
			itemStyle: {
				normal: {
					color: '#ffffff',
					borderColor: '#3f9bf5',
					borderWidth: 1,
					lineStyle: {
						color: "#3f9bf5" //折线的颜色
					},
				}
			}
		}]
	};
    myCharts.setOption(option);
  },
  qyzjzEchars2: function (echarts, value,ret) {
    const myCharts = echarts.init(value);
	var electricityRateData1 = ret.electricityRateData; //全社会用电量增长速度
	var electricityRateData = electricityRateData1.reverse();

	var electricityData = ret.electricityData; //第二个标题

	var allYear = [];
	var xLabel = [];
	var searList = [];
	var dataListValue1 = [];
	var dataListValue8 = [];
	var lengdList = ['用电量', '增速'];
	var flag = false;
	for(let i = 0; i < electricityRateData.length; i++) {
		var year = electricityRateData[i].year; //分段标题
		var yearIncreaseRate = electricityRateData[i].monthRateData; //分段数据
		for(let j = 0; j < yearIncreaseRate.length; j++) {
			var enti = yearIncreaseRate[j];
			var month = enti.month;
			var num = enti.num;
			var rate = enti.rate;
			dataListValue1.push(num);
			dataListValue8.push(rate);
			xLabel.push(month);
		}
		allYear.push('');
		allYear.push('');
		allYear.push('');
		allYear.push(year);
		allYear.push('');
		allYear.push('');

	}
	var map0List = [];
	var yMax = Math.max.apply(null, dataListValue1);
	for(let i = 0; i < dataListValue1.length; i++) {
		var index = 0;
		var value1 = dataListValue1[i];
		index = value1;
		if(index > 0) {
			map0List.push(yMax + 1);
		} else {
			map0List.push(0);
		}
	}
	var map0 = { // For shadow
		type: 'bar',
		barWidth: 30, //柱子宽度
		itemStyle: {
			normal: {
				color: function(params) {
					var colorList = ['#E3F2FF'];
					return colorList[params.dataIndex]
				}
			}
		},
		barGap: '-80%',
		barCategoryGap: '40%',
		data: map0List,
		animation: false
	}

	var map1 = {
		name: lengdList[0],
		type: 'bar',
		barWidth: 20, //柱子宽度
		itemStyle: {
			normal: {
				//颜色渐变
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: '#3e9bf5'
				}, {
					offset: 0.8,
					color: '#58b5f9'
				}, {
					offset: 1,
					color: '#6dc9fd'
				}])
			}
		},
		stack: xLabel[0],
		data: dataListValue1
	}
	var map8 = {
		name: lengdList[1],
		type: 'line',
		//		symbol: 'circle', //折线点设置为实心点
		symbolSize: 8, //折线点的大小
		yAxisIndex: 1,
		itemStyle: {
			normal: {
				color: '#FFBE62',
				borderColor: '#FFBE62',
				borderWidth: 1,
				lineStyle: {
					color: "#FFBE62" //折线的颜色
				},
			}
		},
		data: dataListValue8,
	}
	searList.push(map0);
	searList.push(map1);
	searList.push(map8);
	console.log(searList);
	console.log(xLabel);
	console.log(allYear);

	var option = {
		legend: {
			orient: 'horizontal',
			show: true,
			itemHeight: 7,
			itemWidth: 13,
			x: 'center',
			y: "0%",
			data: lengdList,
			textStyle: {
				rich: {
					a: {
						width: 100,
					}
				},
				textFont: '11px verdana'
			}
		},
		
		dataZoom: [
			{
			  type: 'slider',
			  throttle: '50',
			  minValueSpan: 4,
			  start: 0,
			  end: 15,
			  show:true,        
			}
		  ],
		grid: {
			right: '2%',
			top: '22%',
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
			splitLine: {
				show: false
			},
			splitArea: {
				show: false
			},
			axisTick: {
				show: false,
				alignWithLabel: false
			},
			"axisLabel": {
				"interval": 0,
				"show": true,
				"textStyle": {
					"fontFamily": "微软雅黑",
					"fontSize": 12,
					"color": '#000'
				}
			},
			data: xLabel
		}, {
			splitArea: {
				show: false
			},
			splitLine: {
				show: false
			},
			position: 'bottom',
			offset: 50,
			axisLine: {
				onZero: false,
				show: false
			},
			axisTick: {
				length: 0,
				inside: true,
				interval: 5,
				lineStyle: {
					color: '#000',
					fontSize: '14px'
				}
			},
			axisLabel: {
				inside: true
			},
			data: allYear
		}],
		yAxis: [{
				name: "用电量(千瓦时)",
				type: 'value',
				max: yMax,
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
				splitLine: { //网格线
					show: false
				},
				splitArea: {
					show: false
				}
			},
			{
				name: "增速(%)",
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
				splitLine: { //网格线
					show: false
				},
				splitArea: {
					show: false
				}
			}
		],
		series: searList
	};
    myCharts.setOption(option);
  }
  ,
  qyzjzEchars3: function (echarts, value,ret) {
    const myCharts = echarts.init(value);
	var electricityRateData = ret.electricityIndustryData; //全行业用电量与增速
	//	var electricityRateData = electricityIndustryData1.reverse();
	var allYear = [];
	var xLabel = [];
	var searList = [];
	var dataListValue1 = [];
	var dataListValue2 = [];
	var dataListValue3 = [];

	var dataListValue5 = [];
	var dataListValue6 = [];
	var dataListValue7 = [];
	var lengdList = [];
	var flag = false;
	for(let i = 0; i < electricityRateData.length; i++) {
		var industry = electricityRateData[i].industry; //名称
		var monthRateData = electricityRateData[i].monthRateData; //数组值
		lengdList.push(industry);
		for(let k = 0; k < monthRateData.length; k++) {
			var rate = monthRateData[k].rate;
			var num = monthRateData[k].num;
			var monthseason = monthRateData[k].monthseason;
			if(i == 0) {
				xLabel.push(monthseason);
			}
			if(i === 0) {
				dataListValue1.push(num);
				dataListValue5.push(rate);
			} else if(i === 1) {
				dataListValue2.push(num);
				dataListValue6.push(rate);
			} else if(i === 2) {
				dataListValue3.push(num);
				dataListValue7.push(rate);
			}

		}
	}
	var map1 = {
		name: lengdList[0],
		type: 'bar',
		barWidth: 20, //柱子宽度
		color: '#FFBE62',
		stack: xLabel[0],
		data: dataListValue1
	}
	var map2 = {
		name: lengdList[1],
		type: 'bar',
		color: '#5DEFF8',
		stack: xLabel[0],
		barWidth: 20, //柱子宽度
		data: dataListValue2
	}
	var map3 = {
		name: lengdList[2],
		type: 'bar',
		color: '#21C1F5',
		stack: xLabel[0],
		barWidth: 20, //柱子宽度
		data: dataListValue3
	}
	var map5 = {
		type: 'line',
		symbol: 'circle', //折线点设置为实心点
		symbolSize: 8, //折线点的大小
		yAxisIndex: 1,
		itemStyle: {
			normal: {
				color: '#ffffff',
				borderColor: '#FFBE62',
				borderWidth: 1,
				lineStyle: {
					color: "#FFBE62" //折线的颜色
				},
			}
		},
		data: dataListValue5,
	}

	var map6 = {
		type: 'line',
		symbol: 'circle', //折线点设置为实心点
		symbolSize: 8, //折线点的大小
		yAxisIndex: 1,
		itemStyle: {
			normal: {
				color: '#ffffff',
				borderColor: '#5DEFF8',
				borderWidth: 1,
				lineStyle: {
					color: "#5DEFF8" //折线的颜色
				},
			}
		},
		data: dataListValue6,
	}

	var map7 = {
		type: 'line',
		symbol: 'circle', //折线点设置为实心点
		symbolSize: 8, //折线点的大小
		yAxisIndex: 1,
		itemStyle: {
			normal: {
				color: '#ffffff',
				borderColor: '#21C1F5',
				borderWidth: 1,
				lineStyle: {
					color: "#21C1F5" //折线的颜色
				},
			}
		},
		data: dataListValue7,
	}
	searList.push(map1);
	searList.push(map2);
	searList.push(map3);
	searList.push(map5);
	searList.push(map6);
	searList.push(map7);
	console.log(searList);
	console.log(xLabel);

	var option = {
		legend: {
			orient: 'horizontal',
			show: true,
			itemHeight: 7,
			itemWidth: 13,
			x: '14%',
			data: lengdList,
			textStyle: {
				rich: {
					a: {
						width: 100,
					}
				},
				textFont: '11px verdana'
			}
		},
		grid: {
			right: '2%',
			top: '19%',
			left: '5%',
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
			"axisLabel": {
				"interval": 0,
				"show": true,
				"splitNumber": 15,
				"textStyle": {
					"fontFamily": "微软雅黑",
					"fontSize": 12,
					"color": '#000'
				}
			},
			data: xLabel
		}],
		yAxis: [{
				name: '用电量(亿千瓦时)',
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
				}
			},
			{
				name: '增速(%)',
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
				}
			}
		],
		series: searList
	};
    myCharts.setOption(option);
  }
  ,
  qyzjzEchars4: function (echarts, value,ret) {
    const myCharts = echarts.init(value);
	var electricityRateData = ret.electricityUrbanData; //城乡用电情况
	var allYear = [];
	var xLabel = [];
	var searList = [];
	var dataListValue1 = [];
	var dataListValue2 = [];

	var dataListValue5 = [];
	var dataListValue6 = [];
	var lengdList = [];
	var flag = false;
	for(let i = 0; i < electricityRateData.length; i++) {
		var urben = electricityRateData[i].urben; //名称
		var monthRateData = electricityRateData[i].monthRateData; //数组值
		lengdList.push(urben);
		for(let k = 0; k < monthRateData.length; k++) {
			var rate = monthRateData[k].rate;
			var num = monthRateData[k].num;
			var monthseason = monthRateData[k].monthseason;
			if(i == 0) {
				xLabel.push(monthseason);
			}
			if(i === 0) {
				dataListValue1.push(num);
				dataListValue5.push(rate);
			} else if(i === 1) {
				dataListValue2.push(num);
				dataListValue6.push(rate);
			}

		}
	}
	var map1 = {
		name: lengdList[0],
		type: 'bar',
		barWidth: 20, //柱子宽度
		color: '#FFBE62',
		stack: xLabel[0],
		data: dataListValue1
	}
	var map2 = {
		name: lengdList[1],
		type: 'bar',
		color: '#21C1F5',
		stack: xLabel[0],
		barWidth: 20, //柱子宽度
		data: dataListValue2
	}
	var map5 = {
		type: 'line',
		symbol: 'circle', //折线点设置为实心点
		symbolSize: 8, //折线点的大小
		yAxisIndex: 1,
		itemStyle: {
			normal: {
				color: '#ffffff',
				borderColor: '#FFBE62',
				borderWidth: 1,
				lineStyle: {
					color: "#FFBE62" //折线的颜色
				},
			}
		},
		data: dataListValue5,
	}

	var map6 = {
		type: 'line',
		symbol: 'circle', //折线点设置为实心点
		symbolSize: 8, //折线点的大小
		yAxisIndex: 1,
		itemStyle: {
			normal: {
				color: '#ffffff',
				borderColor: '#21C1F5',
				borderWidth: 1,
				lineStyle: {
					color: "#21C1F5" //折线的颜色
				},
			}
		},
		data: dataListValue6,
	}
	searList.push(map1);
	searList.push(map2);
	searList.push(map5);
	searList.push(map6);
	console.log(searList);
	console.log(xLabel);

	var option = {
		legend: {
			orient: 'horizontal',
			show: true,
			itemHeight: 7,
			itemWidth: 13,
			x: '14%',
			data: lengdList,
			textStyle: {
				rich: {
					a: {
						width: 100,
					}
				},
				textFont: '11px verdana'
			}
		},
		grid: {
			right: '2%',
			top: '19%',
			left: '5%',
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
			"axisLabel": {
				"interval": 0,
				"show": true,
				"splitNumber": 15,
				"textStyle": {
					"fontFamily": "微软雅黑",
					"fontSize": 12,
					"color": '#000'
				}
			},
			data: xLabel
		}],
		yAxis: [{
				name: '用电量(亿千瓦时)',
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
				}
			},
			{
				name: '增速(%)',
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
				}
			}
		],
		series: searList
	};
    myCharts.setOption(option);
  }



}



