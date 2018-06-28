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
