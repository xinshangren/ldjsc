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
      var data= {
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
        itemHeight: 9,
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
  createEcharsTwo: function (echarts, value, dataEntity) {
    const myCharts = echarts.init(value);

    // console.log(total);
    let option = {
      grid: {
        top: '10%',
        left: '5%',
        right: '5%',
        bottom: '0%',
        containLabel: true
      },
      xAxis: {
        splitLine: { show: false },//去除网格线
        type: 'category',
        boundaryGap: false,
        data: [dataEntity[0].year, dataEntity[1].year, dataEntity[2].year, dataEntity[3].year, dataEntity[4].year]
      },
      yAxis: {
        splitLine: { show: false },//去除网格线
        type: 'value'
      },
      series: [{
        data: [dataEntity[0].visitor, dataEntity[1].visitor, dataEntity[2].visitor, dataEntity[3].visitor, dataEntity[4].visitor],
        type: 'line',
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0, color: '#3ca1ec' // 0% 处的颜色
            }, {
              offset: 0.5, color: '#74BCF1' // 100% 处的颜色
            }, {
              offset: 1, color: '#ffffff' // 100% 处的颜色
            }]
            ),
          }
        },
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#3ca1ec' //改变折线颜色
            }
          }
        },
      }]
    };;
    myCharts.setOption(option);
  },
  createEcharsThree: function (echarts, value, dataentity) {
    const myCharts = echarts.init(value);
    var nameList = ['收入', '支出'];
    var xlabel = [];
    var yvalue1 = [];
    var yvalue2 = [];

    for (var i = 0; i < dataentity.length; i++) {
      var enti = dataentity[i];
      var income = (enti.income).toFixed(2); //产量
      var expenditure = (enti.expenditure).toFixed(2); //利用量
      var year = enti.year; //时间
      xlabel.push(year);
      yvalue1.push(income);
      yvalue2.push(expenditure);

    }
    var option = {

      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        orient: 'horizontal', // 'vertical'
        x: 'right', // 'center' | 'left' | {number},
        y: 'top', // 'center' | 'bottom' | {number}
        backgroundColor: '#fff',
        itemGap: 20,
        itemHeight: 5,
        itemWidth: 10,
        data: nameList
      },
      grid: {
        left: '3%',
        right: '10%',
        bottom: '7%',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: xlabel
      },
      yAxis: {
        splitLine: { show: false },//去除网格线
        type: 'value'
      },
      series: [{
        name: nameList[0],
        type: 'bar',
        barMaxWidth: 10,
        itemStyle: {
          normal: {
            color: "#3ca1ec"
          }
        },
        data: yvalue1
      },
      {
        name: nameList[1],
        type: 'bar',
        barMaxWidth: 10,
        itemStyle: {
          normal: {
            color: "#faad14"
          }
        },
        data: yvalue2
      }
      ]
    };

    myCharts.setOption(option);
  }

}



