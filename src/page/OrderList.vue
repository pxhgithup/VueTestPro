<template>
    <div>订单列表</div>
</template>

<script>
    export default {
        name: "",
      data(){
          return{
            id:""
          }
      },
      created() {
          console.log(this.$route.query.id)
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
