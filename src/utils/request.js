import axios from 'axios'
import {Toast} from "vant";
import {getToken} from "@/utils/index";
import Cookie from 'js-cookie'

/*
* 气泡
*     测试 ： http://dev-app-api.yutangwl.com
*     正式服 ： http://napi.yutangwl.com
* 声河
*     测试 ：
*
* */

const service = axios.create({
  // https://www.easy-mock.com/mock/5fb9d0683f90e10d9664665b/gluttony-admin
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
  headers: {
    token: getToken()
  }
})


service.interceptors.request.use(
  config => config,
  error => {
    console.error(error) // for debug
    return Promise.reject(error)
  }
)


service.interceptors.response.use(
  response => {
    const {data: res} = response
    if (res.code && res.code !== 200) {
      /*
      * 非 200 的数据也能捕获， 不过需要用catch去抓取， 不能使用then
      * */
      res.message && Toast.fail(res.message || '请求失败！')
      return Promise.reject(res)
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

function request2Get(config) {
  return service({
    ...config,
    method: 'get'
  })
}


function request2Post(config) {
  return service({
    ...config,
    method: 'post'
  })
}

export {
  request2Get,
  request2Post
}
