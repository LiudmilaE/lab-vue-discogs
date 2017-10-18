<!-- TODO how to connect artists from SearchBar??? -->
<template>
	<div v-if="artists.length>0" >
		<ul>
			<li v-for="artist in artists">{{artist.title}}<a href="#"><img src="artist.thumb"></a></li>
		</ul>

		Hello from thumbnails
		
	</div>
</template>

<script>
	//import ThumbnailsList from '@/components/ThumbnailsList'

	export default {
		data () {
			return {
				artists: []
			}
		},
	}
</script>