<template>
  <div>
    analysis
    <Charts style="height:400px" :option="opt" />
  </div>
</template>

<script>
import Charts from '../../components/Chart';
import random from 'lodash/random';
export default {
  components: {
    Charts,
  },
  mounted() {
    this.timer = setInterval(() => {
      this.opt.series[0].data = this.opt.series[0].data.map(() => random(100));

      this.opt = { ...this.opt };
    }, 2000);
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  data() {
    return {
      opt: {
        title: {
          text: 'ECharts 入门示例',
        },
        tooltip: {},
        legend: {
          data: ['销量'],
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  },
};
</script>

<style></style>
