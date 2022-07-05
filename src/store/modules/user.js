import UserApi from '../../api/user'
import { setItem, getItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', state.token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async getCode({ commit }) {
      const response = await UserApi.getCodeApi()
      commit('setToken', response.data.token)
      return response
    },
    async userInfo({ commit }) {
      const response = await UserApi.getUserInfo()
      console.log(response);
      // commit('setUserInfo', response)
      // return response
    }
  }
}
