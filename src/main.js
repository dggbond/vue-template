import Vue from "vue"
import store from "store"
import router from "router"

import "global"
import "style.styl"

Vue.productionTip = false

new Vue({
  el: "#root",
  store,
  router,
  render: h => h(Vue.component("RouterView")),
})
