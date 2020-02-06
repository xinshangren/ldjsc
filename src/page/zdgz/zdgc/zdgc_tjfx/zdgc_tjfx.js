//获取第1个图表
export const echarsEnti = {
  createEcharsOne: function (echarts, value, data1) {
    const myCharts = echarts.init(value, "macarons");
    let option = {
      tooltip: {
        trigger: 'axis',
        show: false,
        position: ['30%', '30%'],
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        selectedMode: false,
        orient: 'horizontal',
        show: true,
        itemHeight: 7,
        itemWidth: 15,
        x: '10%',
        y: '5%',
        data: ['续建', '新建', '前期'],
        textStyle: {
          rich: {
            a: {
              width: 100
            }
          },
          textFont: '12px verdana'
        }
      },
      grid: {
        top: '18%',
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ["基础设施", "传统产业升级", "产业转型"],
        axisLabel: {
          show: true,
          textStyle: {
            color: '#616161'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          textStyle: {
            color: '#616161'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#1d97d2',
          }
        }
      },
      series: [{
        name: '续建',
        type: 'bar',
        stack: '总量',
        barWidth: 20,
        color: '#FFB423',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: data1[0]
      },
      {
        name: '新建',
        type: 'bar',
        stack: '总量',
        color: '#FF503F',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: data1[1]
      },
      {
        name: '前期',
        type: 'bar',
        stack: '总量',
        color: '#1976D2',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: data1[2]
      }
      ]
    };
    myCharts.setOption(option);
  },
  createEcharsTwo: function (echarts, value, data1) {
    const myCharts = echarts.init(value, "macarons");
    var nameList = [];
    var data1List = [];
    var data2List = [];
    var data3List = [];
    for (var Key in data1) {
      nameList.push(Key);
      var data1value = data1[Key][0];
      var data2value = data1[Key][1];
      var data3value = data1[Key][2];
      data1List.push(data1value);
      data2List.push(data2value);
      data3List.push(data3value);
    }

    let option = {
      legend: {
        data: ['续建', '新建', '前期'],
        itemHeight: 7,
        itemWidth: 15
      },
      grid: {
        top: '14%',
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          textStyle: {
            color: '#616161'
          }
        }
      },
      yAxis: {
        type: 'category',
        data: nameList,
        axisLabel: {
          show: true,
          textStyle: {
            color: '#616161'
          }
        }
      },
      series: [{
        name: '续建',
        type: 'bar',
        stack: '总量',
        color: '#FF503F',
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
        name: '新建',
        type: 'bar',
        stack: '总量',
        color: '#1976D2',
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
        name: '前期',
        type: 'bar',
        stack: '总量',
        barWidth: '15px',
        color: '#FFB423',
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
      }
      ]
    };
    myCharts.setOption(option);
  },
  createEcharsThree: function (echarts, value, data1) {
    const myCharts = echarts.init(value, "macarons");
    var total = 0;
    var data1List = [];
    var nameList = [];
    for (var Key in data1) {
      var data1value = data1[Key];
      nameList.push(Key);
      var map = {
        value: data1value,
        name: Key
      }
      var va = parseFloat(data1value);
      total += va;
      data1List.push(map);
    }

    var totalstr = total.toFixed(1) + '亿';
    let option = {
      tooltip: {
        trigger: 'item',
        position: ['30%', '30%'],
        formatter: "{a} <br/>{b}: {c}亿 ({d}%)"
      },
      graphic: [{ //设置饼状图内部文字
        type: 'text',
        left: 70, //设置偏移量
        top: 110,
        z: 2,
        zlevel: 100,
        style: {
          text: totalstr,
          x: 100,
          y: 100,
          textAlign: 'center',
          fill: '#1976D2',
          width: 200,
          height: 200,
          textFont: '12px verdana'
        }
      }],
      grid: {
        top: '0%',
        left: '2%',
        right: '0%',
        bottom: '0%',
        containLabel: true
      },
      legend: {
        orient: 'horizontal',
        show: true,
        left: '40%',  //图例距离左的距离
        y: 'center',
        itemHeight: 7,
        height: 10,
        itemGap: 4,
        data: nameList,
        formatter: function (name) {
          let target;
          for (let i = 0; i < data1List.length; i++) {
            if (data1List[i].name === name) {
              target = data1List[i].value
            }
          }
          var arr = [
            '{b|' + name + '}',
            '{a|' + ((target / total) * 100).toFixed(2) + '%\t\t}{a|' + target + '}',
          ]
          var bfb = parseInt((target / total) * 100).toFixed(0);
          // return name + " " + bfb + "% " + target;
          return arr;
        },
        textStyle: {
          rich: {
            a: {
              fontSize: 12,
              verticalAlign: 'center',
              align: 'center',
              padding: [0, 0, 0, 0]
            },
            b: {
              fontSize: 12,
              align: 'left',
              padding: [0, 0, 0, 0],
              lineHeight: 20
            }
          }
        }
      },
      color: ['#FF503F', '#1976D2', '#FFB423'],
      series: [{
        name: '',
        type: 'pie',
        roseType: 'radius',
        center: ['25%', '50%'],
        radius: [25, 55],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
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
        labelLine: {
          normal: {
            show: false,
            length: 1,
            length2: 2
          }
        },
        data: data1List
      }]
    };

    myCharts.setOption(option);
  },
  createEcharsFour: function (echarts, value, data1) {
    const myCharts = echarts.init(value, "macarons");
    var myColor = ['#ff9966', '#ffcc66', '#99ff5c', '#32f7a6', '#6699ff', '#ff5cfd'];
    var nameList = [];
    var data1List = [];
    for (var Key in data1) {
      nameList.push(Key);
      var data1value = data1[Key];
      data1List.push(data1value);
    }
    let option = {
      tooltip: {
        trigger: 'axis',
        position: ['30%', '30%'],
        axisPointer: {
          type: 'shadow'
        }
      },
      tooltip: {
        trigger: 'item',
        position: ['30%', '30%']
      },
      legend: {
        orient: 'horizontal',
        show: true,
        itemHeight: 7,
        itemWidth: 15,
        x: '0%',
        data: ['占比'],
        textStyle: {
          rich: {
            a: {
              width: 100
            }
          },
          textFont: '12px verdana'
        }
      },
      grid: {
        top: '5%',
        left: '2%',
        right: '5%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#616161'
          },
          interval: 0
        }
      },
      yAxis: {
        type: 'category',
        data: nameList,
        axisLabel: {
          textStyle: {
            color: '#616161'
          },
          interval: 0
        }
      },
      series: [{
        name: '',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          normal: {
            //每根柱子颜色设置
            color: function (params) {
              let colorList = ['#FFB423', '#1976D2', '#FF503F', '#FFB423', '#1976D2', '#FF503F', '#1976D2', '#FF503F'];
              return colorList[params.dataIndex];
            },
            label: {
              show: true, //开启显示
              position: 'right', //在上方显示
              textStyle: { //数值样式
                color: '#000000',
                fontSize: 8
              },
              formatter: function (a) {
                if (a.value > 0) {
                  return (a.value + '%');
                } else {
                  return ('0%');
                }

              }
            }
          }
        },
        data: data1List
      }]
    };
    myCharts.setOption(option);
  },
  createEcharsFive: function (echarts, value, data1) {

    const myCharts = echarts.init(value, "macarons");
    var total = 0;
    var data1List = [];
    for (var Key in data1) {
      var data1value = data1[Key];
      var map = {
        value: data1value,
        name: Key
      }
      var va = parseFloat(data1value);
      total += va;
      data1List.push(map);
    }

    var totalstr = total.toFixed(1) + '亿';
    let option = {
      tooltip: {
        trigger: 'item',
        position: ['30%', '30%'],
        formatter: "{a} <br/>{b}: {c}亿 ({d}%)"
      },
      graphic: [{ //设置饼状图内部文字
        type: 'text',
        left: 65, //设置偏移量
        top: 75,
        z: 2,
        zlevel: 100,
        style: {
          text: totalstr,
          x: 100,
          y: 100,
          textAlign: 'center',
          fill: '#000',
          width: 200,
          height: 200,
          textFont: '15px verdana'
        }
      }],
      legend: {
        orient: 'vertical',
        show: true,
        itemHeight: 7,
        left: '41%',  //图例距离左的距离
        top: "20%",
        data: ["基础设施", "产业转型", "传统产业升级"],
        formatter: function (name) {
          let target;
          for (let i = 0; i < data1List.length; i++) {
            if (data1List[i].name === name) {
              target = data1List[i].value
            }
          }
          var arr = [
            '{b|' + name + '}',
            '{a|' + ((target / total) * 100).toFixed(2) + '%\t\t}{a|' + target + '亿元}',
          ]
          var bfb = parseInt((target / total) * 100).toFixed(0);
          // return name + " " + bfb + "% " + target;
          return arr;
        },
        textStyle: {
          rich: {
            a: {
              fontSize: 12,
              verticalAlign: 'center',
              align: 'center',
              padding: [0, 0, 0, 0]
            },
            b: {
              fontSize: 12,
              align: 'left',
              padding: [0, 0, 0, 0],
              lineHeight: 20
            }
          }
        }
      },
      color: ['#3ca1ec', '#faad14', '#3ecbb2'],
      series: [{
        name: '',
        type: 'pie',
        center: ['25%', '44%'],
        radius: [35, 50],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'left', //标签的位置
            textStyle: {
              fontSize: 10 //文字的字体大小
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
        data: data1List
      }]
    };
    myCharts.setOption(option);
  },
  createEcharsSix: function (echarts, value, data1) {
    const myCharts = echarts.init(value, "macarons");
    var nameList = [];
    var data1List = [];
    for (var Key in data1) {
      nameList.push(Key);
      var data1value = data1[Key];
      data1List.push(data1value);
    }
    let option = {
      tooltip: {
        trigger: 'item',
        position: ['30%', '30%'],
        formatter: "{b}: {c}%"
      },
      legend: {
        orient: 'horizontal',
        show: true,
        itemHeight: 7,
        itemWidth: 15,
        x: '0%',
        data: nameList,
        textStyle: {
          rich: {
            a: {
              width: 100
            }
          },
          textFont: '12px verdana'
        }
      },
      grid: {
        top: '12%',
        left: '2%',
        right: '10%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#000'
          },
          interval: 0
        }
      },
      yAxis: {
        type: 'category',
        data: nameList,
        axisLabel: {
          textStyle: {
            color: '#000'
          },
          interval: 0
        }
      },
      series: [{
        name: nameList,
        type: 'bar',
        barWidth: 20, //柱图宽度
        itemStyle: {
          normal: {
            //每根柱子颜色设置
            color: function (params) {
              let colorList = ['#FFB423', '#1976D2', '#FF503F'];
              return colorList[params.dataIndex];
            },
            label: {
              show: true, //开启显示
              position: 'right', //在上方显示
              textStyle: { //数值样式
                color: '#000000',
                fontSize: 8
              },
              formatter: function (a) {
                if (a.value > 0) {
                  return (a.value + '%');
                } else {
                  return ('0%');
                }

              }
            }
          }
        },
        data: data1List
      }]
    };
    myCharts.setOption(option);
  }

}



