var trigoStrength = 3
var iteration = 11

var optionsCircle = {
  series: [0],
  colors: ["#421309"],
  chart: {
  height: 450,
  type: 'radialBar',
  offsetY: -10
},
plotOptions: {
  radialBar: {
    startAngle: -135,
    endAngle: -40,
    hollow: {
      margin: 0,
      size: "70%",
    },
    track: {
      background: '#1b213b',
      startAngle: -135,
      endAngle: -40,
      dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        blur: 4,
        opacity: 0.15
      }
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 0,
      blur: 4,
      opacity: 0.15
    },
    dataLabels: {
      name: {
        fontSize: '0px',
        color: '#fff',
        offsetY: -130
      },
      value: {
        offsetY: 76,
        fontSize: '0px',
        color: '#fff',
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.15
        },
        formatter: function (val) {
          return val + ' Km/h';
        }
      }
    }
  }
},
fill: {
  type: 'gradient',
  gradient: {
      shade: 'dark',
      type: "vertical",
      inverseColors: true,
      gradientToColors: ["#992109"],
      stops: [0, 100]
  },
},
stroke: {
  dashArray: 4
},
};

var chartRotacao = new ApexCharts(document.querySelector("#chartRotacao"), optionsCircle);
chartRotacao.render();

window.setInterval(function () {

  iteration++;

  chartRotacao.updateSeries([getRangeRandom({ min: 0, max: 70 })])

}, 1000)