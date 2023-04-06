window.addEventListener('DOMContentLoaded', function () {
    (function () {
        //content切换功能
        $('.monitor .tabs').on('click', 'a', function () {
            $(this).addClass('active').siblings().removeClass('active');
            $('.monitor .content').eq($(this).index()).show().siblings('.content').hide();
        })

        //content滚动功能
        $('.marquee-view .marquee').each(function () {
            var rows = $(this).children().clone();
            $(this).append(rows);
        })


    })();

    //饼图功能
    (function () {
        var myChart = echarts.init(document.querySelector('.pie'));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            color: [
                "#006cff",
                "#60cda0",
                "#ed8884",
                "#ff9f7f",
                "#0096ff",
                "#9fe6b8",
                "#32c5e9",
                "#1d9dff"
            ],
            series: [
                {
                    name: '点位统计',
                    type: 'pie',
                    radius: ['20%', '80%'],
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    itemStyle: {
                        borderRadius: 5
                    },
                    data: [
                        {value: 20, name: "云南"},
                        {value: 26, name: "北京"},
                        {value: 24, name: "山东"},
                        {value: 25, name: "河北"},
                        {value: 20, name: "江苏"},
                        {value: 25, name: "浙江"},
                        {value: 30, name: "四川"},
                        {value: 42, name: "湖北"}
                    ],
                    label: {
                        fontSize: 10
                    },
                    // 修饰引导线样式
                    labelLine: {
                        // 连接到图形的线长度
                        length: 6,
                        // 连接到文字的线长度
                        length2: 8
                    }
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener('resize', function () {
            myChart.resize();
        })
    })();

    //柱状图功能
    (function () {
        var item = {
            value: 1200,
            itemStyle: {
                color: '#254065'
            },
            tooltip: {
                extraCssText: 'opacity: 0'
            }
        }
        var myChart = echarts.init(document.querySelector('.bar'));
        var option = {
            tooltip: {
                trigger: 'item'
            },
            grid: {
                left: '0%',
                right: '1%',
                bottom: '3%',
                top: '3%',
                containLabel: true,
                show: true,
                borderColor: 'rgba(0, 240, 255, .3)'
            },
            xAxis: [
                {
                    type: 'category',
                    data: [
                        "上海",
                        "广州",
                        "北京",
                        "深圳",
                        "合肥",
                        "",
                        "......",
                        "",
                        "杭州",
                        "厦门",
                        "济南",
                        "成都",
                        "重庆"
                    ],
                    axisTick: {
                        alignWithLabel: false,
                        show: false
                    },
                    axisLabel: {
                        interval: 0,
                        color: '#4c9bfd'
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, .3)'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisTick: {
                        alignWithLabel: false,
                        show: false
                    },
                    axisLabel: {
                        color: '#4c9bfd'
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, .3)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, .3)'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ])
                    },
                    data: [
                        2100,
                        1900,
                        1700,
                        1560,
                        1400,
                        item,
                        item,
                        item,
                        900,
                        750,
                        600,
                        480,
                        240
                    ]
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener('resize', function () {
            myChart.resize();
        })
    })();

    //销售数据统计折线图功能
    (function () {
        var data = {
            year: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            quarter: [
                [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
                [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
            ],
            month: [
                [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
                [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            week: [
                [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
        };
        var myChart = echarts.init(document.querySelector('.line'));
        var option = {
            color: ['#00f2f1', '#ed3f35'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                right: '5%',
                textStyle: {
                    color: '#4c9bfd',
                }
            },
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                show: true,
                borderColor: '#012f4a',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    color: '#4c9bfd'
                },
                axisLine: {
                    show: false
                },
                boundaryGap: false,
                data: [
                    "1月",
                    "2月",
                    "3月",
                    "4月",
                    "5月",
                    "6月",
                    "7月",
                    "8月",
                    "9月",
                    "10月",
                    "11月",
                    "12月"
                ]
            },
            yAxis: {
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
                axisLine: {
                    show: false
                },
                type: 'value'
            },
            series: [
                {
                    name: '预期销售额',
                    type: 'line',
                    smooth: true,
                    stack: 'Total',
                    data: data.year[0]
                },
                {
                    name: '实际销售额',
                    type: 'line',
                    smooth: true,
                    stack: 'Total',
                    data: data.year[1]
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener('resize', function () {
            myChart.resize();
        })

        $('.sales .caption').on('click', 'a', function () {
            index = $(this).index() - 1;
            $(this).addClass('active').siblings('a').removeClass('active');
            var arr = data[this.dataset.type];
            option.series[0].data = arr[0];
            option.series[1].data = arr[1];
            myChart.setOption(option);
        })

        var as = $('.sales .caption a');
        var index = 0;
        var timer = setInterval(function () {
            index++;
            if (index >= 4) index = 0;
            as.eq(index).click();
        }, 1000);
        $('.sales').hover(function () {
            clearInterval(timer);
        }, function () {
            clearInterval(timer);
            timer = setInterval(function () {
                index++;
                if (index >= 4) index = 0;
                as.eq(index).click();
            }, 1000);
        });
    })();

    (function () {
        var myChart = echarts.init(document.querySelector('.radar'));
        var option = {
            color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
            tooltip: {
                show: true,
                position: function (p) { //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1]];
                },
                extraCssText: 'width:160px;height:100px;'
            },
            radar: [
                {
                    indicator: [
                        {text: '机场'},
                        {text: '火车站'},
                        {text: '商场'},
                        {text: '汽车站'},
                        {text: '地铁'}
                    ],
                    center: ['52%', '50%'],
                    radius: 40,
                    startAngle: 45,
                    splitNumber: 4,
                    shape: 'circle',
                    axisName: {
                        formatter: '{value}',
                        color: '#428BD4',
                    },
                    splitArea: {
                        areaStyle: {
                            shadowColor: 'rgba(0, 0, 0, 0.2)',
                            shadowBlur: 10
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(211, 253, 250, 0.8)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(211, 253, 250, 0.8)'
                        }
                    }
                }
            ],
            series: [
                {
                    type: 'radar',
                    emphasis: {
                        lineStyle: {
                            width: 4
                        }
                    },
                    symbol: 'circle',
                    symbolSize: 5,
                    label: {
                        show: true,
                        color: 'rgba(211, 253, 250, 0.8)',
                        fontSize: 10
                    },
                    data: [
                        {
                            value: [6000, 52, 7, 100, 1500],
                            name: '渠道分布',
                            areaStyle: {
                                color: 'rgba(255, 228, 52, 0.6)'
                            }
                        }
                    ]
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener('resize', function () {
            myChart.resize();
        })
    })();

    (function () {
        var myChart = echarts.init(document.querySelector('.gauge'));
        var option = {
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['130%', '150%'],
                    center: ['48%', '80%'],
                    hoverOffset: 0,
                    // adjust the start angle
                    startAngle: 180,
                    label: {
                        show: false,
                        formatter(param) {
                            // correct the percentage
                            return param.name + ' (' + param.percent * 2 + '%)';
                        }
                    },
                    data: [
                        {
                            value: 100,
                            itemStyle: {
                                // 颜色渐变#00c9e0->#005fc1
                                color: new echarts.graphic.LinearGradient(
                                    // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {offset: 0, color: "#00c9e0"}, // 0 起始颜色
                                        {offset: 1, color: "#005fc1"} // 1 结束颜色
                                    ]
                                )
                            }
                        },
                        {
                            value: 100,
                            itemStyle: {
                                color: "#12274d"
                            }
                        },
                        {
                            // make an record to fill the bottom 50%
                            value: 200,
                            itemStyle: {
                                // stop the chart from rendering this piece
                                color: 'none',
                                decal: {
                                    symbol: 'none'
                                }
                            },
                            label: {
                                show: false
                            }
                        }
                    ]
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener('resize', function () {
            myChart.resize();
        })
    })();

    (function () {
        var hotData = [
            {
                city: "北京", // 城市
                sales: "25, 179", // 销售额
                flag: true, //  上升还是下降
                brands: [
                    //  品牌种类数据
                    {name: "可爱多", num: "9,086", flag: true},
                    {name: "娃哈哈", num: "8,341", flag: true},
                    {name: "喜之郎", num: "7,407", flag: false},
                    {name: "八喜", num: "6,080", flag: false},
                    {name: "小洋人", num: "6,724", flag: false},
                    {name: "好多鱼", num: "2,170", flag: true}
                ]
            },
            {
                city: "河北",
                sales: "23,252",
                flag: false,
                brands: [
                    {name: "可爱多", num: "3,457", flag: false},
                    {name: "娃哈哈", num: "2,124", flag: true},
                    {name: "喜之郎", num: "8,907", flag: false},
                    {name: "八喜", num: "6,080", flag: true},
                    {name: "小洋人", num: "1,724", flag: false},
                    {name: "好多鱼", num: "1,170", flag: false}
                ]
            },
            {
                city: "上海",
                sales: "20,760",
                flag: true,
                brands: [
                    {name: "可爱多", num: "2,345", flag: true},
                    {name: "娃哈哈", num: "7,109", flag: true},
                    {name: "喜之郎", num: "3,701", flag: false},
                    {name: "八喜", num: "6,080", flag: false},
                    {name: "小洋人", num: "2,724", flag: false},
                    {name: "好多鱼", num: "2,998", flag: true}
                ]
            },
            {
                city: "江苏",
                sales: "23,252",
                flag: false,
                brands: [
                    {name: "可爱多", num: "2,156", flag: false},
                    {name: "娃哈哈", num: "2,456", flag: true},
                    {name: "喜之郎", num: "9,737", flag: true},
                    {name: "八喜", num: "2,080", flag: true},
                    {name: "小洋人", num: "8,724", flag: true},
                    {name: "好多鱼", num: "1,770", flag: false}
                ]
            },
            {
                city: "山东",
                sales: "20,760",
                flag: true,
                brands: [
                    {name: "可爱多", num: "9,567", flag: true},
                    {name: "娃哈哈", num: "2,345", flag: false},
                    {name: "喜之郎", num: "9,037", flag: false},
                    {name: "八喜", num: "1,080", flag: true},
                    {name: "小洋人", num: "4,724", flag: false},
                    {name: "好多鱼", num: "9,999", flag: true}
                ]
            }
        ];

        var supHTML = '';
        $.each(hotData, function (index, item) {
            supHTML += `<li><span>${item.city}</span><span>${item.sales} <s class=${item.flag ? 'icon-up' : 'icon-down'}></s></span></li>`;
        })
        $('.sup').html(supHTML);

        $('.province .sup').on('mouseenter', 'li', function () {
            index = $(this).index();
            render($(this));
        })

        function render(obj) {
            obj.addClass('active').siblings().removeClass();
            var subHTML = '';
            $.each(hotData[obj.index()].brands, function (index, item) {
                subHTML += `<li><span>${item.name}</span><span>${item.num} <s class=${item.flag ? 'icon-up' : 'icon-down'}></s></span></li>`;
            })
            $('.sub').html(subHTML);
        }

        var lis = $('.province .sup li');
        lis.eq(0).mouseenter();

        var index = 0;
        var timer = setInterval(function () {
            index++;
            if (index >= 5) index = 0;
            render(lis.eq(index));
        }, 1000)

        $('.province .sup').hover(function () {
            clearInterval(timer);
        }, function () {
            clearInterval(timer);
            timer = setInterval(function () {
                index++;
                if (index >= 5) index = 0;
                render(lis.eq(index));
            }, 1000)
        })
    })();
})