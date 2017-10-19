<template>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://www.discogs.com" target="_blank">
          <img src="https://s.discogs.com/images/discogs-white.png?5" alt="Discorg">
        </a>

        <a class="navbar-item" href="https://github.com/LiudmilaE/lab-vue-discogs" target="_blank">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>

        <button class="button navbar-burger burger" data-target="navMenuDropping">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div id="navMenuDropping" class="navbar-menu">
        
      </div>
    </nav>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
  }
</script>