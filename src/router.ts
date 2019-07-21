import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Console from './views/Console.vue';
import Dashboard from './components/Dashboard.vue';
import Settings from './components/Settings.vue';
import Editor from './components/Editor.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Console,
      meta: {
        requireAuth: true,
      },
      children: [
        {
          path: '',
          component: Dashboard,
        },
        {
          path: 'edit',
          component: Editor,
        },
        {
          path: 'setting',
          component: Settings,
        },
      ],
    },
    {
      path: '/login',
      component: Login,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // ホントならここで認証情報を取得する
  const isAuth = false;
  const requireAuth = to.matched.some(record => record.meta.requireAuth);
  if (requireAuth || isAuth) {
    next({ path: '/login', query: { redirect: to.fullPath }});
  } else {
    next();
  }
});

export default router;
