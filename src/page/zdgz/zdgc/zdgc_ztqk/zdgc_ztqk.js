//获取第1个图表
export const echarsEnti = {
  createEcharsOne: function (echarts, value, dataEntity) {
    const myCharts = echarts.init(value);

    var dataList = [];
    var value = {
      name: "前期",
      value: dataEntity.gcslqq
    }
    var value1 = {
      name: "新建",
      value: dataEntity.gcslxinj
    }
    var value2 = {
      name: "续建",
      value: dataEntity.gcslxj
    }
    dataList.push(value);
    dataList.push(value1);
    dataList.push(value2);
    var total = parseInt(dataEntity.gcslqq) + parseInt(dataEntity.gcslxinj) + parseInt(dataEntity.gcslxj);
    // console.log(total);
    let option = {
      title: {
        text: '总数',
        subtext: dataEntity.gcsl + "",
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
      color: ['#3ca1ec', '#3ecbb2', '#faad14'],
      legend: {
        itemHeight  :9,
        itemWidth:9,
        orient: 'vertical',
        left: '60%',  //图例距离左的距离
        y: 'center',
        data: ['前期', '新建', '续建'],
        formatter: function (name) {
          let target;
          for (let i = 0; i < dataList.length; i++) {
            if (dataList[i].name === name) {
              target = dataList[i].value
            }
          }
          var arr = [
            '{b|' + name + '}',
            '{a|' + ((target / total) * 100).toFixed(2) + '%}{a|'+target+'个}',
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
          center: ["35%", "50%"],
          radius: ["40%", "70%"],

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
  createEcharsThree: function (echarts, value, dataentity) {
    const myCharts = echarts.init(value);
    var dataXname = dataentity.axisX;
    var axisY = dataentity.axisY;
    var option = {
      backgroundColor: '#ffffff',
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '2%',
        right: '4%',
        bottom: '0%',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: dataXname,
        axisLine: {
          lineStyle: {
            color: '#cccccc'

          }
        },
        axisLabel: {
          textStyle: {
            fontFamily: 'Microsoft YaHei',
            color: '#666666'
          }
        }
      },
      yAxis: [{
        name: '',
        type: 'value',
        "show": false,
        axisLine: {
          show: false,
          lineStyle: {
            color: 'black'
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: 'black'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {}
      }, {
        name: '',
        type: 'value',
        max: '100',
        axisLine: {
          show: false,
          lineStyle: {
            color: 'black'
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255,255,255,0.3)'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {}
      }],
      series: [{
        name: '生产总值',
        type: 'bar',
        barWidth: '17px',
        yAxisIndex: "0",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#7DCAF3'
            }, {
              offset: 1,
              color: '#6E93F7'
            }]),
            barBorderRadius: 4,
          }
        },
        label: {
          show: true,
          position: 'top',
          color: '#3ca1ec',
          formatter: function (params) {
            return params.value
          }
        },
        data: axisY
      }]
    };

    myCharts.setOption(option);
  }

}



