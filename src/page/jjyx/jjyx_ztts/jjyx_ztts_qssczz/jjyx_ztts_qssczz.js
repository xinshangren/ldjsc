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
    const colorList = ['#3ca1ec', '#faad14', '#46e1c5'];
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
            formatter: '{b|{b}}\n{b|{c}亿元}\n{b|{d}%}',
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
  showZfBarEchars: function (echarts, value, dataList,downImg,upImg) {
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
        },
       formatter:function(param){
         return param[0].name+"<br>"+param[0].marker+param[1].value
       }
      },
      grid: {
        top: '0%',
        left: '9%',
        right: '10%',
        bottom: '30%',
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
        },
        axisLabel: {
          interval: 0,
          formatter: function (value) {
            return value + "%";
          }
        }
      },
      yAxis: {
        position: 'right',
        type: 'category',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitArea: {
          show: false
        },
        data: dataAxis,
        axisLabel: {
          show: true,
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
                image: upImg//这个warnImg是上面定义的图片var warnImg = "img/warn.png";
              }
            },
            warnValue1: {
              //这里的warnValue对应上面的标签名
              height: 10,
              align: 'center',
              backgroundColor: {
                image: downImg //这个warnImg是上面定义的图片var warnImg = "img/warn.png";
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
  showQssczzData: function (echarts, value, dataList1) {
    const myCharts = echarts.init(value);
    var dataList = dataList1.reverse();
    var allYear = [];
    var xLabel = [];
    var searList = [];
    var dataListValue1 = [];
    var dataListValue2 = [];
    var dataListValue3 = [];
    var dataListValue4 = [];

    var dataListValue5 = [];
    var dataListValue6 = [];
    var dataListValue7 = [];
    var dataListValue8 = [];
    var dataListValue0 = [];
    var lengdList = [];
    var flag = false;
    for (let i = 0; i < dataList.length; i++) {
      var year = dataList[i].year; //分段标题
      var yearIncreaseRate = dataList[i].yearIncreaseRate; //分段数据
      for (let j = 0; j < yearIncreaseRate.length; j++) {
        var enti = yearIncreaseRate[j];
        var quarter = enti.quarter; //季度
        var quarterdata = enti.quarterIncreaseRate;
        if (!flag) {
          for (let k = 0; k < quarterdata.length; k++) {
            var indexname = quarterdata[k].indexname; //name
            lengdList.push(indexname);
          }
        }
        flag = true;
        var value1 = parseFloat(quarterdata[0].indexdata); //全市的值
        var value2 = parseFloat(quarterdata[1].indexdata); //第一值
        var value3 = parseFloat(quarterdata[2].indexdata); //第二值
        var value4 = parseFloat(quarterdata[3].indexdata); //第三值

        var valuezs1 = parseFloat(quarterdata[0].yonydata); //全市的增速
        var valuezs2 = parseFloat(quarterdata[1].yonydata); //第一值的增速
        var valuezs3 = parseFloat(quarterdata[2].yonydata); //第二值的增速
        var valuezs4 = parseFloat(quarterdata[3].yonydata); //第三值的增速

        dataListValue1.push(value1);
        dataListValue2.push(value2);
        dataListValue3.push(value3);
        dataListValue4.push(value4);

        dataListValue5.push(valuezs1);
        dataListValue6.push(valuezs2);
        dataListValue7.push(valuezs3);
        dataListValue8.push(valuezs4);
        xLabel.push(quarter);
      }
      allYear.push('');
      allYear.push('');
      allYear.push('');
      allYear.push(year);
      allYear.push('');
      allYear.push('');

    }
    var map0List = [];
    for (let i = 0; i < dataListValue1.length; i++) {
      var index = 0;
      var value1 = dataListValue1[i];
      var value2 = dataListValue2[i];
      var value3 = dataListValue3[i];
      var value4 = dataListValue4[i];
      index = value1 + value2 + value3 + value4;
      if (index > 0) {
        map0List.push(index + 100);
      } else {
        map0List.push(0);
      }
    }
    var map0 = { // For shadow
      type: 'bar',
      barWidth: 20, //柱子宽度
      itemStyle: {
        normal: {
          color:'#f1f1f1'
        }
      },
      barGap: '-80%',
      barCategoryGap: '40%',
      data: map0List,
      animation: false
    }

    var map1 = {
      name: lengdList[0],
      type: 'bar',
      barWidth: 10, //柱子宽度
      color: '#00DB7B',
      stack: xLabel[0],
      data: dataListValue1
    }
    var map2 = {
      name: lengdList[1],
      type: 'bar',
      color: '#FFBE62',
      stack: xLabel[0],
      barWidth: 10, //柱子宽度
      data: dataListValue2
    }
    var map3 = {
      name: lengdList[2],
      type: 'bar',
      color: '#5DEFF8',
      stack: xLabel[0],
      barWidth: 10, //柱子宽度
      data: dataListValue3
    }
    var map4 = {
      name: lengdList[3],
      type: 'bar',
      color: '#21C1F5',
      stack: xLabel[0],
      barWidth: 10, //柱子宽度
      data: dataListValue4
    }

    var map5 = {
      name: lengdList[0],
      type: 'line',
      //		symbol: 'circle', //折线点设置为实心点
      symbolSize: 4, //折线点的大小
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          color: '#00DB7B',
          borderColor: '#00DB7B',
          borderWidth: 1,
          lineStyle: {
            color: "#00DB7B" //折线的颜色
          },
        }
      },
      data: dataListValue5,
    }

    var map6 = {
      type: 'line',
      name: lengdList[1],
      symbol: 'circle', //折线点设置为实心点
      symbolSize: 8, //折线点的大小
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          color: '#ffffff',
          borderColor: '#FFBE62',
          borderWidth: 1,
          lineStyle: {
            color: "#FFBE62" //折线的颜色
          },
        }
      },
      data: dataListValue6,
    }

    var map7 = {
      type: 'line',
      name: lengdList[2],
      symbol: 'circle', //折线点设置为实心点
      symbolSize: 8, //折线点的大小
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          color: '#ffffff',
          borderColor: '#5DEFF8',
          borderWidth: 1,
          lineStyle: {
            color: "#5DEFF8" //折线的颜色
          },
        }
      },
      data: dataListValue7,
    }

    var map8 = {
      name: lengdList[3],
      type: 'line',
      symbol: 'circle', //折线点设置为实心点
      symbolSize: 8, //折线点的大小
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          color: '#ffffff',
          borderColor: '#21C1F5',
          borderWidth: 1,
          lineStyle: {
            color: "#21C1F5" //折线的颜色
          },
        }
      },
      data: dataListValue8,
    }
    searList.push(map0);
    searList.push(map5);
    //	searList.push(map1);
    searList.push(map2);
    searList.push(map3);
    searList.push(map4);

    searList.push(map6);
    searList.push(map7);
    searList.push(map8);
    console.log(searList);
    console.log(xLabel);
    console.log(allYear);

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
      dataZoom: [
        {
          type: 'slider',
          throttle: '50',
          minValueSpan: 4,
          start: 0,
          end: 15,
          show:true,
        }
      ],
      grid: {
        right: '2%',
        top: '10%',
        left: '2%',
        bottom: '20%',
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
        data: xLabel,
        splitArea: {
          show: false
        }
      }, {
        position: 'bottom',
        offset: 50,
        axisLine: {
          onZero: false,
          show: false
        },
        axisTick: {
          length: 0,
          inside: true,
          interval: 5,
          lineStyle: {
            color: '#000',
            fontSize: '14px'
          }
        },
        axisLabel: {
          inside: true
        },
        data: allYear,
        splitArea: {
          show: false
        }
      }],
      yAxis: [{
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
        },
        splitArea: {
          show: false
        },
        splitLine: {
          show: false
        }
      },
      {
        type: 'value',
        axisLabel: {
          formatter: '{value}%',
          show: true,
          textStyle: {
            color: '#000'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#000000',
          }
        },
        splitArea: {
          show: false
        },
        splitLine: {
          show: false
        }
      }
      ],
      series: searList
    };
    myCharts.setOption(option);
  }

}



