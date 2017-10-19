<template>
  <div>
    <nav-bar></nav-bar>
    <br>
    <div class="container">
      <h2 class="title">Home Page</h2>
      <search-bar></search-bar>
      <br>
    </div>
  </div>
</template>

<script>
  import SearchBar from '@/components/SearchBar'
  import NavBar from '@/components/NavBar'

  export default {
    data () {
      return {
      }
    },
    components: {
      SearchBar,
      NavBar
    }
  }
</script>