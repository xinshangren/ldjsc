
//定义js全局变量 名称
export const nytsXnyGkJs = {
	checkStrOfZero: function (str) {
		if (str == '' || str == null || str == undefined) {
			str = 0;
		}
		return str;
	},
	//煤炭概况第一个统计图
	showjmrjsrEchars1: function (echarts, value, data1) {
		const myCharts = echarts.init(value);
		var nameList = [];
		var data1List = [];
		for (var i = 0; i < data1.length; i++) {
			var data1value = this.checkStrOfZero(data1[i].xms);
			var name = data1[i].typename;
			var map = {
				value: data1value,
				name: name
			}
			nameList.push(name);
			data1List.push(map);
		}
		var option = {
			tooltip: {
				trigger: 'item',
				position: ['30%', '30%'],
				formatter: "{b}: {c}%"
			},
			legend: {
				orient: 'horizontal',
				show: true,
				itemHeight: 7,
				itemWidth: 15,
				x: '0%',
				data: nameList,
				textStyle: {
					rich: {
						a: {
							width: 100
						}
					},
					textFont: '12px verdana'
				}
			},
			grid: {
				top: '12%',
				left: '2%',
				right: '5%',
				bottom: '2%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				axisLabel: {
					textStyle: {
						color: '#000'
					},
					interval: 0
				},
				data: nameList
			},
			yAxis: {
				type: 'value',

			},
			series: [{
				name: nameList,
				type: 'bar',
				barWidth: 20, //柱图宽度
				itemStyle: {
					normal: {
						//每根柱子颜色设置
						color: function (params) {
							let colorList = ['#FFB423', '#1976D2', '#FF503F'];
							return colorList[params.dataIndex];
						},
						label: {
							show: true, //开启显示
							position: 'right', //在上方显示
							textStyle: { //数值样式
								color: '#000000',
								fontSize: 8
							},
							formatter: function (a) {
								if (a.value > 0) {
									return (a.value + '');
								} else {
									return ('0');
								}

							}
						}
					}
				},
				data: data1List
			}]
		};
		myCharts.setOption(option);
	},
	showjmrjsrEchars2: function (echarts, value, data) {
		const myCharts = echarts.init(value);// 初始化echarts实例
		var y_data = [];
		var y1_data = [];
		var s_data = [];
		var s1_data = [];
		var max = 0;
		$.each(data,function(i,v){
			y_data.push(v.typename);
			if(v.nfdl != null){
				y1_data.push(v.nfdl+"万千瓦时")
				s_data.push(v.nfdl)
				if( v.nfdl > max ){
					max = v.nfdl;
				}
			}else{
				y1_data.push("")
				s_data.push(0)
			}
		});
		$.each(data,function(i,v){
			s1_data.push(max+30);
		});
		var option = {
			grid: {
				left: '1%',
				top: '5%',
				right: '1%',
				bottom: '8%',
				containLabel: true
			},
			xAxis: {  //直角坐标系grid中的x轴,
				//一般情况下单个grid组件最多只能放上下两个x轴,
				//多于两个x轴需要通过配置offset属性防止同个位置多个x轴的重叠。
				type: 'value',//坐标轴类型,分别有：
				//'value'-数值轴；'category'-类目轴;
				//'time'-时间轴;'log'-对数轴
				splitLine: { show: false },//坐标轴在 grid 区域中的分隔线
				axisLabel: { show: false },//坐标轴刻度标签
				axisTick: { show: false },//坐标轴刻度
				axisLine: { show: false },//坐标轴轴线
			},
			yAxis: [{
				type: 'category',
				axisTick: { show: false },
				axisLine: { show: false },
				axisLabel: {
					color: 'black',
					fontSize: 13
				},
				data:y_data//类目数据，在类目轴（type: 'category'）中有效。
				//如果没有设置 type，但是设置了axis.data,则认为type 是 'category'。
			}, {
				type: 'category',
				axisTick: { show: false },
				axisLine: { show: false },
				axisLabel: {
					color: 'black',
					fontSize: 13
				},
				data: y1_data//类目数据，在类目轴（type: 'category'）中有效。
				//如果没有设置 type，但是设置了axis.data,则认为type 是 'category'。
			}
			],
			series: [//系列列表。每个系列通过 type 决定自己的图表类型
				{
					name: '%',//系列名称
					type: 'bar',//柱状、条形图
					barWidth: 13,//柱条的宽度,默认自适应
					data: s_data,//系列中数据内容数组
					color:'#faad14',
					// label: { //图形上的文本标签
					// 	show: true,
					// 	position: 'top',//标签的位置
					// 	offset: [10, 0],  //标签文字的偏移，此处表示向上偏移40
					// 	formatter: '{c}{a}',//标签内容格式器 {a}-系列名,{b}-数据名,{c}-数据值
					// 	color: 'black',//标签字体颜色
					// 	fontSize: 13  //标签字号
					// },
					itemStyle: {//图形样式
						normal: {  //normal 图形在默认状态下的样式;
							//emphasis图形在高亮状态下的样式
							barBorderRadius: 10,//柱条圆角半径,单位px.
							//此处统一设置4个角的圆角大小;
							//也可以分开设置[10,10,10,10]顺时针左上、右上、右下、左下

						}
					},
					zlevel:1//柱状图所有图形的 zlevel 值,
					//zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
				},
				{
					name: '进度条背景',
					type: 'bar',
					barGap: '-100%',//不同系列的柱间距离，为百分比。
					// 在同一坐标系上，此属性会被多个 'bar' 系列共享。
					// 此属性应设置于此坐标系中最后一个 'bar' 系列上才会生效，
					//并且是对此坐标系中所有 'bar' 系列生效。
					barWidth: 15,
					data: s1_data,
					itemStyle: {
						normal: {
							color: '#eeeeee',
							barBorderRadius: 10
						}
					}
				}
			]
		}
		myCharts.setOption(option);
	}
}
