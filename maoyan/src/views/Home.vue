<template>
  <div class="home">
    <Ratation/>
    <New-hot/>
  </div>
</template>

<script>
import Ratation from '@/components/firstpage/ratation.vue'
import NewHot from '@/components/firstpage/newhot.vue'
export default {
  name: 'Home',
  components: {
    Ratation,
    NewHot
  }
}
</script>

<style scoped>
</style>
