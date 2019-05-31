<template>
  <div class="comm-container">
    <mt-header class="mint-header" fixed
               title="头部共用标题栏"></mt-header>
    <div class="app-content">11111</div>
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">我的</span>
      </a>
    </nav>

  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        selected: 'selected'
      }
    },
    methods: {
      selectPage(page) {
        if (page == "home") {

        }

      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  * {
    margin 0
    padding 0
  }

  .comm-container
    .app-content
      margin-top 40px
      background bisque
      height 50px
      width 100%



</style>
