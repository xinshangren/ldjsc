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
  showHgckjkzeEchars1: function (echarts, value,ent) {
	const myCharts = echarts.init(value);
	var dataent = ent.date;
	var dataList = [];
	var map = {
		name: '进口额',
		value: dataent.jkNum
	}
	var map1 = {
		name: '出口额',
		value: dataent.ckNum
	}
	dataList.push(map);
	dataList.push(map1);
	const colorList = ['#3D9AF5', '#5ED9A7'];
	var option = {
		backgroundColor: '#ffffff',
		series: [{
				type: 'pie',
				radius: [0, 26],
				label: {
					normal: {
						show: false
					}
				},
				itemStyle: {},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: this.appendBaseColor(dataList, colorList, 0.6)
			},
			{
				type: 'pie',
				radius: [55, 70],
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
			}
		]
	};
    myCharts.setOption(option);
  },
  showHgckjkzeEchars2: function (echarts, value, ret,downimg,upimg) {
    const myCharts = echarts.init(value);
	var dataShadow = [];
	var dataAxis = [];
	var dataAP = [];
	dataAxis.push("进口增速");
	dataAxis.push("出口增速");
	dataAP.push(ret.date.jkRatio);
	dataAP.push(ret.date.ckRatio);
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
			right: '5%',
			top: '0%',
			left: '5%',
			bottom: '8%',
			containLabel: true
		},
		xAxis: {
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
		yAxis: {
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
				interval: 0,
				formatter: function(value) {
					var isFlag = false;
					var tbValue = '';
					if(value === '进口增速') {
						tbValue = ret.date.jkRatio; //同比
					} else {
						tbValue = ret.date.ckRatio; //同比
					}
					if(tbValue > 0) {
						isFlag = true;
					} else {
						isFlag = false;
					}
					if (tbValue == '-') {
						return "{a|" + value + "}" + "\t" + "{c|" + tbValue + "}";
					  } else {
						if (isFlag) {
						  return "{a|" + value + "}" + "\t" + "{c|" + tbValue + "%}" + "\t" + "{warnValue|}";
						} else {
						  return "{a|" + value + "}" + "\t" + "{b|" + tbValue + "%}" + "\t" + "{warnValue1|}";
						}
					  }

				},
				// margin: 20,
				 // margin: 20,
				 rich: {
					//这里的rich，下面有解释
					warnValue: {
					  //这里的warnValue对应上面的标签名
					  height: 10,
					  align: 'center',
					  backgroundColor: {
						image:upimg //这个warnImg是上面定义的图片var warnImg = "img/warn.png";
					  }
					},
					warnValue1: {
					  //这里的warnValue对应上面的标签名
					  height: 10,
					  align: 'center',
					  backgroundColor: {
						image: downimg //这个warnImg是上面定义的图片var warnImg = "img/warn.png";
					  }
					},
					a: {
					  color: '#000',
					  fontSize: 13
					},
					b: {
					  color: '#14d692',
					  fontSize: 13
					},
					c: {
					  color: '#f30011',
					  fontSize: 13
					}
				  }
			}
		},
		series: [{ // For shadow
				type: 'bar',
				barWidth: 30, //柱子宽度
				itemStyle: {
					normal: {
						color: function(params) {
							var colorList = ['#E3F2FF', '#FFF9E6'];
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
						show: false
					}
				},
				itemStyle: {
					normal: {
						color: function(params) {
							var colorList = [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#00adff'
							}, {
								offset: 1,
								color: '#84DFFB'
							}]), new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
								offset: 0,
								color: '#f3f3f3'
							}, {
								offset: 1,
								color: '#FFC56E'
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
  showHgckjkzeEchars3: function (echarts, value, ret) {
    const myCharts = echarts.init(value);
	var listZe = ret.listZe; //总额数据
	var listJk = ret.listJk; //进口数据
	var listCk = ret.listCk; //出口数据

	var xLabel = [];
	var searList = [];
	var dataListValue1 = [];
	var dataListValue2 = [];

	var dataListValue5 = [];
	var dataListValue6 = [];
	var dataListValue7 = [];
	var lengdList = ['进口总额', '出口总额', '总额增速', '进口增速', '出口增速'];
	var flag = false;
	for(let i = 0; i < listZe.length; i++) {
		var year = listZe[i].YEAR; //分段标题
		xLabel.push(year);
		dataListValue1.push((listJk[i].indexdata));
		dataListValue2.push((listCk[i].indexdata));

		dataListValue5.push((listZe[i].yonydata));
		dataListValue6.push((listJk[i].yonydata));
		dataListValue7.push((listCk[i].yonydata));
	}
	var map0List = [];
	for(let i = 0; i < dataListValue1.length; i++) {
		var index = 0;
		var value1 = dataListValue1[i];
		var value2 = dataListValue2[i];
		index = value1 + value2;
		if(index > 0) {
			map0List.push(index + 100000);
		} else {
			map0List.push(0);
		}
	}
	var yMax = Math.max.apply(null, map0List);
	var map0List1=[];
	for(let i = 0; i < map0List.length; i++) {
		if(map0List[i] > 0) {
			map0List1.push(yMax);
		} else {
			map0List1.push(0);
		}
	}
	console.log(map0List1);
	
	var map0 = { // For shadow
		type: 'bar',
		barWidth: 30, //柱子宽度
		itemStyle: {
			normal: {
				color: function(params) {
					var colorList = ['#EEEEEE'];
					return colorList[params.dataIndex]
				}
			}
		},
		barGap: '-120%',
		barCategoryGap: '40%',
		data: map0List1,
		animation: false
	}
	var map1 = {
		name: lengdList[0],
		type: 'bar',
		barWidth: 20, //柱子宽度
		color: '#3D9AF5',
		stack: xLabel[0],
		data: dataListValue1
	}
	var map2 = {
		name: lengdList[1],
		type: 'bar',
		color: '#5ED9A7',
		stack: xLabel[0],
		barWidth: 20, //柱子宽度
		data: dataListValue2
	}
	var map5 = {
		name: lengdList[2],
		type: 'line',
		symbol: 'circle', //折线点设置为实心点
		symbolSize: 8, //折线点的大小
		yAxisIndex: 1,
		itemStyle: {
			color: '#00DB7B'
		},
		data: dataListValue5,
	}

	var map6 = {
		name: lengdList[3],
		type: 'line',
		symbol: 'circle', //折线点设置为实心点
		symbolSize: 8, //折线点的大小
		yAxisIndex: 1,
		itemStyle: {
			color: '#FFBE62'
		},
		data: dataListValue6,
	}

	var map7 = {
		name: lengdList[4],
		type: 'line',
		symbol: 'circle', //折线点设置为实心点
		symbolSize: 8, //折线点的大小
		yAxisIndex: 1,
		itemStyle: {
			color: '#5DEFF8'
		},
		data: dataListValue7,
	}
	searList.push(map0);
	searList.push(map1);
	searList.push(map2);
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
			itemWidth: 10,
			x: 'center',
			data: lengdList,
			textStyle: {
				rich: {
					a: {
						width: 100,
					}
				},
				textFont: '11px verdana'
			},
		},
		grid: {
			right: '2%',
			top: '24%',
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
			splitLine: {
				show: false
			},
			splitArea: {
				show: false
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
			name:'总额(万元)',
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
				name:'增速(%)',
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



