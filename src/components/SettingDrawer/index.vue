<template>
  <div>
    <a-drawer
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      width="300px"
    >
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div>
        <div>
          <h2>整体风格</h2>
          <a-radio-group
            @change="e => handlerClick('f', e.target.value)"
            :value="$route.query.f || 'dark'"
          >
            <a-radio value="dark">黑色</a-radio>
            <a-radio value="light">白色</a-radio>
          </a-radio-group>
        </div>
        <div>
          <h2>导航位置</h2>
          <a-radio-group
            @change="e => handlerClick('n', e.target.value)"
            :value="$route.query.n || 'left'"
          >
            <a-radio value="left">左边</a-radio>
            <a-radio value="top">上边</a-radio>
          </a-radio-group>
        </div>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    handlerClick(n, v) {
      console.log(n, v);
      this.$router.push({ query: { ...this.$route.query, [n]: v } });
    },
    onClose() {
      this.visible = false;
    }
  }
};
</script>
<style scoped>
.handle {
  position: absolute;
  top: 240px;
  right: 300px;
  width: 48px;
  height: 48px;
  background: #1898ff;
  color: white;
  font-size: 28px;
  text-align: center;
  line-height: 48px;
  border-radius: 3px 0 0 3px;
}
</style>
