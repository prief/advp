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
  LocaleProvider,
  Dropdown,
  DatePicker,
} from 'ant-design-vue';
import router from './router';
import store from './store/index';
import Authority from './components/Authority';
import Auth from './directives/auth';
import VueI18N from 'vue-i18n';
import zhCN from './locale/zhCN';
import enUS from './locale/enUS';
import queryString from 'querystring';
import VHJS from 'vue-highlightjs';
import 'highlight.js/styles/github.css';
Vue.use(VHJS);
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
Vue.use(Dropdown);
Vue.use(LocaleProvider);
Vue.use(DatePicker);
Vue.use(VueI18N);

const i18n = new VueI18N({
  locale: queryString.parse(location.search).locale || 'zhCN',
  messages: {
    zhCN: { message: zhCN },
    enUS: { message: enUS },
  },
});

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1319657_6cf0si0wynj.js',
});
Vue.component('IconFont', IconFont);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
