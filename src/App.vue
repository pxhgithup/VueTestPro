<template>
  <div class="comm-container">
    <!--<mt-header class="mint-header"
               title={{this.commtitle}} ></mt-header>-->
    <div class="comm-container-title">{{commtitle}}</div>

    <router-view></router-view>

    <nav class="mui-bar mui-bar-tab">
      <!--首页-->
      <router-link class="mui-tab-item " to="/home">
        <span class="mui-icon mui-icon-home" @click="selectPage(1)"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <!--消息-->
      <router-link class="mui-tab-item" to="/mesage">
        <span class="mui-icon mui-icon-email" @click="selectPage(2)"><span class="mui-badge">0</span></span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <!--购物车-->
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart" @click="selectPage(3)"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <!--我的-->
      <router-link class="mui-tab-item" to="/mine">
        <span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled" @click="selectPage(4)"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>

  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        commtitle: '首页'
      }
    },
    methods: {
      selectPage(page) {
        switch (page) {
          case 1:
            this.commtitle='首頁'
            break
          case 2:
            this.commtitle='消息'
            break
          case 3:
            this.commtitle='购物车'
            break
          case 4:
            this.commtitle='我的'
            break

        }
        console.log("当前页:" + page);

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
    .comm-container-title
      height 3rem
      color #fff
      width 100%
      background #007aff
      text-align center
      line-height 3rem

    .app-content
      margin-top 40px
      background bisque
      height 50px
      width 100%


</style>
