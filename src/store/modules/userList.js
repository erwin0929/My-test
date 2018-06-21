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
