## 后台管理(未完成)

> 目录结构如下

```
├── README.md
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   ├── prod.env.js
│   └── test.env.js
├── index.html
├── package.json
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── default.jpg
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   ├── main.js
│   ├── mock
│   │   ├── data
│   │   └── index.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   ├── index.js
│   │   └── modules
│   └── views
│       ├── Home.vue
│       ├── Login.vue
│       ├── ShopList.vue
│       └── UserList.vue
```

> 技术栈
* Webpack
* Vue
* Vuex
* Vue-Router
* Mock
* Axios
* Es6
* Sass

> 基于ElementUi,另该项目后台接口也是本人所写,但并非使用后台语言,使用了`axios-mock-adapter`插件模拟接口,所有的数据处理都是我写,包括登录验证,分页,添加和删除数据。

> main.js

```
 import Vue from 'vue'
 import App from './App'
 import router from './router'
 import store from './store'
 import NProgress from 'nprogress'
 import 'nprogress/nprogress.css'
 import {
   Pagination,
   Dialog,
   Autocomplete,
   Dropdown,
   DropdownMenu,
   DropdownItem,
   Menu,
   Submenu,
   MenuItem,
   MenuItemGroup,
   Input,
   InputNumber,
   Radio,
   RadioGroup,
   RadioButton,
   Checkbox,
   CheckboxButton,
   CheckboxGroup,
   Switch,
   Select,
   Option,
   OptionGroup,
   Button,
   ButtonGroup,
   Table,
   TableColumn,
   DatePicker,
   TimeSelect,
   TimePicker,
   Popover,
   Tooltip,
   Breadcrumb,
   BreadcrumbItem,
   Form,
   FormItem,
   Tabs,
   TabPane,
   Tag,
   Tree,
   Alert,
   Slider,
   Icon,
   Row,
   Col,
   Upload,
   Progress,
   Badge,
   Card,
   Rate,
   Steps,
   Step,
   Carousel,
   CarouselItem,
   Collapse,
   CollapseItem,
   Cascader,
   ColorPicker,
   Container,
   Header,
   Aside,
   Main,
   Footer,
   Loading,
   Notification,
   MessageBox
 } from 'element-ui'
 
 Vue.use(Pagination)
 Vue.use(Dialog)
 Vue.use(Autocomplete)
 Vue.use(Dropdown)
 Vue.use(DropdownMenu)
 Vue.use(DropdownItem)
 Vue.use(Menu)
 Vue.use(Submenu)
 Vue.use(MenuItem)
 Vue.use(MenuItemGroup)
 Vue.use(Input)
 Vue.use(InputNumber)
 Vue.use(Radio)
 Vue.use(RadioGroup)
 Vue.use(RadioButton)
 Vue.use(Checkbox)
 Vue.use(CheckboxButton)
 Vue.use(CheckboxGroup)
 Vue.use(Switch)
 Vue.use(Select)
 Vue.use(Option)
 Vue.use(OptionGroup)
 Vue.use(Button)
 Vue.use(ButtonGroup)
 Vue.use(Table)
 Vue.use(TableColumn)
 Vue.use(DatePicker)
 Vue.use(TimeSelect)
 Vue.use(TimePicker)
 Vue.use(Popover)
 Vue.use(Tooltip)
 Vue.use(Breadcrumb)
 Vue.use(BreadcrumbItem)
 Vue.use(Form)
 Vue.use(FormItem)
 Vue.use(Tabs)
 Vue.use(TabPane)
 Vue.use(Tag)
 Vue.use(Tree)
 Vue.use(Alert)
 Vue.use(Slider)
 Vue.use(Icon)
 Vue.use(Row)
 Vue.use(Col)
 Vue.use(Upload)
 Vue.use(Progress)
 Vue.use(Badge)
 Vue.use(Card)
 Vue.use(Rate)
 Vue.use(Steps)
 Vue.use(Step)
 Vue.use(Carousel)
 Vue.use(CarouselItem)
 Vue.use(Collapse)
 Vue.use(CollapseItem)
 Vue.use(Cascader)
 Vue.use(ColorPicker)
 Vue.use(Container)
 Vue.use(Header)
 Vue.use(Aside)
 Vue.use(Main)
 Vue.use(Footer)
 Vue.use(Loading.directive)
 
 Vue.prototype.$notify = Notification
 Vue.prototype.$confirm = MessageBox.confirm
 Vue.config.productionTip = false
 
 // 在路由跳转的时候，我们需要一些权限判断或者其他操作。
 // 定义全局前置守卫,监听每一次路由跳转。
 // 该钩子函数在跳转之前执行。
 router.beforeEach((to, from, next) => {
   // 如果目标路径为登录页,那么移除sessionStorage中的user值
   if (to.path === '/login') {
     sessionStorage.removeItem('user')
   }
   let user = sessionStorage.getItem('user')
   // 当sesstionStorage中没有user项,且目标路径不是登录页,即该操作想不登录直接进入后台,此操作属于非法操作。
   // 应对的处理方式是强制跳转至登录页
   // 当sesstionStorage中有值,那么表明该用户已登陆过,则不判定为非法操作。随即跳转之前启用NProgress.start()。
   if (!user && to.path !== '/login') {
     next({name: 'Login'})
   } else {
     NProgress.start()
     next()
   }
 })
 
 // 全局路由后置守卫,该钩子函数在跳转之后执行。
 // 关闭 NProgress。
 router.afterEach((to, from) => {
   NProgress.done()
 })
 
 /* eslint-disable no-new */
 new Vue({
   store,
   router,
   components: { App },
   template: '<App/>'
 }).$mount('#app')

```

