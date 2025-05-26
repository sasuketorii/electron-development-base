/**
 * アナリティクスダッシュボード初期化スクリプト
 * ウェブサイトトラフィック、コンバージョン率、セッション時間、アクティブユーザー、月次パフォーマンスチャートを初期化
 */

// ウェブサイトトラフィックチャート
var websiteTrafficOptions = {
    series: [
        {
            name: "訪問者数",
            data: [31, 40, 28, 51, 42, 109, 100]
        }
    ],
    chart: {
        type: "area",
        height: 60,
        sparkline: {
            enabled: true
        },
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    stroke: {
        curve: "smooth",
        width: 2
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100]
        }
    },
    colors: ["#c26316"],
    tooltip: {
        style: {
            fontFamily: "'Noto Sans JP', sans-serif"
        },
        y: {
            formatter: function(value) {
                return value.toLocaleString('ja-JP') + "人";
            }
        }
    }
};

// ウェブサイトトラフィックチャートを描画
if (document.querySelector("#website-traffic")) {
    var websiteTrafficChart = new ApexCharts(document.querySelector("#website-traffic"), websiteTrafficOptions);
    websiteTrafficChart.render();
}

// コンバージョン率チャート
var conversionOptions = {
    series: [
        {
            name: "コンバージョン率",
            data: [15, 18, 12, 20, 16, 25, 22]
        }
    ],
    chart: {
        type: "area",
        height: 60,
        sparkline: {
            enabled: true
        },
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    stroke: {
        curve: "smooth",
        width: 2
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100]
        }
    },
    colors: ["#E7366B"],
    tooltip: {
        style: {
            fontFamily: "'Noto Sans JP', sans-serif"
        },
        y: {
            formatter: function(value) {
                return value + "%";
            }
        }
    }
};

// コンバージョン率チャートを描画
if (document.querySelector("#conversion-visitors")) {
    var conversionChart = new ApexCharts(document.querySelector("#conversion-visitors"), conversionOptions);
    conversionChart.render();
}

// セッション時間チャート
var sessionDurationOptions = {
    series: [
        {
            name: "セッション時間",
            data: [85, 92, 78, 96, 88, 105, 90]
        }
    ],
    chart: {
        type: "area",
        height: 60,
        sparkline: {
            enabled: true
        },
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    stroke: {
        curve: "smooth",
        width: 2
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100]
        }
    },
    colors: ["#287F71"],
    tooltip: {
        style: {
            fontFamily: "'Noto Sans JP', sans-serif"
        },
        y: {
            formatter: function(value) {
                return value + "秒";
            }
        }
    }
};

// セッション時間チャートを描画
if (document.querySelector("#session-duration")) {
    var sessionDurationChart = new ApexCharts(document.querySelector("#session-duration"), sessionDurationOptions);
    sessionDurationChart.render();
}

// アクティブユーザーチャート
var activeUsersOptions = {
    series: [
        {
            name: "アクティブユーザー",
            data: [2800, 2950, 2700, 3100, 2986, 3200, 3050]
        }
    ],
    chart: {
        type: "area",
        height: 60,
        sparkline: {
            enabled: true
        },
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    stroke: {
        curve: "smooth",
        width: 2
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100]
        }
    },
    colors: ["#108dff"],
    tooltip: {
        style: {
            fontFamily: "'Noto Sans JP', sans-serif"
        },
        y: {
            formatter: function(value) {
                return value.toLocaleString('ja-JP') + "人";
            }
        }
    }
};

// アクティブユーザーチャートを描画
if (document.querySelector("#active-users")) {
    var activeUsersChart = new ApexCharts(document.querySelector("#active-users"), activeUsersOptions);
    activeUsersChart.render();
}

// 月次パフォーマンスチャート
var monthlyPerformanceOptions = {
    series: [
        {
            name: "収益",
            type: "column",
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        },
        {
            name: "利益",
            type: "line",
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }
    ],
    chart: {
        height: 350,
        type: "line",
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    stroke: {
        width: [0, 4]
    },
    title: {
        text: "月次パフォーマンス分析",
        style: {
            fontFamily: "'Noto Sans JP', sans-serif"
        }
    },
    dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
        style: {
            fontFamily: "'JetBrains Mono', monospace"
        }
    },
    labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    xaxis: {
        type: "category",
        labels: {
            style: {
                fontFamily: "'Noto Sans JP', sans-serif"
            }
        }
    },
    yaxis: [
        {
            title: {
                text: "収益 (万円)",
                style: {
                    fontFamily: "'Noto Sans JP', sans-serif"
                }
            },
            labels: {
                formatter: function(value) {
                    return "¥" + (value / 10).toFixed(0) + "万";
                },
                style: {
                    fontFamily: "'JetBrains Mono', monospace"
                }
            }
        },
        {
            opposite: true,
            title: {
                text: "利益率 (%)",
                style: {
                    fontFamily: "'Noto Sans JP', sans-serif"
                }
            },
            labels: {
                formatter: function(value) {
                    return value + "%";
                },
                style: {
                    fontFamily: "'JetBrains Mono', monospace"
                }
            }
        }
    ],
    colors: ["#287F71", "#108dff"],
    legend: {
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    tooltip: {
        style: {
            fontFamily: "'Noto Sans JP', sans-serif"
        },
        y: [
            {
                formatter: function(value) {
                    return "¥" + value.toLocaleString('ja-JP') + "万";
                }
            },
            {
                formatter: function(value) {
                    return value + "%";
                }
            }
        ]
    }
};

// 月次パフォーマンスチャートを描画
if (document.querySelector("#monthly-performance")) {
    var monthlyPerformanceChart = new ApexCharts(document.querySelector("#monthly-performance"), monthlyPerformanceOptions);
    monthlyPerformanceChart.render();
}

// ページ読み込み完了時の初期化
document.addEventListener('DOMContentLoaded', function() {
    console.log('アナリティクスダッシュボードが正常に初期化されました');
    
    // カウンターアニメーション
    if (typeof jQuery !== 'undefined' && jQuery.fn.counterUp) {
        $('.number').counterUp({
            delay: 10,
            time: 1000
        });
    }
    
    // フェザーアイコンの初期化
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});