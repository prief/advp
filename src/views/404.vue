<template>
  <div style="text-align:center">
    <Icon-font
      type="icon-preview"
      style="font-size:100px;margin-top:66px;"
    ></Icon-font>
    <br />
    <img :src="up" alt="" />
  </div>
</template>

<script>
import up from '@/assets/up.svg';
export default {
  data() {
    return {
      up,
    };
  },
};
</script>

<style></style>
