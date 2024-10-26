import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LayoutDefault from '../layouts/LayoutDefault.vue';
import ViewHome from '../views/ViewHome.vue';
import { Route } from '../assets/enum';



const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      {
        path: '/',
        component: ViewHome,
        name: Route.HOME
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