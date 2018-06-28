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
