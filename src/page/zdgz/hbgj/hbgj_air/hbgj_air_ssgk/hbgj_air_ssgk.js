export const hbgjAirJs = {
    changeTime(time){
            var commonTime = "";
            if(time){
                var unixTimestamp = new Date(time*1) ;
                    var vYear = unixTimestamp.getFullYear();
                    var vMon = unixTimestamp.getMonth()+1;
                    var vDay = unixTimestamp.getDate();
                    var hours = unixTimestamp.getHours();
                    var minutes = unixTimestamp.getMinutes();
                    var s = unixTimestamp.getSeconds();
                    var currDay = unixTimestamp.getDate()+2;
                    var current = vYear + "-" + (vMon < 10 ? "0" + vMon : vMon) + "-"
                                + (currDay<10 ?  "0"+ currDay : currDay) + " "
                                + (hours < 10 ? "0" + hours : hours) + ":"
                                + (minutes < 10 ? "0" + minutes : minutes) + ":"
                                + (s < 10 ? "0" + s : s)
            }
             return current;
        },
    //显示顶部数据
    showTopTip: function (res, list) {
        var dataPollutant = res.data.dataPollutant;//首要污染物
        var dataTemperature = res.data.dataTemperature;//度数
        $("#nowwd_id").html(dataTemperature);
        $("#fldj_id").html(res.data.dataWindDirection + "&nbsp;" + res.data.dataWindLevel);
       
        var dataAqi = res.data.dataAqi;
        $("#updatetime").html(this.changeTime(res.data.dataUpdatetime));
        $("#indexaqi_value_id").html(dataAqi);
        var levelCodeIndex = "";
        for (var i = 0; i < list.length; i++) {
            var entity = list[i];
            var levelValueStart = entity.levelValueStart; //范围开始
            var levelValueEnd = entity.levelValueEnd; //范围结束
            var levelName = entity.levelName; //污染等级文字
            var levelCode = entity.levelCode; //污染等级code
            if (parseInt(dataAqi) > parseInt(levelValueStart) && parseInt(dataAqi) < parseInt(levelValueEnd)) {
                levelCodeIndex = levelCode;
                $("#indexaqi_id").html(levelName);
            }
        }
        var colorClass = "";
        switch (parseInt(levelCodeIndex)) {
            case 1:
                colorClass = "you";
                break;
            case 2:
                colorClass = "liang";
                break;
            case 3:
                colorClass = "qingdu";
                break;
            case 4:
                colorClass = "zhongdu1";
                break;
            case 5:
                colorClass = "zhongdu";
                break;
            case 6:
                colorClass = "yanzhong";
                break;
            default:
                break;
        }
        $("#indexaqi_id").addClass(colorClass);
    },
    //展示第一个轮播图
    showLbEcharsOne: function (echarts, value, result) {
        const myCharts = echarts.init(value, "macarons");

        var nameList = [];
        var rankList = [];
        var valueList = [];
        for (var i = 0; i < result.length; i++) {
            var entity = result[i];
            var name = entity.cityName; //城市名称
            var cityRank = entity.rownum; //城市名称
            var dataCompositeIndex = entity.dataAqi; //值
            nameList.push(name);
            rankList.push(cityRank);
            if (name === '晋城市') {
                // showEcharsView1_ssgk1(result, rankList[i],value1,echarts);
            }
            valueList.push(parseFloat(dataCompositeIndex).toFixed(1));
        }
        valueList=valueList.reverse();
        nameList=nameList.reverse();
        rankList=rankList.reverse();
        var maxValue = Math.max.apply(null, valueList);
        maxValue = maxValue + 10;
        var nyValueList = [];
        var wYValueList = [];
        for (var i = 0; i < result.length; i++) {
            var name = entity.cityName; //城市名称
            var dataCompositeIndex = entity.dataCompositeIndex; //值
            nyValueList.push(maxValue - 0.1);
            wYValueList.push(maxValue);
        }
        var myColor = ['#57155d', '#57155d', '#b83b5d', '#b83b5d', '#e35e5f',
            '#e35e5f', '#f0a15c', '#f0a15c', '#c5d686', '#c5d686', '#c5d686'
        ];
        let option = {
            backgroundColor: '',
            grid: {
                left: '12%',
                top: '0%',
                right: '12%',
                bottom: '-10%',
                containLabel: true
            },
            xAxis: [{
                show: false,
            }],
            color: myColor,
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                offset: '17',
                axisLabel: {
                    textStyle: {
                        color: '#000000',
                        fontSize: '10',
                    }
                },
                data: nameList
            }, {
                axisTick: 'none',
                axisLine: 'none',
                axisLabel: {
                    textStyle: {
                        color: '#000000',
                        fontSize: '10',
                    }
                },
                data: rankList
            }, {
                name: '',
                nameGap: '10',
                nameTextStyle: {
                    color: '#000000',
                    fontSize: '10',
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [],
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: valueList,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#000000',
                            fontSize: '10',
                        }
                    }
                },
                barWidth: 5,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex]
                        },
                    }
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: nyValueList,
                barWidth: 7,
                itemStyle: {
                    normal: {
                        color: '#ffffff',
                        barBorderRadius: 5,
                    }
                },
                z: 1
            }, {
                name: '外框',
                type: 'bar',
                yAxisIndex: 2,
                barGap: '-100%',
                data: wYValueList,
                barWidth: 8,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex]
                        },
                        barBorderRadius: 5,
                    }
                },
                z: 0
            },
            {
                name: '外圆',
                type: 'scatter',
                hoverAnimation: false,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                yAxisIndex: 2,
                symbolSize: 8,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex]
                        },
                        opacity: 1,
                    }
                },
                z: 2
            }
            ]
        };
        myCharts.setOption(option);
    },
    showEcharsView1_ssgk1: function (echarts, value, result) {
        var rankStr = "";
        var rankList1 = ['11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];
        for (var i = 0; i < result.length; i++) {
            var entity = result[i];
            var name = entity.cityName; //城市名称
            var cityRank = entity.rownum; //城市名称
            var dataCompositeIndex = entity.dataAqi; //值
            // nameList.push(name);
            if (name === '晋城市') {
                // showEcharsView1_ssgk1(result, rankList[i],value1,echarts);
                rankStr = cityRank;
            }
        }
        const myCharts = echarts.init(value, "macarons");
        var nameList = [];
        var rankList = [];
        var valueList = [];
        for (var i = 0; i < result.length; i++) {
            var entity = result[i];
            var name = entity.cityName; //城市名称
            if (name == '晋城市') {
                var cityRank = entity.rownum; //城市名称
                var dataCompositeIndex = entity.dataAqi; //值
                nameList.push(name);
                rankList.push(cityRank);
                valueList.push(parseFloat(dataCompositeIndex).toFixed(1));
            }

        }

        var maxValue = Math.max.apply(null, valueList);
        maxValue = maxValue + 10;
        var nyValueList = [];
        var wYValueList = [];
        for (var i = 0; i < result.length; i++) {
            var name = result[i].cityName; //城市名称
            if (name === '晋城市') {
                nyValueList.push(maxValue - 0.1 + 14);
                wYValueList.push(maxValue + 14);
            }
        }
        var myColor = ['#1A76D3'];
        console.log(valueList);
        var option = {
            backgroundColor: '',
            grid: {
                left: '12%',
                top: '70%',
                right: '8%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [{
                show: false,
            }],
            color: myColor,
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                offset: '17',
                axisLabel: {
                    textStyle: {
                        color: '#1A76D3',
                        fontSize: '12',
                    }
                },
                data: nameList
            }, {
                axisTick: 'none',
                axisLine: 'none',
                axisLabel: {
                    textStyle: {
                        color: '#1A76D3',
                        fontSize: '12',
                    }
                },
                data: [rankStr]
            }, {
                name: '',
                nameGap: '50',
                nameTextStyle: {
                    color: '#000000',
                    fontSize: '12',
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [rankStr],
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: valueList,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#1A76D3',
                            fontSize: '12',
                        }
                    }
                },
                barWidth: 6,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex]
                        },
                    }
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: nyValueList,
                barWidth: 8,
                itemStyle: {
                    normal: {
                        color: '#ffffff',
                        barBorderRadius: 5,
                    }
                },
                z: 1
            }, {
                name: '外框',
                type: 'bar',
                yAxisIndex: 2,
                barGap: '-100%',
                data: wYValueList,
                barWidth: 9,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex]
                        },
                        barBorderRadius: 5,
                    }
                },
                z: 0
            },
            {
                name: '外圆',
                type: 'scatter',
                hoverAnimation: false,
                data: [0],
                yAxisIndex: 2,
                symbolSize: 9,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex]
                        },
                        opacity: 1,
                    }
                },
                z: 2
            }
            ]
        };

        myCharts.setOption(option);
    },
    //第二个统计图表
    showLbEcharsTwo: function (echarts, value, data) {

        const myCharts = echarts.init(value, "macarons");
        var total = 0;
        var data1List = [data.levelOne, data.levelTwo, data.levelThree,
        data.levelFour,
        data.levelFive,
        data.levelSix
        ];
        var nameList = ['优', '良', '轻度', '中度', '重度', '严重'];
        var data2List = [];
        for (var i = 0; i < nameList.length; i++) {
            var map = {
                name: nameList[i],
                value: data1List[i]
            }
            data2List.push(map);
        }

        var totalstr = total + '亿';
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
                x: 'right',
                left: '81%',  //图例距离左的距离
                y: 'top',
                show: true,
                itemHeight: 15,
                itemWidth: 20,
                data: nameList
            },
            color: ['#75d492', '#c5d686', '#f0a15c', '#e35e5f', '#b83b5d', '#57155d'],
            series: [{
                name: '',
                type: 'pie',
                minAngle: 15,
                avoidLabelOverlap: true,
                roseType: 'radius',
                center: ['40%', '60%'],
                radius: [0, 80],
                label: {
                    normal: {
                        show: true,
                        position: 'left', //标签的位置
                        textStyle: {
                            fontSize: 11 //文字的字体大小
                        },
                        formatter: function (a) {
                            var value = a['percent'];
                            if (value > 0) {
                                return (a.name + ":" + a.value + "天\n" + "(" + a['percent'] + "%)");
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
                labelLine: {
                    normal: {
                        show: true,
                        length: 10,
                        length2: 10
                    }
                },
                data: data2List
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