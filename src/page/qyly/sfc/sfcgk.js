//获取第1个图表
export const echarsEnti = {
  createEcharsOne: function (echarts, value, dataEntity) {
    const myCharts = echarts.init(value);

    var total = 0;
    var names = [];
    var values = [];
    var dataList = [];
    for (var i = 0; i < dataEntity.length; i++) {
      names.push(dataEntity[i].counties);
      values.push(dataEntity[i].num);
      total = total + dataEntity[i].num;
      var data = {
        name: names[i],
        value: values[i]
      }
      dataList.push(data);
    }
    // console.log(total);
    let option = {
      title: {
        text: '总数',
        subtext: total + "",
        x: '29%',
        y: '39%',
        textStyle: {
          fontSize: 16,
          fontWeight: 'normal',
          color: ['#38a4dd']
        },
        subtextStyle: {
          color: '#2f3b4c',
          fontSize: 24
        },
      },
      backgroundColor: '#ffffff',
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      color: ['#3ca1ec', '#33d1f8', '#3ECBB2', '#FAAD14', '#D7FA14', 'F65454'],
      legend: {
        itemHeight: 8,
        itemWidth: 8,
        orient: 'vertical',
        left: '50%',  //图例距离左的距离
        y: 'center',
        data: names,
        formatter: function (name) {
          let target;
          for (let i = 0; i < names.length; i++) {
            if (names[i] === name) {
              target = values[i]
            }
          }
          var arr = [
            '{b|' + name + '}',
            '{a|' + ((target / total) * 100).toFixed(2) + '%}{a|' + target + '}',
          ]
          var bfb = parseInt((target / total) * 100).toFixed(0);
          // return name + " " + bfb + "% " + target;
          return arr.join('\n');
        },
        textStyle: {
          rich: {
            a: {
              fontSize: 14,
              verticalAlign: 'center',
              align: 'center',
              padding: [0, 0, 0, 10]
            },
            b: {
              fontSize: 14,
              align: 'left',
              padding: [0, 0, 0, 10],
              lineHeight: 20
            }
          }
        }
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: '55%',
          // center: ['40%', '50%'],
          center: ["30%", "50%"],
          radius: ["40%", "70%"],
          left:'100%',
          data: dataList,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          itemStyle: {
            normal: {
              label: {
                show: false,
                //	                            position:'inside',
                formatter: '{b} : {c} ({d}%)'
              },
              borderColor: '#ffffff',
              borderWidth: 10,
            },
            labelLine: { show: true }
          }
        }
      ]
    };
    myCharts.setOption(option);
  },
  createEcharsTwo: function (echarts, value, result) {
    const myCharts = echarts.init(value, "macarons");

    var nameList = [];
    var rankList = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];
    var valueList = [];
    for (var i = 0; i < result.length; i++) {
        var entity = result[i];
        var name = entity.name; //城市名称
        var cityRank = entity.cityRank; //城市名称
        var visitor = entity.visitor; //值
        nameList.push(name);
        if (name === '晋城市') {
            // showEcharsView1_ssgk1(result, rankList[i],value1,echarts);
        }
        valueList.push(parseFloat(visitor).toFixed(0));
    }

    var maxValue = Math.max.apply(null, valueList);
    maxValue = maxValue + 100000;
    var nyValueList = [];
    var wYValueList = [];
    var zeroValueList = [];
    for (var i = 0; i < result.length; i++) {
        var name = entity.name; //城市名称
        var visitor = entity.visitor; //值
        nyValueList.push(maxValue - 0.1);
        wYValueList.push(maxValue);
        zeroValueList.push(0);
    }
    var myColor = ['#57155d', '#b83b5d', '#b83b5d', '#e35e5f',
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
            data:zeroValueList,
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

}



