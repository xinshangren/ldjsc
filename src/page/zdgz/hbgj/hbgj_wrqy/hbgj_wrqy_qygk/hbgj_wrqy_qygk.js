export const hbgjAirJs = {
    //展示第一个轮播图
    showLbEcharsOne: function (echarts, value, data) {
        const myCharts = echarts.init(value, "macarons");
        var datalist = [];
        var nameList = [];
        for (var i = 0; i < data.length; i++) {
            var map = {
                name: data[i].typename,
                value: data[i].num
            }
            nameList.push(data[i].typename);
            datalist.push(map);
        }

        var option = {

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
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['40%', '50%'],
                data: datalist,
                roseType: 'radius',
                label: {
                    normal: {
                        show: true,
                        position: 'left', //标签的位置
                        textStyle: {
                            fontSize: 14, //文字的字体大小
                            color: '#000000'
                        },
                        formatter: function (a) {
                            var value = a['percent'];
                            //						console.log(JSON.stringify(a));
                            if (value > 0) {
                                return (a.name + ":" + a['value']);
                            } else {
                                return (a.name + ":0");
                            }
                        }
                    },
                    emphasis: {
                        show: false,
                        textStyle: {}
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#000000'
                        },
                        smooth: 0.1,
                        length: 1,
                        length2: 1
                    }
                }
            }]
        };

        myCharts.setOption(option);
    },
    showLbEcharsTwo: function (echarts, value, data) {
        const myCharts = echarts.init(value, "macarons");
        var datalist = [];
        var nameList=[];
        data=data.reverse();
        for (var i = 0; i < data.length; i++) {
            var map = {
                name: data[i].AttentionDegreeName,
                value: data[i].countnum
            }
            nameList.push(data[i].AttentionDegreeName);
            datalist.push(map);
        }
        var option = {
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
            color: ['#16d5aa', '#f9af1d', '#23c1f5', '#ffdb6d'],
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['45%', '50%'],
                data: datalist,
                roseType: 'radius',
                label: {
                    normal: {
                        show: true,
                        position: 'left', //标签的位置
                        textStyle: {
                            fontSize: 14, //文字的字体大小
                            color: '#000000'
                        },
                        formatter: function (a) {
                            var value = a['percent'];
                            if (value > 0) {
                                return (a.name + ":" + a['value']);
                            } else {
                                return (a.name + ":0");
                            }
                        }
                    },
                    emphasis: {
                        show: false,
                        textStyle: {}
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#000000'
                        },
                        smooth: 0.1,
                        length: 4,
                        length2: 5
                    }
                }
            }]
        };

        myCharts.setOption(option);
    },
    showLbEcharsThree: function (echarts, value, data) {
        const myCharts = echarts.init(value, "macarons");

        var nameList = [];
        var valueList = [];
        for (var i = 0; i < data.length; i++) {
            nameList.push(data[i].ValleyName);
            valueList.push(data[i].countnum);
        }

        var option = {
            grid: {
                top: '10%',
                left: '5%',
                right: '5%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: nameList,
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
                        var provideNumber = 2; //一行显示几个字
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
            },
            yAxis: {
                type: 'value',
                interval: 40,
                axisLine: {
                    lineStyle: {
                        color: "#000000",
                    }
                }
            },
            series: [{
                itemStyle: {
                    normal: {
                        //每根柱子颜色设置
                        color: '#1976D2'
                    }
                },
                data: valueList,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#000',
                        }

                    }
                },
                type: 'bar',
                barWidth: 10, //柱图宽度

            }]
        };

        myCharts.clear();
        myCharts.setOption(option);
    }

}