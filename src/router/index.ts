/*
 * @Author: along
 * @Description: 路由
 * @Date: 2024-04-02 13:56:18
 * @LastEditors: along
 * @LastEditTime: 2024-04-02 14:00:00
 * @FilePath: /cxy-web-table/src/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
  ],
});

export default router;
