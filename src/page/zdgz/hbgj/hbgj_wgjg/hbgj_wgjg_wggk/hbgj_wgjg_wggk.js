export const hbgjAirJs = {
    //展示第一个轮播图
    showLbEcharsOne: function (echarts, value, lnum, pnum, dataList, counlist) {
        const myCharts = echarts.init(value, "macarons");
        var data2List = [];
        var nameList = [];

        for (var i = 0; i < counlist.length; i++) {
            nameList.push(counlist[i].name);
            var map = {
                name: counlist[i].name,
                value: counlist[i].num
            }
            data2List.push(map);
        }


        var option = {
            grid: {
                top: '0%',
                left: '0%',
                right: '0%',
                bottom: '0%',
                containLabel: true
            },
            legend: {
                orient: 'vertical',
                icon: "circle",
                right: '5%',
                y: 'center',
                show: true,
                itemHeight: 6,
                itemWidth: 6,
                data: nameList
            },
            color: ['#FF9966', '#FF5CFD', '#B266FF', '#6699FF', '#32F7A6', '#99FF5C', '#FFCC66', '#ff5c8e'],
            series: [{
                name: '',
                type: 'pie',
                minAngle: 15,
                avoidLabelOverlap: true,
                roseType: 'radius',
                center: ['40%', '50%'],
                radius: [20, 50],
                label: {
                    normal: {
                        show: true,
                        position: 'left', //标签的位置
                        textStyle: {
                            fontSize: 12, //文字的字体大小
                            color: '#000000'
                        },
                        formatter: function (a) {
                            return (a.name + ":" + a.value);
                        }
                    },
                    emphasis: {
                        show: false,
                        textStyle: {}
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 2,
                        length2: 10,
                        lineStyle: {
                            color: '#000000'
                        }
                    }
                },
                data: data2List
            }]
        };

        myCharts.setOption(option);
    },
    showLbEcharsTwo: function (echarts, value, lnum, pnum, dataList, counlist) {
        const myCharts = echarts.init(value, "macarons");
        var data2List = [];
        var nameList = [];
        for (var i = 0; i < dataList.length; i++) {
            var map = {
                name: dataList[i].type,
                value: dataList[i].num
            }
            nameList.push(dataList[i].type);
            data2List.push(map);
        }

        var option = {
            grid: {
                top: '0%',
                left: '0%',
                right: '0%',
                bottom: '0%',
                containLabel: true
            },
            legend: {
                orient: 'vertical',
                icon: "circle",
                right: '2%',
                y: 'center',
                show: true,
                itemHeight: 6,
                itemWidth: 6,
                data: nameList
            },
            color: ['#FF9966', '#FF5CFD', '#B266FF', '#6699FF', '#32F7A6', '#99FF5C', '#FFCC66', '#ff5c8e'],
            series: [{
                name: '',
                type: 'pie',
                minAngle: 15,
                avoidLabelOverlap: true,
                roseType: 'radius',
                center: ['35%', '50%'],
                radius: [20, 50],
                label: {
                    normal: {
                        show: true,
                        position: 'left', //标签的位置
                        textStyle: {
                            fontSize: 12, //文字的字体大小
                            color: '#000000'
                        },
                        formatter: function (a) {
                            return (a.name + ":" + a.value);
                        }
                    },
                    emphasis: {
                        show: false,
                        textStyle: {}
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 2,
                        length2: 10,
                        lineStyle: {
                            color: '#000000'
                        }
                    }
                },
                data: data2List
            }]
        };
        myCharts.setOption(option);
    },
    showLbEcharsThree: function (echarts, value,list) {
        const myCharts = echarts.init(value, "macarons");

        var provideNumber; //x轴一行显示几个字；
        var timeList = [];
        var value1 = [];
        var value2 = [];
        var value3 = [];
        var value4 = [];

        provideNumber = 1;
		for(var i = 0; i < list.length; i++) {
			var problemnum = list[i].problemnum; //发现问题数量
			var endnum = list[i].endnum; //完结数
			var endrate = list[i].rate; //完结率
			var recordnum = list[i].recordnum; //巡查量
			var time = list[i].name;

			timeList.push(time);
			value1.push(parseFloat(problemnum));
			value2.push(parseFloat(endnum));
			value3.push(recordnum);
			value4.push(endrate);
		}

        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            grid: {
                left: '5%',
                top: '15%',
                right: '5%',
                bottom: '4%',
                containLabel: true
            },
            legend: {
                orient: 'horizontal',
                show: true,
                itemHeight: 7,
                itemWidth: 13,
                x: '14%',
                data: ['问题数', '办结数', '巡查数', '办结率'],
                textStyle: {
                    rich: {
                        a: {
                            width: 100,
                        }
                    },
                    textFont: '11px verdana'
                }
            },
            xAxis: [{
                type: 'category',
                data: timeList,
                axisLine: {
                    lineStyle: {
                        color: '#000000',
                    }
                },
                axisLabel: {
                    showMaxLabel: true,
                    showMinLabel: true,
                    show: true,
                    interval: 0, //横轴信息全部显示
                    textStyle: {
                        color: '#000000', //文字颜色
                        fontSize: 10
                    },
                    formatter: function (params) {
                        var newParamsName = "";
                        var paramsNameNumber = params.length;
                        var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                        if (paramsNameNumber > provideNumber) {
                            for (var p = 0; p < rowNumber; p++) {
                                var tempStr = "";
                                var start = p * provideNumber;
                                var end = start + provideNumber;
                                if (p == rowNumber - 1) {
                                    tempStr = params.substring(start, paramsNameNumber);
                                } else {
                                    tempStr = params.substring(start, end) + "\n";
                                }
                                newParamsName += tempStr;
                            }

                        } else {
                            newParamsName = params;
                        }
                        return newParamsName
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    formatter: '{value}',
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
                type: 'value',
                interval: 25,
                axisLabel: {
                    formatter: '{value}%',
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
            series: [{
                name: '问题数',
                type: 'bar',
                data: value1,
                itemStyle: {
                    normal: {
                        color: '#70C600'
                    }
                }
            },
            {
                name: '办结数',
                type: 'bar',
                data: value2,
                itemStyle: {
                    normal: {
                        color: '#FFAB27'
                    }
                }
            },
            {
                name: '巡查数',
                type: 'bar',
                data: value3,
                itemStyle: {
                    normal: {
                        color: '#FF7430'
                    }
                }
            },
            {
                name: '办结率',
                type: 'line',
                symbol: 'circle', //折线点设置为实心点
                symbolSize: 8, //折线点的大小
                yAxisIndex: 1,
                data: value4,
                itemStyle: {
                    normal: {
                        color: '#1976D2',
                        lineStyle: {
                            color: "#4691D9" //折线的颜色
                        }
                    }
                }
            }
            ]
        };
        myCharts.clear();
        myCharts.setOption(option);
    }

}