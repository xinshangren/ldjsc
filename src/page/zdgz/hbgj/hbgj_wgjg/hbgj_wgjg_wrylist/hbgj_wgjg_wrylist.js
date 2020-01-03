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
    }
}