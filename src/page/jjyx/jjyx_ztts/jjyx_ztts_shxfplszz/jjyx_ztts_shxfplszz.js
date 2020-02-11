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
  showShxfplszeEchars1: function (echarts, value, entList, ret) {
    const myCharts = echarts.init(value);
	var allData = 0;
	var totalData = ret.totalData;
	for(let i = 0; i < totalData.length; i++) {
		var type = totalData[i].type;
		var indexdata = totalData[i].indexdata;
		var yonydata = totalData[i].yonydata;
		if(type == '累计') {
			allData = indexdata;
		}

	}
	var dataList = [];
	for(let i = 0; i < entList.length; i++) {
		var map = {
			name: entList[i].statisname,
			value: entList[i].indexdata
		}
		dataList.push(map);
	}

	const colorList = ['#faad14', '#3ca1ec'];
	var option = {
		title: {
			text: '\t\t\t零售总额\n\t\t\t' + allData + "\n\t\t\t\t\t亿元",
			textStyle: {
				color: '#666666',
				fontSize: 14,
			},
			top: '38%',
			left: '38%',
		},
		backgroundColor: '#fff',
		series: [{
			type: 'pie',
			radius: [50, 60],
			label: {
				normal: {
					textStyle: {
						color: '#000'
					},
					fontSize: 14,
					fontFamily: 'PingFangSC',
					fontWeight: 400,
					formatter: '{b|{b}}\n{b|{c}万元}\n{b|{d}%}',
					rich: {
						c: {
							color: '#000000',
							fontSize: 14,
							lineHeight: 5
						},
						b: {
							lineHeight: 18,
							color: '#000000',
							fontSize: 12,
							height: 40
						},
					}
				}
			},
			labelLine: {
				show: true,
				lineStyle: {
					color: '#000000',
				}
			},
			data: this.appendBaseColor(dataList, colorList, 1)
		}]
	};

    myCharts.setOption(option);
  },
  showShxfplszeEchars2: function (echarts, value, list) {
    const myCharts = echarts.init(value);
    var dataShadow = [];
	var dataAxis = [];
	var dataAP = [];
	for(let i = 0; i < list.length; i++) {
		var name = list[i].statisname;
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
		},grid: {
			right: '2%',
			top: '5%',
			left: '2%',
			bottom: '8%',
			containLabel: true
		},
		xAxis: {
			position: 'right',
			type: 'category',
			axisLine: {
				show: false
			},
			axisLabel: {
				interval: 0,
				formatter: function(value) {
					var isFlag = false;
					var tbValue = '';
					for(let i = 0; i < list.length; i++) {
						var statisname = list[i].statisname; //名字
						var indexdata = list[i].indexdata; //值
						if(value === statisname) {
							tbValue = list[i].yonydata; //同比
							if(tbValue > 0) {
								isFlag = true;
							} else {
								isFlag = false;
							}
							if(tbValue == '-') {
								return value + '\t' + tbValue + "\t" + '';
							} else {
								if(isFlag) {
									return value + '\t' + tbValue + "%\t" + '{warnValue|}';
								} else {
									return value + '\t' + tbValue + "%\t" + '{warnValue1|}';
								}
							}

						}

					}
				},
				// margin: 20,
				rich: {
					//这里的rich，下面有解释
					warnValue: {
						//这里的warnValue对应上面的标签名
						height: 10,
						align: 'center',
						backgroundColor: {
							image: '../img/hgjj_up_jt_bg.png' //这个warnImg是上面定义的图片var warnImg = "img/warn.png";
						}
					},
					warnValue1: {
						//这里的warnValue对应上面的标签名
						height: 10,
						align: 'center',
						backgroundColor: {
							image: '../img/hgjj_down_jt_bg.png' //这个warnImg是上面定义的图片var warnImg = "img/warn.png";
						}
					}
				}
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			data: dataAxis
		},
		yAxis: {
			type: 'value',
			position: 'bottom',
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
				barWidth: 30, //柱子宽度
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
  showShxfplszeEchars3: function (echarts, value, dataList1) {
    const myCharts = echarts.init(value);
	var dataList = dataList1.reverse();
	var allYear = [];
	var xLabel = [];
	var searList = [];
	var dataListValue1 = [];
	var dataListValue5 = [];
	var lengdList = ['零售总额', '增速'];
	var flag = false;
	for(let i = 0; i < dataList.length; i++) {
		var year = dataList[i].year; //分段标题
		var yearIncreaseRate = dataList[i].yearRate; //分段数据
		for(let j = 0; j < yearIncreaseRate.length; j++) {
			var enti = yearIncreaseRate[j];
			var quarter = enti.quarter; //季度
			var quarterdata = enti.quarterRate;
			var value1 = parseFloat(quarterdata[0].indexdata); //全市的值

			var valuezs1 = parseFloat(quarterdata[0].yonydata); //全市的增速

			dataListValue1.push(value1);

			dataListValue5.push(valuezs1);
			xLabel.push(quarter);
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
		if(dataListValue1[i] > 0) {
			map0List.push(yMax + 100);
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
					var colorList = ['#E3F2FF', '#FFF9E6', '#E3F2FF'];
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
		color: '#21C1F5',
		stack: xLabel[0],
		data: dataListValue1
	}

	var map5 = {
		name: lengdList[1],
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
	console.log(map0);
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
			  bottom: '0px',     
			  height:'15px' 
			}
		  ],
		grid: {
			right: '2%',
			top: '16%',
			left: '2%',
			bottom: '8%',
			height:'210px',
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
			axisLabel: {
				inside: true
			},
			data: allYear
		}],
		yAxis: [{
				name: '零售总额(万元)',
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