* 入口文件,导入了`vue`,入口模板文件`App.vue`,路由,`store`,以及页面加载进度条插件`NProgress`。  
* 为了提高性能,这里我们按需加载`ElementUi`组件库,而不是一次性全部调用。  
* 定义全局前置路由守卫`router.beforeEach`,该钩子函数监听每一次路由跳转,其作用为判断用户是否登录,如果未登录则强制push至登录页  
如果已登录,则加载进度条提示页面加载进度,并且进行跳转。
* 全局后置导航守卫`router.afterEach`,在每次跳转之后执行,关闭进度条。
* 最后实例化Vue,将参数传入选项对象中,挂载到`#app`上。


> App.vue
 
```
<template>
     <div id="app">
       <transition name="fade" mode="out-in">
         <router-view class="full-page"/>
       </transition>
     </div>
</template>
```

定义顶级路由出口,所有页面都以这里的`router-view`为出口,并且定义一个过渡动画(透明渐变),`mode="out-in"`动画模式为先渲染,在进行过渡,以`fade`为样式。

> 路由文件 router/index.js
> 
```
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

```

* 使用了webpack提供的按需加载`import('@/views/Home')`。
* 定义了路由元信息`meta.cname`,设置每个页面的`title`。


> vuex store/index.js


```
import Vue from 'vue'
import Vuex from 'vuex'
import userList from './modules/userList'
import shopList from './modules/shopList'

Vue.use(Vuex)

// 导出该对象,并由main.js注入到子组件中
export default new Vuex.Store({
  modules: {
    userList,
    shopList
  }
})

```
 
实例化一个vuex对象,将store分割成模块,每个模块拥有自己的 state、mutation、action、getter。

> store/moudules/userList.js
 
```
import axios from 'axios'
import data from '../../mock'

// 导入模拟返回值的方法并执行。
data.getData()

// 存放了分页的参数
const state = {
  list: [],
  page: 1,
  pageSize: 10,
  total: 0
}

const mutations = {
   // 将载荷中的数据存入state中,以便读取。
  getUserList (state, payLoad) {
    let {data: {list, total}} = payLoad
    state.list = list
    state.total = total
  }
}

const actions = {
  // 获取用户列表数据
  getUserList ({ commit, state }) {
    // 第page页的数据 每页显示的数量
    const {page, pageSize} = state
    // 该请求路径被axios-mock-adapter拦截,获取到数据后唤醒mutations,模拟的后端代码在mock/index.js中
    axios.post('/userList', { page, pageSize })
      .then((response) => {
        const { data } = response
        commit({
          type: 'getUserList',
          data
        })
      })
  }
}

export default {
  state,
  mutations,
  actions
}

```

