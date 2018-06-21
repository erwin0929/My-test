import Vue from 'vue'
import Vuex from 'vuex'
import userList from './modules/userList'
import login from './modules/login'

Vue.use(Vuex)

// 导出该对象,并由main.js注入到子组件中
export default new Vuex.Store({
  modules: {
    login,
    userList
  }
})
