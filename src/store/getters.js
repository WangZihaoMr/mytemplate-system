const getters = {
  token: (state) => state.user.authorization,
  userInfo: (state) => state.user.userInfo,
  hasUserInfo: (state) => state.user.userInfo !== '{}'
}
export default getters