* 这里定义一个`getUserList`的`actions`用来读取远程数据,远程接口为`/userList`,传递2个参数,`page`第几页和`pageSize`每页显示数量以完成分页,该接口被拦截。
* 读取到数据后,唤醒`mutations`将数据存入到`state`中,此时可以在对应的vue文件中使用`mapState`方法读取到。


> mock/data/userList.js
 
```
import Mock from 'mockjs'

// 登录验证
export const Login = [
  {
    id: 1,
    username: 'admin',
    pwd: 'admin',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '超级管理员'
  },
  {
    id: 2,
    username: 'show',
    pwd: 'show',
    avatar: 'https://www.baidu.com/img/bd_logo1.png?qua=high',
    name: 'show大神'
  }
]

// 用户列表的数据
export const UserList = Mock.mock({
  'list|1032': [
    {
      'id|+1': 1,
      'date': '@date',
      'name': '@cname',
      'city': '@city'
    }
  ]
})

export const ShopList = Mock.mock({
  'list|133': [
    {
      'id|+1': 1,
      'shopId|+1': 500,
      'shopName': '@name',
      'address': '@city',
      'category|1': [
        '江浙小吃',
        '小吃零食',
        '好吃的小吃'
      ],
      'shop|1': [
        '王小虎夫妻店',
        '淘宝',
        '京东'
      ],
      'desc|1': [
        '荷兰优质淡奶，奶香浓而不腻',
        '淘宝好评',
        '京东好评'
      ]
    }
  ]
})

```
 
* 这里使用了mock来生成随机数据并且导出。


> mock/index.js
 
```
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { UserList, Login, ShopList } from './data/userList'

// 开启请求延迟,1300毫秒
const MockAda = new MockAdapter(axios, { delayResponse: 300 })

// 导出该函数,并在导入处执行。即可模拟后端返回
export default {
  getData () {
    // 返回用户列表的数据
    MockAda.onPost('/userList').reply(config => {
      // 将参数格式化获取到重要分页参数
      let { page, pageSize } = JSON.parse(config.data)
      // 深拷贝数据,以防止破坏数据源
      let filterList = UserList.list.slice(0)
      // 获取数据总条数
      let total = filterList.length
      // 1: 0, 5;  2: 5,5, ; 3: 10 5
      // 根据规律计算出截取值index,以及截取数量就是每页显示的数量pageSize
      let index = (page - 1) * pageSize
      // 根据参数截取指定的数据最后返回
      let list = filterList.splice(index, pageSize)
      return [
        200,
        { total, list }
      ]
    })
    MockAda.onPost('/login').reply(config => {
      let { username, pwd } = JSON.parse(config.data)
      let userInfo = ''
      let hasUser = Login.some((item) => {
        if (item.username === username && item.pwd === pwd) {
          userInfo = item
          return true
        }
      })
      if (hasUser) {
        return [
          200,
          { code: 200, msg: '登录成功', userInfo }
        ]
      } else {
        return [
          200,
          { code: 500, msg: '账号或密码错误' }
        ]
      }
    })
    MockAda.onPost('/shopList').reply(config => {
      // 将参数格式化获取到重要分页参数
      let { page, pageSize } = JSON.parse(config.data)
      // 深拷贝数据,以防止破坏数据源
      let filterList = ShopList.list.slice(0)
      // 获取数据总条数
      let total = filterList.length
      // 1: 0, 5;  2: 5,5, ; 3: 10 5
      // 根据规律计算出截取值index,以及截取数量就是每页显示的数量pageSize
      let index = (page - 1) * pageSize
      // 根据参数截取指定的数据最后返回
      let list = filterList.splice(index, pageSize)
      return [
        200,
        { total, list }
      ]
    })
    MockAda.onPost('/deleteShopById').reply(config => {
      // 将参数格式化获取到重要分页参数
      let { id, page, pageSize } = JSON.parse(config.data)
      ShopList.list = ShopList.list.filter(item => item.id !== id)
      let filterList = ShopList.list.slice(0)
      // 获取数据总条数
      let total = filterList.length
      // 1: 0, 5;  2: 5,5, ; 3: 10 5
      // 根据规律计算出截取值index,以及截取数量就是每页显示的数量pageSize
      let index = (page - 1) * pageSize
      // 根据参数截取指定的数据最后返回
      let list = filterList.splice(index, pageSize)
      return [
        200,
        { code: 200, list, msg: '删除成功', total }
      ]
    })
  }
}

```

