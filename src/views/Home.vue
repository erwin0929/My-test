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
          <router-view></router-view>
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
