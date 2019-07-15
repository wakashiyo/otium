import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Settings from './views/Settings.vue';
import Editor from './views/Editor.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Dashboard,
    },
    {
      path: '/edit',
      component: Editor,
    },
    {
      path: '/setting',
      component: Settings,
    },
  ],
});
