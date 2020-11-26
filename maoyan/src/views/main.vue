<template>
  <div class="main">
      <header><Head :msg="$route.path"/></header>
      <main><router-view/></main>
      <footer><Footer/></footer>
  </div>
</template>

<script>
import Head from '@/components/head'
import Footer from '@/components/footer'
export default {
    components:{
        Head,
        Footer
    },
    created(){
        console.log(this.$route.path)
    }
}
</script>

<style scoped>

</style>