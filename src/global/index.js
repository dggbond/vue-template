import Vue from "vue"
import Axios from "axios"

import * as utils from "utils"
import displayError from "error"

// Global css or stylus
import "normalize.css"
import "style.styl"

window.axios = Axios
window._displayError = displayError
window._utils = utils
window._global = {
  isWechatBrowser: /micromessenger/i.test(window.navigator.userAgent),
}

// Axios Config

Axios.defaults.baseURL = "/fake"
