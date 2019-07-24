<template>
  <div :class="[`n-${n}`, `f-${f}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider
        :theme="f"
        v-if="n === 'left'"
        :trigger="null"
        collapsible
        v-model="collapsed"
        width="256px"
      >
        <div class="logo">ADVP</div>
        <SideMenu :f="f" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          ></a-icon>
          <Header />
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <setting-drawer></setting-drawer>
  </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';
import SettingDrawer from '../components/SettingDrawer';
export default {
  components: {
    Header,
    Footer,
    SideMenu,
    SettingDrawer,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    n() {
      return this.$route.query.n || 'left';
    },
    f() {
      return this.$route.query.f || 'dark';
    },
  },
};
</script>

<style scoped>
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}
.trigger:hover {
  background: #eeeeee;
}
.logo {
  line-height: 64px;
  text-align: center;
  overflow: hidden;
}
.f-dark .logo {
  color: white;
}
</style>
