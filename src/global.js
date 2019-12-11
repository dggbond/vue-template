import Vue from "vue"
import Axios from "axios"

import * as util from "util"
import displayError from "error"

// Global css
import "normalize.css"

window.axios = Axios
window._displayError = displayError
window._util = util
window._global = {
  isWechatBrowser: /micromessenger/i.test(window.navigator.userAgent),
}

// Axios Config

Axios.defaults.baseURL = "/fake"
