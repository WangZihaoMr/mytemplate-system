// 导入axios的实例
import request from '../utils/request'

// 用户code
const getCodeApi = () => {
  return request({ url: '/captcha', method: 'GET' })
}

// 用户登录
const userLogin = (data) => {
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST'
  })
}

// 用户信息
const getUserInfo = () => {
  return request({ url: '/sys/userInfo', method: 'GET' })
}

// 用户权限
const getMenus = () => {
  return request({ url: '/sys/menu/nav', method: 'GET' })
}

// 导出请求
export default {
  getCodeApi,
  userLogin,
  getUserInfo,
  getMenus
}
