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
  showjmrjsrEchars1: function (echarts, value,list) {
	const myCharts = echarts.init(value);
	myCharts.clear();
	var dataShadow = [];
	var dataAxis = [];
	var dataAP = [];
	for(let i = 0; i < list.length; i++) {
		var name = list[i].name;
		var indexdata = list[i].indexdata;
		var yonydata = list[i].yonydata;
		dataAxis.push(name);
		dataAP.push(yonydata);
	}

	var yMax = Math.max.apply(null, dataAP);
	for(var i = 0; i < dataAP.length; i++) {
		if(dataAP[i] < 0) {
			dataShadow.push(dataAP[i] - 5);
		} else {
			dataShadow.push(dataAP[i] + 5);
		}

	}
	var option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			top: 10,
			bottom: 30,
			right:30,
			left: 10
		},
		xAxis: {
			position: 'right',
			type: 'category',
			axisLine: {
				show: false
			},
			axisLabel: {
				show: true
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			data: dataAxis,
			axisLabel: {
				interval: 0
			}

		},
		yAxis: {
			type: 'value',
			position: 'right',
			splitLine: {
				lineStyle: {
					type: 'dashed'
				}
			},
			splitArea: {
				show: false
			}
		},
		series: [{ // For shadow
				type: 'bar',
				barWidth: 25, //柱子宽度
				itemStyle: {
					normal: {
						color: function(params) {
							var colorList = ['#FDF4ED'];
							return colorList[params.dataIndex]
						}
					}
				},
				barGap: '-80%',
				barCategoryGap: '40%',
				data: dataShadow,
				animation: false
			},
			{
				type: 'bar',
				barWidth: 18, //柱子宽度
				label: {
					normal: {
						show: true
					}
				},
				itemStyle: {
					normal: {
						label: {
							show: true, //开启显示
							position: 'top', //在上方显示
							textStyle: { //数值样式
								color: '#000',
								fontSize: 14
							},
							formatter: function(a) {
								var index = a.dataIndex;
								var value = dataAP[index];
								return value + '%';
							}
						},
						color: function(params) {
							var colorList = [new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: '#ffffff'
							}, {
								offset: 1,
								color: '#EE721B'
							}]), new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: '#ffffff'
							}, {
								offset: 1,
								color: '#EE721B'
							}]), new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: '#ffffff'
							}, {
								offset: 1,
								color: '#EE721B'
							}]), new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: '#ffffff'
							}, {
								offset: 1,
								color: '#EE721B'
							}]), new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: '#ffffff'
							}, {
								offset: 1,
								color: '#EE721B'
							}]), new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: '#ffffff'
							}, {
								offset: 1,
								color: '#EE721B'
							}]), new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#ffffff'
							}, {
								offset: 1,
								color: '#2DDA9D'
							}])];
							return colorList[params.dataIndex]
						},
						tooltip: {
							trigger: 'axis',
							axisPointer: { // 坐标轴指示器，坐标轴触发有效
								type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
							}
						}
					},

				},
				data: dataAP
			}
		]
	};
		myCharts.setOption(option);
	},
  showjmrjsrEchars2: function (echarts, value, list) {
    const myCharts = echarts.init(value);
    var xLabel = [];
	var maxValueList = [];
	var valueList = [];
	for(let i = 0; i < list.length; i++) {
		var statisname = list[i].name;
		var indexdata = parseFloat((list[i].indexdata) / 10000).toFixed(2);
		var yonydata = list[i].yonydata;
		valueList.push(indexdata);
		xLabel.push(statisname);
	}
	var yMax = Math.max.apply(null, valueList);
	for(let j = 0; j < valueList.length; j++) {
		maxValueList.push(yMax);
	}
	console.log(valueList);
	console.log(xLabel);

	var option = {
		grid: {
			top: '15%',
			left: '1%',
			right: '1%',
			bottom: '2%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: xLabel,
			splitLine: {
				show: false
			},
			splitArea: {
				show: false
			},
			axisLabel: {        
				show: true,
				textStyle: {	
					fontSize:'11'
				}
			},
		},
		yAxis: {
			name: '亿元',
			type: 'value',
			max: yMax,
			splitLine: {
				show: false
			},
			splitArea: {
				show: false
			}
		},
		series: [{ // 背景色
				type: 'pictorialBar',
				stack: '总量',
				symbol: 'fixed',
				symbolSize: [30, 5],
				symbolMargin: 2,
				symbolRepeat: 'repeat',
				symbolBoundingData: 300,
				z: -10,
				data: maxValueList,
				itemStyle: {
					normal: {
						color: '#E3F0FF',
						label: {
							show: true, //开启显示
							position: 'top', //在上方显示
							textStyle: { //数值样式
								color: '#2AC3F6',
								fontSize: 12
							},
							formatter: function(a) {
								var index = a.dataIndex;
								var value = valueList[index];
								return value + '';
							}
						}
					}
				}
			},
			{ // 背景色
				type: 'pictorialBar',
				stack: '总量',
				symbol: 'fixed',
				symbolSize: [30, 5],
				symbolMargin: 2,
				symbolRepeat: 'repeat',
				symbolBoundingData: 300,
				z: -10,
				data: valueList,
				itemStyle: {
					normal: {
						color: '#2AC3F6'
					}
				}
			}
		]
	};
    myCharts.setOption(option);
  },
  showjmrjsrEchars3: function (echarts, value, list) {
    const myCharts = echarts.init(value);
	var curVal = 0;
	for(let i = 0; i < list.length; i++) {
		var statisname = list[i].statisname;
		if(statisname == '城镇居民人均可支配收入（元）') {
			curVal = list[i].yonydata;
		}

	}

	var angle = [220, -40];

	var option = {
		backgroundColor: '#ECF7FD',
		title: {
			text: '城镇居民',
			bottom: 'left',
			left: 'center',
			textStyle: {
				//文字颜色
				color: '#000',
				//字体风格,'normal','italic','oblique'
				fontStyle: 'normal',
				//字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
				//字体系列
				fontFamily: 'sans-serif',
				//字体大小
				fontSize: 15
			}
		},
		grid: {
			top: '10%',
			left: '2%',
			right: '28%',
			bottom: '2%',
			containLabel: true
		},
		backgroundColor: '#fff',
		tooltip: {
			show: false,
			formatter: "{a} <br/>{b} : {c}%"
		},
		series: [{
			name: '最外层环仪表盘',
			type: "gauge",
			min: -50,
			max: 50,
			startAngle: angle[0],
			endAngle: angle[1],
			splitNumber: 10,
			axisLine: {
				lineStyle: {
					color: [
						[1, "#c1c3c5"]
					],
					width: 1
				}
			},
			axisTick: {
				lineStyle: {
					color: "#fff",
					width: 2
				},
				length: 0,
				splitNumber: 1
			},
			axisLabel: {
				distance: -40,
				formatter: function(v) {
					if(v == 60) {
						return '{a|' + v + '}';
					} else if(v == 85) {
						return '{b|' + v + '}';
					} else {
						return v;
					};
				},
				textStyle: {
					color: "#bbb"
				},
				rich: {
					a: {
						color: '#fbe010'
					},
					b: {
						color: '#3fa7dc'
					}
				}
			},
			splitLine: {
				show: true,
				length: 20,
				lineStyle: {
					color: '#fff',
					width: 2
				}
			},
			itemStyle: {
				normal: {
					color: "#818488",
					shadowColor: 'rgba(0, 0, 0, 0.5)',
					shadowBlur: 10
				}
			},
			detail: {
				formatter: function(v) {
					console.log('v=====' + v);
					if(isNaN(v)) {
						return "-";
					} else {
						return v + "%";
					}
					return v;
				},
				offsetCenter: [0, "60%"],
				textStyle: {
					fontSize: 17,
					color: "#333"
				},
				offsetCenter: [0, "60%"],
				textStyle: {
					fontSize: 17,
					color: "#333"
				}
			},
			title: {
				show: false
			},
			pointer: {
				length: '85%'
			},
			data: [{
				value: curVal
			}]
		}, {
			name: "内环仪表盘四段颜色",
			type: "gauge",
			min: 0,
			max: 100,
			radius: '69%',
			startAngle: angle[0],
			endAngle: angle[1],
			splitNumber: 10,
			axisLine: {
				lineStyle: {
					color: [
						[0, '#58e481'],
						[0.1, '#88e792'],
						[0.2, "#bee58a"],
						[0.3, '#e5e58a'],
						[0.4, '#fbe48a'],
						[0.5, "#ffd27f"],
						[0.6, '#ffb36b'],
						[0.7, '#fb9255'],
						[0.8, "#eb673a"],
						[0.9, "#d9391c"],
						[1, "#d9391c"]
					],
					width: 10
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false
			},
			splitLine: {
				show: true,
				length: 15,
				lineStyle: {
					color: '#fff',
					width: 2
				}
			},
			pointer: {
				length: 0
			},
			detail: {
				show: false
			},
		}]
	}
    myCharts.setOption(option);
  },
  showjmrjsrEchars4: function (echarts, value, list) {
	const myCharts = echarts.init(value);
	var curVal = 0;
	for(let i = 0; i < list.length; i++) {
		var statisname = list[i].statisname;
		if(statisname == '农村居民人均可支配收入（元）') {
			curVal = list[i].yonydata;
		}

	}

	var angle = [220, -40];

	var option = {
		backgroundColor: '#000',
		title: {
			text: '农村居民',
			bottom: 'left',
			left: 'center',
			textStyle: {
				//文字颜色
				color: '#000',
				//字体风格,'normal','italic','oblique'
				fontStyle: 'normal',
				//字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
				//字体系列
				fontFamily: 'sans-serif',
				//字体大小
				fontSize: 15
			}
		},
		grid: {
			top: '10%',
			left: '2%',
			right: '28%',
			bottom: '2%',
			containLabel: true
		},
		backgroundColor: '#fff',
		tooltip: {
			show: false,
			formatter: "{a} <br/>{b} : {c}%"
		},
		series: [{
			name: '最外层环仪表盘',
			type: "gauge",
			min: -50,
			max: 50,
			startAngle: angle[0],
			endAngle: angle[1],
			splitNumber: 10,
			axisLine: {
				lineStyle: {
					color: [
						[1, "#c1c3c5"]
					],
					width: 1
				}
			},
			axisTick: {
				lineStyle: {
					color: "#fff",
					width: 2
				},
				length: 0,
				splitNumber: 1
			},
			axisLabel: {
				distance: -40,
				formatter: function(v) {
					if(v == 60) {
						return '{a|' + v + '}';
					} else if(v == 85) {
						return '{b|' + v + '}';
					} else {
						return v;
					};
				},
				textStyle: {
					color: "#bbb"
				},
				rich: {
					a: {
						color: '#fbe010'
					},
					b: {
						color: '#3fa7dc'
					}
				}
			},
			splitLine: {
				show: true,
				length: 20,
				lineStyle: {
					color: '#fff',
					width: 2
				}
			},
			itemStyle: {
				normal: {
					color: "#818488",
					shadowColor: 'rgba(0, 0, 0, 0.5)',
					shadowBlur: 10
				}
			},
			detail: {
				formatter: function(v) {
					console.log('v=====' + v);
					if(isNaN(v)) {
						return "-";
					} else {
						return v + "%";
					}
					return v;
				},
				offsetCenter: [0, "60%"],
				textStyle: {
					fontSize: 17,
					color: "#333"
				},
				offsetCenter: [0, "60%"],
				textStyle: {
					fontSize: 17,
					color: "#333"
				}
			},
			title: {
				show: false
			},
			pointer: {
				length: '85%'
			},
			data: [{
				value: curVal
			}]
		}, {
			name: "内环仪表盘四段颜色",
			type: "gauge",
			min: 0,
			max: 100,
			radius: '69%',
			startAngle: angle[0],
			endAngle: angle[1],
			splitNumber: 10,
			axisLine: {
				lineStyle: {
					color: [
						[0, '#58e481'],
						[0.1, '#88e792'],
						[0.2, "#bee58a"],
						[0.3, '#e5e58a'],
						[0.4, '#fbe48a'],
						[0.5, "#ffd27f"],
						[0.6, '#ffb36b'],
						[0.7, '#fb9255'],
						[0.8, "#eb673a"],
						[0.9, "#d9391c"],
						[1, "#d9391c"]
					],
					width: 10
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false
			},
			splitLine: {
				show: true,
				length: 15,
				lineStyle: {
					color: '#fff',
					width: 2
				}
			},
			pointer: {
				length: 0
			},
			detail: {
				show: false
			},
		}]
	}
    myCharts.setOption(option);
  },
  showjmrjsrEchars5: function (echarts, value, dataList1) {
	const myCharts = echarts.init(value);
	var dataList = dataList1.reverse();
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
	for(let i = 0; i < dataList.length; i++) {
		var year = dataList[i].year; //分段标题
		var yearIncreaseRate = dataList[i].yearImcomeRate; //分段数据
		for(let j = 0; j < yearIncreaseRate.length; j++) {
			var enti = yearIncreaseRate[j];
			var quarter = enti.quarter; //季度
			var quarterdata = enti.quarterIncomeRate;
			if(!flag) {
				for(let k = 0; k < quarterdata.length; k++) {
					var indexname = quarterdata[k].indexname; //name
					lengdList.push(indexname);
				}
			}
			flag = true;
			var value1 = parseFloat(quarterdata[0].indexdata); //全市的值
			var value2 = parseFloat(quarterdata[1].indexdata); //第一值
			var value3 = parseFloat(quarterdata[2].indexdata); //第二值

			var valuezs1 = parseFloat(quarterdata[0].yonydata); //全市的增速
			var valuezs2 = parseFloat(quarterdata[1].yonydata); //第一值的增速
			var valuezs3 = parseFloat(quarterdata[2].yonydata); //第二值的增速

			dataListValue1.push(value1);
			dataListValue2.push(value2);
			dataListValue3.push(value3);

			dataListValue5.push(valuezs1);
			dataListValue6.push(valuezs2);
			dataListValue7.push(valuezs3);
			xLabel.push(quarter);
		}
		allYear.push('');
		allYear.push('');
		allYear.push('');
		allYear.push(year);
		allYear.push('');
		allYear.push('');

	}

	var map1 = {
		name: lengdList[0],
		type: 'bar',
		barWidth: 15, //柱子宽度
		color: '#00DB7B',
		stack: xLabel[0],
		data: dataListValue1,
		itemStyle: {
			emphasis: {
				barBorderRadius: 30
			},
			normal: {
				barBorderRadius: [10, 10, 0, 0],
			}
		}

	}
	var map2 = {
		name: lengdList[1],
		type: 'bar',
		color: '#FFBE62',
		stack: xLabel[1],
		barWidth: 15, //柱子宽度
		data: dataListValue2,
		itemStyle: {
			emphasis: {
				barBorderRadius: 30
			},
			normal: {
				barBorderRadius: [10, 10, 0, 0],
			}
		}
	}
	var map3 = {
		name: lengdList[2],
		type: 'bar',
		color: '#5DEFF8',
		stack: xLabel[2],
		barWidth: 15, //柱子宽度
		data: dataListValue3,
		itemStyle: {
			emphasis: {
				barBorderRadius: 30
			},
			normal: {
				barBorderRadius: [10, 10, 0, 0],
			}
		}
	}

	var map5 = {
		name: lengdList[0],
		type: 'line',
		symbol: 'circle', //折线点设置为实心点
		symbolSize: 8, //折线点的大小
		yAxisIndex: 1,
		itemStyle: {
			normal: {
				color: '#ffffff',
				borderColor: '#00DB7B',
				borderWidth: 1,
				lineStyle: {
					color: "#00DB7B" //折线的颜色
				},
			}
		},
		data: dataListValue5,
	}

	var map6 = {
			name: lengdList[1],
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
		data: dataListValue6,
	}

	var map7 = {
			name: lengdList[2],
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
	console.log(allYear);

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
			data: xLabel,
			splitLine: {
				show: false
			},
			splitArea: {
				show: false
			}
		}, {
			position: 'bottom',
			offset: 50,
			axisLine: {
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
			data: allYear,
			splitArea: {
				show: false
			}
		}],
		yAxis: [{
				name: "可支配收入(元)",
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
				splitLine: {
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
				splitLine: {
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


}



