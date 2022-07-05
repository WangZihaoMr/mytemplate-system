const getters = {
  token: (state) => state.user.authorization,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  }
}
export default getters
