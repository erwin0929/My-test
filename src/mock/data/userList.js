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
