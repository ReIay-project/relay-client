import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LayoutDefault from '../layouts/LayoutDefault.vue';
import ViewHome from '../views/ViewHome.vue';
import { Route } from '../assets/enum';
import ViewServer from '../views/ViewServer.vue';
import ViewServerPage from '../views/ViewServerPage.vue';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      {
        path: '/',
        component: ViewHome,
        name: Route.home
      },
      {
        path: '/server/:host',
        component: ViewServer,
        name: Route.server,
        children: [
          {
            path: '/server/:host/:pageId',
            component: ViewServerPage,
            name: Route.serverPage
          }
        ]
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../layouts/LayoutError.vue'),
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});