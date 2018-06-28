<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="full-page"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" type="text/scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  *{
    box-sizing: border-box;
  }
  body,
  ul,
  li{
    margin: 0;
    padding: 0;
  }
  ul,
  li{
    list-style: none;
  }
  .full-page{
    height: 100vh;
  }
  img{
    width: 100%;
    display: block;
  }
  h1,
  h2,
  h3{
    margin: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .pagination{
    padding: 25px 0;
    display: flex;
    justify-content: flex-end;
  }
</style>
