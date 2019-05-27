<template>
  <div id="app">
    <div class="mclick1">点击跳转</div>
    <div class="child-content">
      <span class="getchild-data" @click="getChildData()">获取子组件数据</span><span class="getchild-right"></span>
    </div>
    <mt-button type="primary" size="large">MintUi</mt-button>

     <!--<router-link to="/goodslist">111111111111111</router-link>
      <router-link to="/account">22222222222222222</router-link>
      <router-view></router-view>
-->
  </div>
</template>

<script>
  import test, {hello} from './assets/js/test';
  export default {
    name: 'App',
    data() {
      return {}
    },
    methods: {
      getChildData() {
        console.log("获取子组件数据" + JSON.stringify(test.cs) + hello);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px

    .mclick1
      width 100%
      height 2rem
      line-height 2rem
      color #fff
      background #2c3e50
      margin auto


    .child-content
      width 100%
      height 2rem
      line-height 2rem
      margin-top 1rem

      .getchild-data
        width 50%
        color #fff
        background #2c3e50
        display block

      .getchild-right
        width 50%
        display block
</style>
