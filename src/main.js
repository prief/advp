import Vue from 'vue';
import App from './App.vue';
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
} from 'ant-design-vue';
import router from './router';
import store from './store/index';
import Authority from './components/Authority';
import Auth from './directives/auth';

Vue.config.productionTip = false;
Vue.component('Authority', Authority);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Layout);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Auth);
Vue.use(Form);
Vue.use(Input);

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1319657_6cf0si0wynj.js',
});
Vue.component('IconFont', IconFont);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
