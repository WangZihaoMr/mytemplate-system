import router from './router'
import store from './store'

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/userInfo')
        const res = store.dispatch('user/userMenus')
        console.log('menus数据===>', res);
        // if (res) {

        // }
      }
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
