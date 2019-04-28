import Vue from "vue"

import * as utils from "utils"
import displayError from "error"

// Global css or stylus
import "normalize.css"
import "style.styl"

window._displayError = displayError
window._utils = utils
window._global = {
  isWechatBrowser: /micromessenger/i.test(window.navigator.userAgent),
}
