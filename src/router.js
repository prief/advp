import Vue from 'vue';
import Router from 'vue-router';
import NotFound from './views/404.vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(Router);

const r = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user',
      hideInMenu: true,
      component: () =>
        import(/* webpackChunkName: "layout" */ './layout/User.vue'),
      children: [
        {
          path: '/user',
          redirect: '/user/login',
        },
        {
          path: '/user/login',
          name: 'login',
          component: () =>
            import(/* webpackChunkName: "user" */ './views/user/Login.vue'),
        },
        {
          path: '/user/register',
          name: 'register',
          component: () =>
            import(/* webpackChunkName: "user" */ './views/user/Register.vue'),
        },
      ],
    },
    {
      path: '/',
      component: () =>
        import(/* webpackChunkName: "layout" */ './layout/Basic.vue'),
      children: [
        {
          path: '/',
          redirect: '/dashboard/analysis',
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          meta: {
            icon: 'dashboard',
            title: '仪表盘',
          },
          component: { render: h => h('router-view') },
          children: [
            {
              path: '/dashboard/analysis',
              name: 'analysis',
              component: () =>
                import(/* webpackChunkName: "dashboard" */ './views/dashboard/Analysis.vue'),
            },
          ],
        },
        {
          path: '/form',
          name: 'form',
          meta: {
            icon: 'form',
            title: '表单',
          },
          component: { render: h => h('router-view') },
          children: [
            {
              path: '/form/basic-form',
              name: 'basicform',
              component: () =>
                import(/* webpackChunkName: "dashboard" */ './views/forms/Basic'),
            },
            {
              path: '/form/step-form',
              name: 'stepform',
              hideChildrenMenu: true,
              component: () =>
                import(/* webpackChunkName: "dashboard" */ './views/forms/step'),
              children: [
                {
                  path: '/form/step-form',
                  redirect: '/form/step-form/info',
                },
                {
                  path: '/form/step-form/info',
                  name: 'info',
                  component: () =>
                    import(/* webpackChunkName: "dashboard" */ './views/forms/step/Info.vue'),
                },
                {
                  path: '/form/step-form/confirm',
                  name: 'confirm',
                  component: () =>
                    import(/* webpackChunkName: "dashboard" */ './views/forms/step/Confirm.vue'),
                },
                {
                  path: '/form/step-form/result',
                  name: 'result',
                  component: () =>
                    import(/* webpackChunkName: "dashboard" */ './views/forms/step/Result.vue'),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: '*',
      name: '404',
      hideInMenu: true,
      component: NotFound,
    },
  ],
});

r.beforeEach((t, f, n) => {
  if (t.path != f.path) {
    NProgress.start();
  }

  n();
});
r.afterEach(() => {
  NProgress.done();
});
export default r;
