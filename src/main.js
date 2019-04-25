import _ from "lodash"
import "./test.js"
import "./style.css"

const createEl = (tag = "div", selector = "body") => {
  const el = document.createElement("img")
  document.querySelector(selector).appendChild(el)
  return el
}

createEl("img").src = "/static/icon/seal-cry.svg"
