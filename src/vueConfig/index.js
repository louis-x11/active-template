import Vue from 'vue'
import {Toast} from 'vant'

Vue.config.devtools = true
Vue.config.productionTip = false


/*
* vue 全局错误处理
* */
Vue.config.errorHandler = function (err, vm, info) {
  Toast.fail("哎呀， 出现了点错误~")
  console.log("%c%s",
    "font-family: 'PingFang SC', sans-serif;font-size: 1.5em;font-weight: 600;color: #c03639;",
    `出现了一些错误 | 时间： ${new Date().toLocaleString()}`)
  console.error(err, vm, info)
}


/*
* vue 全局警告处理
* */
Vue.config.warnHandler = function (msg, vm, trace) {
  Toast.fail("哎呀， 出现了点错误~")
  console.log("%c%s",
    "font-family: 'PingFang SC', sans-serif;font-size: 1.2em;font-weight: 600;color: #ffc85c;",
    `出现了一些警告 | 时间： ${new Date().toLocaleString()}`)
  console.warn(msg, vm, trace)
}
