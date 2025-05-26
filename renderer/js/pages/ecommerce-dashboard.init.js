/**
 * Eコマースダッシュボード初期化スクリプト
 * 売上推移チャートを初期化
 */

// 売上推移チャート
var salesChartOptions = {
    series: [
        {
            name: "売上",
            data: [1200, 1800, 1500, 2200, 1900, 2500, 2100, 2800, 2400, 3100, 2700, 3400]
        },
        {
            name: "注文数",
            data: [45, 68, 55, 82, 71, 95, 78, 105, 89, 115, 98, 125]
        }
    ],
    chart: {
        type: "area",
        height: 350,
        fontFamily: "'Noto Sans JP', sans-serif",
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
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
    colors: ["#108dff", "#287F71"],
    xaxis: {
        categories: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        labels: {
            style: {
                fontFamily: "'Noto Sans JP', sans-serif"
            }
        }
    },
    yaxis: [
        {
            title: {
                text: "売上 (万円)",
                style: {
                    fontFamily: "'Noto Sans JP', sans-serif"
                }
            },
            labels: {
                formatter: function(value) {
                    return "¥" + (value / 100).toFixed(0) + "万";
                },
                style: {
                    fontFamily: "'JetBrains Mono', monospace"
                }
            }
        },
        {
            opposite: true,
            title: {
                text: "注文数",
                style: {
                    fontFamily: "'Noto Sans JP', sans-serif"
                }
            },
            labels: {
                formatter: function(value) {
                    return value + "件";
                },
                style: {
                    fontFamily: "'JetBrains Mono', monospace"
                }
            }
        }
    ],
    grid: {
        strokeDashArray: 3,
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    legend: {
        position: "bottom",
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
                    return value + "件";
                }
            }
        ]
    }
};

// 売上推移チャートを描画
if (document.querySelector("#sales-chart")) {
    var salesChart = new ApexCharts(document.querySelector("#sales-chart"), salesChartOptions);
    salesChart.render();
}

// ページ読み込み完了時の初期化
document.addEventListener('DOMContentLoaded', function() {
    console.log('Eコマースダッシュボードが正常に初期化されました');
    
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