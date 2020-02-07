//定义js全局变量 名称
export const nytsMtQylbDetailJs = {
    checkStrOfZero: function (str) {
        if (str == '' || str == null || str == undefined) {
            str = 0;
        }
        return str;
    },
    //煤炭概况第一个统计图
    showjmrjsrEchars1: function (echarts, value, list) {
        const myCharts = echarts.init(value);
        var allYear = [];
        var xLabel = [];
        var searList = [];
        var dataListValue1 = [];
        var dataListValue2 = [];
        var dataListValue3 = [];

        var dataListValue5 = [];
        var dataListValue6 = [];
        var dataListValue7 = [];
        var lengdList = ['工业总产值', '工业销售产值', '原煤产量', '商品煤产量', '动力洗精煤产量'];
        var flag = false;
        for (let i = 0; i < list.length; i++) {
            var enti = list[i];
            var gycz = enti.gycz; //工业产值
            var xscz = enti.xscz; //销售产值
            var jmcl =  this.checkStrOfZero(enti.jmcl); //精煤产量
            var spmcl = this.checkStrOfZero(enti.spmcl); //商品产量
            var ymcl =  this.checkStrOfZero(enti.ymcl); //原煤产量
            var date_month = enti.date_month;
            var month = date_month.split('-');
            dataListValue1.push(gycz);
            dataListValue2.push(xscz);
            dataListValue5.push(jmcl);
            dataListValue6.push(spmcl);
            dataListValue7.push(ymcl);
            xLabel.push(month[1]);
        }
        var map1 = {
            name: lengdList[0],
            type: 'bar',
            barWidth: 5, //柱子宽度
            color: '#FFBE62',
            data: dataListValue1
        }
        var map2 = {
            name: lengdList[1],
            type: 'bar',
            color: '#5DEFF8',
            barWidth: 3, //柱子宽度
            data: dataListValue2
        }
        var map5 = {
            name: lengdList[2],
            type: 'line',
            symbolSize: 5, //折线点的大小
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#FFBE62',
                    borderColor: '#FFBE62',
                    borderWidth: 1,
                    lineStyle: {
                        color: "#FFBE62" //折线的颜色
                    },
                }
            },
            data: dataListValue5,
        }
        var map6 = {
            name: lengdList[3],
            type: 'line',
            symbolSize: 3, //折线点的大小
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#5DEFF8',
                    borderColor: '#5DEFF8',
                    borderWidth: 1,
                    lineStyle: {
                        color: "#5DEFF8" //折线的颜色
                    },
                }
            },
            data: dataListValue6,
        }
        var map7 = {
            name: lengdList[4],
            type: 'line',
            symbolSize: 8, //折线点的大小
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#21C1F5',
                    borderColor: '#21C1F5',
                    borderWidth: 1,
                    lineStyle: {
                        color: "#21C1F5" //折线的颜色
                    },
                }
            },
            data: dataListValue7,
        }
        searList.push(map1);
        searList.push(map2);
        searList.push(map5);
        searList.push(map6);
        searList.push(map7);

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
                right: '4%',
                top: '34%',
                left: '4%',
                bottom: '',
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
                name: '产值（万元）',
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
                }
            },
            {
                name: '产量（万吨）',
                type: 'value',
                axisLabel: {
                    formatter: '{value}',
                    show: true,
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
            series: searList
        };
        myCharts.setOption(option);
    }
}