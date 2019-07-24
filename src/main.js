import Vue from "vue";
import App from "./App.vue";
import { Button, Layout, Icon, Drawer, Radio } from "ant-design-vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Icon);
Vue.use(Layout);
Vue.use(Drawer);
Vue.use(Radio);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
