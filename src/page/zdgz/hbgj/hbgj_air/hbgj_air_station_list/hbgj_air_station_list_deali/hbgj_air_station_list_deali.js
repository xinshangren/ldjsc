export const hbgjAirJs = {
    //展示第一个轮播图
    showLbEcharsOne: function (echarts, value, dataEn,alllevelist,itemEnti) {
        console.log(dataEn);
        const myCharts = echarts.init(value, "macarons");
        var data = {
            value: parseFloat(itemEnti.dataAqi)
        }
        $("#wdDivId").html(dataEn.dataTemperature);
        $("#fsDivId").html(dataEn.dataWindLevel);
        
        var tuliList = alllevelist.AQI; //图例数组
        var valueColor = "";
        var valuerText = "";
        var levelName = '';
        for (let j = 0; j < tuliList.length; j++) {
            var entTl = tuliList[j];
            var levelValueStart = parseFloat(entTl.levelValueStart); //范围开始
            var levelValueEnd = parseFloat(entTl.levelValueEnd); //范围结束
            var valuefloat = parseInt(itemEnti.dataAqi);
            levelName = entTl.levelName; //等级名称
            if (valuefloat >= levelValueStart && valuefloat <= levelValueEnd) {
                if (levelName == '优') {
                    valueColor = '#75d492';
                } else if (levelName == '良') {
                    valueColor = '#c5d686';
                } else if (levelName == '轻度') {
                    valueColor = '#f0a15c';
                } else if (levelName == '中度') {
                    valueColor = '#e35e5f';
                } else if (levelName == '重度') {
                    valueColor = '#b83b5d';
                } else if (levelName == '严重') {
                    valueColor = '#57155d';
                }
                valuerText = levelName;
            }
        }

        //
        $("#aqiNameId").html(valuerText);
        $("#aqiNameId").css("background",valueColor);
        var option = {
            grid: {
                left: '0%',
                right: '10%',
                top: '0%',
                bottom: '0%',
                containLabel: true
            },
            series: [{
                name: '',
                type: "gauge",
                startAngle: 180,
                endAngle: 0,
                min: 0,
                max: 500,
                radius: "130%",
                center: ["50%", "90%"],
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 5,
                        shadowBlur: 0,
                        color: [
                            [0.16, '#75d492'],
                            [0.32, '#c5d686'],
                            [0.48, '#f0a15c'],
                            [0.64, '#e35e5f'],
                            [0.80, '#b83b5d'],
                            [1, '#57155d']
                        ]
                    }
                },
                axisTick: {
                    show: false //小刻度
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                    distance: -45
                },
                splitLine: {
                    show: false
                },
                pointer: {
                    show: false,
                    width: "2%",
                    length: '90%',
                    color: "#ffffff"
                },
                title: {
                    show:false,
                    offsetCenter: [0, '-15%'],
                    textStyle: {
                        fontSize: 12,
                        color: '#333333'
                    }
                },
                detail: {
                    formatter: '{value}',
                    offsetCenter: ['0', '-50%'],
                    textStyle: {
                        fontSize: 24,
                    }
                },
                data: [{
                    value: data.value,
                    name: valuerText
                }]
            }]
        };
        myCharts.setOption(option);
    },
    //空气质量变化趋势
    showLbEcharsThree: function (echarts, value, axisY, axisX) {
        const myCharts = echarts.init(value, "macarons");

        var fontColor = '#000000';
        var option = {
            grid: {
                left: '5%',
                right: '5%',
                top: '10%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    color: fontColor
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#397cbc'
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#195384'
                    }
                },
                data: axisX
            }],
            yAxis: [{
                type: 'value',
                name: '',
                min: 0,
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: fontColor
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#27b4c2'
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#11366e'
                    }
                }
            }],
            series: [{
                name: '已采纳',
                type: 'line',
                stack: '总量',
                symbol: 'circle',
                symbolSize: 4,
                itemStyle: {
                    normal: {
                        color: '#0092f6',
                        lineStyle: {
                            color: "#0092f6",
                            width: 1
                        },
                        areaStyle: {
                            //color: '#94C9EC'
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'rgba(76,184,255,0.3)'
                            }, {
                                offset: 1,
                                color: 'rgba(76,184,255,0.9)'
                            }]),
                        }
                    }
                },
                markPoint: {
                    itemStyle: {
                        normal: {
                            color: 'red'
                        }
                    }
                },
                data: axisY
            }]
        };


        myCharts.setOption(option);
    }


}