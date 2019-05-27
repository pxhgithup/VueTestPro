<template>
  <div>
    <div class="daohang">
      <router-link to="/orderlist?id=10">订单列表</router-link>
      <router-link to="/userinfo">用户中心</router-link>
      <router-view></router-view>
    </div>

    <input type="button" value="返回" @click="goback()">
  </div>

</template>

<script>
    export default {
      name: "HomeIndex",
      methods:{
          goback(){
            this.$router.go(-1)
          }
      },
      watch:{//监听数据变化

        '$route.path':function (str,oldstr) {
          console.log(str+"---"+oldstr)
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .daohang
    height 10rem
    width 100%
    background bisque
    text-align center
    line-height 3rem
</style>