* 这里是后台接口(模拟),所有请求的接口都会被拦截(当成功匹配到),并且开启请求延迟以完成loading动画提高真实性。
* 根据传递的参数进行相应过滤,返回前端需要的数据,由于接收到的数据是字符串,需要用`JSON.parse`转换成对象类型,注释很详细,不多做解释了。


> views/*.vue,存放了各页面文件
* Home.vue
* Login.vue
* UserList.vue
* ShopList.vue


```
<template>
  <div>
    <el-row type="flex" class="page">
      <!-- 侧边栏导航 -->
      <el-col :span="4" tag="section">
        <aside class="slider-aside">
          <el-menu default-active="2" class="el-menu-vertical-demo" unique-opened :router="true" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>数据管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="userList">用户列表</el-menu-item>
                <el-menu-item index="shopList">商家列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-plus"></i>
                <span>添加数据</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">添加商铺</el-menu-item>
                <el-menu-item index="3-2">添加商品</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-star-on"></i>
                <span>图表</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">用户分布</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </aside>
      </el-col>
      <!-- 右侧部分 -->
      <el-col :span="20" tag="section">
        <!-- header -->
        <header class="header">
          <!-- 面包屑 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index">{{item.meta.cname}}</el-breadcrumb-item>
          </el-breadcrumb>
          <!-- 用户下拉菜单 -->
          <el-dropdown @command="handleCommand">
            <div class="user-head">
              <div class="user-img">
                <img :src="sysAvatar" alt="">
              </div>
              <div>{{sysName}}</div>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="goHome">首页</el-dropdown-item>
              <el-dropdown-item disabled>私信 (开发中)</el-dropdown-item>
              <el-dropdown-item command="logOut" divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </header>
        <!-- main 路由出口,根据路由显示页面 -->
        <main class="main">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </main>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      sysName: '',
      sysAvatar: ''
    }
  },
  // 在当前路由改变，但是该组件被复用时调用,例如: 在 /foo/1 和 /foo/2 之间跳转的时候
  beforeRouteUpdate (to, from, next) {
    next()
  },
  methods: {
    handleCommand (command) {
      if (command === 'goHome') {
        this.$router.push({name: 'Home'})
      } else if (command === 'logOut') {
        this.$confirm('是否确认退出?', '提示', {
          cancelButtonText: '取消',
          confirmButtonText: '确定',
          showClose: false,
          type: 'warning'
        }).then(() => {
          sessionStorage.removeItem('user')
          this.$router.push({name: 'Login'})
        }).catch(() => {})
      }
    }
  },
  created () {
    let user = sessionStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      this.sysName = user.username
      this.sysAvatar = user.avatar
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .page{
    height: 100%;
  }
  .slider-aside{
    height: 100%;
    background-color: #545c64;
  }
  .header{
    height: 60px;
    padding: {
      left: 20px;
      right: 20px;
    }
    background-color: #eff2f7;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user-head{
    display: flex;
    justify-content: center;
    align-items: center;
    .user-img{
      width: 40px;
      border-radius: 50%;
      margin-right: 15px;
      overflow: hidden;
    }
  }
  .main{
    padding: 25px;
  }
</style>

```

* 使用了`ElementUi`的组件,分页,表格,面包屑,解释起来稍有繁琐,面对面解释比较好。
* 项目内容不多,但使用了不少库和组件。




















   