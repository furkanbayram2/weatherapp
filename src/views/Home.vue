<template>
  <div class="home">
    <Header/>
    <Search/>
    <Result/>
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Search from '@/components/Search.vue'
import Result from '@/components/Result.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    Header,
    Search,
    Result,
    HelloWorld
  }
}
</script>
