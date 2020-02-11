export const hbgjAirJs = {
    //展示第一个轮播图
    showLbEcharsOne: function (echarts, value, list) {
        const myCharts = echarts.init(value, "macarons");
        var provideNumber; //x轴一行显示几个字；
        var timeList = [];
        var value1 = [];
        var value2 = [];
        var value3 = [];
        var value4 = [];
        provideNumber = 2;
        for(var i = 0; i < list.length; i++) {
            var problemnum = list[i].problemnum; //发现问题数量
            var endnum = list[i].endnum; //完结数
            var endrate = list[i].endrate; //完结率
            var recordnum = list[i].recordnum; //巡查量

            timeList.push(i + 1);
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
                },
                textStyle: {
                    align: 'left'
                },
                formatter:function(params){
                   var relVal = params[0].name+"月"; 
                   //alert(JSON.stringify(params))
                   for (var i = 0, l = params.length; i < l; i++) {  
                       if(params[i].seriesName =='办结率')
                       relVal += '<br/>' +params[i].marker+ params[i].seriesName+":"+ params[i].value+"%";  
                       else
                       relVal += '<br/>' +params[i].marker+ params[i].seriesName+":"+ params[i].value+"";  
                   } 
                   return relVal;  
               }
            },
            grid: {
                left: '5%',
                top: '20%',
                right: '5',
                bottom: '0%',
                containLabel: true
            },
            legend: {
                orient: 'horizontal',
                show: true,
                itemHeight: 7,
                itemWidth: 13,
                x: '4%',
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
                    formatter: function(params) {
                        var newParamsName = "";
                        var paramsNameNumber = params.length;
                        var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                        if(paramsNameNumber > provideNumber) {
                            for(var p = 0; p < rowNumber; p++) {
                                var tempStr = "";
                                var start = p * provideNumber;
                                var end = start + provideNumber;
                                if(p == rowNumber - 1) {
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
                    min: 0,
                    max: 100,
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

        }
        myCharts.setOption(option);
    }
}