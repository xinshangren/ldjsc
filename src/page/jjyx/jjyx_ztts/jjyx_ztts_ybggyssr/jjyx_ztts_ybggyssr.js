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
  showShxfplszeEchars11: function (echarts, value, entList) {
    const myCharts = echarts.init(value);
    var dataList = [];
    var map = {
      name: '税收',
      value: entList.tax_revenue
    }
    dataList.push(map);
    var map1 = {
      name: '非税收',
      value: entList.nontax_receipt
    }
    dataList.push(map1);
    const colorList = ['#3D9AF5', '#DDDDDD'];
    var option = {
      title: {
        text: '税收\n' + entList.tax_revenue + "%",
        textStyle: {
          color: '#666666',
          fontSize: 18,
        },
        top: '38%',
        left: '30%',
      },
      backgroundColor: '#fff',
      series: [{
        type: 'pie',
        radius: [45, 60],
        label: {
          normal: {
            show: false,
            textStyle: {
              color: '#000'
            }
          }
        },
        labelLine: {
          show: false,
          lineStyle: {
            color: '#000000',
          }
        },
        data: this.appendBaseColor(dataList, colorList, 1)
      }]
    };
  
    myCharts.setOption(option);
  },
  showShxfplszeEchars21: function (echarts, value, entList) {
    const myCharts = echarts.init(value);
    var dataList = [];
    var map = {
      name: '税收',
      value: entList.tax_revenue
    }
    dataList.push(map);
    var map1 = {
      name: '非税收',
      value: entList.nontax_receipt
    }
    dataList.push(map1);
    const colorList = ['#DDDDDD', '#FFB752'];
    var option = {
      title: {
        text: '非税收\n' + entList.nontax_receipt + "%",
        textStyle: {
          color: '#666666',
          fontSize: 18,
        },
        top: '38%',
        left: '30%',
      },
      backgroundColor: '#fff',
      series: [{
        type: 'pie',
        radius: [45, 60],
        label: {
          normal: {
            show: false,
          }
        },
        labelLine: {
          show: false,
          lineStyle: {
            color: '#000000',
          }
        },
        data: this.appendBaseColor(dataList, colorList, 1)
      }]
    };
  
    myCharts.setOption(option);
  },
  showShxfplszeEchars31: function (echarts, value, dataList) {
    const myCharts = echarts.init(value);
    var allYear = [];
	var xLabel = [];
	var searList = [];
	var dataListValue1 = [];
	var dataListValue5 = [];
	var lengdList = ['预算收入', '增速'];
	var flag = false;
	for(let i = 0; i < dataList.length; i++) {
		var year = dataList[i].year; //分段标题
		var yearIncreaseRate = dataList[i].data; //分段数据
		for(let j = 0; j < yearIncreaseRate.length; j++) {
			var enti = yearIncreaseRate[j];
			var indexdata = enti.indexdata; //季度
			var yonydata = enti.yonydata;
			var month = enti.MONTH;
			dataListValue1.push(indexdata);

			dataListValue5.push(yonydata);
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
				color:'#E3F2FF'
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
		color: '#419DF6',
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
				color: '#F30E1E',
				borderColor: '#F30E1E',
				borderWidth: 1,
				lineStyle: {
					color: "#F30E1E" //折线的颜色
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
				name: '收入(万元)',
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



