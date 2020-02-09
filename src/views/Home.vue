<template>
  <div class="home container">
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

export default {
  name: 'home',
  components: {
    Header,
    Search,
    Result,
  }
}
</script>
