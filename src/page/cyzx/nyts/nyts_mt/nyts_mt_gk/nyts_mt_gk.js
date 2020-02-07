
//定义js全局变量 名称
export const nytsMtGkJs = {


	//煤炭概况第一个统计图
	showMtgk_echar1: function (echarts, ref, list) {
		const myCharts = echarts.init(ref);

		var nameList = ['工业总产值', '现价销售产值'];

		var xlabel = [];
		var yvalue2 = [];
		var yvalue1 = [];

		for (var i = 0; i < list.length; i++) {
			var enti = list[i];
			var date_month = enti.date_month;
			var month = date_month.split('-')[1];
			var gyzcz = enti.gyzcz;
			var xscz = enti.xscz;
			if (gyzcz > 0) {
				yvalue1.push(parseFloat(gyzcz / 10000).toFixed(2));
			} else {
				yvalue1.push(0);
			}
			if (gyzcz > 0) {
				yvalue2.push(parseFloat(xscz / 10000).toFixed(2));
			} else {
				yvalue2.push(0);
			}
			xlabel.push(month);
		}

		var option = {

			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			legend: {
				orient: 'horizontal', // 'vertical'
				x: 'center', // 'center' | 'left' | {number},
				y: 'top', // 'center' | 'bottom' | {number}
				backgroundColor: '#fff',
				itemGap: 20,
				itemHeight: 5,
				itemWidth: 10,
				data: nameList
			},
			grid: {
				left: '6%',
				right: '10%',
				bottom: '7%',
				top: '30%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				data: xlabel,
				axisLabel: {
					show: true,
					textStyle: {
						color: '#666666'
					}
				},
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#666666'
					}
				},
				splitLine: {
					show: false
				}, //去除网格线
				splitArea: {
					show: false
				} //保留网格区域
			},
			yAxis: {
				name: "亿元",
				type: 'value',
				axisLabel: {
					show: true,
					textStyle: {
						color: '#666666'
					}
				},
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#666666'
					}
				},
				splitLine: {
					show: false
				}, //去除网格线
				splitArea: {
					show: false
				} //保留网格区域
			},
			series: [{
				name: nameList[0],
				type: 'bar',
				barMaxWidth: 15,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
								offset: 0,
								color: '#bddeff'
							},
							{
								offset: 0.5,
								color: '#81befa'
							},
							{
								offset: 1,
								color: '#4ba1f6'
							}
						]
						)
					}
				},
				data: yvalue1
			},
			{
				name: nameList[1],
				type: 'bar',
				barMaxWidth: 15,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
								offset: 0,
								color: '#bef0fb'
							},
							{
								offset: 0.5,
								color: '#b2e2f6'
							},
							{
								offset: 1,
								color: '#42d2f0'
							}
						]
						)
					}
				},
				data: yvalue2
			}
			]
		};

		myCharts.setOption(option);
	},
	//煤炭概况第二个统计图
	showMtgk_echar2: function (echarts, ref, list,httpMethod) {
		const myCharts = echarts.init(ref);
		var areaname = ['原煤', '块碳'];
		var timeList = [];
		var value2 = [];
		var value1 = [];

		for (var i = 0; i < list.length; i++) {
			var enti = list[i];
			var date_month = enti.date_month;
			var month = date_month.split('-')[1];
			var ktcl = httpMethod.checkStrOfZeroFun(enti.ktcl);
			var ymcl = httpMethod.checkStrOfZeroFun(enti.ymcl);
			timeList.push(month);
			value1.push(ymcl);
			value2.push(ktcl);
		}

		var option = {
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				orient: 'horizontal',
				show: false,
				itemHeight: 7,
				itemWidth: 13,
				x: '14%',
				data: areaname,
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
				top: '13%',
				left: '2%',
				right: '4%',
				bottom: '0%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: timeList,
				splitLine: {
					show: false,

				},
				splitArea: {
					show: false
				}
			},
			yAxis: {
				name: '万吨',
				type: 'value',
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
				symbolSize: 5, //折线点的大小
				smooth: true,
				data: value1,
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#eef6fe'
						}, {
							offset: 0.5,
							color: '#b8dafb'
						}, {
							offset: 1,
							color: '#8dc3f9'
						}], false)

					}
				},
				itemStyle: {
					normal: {
						color: '#1976d2',
						borderColor: '#1976d2',
						borderWidth: 1,
						lineStyle: {
							color: "#1976d2" //折线的颜色
						},
					}
				}
			}, {
				name: areaname[1],
				smooth: false,
				type: 'line',
				symbolSize: 5, //折线点的大小
				smooth: true,
				data: value2,
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#fbfaf8'
						}, {
							offset: 0.5,
							color: '#fde2ad'
						}, {
							offset: 1,
							color: '#ffc962'
						}], false)

					}
				},
				itemStyle: {
					normal: {
						color: '#ffa04b',
						borderColor: '#ffa04b',
						borderWidth: 1,
						lineStyle: {
							color: "#ffa04b" //折线的颜色
						},
					}
				}
			}]
		};
		myCharts.setOption(option);
	},
	//煤炭概况第三个统计图
	showMtgk_echar3: function (echarts, ref, list) {
		const myCharts = echarts.init(ref);
		var xlabel = [];
		var yvalue1 = [];

		for (var i = 0; i < list.length; i++) {
			var enti = list[i];
			var date_month = enti.date_month;
			var month = date_month.split('-')[1];
			var mtxs = enti.mtxs;
			xlabel.push(month);
			yvalue1.push(mtxs);
		}
		var option = {

			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				left: '6%',
				right: '10%',
				bottom: '7%',
				top: '13%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				data: xlabel,
				axisLabel: {
					show: true,
					textStyle: {
						color: '#666666'
					}
				},
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#666666'
					}
				},
				splitLine: {
					show: false
				}, //去除网格线
				splitArea: {
					show: false
				} //保留网格区域
			},
			yAxis: {
				name: "万吨",
				type: 'value',
				axisLabel: {
					show: true,
					textStyle: {
						color: '#666666'
					}
				},
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#666666'
					}
				},
				splitLine: {
					show: false
				}, //去除网格线
				splitArea: {
					show: false
				} //保留网格区域
			},
			series: [{
				type: 'bar',
				barMaxWidth: 15,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
								offset: 0,
								color: '#bddeff'
							},
							{
								offset: 0.5,
								color: '#81befa'
							},
							{
								offset: 1,
								color: '#4ba1f6'
							}
						]
						)
					}
				},
				data: yvalue1
			}]
		};
		myCharts.setOption(option);
	}




}
