import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      next()
      // if (!store.getters.hasUserInfo) {
      //   const res = store.dispatch('user/userMneus')
      //   console.log('menus数据===>', res);
      // }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
