//在Echarts.vue文件中
<template>
  <div class="Echarts">
    <div id="main" style="width: 600px; height: 400px"></div>
  </div>
</template>
 
<script>
export default {
  name: "Echarts",
  methods: {
    myEcharts() {
      console.log(this.$echarts);
      var myChart = this.$echarts.init(document.getElementById("main"));
      //配置图表
      var option = {
        xAxis: {
          type: "category",
          data: ["A", "B", "b", "c", "C"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, "-", 90, 150], // '-'表示空数
            type: "line",
            lineStyle: {
              // 线
              color: "red",
              widh: 4,
              type: "dashed", // dashed 虚线 dotted 点线 solid 实线
            },
            label: {
              // 标签
              show: false,
              position: "bottom", // 支持|top | left | right | bottom | inside | insideLeft | insideRight | insideTop | insideBottom | insideTopLeft | insideBottomLeft | insideTopRight | insideBottomRight
              distance: 80, // 离线的距离 top和insideRight有效
              offset: [80, 90], //标签的偏移
              rotate: 13, //角度
              formatter: "{b}: {@score}", //内容编辑器 详见笔记
              color: "#fff000", //字体颜色
              textStyle: {
                fontSize: 90,
              },
            },
            emphasis: {
              label: { show: "true" }, //设置鼠标移动时显示
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
  mounted() {
    this.myEcharts();
  },
};
</script>
 
<style scoped>

</style>>
