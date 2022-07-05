import router from '@/router'
import UserApi from '../../api/user'
import { setItem, getItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: {
    token: '',
    authorization: getItem('authorization') || '',
    userInfo: {},
    menus: []
  },
  mutations: {
    // 存储token到vuex和本地
    setToken(state, token) {
      state.token = token
      setItem('token', state.token)
    },
    // 存储userInfo到vuex和本地
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    // 存储authorization到vuex和本地
    setAuthorization(state, authorization) {
      state.authorization = authorization
      setItem('authorization', authorization)
    },
    // 存储用户菜单数据
    setMenus(state, menus) {
      state.menus = menus
    }
  },
  actions: {
    // token
    async getCode({ commit }) {
      const response = await UserApi.getCodeApi()
      commit('setToken', response.data.token)
      return response
    },
    // userInfo
    async userInfo({ commit }) {
      const response = await UserApi.getUserInfo()
      console.log(response);
      commit('setUserInfo', response)
      return response
    },
    // authorization
    async authorization({ commit }, authorization) {
      commit('setAuthorization', authorization)
    },
    // 退出登录
    clearAuthorization({ commit }) {
      commit('setAuthorization', '')
      commit('setToken', '')
      router.push('/login')
    },
    // 用户菜单数据
    async userMenus({ commit }) {
      const menus = await UserApi.getMenus()
      console.log('menus===>', menus);
      commit('setMenus', menus)
    }
  }
}
