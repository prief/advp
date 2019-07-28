<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view />
    </a-locale-provider>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import enUS from 'ant-design-vue/lib/locale-provider/en_US';
import moment from 'moment';
export default {
  data() {
    return {
      locale: zhCN,
    };
  },
  watch: {
    '$route.query.locale': function(v) {
      this.locale = v === 'enUS' ? enUS : zhCN;
      moment.locale(v === 'enUS' ? 'en' : 'zh-cn');
    },
  },
};
</script>

<style lang="less"></style>
