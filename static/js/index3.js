am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv3", am4charts.RadarChart);

chart.data = [{
  "category": "浦发银行",
  "value1": 1.369,
  "value2": 0,
  "value3": 0,
  "value4": 0
}, {
  "category": "民生银行",
  "value1": 0.661,
  "value2": 0,
  "value3": 0,
  "value4": 0
}, {
  "category": "招商银行",
  "value1": 3.301,
  "value2": 0,
  "value3": 0,
  "value4": 0
}, {
  "category": "兴业银行",
  "value1": 3.796,
  "value2": 0,
  "value3": 0,
  "value4": 0
}, {
  "category": "北京银行",
  "value1":0.316,
  "value2": 0,
  "value3": 0,
  "value4": 0
}, {
  "category": "上海银行",
  "value1": 0.03,
  "value2": 0,
  "value3": 0,
  "value4": 0
}, {
  "category": "农业银行",
  "value1": -0.065,
  "value2": 0,
  "value3": 0,
  "value4": 0
}, {
  "category": "交通银行",
  "value1": 0.196,
  "value2": 0,
  "value3": 0,
  "value4": 0
}, {
  "category": "工商银行",
  "value1": -0.03,
  "value2": 0,
  "value3": 0,
  "value4": 0
}, {
  "category": "光大银行",
  "value1": 0.757,
  "value2": 0,
  "value3": 0,
  "value4": 0
}]


chart.padding(10, 10, 10, 10);

chart.radius = am4core.percent(95);
chart.startAngle = 179.5;
chart.endAngle = 360.5;

chart.innerRadius = am4core.percent(60);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.minGridDistance = 60;
categoryAxis.renderer.labels.template.location = 0.5;
categoryAxis.renderer.grid.template.location = 1;
categoryAxis.interactionsEnabled = false;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.minGridDistance = 20;
valueAxis.renderer.grid.template.strokeOpacity = 0.05
valueAxis.renderer.labels.template.fontSize = 9;
valueAxis.interactionsEnabled = false;
valueAxis.renderer.axisAngle = 260;
//valueAxis.renderer.gridType = "polygons";
valueAxis.min = -0.65;

var series1 = chart.series.push(new am4charts.RadarColumnSeries());
series1.columns.template.width = am4core.percent(80);
series1.name = "每股现金流量";
series1.dataFields.categoryX = "category";
series1.columns.template.tooltipText = "{name}: {valueY.value}";
series1.dataFields.valueY = "value1";
series1.stacked = true;

var series2 = chart.series.push(new am4charts.RadarColumnSeries());
series2.columns.template.width = am4core.percent(80);
series2.columns.template.tooltipText = "{name}: {valueY.value}";
series2.name = "Series 2";
series2.dataFields.categoryX = "category";
series2.dataFields.valueY = "value2";
series2.stacked = true;

var series3 = chart.series.push(new am4charts.RadarColumnSeries());
series3.columns.template.width = am4core.percent(80);
series3.columns.template.tooltipText = "{name}: {valueY.value}";
series3.name = "Series 3";
series3.dataFields.categoryX = "category";
series3.dataFields.valueY = "value3";
series3.stacked = true;

var series4 = chart.series.push(new am4charts.RadarColumnSeries());
series4.columns.template.width = am4core.percent(80);
series4.columns.template.tooltipText = "{name}: {valueY.value}";
series4.name = "Series 4";
series4.dataFields.categoryX = "category";
series4.dataFields.valueY = "value4";
series4.stacked = true;

chart.seriesContainer.zIndex = -1;

var slider = chart.createChild(am4core.Slider);
slider.start = 0.5;
slider.events.on("rangechanged", function () {

  var start = slider.start;

  chart.startAngle = 270 - start * 179 - 1;
  chart.endAngle = 270 + start * 179 + 1;

  valueAxis.renderer.axisAngle = chart.startAngle;
})
