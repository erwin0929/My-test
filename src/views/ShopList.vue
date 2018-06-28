<!-- 商家列表 -->
<template>
  <div>
    <el-table class="table-box" :data="list">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.shopName }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="商品 ID"
        prop="id">
      </el-table-column>
      <el-table-column
        label="商品名称"
        prop="shopName">
      </el-table-column>
      <el-table-column
        label="描述"
        prop="desc">
      </el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope123">
          <el-button size="mini" @click="handleEdit(scope123.$index, scope123.row)">编辑</el-button>
          <el-button size="mini" @click="handleEdit(scope123.$index, scope123.row)">添加</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope123.row.id)">删除</el-button>
        </template>
      </el-table-column>
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
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ShopList',
  data () {
    return {
      loading: {
        abc: 123
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next()
  },
  beforeRouteLeave (to, from, next) {
    // alert('即将离开shopList组件')
    next()
  },
  computed: {
    ...mapState({
      list: state => state.shopList.list,
      page: state => state.shopList.page,
      pageSize: state => state.shopList.pageSize,
      total: state => state.shopList.total
    })
  },
  methods: {
    handleEdit (index, row) {
    },
    // 删除
    handleDelete (id) {
      this.$confirm('确认删除?', '提示', {
        cancelButtonText: '取消',
        confirmButtonText: '确定',
        showClose: false,
        type: 'warning'
      }).then(() => {
        this.deleteAny({
          id,
          page: this.page,
          pageSize: this.pageSize
        })
      }).catch(() => {})
    },
    handleCurrentChange (val) {
      this.$store.state.shopList.page = val
      this.getShopList()
    },
    handleSizeChange (val) {
      this.$store.state.shopList.pageSize = val
      this.getShopList()
    },
    ...mapActions([
      'getShopList',
      'deleteAny'
    ])
  },
  created () {
    this.getShopList()
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .table-box{
    border: 1px solid #dfe6ec;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
