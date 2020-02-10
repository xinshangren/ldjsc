//获取第1个图表
export const echarsEnti = {
  createEcharsOne: function (echarts, value, dataEntity,gkdateselect) {
    const myCharts = echarts.init(value);

    var data = [];
    for (var i = 0; i < dataEntity.length; i++) {
      var datav = { dw_count: dataEntity[i].dw_count }
      data.push(datav);
    }

    var nameList = ['红星', '粉星', '黄星', '绿星', '蓝星'];
    var data1List = [];
    if (data != null) {
      data1List = [{
        value: data[0].dw_count,
        name: '红星'
      },
      {
        value: data[1].dw_count,
        name: '粉星'
      },
      {
        value: data[2].dw_count,
        name: '黄星'
      },
      {
        value: data[3].dw_count,
        name: '绿星'
      },
      {
        value: data[4].dw_count,
        name: '蓝星'
      }
      ];
    } else {
      data1List = [{
        value: 0,
        name: '红星'
      },
      {
        value: 0,
        name: '粉星'
      },
      {
        value: 0,
        name: '黄星'
      },
      {
        value: 0,
        name: '绿星'
      },
      {
        value: 0,
        name: '蓝星'
      }
      ];
    }

    var option = {
      legend: {
        show: true,
        itemHeight: 10,
        itemWidth: 15,
        orient: 'vertical',
        left: '70%',  //图例距离左的距离
        y: 'center',
        textStyle: {
          fontSize: 15,
        }
      },
      grid: {
        top: '0%',
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
      },
      series: [{
        type: 'pie',
        radius: '55%',
        center: ['30%', '50%'],
        data: data1List,
        label: {
          normal: {
            show: true,
            position: 'left', //标签的位置
            textStyle: {
              fontSize: 10, //文字的字体大小
              color: '#666666'
            },
            //					formatter: function(a) {
            //						return(a.name + ":" + a.value);
            //					}
            formatter: '{b}\n{d}%',

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
            length2: 20,
            lineStyle: {
              color: '#666666'
            }
          }
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          normal: {
            color: function (params) {
              //自定义颜色
              var colorList = ['#ff3d2e', '#ff7a96', '#ffce3a', '#3cf04d', '#33b5ff'];
              return colorList[params.dataIndex]
            }
          }
        }
      }]
    };
    myCharts.setOption(option);
    myCharts.on('click',function(params){
      // gkdateselect.style.display="none";
  });
  },
  createEcharsTwo: function (echarts, value, dataEntity) {
    const myCharts = echarts.init(value);
    
    var Line = ["红星", "粉星", "黄星", "绿星", "蓝星"];
    var allXName = ["六月", "七月", "八月", "九月", "十月"]
    var XName = []
    var listr = []
    var listp = []
    var listy = []
    var listg = []
    var listb = []
    for (var i = 0; i < dataEntity.length; i++) {
      XName.push(allXName[i]);
      listr.push(dataEntity[i].monthList[0].dw_count);
      listp.push(dataEntity[i].monthList[1].dw_count);
      listy.push(dataEntity[i].monthList[2].dw_count);
      listg.push(dataEntity[i].monthList[3].dw_count);
      listb.push(dataEntity[i].monthList[4].dw_count);
    }
    var data1 = [];
    data1.push(listr);
    data1.push(listp);
    data1.push(listy);
    data1.push(listg);
    data1.push(listb);

    var img = ['image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ4OTlDNTZGMkQzNDExRUE5QzVCRTFDRDg0OTZCQTZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ4OTlDNTcwMkQzNDExRUE5QzVCRTFDRDg0OTZCQTZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDg5OUM1NkQyRDM0MTFFQTlDNUJFMUNEODQ5NkJBNkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDg5OUM1NkUyRDM0MTFFQTlDNUJFMUNEODQ5NkJBNkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6YnZ/yAAABaklEQVR42mL8//8/A60B43N5SVLUKwPxeiDuBeKFIAGJB88IamIi0VFLgVgXiOcBMQuxmkixxAWIzZH0ddDCkglo/GIgFqKmJcFArI1FvJCalmTiEE+hliWGQOyMQ07ihYJUHilJmBWI5YBYBYg1gFgVSttB5fCBI0B8E4jvAPE1IL4PxHeByfsbzJIgIJ0PxGogl1ExD74H4tug5A6y5CyQYUTDDP8IFCdRQPyGhpZkMEHDUg+I91DZ8Beg+ATGy3b0sus6NLIpBb+AWAFowXNsSdgJiC9TaAEoRbnDLMBmyXNo0G0g0wJQ8tUEWnCAmMyYSqYlLUALHhGb423ItMSElGLFjExLzEixRI9MS3SAZRkzsZbok2mJABCrE2OJGBDL4DBkLxB7A/EUPBZpEmOJIxaxhdAgBFXB24A4F5TZgLgJi1o3YizhBOLPUHwYlLGAOAFLJn0IxPVQly9H0oNhJiM92l0AAQYA/2lPsgEebIcAAAAASUVORK5CYII=',
      'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVCQUIyRjM5MkQzNDExRUE4OTUyQ0M0MEQxRUM5Njk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVCQUIyRjNBMkQzNDExRUE4OTUyQ0M0MEQxRUM5Njk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUJBQjJGMzcyRDM0MTFFQTg5NTJDQzQwRDFFQzk2OTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUJBQjJGMzgyRDM0MTFFQTg5NTJDQzQwRDFFQzk2OTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5+mftjAAABeElEQVR42mL8//8/A60By5v0NaSoVwbi9UDcC8QLQQIiM0MIamIi0VFLgVgXiOeBHEisJlIscQFicyR9HbSwZAIavxiIhahpSTAQa2MRL6SmJZk4xFOoZYkhEDvjkJMAps48QgYwvk5bDWOzArEcEKsAsQYQq0JpO6gcPnAEiG8C8R0gvgbE94H4LjB5f4NZEgSk84FYDeQyKubB90B8G5TcQWm9GoiNaJDRBYHYDORwUJxEAfEbGpYqGUzQsNQD4j1UNvwFKD6B8bIdlrqeA7ErEN+gkgW/QFEAtOAwtiTsBMSXKbQAlKLcgRY8x5VPnkODbgOZFoCSrybQggPEZMZUMi1pAVrwiNgcb0OmJSakFCtmZFpiRoolemRaogMsy5iJtUSfTEsEgFidGEvEgFgGhyF7gdgbiKfgsUiTGEscsYgthAYhqAreBsS5QKwAxE1Y1LoRYwknEH+GYlCOdQfiBCyZ9CEQ10NdvhxJD4aZjPRodwEEGACVwEviEOtJ0QAAAABJRU5ErkJggg==',
      'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwQTM4OEZCMkQzNDExRUFBRTNFQTkyOUZBMkRGNEEwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYwQTM4OEZDMkQzNDExRUFBRTNFQTkyOUZBMkRGNEEwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjBBMzg4RjkyRDM0MTFFQUFFM0VBOTI5RkEyREY0QTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjBBMzg4RkEyRDM0MTFFQUFFM0VBOTI5RkEyREY0QTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Ex5SKAAABbklEQVR42mL8//8/A60B4//LHKSoVwbi9UDcC8QLwSI636luyQkgNgfif0DMDsR/iLGEiQQLXKAWwPR10CK4rgCxNpqYMNAn76jlk2AsFoBAITGaibUkE4d4CrUsMQRiZxxyEgxXOPNIiRNWIJYDYhUg1gBiVShtB5XDB44A8U0gvgPE14D4PhDfBcbXN5glQUA6H4jVwC6jHngPxLeBeB7IkrNAhhENM/wjUJxEAfEbGlqSwQQNSz0g3kNlw1+A41Pn+3b0zHgdGtmUgl9ArAC04Dm2JOwExJcptACUotxhFmCz5Dk06DaQaQEo+WoCLThATGZMJdOSFqAFj4jN8TZkWmJCSrFiRqYlZqRYokemJTrAsoyZWEv0ybREAIjVibFEDIhlcBiyF4i9gXgKHos0ibHEEYvYQmgQgqrgbUCcC85sDAxNWNS6EWMJJxB/huLD4IzFwJCAJZM+BOJ6qMuXI+lhwqxP6NDuAggwABznViEC8sb8AAAAAElFTkSuQmCC',
      'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY1QzY5Q0RDMkQzNDExRUE4M0MzQ0U2QThEQTdCRjgyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY1QzY5Q0REMkQzNDExRUE4M0MzQ0U2QThEQTdCRjgyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjVDNjlDREEyRDM0MTFFQTgzQzNDRTZBOERBN0JGODIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjVDNjlDREIyRDM0MTFFQTgzQzNDRTZBOERBN0JGODIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6abeiUAAABbklEQVR42mL8//8/A60BI899JlLUKwPxeiDuBeKFIIHPCn+pbskJIDYH4n9AzA7Ef4ixhBQbXKAWwPR10CK4rgCxNpqYMNAn76jlk2AsFoBAITGaibUkE4d4CrUsMQRiZxxyErwPmPNIiRNWIJYDYhUg1gBiVShtB5XDB44A8U0gvgPE14D4PhDfBcbXN5glQUA6H4jVQC6jYh58D8S3gXgeyJKzQIYRDTP8I1BYRQHxGxpaksEEDUs9IN5DZcNfgOITGC/b0TPjdWhkUwp+AbEC0ILn2JKwExBfptACUIpyh1mAzZLn0KDbQKYFoOSrCbTgADGZMZVMS1qAFjwiNsfbkGmJCSnFihmZlpiRYokemZboAMsyZmIt0SfTEgEgVifGEjEglsFhyF4g9gbiKXgs0iTGEkcsYguhQQiqgrcBcS4oswFxExa1bsRYwglqhEDxYVDGAuIELJn0IRDXQ12+HEkPhpmM9Gh3AQQYAIgFWCGs/O2LAAAAAElFTkSuQmCC',
      'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZBREU4RDA0MkQzNDExRUFCMTU1OUFFMDgzNjMyQjFGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZBREU4RDA1MkQzNDExRUFCMTU1OUFFMDgzNjMyQjFGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkFERThEMDIyRDM0MTFFQUIxNTU5QUUwODM2MzJCMUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkFERThEMDMyRDM0MTFFQUIxNTU5QUUwODM2MzJCMUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4N69wUAAABcElEQVR42mL8//8/A60BI0MaSZYoA/F6IO4F4oUggf8zqW/JCSA2B+J/QMwOxH+IsYSJBAtcoBbA9HXQIriuALE2mpgw0CfvqOWTYCwWgEAhMZqJtSQTh3gKtSwxBGJnHHISjOkMeaTECSsQywGxChBrALEqlLaDyuEDR4D4JhDfAeJrQHwfiO8C4+sbzJIgIJ0PxGogl1ExD74H4ttAPA9kyVkgw4iGGf4RyBJ1qHdFaGSJFxM0LPWAeA+VDX8Bik9gvGxHz4zXoZFNKfgFxApAC55jS8JOQHyZQgtAKcodZgE2S55Dg24DmRaAkq8m0IIDxJRdoETwmgxLooAWLCc2x9uQ6RMTUooVMzItMSPFEj0yLdEBlmXMxFqiT6YlAkCsTowlYkAsg8OQvUDsDcRT8FikSYwljljEFkKDEFQFbwPiXFBmA+ImLGrdiLGEE4g/Q/FhUMYC4gQsmfQhENdDXb4cSQ+GmYz0aHcBBBgALsBYuXZ56SYAAAAASUVORK5CYII=',
    ];
    var color = ['#E71F19', '#EB66AB', '#FFD308', '#0CDF02', '#0066FF'];

    //数据处理
    var datas = [];
    Line.map((item, index) => {
      datas.push(
        {
          symbolSize: 13,
          symbol: img[index],
          name: item,
          type: "line",
          yAxisIndex: 0,
          data: data1[index],
          itemStyle: {
            normal: {
              borderWidth: 5,
              color: color[index],
            }
          }
        }
      )
    })

    var option = {
      backgroundColor: '#ffffff',
      grid: {
        left: '10%',
        top: '5%',
        bottom: '20%',
        right: '5%',
      },
      legend: {
        type: "scroll",
        data: Line,
        itemWidth: 18,
        itemHeight: 12,
        textStyle: {
          color: "#333333",
          fontSize: 14
        },
      },
      yAxis: [
        {
          type: 'value',
          position: 'left',
          splitLine: {
            show: false
          },
          nameTextStyle: {
            color: '#333333'
          },
          axisLabel: {
            formatter: '{value}',
            color: '#000000',
            fontSize: 14,
            show: true
          }
        },
      ],
      xAxis: [
        {
          type: 'category',
          axisTick: {
            show: true
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#000000',
            }
          },
          axisLabel: {
            inside: false,
            textStyle: {
              color: '#000000',// x轴颜色
              fontWeight: 'normal',
              fontSize: '14',
              lineHeight: 22
            }

          },
          data: XName,
        },
      ],
      series: datas,
    };

    myCharts.setOption(option);
  },

}



