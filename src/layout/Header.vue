<template>
  <div class="header">
    <a-dropdown>
      <a-icon type="global" />
      <a-menu
        slot="overlay"
        @click="change"
        :selected-keys="[$route.query.locale || 'zhCN']"
      >
        <a-menu-item key="zhCN">
          中文
        </a-menu-item>
        <a-menu-item key="enUS">
          ENGLISH
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    change({ key }) {
      this.$router.push({ query: { ...this.$route.query, locale: key } });
      this.$i18n.locale = key;
    },
  },
};
</script>

<style scoped>
.header {
  float: right;
  margin-right: 30px;
}
</style>
