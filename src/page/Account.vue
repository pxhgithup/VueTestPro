<template>
  <div>
    <div class="account-content">用户金额</div>
    <router-link to="/account/login">登录</router-link>
    <router-link to="/account/register">注册</router-link>
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: ""
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
   .account-content
     margin-top 5rem
</style>
