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
          // 路由元信息,可以定制一些专属于该页面的属性,比如页面title,页面中文名称(商家列表,用户列表)
          meta: {
            cname: '商家列表'
          },
          // 路由独享的守卫,进入该路由之前的钩子函数。
          beforeEnter (to, from, next) {
            // alert('即将进入shopList路由')
            next()
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
      component: () => import('@/views/Login'),
      meta: {
        cname: '登录'
      }
    }
  ]
})
