/**
 * CRMダッシュボード初期化スクリプト
 * 売上レポート、販売レポート、統計チャートを初期化
 */

// 売上レポートチャート
var revenueOptions = {
    series: [
        {
            name: "総収入",
            data: [1000, 2100, 1800, 4540, 4540, 2300, 2300, 6860, 6860, 3500, 3500, 2100]
        },
        {
            name: "総売上",
            data: [2000, 5300, 1100, 1300, 4800, 5200, 7800, 4350, 4750, 7380, 4540, 4800]
        },
        {
            name: "純利益",
            data: [7400, 5900, 3200, 7300, 3400, 5800, 8900, 6540, 4100, 6380, 2300, 6750]
        }
    ],
    chart: {
        type: "area",
        height: 350,
        parentHeightOffset: 0,
        toolbar: {
            show: false
        },
        dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 4,
            color: "#000",
            opacity: 0.3
        },
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#108dff", "#E77636", "#db398a"],
    fill: {
        opacity: 1,
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: [
                [
                    { offset: 0, color: "#108dff", opacity: 0.3 },
                    { offset: 50, color: "#108dff", opacity: 0.2 },
                    { offset: 100, color: "#108dff", opacity: 0 }
                ],
                [
                    { offset: 0, color: "#E77636", opacity: 0.3 },
                    { offset: 50, color: "#E77636", opacity: 0.2 },
                    { offset: 100, color: "#E77636", opacity: 0 }
                ],
                [
                    { offset: 0, color: "#db398a", opacity: 0.08 },
                    { offset: 50, color: "#db398a", opacity: 0.06 },
                    { offset: 100, color: "#db398a", opacity: 0 }
                ]
            ]
        }
    },
    stroke: {
        curve: ["smooth", "smooth", "smooth"],
        width: [2, 0, 2]
    },
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
    xaxis: {
        categories: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        labels: {
            style: {
                fontFamily: "'Noto Sans JP', sans-serif"
            }
        }
    },
    yaxis: {
        min: 0,
        labels: {
            formatter: function(value) {
                return "¥" + (value / 1000).toFixed(0) + "万";
            },
            style: {
                fontFamily: "'JetBrains Mono', monospace"
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
        y: {
            formatter: function(value) {
                return "¥" + value.toLocaleString('ja-JP');
            }
        }
    }
};

// 売上レポートチャートを描画
var revenueChart = new ApexCharts(document.querySelector("#revenue-chart"), revenueOptions);
revenueChart.render();

// 販売レポートチャート（ドーナツチャート）
var salesOptions = {
    series: [65.48, 112.02, 80.48],
    labels: ["受注", "商談中", "見込み"],
    chart: {
        type: "donut",
        height: 350,
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    plotOptions: {
        pie: {
            size: 100,
            donut: {
                size: "80%",
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '16px',
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontWeight: 600,
                        color: undefined,
                        offsetY: -10,
                        formatter: function (val) {
                            return val;
                        }
                    },
                    value: {
                        show: true,
                        fontSize: '24px',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 400,
                        color: undefined,
                        offsetY: 16,
                        formatter: function (val) {
                            return val + "%";
                        }
                    },
                    total: {
                        show: true,
                        showAlways: false,
                        label: '合計',
                        fontSize: '16px',
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontWeight: 600,
                        color: '#373d3f',
                        formatter: function (w) {
                            return w.globals.seriesTotals.reduce((a, b) => {
                                return a + b;
                            }, 0).toFixed(1) + "%";
                        }
                    }
                }
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true,
        position: 'bottom',
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    stroke: {
        width: 0
    },
    colors: ["#287F71", "#522c8f", "#E77636"],
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

// 販売レポートチャートを描画
var salesChart = new ApexCharts(document.querySelector("#sales-chart"), salesOptions);
salesChart.render();

// 成長率チャート（ラジアルバー）
var growthOptions = {
    chart: {
        height: 390,
        type: "radialBar",
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: "16px",
                    color: undefined,
                    offsetY: 25,
                    fontFamily: "'Noto Sans JP', sans-serif"
                },
                value: {
                    offsetY: -15,
                    fontSize: "28px",
                    color: "#343a40",
                    fontFamily: "'JetBrains Mono', monospace",
                    formatter: function(value) {
                        return value + "%";
                    }
                }
            }
        }
    },
    fill: {
        gradient: {
            enabled: true,
            shade: "dark",
            shadeIntensity: 0.2,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        }
    },
    stroke: {
        dashArray: 7
    },
    colors: ["#E77636"],
    series: [87],
    labels: ["成長率"]
};

// 成長率チャートを描画（もしDOM要素が存在する場合）
if (document.querySelector("#growth-chart")) {
    var growthChart = new ApexCharts(document.querySelector("#growth-chart"), growthOptions);
    growthChart.render();
}

// 取引統計チャート（レーダーチャート）
var dealsOptions = {
    series: [
        {
            name: "ホットリード",
            data: [80, 50, 30, 40, 100, 20]
        },
        {
            name: "通常リード",
            data: [20, 100, 35, 78, 60, 30]
        },
        {
            name: "コールドリード",
            data: [20, 30, 40, 80, 20, 80]
        },
        {
            name: "適格リード",
            data: [44, 76, 78, 13, 43, 10]
        }
    ],
    chart: {
        type: "radar",
        height: 323,
        parentHeightOffset: 0,
        toolbar: {
            show: false
        },
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    stroke: {
        width: 1
    },
    fill: {
        opacity: 0.1
    },
    markers: {
        size: 3,
        hover: {
            size: 4
        }
    },
    tooltip: {
        style: {
            fontFamily: "'Noto Sans JP', sans-serif"
        },
        y: {
            formatter: function(value) {
                return value + "件";
            }
        }
    },
    legend: {
        show: true,
        fontFamily: "'Noto Sans JP', sans-serif",
        markers: {
            width: 6,
            height: 6,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: undefined,
            radius: 5,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
        }
    },
    xaxis: {
        categories: ["2019年", "2020年", "2021年", "2022年", "2023年", "2024年"],
        axisBorder: {
            show: false
        },
        labels: {
            show: true,
            style: {
                colors: ["#001b2f", "#001b2f", "#001b2f", "#001b2f", "#001b2f", "#001b2f"],
                fontSize: "13px",
                fontFamily: "'Noto Sans JP', sans-serif"
            }
        }
    },
    yaxis: {
        stepSize: 20,
        labels: {
            style: {
                fontFamily: "'JetBrains Mono', monospace"
            }
        }
    },
    colors: ["#108dff", "#963b68", "#E77636", "#27ebb0"],
    dataLabels: {
        enabled: false,
        background: {
            enabled: true
        }
    }
};

// 取引統計チャートを描画（もしDOM要素が存在する場合）
if (document.querySelector("#deals-statistics")) {
    var dealsChart = new ApexCharts(document.querySelector("#deals-statistics"), dealsOptions);
    dealsChart.render();
}

// ページ読み込み完了時の初期化
document.addEventListener('DOMContentLoaded', function() {
    console.log('CRMダッシュボードが正常に初期化されました');
    
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