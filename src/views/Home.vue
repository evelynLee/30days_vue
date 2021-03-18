<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HomeContent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeContent from '@/components/HomeContent.vue'

export default {
  name: 'Home',
  components: {
    HomeContent
  }
}
</script>
