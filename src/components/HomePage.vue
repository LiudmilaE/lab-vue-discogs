<template>
  <div class="container">
    <h2 class="title">Home Page</h2>
    {{ greeting }}
    <search-bar></search-bar>
  </div>
</template>

<script>
  import SearchBar from '@/components/SearchBar'

  export default {
    data () {
      return {
        greeting: 'Hello'
      }
    },
    components: {
      SearchBar
    }
  }
</script>