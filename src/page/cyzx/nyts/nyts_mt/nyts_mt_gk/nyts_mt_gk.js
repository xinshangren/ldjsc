
//定义js全局变量 名称
export const nytsMtGkJs = {

    //煤炭概况第一个统计图
    showMtgk_echar1: function (list){
        
    var nameList = ['工业总产值', '现价销售产值'];

	var xlabel = [];
	var yvalue2 = [];
	var yvalue1 = [];

	for(var i = 0; i < list.length; i++) {
		var enti = list[i];
		var date_month = enti.date_month;
		var month = date_month.split('-')[1];
		var gyzcz = checkStrOfZero(enti.gyzcz);
		var xscz = checkStrOfZero(enti.xscz);
		if(gyzcz > 0) {
			yvalue1.push(parseFloat(gyzcz / 10000).toFixed(2));
		} else {
			yvalue1.push(0);
		}
		if(gyzcz > 0) {
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

	var yuanChartdiv = document.getElementById('nyts_nymtgk_echars_id')
	var yuanChart = echarts.init(yuanChartdiv, 'macarons');
	yuanChart.clear();
	yuanChart.setOption(option);
    }


    


}
