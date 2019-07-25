<template>
  <div style="width: 256px">
    <a-menu
      :selected-keys="selectedKeys"
      :open-keys.sync="openKeys"
      mode="inline"
      :theme="f"
    >
      <template v-for="item in menuData">
        <a-menu-item
          v-if="!item.children"
          :key="item.path"
          @click="() => $router.push({ path: item.path, query: $router.query })"
        >
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.path" />
      </template>
    </a-menu>
  </div>
</template>

<script>
/*
 * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue
 * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue
 * */
import SubMenu from './SubMenu';
import { check } from '../utils/auth';

export default {
  props: {
    f: {
      type: String,
      default: 'dark',
    },
  },
  components: {
    'sub-menu': SubMenu,
  },
  watch: {
    '$route.path': function(v) {
      this.selectedKeys = this.selectedKeysMap[v];
      this.openKeys = this.collapsed ? [] : this.openKeysMap[v];
    },
  },
  data() {
    this.selectedKeysMap = {};
    this.openKeysMap = {};
    const menuData = this.getMenuData(this.$router.options.routes);
    return {
      collapsed: false,
      selectedKeys: this.selectedKeysMap[this.$router.path],
      openKeys: this.openKeysMap[this.$router.path],
      menuData,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    getMenuData(routes = [], pKeys = [], selectedKeys) {
      let menuData = [];
      for (let item of routes) {
        if (item.meta && item.meta.authority && !check(item.meta.authority)) {
          break;
        }
        if (item.name && !item.hideInMenu) {
          this.openKeysMap[item.path] = pKeys;
          this.selectedKeysMap[item.path] = [selectedKeys || item.path];
          const newItem = { ...item };
          delete newItem.children;
          if (item.children && !item.hideChildrenMenu) {
            newItem.children = this.getMenuData(item.children, [
              ...pKeys,
              item.path,
            ]);
          } else {
            this.getMenuData(
              item.children,
              selectedKeys ? pKeys : [...pKeys, item.path],
              selectedKeys || item.path,
            );
          }
          menuData.push(newItem);
        } else if (
          !item.hideInMenu &&
          item.children &&
          !item.hideChildrenMenu
        ) {
          menuData.push(
            ...this.getMenuData(item.children, [...pKeys, item.path]),
          );
        }
      }
      return menuData;
    },
  },
};
</script>
