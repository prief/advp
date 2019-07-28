<template>
  <div ref="echarts"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import { addListener, removeListener } from 'resize-detector';
import debounce from 'lodash/debounce';
export default {
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  created() {
    this.resize = debounce(this.resize, 300);
  },
  mounted() {
    this.renderChart();
    addListener(this.$refs.echarts, this.resize);
    // 指定图表的配置项和数据
  },
  watch: {
    // 深度监听比较耗性能
    // option: {
    //   handler(v) {
    //     this.myChart.setOption(v);
    //   },
    //   deep: true,
    // },
    option(v) {
      this.myChart.setOption(v);
    },
  },
  methods: {
    resize() {
      console.log('resize');
      this.myChart.resize();
    },
    renderChart() {
      this.myChart = echarts.init(this.$refs.echarts);
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(this.option);
    },
  },
  beforeDestroy() {
    removeListener(this.$refs.echarts, this.resize);
    this.myChart.dispose();
    this.myChart = null;
  },
};
</script>

<style></style>
