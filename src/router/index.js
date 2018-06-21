import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home'),
      meta: {
        cname: '首页'
      },
      children: [
        {
          path: 'userList',
          name: 'UserList',
          component: () => import('@/views/UserList'),
          meta: {
            cname: '用户列表'
          }
        },
        {
          path: 'shopList',
          name: 'ShopList',
          component: () => import('@/views/ShopList'),
          meta: {
            cname: '商家列表'
          }
        },
        {
          path: 'addShop',
          name: 'AddShop',
          meta: {
            cname: '添加商铺'
          }
        },
        {
          path: 'addGoods',
          name: 'AddGoods',
          meta: {
            cname: '添加商品'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login'),
      meta: {
        cname: '登录'
      }
    }
  ]
})
