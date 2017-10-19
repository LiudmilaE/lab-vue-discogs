<template>
	<div>
		<nav-bar></nav-bar>
		<br>
		<div  class="container">
			<h2 class="title">{{ artist.name }}</h2>
			<article class="media" v-if="artist">
			  <figure class="media-left">
			    <p class="image is-64x64">
			      <img :src="artist.images[0].resource_url">
			    </p>
			  </figure>
			  <div class="media-content">
			    <div class="content">
			      <p>
			        <strong>{{artist.name}}</strong>
			        <br>
			        {{artist.profile}}
			        <br>
			        <small>{{artist.realname}}</small>
			      </p>
			      <!--TODO Releases/Albums -->
			      <a :href="artist.releases_url">Releases</a>
			    </div>
			  </div>
			</article>
			<div v-else>
				Loading...
			</div>
		</div>
		<br>
	</div>
</template>

<script>
	import { getArtist } from '@/api'
	import NavBar from '@/components/NavBar'

	export default {
		data() {
			return {
				artist: null,
			};
		},
    	components: {
    		NavBar
    	},
		created() {
			getArtist(this.$route.params.id).then(artist => {
				if (artist) {
					this.artist = artist;
					console.log(artist);
				} else {
					this.$router.push('/');
				}
			});
		},
	}
</script>