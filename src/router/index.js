import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout'

const routes = [
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home'),
        meta: {
          title: '首页',
          icon: ''
        }
      }
    ]
  },
  {
    path: '/sys',
    name: 'sys',
    component: Layout,
    redirect: '/sys/users',
    meta: {
      title: '系统管理',
      icon: ''
    },
    children: [
      {
        path: '/sys/users',
        name: 'sys-users',
        component: () => import('../views/users'),
        meta: {
          title: '用户管理',
          icon: ''
        }
      },
      {
        path: '/sys/roles',
        name: 'sys-roles',
        component: () => import('../views/roles'),
        meta: {
          title: '角色管理',
          icon: ''
        }
      },
      {
        path: '/sys/menus',
        name: 'sys-menus',
        component: () => import('../views/menus'),
        meta: {
          title: '菜单管理',
          icon: ''
        }
      }
    ]
  },

  {
    path: '/tool',
    name: 'tool',
    component: Layout,
    redirect: '/tool/dicts',
    meta: {
      title: '系统工具',
      icon: ''
    },
    children: [
      {
        path: '/tool/dicts',
        name: 'tool-dicts',
        component: () => import('../views/dicts'),
        meta: {
          title: '数字字典',
          icon: ''
        }
      }
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
  // 404  401
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('../views/home'),
  //   meta: {
  //     title: '首页',
  //     icon: ''
  //   }
  // },
  // {
  //   path: '/sys',
  //   name: 'sys',
  //   component: Layout,
  //   redirect: '/sys/users',
  //   meta: {
  //     title: '系统管理',
  //     icon: ''
  //   },
  //   children: [
  //     {
  //       path: '/sys/users',
  //       name: 'sys-users',
  //       component: () => import('../views/users'),
  //       meta: {
  //         title: '用户管理',
  //         icon: ''
  //       }
  //     },
  //     {
  //       path: '/sys/roles',
  //       name: 'sys-roles',
  //       component: () => import('../views/roles'),
  //       meta: {
  //         title: '角色管理',
  //         icon: ''
  //       }
  //     },
  //     {
  //       path: '/sys/menus',
  //       name: 'sys-menus',
  //       component: () => import('../views/menus'),
  //       meta: {
  //         title: '菜单管理',
  //         icon: ''
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/tool',
  //   name: 'tool',
  //   component: Layout,
  //   redirect: '/tool/dicts',
  //   meta: {
  //     title: '系统工具',
  //     icon: ''
  //   },
  //   children: [
  //     {
  //       path: '/tool/dicts',
  //       name: 'tool-dicts',
  //       component: () => import('../views/dicts'),
  //       meta: {
  //         title: '数字字典',
  //         icon: ''
  //       }
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
