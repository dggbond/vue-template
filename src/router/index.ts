import { createRouter, createWebHistory } from "vue-router"
import HomePage from "~/pages/HomePage.vue"

import type { RouteRecordRaw } from "vue-router"

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    meta: {
      label: "首页",
    },
    component: HomePage,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
