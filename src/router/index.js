import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

import App from "app"

const router = new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      component: App,
    },
  ],
})

export default router
