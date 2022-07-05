// 导入axios
import axios from 'axios'

import store from '../store'

// 创建axios实例
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
  headers: { 'X-Custom-Header': 'foobar' }
})

// 请求拦截器
instance.interceptors.request.use(
  function (config) {
    const token = store.getters.token
    if (token) config.headers.Authorization = token

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  function (response) {
    const { data } = response
    store.commit('user/setToken', response.headers.authorization)
    console.log(data)
    return data
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 处理get请求参数问题
function request(options) {
  options.method = options.method || 'GET'
  if (options.method.toLocaleUpperCase() === 'GET') {
    options.params = options.data
  }
  return instance(options)
}

// 导出axios实例
export default request
