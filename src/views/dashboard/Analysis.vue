<template>
  <div>
    {{ $t('message')['time'] }}
    <a-date-picker></a-date-picker>
    <Charts style="height:400px" :option="opt" />
    <pre v-highlightjs="chartCode"><code class="html" ></code></pre>
  </div>
</template>

<script>
import request from '../../utils/request';
import Charts from '../../components/Chart';
import chartCode from '!!raw-loader!../../components/Chart';
export default {
  data() {
    return {
      opt: {},
      chartCode,
    };
  },
  components: {
    Charts,
  },
  mounted() {
    this.getAnalysisData();
    this.timer = setInterval(() => {
      this.getAnalysisData();
    }, 2000);
  },
  methods: {
    getAnalysisData() {
      request({
        url: '/api/dashboard/analysis',
        method: 'GET',
        params: { id: 1 },
      }).then(res => {
        console.log(111111);
        this.opt = {
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
              data: res.data,
            },
          ],
        };
      });
    },
  },
  destroyed() {
    clearTimeout(this.timer);
  },
};
</script>

<style></style>
