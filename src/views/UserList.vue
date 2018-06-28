<!-- 用户列表 -->
<template>
  <div>
    <!-- 表格 -->
    <el-table :data="list" border :highlight-current-row="false">
      <el-table-column prop="id" label="序号" width="100"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="city" label="地址"></el-table-column>
    </el-table>
    <!-- 分页器 -->
    <div class="pagination">
      <el-pagination background
                     layout="prev, sizes, pager, next, jumper"
                     @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"
                     :page-sizes="[5, 10, 15, 20]"
                     :page-size="pageSize"
                     :current-page="page"
                     :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'UserList',
  data () {
    return {
      show: false
    }
  },
  computed: {
    // 读取state中数据
    ...mapState({
      list: state => state.userList.list,
      page: state => state.userList.page,
      pageSize: state => state.userList.pageSize,
      total: state => state.userList.total
    })
  },
  methods: {
    ...mapActions([
      'getUserList'
    ]),
    // 点击页码更改当前页,同时读取数据
    handleCurrentChange (val) {
      this.$store.state.userList.page = val
      this.getUserList()
    },
    // 点击每页显示数量,拉取数据
    handleSizeChange (val) {
      this.$store.state.userList.pageSize = val
      this.getUserList()
    }
  },
  created () {
    this.getUserList()
  }
}
</script>

<style scoped lang="scss" type="text/scss">
</style>
