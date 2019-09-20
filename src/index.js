// 文件引用 requier 按照文件引用的顺序打包  文件依赖
require('./styles/base.css')
require('./styles/normalize.css')
require('./style.less')

// todo echats 最后使用定制版的
// 搜索部分
$('body')
  .on('click', '.kwbtn[data-name]', function () {
    var $this = $(this),
      data = $this.data();
    // 选中的id
    data.hit = $this.find('input').val().split(',');
    Cock[$this.data('name').split('-')[0]](data, function (list) {
      // 对选中数据做处理并插入到dom中
      var value = list.v.join(','),
        text = list.t.join('+');
      $this.find('input').val(value ? value : '');
      $this.attr('title', text ? text : $this.data('title'));
      $this.find('span').html(text ? Cock.helper.substring(text, 24) : $this.data('placeholder'));

    });
  })
  .find('.kwbtn').each(function () { // 初始化赋值，搜索功能可无视此处
    var $me = $(this),
      name = $me.data('name').split('-')[0],
      $input = $me.find('input[type=hidden],input[type=text]'),
      val = $input.val().split(','),
      i = 0, len = val.length, list = [], tmp;
    for (; i < len; i++) {
      tmp = Cock[name].data.raw[val[i]] || Cock[name].data.type[val[i]];
      tmp && list.push(tmp);
    }
    list.length && $me.find('span').html(list.join('+'));
  });


$('#search .searchBtn').click(function () {
  var $tr = $('.search-wrap table tbody').children('tr');
  var obj = {
    desired_job: $tr.eq(0).children('td').eq(0).find('.btn-select').children('span').text(),
    desired_location: $tr.eq(0).children('td').eq(1).find('.btn-select').children('span').text(),
  }
  console.log('obj', obj)
})

// echarts图部分
var echarts1Data = {
  xAxisData: ['50百分位', '75百分位', '90百分位'],
  seriesName: '平均月薪',
  seriesData: [8000, 6000, 4000]
}
var echarts2Data = {
  xAxisData: ['广州', '深圳', '上海', '北京', '上海'],
  seriesName: '平均月薪',
  seriesData: [3000, 6000, 9000, 7000, 12000]
}
var echarts3Data = {
  xAxisData: ['1年', '2年', '3-5年', '5-8年', '8-10年', '10年以上'],
  seriesName: '平均月薪',
  seriesData: [8000, 6000, 4000, 8000, 9000, 13000]
}
initEchart('echart1', echarts1Data)
initEchart('echart2', echarts2Data)
initEchart('echart3', echarts3Data)


function initEchart(id, data) {
  var myChart = echarts.init(document.getElementById(id))

  // 指定图表的配置项和数据
//   var option = {

//     tooltip : {
//         trigger: 'axis',
//         formatter: function (params) {
//           var result = ''
//           var dotHtml = '<span class="dot"></span>'
//           params.forEach(function (item) {
//             // console.log(item)
//             result += item[1] + "</br>" + dotHtml + item[0] + ': ' + item[2]
//           })
//           return result
//         }
//     },
//     grid: {
//       show:'true',
//       borderWidth:'0',
//       x: 45,
//       x2: 30,

//     },

//     xAxis : [
//         {
//             type : 'category',
//             data : data.xAxisData,
//             axisTick: {
//               show: false
//             },
//             axisLine: {
//               show: false
//             },
//             axisLabel: {
//               color: '#8C8C8C',
//               interval: 0
//             },
//             splitLine: {
//               show: false
//             },
            
//         }
//     ],
//     yAxis : [
//         {
//             // type : 'value',
//             axisTick: {
//               show: false
//             },
//             axisLine: {
//               show: false
//             },
//             axisLabel: {
//               color: '#8C8C8C'
//             },
//             splitLine: {
              
//               lineStyle: {
//                 color: ['#DDDDDD'],
//                 width: 1,
//                 type: 'dotted'
//               }
//             }
//             // boundaryGap: false
//             // splitLine: {
//             //   lineStyle: {
//             //     type: 'dotted'
//             //   }
//             // }
//         }
//     ],
//     series : [
  
//         {
//             name:data.seriesName,
//             type:'bar',
//             barWidth: 30,
//             itemStyle: {
//               // color: '#1E89E7',
//               normal: {
//                 color: '#1E89E7',
//               },
//               emphasis: {
//                 color: '#5CD19B'
//               },
//             },
//             data:data.seriesData,
//         }
//     ]
// };

  var option = {
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        var result = ''
        var dotHtml = '<span class="dot"></span>'
        params.forEach(function (item) {
          result += item.axisValue + "</br>" + dotHtml + item.seriesName + ': ' + item.data
        })
        return result
      }
    },
    grid: {
      left: 50
    },
    xAxis: {
      data: data.xAxisData,
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#8C8C8C',
        interval: 0
      },
    },
    yAxis: {
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        color: '#8C8C8C'
      },
      splitLine: {
        lineStyle: {
          type: 'dotted'
        }
      }
    },
    series: [
      {
        name: data.seriesName,
        type: 'bar',
        barWidth: 30,
        itemStyle: {
          color: '#1E89E7',
          emphasis: {
            color: '#5CD19B'
          },
        },
        data: data.seriesData
      }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
}

