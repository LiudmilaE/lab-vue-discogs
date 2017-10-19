<template>
	<div class="container">
		<div class="field has-addons">
			<div class="control is-expanded">
				<input class="input" type="text" placeholder="Find an artist" v-model="query">
			</div>
			<div class="control">
				<a class="button is-info" @click="search">
					Search
				</a>
			</div>
		</div>
		<div v-if="artists.length>0">
		<thumbnails-list :artist="artist" v-for="artist in artists"></thumbnails-list>
		</div>
	</div>
</template>

<script>
	import ThumbnailsList from '@/components/ThumbnailsList'
	import { searchArtists,  } from '@/api'

	export default {
		data () {
			return {
				artists: [],
				query: ''
			}
		},
		components: {
			ThumbnailsList,
		},
		methods: {
			search () {
				searchArtists(this.query).then( artists => {
					if (artists) {
						this.artists = artists;
					} else {
						this.$router.push('/');
					}
				});
			}
		}
	}
</script>