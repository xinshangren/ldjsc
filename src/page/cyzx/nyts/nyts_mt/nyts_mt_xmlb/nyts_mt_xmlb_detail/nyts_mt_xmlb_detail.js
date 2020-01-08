//定义js全局变量 名称
export const nytsMtXmlbDetailJs = {
    checkStrOfZero: function (str) {
        if (str == '' || str == null || str == undefined) {
            str = 0;
        }
        return str;
    },
    //煤炭概况第一个统计图
    showjmrjsrEchars1: function (echarts, value, list) {
        const myCharts = echarts.init(value);
        var timeList = [];
        var value1 = [];
        for (var i = 0; i < list.length; i++) {
            var tz_this_practical = this.checkStrOfZero(list[i].tz_this_practical); //投资额
            var date_month = list[i].date_month;
            var month = date_month.split('-')[1];
            timeList.push(month);
            value1.push(tz_this_practical);
        }

        var option = {
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                top: '16%',
                left: '2%',
                right: '4%',
                bottom: '7%',
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
                name: "万元",
                type: 'value',
                splitLine: { //网格线
                    show: false
                },
                splitArea: {
                    show: false
                },

            },
            series: [{
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
            }]
        };
        myCharts.setOption(option);
    },
     //煤炭概况第一个统计图
     showjmrjsrEchars2: function (echarts, value, yearIncreaseRate) {
        const myCharts = echarts.init(value);
        var xLabel = [];
        var searList = [];
        var dataListValue1 = [];
        var dataListValue5 = [];
        var lengdList = ['工程量', '施工面积'];
        var flag = false;
        for (let j = 0; j < yearIncreaseRate.length; j++) {
            var enti = yearIncreaseRate[j];
            var sgmj_residence = this.checkStrOfZero(enti.sgmj_total);//施工面积
            var aggregate_accomplish = enti.aggregate_accomplish;// 工程量
            var date_month = enti.date_month;
            var month = date_month.split('-')[1];
            dataListValue1.push(aggregate_accomplish);
            dataListValue5.push(sgmj_residence);
            xLabel.push(month);
        }
        var map0List = [];
        var yMax = Math.max.apply(null, dataListValue1);
        for (let i = 0; i < dataListValue1.length; i++) {
            if (dataListValue1[i] > 0) {
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
                    color: function (params) {
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
                top: '25%',
                left: '2%',
                right: '0%',
                bottom: '7%',
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
                name: 'm',
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
                name: '㎡',
                type: 'value',
                axisLabel: {
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