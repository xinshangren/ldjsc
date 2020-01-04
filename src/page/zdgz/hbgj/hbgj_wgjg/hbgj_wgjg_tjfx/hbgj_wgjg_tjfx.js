export const hbgjAirJs = {
    //展示第一个轮播图
    showLbEcharsOne: function (echarts, value, data) {
        const myCharts = echarts.init(value, "macarons");
        var nameList = [];
        var data1List = [];
        var data2List = [];
        var data3List = [];
        var data4List = [];
        var data5List = [];
        var data6List = [];
        for (var i = data.length - 1; i >= 0; i--) {
            nameList.push(data[i].name);
            var dalist = data[i].list;
            data1List.push(dalist[0]);
            data2List.push(dalist[1]);
            data3List.push(dalist[2]);
            data4List.push(dalist[3]);
            data5List.push(dalist[4]);
            data6List.push(dalist[5]);

        }

        var option = {
            legend: {
                data: ["城区", "沁水县", "泽州县", "阳城县", "陵川县", "高平市"],
                itemHeight: 7,
                itemWidth: 15
            },

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
                top: '30%',
                left: '2%',
                right: '5%',
                bottom: '2%',
                containLabel: true
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: nameList,
            },
            series: [{
                name: '城区',
                type: 'bar',
                stack: '总量',
                color: '#2E944B',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data: data1List,
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'right', //在上方显示
                            textStyle: { //数值样式
                                color: '#ffffff',
                                fontSize: 8
                            },
                            formatter: function (a) {
                                if (a.value > 0) {
                                    return (a.value);
                                } else {
                                    return ('');
                                }

                            }
                        }
                    }
                }
            },
            {
                name: '沁水县',
                type: 'bar',
                stack: '总量',
                color: '#CDEE33',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data: data2List,
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'right', //在上方显示
                            textStyle: { //数值样式
                                color: '#ffffff',
                                fontSize: 8
                            },
                            formatter: function (a) {
                                if (a.value > 0) {
                                    return (a.value);
                                } else {
                                    return ('');
                                }

                            }
                        }
                    }
                }
            },
            {
                name: '阳城县',
                type: 'bar',
                stack: '总量',
                color: '#37E388',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data: data3List,
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'right', //在上方显示
                            textStyle: { //数值样式
                                color: '#ffffff',
                                fontSize: 8
                            },
                            formatter: function (a) {
                                if (a.value > 0) {
                                    return (a.value);
                                } else {
                                    return ('');
                                }

                            }
                        }
                    }
                }
            },
            {
                name: '陵川县',
                type: 'bar',
                stack: '总量',
                color: '#4E75F4',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data: data4List,
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'right', //在上方显示
                            textStyle: { //数值样式
                                color: '#ffffff',
                                fontSize: 8
                            },
                            formatter: function (a) {
                                if (a.value > 0) {
                                    return (a.value);
                                } else {
                                    return ('');
                                }

                            }
                        }
                    }
                }
            }, {
                name: '泽州县',
                type: 'bar',
                stack: '总量',
                color: '#8260F2',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data: data5List,
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'right', //在上方显示
                            textStyle: { //数值样式
                                color: '#ffffff',
                                fontSize: 8
                            },
                            formatter: function (a) {
                                if (a.value > 0) {
                                    return (a.value);
                                } else {
                                    return ('');
                                }

                            }
                        }
                    }
                }
            }, {
                name: '高平市',
                type: 'bar',
                stack: '总量',
                color: '#EB8941',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data: data6List,
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'right', //在上方显示
                            textStyle: { //数值样式
                                color: '#ffffff',
                                fontSize: 8
                            },
                            formatter: function (a) {
                                if (a.value > 0) {
                                    return (a.value);
                                } else {
                                    return ('');
                                }

                            }
                        }
                    }
                }
            }
            ]
        };

        myCharts.setOption(option);
    },
    showLbEcharsTwo: function (echarts, value, list) {
        const myCharts = echarts.init(value, "macarons");
        var timeList = [];
        var value1 = [];
        var value2 = [];
        var value3 = [];
        var value4 = [];
        for (var i = 0; i < list.length; i++) {
            var problemnum = list[i].problemnum; //发现问题数量
            var endnum = list[i].endnum; //完结数
            var endrate = list[i].endrate; //完结率
            var recordnum = list[i].recordnum; //巡查量
            var time = list[i].monthtime;
            time = time.split('-')[1];
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
                bottom: '0%',
                containLabel: true
            },
            legend: {
                orient: 'horizontal',
                show: true,
                itemHeight: 7,
                itemWidth: 15,
                x: '0%',
                data: ['问题数', '办结数', '巡查数', '办结率'],
                textStyle: {
                    rich: {
                        a: {
                            width: 100
                        }
                    },
                    textFont: '11px verdana'
                }
            },
            xAxis: [{
                type: 'category',
                data: timeList,
                axisLabel: {
                    showMaxLabel: true,
                    textStyle: {
                        color: '#000'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#000000',
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                interval: 5000,
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
                interval: 20,
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
                yAxisIndex: 1,
                data: value4,
                itemStyle: {
                    normal: {
                        color: '#1976D2'
                    }
                }
            }
            ]
        };
        myCharts.setOption(option);
    },
    showLbEcharsThree: function (echarts, value, list) {
        const myCharts = echarts.init(value, "macarons");

        var nameList = [];
        var valueList = [];
        for (var i = 0; i < list.length; i++) {
            var problem = list[i].problem;
            var num = list[i].num;
            nameList.push(problem);
            valueList.push({
                name: problem,
                value: num
            });
        }

        var option = {
            grid: {
                left: '0%',
                top: '20%',
                right: '0%',
                bottom: '0%',
                containLabel: true
            },
            //		legend: {
            //			x: '55%',
            //			y: '25%',
            //			orient: 'vertical',
            //			align: 'right',
            //			data: nameList,
            //		},
            legend: {
                x: 'center', // 'center' | 'left' | {number},
                y: 'bottom', // 'center' | 'bottom' | {number}
                type: 'scroll',
                orient: 'horizontal',
                data: nameList,
            },
            series: [{
                name: '姓名',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: valueList,
                label: {
                    normal: {
                        show: true,
                        position: 'left', //标签的位置
                        textStyle: {
                            fontSize: 12 //文字的字体大小
                        },
                        formatter: function (a) {
                            var value = a['percent'];
                            if (value > 0) {
                                return (a.name + "(" + a['percent'] + "%)");
                            } else {
                                return (a.name + "(0%)");
                            }
                        }
                    },
                    emphasis: {
                        show: false,
                        textStyle: {}
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };

        myCharts.setOption(option);
    },
    showLbEcharsFour: function (echarts, value, list) {
        const myCharts = echarts.init(value, "macarons");
        var timeList = [];
        var value1 = [];
        var value2 = [];
        var value4 = [];
        for (var i = 0; i < list.length; i++) {
            var tasknum = list[i].tasknum; //任务量
            var overnum = list[i].overnum; //完成量
            var overrate = list[i].overrate; //完结率
            var time = list[i].monthtime;
            time = time.split('-')[1];
            timeList.push(time);
            value1.push(tasknum);
            value2.push(overnum);
            value4.push(overrate);
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
                bottom: '0%',
                containLabel: true
            },
            legend: {
                orient: 'horizontal',
                show: true,
                itemHeight: 7,
                itemWidth: 15,
                x: '0%',
                data: ['任务量', '完成量', '完成率'],
                textStyle: {
                    rich: {
                        a: {
                            width: 100
                        }
                    },
                    textFont: '11px verdana'
                }
            },
            xAxis: [{
                type: 'category',
                data: timeList,
                axisLabel: {
                    showMaxLabel: true,
                    textStyle: {
                        color: '#000'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#000000',
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                interval: 500,
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
                interval: 20,
                axisLabel: {
                    formatter: '{value}%'
                },
                axisLine: {
                    lineStyle: {
                        color: '#000000',
                    }
                }
            }
            ],
            series: [{
                name: '任务量',
                type: 'bar',
                data: value1,
                itemStyle: {
                    normal: {
                        color: '#1976D2'
                    }
                }
            },
            {
                name: '完成量',
                type: 'bar',
                data: value2,
                itemStyle: {
                    normal: {
                        color: '#FF7430'
                    }
                }
            },
            {
                name: '完成率',
                type: 'line',
                yAxisIndex: 1,
                data: value4,
                itemStyle: {
                    normal: {
                        color: '#3ACD00'
                    }
                }
            }
            ]
        };
        myCharts.clear();
        myCharts.setOption(option);
    },
    showLbEcharsFive: function (echarts, value, list) {
        const myCharts = echarts.init(value, "macarons");
        var nameList = [];
        var valueList = [];
        for (var i = 0; i < list.length; i++) {
            var problem = list[i].tasktype;
            var num = list[i].tasknum;
            nameList.push(problem);
            valueList.push({
                name: problem,
                value: num
            });
        }

        var option = {
            grid: {
                left: '5%',
                top: '20%',
                right: '5%',
                bottom: '0%',
                containLabel: true
            },
            //		legend: {
            //			x: '55%',
            //			y: '25%',
            //			orient: 'vertical',
            //			align: 'right',
            //			data: nameList,
            //		},
            legend: {
                x: 'center', // 'center' | 'left' | {number},
                y: 'bottom', // 'center' | 'bottom' | {number}
                type: 'scroll',
                orient: 'horizontal',
                data: nameList,
            },
            series: [{
                name: '姓名',
                type: 'pie',
                radius: '45%',
                center: ['50%', '50%'],
                data: valueList,
                label: {
                    normal: {
                        show: true,
                        position: 'left', //标签的位置
                        textStyle: {
                            fontSize: 12 //文字的字体大小
                        },
                        formatter: function (a) {
                            var value = a['percent'];
                            if (value > 0) {
                                return (a.name + "(" + a['percent'] + "%)");
                            } else {
                                return (a.name + "(0%)");
                            }
                        }
                    },
                    emphasis: {
                        show: false,
                        textStyle: {}
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
        myCharts.clear();
        myCharts.setOption(option);
    }

}