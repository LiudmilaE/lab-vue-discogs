<template>
	<router-link :to="'/artists/' + artist.id" :artist="artist">
    <img :src="artist.thumb"></router-link>	
</template>

<script>
	//import ThumbnailsList from '@/components/ThumbnailsList'
	export default {
		data: {
			function() {
				return {}
			}
		},
		props: ['artist']
	}
</script>