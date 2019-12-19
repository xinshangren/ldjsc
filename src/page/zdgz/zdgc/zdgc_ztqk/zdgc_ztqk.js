//获取第1个图表
export const echarsEnti = {
    createEcharsOne: function (echarts, value) {
      const myCharts = echarts.init(value);
      let option = {
        backgroundColor:'#ffffff',
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color:['#8fc31f','#f35833','#00ccff','#ffcc00'],
           legend: {
               orient: 'vertical',
               x: 'right',
               data: ['准时','迟到','请假','未到'],
               formatter:function(name){
              	var oa = option.series[0].data;
              	var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
              	for(var i = 0; i < option.series[0].data.length; i++){
                        if(name==oa[i].name){
                        	return name + '     ' + oa[i].value + '     ' + (oa[i].value/num * 100).toFixed(2) + '%';
                        }
              	}
               }
           },
            series : [
                {
                    name: '签到比例分析',
                    type: 'pie',
                    radius : '55%',
                   // center: ['40%', '50%'],
                   center: ["35%", "50%"],
                   radius: ["30%", "58%"],
                   
                    data:[
                        {value:335, name:'准时'},
                        {value:310, name:'迟到'},
                        {value:234, name:'请假'},
                        {value:135, name:'未到'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    itemStyle: {
                        normal: {
                            label:{ 
                                show: true, 
    //	                            position:'inside',
                                formatter: '{b} : {c} ({d}%)' 
                            },
                             borderColor: '#ffffff',
                    borderWidth: 10,
                        },
                        labelLine :{show:true}
                    }
                }
            ]
        };
      myCharts.setOption(option);
    },
    createEcharsTwo: function (echarts, value) {
      const myCharts = echarts.init(value);
      var yData = ['2015', '2016', '2017', '2018', '2019']
      var data = [21, 26, 31, 34, 20]
      var color = ['#6f95f7', '#6f95f7', '#f79a6e']
      var seriesData = []
      data.map((item, index) => {
        seriesData.push({
          name: '',
          value: item,
          itemStyle: {
            normal: {
              color: color[index],
              barBorderRadius: 12
            }
          }
        })
      })
      let option = {
        backgroundColor: '#ffffff',
        legend: {
          show: false
        },
        grid: {
          left: '10%',
          right: '2%',
          bottom: '2%',
          top: '6%',
          containLabel: true
        },
        tooltip: {
          trigger: "item",
          formatter: function (parms) {
            // console.log(parms);
            var str =
              parms.name +
              "</br>发电量：" +
              parms.value +
              "万千瓦时";
            return str;
          }
        },
        xAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        yAxis: [
          {
            type: 'category',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              inside: false,
              textStyle: {
                color: '#000000',
                fontWeight: 'normal',
                fontSize: 16
              }
            },
            data: yData
          }],
        series: [
          {
            name: '',
            type: 'bar',
            stack: '1',
            yAxisIndex: 0,
            data: seriesData,
            color: ['#6BF1BF', '#C7F895', '#E6D349', '#F8A065', '#FF6B5F'],
            barWidth: 15,
            label: {
              normal: {
                show: true,
                position: 'insideRight',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 10,
                }
              },
            }
          }
        ]
      }
      myCharts.setOption(option);
    },
    createEcharsThree: function (echarts, value) {
      const myCharts = echarts.init(value);
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
        legend: {
          data: ['第一季度', '第二季度', '第三季度', "第四季度"],
          right: 10,
          top: 12,
          textStyle: {
            color: "#fff"
          },
          itemWidth: 12,
          itemHeight: 10,
          // itemGap: 35
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
          max: '1200',
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
          barWidth: '20px',
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
          data: [400, 600, 700, 700, 1000, 400, 400, 600, 700, 600, 700]
        }]
      };
  
      myCharts.setOption(option);
    }
  
  }
  
  
  
  