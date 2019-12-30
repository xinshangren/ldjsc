//获取第1个图表
export const echarsEnti = {
  appendBaseColor: function (dataList, colorList, opacity) {
    const temp = [];
    for (let i in dataList) {
      const tempObj = {
        ...dataList[i],
        itemStyle: {
          color: colorList[i],
          opacity: opacity
        }
      };
      temp.push(tempObj)
    }
    return temp;
  },
  showQssczzEcharsBar: function (echarts, value, dataList1) {
    const myCharts = echarts.init(value);
    var dataList = [];
    for (var i = 0; i < dataList1.length; i++) {
      var ind = dataList1[i];
      var statisname = ind.statisname;
      var indexdata = ind.indexdata;
      var yonydata = ind.yonydata;
      var map = {
        name: statisname,
        value: indexdata
      }
      dataList.push(map);
    }
    const colorList = ['#ffbe62', '#21c1f5', '#5deff8'];
    var option = {
      backgroundColor: '#ffffff',
      series: [{
        type: 'pie',
        radius: [0, 20],
        label: {
          normal: {
            show: false
          }
        },
        itemStyle: {},
        labelLine: {
          normal: {
            show: false
          }
        },
        data: this.appendBaseColor(dataList, colorList, 0.6)
      },
      {
        type: 'pie',
        radius: [40, 55],
        label: {
          normal: {
            textStyle: {
              color: '#000'
            },
            fontSize: 14,
            fontFamily: 'PingFangSC',
            fontWeight: 400,
            formatter: '{b|{b}}\n{b|{c}万元}\n{b|{d}%}',
            rich: {
              c: {
                color: '#000000',
                fontSize: 14,
                lineHeight: 5
              },
              b: {
                lineHeight: 18,
                color: '#000000',
                fontSize: 12,
                height: 40
              },
            }
          }
        },
        labelLine: {
          show: true,
          lineStyle: {
            color: '#000000',
          }
        },
        data: this.appendBaseColor(dataList, colorList, 1)
      }
      ]
    };

    myCharts.setOption(option);
  },
  showZfBarEchars: function (echarts, value, dataList) {
    const myCharts = echarts.init(value);
    var dataShadow = [];
    var dataAxis = [];
    var dataAP = [];
    var dataList1 = dataList.reverse();
    for (let i = 0; i < dataList1.length; i++) {
      var statisname = dataList1[i].statisname; //名字
      var yonydata = dataList1[i].yonydata; //同比
      var indexdata = dataList1[i].indexdata; //值
      dataAxis.push(statisname);
      dataAP.push(yonydata);
    }
    var yMax = Math.max.apply(null, dataAP);
    for (var i = 0; i < dataAP.length; i++) {
      if (dataAP[i] < 0) {
        dataShadow.push(-yMax);
      } else {
        dataShadow.push(yMax);
      }

    }

    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        top: '0%',
        left: '9%',
        right: '10%',
        bottom: '60%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        position: 'bottom',
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        splitArea: {
          show: false
        }
      },
      yAxis: {
        position: 'right',
        type: 'category',
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true
        },
        axisTick: {
          show: false
        },
        splitArea: {
          show: false
        },
        data: dataAxis,
        axisLabel: {
          interval: 0,
          formatter: function (value) {
            var isFlag = false;
            var tbValue = '';
            for (let i = 0; i < dataList1.length; i++) {
              var statisname = dataList1[i].statisname; //名字
              var indexdata = dataList1[i].indexdata; //值
              if (value === statisname) {
                tbValue = dataList1[i].yonydata; //同比
                if (tbValue > 0) {
                  isFlag = true;
                } else {
                  isFlag = false;
                }
                if (tbValue == '-') {
                  return "{a|" + value + "}" + "\t" + "{c|" + tbValue + "}";
                } else {
                  if (isFlag) {
                    return "{a|" + value + "}" + "\t" + "{c|" + tbValue + "%}" + "\t" + "{warnValue|}";
                  } else {
                    return "{a|" + value + "}" + "\t" + "{b|" + tbValue + "%}" + "\t" + "{warnValue1|}";
                  }
                }

              }

            }
          },
          // margin: 20,
          rich: {
            //这里的rich，下面有解释
            warnValue: {
              //这里的warnValue对应上面的标签名
              height: 10,
              align: 'center',
              backgroundColor: {
                image: '../img/hgjj_up_jt_bg.png' //这个warnImg是上面定义的图片var warnImg = "img/warn.png";
              }
            },
            warnValue1: {
              //这里的warnValue对应上面的标签名
              height: 10,
              align: 'center',
              backgroundColor: {
                image: '../img/hgjj_down_jt_bg.png' //这个warnImg是上面定义的图片var warnImg = "img/warn.png";
              }
            },
            a: {
              color: '#000',
              fontSize: 13
            },
            b: {
              color: '#14d692',
              fontSize: 13
            },
            c: {
              color: '#f30011',
              fontSize: 13
            }
          }
        }
      },
      series: [{ // For shadow
        type: 'bar',
        barWidth: 20, //柱子宽度
        itemStyle: {
          normal: {
            color: function (params) {
              var colorList = ['#E3F2FF', '#FFF9E6', '#E3F2FF'];
              return colorList[params.dataIndex]
            }
          }
        },
        barGap: '-80%',
        barCategoryGap: '40%',
        data: dataShadow,
        animation: false
      },
      {
        type: 'bar',
        barWidth: 10, //柱子宽度
        label: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            color: function (params) {
              var colorList = [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#b0ebff'
              }, {
                offset: 1,
                color: '#21c1f5'
              }]), new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#ffedb1'
              }, {
                offset: 1,
                color: '#ffbe62'
              }]), new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#b0ebff'
              }, {
                offset: 1,
                color: '#5deff8'
              }])];
              return colorList[params.dataIndex]
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              }
            }
          },

        },
        data: dataAP
      }
      ]
    };
    myCharts.setOption(option);
  },
  showGdzctzEchars3: function (echarts, value, list) {
    const myCharts = echarts.init(value);
    var xLabel = [];
    var maxValueList = [];
    var valueList = [];
    for (let i = 0; i < list.length; i++) {
      var statisname = list[i].statisname;
      var indexdata = parseFloat((list[i].indexdata) / 10000).toFixed(2);
      var yonydata = list[i].yonydata;
      valueList.push(parseFloat(indexdata));
      xLabel.push(statisname);
    }
    var yMax = Math.max.apply(null, valueList);
    for (let j = 0; j < valueList.length; j++) {
      maxValueList.push(yMax);
    }
    console.log(maxValueList);
    console.log(valueList);
    console.log(xLabel);

    var option = {
      grid: {
        top: '22%',
        left: '2%',
        right: '5%',
        bottom: '2%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: xLabel,
        splitLine: {
          show: false
        },
        splitArea: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        max: yMax,
        splitLine: {
          show: false
        },
        splitArea: {
          show: false
        }
      },
      series: [,
        { // 背景色
          type: 'pictorialBar',
          stack: '总量',
          barWidth: 20, //柱子宽度
          symbol: 'fixed',
          symbolSize: [40, 10],
          symbolMargin: 2,
          symbolRepeat: 'repeat',
          symbolBoundingData: 300,
          z: -10,
          data: maxValueList,
          itemStyle: {
            normal: {
              color: '#E3F0FF',
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  color: '#2AC3F6',
                  fontSize: 14
                },
                formatter: function (a) {
                  var index = a.dataIndex;
                  var value = valueList[index];
                  return value + '亿元';
                }
              }
            }
          }
        },
        { // 背景色
          type: 'pictorialBar',
          stack: '总量',
          barWidth: 20, //柱子宽度
          symbol: 'fixed',
          symbolSize: [40, 10],
          symbolMargin: 2,
          symbolRepeat: 'repeat',
          symbolBoundingData: 300,
          z: -10,
          data: valueList,
          itemStyle: {
            normal: {
              color: '#2AC3F6'
            }
          }
        }
      ]
    };
    myCharts.setOption(option);
  },
  showGdzctzEchars4: function (echarts, value, list) {
    const myCharts = echarts.init(value);
    var curVal = 0;
    for (let i = 0; i < list.length; i++) {
      var statisname = list[i].statisname;
      if (statisname == '民间投资') {
        curVal = list[i].yonydata;
      }

    }

    var angle = [220, -40];

    var option = {
      title: {
        text: '民间投资增长率',
        bottom: 'left',
        left: 'center',
        textStyle: {
          //文字颜色
          color: '#000',
          //字体风格,'normal','italic','oblique'
          fontStyle: 'normal',
          //字体系列
          fontFamily: 'sans-serif',
          //字体大小
          fontSize: 15
        }
      },
      grid: {
        top: '10%',
        left: '2%',
        right: '28%',
        bottom: '2%',
        containLabel: true
      },
      backgroundColor: '#fff',
      tooltip: {
        show: false,
        formatter: "{a} <br/>{b} : {c}%"
      },
      series: [{
        name: '最外层环仪表盘',
        type: "gauge",
        min: -50,
        max: 50,
        startAngle: angle[0],
        endAngle: angle[1],
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            color: [
              [1, "#c1c3c5"]
            ],
            width: 1
          }
        },
        axisTick: {
          lineStyle: {
            color: "#fff",
            width: 2
          },
          length: 0,
          splitNumber: 1
        },
        axisLabel: {
          distance: -40,
          formatter: function (v) {
            if (v == 60) {
              return '{a|' + v + '}';
            } else if (v == 85) {
              return '{b|' + v + '}';
            } else {
              return v;
            };
          },
          textStyle: {
            color: "#bbb"
          },
          rich: {
            a: {
              color: '#fbe010'
            },
            b: {
              color: '#3fa7dc'
            }
          }
        },
        splitLine: {
          show: true,
          length: 20,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        itemStyle: {
          normal: {
            color: "#818488",
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 10
          }
        },
        detail: {
          formatter: "{value}%",
          offsetCenter: [0, "60%"],
          textStyle: {
            fontSize: 17,
            color: "#333"
          }
        },
        title: {
          show: false
        },
        pointer: {
          length: '85%'
        },
        data: [{
          value: curVal
        }]
      }, {
        name: "内环仪表盘四段颜色",
        type: "gauge",
        min: 0,
        max: 100,
        radius: '69%',
        startAngle: angle[0],
        endAngle: angle[1],
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            color: [
              [0, '#58e481'],
              [0.1, '#88e792'],
              [0.2, "#bee58a"],
              [0.3, '#e5e58a'],
              [0.4, '#fbe48a'],
              [0.5, "#ffd27f"],
              [0.6, '#ffb36b'],
              [0.7, '#fb9255'],
              [0.8, "#eb673a"],
              [0.9, "#d9391c"],
              [1, "#d9391c"]
            ],
            width: 10
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: true,
          length: 15,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        pointer: {
          length: 0
        },
        detail: {
          show: false
        },
      }]
    }
    myCharts.setOption(option);
  },
  showGdzctzEchars5: function (echarts, value, list) {
    const myCharts = echarts.init(value);
    var curVal = 0;
    for(let i = 0; i < list.length; i++) {
      var statisname = list[i].statisname;
      if(statisname == '工业投资') {
        curVal = list[i].yonydata;
      }
  
    }
  
    var angle = [220, -40];
  
    var option = {
      title: {
        text: '工业投资增长率',
        bottom: 'left',
        left: 'center',
        textStyle: {
          //文字颜色
          color: '#000',
          //字体风格,'normal','italic','oblique'
          fontStyle: 'normal',
          //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
          //字体系列
          fontFamily: 'sans-serif',
          //字体大小
          fontSize: 15
        }
      },
      backgroundColor: '#fff',
      tooltip: {
        show: false,
        formatter: "{a} <br/>{b} : {c}%"
      },
      series: [{
        name: '最外层环仪表盘',
        type: "gauge",
        min: -50,
        max: 50,
        startAngle: angle[0],
        endAngle: angle[1],
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            color: [
              [1, "#c1c3c5"]
            ],
            width: 1
          }
        },
        axisTick: {
          lineStyle: {
            color: "#fff",
            width: 2
          },
          length: 0,
          splitNumber: 1
        },
        axisLabel: {
          distance: -40,
          formatter: function(v) {
            if(v == 60) {
              return '{a|' + v + '}';
            } else if(v == 85) {
              return '{b|' + v + '}';
            } else {
              return v;
            };
          },
          textStyle: {
            color: "#bbb"
          },
          rich: {
            a: {
              color: '#fbe010'
            },
            b: {
              color: '#3fa7dc'
            }
          }
        },
        splitLine: {
          show: true,
          length: 20,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        itemStyle: {
          normal: {
            color: "#818488",
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 10
          }
        },
        detail: {
          formatter: "{value}%",
          offsetCenter: [0, "60%"],
          textStyle: {
            fontSize: 17,
            color: "#333"
          }
        },
        title: {
          show: false
        },
        pointer: {
          length: '85%'
        },
        data: [{
          value: curVal
        }]
      }, {
        name: "内环仪表盘四段颜色",
        type: "gauge",
        min: 0,
        max: 100,
        radius: '69%',
        startAngle: angle[0],
        endAngle: angle[1],
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            color: [
              [0, '#58e481'],
              [0.1, '#88e792'],
              [0.2, "#bee58a"],
              [0.3, '#e5e58a'],
              [0.4, '#fbe48a'],
              [0.5, "#ffd27f"],
              [0.6, '#ffb36b'],
              [0.7, '#fb9255'],
              [0.8, "#eb673a"],
              [0.9, "#d9391c"],
              [1, "#d9391c"]
            ],
            width: 10
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: true,
          length: 15,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        pointer: {
          length: 0
        },
        detail: {
          show: false
        },
      }]
    }
  
    myCharts.setOption(option);
  },
  showGdzctzEchars6: function (echarts, value, list) {
    const myCharts = echarts.init(value);
    var curVal = 0;
    for(let i = 0; i < list.length; i++) {
      var statisname = list[i].statisname;
      if(statisname == '基础投资') {
        curVal = list[i].yonydata;
      }
  
    }
  
    var angle = [220, -40];
  
    var option = {
      title: {
        text: '基础投资增长率',
        bottom: 'left',
        left: 'center',
        textStyle: {
          //文字颜色
          color: '#000',
          //字体风格,'normal','italic','oblique'
          fontStyle: 'normal',
          //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
          //字体系列
          fontFamily: 'sans-serif',
          //字体大小
          fontSize: 15
        }
      },
      backgroundColor: '#fff',
      tooltip: {
        show: false,
        formatter: "{a} <br/>{b} : {c}%"
      },
      series: [{
        name: '最外层环仪表盘',
        type: "gauge",
        min: -50,
        max: 50,
        startAngle: angle[0],
        endAngle: angle[1],
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            color: [
              [1, "#c1c3c5"]
            ],
            width: 1
          }
        },
        axisTick: {
          lineStyle: {
            color: "#fff",
            width: 2
          },
          length: 0,
          splitNumber: 1
        },
        axisLabel: {
          distance: -40,
          formatter: function(v) {
            if(v == 60) {
              return '{a|' + v + '}';
            } else if(v == 85) {
              return '{b|' + v + '}';
            } else {
              return v;
            };
          },
          textStyle: {
            color: "#bbb"
          },
          rich: {
            a: {
              color: '#fbe010'
            },
            b: {
              color: '#3fa7dc'
            }
          }
        },
        splitLine: {
          show: true,
          length: 20,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        itemStyle: {
          normal: {
            color: "#818488",
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 10
          }
        },
        detail: {
          formatter: "{value}%",
          offsetCenter: [0, "60%"],
          textStyle: {
            fontSize: 17,
            color: "#333"
          }
        },
        title: {
          show: false
        },
        pointer: {
          length: '85%'
        },
        data: [{
          value: curVal
        }]
      }, {
        name: "内环仪表盘四段颜色",
        type: "gauge",
        min: 0,
        max: 100,
        radius: '69%',
        startAngle: angle[0],
        endAngle: angle[1],
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            color: [
              [0, '#58e481'],
              [0.1, '#88e792'],
              [0.2, "#bee58a"],
              [0.3, '#e5e58a'],
              [0.4, '#fbe48a'],
              [0.5, "#ffd27f"],
              [0.6, '#ffb36b'],
              [0.7, '#fb9255'],
              [0.8, "#eb673a"],
              [0.9, "#d9391c"],
              [1, "#d9391c"]
            ],
            width: 10
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: true,
          length: 15,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        pointer: {
          length: 0
        },
        detail: {
          show: false
        },
      }]
    }
  
    myCharts.setOption(option);
  }

}



