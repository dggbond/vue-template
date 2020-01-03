// third party modules
import Vue from "vue"
import store from "store"
import router from "router"
import Axios from "axios"

// self modules
import * as util from "util"
import displayError from "error"

// css
import "style.styl"
import "normalize.css"

window.axios = Axios
window._displayError = displayError
window._util = util
window._global = {
  isWechatBrowser: /micromessenger/i.test(window.navigator.userAgent),
}

Vue.productionTip = false

new Vue({
  el: "#root",
  store,
  router,
  render: h => h(Vue.component("RouterView")),
})