// 列表部分
var listData = [
  {
    companyName: '1国际高端解答快递费就国际高端解答快递费就卡了的卡了的',
    companyNameEn: 'dfdafdafdadfafadfadfada',
    difference: '1.23'
  },
  {
    companyName: '2国际高端解答快递费就国际高端解答快递费就卡了的卡了的',
    companyNameEn: 'dfdafdafdadfafadfadfada',
    difference: '1.23'
  },
  {
    companyName: '3国际高端解答快递费就国际高端解答快递费就卡了的卡了的',
    companyNameEn: 'dfdafdafdadfafadfadfada',
    difference: '1.23'
  },
  {
    companyName: '4国际高端解答快递费就国际高端解答快递费就卡了的卡了的',
    companyNameEn: 'dfdafdafdadfafadfadfada',
    difference: '1.23'
  },
  {
    companyName: '5国际高端解答快递费就国际高端解答快递费就卡了的卡了的',
    companyNameEn: 'dfdafdafdadfafadfadfada',
    difference: '1.23'
  },
  {
    companyName: '6国际高端解答快递费就国际高端解答快递费就卡了的卡了的',
    companyNameEn: 'dfdafdafdadfafadfadfada',
    difference: '1.23'
  },
]

var lis = ''
listData.map(function (item, index) {
  var leftIndex = index + 1
  var imageIndex = 4
  if (leftIndex < 4) {
    imageIndex = leftIndex
  }
  lis = lis + '<li class="list-item clearfix"><div class="list-item-left list-item-image' + imageIndex + '">' + leftIndex + '</div><div class="list-item-center"><p class="ellipsis list-item-center-title1">' + item.companyName + '</p><p class="ellipsis list-item-center-title2">' + item.companyNameEn + '</p></div><div class="list-item-right">' + item.difference + '</div></li>'
})
var $ul = $('.list')
$ul.append(lis)

// table
var tableData = [
  {
    cityName: '广州',
    cityNameEn: 'gaugnzhou',
    wage: [
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
    ]
  },
  {
    cityName: '杭州',
    cityNameEn: 'Hangzhou',
    wage: [
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
    ]
  },
  {
    cityName: '杭州',
    cityNameEn: 'Hangzhou',
    wage: [
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
    ]
  },
  {
    cityName: '杭州',
    cityNameEn: 'Hangzhou',
    wage: [
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
    ]
  },
  {
    cityName: '北京',
    cityNameEn: 'Hangzhou',
    wage: [
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
      ['￥5,201', '￥5,202', '￥5,203', '￥5,204', '￥5,205', '￥5,206'],
    ]
  },
]

var trs = ''
tableData.map(function (item, index) {
  item.wage.map(function (item2, index2) {
    var td = '<td class="table-btgn2">' + item2[0] + '</td><td class="table-btgn2">' + item2[1] + '</td><td class="table-btgn2">' + item2[2] + '</td><td class="table-btgn2">' + item2[3] + '</td><td class="table-btgn2">' + item2[4] + '</td><td class="table-btgn2">' + item2[5] + '</td>'

    if (index2 === 0) {
      trs = trs + '<tr><td rowspan="4" class="table-city"><p>' + item.cityName + '</p><p>' + item.cityNameEn + '</p></td><td class="table-title"><p>平均月薪</p><p>Average</p></td>' + td + '</tr>'
    } else if (index2 === 1) {
      trs = trs + '<tr><td class="table-title"><p>50百分位</p><p>Median</p></td>' + td + '</tr>'
    } else if (index2 === 2) {
      trs = trs + '<tr><td class="table-title"><p>75百分位</p><p>75th %ile</p></td>' + td + '</tr>'
    } else if (index2 === 3) {
      if (index === 4) {
        trs = trs + '<tr><td class="table-title"><p>90百分位</p><p>90th %ile</p></td>' + td + '</tr>'
      } else {
        trs = trs + '<tr class="table-border"><td class="table-title"><p>90百分位</p><p>90th %ile</p></td>' + td + '</tr>'
      }

    }
  })

})
// console.log(trs);
var $table1 = $('.table')
$table1.append(trs)
setTimeout(function () {
  var $rowSpan = $('.table-rowspan')
  $rowSpan.attr("rowspan", "2")
})

// 已查询弹框内容点击
var $mask = $('.mask')
var $modal = $('.modal')

// 所有弹框关闭操作
$('body').on('click','.modal-header-close',function(){
  $mask.addClass("none")
  $modal.addClass("none")
})
$('body').on('click','.modal-footer-cancel',function(){
  $mask.addClass("none")
  $modal.addClass("none")
})
$('body').on('click','.modal-footer-ok',function(){
  $mask.addClass("none")
  $modal.addClass("none")
})

// 选择支付方式弹框
$('body').on('click', '.selecttype-select-checkbox', function() {
  var $checkbox = $('.selecttype-select-checkbox')
  var $hasCheckboxS = $(this).hasClass("checkboxS")

  if(!$hasCheckboxS) {
    $checkbox.removeClass("checkboxS")
    $checkbox.removeClass("checkboxUs")
    $checkbox.addClass("checkboxUs")
    $(this).removeClass("checkboxUs")
    $(this).addClass("checkboxS")
  }
})

// 选择付款方式弹框
// todo 应该是二选一的
$('body').on('click', '.payment-content-type-checkbox', function() {
  var $checkbox = $('.payment-content-type-checkbox')
  var $hasCheckboxS = $(this).hasClass("checkboxS")
  if(!$hasCheckboxS) {
    $checkbox.removeClass("checkboxS")
    $checkbox.removeClass("checkboxUs")
    $checkbox.addClass("checkboxUs")
    $(this).removeClass("checkboxUs")
    $(this).addClass("checkboxS")
  }
})



function setMaskHeight() {
  var $mask = $('.mask')
  var $bodyHeight = document.body.scrollHeight + 'px'
  $mask.css({ height: $bodyHeight })
}
function setContent2MaskHeight() {
  var $height = $('.content2').height() + 70
  var $mask = $('.content2-mask')
  $mask.css({ height: $height + 'px' })
}

setTimeout(function(){
  setMaskHeight()
  setContent2MaskHeight()
}, 200)
