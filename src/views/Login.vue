
<!-- 登录页 -->
<template>
  <div class="login-page">
    <section class="dailog-box">
      <h2 class="title">后台管理系统</h2>
      <div class="login-dailog">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" clearable placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input v-model="loginForm.pwd" type="password" clearable placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="log-btn" type="primary" @click="submitForm" :loading="loading">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      loading: false,
      loginForm: {
        username: 'admin',
        pwd: 'admin'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名' }
        ],
        pwd: [
          { required: true, message: '请输入密码' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          let { username, pwd } = this.loginForm
          axios.post('/login', { username, pwd })
            .then(response => {
              let { code, msg, userInfo } = response.data
              if (code !== 200) {
                this.$notify.error({
                  title: '错误',
                  message: msg,
                  duration: 1500
                })
              } else {
                delete userInfo.pwd
                sessionStorage.setItem('user', JSON.stringify(userInfo))
                this.$router.push({name: 'Home'})
              }
              this.loading = false
            })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .login-page{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .log-btn{
    width: 100%;
    display: block;
  }
  .title{
    $h: 35px;
    font-size: 23px;
    text-align: center;
    padding: 35px 0;
    color: #000;
  }
  .dailog-box{
    border: 1px solid #eaeaea;
    border-radius: 5px;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login-page{
    background-color: #fff;
  }
  .login-dailog{
    border-radius: 7px;
    width: 370px;
    padding: 25px 30px 25px;
  }
  .signup{
    width: 100%;
    display: block;
  }
</style>
